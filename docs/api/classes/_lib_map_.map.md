[Atlas documentation](../globals.md) › ["lib/map"](../modules/_lib_map_.md) › [Map](_lib_map_.map.md)

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
* [buildJobLayer](_lib_map_.map.md#private-buildjoblayer)
* [buildMap](_lib_map_.map.md#private-buildmap)
* [circleSelectRemoveButton](_lib_map_.map.md#private-circleselectremovebutton)
* [clearSource](_lib_map_.map.md#private-clearsource)
* [countryLayerFromGeometry](_lib_map_.map.md#countrylayerfromgeometry)
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

\+ **new Map**(`mapID`: string): *[Map](_lib_map_.map.md)*

*Defined in [lib/map.ts:34](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`mapID` | string |

**Returns:** *[Map](_lib_map_.map.md)*

## Properties

### `Private` JobLayer

• **JobLayer**: *[JobLayer](_lib_joblayer_.joblayer.md)*

*Defined in [lib/map.ts:33](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L33)*

___

### `Private` mapID

• **mapID**: *string*

*Defined in [lib/map.ts:30](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L30)*

___

###  olmap

• **olmap**: *OLMap*

*Defined in [lib/map.ts:31](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L31)*

___

###  store

• **store**: *[Store](_state_store_.store.md)*

*Defined in [lib/map.ts:32](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L32)*

___

### `Private` zIndices

• **zIndices**: *Record‹string, number›*

*Defined in [lib/map.ts:34](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L34)*

## Methods

### `Private` addCircleSelect

▸ **addCircleSelect**(): *void*

*Defined in [lib/map.ts:208](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L208)*

**Returns:** *void*

___

### `Private` addControls

▸ **addControls**(): *any*

*Defined in [lib/map.ts:170](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L170)*

**Returns:** *any*

___

###  addCountryLayer

▸ **addCountryLayer**(): *void*

*Defined in [lib/map.ts:121](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L121)*

**Returns:** *void*

___

###  addFeatureFromGeojson

▸ **addFeatureFromGeojson**(`geojson`: [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md)): *VectorLayer*

*Defined in [lib/map.ts:148](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) |

**Returns:** *VectorLayer*

___

###  addGeometriesHook

▸ **addGeometriesHook**(): *void*

*Defined in [lib/map.ts:79](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L79)*

**Returns:** *void*

___

###  addJobFilterHook

▸ **addJobFilterHook**(): *void*

*Defined in [lib/map.ts:85](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L85)*

**Returns:** *void*

___

### `Private` addLayer

▸ **addLayer**(`layer`: BaseLayer, `opts`: object): *void*

*Defined in [lib/map.ts:110](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L110)*

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

*Defined in [lib/map.ts:73](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L73)*

**Returns:** *void*

___

### `Private` buildJobLayer

▸ **buildJobLayer**(): *void*

*Defined in [lib/map.ts:340](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L340)*

**Returns:** *void*

___

### `Private` buildMap

▸ **buildMap**(): *OLMap*

*Defined in [lib/map.ts:311](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L311)*

**Returns:** *OLMap*

___

### `Private` circleSelectRemoveButton

▸ **circleSelectRemoveButton**(): *void*

*Defined in [lib/map.ts:180](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L180)*

**Returns:** *void*

___

### `Private` clearSource

▸ **clearSource**(`layer`: VectorLayer): *VectorLayer*

*Defined in [lib/map.ts:274](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L274)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *VectorLayer*

___

###  countryLayerFromGeometry

▸ **countryLayerFromGeometry**(`geometry`: Record‹string, any›[]): *VectorLayer*

*Defined in [lib/map.ts:125](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`geometry` | Record‹string, any›[] |

**Returns:** *VectorLayer*

___

### `Private` getDrawLayer

▸ **getDrawLayer**(`__namedParameters`: object): *VectorLayer*

*Defined in [lib/map.ts:260](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L260)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`clear` | boolean | false |

**Returns:** *VectorLayer*

___

### `Private` getLayersByNames

▸ **getLayersByNames**(`names`: string[]): *VectorLayer[]*

*Defined in [lib/map.ts:281](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L281)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *VectorLayer[]*

___

### `Private` getOrCreateLayer

▸ **getOrCreateLayer**(`name`: string, `opts`: Record‹string, any›): *[VectorLayer, boolean]*

*Defined in [lib/map.ts:292](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts` | Record‹string, any› |

**Returns:** *[VectorLayer, boolean]*

___

### `Private` handleCircleSelectEvents

▸ **handleCircleSelectEvents**(`draw`: Draw, `modify`: Modify): *void*

*Defined in [lib/map.ts:229](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L229)*

**Parameters:**

Name | Type |
------ | ------ |
`draw` | Draw |
`modify` | Modify |

**Returns:** *void*

___

### `Private` removeLayersByNames

▸ **removeLayersByNames**(`names`: string[]): *void*

*Defined in [lib/map.ts:191](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *void*

___

###  search

▸ **search**(`query`: string): *Promise‹void›*

*Defined in [lib/map.ts:58](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹void›*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [lib/map.ts:347](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L347)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *void*

___

###  setView

▸ **setView**(`lon`: number, `lat`: number, `zoom`: number): *void*

*Defined in [lib/map.ts:351](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L351)*

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

*Defined in [lib/map.ts:200](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L200)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`center` | number[] | - |
`zoom` | number | 16 |

**Returns:** *void*

___

###  zoomToExtent

▸ **zoomToExtent**(`extent`: Extent): *void*

*Defined in [lib/map.ts:361](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent |

**Returns:** *void*

___

###  zoomToLayer

▸ **zoomToLayer**(`layer`: VectorLayer): *void*

*Defined in [lib/map.ts:356](https://github.com/chronark/atlas/blob/137d647/src/lib/map.ts#L356)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *void*
