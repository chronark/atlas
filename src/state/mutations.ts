import { State } from "./store"
import { removeListFromList } from "../lib/util"
import { Job } from "../types/customTypes"

export default {
  setJobs(state: State, payload: Job[]): State {
    state.jobs.all = payload
    return state
  },
  addCountries(state: State, payload: Record<string, any>[]): State {
    const newCountries = payload.filter(e => {
      // Checks if element does not exist in state
      return state.countries.all.indexOf(e) === -1
    })
    state.countries.all.concat(newCountries)
    return state
  },
  selectCountries(state: State, payload: Record<string, any>[]): State {
    const newCountries = payload.filter(e => {
      // Checks if element does not exist in state
      return state.countries.selected.indexOf(e) === -1
    })
    state.countries.selected.concat(newCountries)
    return state
  },
  unselectCountries(state: State, payload: Record<string, any>[]): State {
    state.countries.selected = removeListFromList(payload, state.countries.selected)
    return state
  },
}
