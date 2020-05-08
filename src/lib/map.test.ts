import Map from "./map"
import { carthesianProduct } from "./util"
describe("map.zoomTo", () => {
  let map: Map

  beforeEach(() => {
    map = new Map("div-id")
  })

  const zoomLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const latLevels = [-45, 0, 45]
  const lonLevels = latLevels.map((x) => x * 2)
  const testCases = carthesianProduct([latLevels, lonLevels, zoomLevels]).map((tc) => {
    return {
      lat: tc[0],
      lon: tc[1],
      zoom: tc[2],
    }
  })
  testCases.forEach((tc) => {
    it(`should set the correct view with lat: ${tc.lat}, lon: ${tc.lon}, zoom: ${tc.zoom}`, () => {
      map.setView(tc.lon, tc.lat, tc.zoom)
      const view = map.olmap.getView()
      expect(view.getZoom()).toBe(tc.zoom)
      expect(view.getCenter()[0]).toBe(tc.lat)
      expect(view.getCenter()[1]).toBe(tc.lon)
    })
  })
})
