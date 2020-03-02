import { removeListFromList, unique } from "../lib/util"

import { Job } from "../types/customTypes"
import { State } from "./store"

export type Mutation = (state: State, payload: any) => State

export const countryMutations = {
  addCountries(state: State, payload: Record<string, any>[]): State {
    const combined = state.countries.all.concat(payload)
    state.countries.all = unique(combined)
    return state
  },

  selectCountries(state: State, payload: Record<string, any>[]): State {
    const combined = state.countries.selected.concat(payload)
    state.countries.selected = unique(combined)
    return state
  },

  unselectCountries(state: State, payload: Record<string, any>[]): State {
    state.countries.selected = removeListFromList(payload, state.countries.selected)
    return state
  },
}
export const jobMutations = {
  setJobs(state: State, payload: Job[]): State {
    state.jobs.all = payload
    return state
  },
  setVisibleJobs(state: State, payload: Job[]): State {
    state.jobs.visible = payload
    return state
  },
}
export const mutations = { ...countryMutations, ...jobMutations }
