import PubSub from "./pubsub"
import actions from "./actions"
import mutations from "./mutations"
import { Job } from "../../types/customTypes"
import { log } from "../logger"

export interface State {
  jobs: {
    all: Job[]
    visible: Job[]
  }
  countries: {
    all: Record<string, any>[]
    selected: string[]
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
  private state: State
  private status: string
  private events: PubSub

  constructor(state = initialState) {
    this.actions = actions
    this.mutations = mutations
    /* eslint-disable */
    const self = this

    this.state = new Proxy(state || {}, {
      set: function(state: State, key: string, value: any): boolean {
        state[key] = value
        log.debug(`stateChange: ${key}: ${value}`)
        self.events.publish("stateChange", self.state)
        if (self.status !== "mutation") {
          log.warn(`You should use a mutation to set ${key}`)
        }
        self.status = "resting"
        return true
      },
    })
    this.status = "resting"
    this.events = new PubSub()
  }

  getEvents(): PubSub {
    return this.events
  }

  getState(): Record<string, any> {
    return this.state
  }

  dispatch(actionName: string, payload: any): boolean {
    if (typeof this.actions[actionName] !== "function") {
      log.error(`Action "${actionName}" doesn't exist.`)
      return false
    }
    this.status = "action"
    this.actions[actionName](this, payload)

    return true
  }

  commit(mutationName: string, payload: any): boolean {
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
