import { Job } from "../types/customTypes"
import axios from "axios"

/**
 * Sample generator for testing.
 *
 * @class Sample
 */
export default class Sample {
  /**
   * Create a list of locations.
   *
   * @private
   * @param  cities
   * @param  locationCount
   * @returns
   * @memberof Sample
   */
  private getLocations(cities: Record<string, any>[], locationCount: number): { lat: number; lon: number }[] {
    const locations: { lat: number; lon: number }[] = []
    for (let l = 0; l < locationCount; l++) {
      const i = Math.floor(Math.random() * cities.length)
      locations.push({
        lat: Number(cities[i].lat),
        lon: Number(cities[i].lng),
      })
    }
    return locations
  }

  /**
   * Create a list of jobs for testing.
   *
   * @param  count
   * @returns
   * @memberof Sample
   */
  public async jobs(count: number): Promise<Job[]> {
    // TODO: selfhost these files
    const cities = await axios
      .get("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json")
      .then((response) => response.data)

    const jobs: Job[] = []
    let i = 0
    while (jobs.length < count && cities.length > 0) {
      jobs.push({
        id: i++,
        corp: this.generateString(count / 4500),
        locations: this.getLocations(cities, Math.exp(Math.random() * 1.2)),
        date: "",
        logo: "",
        score: Math.random(),
        title: "",
        type: "",
        url: "fake.domain.com",
      })
    }
    return jobs
  }

  /**
   * Create a random string with a specific length.
   *
   * @private
   * @param  [length=4]
   * @returns
   * @memberof Sample
   */
  private generateString(length = 4): string {
    let result = ""
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }
}
