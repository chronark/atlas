import axios from "axios"
import { log } from "../logger"
import { GeoJSON } from "geojson"
interface ForwardResult {
  geojson: Record<string, any>
  lat: number
  lon: number
}

export default class Nominatim {
  private apiURLBase: string
  private apiURLQueryParameters: string[]

  public constructor() {
    this.apiURLBase = "https://nominatim.openstreetmap.org/search?q="
    this.apiURLQueryParameters = ["format=jsonv2", "polygon_geojson=1", "limit=1"]
  }

  private buildURL(address: string): string {
    const url = "".concat(this.apiURLBase, address, "&", this.flattenParameters())
    return encodeURI(url)
  }

  private cleanJson(jsonData: Record<string, any>): ForwardResult {
    if (jsonData.length >= 1) {
      return {
        lat: Number(jsonData[0].lat),
        lon: Number(jsonData[0].lon),
        geojson: jsonData[0].geojson,
      }
    } else {
      throw new RangeError("Json data did not have enough enough elements, expecting at least 1.")
    }
  }

  private flattenParameters(parameters: string[] = this.apiURLQueryParameters): string {
    return parameters.join("&")
  }

  public reverse(lon: number, lat: number): Promise<GeoJSON | undefined> {
    const parameters = ["format=geojson", `lon=${lon}`, `lat=${lat}`, "zoom=3", "polygon_geojson=1", "limit=1"]
    const url = "https://nominatim.openstreetmap.org/reverse?" + parameters.join("&")

    return axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        if (data.error) {
          return
        }
        return data
      })
      .catch(error => {
        log.error(error, { url })
      })
  }

  public forward(address: string): Promise<{ result: ForwardResult | undefined; success: boolean }> {
    const url = this.buildURL(address)
    return axios.get(url).then(response => {
      try {
        return {
          result: this.cleanJson(response.data),
          success: true,
        }
      } catch {
        return {
          result: undefined,
          success: false,
        }
      }
    })
  }
}
