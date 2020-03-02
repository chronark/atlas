import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"

import { Job } from "../types/customTypes"
import Map from "./map"
import Sample from "../lib/apis/sample"

const map = new Map("map-container")

// Update UI
map.store.events.subscribe(["STATE_CHANGE_JOBS_ALL"], () => {
  const allJobsCounter = document.getElementById("allJobsCounter")
  if (allJobsCounter) {
    allJobsCounter.innerText = map.store.getState().jobs.all.length.toString()
  }
})
map.store.events.subscribe(["STATE_CHANGE_JOBS_VISIBLE"], () => {
  const visibleJobsCounter = document.getElementById("visibleJobsCounter")
  if (visibleJobsCounter) {
    visibleJobsCounter.innerText = map.store.getState().jobs.visible.length.toString()
  }
})

new Sample().jobs(200).then((jobs: Job[]) => {
  map.setJobs(jobs)
})
