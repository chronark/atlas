import { Store } from "./store"
import { countryActions } from "./actions"
import { countryMutations } from "./mutations"

const initialState = (): Record<string, any> => {
  return {
    countries: {
      all: [],
      selected: [],
    },
  }
}

describe("country actions", () => {
  describe("addCountries()", () => {
    describe("when the state is empty", () => {
      it("should handle single countries", () => {
        const store = new Store(countryActions, countryMutations, initialState())
        const countries = [{ USA: "data" }]

        const success = store.dispatch("addCountries", countries)
        expect(success).toBe(true)
        expect(store.getState().countries.all).toStrictEqual(countries)
      })

      it("should handle multiple countries", () => {
        const store = new Store(countryActions, countryMutations, initialState())
        const countries = [{ USA: "data" }, { GER: "data" }, { ITA: "data" }]

        const success = store.dispatch("addCountries", countries)
        expect(success).toBe(true)
        expect(store.getState().countries.all).toStrictEqual(countries)
      })
    })

    describe("when there are countries before", () => {
      it("should handle single countries", () => {
        const customState = {
          countries: {
            all: [{ USA: "data" }, { GER: "data" }, { ITA: "data" }],
            selected: [],
          },
        }
        const store = new Store(countryActions, countryMutations, customState)
        const countries = [{ RUS: "data" }]
        const want = [{ USA: "data" }, { GER: "data" }, { ITA: "data" }, { RUS: "data" }]

        const success = store.dispatch("addCountries", countries)
        expect(success).toBe(true)
        expect(store.getState().countries.all).toStrictEqual(want)
      })

      it("should handle multiple countries", () => {
        const initialState = {
          countries: {
            all: [{ USA: "data" }, { GER: "data" }, { ITA: "data" }],
            selected: [],
          },
        }
        const store = new Store(countryActions, countryMutations, initialState)

        const countries = [{ RUS: "data" }, { ARG: "data" }]
        const want = [{ USA: "data" }, { GER: "data" }, { ITA: "data" }, { RUS: "data" }, { ARG: "data" }]
        const success = store.dispatch("addCountries", countries)
        expect(success).toBe(true)
        expect(store.getState().countries.all).toStrictEqual(want)
      })
    })
  })

  describe("selectCountries()", () => {
    describe("when the state is empty", () => {
      it("should handle single countries", () => {
        const store = new Store(countryActions, countryMutations, initialState())

        const countries = [{ USA: "USA" }]

        const success = store.dispatch("selectCountries", countries)
        expect(success).toBe(true)
        expect(store.getState().countries.selected).toStrictEqual(countries)
      })

      it("should handle multiple countries", () => {
        const store = new Store(countryActions, countryMutations, initialState())

        const countries = [{ USA: "USA" }, { GER: "GER" }, { ITA: "ITA" }]

        const success = store.dispatch("selectCountries", countries)
        expect(success).toBe(true)
        expect(store.getState().countries.selected).toStrictEqual(countries)
      })
    })

    describe("when there are countries before", () => {
      it("should handle single countries", () => {
        const customState = {
          countries: {
            all: [],
            selected: [{ GER: "ger" }, { ITA: "ita" }],
          },
        }
        const store = new Store(countryActions, countryMutations, customState)

        const countries = [{ USA: "usa" }]
        const want = [{ USA: "usa" }, { GER: "ger" }, { ITA: "ita" }]

        const success = store.dispatch("selectCountries", countries)

        expect(success).toBe(true)
        // Workaround because jest cannot match arrays that might have different order of elements.
        expect(store.getState().countries.selected.length).toBe(want.length)
        expect(new Set(store.getState().countries.selected)).toEqual(new Set(want))
      })

      it("should handle multiple countries", () => {
        const customState = {
          countries: {
            all: [],
            selected: [{ USA: "usa" }, { GER: "ger" }, { ITA: "ita" }],
          },
        }
        const store = new Store(countryActions, countryMutations, customState)
        const countries = [{ USA: "usa" }, { ALG: "alg" }]
        const want = [{ USA: "usa" }, { GER: "ger" }, { ITA: "ita" }, { ALG: "alg" }]
        const success = store.dispatch("selectCountries", countries)

        expect(success).toBe(true)
        // Workaround because jest cannot match arrays that might have different order of elements.
        expect(store.getState().countries.selected.length).toBe(want.length)
        expect(new Set(store.getState().countries.selected)).toEqual(new Set(want))
      })
    })
  })
})
