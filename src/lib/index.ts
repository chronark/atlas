import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"
import { Job } from "../types/customTypes"
import { log } from "../lib/logger"
import Sample from "../lib/apis/sample"
import Map from "./map"

const map = new Map("map-container")

map.store.events.subscribe("stateChange", () => log.info("State is now", map.store.state.jobs.all))

new Sample().jobs(200).then((jobs: Job[]) => {
  map.setJobs(jobs)
})
