export default class PubSub {
  private events: Record<string, any>
  constructor() {
    this.events = {}
  }

  public subscribe(event: string, callback: CallableFunction): void {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = []
    }
    return this.events[event].push(callback)
  }

  public publish(event: string, data = {}): Record<string, any> {
    if (!this.events.hasOwnProperty(event)) {
      return {}
    }
    return this.events[event].map((callback: (data: Record<string, any>) => void) => callback(data))
  }
}
