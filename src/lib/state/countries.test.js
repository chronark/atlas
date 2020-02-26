import Store, { initialState } from "./store"

describe("country actions", () => {
  describe("addCountries()", () => {
    describe("when the state is empty", () => {
      it("should handle single countries", () => {
        const store = new Store()
        const countries = [{ USA: "data" }]

        store.dispatch("addCountries", countries)

        expect(store.getState().countries.all).toEqual(countries)
      })

      it("should handle multiple countries", () => {
        const store = new Store()
        const countries = [{ USA: "data" }, { GER: "data" }, { ITA: "data" }]

        store.dispatch("addCountries", countries)

        expect(store.getState().countries.all).toEqual(countries)
      })
    })

    describe("when there are countries before", () => {
      it("should handle single countries", () => {
        const initialState = {
          jobs: {
            all: [],
            visible: [],
          },
          countries: {
            all: [{ USA: "data" }, { GER: "data" }, { ITA: "data" }],
            selected: [],
          },
        }
        const store = new Store(initialState)
        const countries = [{ RUS: "data" }]
        const want = [{ USA: "data" }, { GER: "data" }, { ITA: "data" }, { RUS: "data" }]

        store.dispatch("addCountries", countries)

        expect(store.getState().countries.all).toEqual(want)
      })

      it("should handle multiple countries", () => {
        const initialState = {
          jobs: {
            all: [],
            visible: [],
          },
          countries: {
            all: [{ USA: "data" }, { GER: "data" }, { ITA: "data" }],
            selected: [],
          },
        }
        const store = new Store()
        const countries = [{ RUS: "data" }, { ARG: "data" }]
        const want = [{ USA: "data" }, { GER: "data" }, { ITA: "data" }, { RUS: "data" }, { ARG: "data" }]
        expect(store.getState()).toBe(initialState)
        store.dispatch("addCountries", countries)
        expect(store.getState().countries.all).toEqual(countries)
      })
    })
  })

  describe("selectCountries()", () => {
    describe("when the state is empty", () => {
      it("should handle single countries", () => {
        const store = new Store()
        const countries = ["USA"]

        store.dispatch("selectCountries", countries)

        expect(store.getState().countries.selected).toEqual(countries)
      })

      it("should handle multiple countries", () => {
        const store = new Store()
        const countries = ["USA", "GER", "ITA"]

        store.dispatch("selectCountries", countries)

        expect(store.getState().countries.selected).toEqual(countries)
      })
    })

    describe("when there are countries before", () => {
      it("should handle single countries", () => {
        const initialState = {
          jobs: {
            all: [],
            visible: [],
          },
          countries: {
            all: ["USA", "GER", "ITA"],
            selected: [],
          },
        }
        const store = new Store(initialState)
        const countries = ["RUS"]
        const want = ["USA", "GER", "ITA", "RUS"]

        store.dispatch("selectCountries", countries)

        expect(store.getState().countries.selected).toEqual(want)
      })

      it("should handle multiple countries", () => {
        const initialState = {
          jobs: {
            all: [],
            visible: [],
          },
          countries: {
            all: ["USA", "GER", "ITA"],
            selected: [],
          },
        }
        const store = new Store()
        const countries = ["RUS", "ARG"]
        const want = ["USA", "GER", "ITA", "RUS", "ARG"]
        store.dispatch("selectCountries", countries)
        expect(store.getState().countries.selected).toEqual(want)
      })
    })
  })
})
