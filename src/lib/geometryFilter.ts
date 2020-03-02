import { Geometry } from "ol/geom"
import { Job } from "../types/customTypes"
import { containsXY } from "ol/extent"
import { fromLonLat } from "ol/proj"

export const areCoordinatesInGeometry = (
  lonLat: [number, number],
  geometry: Geometry,
  checkExtentFirst = true,
): boolean => {
  const coords = fromLonLat(lonLat)
  // Check the extent first to speed up the filtering.
  const isJobInExtent = checkExtentFirst ? containsXY(geometry.getExtent(), coords[0], coords[1]) : true
  const result = isJobInExtent ? geometry.intersectsCoordinate(coords) : false
  return result
}

const getJobsInGeometry = (jobs: Job[], geometry: Geometry[]): Job[] => {
  let newShownJobs: Job[] = []
  geometry.forEach(geometryFeature => {
    if (geometryFeature) {
      const newJobs = jobs.filter(job => {
        const locationsInsideGeometry = job.locations.filter(location => {
          return areCoordinatesInGeometry([location.lon, location.lat], geometryFeature)
        })
        if (locationsInsideGeometry.length > 0) {
          job.locations = locationsInsideGeometry
          return true
        }
        return false
      })
      newShownJobs = newShownJobs.concat(newJobs)
    }
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
export const filterJobs = (jobs: Job[], filter: { countries?: Geometry[]; circle?: Geometry }): Job[] => {
  if (filter.circle) {
    jobs = filterJobsByGeometry(jobs, [filter.circle])
  }
  if (filter.countries) {
    jobs = filterJobsByGeometry(jobs, filter.countries)
  }
  return jobs
}
