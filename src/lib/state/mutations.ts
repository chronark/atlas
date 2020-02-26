import { State } from "./store"
import { mergeUnique, removeListFromList } from "../util"
import { Job } from "../../types/customTypes"

export default {
  setJobs(state: State, payload: Job[]): State {
    state.jobs.all = payload
    return state
  },
  addCountries(state: State, payload: Record<string, any>[]): State {
    state.countries.all = mergeUnique(state.countries.all, payload)
    return state
  },
  selectCountries(state: State, payload: Record<string, any>[]): State {
    state.countries.selected = mergeUnique(state.countries.selected, payload)
    return state
  },
  unselectCountries(state: State, payload: Record<string, any>[]): State {
    state.countries.selected = removeListFromList(payload, state.countries.selected)
    return state
  },
}
