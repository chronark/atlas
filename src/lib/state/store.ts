import PubSub from "./pubsub"
import actions from "./actions"
import mutations from "./mutations"

export type State = Record<string, any>

const initialState: State = {
  jobs: {
    all: [],
    visible: [],
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

    this.state = new Proxy(state, {
      set: function(state: State, key: string, value: any): boolean {
        state[key] = value
        console.log(`stateChange: ${key}: ${value}`)
        self.events.publish("stateChange", self.state)
        if (self.status !== "mutation") {
          console.warn(`You should use a mutation to set ${key}`)
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

  dispatch(key: string, payload: any): boolean {
    if (typeof this.actions[key] !== "function") {
      console.error(`Action "${key}" doesn't exist.`)
      return false
    }
    console.groupCollapsed(`ACTION: ${key}`)
    this.status = "action"
    this.actions[key](this, payload)
    console.groupEnd()

    return true
  }

  commit(key: string, payload: any): boolean {
    if (typeof this.mutations[key] !== "function") {
      console.log(`Mutation "${key}" doesn't exist`)
      return false
    }
    this.status = "mutation"
    const newState = this.mutations[key](this.state, payload)
    this.state = Object.assign(this.state, newState)
    return true
  }
}
