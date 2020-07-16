import { Job, RawSearch } from "../types/customTypes"

/**
 * Responsible for loading jobs from an endpoint.
 * This is just for testing.
 * In production the map will receive jobs from outside.
 *
 * @class Jobs
 */
export class Jobs {
  private url = "https://jobboerse.th-nuernberg.de/srv.php/en/Suche/offers"

  /**
   *Creates an instance of Jobs.
   *
   * @param [url]
   * @memberof Jobs
   */
  constructor(url?: string) {
    if (url) {
      this.url = url
    }
  }

  /**
   * Fetch data from API.
   *
   * @private
   * @returns
   * @memberof Jobs
   */
  private async fetchRawJobs(): Promise<RawSearch> {
    return fetch(this.url).then((response) => {
      if (!response.ok) {
        console.error(`Could not fetch jobs from ${this.url}, response was: `, response)
      }
      return response.json()
    })
  }

  /**
   * Clean the jobs and transform into a useful format.
   * This is only necessary because we are still loading from the old google optimized job API.
   *
   * @private
   * @param  rawSearch
   * @returns
   * @memberof Jobs
   */
  private transform(rawSearch: RawSearch): Job[] {
    return rawSearch.jobs.map((rawJob) => {
      return {
        corp: rawJob.firma,
        locations: [
          {
            /*
             parseFloat seems to result in the same value but the jobs won't get displayed.
             so I am using Number() here
            */
            lon: Number(rawJob.lng),
            lat: Number(rawJob.lat),
          },
        ],
        date: rawJob.datum,
        id: parseInt(rawJob.ID),
        logo: rawJob.logo,
        // TODO a score must be added
        score: Math.random(),
        title: rawJob.titel,
        type: rawJob.typ,
        url: rawJob.url,
      }
    })
  }

  /**
   * Public getter method.
   *
   *
   * @returns
   * @memberof Jobs
   */
  public async get(): Promise<Job[]> {
    const rawJobs = await this.fetchRawJobs()
    return this.transform(rawJobs)
  }
}
