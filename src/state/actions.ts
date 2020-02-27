import { Store } from "./store"
import { Job } from "../types/customTypes"

export type Action = (ctx: Store, payload: any) => boolean

export const countryActions: Record<string, Action> = {
  addCountries(ctx: Store, payload: Record<string, any>[]): boolean {
    return ctx.commit("addCountries", payload)
  },
  selectCountries(ctx: Store, payload: Record<string, any>[]): boolean {
    return ctx.commit("selectCountries", payload)
  },
  unselectCountries(ctx: Store, payload: Record<string, any>[]): boolean {
    return ctx.commit("unselectCountries", payload)
  },
}

export const jobActions: Record<string, Action> = {
  setJobs(ctx: Store, payload: Job[]): boolean {
    return ctx.commit("setJobs", payload)
  },
  setVisibleJobs(ctx: Store, payload: Job[]) {
    return ctx.commit("clearItem", payload)
  },
}
export const actions: Record<string, Action> = { ...countryActions, ...jobActions }
