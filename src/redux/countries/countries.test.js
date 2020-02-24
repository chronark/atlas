import { addSelectedCountries } from "../../../src/redux/countries/actions"
import { ADD_SELECTED_COUNTRIES, REMOVE_SELECTED_COUNTRIES } from "../../../src/redux/countries/types"
import reducer from "../../../src/redux/countries/reducer"
describe("actions", () => {
  it("should create an action to add selected countries", () => {
    const countries = ["USA", "GER", "ITA"]
    const expectedAction = {
      type: ADD_SELECTED_COUNTRIES,
      payload: countries,
    }
    expect(addSelectedCountries(countries)).toEqual(expectedAction)
  })
})

describe("reducer", () => {
  let initialState
  beforeEach(() => {
    initialState = {
      allCountries: [],
      selectedCountries: [],
    }
  })

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  describe("ADD_SELECTED_COUNTRIES", () => {
    it("should handle a single country", () => {
      const countries = ["USA"]
      expect(
        reducer(initialState, {
          type: ADD_SELECTED_COUNTRIES,
          payload: countries,
        }),
      ).toEqual({
        allCountries: [],
        selectedCountries: countries,
      })
    })
  })
  it("should handle multiple countries", () => {
    const countries = ["USA", "GER", "ITA"]
    expect(
      reducer(initialState, {
        type: ADD_SELECTED_COUNTRIES,
        payload: countries,
      }),
    ).toEqual({
      allCountries: [],
      selectedCountries: countries,
    })
  })
  describe("REMOVE_SELECTED_COUNTRIES", () => {
    beforeEach(() => {
      initialState = {
        allCountries: [],
        selectedCountries: ["USA", "GER", "ITA"],
      }
    })
    describe("when the country exists", () => {
      it("should handle a single country", () => {
        expect(
          reducer(initialState, {
            type: REMOVE_SELECTED_COUNTRIES,
            payload: ["ITA"],
          }),
        ).toEqual({
          allCountries: [],
          selectedCountries: ["USA", "GER"],
        })
      })
    })
    it("should handle multiple countries", () => {
      expect(
        reducer(initialState, {
          type: REMOVE_SELECTED_COUNTRIES,
          payload: ["ITA", "GER"],
        }),
      ).toEqual({
        allCountries: [],
        selectedCountries: ["USA"],
      })
    })
  })
})
