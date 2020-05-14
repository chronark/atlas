import Map, { MapOpts } from "./map"
import { carthesianProduct } from "./util"
import { View } from "ol"
import { fromLonLat } from "ol/proj"
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
  it("should set the correct view", () => {
    testCases.forEach((tc) => {
      map.setView(tc.lon, tc.lat, tc.zoom)
      const view = map.olmap.getView()
      expect(view.getZoom()).toBe(tc.zoom)
      expect(view.getCenter()[0]).toBe(tc.lat)
      expect(view.getCenter()[1]).toBe(tc.lon)
    })
  })
})

describe('creating a View from user options', () => {
  describe('without argument', () => {
    const map = new Map("mapID")
    expect(map.olmap.getView().getCenter()).toEqual(fromLonLat([0, 45]))
    expect(map.olmap.getView().getZoom()).toBe(2)
  })
  describe('with', () => {


    const testCases: { name: string, opts: MapOpts, want: {center: any, zoom: number} }[] = [
      {
        name: "view",
        opts: {
          view: {
            lat: 0,
            lon: 0,
            zoom: 0,
          }
        },
        want: {
         center: fromLonLat([0,0]),
         zoom: 0,
        }
      }, {
        name: "extent",
        opts: {
          extent: [1, 2, 3, 4]
        },
        want: {
         center: [2,3],
         zoom: 22.900055975044722
        }
      },
      {
        name: "view and extent",
        opts: {
          extent: [1, 2, 3, 4],
          view: {
            lat: 0,
            lon: 0,
            zoom: 0,
          }
        },
        want: {
         center: fromLonLat([0,0]),
         zoom: 0
        }
      }
    ]
    testCases.forEach(tc => {
      it(tc.name, () => {
        const map = new Map("mapID", tc.opts)
        expect(map.olmap.getView().getCenter()).toEqual(tc.want.center)
        expect(map.olmap.getView().getZoom()).toBe(tc.want.zoom)
      });
    })

  })
})
