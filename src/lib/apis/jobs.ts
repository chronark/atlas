import { Job, RawSearch } from "../../types/customTypes"

import axios from "axios"

export class Jobs {
  private url = "https://jobboerse.th-nuernberg.de/srv.php/en/Suche/offers"

  constructor(url?: string) {
    if (url) {
      this.url = url
    }
  }

  private async fetchRawJobs(): Promise<RawSearch> {
    return axios.get(this.url)
    // .then(response => {
    //   if (response.status !== 200) {
    //     console.error(`Could not fetch jobs from ${this.url}, response was: `, response)
    //   }
    //   return response.json()
    // })
  }

  private transform(rawSearch: RawSearch): Job[] {
    return rawSearch.jobs.map(rawJob => {
      return {
        corp: rawJob.firma,
        locations: [
          {
            lon: parseFloat(rawJob.lng),
            lat: parseFloat(rawJob.lat),
          },
        ],
        date: rawJob.datum,
        id: parseInt(rawJob.ID),
        logo: rawJob.logo,
        // TODO a score must be added
        score: Math.random(),
        title: rawJob.titel,
        type: rawJob.titel,
        url: rawJob.url,
      }
    })
  }

  public async get(): Promise<Job[]> {
    const rawJobs = await this.fetchRawJobs()
    return this.transform(rawJobs)
  }
}
