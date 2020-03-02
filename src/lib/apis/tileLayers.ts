import BaseLayer from "ol/layer/Layer"
import Charon from "./charon"
import { MVT } from "ol/format"
import TileLayer from "ol/layer/Tile"
import VectorTileLayer from "ol/layer/VectorTile"
import VectorTileSource from "ol/source/VectorTile"
import XYZ from "ol/source/XYZ"
import stylefunction from "ol-mapbox-style/stylefunction"

/**
 * Interface for both OSM and Mapbox layer generation.
 *
 * @interface TileLayerGenerator
 */
interface TileLayerGenerator {
  getLayer(): BaseLayer
}

/**
 * TileLayerGeneerator implementation for OpenStreetMap.
 */
export class OSMLayer implements TileLayerGenerator {
  /**
   * Creates a basic raster layer with tiles from osm.
   *
   * @returns A layer.
   */
  public getLayer(): BaseLayer {
    const layer = new TileLayer({
      source: new XYZ({
        url: new Charon().getTileURL(),
        attributions: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    })

    return layer
  }
}

export class MapboxLayer implements TileLayerGenerator {
  public getLayer(): BaseLayer {
    const mapboxLayer = new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        format: new MVT(),
        url: new Charon().getTileURL(),
        attributions:
          '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
      }),
    })

    this.applyMapboxStyle(mapboxLayer)
    return mapboxLayer
  }

  private async applyMapboxStyle(mapboxLayer: VectorTileLayer): Promise<void> {
    const glStyle = await new Charon().getStyle()

    const styleLayers: string[] = glStyle.layers
      .filter((layer: Record<string, any>) => {
        return layer.hasOwnProperty("source")
      })
      .map((layer: Record<string, any>) => layer.id)

    stylefunction(mapboxLayer, glStyle, styleLayers)
  }
}
