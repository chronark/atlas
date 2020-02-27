import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"
import { Job } from "../types/customTypes"
import { log } from "../lib/logger"
import Sample from "../lib/apis/sample"
import Map from "./map"

const map = new Map("map-container")

map.store.events.subscribe(["STATE_CHANGE"], () => log.info("State is now", map.store.getState()))

// Update UI
map.store.events.subscribe(["STATE_CHANGE"], () => {
  const allJobsCounter = document.getElementById("allJobsCounter")
  const visibleJobsCounter = document.getElementById("visibleJobsCounter")
  if (allJobsCounter) {
    allJobsCounter.innerText = map.store.getState().jobs.all.length
  }
  if (visibleJobsCounter) {
    visibleJobsCounter.innerText = map.store.getState().jobs.visible.length
  }
})

new Sample().jobs(200).then((jobs: Job[]) => {
  map.setJobs(jobs)
})
