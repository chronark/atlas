import { Attribution, OverviewMap, Zoom } from "ol/control"
import { Draw, Modify } from "ol/interaction"
import { GeocodingResponseObject, Job } from "../types/customTypes"
import { Store, newDefaultStore } from "../state/store"
import { MapBrowserEvent, Map as OLMap } from "ol"
import { updateCountryLayer } from "./countryLayer"
import Bar from "ol-ext/control/Bar"
import BaseLayer from "ol/layer/Base"
import Button from "ol-ext/control/Button"
import Charon from "../apis/charon"
import { Extent } from "ol/extent"
import Feature, { FeatureLike } from "ol/Feature"
import FullScreen from "ol/control/FullScreen"
import GeoJSON from "ol/format/GeoJSON"
import Geometry from "ol/geom/Geometry"
import JobLayer from "./jobLayer"

import { OSMLayer } from "../apis/tileLayers"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import View from "ol/View"
import { countryLayerStyle } from "../styles/countryStyle"
import { filterJobs } from "./geometryFilter"
import { fromLonLat } from "ol/proj"
import { log } from "./logger"
import polygonStyle from "../styles/polygon"
import { shiftKeyOnly, click } from "ol/events/condition"
import Select from "ol/interaction/Select"

export default class Map {
  private mapID: string
  public olmap: OLMap
  public store: Store
  private JobLayer: JobLayer
  private zIndices: Record<string, number>

  public constructor(mapID: string) {
    log.debug("Initializing map", { mapID })
    this.mapID = mapID
    this.zIndices = {
      tiles: 0,
      countries: 10,
      circleSelect: 10,
      jobs: 1000,
    }
    this.store = newDefaultStore()

    this.olmap = this.buildMap()
    this.addControls()
    this.addCircleSelect()
    this.buildJobLayer()

    this.addGeometriesHook()
    this.addJobFilterHook()
    this.addVisibleJobsHook()
    this.addSelect()
  }

  /**
   * Create an object with all features the user clicked on.
   * ForEachFeatureAtPixel will be used to make a with the feature and its layer.
   * So we basically generated a list with [layer, feature] elements.
   * This function will turn it into an object with layer names as keys and features
   * 
   * Since clusters return a FeatureLike object that is basically a wrapper for a list
   * of individual features, we catch that case and unwrap the FeatureLike.
   * 
   * 
   * as values.
   *
   * @private
   * @param e - An event that contains the pixel values where the user clicked.
   * @returns An Object with layers as keys and a list of features as values.
   * @memberof Map
   */
  private getAffectedFeaturesByLayer(e: MapBrowserEvent): Record<string, Feature[]> {
    const features: Record<string, Feature[]> = {}

    this.olmap.forEachFeatureAtPixel(e.pixel, (f: FeatureLike, layer: BaseLayer) => {
      const layerName: string = layer.get("name")

      // Create new keys
      if (!features.hasOwnProperty(layerName)) {
        features[layerName] = []
      }

      // Case for a job cluster
      if (f.getProperties() && f.getProperties().features) {
        f.getProperties().features.forEach((f: Feature) => {
          features[layerName].push(f)
        })
        // Case for a country
      } else {
        features[layerName].push(f.getProperties().geometry)
      }
    })
    return features
  }


  private addSelect(): void {
    this.olmap.on("click", (e: MapBrowserEvent) => {
      const features = this.getAffectedFeaturesByLayer(e)
      // updateCountryLayer(this, e)
      console.log(features)
    })
  }

  async search(query: string): Promise<void> {
    if (query.length > 0) {
      const geojson = await new Charon().forwardGeocoding(query)
      if (geojson === undefined) {
        log.error("Could not find " + query)
        return
      }
      this.addFeatureFromGeojson(geojson)
      const layers = this.getLayersByNames(["featureLayer"])
      if (layers.length === 1) {
        this.zoomToLayer(layers[0])
      }
    }
  }

  addVisibleJobsHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_VISIBLEJOBS"], (state) => {
      this.JobLayer.setJobs(state.visibleJobs)
    })
  }

  addGeometriesHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_SELECTEDGEOMETRIES", "STATE_CHANGE_ALLJOBS"], (state) => {
      this.countryLayerFromGeometry(state.selectedGeometries)
    })
  }

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

  public countryLayerFromGeometry(geometry: Record<string, any>[]): VectorLayer {
    const layerName = "countries"
    const [layer, wasCreated] = this.getOrCreateLayer(layerName, {
      style: polygonStyle({ isSelected: false }),
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

  public addFeatureFromGeojson(geojson: GeocodingResponseObject): VectorLayer {
    const layerName = "featureLayer"
    const [layer, wasCreated] = this.getOrCreateLayer(layerName, {
      style: countryLayerStyle({ isSelected: true }),
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

  private addControls(): any {
    const mainbar = new Bar()
    mainbar.setPosition("left-top")

    this.olmap.addControl(new FullScreen())
    this.olmap.addControl(mainbar)
    mainbar.addControl(this.circleSelectRemoveButton())
    return mainbar
  }

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

  private removeLayersByNames(names: string[]): void {
    const layers = this.getLayersByNames(names)
    log.info("layers", layers)
    layers.forEach((layer: BaseLayer) => {
      log.info("Deleting layer", layer)
      this.olmap.removeLayer(layer)
    })
  }

  private zoomTo(center: number[], zoom = 16): void {
    log.debug("Zooming", { center, zoom })
    this.olmap.getView().animate({
      center: center,
      zoom: zoom,
    })
  }

  private addCircleSelect(): void {
    const drawLayer = this.getDrawLayer({ clear: true })
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
    this.handleCircleSelectEvents(draw, modify)
    this.olmap.addInteraction(draw)
  }

  private handleCircleSelectEvents(draw: Draw, modify: Modify): void {
    const getCircle = (): Geometry | undefined => {
      const source = this.getDrawLayer().getSource()
      if (source.getFeatures().length === 1) {
        return source.getFeatures()[0].get("geometry")
      }

      return undefined
    }

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

  private getDrawLayer({ clear = false }: { clear?: boolean } = {}): VectorLayer {
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

  private clearSource(layer: VectorLayer): VectorLayer {
    if (typeof layer.getSource === "function") {
      layer.getSource().clear()
    }
    return layer
  }

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

  private buildMap(): OLMap {
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
      view: new View({
        center: fromLonLat([0, 45]),
        zoom: 2,
      }),
    })
    this.olmap = olmap
    this.addLayer(rasterLayer, { name: "rasterTiles" })
    // this.addLayer(vectorLayer, { name: "vectorTiles" })

    return olmap
  }

  private buildJobLayer(): void {
    this.JobLayer = new JobLayer(60)
    this.JobLayer.animatedCluster.setZIndex(this.zIndices.jobs)
    this.addLayer(this.JobLayer.animatedCluster, { name: "cluster" })
    this.addLayer(this.JobLayer.areas, { name: "areas" })
  }

  public setJobs(jobs: Job[]): void {
    this.store.dispatch("setJobs", jobs)
  }

  public setView(lon: number, lat: number, zoom: number): void {
    this.olmap.getView().setCenter([lat, lon])
    this.olmap.getView().setZoom(zoom)
  }

  public zoomToLayer(layer: VectorLayer): void {
    const extent = layer.getSource().getExtent()
    this.zoomToExtent(extent)
  }

  public zoomToExtent(extent: Extent): void {
    this.olmap.getView().fit(extent, { duration: 1500 })
  }
}
