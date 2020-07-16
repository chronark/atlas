import Charon from "../apis/charon"
import { Jobs } from "../apis/jobs"
import { State, globalStore } from "../state/store"
import { GeocodingResponseObject } from "../types/customTypes"
import Atlas from "./atlas"

const atlas = new Atlas("map-container")

// Update UI
atlas.subscribe(["STATE_CHANGE_ALLJOBS"], (state: State) => {
  document.getElementById("allJobsCounter")!.innerText = state.allJobs.length.toString()
})
atlas.subscribe(["STATE_CHANGE_VISIBLEJOBS"], (state: State) => {
  document.getElementById("visibleJobsCounter")!.innerText = state.visibleJobs.length.toString()
})
atlas.subscribe(["STATE_CHANGE_SELECTEDJOBS"], (state: State) => {
  console.log("User selected jobs: ", state.selectedJobs)
})

// Search
const searchField = document.getElementById("searchField") as HTMLInputElement
const searchForm = document.getElementById("searchForm")
if (searchField !== null && searchForm !== null) {
  searchForm.addEventListener("submit", (event) => {
    const query = searchField.value
    atlas.search(query)
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
      atlas.setJobs(jobs)
    }
  })
})
