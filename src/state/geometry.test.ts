import { State, Store } from "./store"

import { Circle } from "ol/geom"
import { geometryActions } from "./actions"
import { geometryMutations } from "./mutations"

const circles = [
  new Circle([1, 1], 1),
  new Circle([2, 2], 2),
  new Circle([3, 3], 3),
  new Circle([4, 4], 4),
  new Circle([5, 5], 5),
]

const initialState = (): State => {
  return {
    allJobs: [],
    visibleJobs: [],
    selectedGeometries: [],
    allGeometries: circles.slice(0, 1),
  }
}

describe("geometry actions", () => {
  describe("addGeometries()", () => {
    describe("when the state is empty", () => {
      it("should handle a single geometry", () => {
        const store = new Store(geometryActions, geometryMutations, initialState())
        const geometries = circles.slice(0, 1)

        const success = store.dispatch("addGeometries", geometries)
        expect(success).toBe(true)
        expect(store.getState().allGeometries).toStrictEqual(geometries)
      })

      it("should handle multiple geometries", () => {
        const store = new Store(geometryActions, geometryMutations, initialState())
        const geometries = circles

        const success = store.dispatch("addGeometries", geometries)
        expect(success).toBe(true)
        expect(store.getState().allGeometries).toStrictEqual(geometries)
      })
    })

    describe("when there are geometries before", () => {
      it("should handle single geometries", () => {
        const customState = Object.assign(initialState(), {
          allGeometries: circles.slice(0, 4),
        })

        const store = new Store(geometryActions, geometryMutations, customState)
        const geometries = circles.slice(4, 5)
        const want = circles.slice(0, 5)

        const success = store.dispatch("addGeometries", geometries)
        expect(success).toBe(true)
        expect(store.getState().allGeometries).toStrictEqual(want)
      })

      it("should handle multiple geometries", () => {
        const customState = Object.assign(initialState(), {
          allGeometries: circles.slice(0, 4),
        })

        const store = new Store(geometryActions, geometryMutations, customState)

        const geometries = circles.slice(4, 6)
        const want = circles.slice(0, 6)
        const success = store.dispatch("addGeometries", geometries)
        expect(success).toBe(true)
        expect(store.getState().allGeometries).toStrictEqual(want)
      })
    })
  })

  describe("selectGeometries()", () => {
    describe("when the state is empty", () => {
      it("should handle single geometries", () => {
        const store = new Store(geometryActions, geometryMutations, initialState())

        const geometries = circles.slice(0, 1)

        const success = store.dispatch("selectGeometries", geometries)
        expect(success).toBe(true)
        expect(store.getState().selectedGeometries).toStrictEqual(geometries)
      })

      it("should handle multiple geometries", () => {
        const store = new Store(geometryActions, geometryMutations, initialState())

        const geometries = circles

        const success = store.dispatch("selectGeometries", geometries)
        expect(success).toBe(true)
        expect(store.getState().selectedGeometries).toStrictEqual(geometries)
      })
    })

    describe("when there are geometries before", () => {
      it("should handle single geometries", () => {
        const customState = Object.assign(initialState(), {
          selectedGeometries: circles.slice(0, 4),
        })
        const store = new Store(geometryActions, geometryMutations, customState)

        const geometries = circles.slice(4, 5)
        const want = circles.slice(0, 5)

        const success = store.dispatch("selectGeometries", geometries)

        expect(success).toBe(true)
        // Workaround because jest cannot match arrays that might have different order of elements.
        expect(store.getState().selectedGeometries.length).toBe(want.length)
        expect(new Set(store.getState().selectedGeometries)).toEqual(new Set(want))
      })

      it("should handle multiple geometries", () => {
        const customState = Object.assign(initialState(), {
          selectedGeometries: circles.slice(0, 3),
        })

        const store = new Store(geometryActions, geometryMutations, customState)
        const geometries = circles.slice(3, 5)
        const want = circles.slice(0, 5)
        const success = store.dispatch("selectGeometries", geometries)

        expect(success).toBe(true)
        // Workaround because jest cannot match arrays that might have different order of elements.
        expect(store.getState().selectedGeometries.length).toBe(want.length)
        expect(new Set(store.getState().selectedGeometries)).toEqual(new Set(want))
      })
    })
  })
})
