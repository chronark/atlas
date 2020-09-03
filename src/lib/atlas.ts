import Bar from "ol-ext/control/Bar"
import BaseLayer from "ol/layer/Base"
import Button from "ol-ext/control/Button"
import Charon from "../apis/charon"
import FullScreen from "ol/control/FullScreen"
import Geometry from "ol/geom/Geometry"
import JobLayer from "./jobLayer"
import polygonStyle from "../styles/polygon"
import SelectionLayer from "./selectionLayer"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import View from "ol/View"
import { Attribution, OverviewMap, Zoom } from "ol/control"
import { Draw, Modify, Select } from "ol/interaction"
import { Extent, boundingExtent, buffer } from "ol/extent"
import { filterJobs } from "./geometryFilter"
import { fromLonLat, transformExtent } from "ol/proj"
import { Job, SingleLocation, Area } from "../types/customTypes"
import { Map, Feature, Tile } from "ol"
import { OSMLayer } from "../apis/tileLayers"
import { SelectEvent } from "ol/interaction/Select"
import { shiftKeyOnly } from "ol/events/condition"
import { State, Store, globalStore } from "../state/store"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import { isSingleLocation } from "./util"
import { metrics } from "./tracking"

/**
 * Initial map configuration options.
 *
 * @interface AtlasOpts
 */
export interface AtlasOpts {
  /**
   * Provide this if you want to show a specifig area of the map on startup.
   * This will be overridden by view.
   *
   * @memberof AtlasOpts
   */
  extent?: Extent
  /**
   * Initial latitude, longitude and zoom level. Default = { lat: 45, lon: 0, zoom: 2 }.
   * Providing this option will override extent.
   *
   * @memberof AtlasOpts
   */
  view?: {
    lat: number
    lon: number
    zoom: number
  }
}

/**
 * Main Map class and entrypoint.
 *
 * @class Atlas
 */
export default class Atlas {
  /**
   * Used to find the correct HTMLElement to attach the map.
   *
   * @private
   * @memberof Atlas
   */
  private mapID: string
  public map: Map
  public store: Store
  private JobLayer: JobLayer
  private zIndices: Record<string, number>
  private selectionLayer: SelectionLayer

  /**
   *Creates an instance of Map.
   *
   * @param mapID
   * @param [opts]
   * @memberof Atlas
   */
  public constructor(mapID: string, opts?: AtlasOpts) {
    this.mapID = mapID
    this.zIndices = {
      tiles: 0,
      countries: 10,
      circleSelect: 10,
      jobs: 1000,
    }

    this.map = this.build(opts || {})
    this.selectionLayer = this.createSelectionLayer()
    this.map.addLayer(this.selectionLayer)
    this.addControls()
    this.addCircleSelect()
    this.buildJobLayer()

    this.addGeometriesHook()
    this.addJobFilterHook()
    this.addVisibleJobsHook()

    this.addCountries()

    this.addSelect()
  }

  /**
   * Subscribe to an event.
   *
   * Events are prefixed by `STATE_CHANGE_` and named after the field that was updated.
   * For example `STATE_CHANGE_VISIBLEJOBS` or `STATE_CHANGE_SELECTEDGEOMETRIES`.
   *
   * This can be used to update external UI like job counters.
   * Also used when the user clicks on a cluster to pass the job array outside of this class.
   * You can also pass in multiple hooks and your callback will be called whenever one of the events fires.
   *
   * @example
   * ```typescript
   * const atlas = new Atlas()
   * atlas.subscribe(["STATE_CHANGE_ALLJOBS"], (state: State) => console.log(state.allJobs))
   * atlas.setJobs(myJobsArray)
   *
   * // you will now see your job array being printed in the console.
   * ```
   *
   * @param hooks - An array of hooks, see ../state/store.ts.
   * @param callback - Gets called with the current state as argument, do whatever you want with it except overwriting it.
   * The state must remain immutable.
   * @memberof Atlas
   */
  public subscribe(hooks: string[], callback: (state: State) => void): void {
    globalStore.events.subscribe(hooks, callback)
  }

  /**
   * Runs a user search for a place, country, etc.
   * This requires the backend to be running and configured properly via environmental variables.
   * See ../apis/charon.ts for more info.
   *
   * @param query
   * @returns
   * @memberof Atlas
   */
  async search(query: string): Promise<void> {
    if (query.length > 0) {
      const geojson = await new Charon().forwardGeocoding(query)
      if (geojson === undefined) {
        console.error("Could not find " + query)
        return
      }
      const features = this.selectionLayer.addFeatureFromGeojson(geojson)
      this.zoomToExtent(features[0].getGeometry().getExtent())
    }
  }
 /**
   * Move the viewport to show the entire extent.
   * This will zoom in or out as necessary.
   *
   * @param extent
   * @memberof Atlas
   */
  public zoomToExtent(extent: Extent): void {
    this.map.getView().fit(extent, { duration: 1500 })
  }

