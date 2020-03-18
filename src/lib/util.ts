import { Area, FeaturesEntity, Location, SingleLocation } from "../types/customTypes"

import { Extent } from "ol/extent"
import { transformExtent } from "ol/proj"

/**
 * Remove an item from a list.
 *
 * @param list - A list of items.
 * @param entry - A single item.
 * @returns List without entry.
 */
export function removeFrom(list: any[], entry: any): any[] {
  return list.filter(value => {
    return value !== entry
  })
}

/**
 * Remove every item in list1 from list2.
 *
 * @param list1 - A subset of list2.
 * @param list2 - A list of items.
 * @returns List2 without all items present in list1.
 */
export function removeListFromList(list1: any[], list2: any[]): any[] {
  const unique = [...new Set(list1)]
  return list2.filter(value => {
    return !unique.includes(value)
  })
}

/**
 * Return value if it is between lower and upper, otherwise return the boundary value.
 *
 * @param  lower - The lower end of the boundary.
 * @param  value - Any value.
 * @param  upper - The upper end of the boundary.
 * @returns A number that is within lower and upper.
 */
export function bound(lower: number, value: number, upper: number): number {
  return Math.max(lower, Math.min(value, upper))
}

/**
 * Removes all duplicates from an array.
 *
 * @param list - An array with duplicates.
 * @returns A filtered array where all items are unique.
 */
export function unique(list: any[]): any[] {
  const result = []
  const map = new Map()
  for (const item of list) {
    const json = JSON.stringify(item)
    if (!map.has(json)) {
      map.set(json, true)
      result.push(item)
    }
  }
  return result
}

/**
 * @param bbox
 */
function bboxToExtent(bbox: [number, number, number, number]): Extent {
  return transformExtent(bbox, "EPSG:4326", "EPSG:3857")
}

/**
 * @param location
 */
export function isSingleLocation(location: Location): location is SingleLocation {
  return (
    location !== undefined &&
    (location as SingleLocation).lat !== undefined &&
    (location as SingleLocation).lon !== undefined
  )
}
