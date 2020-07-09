import Charon from "../apis/charon"
import { Jobs } from "../apis/jobs"
import { State, globalStore } from "../state/store"
import { GeocodingResponseObject } from "../types/customTypes"
import Map from "./map"

const map = new Map("map-container")

// Update UI
globalStore.events.subscribe(["STATE_CHANGE_ALLJOBS"], (state: State) => {
  const allJobsCounter = document.getElementById("allJobsCounter")
  if (allJobsCounter) {
    allJobsCounter.innerText = state.allJobs.length.toString()
  }
})
globalStore.events.subscribe(["STATE_CHANGE_VISIBLEJOBS"], (state: State) => {
  const visibleJobsCounter = document.getElementById("visibleJobsCounter")
  if (visibleJobsCounter) {
    visibleJobsCounter.innerText = state.visibleJobs.length.toString()
  }
})

// Search
const searchField = document.getElementById("searchField") as HTMLInputElement
const searchForm = document.getElementById("searchForm")
if (searchField !== null && searchForm !== null) {
  searchForm.addEventListener("submit", (event) => {
    const query = searchField.value
    map.search(query)
    event.preventDefault()
  })
}

// Using local source because of CORS problems.
new Jobs("https://raw.githubusercontent.com/chronark/atlas/master/static/rawJobs.json").get().then((jobs) => {
  new Charon().forwardGeocoding("Bayern").then((geojson: GeocodingResponseObject | undefined) => {
    if (geojson) {
      jobs.push({
        corp: "Bayern",
        locations: [geojson.features],
        date: "",
        id: 0,
        logo: "",
        // TODO a score must be added
        score: Math.random(),
        title: "",
        type: "",
        url: "",
      })
      map.setJobs(jobs)
    }
  })
})
