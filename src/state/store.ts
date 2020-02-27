import PubSub from "./pubsub"
import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"
import { log } from "../lib/logger"

export type State = Record<string, any>

export const initialState = (): State => {
  return {
    jobs: {
      all: [],
      visible: [],
    },
    countries: {
      all: [],
      selected: [],
    },
  }
}
export class Store {
  private actions: Record<string, Action>
  private mutations: Record<string, Mutation>
  private status: string
  public events: PubSub
  public state: State

  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State) {
    this.actions = actions
    this.events = new PubSub()
    this.mutations = mutations
    this.status = "resting"

    this.state = new Proxy(state || initialState(), {
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
    return this.actions[actionName](this, payload)
  }

  public commit(mutationName: string, payload: any): boolean {
    if (typeof this.mutations[mutationName] !== "function") {
      log.debug(`Mutation "${mutationName}" doesn't exist`)
      return false
    }
    this.status = "mutation"
    const newState = this.mutations[mutationName](this.state, payload)
    this.state = { ...this.state, ...newState }
    return true
  }
}

/**
 * NewDefaultStore creates a Store instance with the default actions, mutations and initialState.
 *
 * @returns A Store instance.
 */
export function newDefaultStore(): Store {
  return new Store(actions, mutations, initialState())
}
