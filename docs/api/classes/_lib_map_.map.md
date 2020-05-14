[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/map"](../modules/_lib_map_.md) › [Map](_lib_map_.map.md)

# Class: Map

## Hierarchy

* **Map**

## Index

### Constructors

* [constructor](_lib_map_.map.md#constructor)

### Properties

* [JobLayer](_lib_map_.map.md#private-joblayer)
* [mapID](_lib_map_.map.md#private-mapid)
* [olmap](_lib_map_.map.md#olmap)
* [store](_lib_map_.map.md#store)
* [zIndices](_lib_map_.map.md#private-zindices)

### Methods

* [addCircleSelect](_lib_map_.map.md#private-addcircleselect)
* [addControls](_lib_map_.map.md#private-addcontrols)
* [addCountryLayer](_lib_map_.map.md#addcountrylayer)
* [addFeatureFromGeojson](_lib_map_.map.md#addfeaturefromgeojson)
* [addGeometriesHook](_lib_map_.map.md#addgeometrieshook)
* [addJobFilterHook](_lib_map_.map.md#addjobfilterhook)
* [addLayer](_lib_map_.map.md#private-addlayer)
* [addVisibleJobsHook](_lib_map_.map.md#addvisiblejobshook)
* [build](_lib_map_.map.md#private-build)
* [buildJobLayer](_lib_map_.map.md#private-buildjoblayer)
* [circleSelectRemoveButton](_lib_map_.map.md#private-circleselectremovebutton)
* [clearSource](_lib_map_.map.md#private-clearsource)
* [countryLayerFromGeometry](_lib_map_.map.md#countrylayerfromgeometry)
* [createView](_lib_map_.map.md#private-createview)
* [getDrawLayer](_lib_map_.map.md#private-getdrawlayer)
* [getLayersByNames](_lib_map_.map.md#private-getlayersbynames)
* [getOrCreateLayer](_lib_map_.map.md#private-getorcreatelayer)
* [handleCircleSelectEvents](_lib_map_.map.md#private-handlecircleselectevents)
* [removeLayersByNames](_lib_map_.map.md#private-removelayersbynames)
* [search](_lib_map_.map.md#search)
* [setJobs](_lib_map_.map.md#setjobs)
* [setView](_lib_map_.map.md#setview)
* [zoomTo](_lib_map_.map.md#private-zoomto)
* [zoomToExtent](_lib_map_.map.md#zoomtoextent)
* [zoomToLayer](_lib_map_.map.md#zoomtolayer)

## Constructors

###  constructor

\+ **new Map**(`mapID`: string, `opts?`: [MapOpts](../interfaces/_lib_map_.mapopts.md)): *[Map](_lib_map_.map.md)*

*Defined in [lib/map.ts:52](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`mapID` | string |
`opts?` | [MapOpts](../interfaces/_lib_map_.mapopts.md) |

**Returns:** *[Map](_lib_map_.map.md)*

## Properties

### `Private` JobLayer

• **JobLayer**: *[JobLayer](_lib_joblayer_.joblayer.md)*

*Defined in [lib/map.ts:51](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L51)*

___

### `Private` mapID

• **mapID**: *string*

*Defined in [lib/map.ts:48](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L48)*

___

###  olmap

• **olmap**: *OLMap*

*Defined in [lib/map.ts:49](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L49)*

___

###  store

• **store**: *[Store](_state_store_.store.md)*

*Defined in [lib/map.ts:50](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L50)*

___

### `Private` zIndices

• **zIndices**: *Record‹string, number›*

*Defined in [lib/map.ts:52](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L52)*

## Methods

### `Private` addCircleSelect

▸ **addCircleSelect**(): *void*

*Defined in [lib/map.ts:226](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L226)*

**Returns:** *void*

___

### `Private` addControls

▸ **addControls**(): *any*

*Defined in [lib/map.ts:188](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L188)*

**Returns:** *any*

___

###  addCountryLayer

▸ **addCountryLayer**(): *void*

*Defined in [lib/map.ts:139](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L139)*

**Returns:** *void*

___

###  addFeatureFromGeojson

▸ **addFeatureFromGeojson**(`geojson`: [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md)): *VectorLayer*

*Defined in [lib/map.ts:166](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) |

**Returns:** *VectorLayer*

___

###  addGeometriesHook

▸ **addGeometriesHook**(): *void*

*Defined in [lib/map.ts:97](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L97)*

**Returns:** *void*

___

###  addJobFilterHook

▸ **addJobFilterHook**(): *void*

*Defined in [lib/map.ts:103](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L103)*

**Returns:** *void*

___

### `Private` addLayer

▸ **addLayer**(`layer`: BaseLayer, `opts`: object): *void*

*Defined in [lib/map.ts:128](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L128)*

Creates a named layer and adds it to the existing openlayers map.
By default a layer is not overwritten.

**Parameters:**

▪ **layer**: *BaseLayer*

The layer you want to add.

▪`Default value`  **opts**: *object*= {}

Configuration options.

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | The name for the layer. You can later reference the layer by this name. |
`overwrite?` | undefined &#124; false &#124; true | By default the layer does not overwrite itself.  |

**Returns:** *void*

___

###  addVisibleJobsHook

▸ **addVisibleJobsHook**(): *void*

*Defined in [lib/map.ts:91](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L91)*

**Returns:** *void*

___

### `Private` build

▸ **build**(`opts`: [MapOpts](../interfaces/_lib_map_.mapopts.md)): *OLMap*

*Defined in [lib/map.ts:361](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [MapOpts](../interfaces/_lib_map_.mapopts.md) |

**Returns:** *OLMap*

___

### `Private` buildJobLayer

▸ **buildJobLayer**(): *void*

*Defined in [lib/map.ts:386](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L386)*

**Returns:** *void*

___

### `Private` circleSelectRemoveButton

▸ **circleSelectRemoveButton**(): *void*

*Defined in [lib/map.ts:198](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L198)*

**Returns:** *void*

___

### `Private` clearSource

▸ **clearSource**(`layer`: VectorLayer): *VectorLayer*

*Defined in [lib/map.ts:292](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *VectorLayer*

___

###  countryLayerFromGeometry

▸ **countryLayerFromGeometry**(`geometry`: Record‹string, any›[]): *VectorLayer*

*Defined in [lib/map.ts:143](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`geometry` | Record‹string, any›[] |

**Returns:** *VectorLayer*

___

### `Private` createView

▸ **createView**(`opts`: [MapOpts](../interfaces/_lib_map_.mapopts.md)): *any*

*Defined in [lib/map.ts:341](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L341)*

Create an initial viewport in the following order:

1. From a specified `view` obecjt in mapOpts.
2. From a specified `extent` onject
3. If neither options were given, create a default view centered on europe.

**`memberof`** Map

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [MapOpts](../interfaces/_lib_map_.mapopts.md) | View configuration should be in this object. |

**Returns:** *any*

The View object for initial map rendering.

___

### `Private` getDrawLayer

▸ **getDrawLayer**(`__namedParameters`: object): *VectorLayer*

*Defined in [lib/map.ts:278](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L278)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`clear` | boolean | false |

**Returns:** *VectorLayer*

___

### `Private` getLayersByNames

▸ **getLayersByNames**(`names`: string[]): *VectorLayer[]*

*Defined in [lib/map.ts:299](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L299)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *VectorLayer[]*

___

### `Private` getOrCreateLayer

▸ **getOrCreateLayer**(`name`: string, `opts`: Record‹string, any›): *[VectorLayer, boolean]*

*Defined in [lib/map.ts:310](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L310)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts` | Record‹string, any› |

**Returns:** *[VectorLayer, boolean]*

___

### `Private` handleCircleSelectEvents

▸ **handleCircleSelectEvents**(`draw`: Draw, `modify`: Modify): *void*

*Defined in [lib/map.ts:247](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L247)*

**Parameters:**

Name | Type |
------ | ------ |
`draw` | Draw |
`modify` | Modify |

**Returns:** *void*

___

### `Private` removeLayersByNames

▸ **removeLayersByNames**(`names`: string[]): *void*

*Defined in [lib/map.ts:209](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L209)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *void*

___

###  search

▸ **search**(`query`: string): *Promise‹void›*

*Defined in [lib/map.ts:76](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹void›*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [lib/map.ts:393](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L393)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *void*

___

###  setView

▸ **setView**(`lon`: number, `lat`: number, `zoom`: number): *void*

*Defined in [lib/map.ts:397](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L397)*

**Parameters:**

Name | Type |
------ | ------ |
`lon` | number |
`lat` | number |
`zoom` | number |

**Returns:** *void*

___

### `Private` zoomTo

▸ **zoomTo**(`center`: number[], `zoom`: number): *void*

*Defined in [lib/map.ts:218](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L218)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`center` | number[] | - |
`zoom` | number | 16 |

**Returns:** *void*

___

###  zoomToExtent

▸ **zoomToExtent**(`extent`: Extent): *void*

*Defined in [lib/map.ts:407](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L407)*

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent |

**Returns:** *void*

___

###  zoomToLayer

▸ **zoomToLayer**(`layer`: VectorLayer): *void*

*Defined in [lib/map.ts:402](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L402)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *void*
