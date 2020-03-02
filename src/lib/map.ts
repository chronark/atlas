import { Map as OLMap } from "ol"
import Bar from "ol-ext/control/Bar"
import Button from "ol-ext/control/Button"
import View from "ol/View"
import LayerPopup from "ol-ext/control/LayerPopup"
import { Attribution, Zoom, OverviewMap } from "ol/control"
import FullScreen from "ol/control/FullScreen"
import { shiftKeyOnly } from "ol/events/condition"
import GeoJSON from "ol/format/GeoJSON"
import polygonStyle from "../styles/polygon"
import Feature from "ol/Feature"
import { fromCircle } from "ol/geom/Polygon"
import { Draw, Modify } from "ol/interaction"
import { Fill, Stroke, Style } from "ol/style"
import { OSMLayer, MapboxLayer } from "./apis/tileLayers"
import VectorLayer from "ol/layer/Vector"
import { fromLonLat, transformExtent } from "ol/proj"
import VectorSource from "ol/source/Vector"
import { Job, GeocodingResponseObject } from "../types/customTypes"
import JobLayer from "./jobLayer"
import { log } from "./logger"
import { countryLayer } from "./countryLayer"
import BaseLayer from "ol/layer/Base"
import Geometry from "ol/geom/Geometry"
import { filterJobs } from "./geometryFilter"
import Charon from "./apis/charon"
import { newDefaultStore, Store } from "../state/store"
import { countryLayerStyle } from "../styles/countryStyle"

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
    this.addCountryLayer()
    this.buildJobLayer()

    this.addCountryHook()
    this.addJobFilterHook()
  }

  addCountryHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_COUNTRIES_SELECTED", "STATE_CHANGE_JOBS_ALL"], () => {
      console.error("addCountryHook firing", this.store.getState().countries.selected)
      this.countryLayerFromGeometry(this.store.getState().countries.selected)
    })
  }

  addJobFilterHook(): void {
    this.store.events.subscribe(["STATE_CHANGE_JOBS_ALL", "STATE_CHANGE_COUNTRIES_SELECTED"], () => {
      let newShownJobs: Job[] = []
      if (this.store.getState().countries.selected.length === 0) {
        newShownJobs = this.store.getState().jobs.all
      } else {
        newShownJobs = filterJobs(this.store.getState().jobs.all, {
          countries: this.store.getState().countries.selected,
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

    if (
      this.olmap
        .getLayers()
        .getArray()
        .indexOf(layer) === -1 ||
      overwrite
    ) {
      if (name !== "") {
        layer.set("name", name)
      }
      this.olmap.addLayer(layer)
    }
  }

  addCountryLayer(): void {
    countryLayer(this)
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
    const features = geometry.map(g => {
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

  public addFeatureFromGeojson(geojson: any): VectorLayer {
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
        const filteredJobs = filterJobs(this.store.getState().jobs.all, {
          countries: this.store.getState().countries.selected,
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

  private getRadius(circle: Feature): number {
    return circle.get("values_").geometry.getRadius()
  }

  private makeFeatureFromCircle(circleFeature: Feature): Feature {
    return new Feature({
      geometry: fromCircle(circleFeature.get("geometry")),
      //  TODO the following style seems to have no effect
      style: new Style({
        fill: new Fill({
          color: "rgba(0,0,0,0)",
        }),
        stroke: new Stroke({
          color: "rgba(0,0,0,0)",
          width: 0,
        }),
      }),
    })
  }

  private getLayersByNames(names: string[]): BaseLayer[] {
    const allLayers = this.olmap.getLayers()
    const filteredLayers: BaseLayer[] = []
    allLayers.forEach(layer => {
      if (names.includes(layer.get("name"))) {
        filteredLayers.push(layer)
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
      new LayerPopup([rasterLayer]),
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
  }

  public setJobs(jobs: Job[]): void {
    log.debug("Setting jobs", jobs)
    this.JobLayer.clear()
    this.JobLayer.addJobs(jobs)
    this.store.dispatch("setJobs", jobs)
  }

  private setView(lon: number, lat: number, zoom: number): void {
    this.olmap.getView().setCenter([lat, lon])
    this.olmap.getView().setZoom(zoom)
  }

  public zoomToLayer(layer: VectorLayer): void {
    const extent = layer.getSource().getExtent()
    this.olmap.getView().fit(extent, { duration: 1500 })
  }

  public zoomToBBox(bbox: [number, number, number, number]): void {
    const extent = transformExtent(bbox, "EPSG:4326", "EPSG:3857")
    this.olmap.getView().fit(extent, { duration: 1500 })
  }
}
