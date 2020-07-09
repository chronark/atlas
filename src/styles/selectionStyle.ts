import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

export const selectionStyle = new Style({
  stroke: new Stroke({
    color: "rgba(200,20,20,0.8)",
    width: 1,
  }),
  fill: new Fill({
    color: "rgba(200,20,20,0.1)",
  }),
})
