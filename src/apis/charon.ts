import Axios from "axios"
import { GeocodingResponseObject } from "../types/customTypes"

export default class Charon {
  private serverURL: string
  public constructor() {
    this.serverURL = process.env.CHARON_URL + ":52000"
  }

  public getTileURL(): string {
    return this.serverURL + "/tile/?x={x}&y={y}&z={z}"
  }

  public getStyle(): Promise<Record<string, any>> {
    return fetch(this.serverURL + "/style").then((r) => r.json())
  }

  public async forwardGeocoding(query: string): Promise<GeocodingResponseObject | undefined> {
    const response = await Axios.get(this.serverURL + `/geocoding/forward/?query=${query}`)
    if (response.status === 200) {
      return response.data
    }
  }

  public async reverseGeocoding(lat: number, lon: number): Promise<GeocodingResponseObject | undefined> {
    const url = this.serverURL + `/geocoding/reverse/?lat=${lat}&lon=${lon}`
    const response = await Axios.get(url)
    if (response.status === 200) {
      const json = response.data
      return json
    }
    return undefined
  }
}
