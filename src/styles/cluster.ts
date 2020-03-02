import { Stroke, Style, Text } from "ol/style.js"

import { Feature } from "ol"
import Fill from "ol/style/Fill"
import { Job } from "../types/customTypes"
import RegularShape from "ol/style/RegularShape"
import { bound } from "../lib/util"

export default class ClusterStyle {
  private colorGradient: string[]

  public constructor(
    colorGradient: string[] = [
      "rgb(112,148,194)",
      "rgb(103,142,191)",
      "rgb(93,135,188)",
      "rgb(84,129,186)",
      "rgb(47,103,174)",
      "rgb(75,122,183)",
      "rgb(65,116,180)",
      "rgb(56,109,177)",
      "rgb(37,96,171)",
      "rgb(28,90,168)",
      "rgb(19,83,166)",
      "rgb(9,77,163)",
      "rgb(0,70,160)",
    ],
  ) {
    this.colorGradient = colorGradient
  }

  private colorByScore(score: number, minScore = 0.5): string {
    if (score < 0 || score > 1) {
      throw new RangeError("score must be between 0 and 1, including 0 and 1.")
    }
    if (minScore < 0 || minScore > 1) {
      throw new RangeError("minScore must be between 0 and 1, including 0 and 1.")
    }
    if (minScore >= score) {
      return this.colorGradient[0]
    }
    const step = (1 - minScore) / this.colorGradient.length
    const index = Math.floor((score - minScore) / step)

    return this.colorGradient[index]
  }

  private maxScore(features: Feature[]): number {
    let maxScore = 0
    for (const feature of features) {
      const job: Job = feature.get("job")
      const score: number = job.score
      maxScore = Math.max(maxScore, score)
    }
    return maxScore
  }

  private polygonStyle(score: number, scale: number, size: number): Style {
    const radius = bound(15, size, 25)
    return new Style({
      image: new RegularShape({
        points: 4,
        angle: Math.PI,
        radius: radius,
        stroke: new Stroke({
          color: this.colorByScore(score, 0.5),
          width: bound(1, radius / 4, radius),
          lineCap: "square",
          lineJoin: "miter",
        }),
        fill: new Fill({
          color: "rgba(255,255,255,0.8)",
        }),
      }),
      text: new Text({
        text: size.toString(),
        scale: 1,
        fill: new Fill({
          color: "#000",
        }),
      }),
    })
  }

  public style(cluster: Feature): Style[] {
    const features: Feature[] = cluster.get("features")
    const size = features.length
    if (size === 1) {
      return this.selectedStyle(cluster)
    } else {
      const score = this.maxScore(features)
      const scale = bound(0.2, size, 0.4)
      const style = this.polygonStyle(score, scale, size)

      return [style]
    }
  }

  private getScore(feature: Feature): number {
    const subfeatures: Feature[] = feature.get("features")

    if (subfeatures && subfeatures.length === 1) {
      const job: Job = subfeatures[0].get("job")
      return job.score
    }

    return 0
  }

  private selectedStyle(cluster: Feature): Style[] {
    const size = 1
    const score = this.getScore(cluster)
    // Scale is within [0.2, 0.4]
    const scale = Math.min(0.4, Math.max(size * 0.03, 0.2))
    const style = this.polygonStyle(score, scale, size)
    return [style]
  }
}
