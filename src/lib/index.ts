import { Job } from "../types/customTypes"
import Map from "./map"
import Sample from "../lib/apis/sample"
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

new Sample().jobs(200).then((jobs: Job[]) => {
  map.setJobs(jobs)
})
