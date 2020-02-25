import State from "./store"
import { Job } from "../../types/customTypes"

export default {
  setJobs(state: State, payload: Job[]): void {
    state.commit("setJobs", payload)
  },
  setVisibleJobs(state: State, payload: Job[]) {
    state.commit("clearItem", payload)
  },
}