  /**
   * Load initial set of countries and add them to the map without showing them to the user.
   */
  public async addCountries(): Promise<void> {
    const geojson = await fetch(
      "https://raw.githubusercontent.com/openlayers/openlayers/main/examples/data/geojson/countries.geojson",
    ).then((res) => res.json())
    const geometries = SelectionLayer.convertGeoJsonToGeometries(geojson)
    globalStore.dispatch("addGeometries", geometries)
    this.selectionLayer.setFeaturesFromGeometry(geometries)
  }

  /**
   * Add the possibilty to select features.
   *
   * This handles the countries to be selected as well as clicking on job clusters.
   */
  private addSelect(): void {
    const select = new Select()

    this.map.addInteraction(select)
    select.on("select", (e: SelectEvent) => {
      metrics.addSelect()
      // Remove all selected geometries when the user clicks on empty space
      if (e.selected.length === 0) {
        globalStore.dispatch("unselectGeometries", globalStore.getState().selectedGeometries)
      }

      e.target.getFeatures().forEach((f: Feature) => {
        const layerName = select.getLayer(f).get("name")

        switch (layerName) {
          case "cluster": {
            const clickedClusters = f.get("features")
            const clickedJobs: Job[] = clickedClusters.map((f: Feature) => f.get("job"))

            globalStore.dispatch("setSelectedJobs", clickedJobs)
            break
          }

          case "selectionLayer": {
            const geometry = f.getGeometry()
            const isSelected = globalStore.getState().selectedGeometries.includes(geometry)
            if (isSelected) {
              globalStore.dispatch("unselectGeometries", [geometry])
            } else {
              globalStore.dispatch("selectGeometries", [geometry])
            }

            break
          }
        }
      })
    })
  }

  /**
   * Create a new Polygon layer and add the onClick event listener.
   *
   * Will be called once in the constructor.
   *
   * @private
   * @returns A new polygon layer for countries or other areas the user selected.
   * @memberof Atlas
   */
  private createSelectionLayer(): SelectionLayer {
    const selectionLayer = new SelectionLayer()
    return selectionLayer
  }

  /**
   * Subscribes to the store to update the jobs on the map.
   *
   * @memberof Atlas
   */
  addVisibleJobsHook(): void {
    globalStore.events.subscribe(["STATE_CHANGE_VISIBLEJOBS"], (state) => {
      this.JobLayer.setJobs(state.visibleJobs)
    })
  }

  /**
   * Subscribes to the store to update the selected countries on the map.
   *
   * @memberof Atlas
   */
  addGeometriesHook(): void {
    globalStore.events.subscribe(["STATE_CHANGE_SELECTEDGEOMETRIES", "STATE_CHANGE_ALLJOBS"], (state) => {
      this.selectionLayer.setVisibleFeatures(state.selectedGeometries)
    })
  }

  /**
   * Subscribes to the store to update state's visible jobs.
   * Whenever the jobs change, like jobs being added or removed, or if the user (de)selects geometry, we need to update the shown jobs.
   *
   * @memberof Atlas
   */
  addJobFilterHook(): void {
    globalStore.events.subscribe(["STATE_CHANGE_ALLJOBS", "STATE_CHANGE_SELECTEDGEOMETRIES"], (state) => {
      let newShownJobs: Job[] = []

      if (globalStore.getState().selectedGeometries.length === 0) {
        newShownJobs = state.allJobs
      } else {
        newShownJobs = filterJobs(state.allJobs, {
          geometries: state.selectedGeometries,
        })
      }
      globalStore.dispatch("setVisibleJobs", newShownJobs)
    })
  }

  /**
   * Creates a named layer and adds it to the existing openlayers map.
   * By default a layer is not overwritten.
   *
   * @private
   * @param layer - The layer you want to add.
   * @param opts - Configuration options.
   * @param opts.name - The name for the layer. You can later reference the layer by this name.
   * @param opts.overwrite - By default the layer does not overwrite itself.
   */
  private addLayer(layer: BaseLayer, opts: { name?: string; overwrite?: boolean } = {}): void {
    const { name = "", overwrite = false } = opts

    if (this.map.getLayers().getArray().indexOf(layer) === -1 || overwrite) {
      if (name !== "") {
        layer.set("name", name)
      }
      this.map.addLayer(layer)
    }
  }

