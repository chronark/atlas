[Atlas documentation](../globals.md) › ["lib/countryLayer"](_lib_countrylayer_.md)

# Module: "lib/countryLayer"

## Index

### Functions

* [convertGeoJsonToGeometries](_lib_countrylayer_.md#convertgeojsontogeometries)
* [countryLayer](_lib_countrylayer_.md#const-countrylayer)
* [getCachedGeometry](_lib_countrylayer_.md#const-getcachedgeometry)

## Functions

###  convertGeoJsonToGeometries

▸ **convertGeoJsonToGeometries**(`geojson`: Record‹string, any›): *undefined | Geometry‹›[]*

*Defined in [lib/countryLayer.ts:17](https://github.com/chronark/atlas/blob/3b4704d/src/lib/countryLayer.ts#L17)*

Creates a Geometry object from geojson data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`geojson` | Record‹string, any› | A geojson object you want to convert. |

**Returns:** *undefined | Geometry‹›[]*

GeometryFeatures.

___

### `Const` countryLayer

▸ **countryLayer**(`map`: [Map](../classes/_lib_map_.map.md)): *void*

*Defined in [lib/countryLayer.ts:31](https://github.com/chronark/atlas/blob/3b4704d/src/lib/countryLayer.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [Map](../classes/_lib_map_.map.md) |

**Returns:** *void*

___

### `Const` getCachedGeometry

▸ **getCachedGeometry**(`store`: [Store](../classes/_state_store_.store.md), `event`: MapBrowserEvent): *Geometry*

*Defined in [lib/countryLayer.ts:23](https://github.com/chronark/atlas/blob/3b4704d/src/lib/countryLayer.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [Store](../classes/_state_store_.store.md) |
`event` | MapBrowserEvent |

**Returns:** *Geometry*
