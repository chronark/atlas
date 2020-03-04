import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"

import Events from "./events"
import allHooks from "./hooks"
import { log } from "../lib/logger"

export type State = Record<string, any>

enum Status {
  action,
  listening,
  mutation,
}

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
  private status: Status
  public events: Events
  private state: State
  public hooks: Hook[]

  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State, hooks?: Hook[]) {
    this.actions = actions
    this.events = new Events()
    this.mutations = mutations
    this.status = Status.listening
    this.hooks = hooks || []

    this.state = state || initialState()
  }

  getState(): State {
    return this.state
  }

  private setState(nextState: State): void {
    if (this.status !== Status.mutation) {
      log.warn("You should use a mutation to set state")
    }

    const oldState = Object.assign({}, this.state)

    this.state = Object.assign({}, nextState)

    this.events.publish("STATE_CHANGE", this.state)
    this.hooks.forEach(hook => {
      hook(oldState, nextState, this.events)
    })

    this.status = Status.listening
  }

  public dispatch(actionName: string, payload: any): boolean {
    log.debug("Calling action:", { actionName, payload })
    if (typeof this.actions[actionName] !== "function") {
      log.error(`Action "${actionName}" doesn't exist.`)
      return false
    }
    this.status = Status.action
    return this.actions[actionName](this, payload)
  }

  public commit(mutationName: string, payload: any): boolean {
    log.debug("Calling mutation:", { mutationName, payload })

    if (typeof this.mutations[mutationName] !== "function") {
      log.error(`Mutation "${mutationName}" doesn't exist`)
      return false
    }
    this.status = Status.mutation

    const clonedState = JSON.parse(JSON.stringify(this.state))
    const nextState = this.mutations[mutationName](clonedState, payload)

    this.setState(nextState)
    return true
  }
}

/**
 * NewDefaultStore creates a Store instance with the default actions, mutations, initialState and all hooks.
 *
 * @returns A Store instance.
 */
export function newDefaultStore(): Store {
  return new Store(actions, mutations, initialState(), allHooks)
}