  /**
   * Add sidebar controls to the map.
   * TODO: Move this outside of the class.
   *
   * @private
   * @returns
   * @memberof Atlas
   */
  private addControls(): any {
    const mainbar = new Bar()
    mainbar.setPosition("left-top")

    this.map.addControl(new FullScreen())
    this.map.addControl(mainbar)
    mainbar.addControl(this.circleSelectRemoveButton())

    return mainbar
  }

  /**
   * Create a button to remove the circle selection.
   * TODO: Move this outside of the class.
   *
   * @private
   * @returns
   * @memberof Atlas
   */
  private circleSelectRemoveButton(): void {
    return new Button({
      html: "R",
      className: "",
      title: "Remove Circle Selection",
      handleClick: () => {
        this.clearSource(this.getDrawLayer())
      },
    })
  }

  /**
   * Remove layers from the map.
   *
   * @private
   * @param names
   * @memberof Atlas
   */
  private removeLayersByNames(names: string[]): void {
    const layers = this.getLayersByNames(names)
    layers.forEach((layer: BaseLayer) => {
      this.map.removeLayer(layer)
    })
  }

  /**
   * Moves the viewport to a center and zoom level.
   * Can be used to zoom in on clusters.
   *
   * @private
   * @param  center
   * @param [zoom=16]
   * @memberof Atlas
   */
  private zoomTo(center: number[], zoom = 16): void {
    this.map.getView().animate({
      center: center,
      zoom: zoom,
    })
  }

  /**
   * Add the possibility to draw a circle on the map.
   *
   * TODO: Refactor this outside of the map class.
   *
   * @private
   * @memberof Atlas
   */
  private addCircleSelect(): void {
    /**
     * Calls the necessary functions to filter through visible jobs after drawing.
     *
     * @param draw
     * @param modify
     */
    const handleCircleSelectEvents = (draw: Draw, modify: Modify): void => {
      /**
       * Retrieve the circle element from the map in case it exists.
       *
       * @returns
       */
      const getCircle = (): Geometry | undefined => {
        const source = this.getDrawLayer().getSource()
        if (source.getFeatures().length === 1) {
          return source.getFeatures()[0].get("geometry")
        }

        return undefined
      }
      /**
       * Update the visible jobs after filtering them.
       */
      const onEnd = (): void => {
        const circle = getCircle()
        if (circle) {
          const filteredJobs = filterJobs(globalStore.getState().allJobs, {
            geometries: globalStore.getState().selectedGeometries,
            circle: circle,
          })
          globalStore.dispatch("setVisibleJobs", filteredJobs)
        }
      }

      draw.on("drawend", () => {
        this.clearSource(this.getDrawLayer())
        onEnd()
      })

      modify.on("modifyend", () => {
        onEnd()
      })
    }

    const drawLayer = this.getDrawLayer(true)
    this.map.addLayer(drawLayer)
    const modify = new Modify({
      source: drawLayer.getSource(),
    })
    this.map.addInteraction(modify)

    const draw = new Draw({
      source: drawLayer.getSource(),
      // @ts-ignore
      type: "Circle",
      wrapX: true,
      condition: shiftKeyOnly,
      // Sets the style during first transformation
      style: polygonStyle(),
    })
    handleCircleSelectEvents(draw, modify)
    this.map.addInteraction(draw)
  }

  /**
   * Get or create a new layer to draw on.
   *
   * @private
   * @param clear
   * @returns
   * @memberof Atlas
   */
  private getDrawLayer(clear?: boolean): VectorLayer {
    let [layer, wasCreated] = this.getOrCreateLayer("drawLayer", {
      source: new VectorSource(),
      // Sets the style after transformation
      style: polygonStyle(),
    })
    layer = layer as VectorLayer
    if (!wasCreated && clear) {
      this.clearSource(layer)
    }
    layer.setZIndex(this.zIndices.circleSelect)
    return layer
  }

  /**
   * Helper function to clear the source of a layer.
   *
   * @private
   * @param  layer
   * @returns
   * @memberof Atlas
   */
  private clearSource(layer: VectorLayer): VectorLayer {
    if (typeof layer.getSource === "function") {
      layer.getSource().clear()
    }
    return layer
  }

