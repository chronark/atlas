import { removeListFromList, unique } from "../lib/util"

import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { State } from "./store"

export type Mutation = (state: State, payload: any) => State

export const countryMutations = {
  addGeometries(state: State, payload: Geometry[]): State {
    const combined = state.geometries.all.concat(payload)
    state.geometries.all = unique(combined)
    return state
  },

  selectGeometries(state: State, payload: Geometry[]): State {
    const combined = state.geometries.selected.concat(payload)
    state.geometries.selected = unique(combined)
    return state
  },

  unselectGeometries(state: State, payload: Record<string, any>[]): State {
    state.geometries.selected = removeListFromList(payload, state.geometries.selected)
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
