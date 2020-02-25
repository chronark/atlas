import PubSub from "./pubsub"

export default class Store {
  private actions: Record<string, any>
  private mutations: Record<string, any>
  private state: Record<string, any>
  private status: string
  private events: PubSub

  constructor(actions: Record<string, any>, mutations: Record<string, any>, initialState: Record<string, any>) {
    this.actions = actions
    this.mutations = mutations
    /* eslint-disable */
    const self = this

    this.state = new Proxy(initialState, {
      set: function(state: Record<string, any>, key: string, value: any): boolean {
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
