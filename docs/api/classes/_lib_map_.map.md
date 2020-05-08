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
* [addFeatureFromGeojson](_lib_map_.map.md#addfeaturefromgeojson)
* [addGeometriesHook](_lib_map_.map.md#addgeometrieshook)
* [addJobFilterHook](_lib_map_.map.md#addjobfilterhook)
* [addLayer](_lib_map_.map.md#private-addlayer)
* [addSelect](_lib_map_.map.md#private-addselect)
* [addVisibleJobsHook](_lib_map_.map.md#addvisiblejobshook)
* [buildJobLayer](_lib_map_.map.md#private-buildjoblayer)
* [buildMap](_lib_map_.map.md#private-buildmap)
* [circleSelectRemoveButton](_lib_map_.map.md#private-circleselectremovebutton)
* [clearSource](_lib_map_.map.md#private-clearsource)
* [countryLayerFromGeometry](_lib_map_.map.md#countrylayerfromgeometry)
* [getAffectedFeaturesByLayer](_lib_map_.map.md#private-getaffectedfeaturesbylayer)
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

*Defined in [lib/map.ts:35](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`mapID` | string |

**Returns:** *[Map](_lib_map_.map.md)*

## Properties

### `Private` JobLayer

• **JobLayer**: *[JobLayer](_lib_joblayer_.joblayer.md)*

*Defined in [lib/map.ts:34](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L34)*

___

### `Private` mapID

• **mapID**: *string*

*Defined in [lib/map.ts:31](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L31)*

___

###  olmap

• **olmap**: *OLMap*

*Defined in [lib/map.ts:32](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L32)*

___

###  store

• **store**: *[Store](_state_store_.store.md)*

*Defined in [lib/map.ts:33](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L33)*

___

### `Private` zIndices

• **zIndices**: *Record‹string, number›*

*Defined in [lib/map.ts:35](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L35)*

## Methods

### `Private` addCircleSelect

▸ **addCircleSelect**(): *void*

*Defined in [lib/map.ts:255](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L255)*

**Returns:** *void*

___

### `Private` addControls

▸ **addControls**(): *any*

*Defined in [lib/map.ts:217](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L217)*

**Returns:** *any*

___

###  addFeatureFromGeojson

▸ **addFeatureFromGeojson**(`geojson`: [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md)): *VectorLayer*

*Defined in [lib/map.ts:195](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) |

**Returns:** *VectorLayer*

___

###  addGeometriesHook

▸ **addGeometriesHook**(): *void*

*Defined in [lib/map.ts:130](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L130)*

**Returns:** *void*

___

###  addJobFilterHook

▸ **addJobFilterHook**(): *void*

*Defined in [lib/map.ts:136](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L136)*

**Returns:** *void*

___

### `Private` addLayer

▸ **addLayer**(`layer`: BaseLayer, `opts`: object): *void*

*Defined in [lib/map.ts:161](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L161)*

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

### `Private` addSelect

▸ **addSelect**(): *void*

*Defined in [lib/map.ts:101](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L101)*

**Returns:** *void*

___

###  addVisibleJobsHook

▸ **addVisibleJobsHook**(): *void*

*Defined in [lib/map.ts:124](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L124)*

**Returns:** *void*

___

### `Private` buildJobLayer

▸ **buildJobLayer**(): *void*

*Defined in [lib/map.ts:387](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L387)*

**Returns:** *void*

___

### `Private` buildMap

▸ **buildMap**(): *OLMap*

*Defined in [lib/map.ts:358](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L358)*

**Returns:** *OLMap*

___

### `Private` circleSelectRemoveButton

▸ **circleSelectRemoveButton**(): *void*

*Defined in [lib/map.ts:227](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L227)*

**Returns:** *void*

___

### `Private` clearSource

▸ **clearSource**(`layer`: VectorLayer): *VectorLayer*

*Defined in [lib/map.ts:321](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L321)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *VectorLayer*

___

###  countryLayerFromGeometry

▸ **countryLayerFromGeometry**(`geometry`: Record‹string, any›[]): *VectorLayer*

*Defined in [lib/map.ts:172](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`geometry` | Record‹string, any›[] |

**Returns:** *VectorLayer*

___

### `Private` getAffectedFeaturesByLayer

▸ **getAffectedFeaturesByLayer**(`e`: MapBrowserEvent): *Record‹string, Feature[]›*

*Defined in [lib/map.ts:76](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L76)*

Create an object with all features the user clicked on.
ForEachFeatureAtPixel will be used to make a with the feature and its layer.
So we basically generated a list with [layer, feature] elements.
This function will turn it into an object with layer names as keys and features

Since clusters return a FeatureLike object that is basically a wrapper for a list
of individual features, we catch that case and unwrap the FeatureLike.

as values.

**`memberof`** Map

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`e` | MapBrowserEvent | An event that contains the pixel values where the user clicked. |

**Returns:** *Record‹string, Feature[]›*

An Object with layers as keys and a list of features as values.

___

### `Private` getDrawLayer

▸ **getDrawLayer**(`__namedParameters`: object): *VectorLayer*

*Defined in [lib/map.ts:307](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L307)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`clear` | boolean | false |

**Returns:** *VectorLayer*

___

### `Private` getLayersByNames

▸ **getLayersByNames**(`names`: string[]): *VectorLayer[]*

*Defined in [lib/map.ts:328](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L328)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *VectorLayer[]*

___

### `Private` getOrCreateLayer

▸ **getOrCreateLayer**(`name`: string, `opts`: Record‹string, any›): *[VectorLayer, boolean]*

*Defined in [lib/map.ts:339](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L339)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts` | Record‹string, any› |

**Returns:** *[VectorLayer, boolean]*

___

### `Private` handleCircleSelectEvents

▸ **handleCircleSelectEvents**(`draw`: Draw, `modify`: Modify): *void*

*Defined in [lib/map.ts:276](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L276)*

**Parameters:**

Name | Type |
------ | ------ |
`draw` | Draw |
`modify` | Modify |

**Returns:** *void*

___

### `Private` removeLayersByNames

▸ **removeLayersByNames**(`names`: string[]): *void*

*Defined in [lib/map.ts:238](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *void*

___

###  search

▸ **search**(`query`: string): *Promise‹void›*

*Defined in [lib/map.ts:109](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹void›*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [lib/map.ts:394](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L394)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *void*

___

###  setView

▸ **setView**(`lon`: number, `lat`: number, `zoom`: number): *void*

*Defined in [lib/map.ts:398](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L398)*

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

*Defined in [lib/map.ts:247](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L247)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`center` | number[] | - |
`zoom` | number | 16 |

**Returns:** *void*

___

###  zoomToExtent

▸ **zoomToExtent**(`extent`: Extent): *void*

*Defined in [lib/map.ts:408](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L408)*

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent |

**Returns:** *void*

___

###  zoomToLayer

▸ **zoomToLayer**(`layer`: VectorLayer): *void*

*Defined in [lib/map.ts:403](https://github.com/chronark/atlas/blob/feb671c/src/lib/map.ts#L403)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *void*
