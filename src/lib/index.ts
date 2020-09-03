/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Charon from "../apis/charon"
import { Jobs } from "../apis/jobs"
import { State } from "../state/store"
import { Job, GeocodingResponseObject, SingleLocation } from "../types/customTypes"
import Atlas from "./atlas"
import { isSingleLocation } from "./util"

console.log(process.env.TEST_DISPLAY_ALWAYS)
console.log(typeof process.env.TEST_DISPLAY_ALWAYS)

/**
 * Displays a list of jobs under the map.
 *
 * @param jobs - The jobs the user clicked on.
 */
const showJobs = (jobs: Job[]): void => {
  const ul = document.getElementById("jobs") as HTMLUListElement
  ul.innerHTML = ""
    jobs.forEach((job) => {
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

    ul.appendChild(div)
  })
}
/**
 * Gets called when the user clicks on a cluster.
 *
 * Depending on our test setup we either zoom in and display jobs only if we cannot zoom in any further.
 * Or we zoom in and show always.
 *
 * @param atlas
 * @param jobs
 */
const handleClick = (atlas: Atlas, jobs: Job[]): void => {
  if (process.env.TEST_DISPLAY_ALWAYS === "true") {
    showJobs(jobs)
  } else {
    const locations: SingleLocation[] = []
    jobs.forEach((job) => {
      job.locations.forEach((location) => {
        if (isSingleLocation(location)) {
          locations.push(location)
        }
      })
    })
    const areEqual = locations.every((location, i, arr) => location.lat === arr[0].lat && location.lon === arr[0].lon)

    if (areEqual) {
      showJobs(jobs)
    } else {
      atlas.zoomToLocationCluster(locations)
    }
  }
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
  handleClick(atlas, state.selectedJobs)
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
