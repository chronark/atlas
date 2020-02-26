import Store, { initialState } from "./store"

describe("Store()", () => {
  describe("when no state is passed", () => {
    it("should have default initial state ", () => {
      const store = new Store()
      expect(store.getState()).toEqual(initialState)
    })
  })
  describe("when an initialState is passed", () => {
    it("should have custom state ", () => {
      const customState = {
        jobs: {
          all: [],
          visible: [],
        },
        countries: {
          all: [],
          selected: ["Hello", "World"],
        },
      }
      const store = new Store(customState)
      expect(store.getState()).toStrictEqual(customState)
    })
  })
})
