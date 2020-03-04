import { Job } from "../../types/customTypes"
import axios from "axios"
import { log } from "../logger"

export default class Sample {
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

  public async jobs(count: number): Promise<Job[]> {
    const startTime = new Date()
    // TODO selfhost these files
    const cities = await axios
      .get("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json")
      .then(response => response.data)

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
    const elapsedTime = Number(new Date()) - Number(startTime)
    log.info(`Generating ${jobs.length} jobs took ${elapsedTime} ms.`)
    return jobs
  }

  private generateString(length = 4): string {
    let result = ""
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }
}
