import Events from "./events"

describe("Events()", () => {
  it("should call the callback function with the correct payload", () => {
    const mockCallback = jest.fn(payload => payload)
    const events = new Events()
    events.subscribe(["TEST_EVENT"], mockCallback)
    events.publish("TEST_EVENT", { key: "value" })
    expect(mockCallback).toHaveBeenCalledTimes(1)
    expect(mockCallback).toBeCalledWith({ key: "value" })
  })
})
