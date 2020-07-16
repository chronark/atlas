import { State } from "./store"

export type stateCallback = (state: State) => void

/**
 * A PubSub implementation for callbacks used in atlas.
 *
 * @class Events
 */
export default class Events {
  private events: Record<string, any>
  /**
   *Creates an instance of Events.
   *
   * @memberof Events
   */
  constructor() {
    this.events = {}
  }

  /**
   * Subscribe to one or more events.
   *
   * @param events
   * @param callback - Will be called whenever one of the events fires.
   * @memberof Events
   */
  public subscribe(events: string[], callback: stateCallback): void {
    events.forEach((event) => {
      if (!this.events.hasOwnProperty(event)) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    })
  }

  /**
   * Calls all subscribers.
   *
   * @param  event - The triggered event.
   * @param  state - All subscribed callback will receive the current state as parameter.
   * @memberof Events
   */
  public publish(event: string, state: State): void {
    if (this.events.hasOwnProperty(event)) {
      this.events[event].forEach((callback: stateCallback) => callback(state))
    }
  }
}