  /**
   * Filter all layers by name.
   *
   * @private
   * @param  names
   * @returns
   * @memberof Atlas
   */
  private getLayersByNames(names: string[]): VectorLayer[] {
    const allLayers = this.map.getLayers()
    const filteredLayers: VectorLayer[] = []
    allLayers.forEach((layer) => {
      if (names.includes(layer.get("name"))) {
        filteredLayers.push(layer as VectorLayer)
      }
    })
    return filteredLayers
  }

  /**
   * Try to get a layer by name or create a new one if it doesn't exist.
   *
   * @private
   * @param name
   * @param  opts
   * @returns
   * @memberof Atlas
   */
  private getOrCreateLayer(name: string, opts: Record<string, any>): [VectorLayer, boolean] {
    const layers = this.getLayersByNames([name])
    let layer: VectorLayer, wasCreated: boolean
    switch (layers.length) {
      case 1:
        layer = (layers[0] as unknown) as VectorLayer
        wasCreated = false
        break
      case 0:
        layer = new VectorLayer(opts)
        layer.set("name", name)
        wasCreated = true
        break
      default:
        throw Error(`I found more than one layer with this name: ${name}`)
    }
    return [layer, wasCreated]
  }

  /**
   * Create an initial viewport in the following order:
   *
   * 1. From a specified `view` object in mapOpts.
   * 2. From a specified `extent` onject
   * 3. If neither options were given, create a default view centered on europe.
   *
   * @private
   * @param opts - View configuration should be in this object.
   * @returns  The View object for initial map rendering.
   * @memberof Atlas
   */
  private createView(opts: AtlasOpts): any {
    if (opts.view) {
      return new View({
        center: fromLonLat([opts.view.lon, opts.view.lat]),
        zoom: opts.view.zoom,
      })
    } else if (opts.extent) {
      const view = new View()
      view.fit(opts.extent)

      return view
    } else {
      return new View({
        center: fromLonLat([0, 45]),
        zoom: 2,
      })
    }
  }

  /**
   * Create the actual map canvas.
   * Loads in tiles and displays the initial viewport.
   *
   * @private
   * @param opts
   * @returns
   * @memberof Atlas
   */
  private build(opts: AtlasOpts): Map {
    const source = new OSM()

    source.on("tileloadstart", () => {
      metrics.addtileLoad()
    })

    const rasterLayer = new TileLayer({
      source,
    })

    // const rasterLayer = new OSMLayer().getLayer()
    // const vectorLayer = new MapboxLayer().getLayer()
    const controls = [
      new Attribution({
        collapsible: true,
      }),
      new OverviewMap({
        layers: [new TileLayer({source: new OSM()})],
      }),
      new Zoom(),
    ]

    const map = new Map({
      target: this.mapID,
      controls: controls,
      view: this.createView(opts),
    })
    this.map = map
    this.addLayer(rasterLayer, { name: "rasterTiles" })
    // this.addLayer(vectorLayer, { name: "vectorTiles" })

    return map
  }

  /**
   * TODO: Refactor  #AT-15.
   *
   * @private
   * @memberof Atlas
   */
  private buildJobLayer(): void {
    this.JobLayer = new JobLayer(60)
    this.JobLayer.animatedCluster.setZIndex(this.zIndices.jobs)
    this.addLayer(this.JobLayer.animatedCluster, { name: "cluster" })
    this.addLayer(this.JobLayer.areas, { name: "areas" })
  }

  /**
   * Loads new jobs into the store.
   *
   * This will overwrite the old ones, so please merge your jobs before if you wish to only add jobs.
   *
   * @param jobs
   * @memberof Atlas
   */
  public setJobs(jobs: Job[]): void {
    globalStore.dispatch("setJobs", jobs)
  }

  /**
   * Instantly set the map viewport to center on lat/lon and zoom level.
   *
   * @param  lon
   * @param  lat
   * @param  zoom
   * @memberof Atlas
   */
  public setView(lon: number, lat: number, zoom: number): void {
    this.map.getView().setCenter([lat, lon])
    this.map.getView().setZoom(zoom)
  }

  /**
   * Move the viewport to show the entire extent.
   * This will zoom in or out as necessary.
   *
   * The new view is set to contain all individual job locations.
   *
   * @param locations
   * @memberof Atlas
   */
  public zoomToLocationCluster(locations: SingleLocation[]): void {
    const coordinates = locations.map((loc) => {
      return [loc.lon, loc.lat]
    })

    const extent = transformExtent(boundingExtent(coordinates), "EPSG:4326", "EPSG:3857")

    this.zoomToExtent(buffer(extent, 100_000 / this.map.getView().getZoom()))
  }
}
