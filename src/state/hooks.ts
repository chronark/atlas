import { State } from "./store"
import Events from "./events"

export const visibleJobsHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.jobs.visible) !== JSON.stringify(nextState.jobs.visible)) {
    events.publish("STATE_CHANGE_JOBS_VISIBLE")
  }
}

export const allJobsHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.jobs.all) !== JSON.stringify(nextState.jobs.all)) {
    events.publish("STATE_CHANGE_JOBS_ALL")
  }
}

export const allCountriesHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.countries.all) !== JSON.stringify(nextState.countries.all)) {
    events.publish("STATE_CHANGE_COUNTRIES_ALL")
  }
}

export const selectedCountriesHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.countries.selected) !== JSON.stringify(nextState.countries.selected)) {
    events.publish("STATE_CHANGE_COUNTRIES_SELECTED")
  }
}

export default [visibleJobsHook, allJobsHook, allCountriesHook, selectedCountriesHook]
