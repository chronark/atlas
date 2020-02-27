import Map from "./map"
import { toLonLat } from "ol/proj"
import Charon from "./apis/charon"
import Store from "../state/store"
import { GeoJSON } from "ol/format"
import { areCoordinatesInGeometry } from "./geometryFilter"

const convertGeoJsonToGeometries = (geojson: Record<string, any>): (Record<string, any> | undefined)[] => {
  const features = new GeoJSON({
    featureProjection: "EPSG:3857",
  }).readFeatures(geojson)
  return features.map(feature => feature.getGeometry())
}
const getCachedGeometry = (store: Store, event: any): Record<string, any> => {
  const [lon, lat] = toLonLat(event.coordinate)
  const matches = store.state.countries.all.filter((geometry: Record<string, any>) => {
    return areCoordinatesInGeometry([lon, lat], geometry)
  })
  return matches[0]
}

const countryLayer = (map: Map): void => {
  map.olmap.on("singleclick", async (event: any) => {
    const cachedGeometry = getCachedGeometry(map.store, event)
    if (cachedGeometry) {
      map.store.state.countries.selected.includes(cachedGeometry)
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
              if (!map.store.state.countries.all.includes(geometry)) {
                map.store.dispatch("addCountry", geometry)
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
