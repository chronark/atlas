import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"

import Events from "./events"
import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import allHooks from "./hooks"
import { log } from "../lib/logger"

export type State = {
  jobs: {
    all: Job[]
    visible: Job[]
  }
  geometries: {
    all: Geometry[]
    selected: Geometry[]
  }
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
    jobs: {
      all: [],
      visible: [],
    },
    geometries: {
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
  public state: State
  public hooks: Hook[]

  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State, hooks?: Hook[]) {
    this.actions = actions
    this.events = new Events()
    this.mutations = mutations
    this.status = Status.listening
    this.hooks = hooks || []

    this.state = new Proxy(state || initialState(), {
      
      set: (state: State, key: string, value: any): boolean  => {
        // TODO
        /*
        Make state a flat object and create hooks for each change

        */ 
        console.log(state[key], value, state[key] === value)
        state[key] = value

        this.events.publish("STATE_CHANGE", state)
        console.log("stateChange: ", key, value)
        return true
      }
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

    let nextState =  this.mutations[mutationName](this.state, payload)
    this.state = Object.assign(this.state, nextState)
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
