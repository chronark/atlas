import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

/**
 * Create a style for polygons.
 *
 * @param isSelected - Determines the style of the polygon.
 * @returns A Style to be used for polygons.
 */
const polygonStyle = ({ isSelected = false }: { isSelected?: boolean } = {}): Style => {
  const selectedStyle = new Style({
    fill: new Fill({
      color: "rgba(5,25,35,0.4)",
    }),
    stroke: new Stroke({
      color: "rgba(0,0,0,0)",
      width: 0,
    }),
  })

  const regularStyle = new Style({
    fill: new Fill({
      color: "rgba(224,236,244,0.3)",
    }),
    stroke: new Stroke({
      color: "rgb(112,148,194)",
      width: 2,
    }),
  })

  return isSelected ? selectedStyle : regularStyle
}

export default polygonStyle
