[Atlas documentation](../README.md) › [Globals](../globals.md) › ["apis/tileLayers"](../modules/_apis_tilelayers_.md) › [MapboxLayer](_apis_tilelayers_.mapboxlayer.md)

# Class: MapboxLayer

Handles all communication with Mapbox.

**`implements`** {TileLayerGenerator}

## Hierarchy

* **MapboxLayer**

## Implements

* [TileLayerGenerator](../interfaces/_apis_tilelayers_.tilelayergenerator.md)

## Index

### Methods

* [applyMapboxStyle](_apis_tilelayers_.mapboxlayer.md#private-applymapboxstyle)
* [getLayer](_apis_tilelayers_.mapboxlayer.md#getlayer)

## Methods

### `Private` applyMapboxStyle

▸ **applyMapboxStyle**(`mapboxLayer`: VectorTileLayer): *Promise‹void›*

*Defined in [src/apis/tileLayers.ts:76](https://github.com/chronark/atlas/blob/f950874/src/apis/tileLayers.ts#L76)*

Loads and applies the mapbox styles to the vector tiles.

**`memberof`** MapboxLayer

**Parameters:**

Name | Type |
------ | ------ |
`mapboxLayer` | VectorTileLayer |

**Returns:** *Promise‹void›*

___

###  getLayer

▸ **getLayer**(): *BaseLayer*

*Implementation of [TileLayerGenerator](../interfaces/_apis_tilelayers_.tilelayergenerator.md)*

*Defined in [src/apis/tileLayers.ts:53](https://github.com/chronark/atlas/blob/f950874/src/apis/tileLayers.ts#L53)*

Create a layer with vector tiles.

**`memberof`** MapboxLayer

**Returns:** *BaseLayer*
