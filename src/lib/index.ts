import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"
import { Job } from "../types/customTypes"
import Store from "./state/store"
import { log } from "../lib/logger"

import Map from "./map"

const map = new Map("map-container")

const store = new Store()

store.getEvents().subscribe("stateChange", () => log.debug("State is", store.getState()))

const jobs: Job[] = [
  {
    corp: "string",
    locations: [
      {
        lon: 11.0767,
        lat: 49.4521,
      },
    ],
    date: "string",
    id: 1,
    logo: "string",
    score: 1,
    title: "string",
    type: "string",
    url: "string",
  },
]

store.dispatch("setJobs", jobs)
