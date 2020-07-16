import Charon from "../apis/charon"
import Feature from "ol/Feature"
import { GeoJSON } from "ol/format"
import { Geometry } from "ol/geom"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import { selectionStyle } from "../styles/selectionStyle"
import { Style, Fill } from "ol/style"

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
    super()

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
  public setFeaturesFromGeometry(geometry: Geometry[]): void {
    const features = geometry.map(
      (g): Feature =>
        new Feature({
          geometry: g,
        }),
    )
    this.getSource().clear()
    this.addFeatures(features)
  }

  /**
   * Make geometry visible to the user by applying a style.
   *
   * This is required because if features would have an undefined style they are not clickable.. For some reason.
   *
   * @param geometry - All geometries that you want to show. Pass in an empty array to hide everything.
   * @memberof SelectionLayer
   */
  public setVisibleFeatures(geometry: Geometry[]): void {
    this.getSource()
      .getFeatures()
      .map((f: Feature) => {
        if (geometry.includes(f.getGeometry())) {
          f.setStyle(selectionStyle)
        } else {
          f.setStyle(
            new Style({
              fill: new Fill({
                color: "rgba(0,0,0,0)",
              }),
            }),
          )
        }
      })
  }

  /**
   * Create a list of Features from a geojson object.
   *
   * @private
   * @param  geojson
   * @returns
   * @memberof SelectionLayer
   */
  static convertGeoJsonToGeometries(geojson: Record<string, any>): Geometry[] {
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
}
