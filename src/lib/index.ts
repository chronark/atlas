import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"
import { Job } from "../types/customTypes"
import Store from "./state/store"
import { log } from "../lib/logger"
import Sample from "../lib/apis/sample"
import Map from "./map"

const map = new Map("map-container")

map.store.getEvents().subscribe("stateChange", () => log.debug("State is", store.getState()))


new Sample().jobs(200).then((jobs: Job[]) => {
    map.setJobs(jobs)
  })


