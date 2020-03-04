export default class Events {
  private events: Record<string, any>
  constructor() {
    this.events = {}
  }

  public subscribe(events: string[], callback: CallableFunction): void {
    events.forEach(event => {
      if (!this.events.hasOwnProperty(event)) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    })
  }

  public publish(event: string, data = {}): Record<string, any> {
    if (!this.events.hasOwnProperty(event)) {
      return {}
    }
    return this.events[event].map((callback: (data: Record<string, any>) => void) => callback(data))
  }
}
