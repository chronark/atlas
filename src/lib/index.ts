import { GeocodingResponseObject, Location } from "../types/customTypes"

import GeoJSON from "ol/format/GeoJSON"
import { Jobs } from "../apis/jobs"
import Map from "./map"
import MultiPolygon from "ol/geom/MultiPolygon"
import Polygon from "ol/geom/Polygon"
import { State } from "../state/store"

const map = new Map("map-container")

// Update UI
map.store.events.subscribe(["STATE_CHANGE_ALLJOBS"], (state: State) => {
  const allJobsCounter = document.getElementById("allJobsCounter")
  if (allJobsCounter) {
    allJobsCounter.innerText = state.allJobs.length.toString()
  }
})
map.store.events.subscribe(["STATE_CHANGE_VISIBLEJOBS"], (state: State) => {
  const visibleJobsCounter = document.getElementById("visibleJobsCounter")
  if (visibleJobsCounter) {
    visibleJobsCounter.innerText = state.visibleJobs.length.toString()
  }
})

// Search
const searchField = document.getElementById("searchField") as HTMLInputElement
const searchForm = document.getElementById("searchForm")
if (searchField !== null && searchForm !== null) {
  searchForm.addEventListener("submit", event => {
    const query = searchField.value
    map.search(query)
    event.preventDefault()
  })
}
// Using local source because of CORS problems.
new Jobs("https://raw.githubusercontent.com/chronark/atlas/master/static/rawJobs.json").get().then(jobs => {
  console.log("rawJobs length", jobs.length)
  fetch("https://nominatim.openstreetmap.org/search?q=bayern&format=geojson&polygon_geojson=1&limit=1")
    .then(response => response.json())
    .then((geojson: GeocodingResponseObject) => geojson.features)
    .then((bayern: Location) => {
      jobs.push({
        corp: "Bayern",
        locations: [bayern],
        date: "",
        id: 0,
        logo: "",
        // TODO a score must be added
        score: Math.random(),
        title: "",
        type: "",
        url: "",
      })
      console.log(jobs[jobs.length - 1])
      map.setJobs(jobs)
      console.log("Job length", jobs.length)
    })
})
