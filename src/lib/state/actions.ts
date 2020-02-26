import Store from "./store"
import { Job } from "../../types/customTypes"

export default {
  setJobs(ctx: Store, payload: Job[]): void {
    ctx.commit("setJobs", payload)
  },
  setVisibleJobs(ctx: Store, payload: Job[]) {
    ctx.commit("clearItem", payload)
  },
  addCountries(ctx: Store, payload: Record<string, any>): void {
    ctx.commit("addCountries", payload)
  },
  selectCountries(ctx: Store, payload: string[]): void {
    ctx.commit("selectountry", payload)
  },
  unselectCountries(ctx: Store, payload: string[]): void {
    ctx.commit("unselectCountry", payload)
  },
}
