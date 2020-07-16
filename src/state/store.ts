import { Action, actions } from "./actions"
import { Mutation, mutations } from "./mutations"

import Events from "./events"
import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"

export type State = {
  allJobs: Job[]
  visibleJobs: Job[]
  selectedJobs: Job[]
  allGeometries: Geometry[]
  selectedGeometries: Geometry[]
  test?: string
  [key: string]: any
}

/**
 * The store's status can be one of the following.
 * Action: The store is currently performing an action.
 * Listening: The store is ready for an action.
 * Mutation: The store is running a mutation right now. This is used to ensure you aren't calling a mutation by itself but always through an action.
 *
 * @enum
 */
enum Status {
  action,
  listening,
  mutation,
}

/**
 * Create a fresh state.
 * I had issues where the initialState was changed by side effects. So instead of defining this as an object, it returns a new object every time it is called.
 *
 * @returns
 */
export const initialState = (): State => {
  return {
    allJobs: [],
    visibleJobs: [],
    selectedJobs: [],
    allGeometries: [],
    selectedGeometries: [],
  }
}

/**
 * State manager for all map business.
 *
 * @class Store
 */
export class Store {
  private actions: Record<string, Action>
  private mutations: Record<string, Mutation>
  private status: Status
  public events: Events
  private state: State

  /**
   * Creates an instance of Store.
   *
   * @param actions
   * @param mutations
   * @param [state]
   * @memberof Store
   */
  constructor(actions: Record<string, Action>, mutations: Record<string, Mutation>, state?: State) {
    this.actions = actions
    this.events = new Events()
    this.mutations = mutations
    this.status = Status.listening

    this.state = new Proxy(state || initialState(), {
      set: (state: State, key: string, value: Job[] | Geometry[]): boolean => {
        state[key] = value

        this.events.publish("STATE_CHANGE", state)
        this.events.publish("STATE_CHANGE_" + key.toUpperCase(), state)

        this.status = Status.listening
        return true
      },
    })
  }

  /**
   * Getter method.
   *
   * @returns
   * @memberof Store
   */
  public getState(): State {
    return this.state
  }

  /**
   * Run an action to perform state change.
   *
   * Always use this if you want the state to change.
   *
   * @param  actionName
   * @param  payload
   * @returns Return whether action was performed successful or not.
   * @memberof Store
   */
  public dispatch(actionName: string, payload: any): boolean {
    if (typeof this.actions[actionName] !== "function") {
      console.error(`Action "${actionName}" doesn't exist.`)
      return false
    }
    this.status = Status.action
    return this.actions[actionName](this, payload)
  }

  /**
   * Run a mutation against the current state.
   *
   * This function is public to work properly with custom actions but you *must never* call this yourself!
   *
   * @param  mutationName
   * @param payload
   * @returns Return whether mutation was performed successful or not.
   * @memberof Store
   */
  public commit(mutationName: string, payload: any): boolean {
    if (typeof this.mutations[mutationName] !== "function") {
      console.error(`Mutation "${mutationName}" doesn't exist`)
      return false
    }
    this.status = Status.mutation

    return this.mutations[mutationName](this.state, payload)
  }
}

/**
 * NewDefaultStore creates a Store instance with the default actions, mutations, initialState and all hooks.
 *
 * This is mainly used for testing.
 *
 * @returns
 */
export function newDefaultStore(): Store {
  return new Store(actions, mutations, initialState())
}

export const globalStore = newDefaultStore()
