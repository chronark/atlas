import PubSub from "./pubsub"
import actions from "./actions"
import mutations from "./mutations"
import { Job } from "../types/customTypes"
import { log } from "../lib/logger"

export interface State {
  jobs: {
    all: Job[]
    visible: Job[]
  }
  countries: {
    all: Record<string, any>[]
    selected: Record<string, any>[]
  }
  [key: string]: any
}

export const initialState: State = {
  jobs: {
    all: [],
    visible: [],
  },
  countries: {
    all: [],
    selected: [],
  },
}

export default class Store {
  private actions: Record<string, any>
  private mutations: Record<string, any>
  private status: string
  public events: PubSub
  public state: State

  constructor(state = initialState) {
    this.actions = actions
    this.events = new PubSub()
    this.mutations = mutations
    this.status = "resting"

    this.state = new Proxy(state, {
      set: (state: State, key: string, value: any): boolean => {
        state[key] = value
        log.debug(`stateChange: ${key}: ${value}`)
        this.events.publish("stateChange", this.state)
        if (this.status !== "mutation") {
          log.warn(`You should use a mutation to set ${key}`)
        }
        this.status = "resting"
        return true
      },
    })
  }

  public dispatch(actionName: string, payload: any): boolean {
    if (typeof this.actions[actionName] !== "function") {
      log.error(`Action "${actionName}" doesn't exist.`)
      return false
    }
    this.status = "action"
    this.actions[actionName](this, payload)

    return true
  }

  public commit(mutationName: string, payload: any): boolean {
    if (typeof this.mutations[mutationName] !== "function") {
      log.debug(`Mutation "${mutationName}" doesn't exist`)
      return false
    }
    this.status = "mutation"
    const newState = this.mutations[mutationName](this.state, payload)
    this.state = Object.assign(this.state, newState)
    return true
  }
}
