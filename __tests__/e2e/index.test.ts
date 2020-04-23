/* eslint-disable jest/expect-expect */

import { Selector } from "testcafe"
fixture(`Map UI`).page("localhost:5000")

test("map-container exists", async (t) => {
  const mapDiv = Selector("#map-container")
  await t.expect(mapDiv.exists).ok()
})

test("ol-viewport exists", async (t) => {
  const viewport = Selector(".ol-viewport")
  await t.expect(viewport.exists).ok()
})

test("zoom in", async (t) => {
  const zoomIn = Selector(".ol-zoom").find(".ol-zoom-in")
  await t.expect(zoomIn.exists).ok().click(zoomIn)
})
test("zoom out", async (t) => {
  const zoomOut = Selector(".ol-zoom").find(".ol-zoom-out")
  await t.expect(zoomOut.exists).ok().click(zoomOut)
})
test("ol-attribution", async (t) => {
  const attribution = Selector(".ol-attribution")
  await t.expect(attribution.exists).ok()

  await t.click(attribution).expect(attribution.innerText).contains("OpenStreetMap")
})

test("can click canvas", async (t) => {
  const canvas = Selector("canvas")
  await t.expect(canvas.exists).ok()
  await t.setTestSpeed(0.1).click(canvas, { offsetX: 100, offsetY: 100 })
})

test("can enter a search string", async (t) => {
  const searchBar = Selector("#searchForm")
  const searchSubmit = Selector("#searchSubmit")
  await t.expect(searchBar.exists).ok()
  await t.click(searchBar).pressKey("ctrl+a delete").typeText(searchBar, "Germany").click(searchSubmit)
})
