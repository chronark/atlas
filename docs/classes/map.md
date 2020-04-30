[Atlas documentation](../globals.md) › [Map](map.md)

# Class: Map

## Hierarchy

* **Map**

## Index

### Constructors

* [constructor](map.md#constructor)

### Properties

* [JobLayer](map.md#private-joblayer)
* [mapID](map.md#private-mapid)
* [olmap](map.md#olmap)
* [store](map.md#store)
* [zIndices](map.md#private-zindices)

### Methods

* [addCircleSelect](map.md#private-addcircleselect)
* [addControls](map.md#private-addcontrols)
* [addCountryLayer](map.md#addcountrylayer)
* [addFeatureFromGeojson](map.md#addfeaturefromgeojson)
* [addGeometriesHook](map.md#addgeometrieshook)
* [addJobFilterHook](map.md#addjobfilterhook)
* [addLayer](map.md#private-addlayer)
* [addVisibleJobsHook](map.md#addvisiblejobshook)
* [buildJobLayer](map.md#private-buildjoblayer)
* [buildMap](map.md#private-buildmap)
* [circleSelectRemoveButton](map.md#private-circleselectremovebutton)
* [clearSource](map.md#private-clearsource)
* [countryLayerFromGeometry](map.md#countrylayerfromgeometry)
* [getDrawLayer](map.md#private-getdrawlayer)
* [getLayersByNames](map.md#private-getlayersbynames)
* [getOrCreateLayer](map.md#private-getorcreatelayer)
* [handleCircleSelectEvents](map.md#private-handlecircleselectevents)
* [removeLayersByNames](map.md#private-removelayersbynames)
* [search](map.md#search)
* [setJobs](map.md#setjobs)
* [setView](map.md#private-setview)
* [zoomTo](map.md#private-zoomto)
* [zoomToExtent](map.md#zoomtoextent)
* [zoomToLayer](map.md#zoomtolayer)

## Constructors

###  constructor

\+ **new Map**(`mapID`: string): *[Map](map.md)*

*Defined in [lib/map.ts:35](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`mapID` | string |

**Returns:** *[Map](map.md)*

## Properties

### `Private` JobLayer

• **JobLayer**: *[JobLayer](joblayer.md)*

*Defined in [lib/map.ts:34](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L34)*

___

### `Private` mapID

• **mapID**: *string*

*Defined in [lib/map.ts:31](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L31)*

___

###  olmap

• **olmap**: *OLMap*

*Defined in [lib/map.ts:32](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L32)*

___

###  store

• **store**: *[Store](store.md)*

*Defined in [lib/map.ts:33](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L33)*

___

### `Private` zIndices

• **zIndices**: *Record‹string, number›*

*Defined in [lib/map.ts:35](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L35)*

## Methods

### `Private` addCircleSelect

▸ **addCircleSelect**(): *void*

*Defined in [lib/map.ts:209](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L209)*

**Returns:** *void*

___

### `Private` addControls

▸ **addControls**(): *any*

*Defined in [lib/map.ts:171](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L171)*

**Returns:** *any*

___

###  addCountryLayer

▸ **addCountryLayer**(): *void*

*Defined in [lib/map.ts:122](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L122)*

**Returns:** *void*

___

###  addFeatureFromGeojson

▸ **addFeatureFromGeojson**(`geojson`: [GeocodingResponseObject](../interfaces/geocodingresponseobject.md)): *VectorLayer*

*Defined in [lib/map.ts:149](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | [GeocodingResponseObject](../interfaces/geocodingresponseobject.md) |

**Returns:** *VectorLayer*

___

###  addGeometriesHook

▸ **addGeometriesHook**(): *void*

*Defined in [lib/map.ts:80](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L80)*

**Returns:** *void*

___

###  addJobFilterHook

▸ **addJobFilterHook**(): *void*

*Defined in [lib/map.ts:86](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L86)*

**Returns:** *void*

___

### `Private` addLayer

▸ **addLayer**(`layer`: BaseLayer, `opts`: object): *void*

*Defined in [lib/map.ts:111](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L111)*

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

*Defined in [lib/map.ts:74](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L74)*

**Returns:** *void*

___

### `Private` buildJobLayer

▸ **buildJobLayer**(): *void*

*Defined in [lib/map.ts:342](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L342)*

**Returns:** *void*

___

### `Private` buildMap

▸ **buildMap**(): *OLMap*

*Defined in [lib/map.ts:312](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L312)*

**Returns:** *OLMap*

___

### `Private` circleSelectRemoveButton

▸ **circleSelectRemoveButton**(): *void*

*Defined in [lib/map.ts:181](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L181)*

**Returns:** *void*

___

### `Private` clearSource

▸ **clearSource**(`layer`: VectorLayer): *VectorLayer*

*Defined in [lib/map.ts:275](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *VectorLayer*

___

###  countryLayerFromGeometry

▸ **countryLayerFromGeometry**(`geometry`: Record‹string, any›[]): *VectorLayer*

*Defined in [lib/map.ts:126](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`geometry` | Record‹string, any›[] |

**Returns:** *VectorLayer*

___

### `Private` getDrawLayer

▸ **getDrawLayer**(`__namedParameters`: object): *VectorLayer*

*Defined in [lib/map.ts:261](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L261)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`clear` | boolean | false |

**Returns:** *VectorLayer*

___

### `Private` getLayersByNames

▸ **getLayersByNames**(`names`: string[]): *VectorLayer[]*

*Defined in [lib/map.ts:282](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L282)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *VectorLayer[]*

___

### `Private` getOrCreateLayer

▸ **getOrCreateLayer**(`name`: string, `opts`: Record‹string, any›): *[VectorLayer, boolean]*

*Defined in [lib/map.ts:293](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L293)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts` | Record‹string, any› |

**Returns:** *[VectorLayer, boolean]*

___

### `Private` handleCircleSelectEvents

▸ **handleCircleSelectEvents**(`draw`: Draw, `modify`: Modify): *void*

*Defined in [lib/map.ts:230](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L230)*

**Parameters:**

Name | Type |
------ | ------ |
`draw` | Draw |
`modify` | Modify |

**Returns:** *void*

___

### `Private` removeLayersByNames

▸ **removeLayersByNames**(`names`: string[]): *void*

*Defined in [lib/map.ts:192](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *void*

___

###  search

▸ **search**(`query`: string): *Promise‹void›*

*Defined in [lib/map.ts:59](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹void›*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/job.md)[]): *void*

*Defined in [lib/map.ts:349](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L349)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/job.md)[] |

**Returns:** *void*

___

### `Private` setView

▸ **setView**(`lon`: number, `lat`: number, `zoom`: number): *void*

*Defined in [lib/map.ts:353](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L353)*

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

*Defined in [lib/map.ts:201](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L201)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`center` | number[] | - |
`zoom` | number | 16 |

**Returns:** *void*

___

###  zoomToExtent

▸ **zoomToExtent**(`extent`: Extent): *void*

*Defined in [lib/map.ts:363](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent |

**Returns:** *void*

___

###  zoomToLayer

▸ **zoomToLayer**(`layer`: VectorLayer): *void*

*Defined in [lib/map.ts:358](https://github.com/chronark/atlas/blob/88749ce/src/lib/map.ts#L358)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *void*
