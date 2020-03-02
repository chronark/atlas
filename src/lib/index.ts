import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import { Job } from "../types/customTypes"
import { log } from "../lib/logger"
import Sample from "../lib/apis/sample"
import Map from "./map"

const map = new Map("map-container")

// Update UI
map.store.events.subscribe(["STATE_CHANGE_JOBS_ALL"], () => {
  const allJobsCounter = document.getElementById("allJobsCounter")
  if (allJobsCounter) {
    console.error("all jobs firing", map.store.getState().jobs.all)
    allJobsCounter.innerText = map.store.getState().jobs.all.length
  }
})
map.store.events.subscribe(["STATE_CHANGE_JOBS_VISIBLE"], () => {
  const visibleJobsCounter = document.getElementById("visibleJobsCounter")
  if (visibleJobsCounter) {
    console.error("visible jobs firing", map.store.getState().jobs.visible)
    visibleJobsCounter.innerText = map.store.getState().jobs.visible.length
  }
})

new Sample().jobs(200).then((jobs: Job[]) => {
  map.setJobs(jobs)
})
