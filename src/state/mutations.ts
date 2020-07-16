import { removeListFromList, unique } from "../lib/util"

import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { State } from "./store"

export type Mutation = (state: State, payload: any) => boolean
/**
 * A collection of mutations for geometry.
 */
export const geometryMutations = {
  /**
   * Add a list of geometries to allGeoemtries.
   *
   * @param state - The current state.
   * @param payload - A list of geometries you want to add to the existing ones.
   * @returns
   */
  addGeometries(state: State, payload: Geometry[]): boolean {
    const combined = state.allGeometries.concat(payload)
    state.allGeometries = unique(combined)
    return true
  },
  /**
   * Add a list of geometries to selectedGeoemtries.
   *
   * @param state - The current state.
   * @param payload -
   * @returns
   */
  selectGeometries(state: State, payload: Geometry[]): boolean {
    const combined = state.selectedGeometries.concat(payload)
    state.selectedGeometries = unique(combined)
    return true
  },
  /**
   * Remove a list of geometries from selectedGeoemtries.
   *
   * @param state - The current state.
   * @param payload
   * @returns
   */
  unselectGeometries(state: State, payload: Geometry[]): boolean {
    state.selectedGeometries = removeListFromList(payload, state.selectedGeometries)
    return true
  },
  /**
   * Overwrite selectedGeoemtries.
   *
   * @param state - The current state.
   * @param payload
   * @returns
   */
  setSelectedGeometries(state: State, payload: Geometry[]): boolean {
    state.selectedGeometries = payload
    return true
  },
}
/**
 * Collection of mutations for jobs.
 */
export const jobMutations = {
  /**
   * Replace allJobs with new jobs.
   *
   * @param state - The current state.
   * @param payload - New jobs that will replace the old ones.
   * @returns
   */
  setJobs(state: State, payload: Job[]): boolean {
    state.allJobs = payload
    return true
  },
  /**
   * Replace visibleJobs with new jobs..
   *
   * @param state - The current state.
   * @param payload - New jobs that will replace the old ones.
   * @returns
   */
  setVisibleJobs(state: State, payload: Job[]): boolean {
    state.visibleJobs = payload
    return true
  },
  /**
   * Replace selectedJobs with new jobs.
   *
   * @param state - The current state.
   * @param payload - New jobs that will be selected.
   * @returns
   */
  setSelectedJobs(state: State, payload: Job[]): boolean {
    state.selectedJobs = payload
    return true
  },
}
export const mutations = { ...geometryMutations, ...jobMutations }
