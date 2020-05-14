import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

/**
 * Create a simple style for countries.
 *
 * @param [isSelected]
 * @returns
 */
export function countryLayerStyle(isSelected?: boolean): Style {
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
