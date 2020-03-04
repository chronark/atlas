import { State } from "./store"

export type stateCallback = (state: State) => void

export default class Events {
  private events: Record<string, any>
  constructor() {
    this.events = {}
  }

  public subscribe(events: string[], callback: stateCallback): void {
    events.forEach(event => {
      if (!this.events.hasOwnProperty(event)) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    })
  }

  public publish(event: string, state: State): void {
    if (this.events.hasOwnProperty(event)) {
      this.events[event].forEach((callback: stateCallback) => callback(state))
    }
  }
}
