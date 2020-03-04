import { removeListFromList, unique } from "../lib/util"

import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { State } from "./store"

export type Mutation = (state: State, payload: any) => boolean

export const countryMutations = {
  addGeometries(state: State, payload: Geometry[]): boolean {
    const combined = state.allGeometries.concat(payload)
    state.allGeometries = unique(combined)
    return true
  },

  selectGeometries(state: State, payload: Geometry[]): boolean {
    const combined = state.selectedGeometries.concat(payload)
    state.selectedGeometries = unique(combined)
    return true
  },

  unselectGeometries(state: State, payload: Record<string, any>[]): boolean {
    state.selectedGeometries = removeListFromList(payload, state.selectedGeometries)
    return true
  },
}
export const jobMutations = {
  setJobs(state: State, payload: Job[]): boolean {
    state.allJobs = payload
    return true
  },
  setVisibleJobs(state: State, payload: Job[]): boolean {
    state.visibleJobs = payload
    return true
  },
}
export const mutations = { ...countryMutations, ...jobMutations }
