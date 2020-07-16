import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

export const selectionStyle = new Style({
  stroke: new Stroke({
    color: "rgba(112,148,194,1)",
    width: 1,
  }),
  fill: new Fill({
    color: "rgba(112,148,194,0.1)",
  }),
})
