import { Jobs } from "../lib/apis/jobs"
import Map from "./map"
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
new Jobs().get().then(jobs => map.setJobs(jobs))
