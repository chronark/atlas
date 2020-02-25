import State from "./store"
import { Job } from "../../types/customTypes"

export default {
  setJobs(state: Record<string, any>, payload: Job[]) {
    state.jobs.all = payload

    return state
  },
  clearItem(state: Record<string, any>, payload: any) {
    state.items.splice(payload.index, 1)

    return state
  },
}
