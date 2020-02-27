import PubSub from "./pubsub"

describe("PubSub()", () => {
  it("should call the callback function with the correct payload", () => {
    const mockCallback = jest.fn((payload) => {})
    const pubsub = new PubSub()
    pubsub.subscribe("TEST_EVENT", mockCallback)
    pubsub.publish("TEST_EVENT", { key: "value" })
    expect(mockCallback).toHaveBeenCalledTimes(1)
    expect(mockCallback).toBeCalledWith({ key: "value" })
  })
})
