import Axios from "axios"
import { GeocodingResponseObject } from "../types/customTypes"
import { metrics } from "../lib/tracking"

/**
 * Handles all commucation to the charon backend service.
 *
 * @class Charon
 */
export default class Charon {
  private serverURL: string
  public tileURL: string
  /**
   *Creates an instance of Charon.
   *
   * @memberof Charon
   */
  public constructor() {
    this.serverURL = process.env.CHARON_URL + ":52000"
    this.tileURL = this.serverURL + "/tile/?x={x}&y={y}&z={z}"
  }

  /**
   * Fetches the style from the API and deserialize it into json.
   *
   * @returns
   * @memberof Charon
   */
  public getStyle(): Promise<Record<string, any>> {
    return fetch(this.serverURL + "/style").then((r) => r.json())
  }

  /**
   * Perform a forward geocoding request against the backend.
   *
   * @param  query
   * @returns Deserialized json or undefined if nothing was found.
   * @memberof Charon
   */
  public async forwardGeocoding(query: string): Promise<GeocodingResponseObject | undefined> {
    metrics.addGeocoding()
    metrics.addGeocoding()
    const response = await Axios.get(this.serverURL + `/geocoding/forward/?query=${query}`)
    if (response.status === 200) {
      return response.data
    }
  }

  /**
   * Perform a reverse geocoding request agaisnt the backend.
   *
   * @param  lat
   * @param  lon
   * @returns Deserialized json or undefined if nothing was found.
   * @memberof Charon
   */
  public async reverseGeocoding(lat: number, lon: number): Promise<GeocodingResponseObject | undefined> {
    metrics.addGeocoding()

    const url = this.serverURL + `/geocoding/reverse/?lat=${lat}&lon=${lon}`
    const response = await Axios.get(url)
    if (response.status === 200) {
      const json = response.data
      return json
    }
    return undefined
  }
}
