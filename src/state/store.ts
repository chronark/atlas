import Events from "./events"
import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"
import { log } from "../lib/logger"
import { visibleJobsHook, allCountriesHook, allJobsHook, selectedCountriesHook } from "./hooks"
export type State = Record<string, any>

export type Hook = (currentState: State, nextState: State, events: Events) => void

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
  public events: Events
  private state: State
  public hooks: Hook[]

  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State, hooks?: Hook[]) {
    this.actions = actions
    this.events = new Events()
    this.mutations = mutations
    this.status = "resting"
    this.hooks = hooks || []

    this.state = state || initialState()
  }

  getState(): State {
    return this.state
  }

  private setState(nextState: State): void {
    console.error(this.state, nextState, this.state === nextState)

    this.hooks.forEach(h => {
      h(this.state, nextState, this.events)
    })

    this.state = nextState
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

    const clonedState = JSON.parse(JSON.stringify(this.state))
    const nextState = this.mutations[mutationName](clonedState, payload)

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
  return new Store(actions, mutations, initialState(), [
    visibleJobsHook,
    allCountriesHook,
    allJobsHook,
    selectedCountriesHook,
  ])
}
