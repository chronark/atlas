import Charon from "../apis/charon"
import Feature from "ol/Feature"
import { GeoJSON } from "ol/format"
import { Geometry } from "ol/geom"
import { MapBrowserEvent } from "ol"
import { areCoordinatesInGeometry } from "./geometryFilter"
import { toLonLat } from "ol/proj"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import polygonStyle from "../styles/polygon"
import { globalStore } from "../state/store"
import { selectionStyle } from "../styles/selectionStyle"
import { Style, Stroke, Fill } from "ol/style"

/**
 * A layer to display one or multiple polygons on the map.
 *
 * @class SelectionLayer
 * @augments {VectorLayer}
 */
export default class SelectionLayer extends VectorLayer {
  /**
   *Creates an instance of SelectionLayer.
   *
   * @memberof SelectionLayer
   */
  constructor() {
    super({
      style: selectionStyle,
    })

    this.setZIndex(10)

    this.setSource(new VectorSource())
    this.set("name", "selectionLayer")
  }

  /**
   * Add one or multiple features to the layer.
   *
   * @param features
   * @memberof SelectionLayer
   */
  public addFeatures(features: Feature[]): void {
    this.getSource().addFeatures(features)
  }

  /**
   * Transform a geometry object into features and add them to the layer.
   *
   * @param geometry
   * @memberof SelectionLayer
   */
  public setFeaturesFromGeometry(geometry: Record<string, any>[]): void {
    const features = geometry.map(
      (g): Feature =>
        new Feature({
          geometry: g,
        }),
    )
    // TODO: Figure out of removing and adding single features is more performant than clearing the source.
    this.getSource().clear()
    this.addFeatures(features)
  }

  /**
   * Handle single clicks by the user.
   *
   * Calculates the exact coordinates of the click and shows/hides the clicked on polygon if its in cache.
   * Otherwise it sends a request to the backend to fetch the polygon and show it as soon as the request comes back.
   *
   *
   * @param event
   * @memberof SelectionLayer
   */
  public onSingleClick = async (event: MapBrowserEvent): Promise<void> => {
    const cachedGeometry = this.getCachedGeometry(event)
    if (cachedGeometry) {
      globalStore.getState().selectedGeometries.includes(cachedGeometry)
        ? globalStore.dispatch("unselectGeometries", [cachedGeometry])
        : globalStore.dispatch("selectGeometries", [cachedGeometry])
    } else {
      const [lon, lat] = toLonLat(event.coordinate)
      const geojson = await new Charon().reverseGeocoding(lat, lon)
      if (geojson) {
        const geometries = SelectionLayer.convertGeoJsonToGeometries(geojson)
        if (geometries) {
          geometries.forEach((geometry) => {
            if (geometry) {
              if (!globalStore.getState().allGeometries.includes(geometry)) {
                globalStore.dispatch("addGeometries", [geometry])
              }
              globalStore.dispatch("selectGeometries", [geometry])
            }
          })
        }
      }
    }
  }

  /**
   * Create a list of Features from a geojson object.
   *
   * @private
   * @param  geojson
   * @returns
   * @memberof SelectionLayer
   */
  static convertGeoJsonToGeometries(geojson: Record<string, any>): (Geometry | undefined)[] {
    const features: Feature[] = new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeatures(geojson)
    return features.map((feature: Feature) => feature.getGeometry())
  }

  /**
   * Add a geojson object as feature to the layer.
   *
   * @param geojson
   * @returns The feature to be used in a zoomTo call for example.
   * @memberof SelectionLayer
   */
  public addFeatureFromGeojson(geojson: Record<string, any>): Feature[] {
    const geometry = SelectionLayer.convertGeoJsonToGeometries(geojson)
    const features = geometry.map(
      (g): Feature =>
        new Feature({
          geometry: g,
        }),
    )
    this.addFeatures(features)
    return features
  }

  /**
   * Try to load geometry from the store instead of making an expensive call to the backend.
   *
   * @param event
   * @returns
   */
  private getCachedGeometry = (event: MapBrowserEvent): Geometry => {
    const [lon, lat] = toLonLat(event.coordinate)
    const matches = globalStore.getState().allGeometries.filter((geometry: Geometry) => {
      return areCoordinatesInGeometry([lon, lat], geometry)
    })
    return matches[0]
  }
}
