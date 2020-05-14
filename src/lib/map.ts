import { Attribution, OverviewMap, Zoom } from "ol/control"
import { Draw, Modify } from "ol/interaction"
import { GeocodingResponseObject, Job } from "../types/customTypes"
import { Store, newDefaultStore } from "../state/store"

import Bar from "ol-ext/control/Bar"
import BaseLayer from "ol/layer/Base"
import Button from "ol-ext/control/Button"
import Charon from "../apis/charon"
import { Extent } from "ol/extent"
import Feature from "ol/Feature"
import FullScreen from "ol/control/FullScreen"
import GeoJSON from "ol/format/GeoJSON"
import Geometry from "ol/geom/Geometry"
import JobLayer from "./jobLayer"
import { Map as OLMap } from "ol"
import { OSMLayer } from "../apis/tileLayers"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import View from "ol/View"
import { countryLayer } from "./countryLayer"
import { countryLayerStyle } from "../styles/countryStyle"
import { filterJobs } from "./geometryFilter"
import { fromLonLat } from "ol/proj"
import polygonStyle from "../styles/polygon"
import { shiftKeyOnly } from "ol/events/condition"

/**
 * Initial map configuration options.
 *
 * @interface MapOpts
 */
export interface MapOpts {
  /**
   * Provide this if you want to show a specifig area of the map on startup.
   * This will be overridden by view.
   *
   * @type {Extent}
   * @memberof MapOpts
   */
  extent?: Extent
  /**
   * Initial latitude, longitude and zoom level. Default = { lat: 45, lon: 0, zoom: 2 }.
   * Providing this option will override extent.
   *
   * @type {{
   * lat: number
   * lon: number
   * zoom: number
   * }}
   * @memberof MapOpts
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
 * @class Map
 */
export default class Map {
  /**
   * Used to find the correct HTMLElement to attach the map.
   *
   * @private
   * @type {string}
   * @memberof Map
   */
  private mapID: string
  public olmap: OLMap
  public store: Store
  private JobLayer: JobLayer
  private zIndices: Record<string, number>

  /**
   *Creates an instance of Map.
   *
   * @param mapID
   * @param [opts]
   * @memberof Map
   */
  public constructor(mapID: string, opts?: MapOpts) {
    this.mapID = mapID
    this.zIndices = {
      tiles: 0,
      countries: 10,
      circleSelect: 10,
      jobs: 1000,
    }
    this.store = newDefaultStore()

    this.olmap = this.build(opts || {})
    this.addControls()
    this.addCircleSelect()
    this.addCountryLayer()
    this.buildJobLayer()

    this.addGeometriesHook()
    this.addJobFilterHook()
    this.addVisibleJobsHook()
  }

  /**
   * Runs a user search for a place, country, etc.
   * This requires the backend to be running and configured properly via environmental variables.
   * See ../apis/charon.ts for more info.
   *
   * @param query
   * @returns
   * @memberof Map
   */
  async search(query: string): Promise<void> {
    if (query.length > 0) {
      const geojson = await new Charon().forwardGeocoding(query)
      if (geojson === undefined) {
        console.error("Could not find " + query)
        return
      }
      this.addFeatureFromGeojson(geojson)
      const layers = this.getLayersByNames(["featureLayer"])
      if (layers.length === 1) {
        this.zoomToLayer(layers[0])
      }
    }
  }

