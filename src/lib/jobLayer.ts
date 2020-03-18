import { Area, Job, Location, SingleLocation } from "../types/customTypes"
import { Geometry, MultiPolygon, Point, Polygon } from "ol/geom"
import { convertGeoJsonToGeometries, countryLayer } from "./countryLayer"

import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Cluster from "ol/source/Cluster"
import ClusterStyle from "../styles/cluster"
import Feature from "ol/Feature"
import GeoJSON from "ol/format/GeoJSON"
import Layer from "ol/layer/Layer"
import Map from "./map"
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
      style: countryLayerStyle({ isSelected: true }),
    })
  }

  public setJobs(jobs: Job[]): void {
    const points: Feature[] = []
    const areas: Feature[] = []
    jobs.forEach(job => {
      job.locations.forEach((location: Location) => {
        if (isSingleLocation(location)) {
          const newFeature = this.createSingleLoationFeature(location, job)
          newFeature.set("job", job, false)
          points.push(newFeature)
        } else {
          const newArea = this.createAreaFeature(location)
          newArea.set("job", job, false)
          areas.push(newArea)
        }
      })
    })
    this.cluster.getSource().clear()
    this.cluster.getSource().addFeatures(points)
    this.areas.getSource().clear()
    this.areas.getSource().addFeatures(areas)

    console.log("debug", this.areas.getSource().getFeatures())
  }

  private createSingleLoationFeature(location: SingleLocation, job: Job): Feature {
    const newFeature = new Feature({
      geometry: new Point(fromLonLat([location.lon, location.lat])),
    })

    return newFeature
  }

  private createAreaFeature(location: Area): Feature {
    console.log(location)
    const coordinates: Polygon[] = []
    // location.forEach(l => {
    //   if (l.geometry.coordinates !== undefined) {
    //     coordinates.push(new Polygon(l.geometry.coordinates))
    //   }
    // })
    // const geometry = new MultiPolygon(coordinates)

    return new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeature({
      type: "Feature",
      geometry: location[0].geometry,
    })

    // return new Feature({
    //   geometry: geometry,
    //   style: countryLayerStyle(),
    // })
  }

  public clear(): void {
    if (this.cluster.getSource()) {
      this.cluster.getSource().clear()
    }
  }
}
