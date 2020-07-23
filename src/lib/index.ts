/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Charon from "../apis/charon"
import { Jobs } from "../apis/jobs"
import { State } from "../state/store"
import { Job, GeocodingResponseObject } from "../types/customTypes"
import Atlas from "./atlas"
import { View } from "ol"
import { fromLonLat, toLonLat } from "ol/proj"
import { listen } from "ol/events"



const zoomIn = (atlas: Atlas, jobs: Job[]) => {
  const location = jobs[0].locations[0]
  if (process.env.TEST_MAX_ZOOM) {
    atlas.zoomToLocation(location)
  } else {
    atlas.zoomToLocation(location)
  }
}


const showJobs = (jobs: Job[]): void => {

  const ul = document.getElementById("jobs")
  ul!.innerHTML = ""
  const selectedJobs = jobs.map(job => {
    const div = document.createElement("div")
    const title = document.createElement("p")
    const link = document.createElement("a")
    const image = document.createElement("img")
    image.src = job.logo
    link.href = job.url
    link.innerText = "website"
    title.innerHTML = job.title

    div.append(image)
    div.appendChild(link)
    div.appendChild(title)
div.setAttribute("style", "margin: 1em; padding: 1em; background: white; border-radius: 5px; overflow: hidden;")

    ul?.appendChild(div)

  })
}


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
  zoomIn(atlas, state.selectedJobs)

  showJobs(state.selectedJobs)
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
  atlas.setJobs(jobs)
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
