import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Feature from "ol/Feature"
import Point from "ol/geom/Point"
import { fromLonLat } from "ol/proj.js"
import Cluster from "ol/source/Cluster"
import VectorSource from "ol/source/Vector"
import Layer from "ol/layer/Layer"
import ClusterStyle from "../styles/cluster"
import { Job } from "../types/customTypes"
import VectorLayer from "ol/layer/Vector"

export default class JobLayer extends Layer {
  public cluster: Cluster
  public animatedCluster: VectorLayer

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
  }

  public setJobs(jobs: Job[]): void {
    const features: Feature[] = []

    jobs.forEach(job => {
      job.locations.forEach(location => {
        const newFeature = new Feature({
          geometry: new Point(fromLonLat([location.lon, location.lat])),
        })
        // Store the job data for future evaluation like score calculation etc.
        newFeature.set("job", job, false)

        features.push(newFeature)
      })
    })
    this.cluster.getSource().clear()
    this.cluster.getSource().addFeatures(features)
  }

  public clear(): void {
    if (this.cluster.getSource()) {
      this.cluster.getSource().clear()
    }
  }
}
