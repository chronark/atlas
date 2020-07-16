import { State, Store, initialState } from "./store"

import { Action } from "./actions"
import { Mutation } from "./mutations"
import { stateCallback } from "./events"

describe("Store()", () => {
  describe("constructor()", () => {
    describe("when no state is passed", () => {
      it("should have default initial state ", () => {
        const store = new Store({}, {})
        expect(store.getState()).toEqual(initialState())
      })
    })
    describe("when an customState is passed", () => {
      it("should have custom state ", () => {
        const customState: State = {
          allJobs: [
            {
              id: 0,
              corp: "Hello Corp",
              locations: [
                {
                  lat: 1.0,
                  lon: 1.0,
                },
              ],
              date: "",
              logo: "",
              score: Math.random(),
              title: "",
              type: "",
              url: "fake.domain.com",
            },
          ],
          visibleJobs: [],
          selectedJobs: [],
          selectedGeometries: [],
          allGeometries: [],
        }
        const store = new Store({}, {}, customState)

        expect(store.getState()).toStrictEqual(customState)
      })
    })
  })

  describe("dispatch()", () => {
    it("should dispatch an action successfully", () => {
      const setTestMutation: Mutation = (state: State, payload: string): boolean => {
        state.test = payload
        return true
      }
      const setTestAction: Action = (ctx: Store, payload: string): boolean => {
        return ctx.commit("setTestMutation", payload)
      }
      const customState = Object.assign(initialState(), {
        test: 0,
      })
      const want = Object.assign(initialState(), {
        test: 4,
      })

      const store = new Store({ setTestAction }, { setTestMutation }, customState)

      const success = store.dispatch("setTestAction", 4)
      expect(success).toBe(true)
      expect(store.getState()).toStrictEqual(want)
    })
  })

  describe("callback", () => {
    it("Publishes an event", () => {
      const setTestMutation: Mutation = (state: State, payload: string): boolean => {
        state.test = payload
        return true
      }
      const setTestAction: Action = (ctx: Store, payload: string): boolean => {
        return ctx.commit("setTestMutation", payload)
      }
      const customState = Object.assign(initialState(), {
        test: 0,
      })
      const store = new Store({ setTestAction }, { setTestMutation }, customState)
      jest.spyOn(store.events, "publish")

      const wantState = Object.assign(initialState(), {
        test: 2,
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
      const mockCallback: stateCallback = jest.fn((state) => {})
      store.events.subscribe(["STATE_CHANGE"], mockCallback)
      const success = store.dispatch("setTestAction", 2)
      expect(success).toBe(true)

      expect(store.events.publish).toHaveBeenCalledTimes(2)
      expect(store.events.publish).toHaveBeenNthCalledWith(1, "STATE_CHANGE", wantState)
      expect(store.events.publish).toHaveBeenNthCalledWith(2, "STATE_CHANGE_TEST", wantState)

      expect(mockCallback).toHaveBeenCalledTimes(1)
      expect(mockCallback).toBeCalledWith(wantState)
    })
  })
})
