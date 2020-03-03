import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { Store } from "./store"

export type Action = (ctx: Store, payload: any) => boolean

export const countryActions: Record<string, Action> = {
  addGeometries(ctx: Store, payload: Geometry[]): boolean {
    return ctx.commit("addGeometries", payload)
  },
  selectGeometries(ctx: Store, payload: Geometry[]): boolean {
    return ctx.commit("selectGeometries", payload)
  },
  unselectGeometries(ctx: Store, payload: Record<string, any>[]): boolean {
    return ctx.commit("unselectGeometries", payload)
  },
}

export const jobActions: Record<string, Action> = {
  setJobs(ctx: Store, payload: Job[]): boolean {
    return ctx.commit("setJobs", payload)
  },
  setVisibleJobs(ctx: Store, payload: Job[]) {
    return ctx.commit("setVisibleJobs", payload)
  },
}
export const actions: Record<string, Action> = { ...countryActions, ...jobActions }
