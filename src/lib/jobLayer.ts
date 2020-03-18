import { Area, Job, Location, SingleLocation } from "../types/customTypes"
import { Geometry, MultiPolygon, Point, Polygon } from "ol/geom"
import { convertGeoJsonToGeometries, countryLayer } from "./countryLayer"

import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Cluster from "ol/source/Cluster"
import Feature from "ol/Feature"
import GeoJSON from "ol/format/GeoJSON"
import JobStyle from "../styles/jobs"
import Layer from "ol/layer/Layer"
import Map from "./map"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import { countryLayerStyle } from "../styles/countryStyle"
import { fromLonLat } from "ol/proj.js"
import { isSingleLocation } from "./util"
import polygonStyle from "../styles/polygon"

export default class JobLayer {
  private cluster: Cluster
  public animatedCluster: VectorLayer
  public areas: VectorLayer
  private style: JobStyle

  public constructor(distance = 40) {
    this.style = new JobStyle()

    // sets up an empty cluster layer
    this.cluster = new Cluster({
      distance: distance,
      source: new VectorSource(),
    })

    this.animatedCluster = new AnimatedCluster({
      name: "Jobs",
      source: this.cluster,
      style: (cluster: Feature) => this.style.clusterStyle(cluster),
    })
    this.areas = new VectorLayer({
      source: new VectorSource(),
    })
  }

  public setJobs(jobs: Job[]): void {
    const { areas, points } = this.createFeatures(jobs)

    this.cluster.getSource().clear()
    this.cluster.getSource().addFeatures(points)

    this.areas.getSource().clear()
    this.areas.getSource().addFeatures(areas)
  }

  private createFeatures(jobs: Job[]): { areas: Feature[]; points: Feature[] } {
    const points: Feature[] = []
    const areas: Feature[] = []
    jobs.forEach(job => {
      job.locations.forEach((location: Location) => {
        if (isSingleLocation(location)) {
          const newFeature = this.createSingleLoationFeature(location)
          newFeature.set("job", job, false)
          points.push(newFeature)
        } else {
          const newArea = this.createAreaFeature(location)
          newArea.set("job", job, false)
          areas.push(newArea)
        }
      })
    })

    return { areas, points }
  }

  private createSingleLoationFeature(location: SingleLocation): Feature {
    return new Feature({
      geometry: new Point(fromLonLat([location.lon, location.lat])),
    })
  }

  private createAreaFeature(location: Area): Feature {
    const newFeature = new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeature({
      type: "Feature",
      geometry: location[0].geometry,
    })
    newFeature.setStyle(this.style.areaStyle(newFeature))
    return newFeature
  }
}
