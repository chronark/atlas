import { Area, Job, Location, SingleLocation } from "../types/customTypes"
import { Geometry, MultiPolygon, Point, Polygon } from "ol/geom"
import { convertGeoJsonToGeometries, countryLayer } from "./countryLayer"

import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Cluster from "ol/source/Cluster"
import ClusterStyle from "../styles/cluster"
import Feature from "ol/Feature"
import Layer from "ol/layer/Layer"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import { countryLayerStyle } from "../styles/countryStyle"
import { fromLonLat } from "ol/proj.js"
import { isSingleLocation } from "./util"
import polygonStyle from "../styles/polygon"

export default class JobLayer extends Layer {
  public cluster: Cluster
  public animatedCluster: VectorLayer
  public areas: VectorLayer

  public constructor(distance = 40) {
    super({})
    // sets up an empty cluster layer
    this.cluster = new Cluster({
      distance: distance,
      source: new VectorSource(),
    })

    this.animatedCluster = new AnimatedCluster({
      name: "Jobs",
      source: this.cluster,
      style(cluster: Feature) {
        return new ClusterStyle().style(cluster)
      },
    })
    this.areas = new VectorLayer({
      source: new VectorSource(),
      style: countryLayerStyle(),
    })
  }

  public setJobs(jobs: Job[]): void {
    const features: Feature[] = []
    const areas: Feature[] = []
    console.log(jobs.length)
    jobs.forEach(job => {
      job.locations.forEach((location: Location) => {
        if (isSingleLocation(location)) {
          const newFeature = this.createSingleLoationFeature(location, job)
          newFeature.set("job", job, false)
          features.push(newFeature)
        } else {
          const newArea = this.createAreaFeature(location)
          newArea.set("job", job, false)
          areas.push(newArea)
        }
      })
    })
    this.cluster.getSource().clear()
    console.warn(features[features.length - 1])
    this.cluster.getSource().addFeatures(features.slice(0, 5000))
    this.areas.getSource().clear()
    this.areas.getSource().addFeatures(areas)
    console.log(areas)
  }

  private createSingleLoationFeature(location: SingleLocation, job: Job): Feature {
    const newFeature = new Feature({
      geometry: new Point(fromLonLat([location.lon, location.lat])),
    })

    return newFeature
  }

  private createAreaFeature(location: Area): Feature {
    const coordinates: Polygon[] = []
    location.forEach(l => {
      if (l.geometry.coordinates !== undefined) {
        coordinates.push(new Polygon(l.geometry.coordinates))
      }
    })

    return new Feature({
      geometry: new MultiPolygon(coordinates),
      style: polygonStyle(),
    })
  }

  public clear(): void {
    if (this.cluster.getSource()) {
      this.cluster.getSource().clear()
    }
  }
}