  /**
   * Subscribes to the store to update the jobs on the map.
   *
   * @memberof Map
   */
  addVisibleJobsHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_VISIBLEJOBS"], (state) => {
      this.JobLayer.setJobs(state.visibleJobs)
    })
  }

  /**
   * Subscribes to the store to update the selected countries on the map.
   *
   * @memberof Map
   */
  addGeometriesHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_SELECTEDGEOMETRIES", "STATE_CHANGE_ALLJOBS"], (state) => {
      this.countryLayerFromGeometry(state.selectedGeometries)
    })
  }

  /**
   * Subscribes to the store to update state's visible jobs.
   * Whenever the jobs change, like jobs being added or removed, or if the user (de)selects geometry, we need to update the shown jobs.
   *
   * @memberof Map
   */
  addJobFilterHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_ALLJOBS", "STATE_CHANGE_SELECTEDGEOMETRIES"], (state) => {
      let newShownJobs: Job[] = []

      if (this.store.getState().selectedGeometries.length === 0) {
        newShownJobs = state.allJobs
      } else {
        newShownJobs = filterJobs(state.allJobs, {
          geometries: state.selectedGeometries,
        })
      }
      this.store.dispatch("setVisibleJobs", newShownJobs)
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

    if (this.olmap.getLayers().getArray().indexOf(layer) === -1 || overwrite) {
      if (name !== "") {
        layer.set("name", name)
      }
      this.olmap.addLayer(layer)
    }
  }

  /**
   * TODO: refactor countryLayer.
   *
   * @memberof Map
   */
  addCountryLayer(): void {
    countryLayer(this)
  }

  /**
   * Create a new Layer to display a country.
   *
   * TODO: Fix geometry type
   * TODO: Refactor this with addFeatureFromGeojson.
   *
   * @param  geometry
   * @returns
   * @memberof Map
   */
  public countryLayerFromGeometry(geometry: Record<string, any>[]): VectorLayer {
    const layerName = "countries"
    const [layer, wasCreated] = this.getOrCreateLayer(layerName, {
      style: polygonStyle(false),
    })
    if (!wasCreated) {
      layer.getSource().clear()
    }
    const source = new VectorSource()
    const features = geometry.map((g) => {
      return new Feature({
        geometry: g,
      })
    })
    source.addFeatures(features)
    layer.setSource(source)
    if (wasCreated) {
      this.addLayer(layer, { name: layerName })
    }
    layer.setZIndex(this.zIndices.countries)
    return layer
  }

  /**
   * Create a featurelayer from geojson data
   * TODO: Refactor this with countryLayerFromGeometry.
   *
   * @param geojson
   * @returns
   * @memberof Map
   */
  public addFeatureFromGeojson(geojson: GeocodingResponseObject): VectorLayer {
    const layerName = "featureLayer"
    const [layer, wasCreated] = this.getOrCreateLayer(layerName, {
      style: countryLayerStyle(true),
    })
    if (!wasCreated) {
      layer.getSource().clear()
    }
    const source = new VectorSource({
      features: new GeoJSON({ featureProjection: "EPSG:3857" }).readFeatures(geojson),

      // url: new Charon().forwardGeocodingURL(search),
      // format: new GeoJSON(),
    })
    layer.setSource(source)

    if (wasCreated) {
      this.addLayer(layer, { name: layerName })
    }
    return layer
  }

  /**
   * Add sidebar controls to the map.
   * TODO: Move this outside of the class.
   *
   * @private
   * @returns
   * @memberof Map
   */
  private addControls(): any {
    const mainbar = new Bar()
    mainbar.setPosition("left-top")

    this.olmap.addControl(new FullScreen())
    this.olmap.addControl(mainbar)
    mainbar.addControl(this.circleSelectRemoveButton())
    return mainbar
  }

  /**
   * Create a button to remove the circle selection.
   * TODO: Move this outside of the class.
   *
   * @private
   * @returns
   * @memberof Map
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
   * @memberof Map
   */
  private removeLayersByNames(names: string[]): void {
    const layers = this.getLayersByNames(names)
    layers.forEach((layer: BaseLayer) => {
      this.olmap.removeLayer(layer)
    })
  }

  /**
   * Moves the viewport to a center and zoom level.
   * Can be used to zoom in on clusters.
   *
   * @private
   * @param  center
   * @param [zoom=16]
   * @memberof Map
   */
  private zoomTo(center: number[], zoom = 16): void {
    this.olmap.getView().animate({
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
   * @memberof Map
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
          const filteredJobs = filterJobs(this.store.getState().allJobs, {
            geometries: this.store.getState().selectedGeometries,
            circle: circle,
          })
          this.store.dispatch("setVisibleJobs", filteredJobs)
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
    this.olmap.addLayer(drawLayer)
    const modify = new Modify({
      source: drawLayer.getSource(),
    })
    this.olmap.addInteraction(modify)

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
    this.olmap.addInteraction(draw)
  }

  /**
   * Get or create a new layer to draw on.
   *
   * @private
   * @param clear
   * @returns
   * @memberof Map
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
   * @memberof Map
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
   * @memberof Map
   */
  private getLayersByNames(names: string[]): VectorLayer[] {
    const allLayers = this.olmap.getLayers()
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
   * @memberof Map
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
   * @memberof Map
   */
  private createView(opts: MapOpts): any {
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
   * @memberof Map
   */
  private build(opts: MapOpts): OLMap {
    const rasterLayer = new OSMLayer().getLayer()
    // const vectorLayer = new MapboxLayer().getLayer()
    const controls = [
      new Attribution({
        collapsible: true,
      }),
      new OverviewMap({
        layers: [rasterLayer],
      }),
      new Zoom(),
    ]

    const olmap = new OLMap({
      target: this.mapID,
      controls: controls,
      view: this.createView(opts),
    })
    this.olmap = olmap
    this.addLayer(rasterLayer, { name: "rasterTiles" })
    // this.addLayer(vectorLayer, { name: "vectorTiles" })

    return olmap
  }

  /**
   * TODO: Refactor  #AT-15.
   *
   * @private
   * @memberof Map
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
   * @memberof Map
   */
  public setJobs(jobs: Job[]): void {
    this.store.dispatch("setJobs", jobs)
  }

  /**
   * Instantly set the map viewport to center on lat/lon and zoom level.
   *
   * @param  lon
   * @param  lat
   * @param  zoom
   * @memberof Map
   */
  public setView(lon: number, lat: number, zoom: number): void {
    this.olmap.getView().setCenter([lat, lon])
    this.olmap.getView().setZoom(zoom)
  }

  /**
   * Calculate the required viewport to display the entire layer and set the viewport accordingly.
   *
   * @param layer
   * @memberof Map
   */
  public zoomToLayer(layer: VectorLayer): void {
    const extent = layer.getSource().getExtent()
    this.zoomToExtent(extent)
  }

  /**
   * Move the viewport to show the entire extent.
   * This will zoom in or out as necessary.
   *
   * @param extent
   * @memberof Map
   */
  public zoomToExtent(extent: Extent): void {
    this.olmap.getView().fit(extent, { duration: 1500 })
  }
}
