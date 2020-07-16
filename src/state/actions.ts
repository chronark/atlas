import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { Store } from "./store"

export type Action = (ctx: Store, payload: any) => boolean
/**
 * Collection if geometry actions.
 */
export const geometryActions: Record<string, Action> = {
  /**
   * Add geometries to allGeometries.
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  addGeometries(ctx: Store, payload: Geometry[]): boolean {
    return ctx.commit("addGeometries", payload)
  },
  /**
   * Add geometries to selectedGeometries.
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  selectGeometries(ctx: Store, payload: Geometry[]): boolean {
    return ctx.commit("selectGeometries", payload)
  },
  /**
   * Remove geometries from selectedGeometries.
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  unselectGeometries(ctx: Store, payload: Record<string, any>[]): boolean {
    return ctx.commit("unselectGeometries", payload)
  },
  /**
   * Overwrite selectedGeometries.
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  setSelectedGeometries(ctx: Store, payload: Record<string, any>[]): boolean {
    return ctx.commit("setSelectecGeometries", payload)
  },
}
/**
 * Collection of job actions.
 */
export const jobActions: Record<string, Action> = {
  /**
   * Replace jobs in allJobs.
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  setJobs(ctx: Store, payload: Job[]): boolean {
    return ctx.commit("setJobs", payload)
  },
  /**
   * Replace jobs in visibleJobs.
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  setVisibleJobs(ctx: Store, payload: Job[]) {
    return ctx.commit("setVisibleJobs", payload)
  },
  /**
   * Replace jobs in selectedJobs.
   
   *
   * @param ctx
   * @param  payload
   * @returns
   */
  setSelectedJobs(ctx: Store, payload: Job[]) {
    return ctx.commit("setSelectedJobs", payload)
  },
}

export const actions: Record<string, Action> = { ...geometryActions, ...jobActions }
