import { Store, State, initialState } from "./store"

describe("Store()", () => {
  describe("constructor()", () => {
    describe("when no state is passed", () => {
      it("should have default initial state ", () => {
        const store = new Store({}, {})
        expect(store.getState()).toEqual(initialState())
      })
    })
    describe("when an initialState is passed", () => {
      it("should have custom state ", () => {
        const customState: State = {
          someKey: {
            key: [1, 2, 4, 5, 5],
            selected: [
              {
                hello: "world",
              },
            ],
          },
        }
        const store = new Store({}, {}, customState)

        expect(store.getState()).toStrictEqual(customState)
      })
    })
  })

  describe("dispatch()", () => {
    it("should dispatch an action successfully", () => {
      /*
       * SET UP
       */
      const setCounterMutation = (state: State, payload: string): State => {
        state.counter = payload
        return state
      }
      const setCounterAction = (ctx: Store, payload: string): boolean => {
        return ctx.commit("setCounterMutation", payload)
      }
      const initialState = {
        counter: 0,
      }

      const store = new Store({ setCounterAction }, { setCounterMutation }, initialState)

      const success = store.dispatch("setCounterAction", 4)
      expect(success).toBe(true)
      expect(store.getState()).toStrictEqual({
        counter: 4,
      })
    })
  })

  describe("callback", () => {
    it("Publishes an event", () => {
      const setCounterMutation = (state: State, payload: string): State => {
        state.counter = payload
        return state
      }
      const setCounterAction = (ctx: Store, payload: string): boolean => {
        return ctx.commit("setCounterMutation", payload)
      }
      const initialState = {
        counter: 0,
      }
      const store = new Store({ setCounterAction }, { setCounterMutation }, initialState)
      jest.spyOn(store.events, "publish")

      const mockCallback = jest.fn(payload => {})
      store.events.subscribe("STATE_CHANGE", mockCallback)
      const success = store.dispatch("setCounterAction", 2)
      expect(success).toBe(true)

      expect(store.events.publish).toHaveBeenCalledTimes(1)
      expect(store.events.publish).toHaveBeenNthCalledWith(1, "STATE_CHANGE", { counter: 2 })

      expect(mockCallback).toHaveBeenCalledTimes(1)
      expect(mockCallback).toBeCalledWith({ counter: 2 })
    })
  })
})
