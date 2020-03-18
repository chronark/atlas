import { bboxToExtent, isSingleLocation } from "./util"
import { containsXY, intersects } from "ol/extent"

import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { fromLonLat } from "ol/proj"

export const areCoordinatesInGeometry = (
  lonLat: [number, number],
  geometry: Geometry,
  checkExtentFirst = true,
): boolean => {
  const coords = fromLonLat(lonLat)
  // Check the extent first to speed up the filtering.
  checkExtentFirst = false
  const isJobInExtent = checkExtentFirst ? containsXY(geometry.getExtent(), coords[0], coords[1]) : true
  const result = isJobInExtent ? geometry.intersectsCoordinate(coords) : false
  return result
}

const getJobsInGeometry = (jobs: Job[], geometries: Geometry[]): Job[] => {
  let newShownJobs: Job[] = []
  geometries.forEach(geometry => {
    const newJobs = jobs.filter(job => {
      const locationsInsideGeometry = job.locations.filter(location => {
        if (isSingleLocation(location)) {
          return areCoordinatesInGeometry([location.lon, location.lat], geometry)
        } else {
          // location is an Area here
          // TODO implement more accurate check
          // Right now this only checks for intersescting extends which can be very inaccurate for countries with many islands for example.
          let isInside = false
          for (const l of location) {
            if (l.bbox) {
              const extent = bboxToExtent(l.bbox as [number, number, number, number])
              if (intersects(extent, geometry.getExtent())) {
                isInside = true
                break
              }
            }
          }
          return isInside
        }
      })
      if (locationsInsideGeometry.length > 0) {
        job.locations = locationsInsideGeometry
        return true
      }
      return false
    })
    newShownJobs = newShownJobs.concat(newJobs)
  })
  return newShownJobs
}

const filterJobsByGeometry = (jobs: Job[], geometry: Geometry[]): Job[] => {
  if (geometry.length === 0) {
    return jobs
  } else {
    return getJobsInGeometry(jobs, geometry)
  }
}
export const filterJobs = (jobs: Job[], filter: { geometries?: Geometry[]; circle?: Geometry }): Job[] => {
  if (filter.circle) {
    jobs = filterJobsByGeometry(jobs, [filter.circle])
  }
  if (filter.geometries) {
    jobs = filterJobsByGeometry(jobs, filter.geometries)
  }
  return jobs
}
