import PubSub from "./pubsub"
import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"
import { log } from "../lib/logger"

export type State = Record<string, any>

// This is a function in order to return a fresh state every time.
// I had issues where the initialState was changed by side effects.
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
  private state: State

  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State) {
    this.actions = actions
    this.events = new PubSub()
    this.mutations = mutations
    this.status = "resting"

    this.state = state || initialState()
  }

  getState(): State {
    return this.state
  }

  private setState(state: State): void {
    this.state = state
    log.debug(`stateChange: ${this.state}`)
    this.events.publish("STATE_CHANGE", this.state)
    if (this.status !== "mutation") {
      log.warn("You should use a mutation to set state")
    }
    this.status = "resting"
  }

  public dispatch(actionName: string, payload: any): boolean {
    log.debug("Calling action:", { actionName })
    if (typeof this.actions[actionName] !== "function") {
      log.error(`Action "${actionName}" doesn't exist.`)
      return false
    }
    this.status = "action"
    return this.actions[actionName](this, payload)
  }

  public commit(mutationName: string, payload: any): boolean {
    log.debug("Calling mutation:", { mutationName })

    if (typeof this.mutations[mutationName] !== "function") {
      log.error(`Mutation "${mutationName}" doesn't exist`)
      return false
    }
    this.status = "mutation"
    const nextState = this.mutations[mutationName](this.state, payload)

    this.setState(nextState)
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
