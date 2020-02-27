/* eslint-disable no-console */

import { LogObject } from "../types/customTypes"

class Logger {
  public constructor() {
    switch (process.env.NODE_ENV) {
      case "production":
        this.disableConsole()
        break
      case "test":
        this.disableConsole()
        break
      default:
        this.info("Development mode detected, verbose-logging enabled.")
        break
    }
  }

  private disableConsole(): void {
    if (window) {
      window.console.log = () => {}
      window.console.warn = () => {}
      window.console.error = () => {}
      window.console.debug = () => {}
    }
  }

  private buildPayload(level: string, payload: LogObject): LogObject {
    if (typeof payload !== "object") {
      payload = { payload }
    }
    payload.timestamp = new Date()
    payload.level = level
    return payload
  }

  public debug(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("debug", payload)
    console.debug(text, payload)
  }

  public info(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("info", payload)
    console.log(text, payload)
  }

  public warn(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("warn", payload)
    console.warn(text, payload)
  }

  public error(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("error", payload)
    console.error(text, payload)
  }
}

const log = new Logger()
export { log }
