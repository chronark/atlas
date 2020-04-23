import Events from "./events"
import { initialState } from "./store"

describe("Events()", () => {
  it("should call the callback function with the correct payload", () => {
    const mockCallback = jest.fn((payload) => payload)
    const events = new Events()
    events.subscribe(["TEST_EVENT"], mockCallback)
    events.publish("TEST_EVENT", initialState())
    expect(mockCallback).toHaveBeenCalledTimes(1)
    expect(mockCallback).toBeCalledWith(initialState())
  })
})
