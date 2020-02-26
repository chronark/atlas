import State from "./store"
import { Job } from "../../types/customTypes"

export default {
  setJobs(state: State, payload: Job[]): void {
    state.commit("setJobs", payload)
  },
  setVisibleJobs(state: State, payload: Job[]) {
    state.commit("clearItem", payload)
  },
  addCountry(state: State, payload: Record<string, any>): void {
    state.commit("addCountry", payload)
  },
  selectCountry(state: State, payload: Record<string, any>): void {
    state.commit("selectountry", payload)
  },
  unselectCountry(state: State, payload: Record<string, any>): void {
    state.commit("unselectCountry", payload)
  },
}
