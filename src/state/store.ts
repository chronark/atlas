import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"

import Events from "./events"
import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { log } from "../lib/logger"

export type State = {
  allJobs: Job[]
  visibleJobs: Job[]
  allGeometries: Geometry[]
  selectedGeometries: Geometry[]
  test?: string
  [key: string]: any
}

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
    allJobs: [],
    visibleJobs: [],
    allGeometries: [],
    selectedGeometries: [],
  }
}

export class Store {
  private actions: Record<string, Action>
  private mutations: Record<string, Mutation>
  private status: Status
  public events: Events
  private state: State
  public hooks: Hook[]

  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State) {
    this.actions = actions
    this.events = new Events()
    this.mutations = mutations
    this.status = Status.listening

    this.state = new Proxy(state || initialState(), {
      set: (state: State, key: string, value: Job[] | Geometry[]): boolean => {
        state[key] = value
        console.group(key)
        this.events.publish("STATE_CHANGE", state)
        this.events.publish("STATE_CHANGE_" + key.toUpperCase(), state)

        console.warn("stateChange: ", key, value.length)
        console.groupEnd()
        this.status = Status.listening
        return true
      },
    })
  }

  getState(): State {
    return this.state
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

    return this.mutations[mutationName](this.state, payload)
  }
}

/**
 * NewDefaultStore creates a Store instance with the default actions, mutations, initialState and all hooks.
 *
 * @returns A Store instance.
 */
export function newDefaultStore(): Store {
  return new Store(actions, mutations, initialState())
}
