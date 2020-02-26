import { State } from "./store"
import { removeListFromList } from "../util"
import { Job } from "../../types/customTypes"

export default {
  setJobs(state: State, payload: Job[]): State {
    state.jobs.all = payload
    return state
  },
  addCountries(state: State, payload: Record<string, any>[]): State {
    payload.forEach(e => {
      if (state.countries.all.indexOf(e) === -1) {
        state.countries.all.push(e)
      }
    })
    return state
  },
  selectCountries(state: State, payload: string[]): State {
    payload.forEach(e => {
      // Checks if element does not exist in state
      if (state.countries.selected.indexOf(e) === -1) {
        state.countries.selected.push(e)
      }
    })
    return state
  },
  unselectCountries(state: State, payload: string[]): State {
    state.countries.selected = removeListFromList(payload, state.countries.selected)
    return state
  },
}
