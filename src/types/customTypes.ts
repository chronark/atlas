export interface RawJob {
  datum: string
  extern: string
  firma: string
  ID: string
  lat: string
  lng: string
  logo: string
  titel: string
  typ: string
  url: string
}

export interface RawLocation {
  country: string
  IDs: string
  jobs: number[]
  lat: string
  lng: string
  titel: string
  weight: number
}

// Interface from https://jobboerse.th-nuernberg.de/srv.php/en/Suche/offers
export interface RawSearch {
  jobs: RawJob[]
  orte: RawLocation[]
}

export type Area = FeaturesEntity[]
export interface SingleLocation {
  /**
   * Latitude of the location.
   */
  lat: number
  /**
   * Longitude of the location.
   */
  lon: number
}

/**
 * The location for a job.
 * Address has to be added later on.
 */
export type Location = Area | SingleLocation

/**
 * A Job listing with all relevant data.
 */
export interface Job {
  /**
   * Name of the corporation offering the job.
   */
  corp: string
  /**
   * An array of locations where the job is offered.
   */
  locations: Location[]
  /**
   * The entrydate for the job.
   */
  date: string
  /**
   * Internal id for each job.
   */
  id: number
  /**
   * URL to the job's or company's logo.
   */
  logo: string
  /**
   * Calculated matching score for the user and job.
   * Must be between 0.0 and 1.0 included.
   */
  score: number
  /**
   * Job title description.
   */
  title: string
  /**
   * Job classification.
   */
  type: string
  /**
   * URL for more information about this job or company's page.
   */
  url: string
}

export type LogObject = Record<string, any> | number

export interface GeocodingResponseObject {
  type: string
  query: string
  features: FeaturesEntity[]
  attribution: string
}
export interface FeaturesEntity {
  id: string
  type: string
  place_type?: string[]
  relevance: number
  properties: Properties
  text: string
  place_name: string
  bbox?: number[]
  center?: number[]
  geometry: Geometry
  context?: ContextEntity[]
  matching_text?: string
  matching_place_name?: string
}
export interface Properties {
  wikidata?: string
  accuracy?: string
  address?: string
  landmark?: boolean
  category?: string
}

export interface Geometry {
  type: string
  coordinates?: number[]
}
export interface ContextEntity {
  id: string
  wikidata?: string
  text: string
  short_code?: string
}
