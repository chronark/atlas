import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

/**
 * Create a style for counrties.
 *
 * @param isSelected - Determines the colors.
 * @returns The style for the feature.
 */
export const countryLayerStyle = ({ isSelected = false }: { isSelected?: boolean } = {}): Style => {
  const selectedStyle = new Style({
    stroke: new Stroke({
      color: "rgba(200,20,20,0.8)",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(200,20,20,0.1)",
    }),
  })
  const regularStyle = new Style({
    stroke: new Stroke({
      color: "rgba(0,0,0,0)",
      width: 0,
    }),
    fill: new Fill({
      color: "rgba(0,0,0,0)",
    }),
  })

  return isSelected ? selectedStyle : regularStyle
}
