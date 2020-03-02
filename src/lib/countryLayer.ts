import Charon from "./apis/charon"
import Feature from "ol/Feature"
import { GeoJSON } from "ol/format"
import { Geometry } from "ol/geom"
import Map from "./map"
import { Store } from "../state/store"
import { areCoordinatesInGeometry } from "./geometryFilter"
import { toLonLat } from "ol/proj"

/**
 * Creates a Geometry object from geojson data.
 *
 * @param geojson - A geojson object you want to convert.
 * @returns GeometryFeatures.
 */
function convertGeoJsonToGeometries(geojson: Record<string, any>): (Geometry | undefined)[] {
  const features: Feature[] = new GeoJSON({
    featureProjection: "EPSG:3857",
  }).readFeatures(geojson)
  return features.map(feature => feature.getGeometry())
}
const getCachedGeometry = (store: Store, event: any): Record<string, any> => {
  const [lon, lat] = toLonLat(event.coordinate)
  const matches = store.getState().countries.all.filter((geometry: Geometry) => {
    return areCoordinatesInGeometry([lon, lat], geometry)
  })
  return matches[0]
}

const countryLayer = (map: Map): void => {
  map.olmap.on("singleclick", async (event: any) => {
    const cachedGeometry = getCachedGeometry(map.store, event)
    if (cachedGeometry) {
      map.store.getState().countries.selected.includes(cachedGeometry)
        ? map.store.dispatch("unselectCountries", [cachedGeometry])
        : map.store.dispatch("selectCountries", [cachedGeometry])
    } else {
      const [lon, lat] = toLonLat(event.coordinate)
      const geojson = await new Charon().reverseGeocoding(lat, lon)
      if (geojson) {
        const geometries = convertGeoJsonToGeometries(geojson)
        if (geometries) {
          geometries.forEach(geometry => {
            if (geometry) {
              if (!map.store.getState().countries.all.includes(geometry)) {
                map.store.dispatch("addCountries", geometry)
              }
              map.store.dispatch("selectCountries", [geometry])
            }
          })
        }
      }
    }
  })
}

export { countryLayer }
