[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/atlas"](../modules/_lib_atlas_.md) › [Atlas](_lib_atlas_.atlas.md)

# Class: Atlas

Main Map class and entrypoint.

## Hierarchy

* **Atlas**

## Index

### Constructors

* [constructor](_lib_atlas_.atlas.md#constructor)

### Properties

* [JobLayer](_lib_atlas_.atlas.md#private-joblayer)
* [map](_lib_atlas_.atlas.md#map)
* [mapID](_lib_atlas_.atlas.md#private-mapid)
* [selectionLayer](_lib_atlas_.atlas.md#private-selectionlayer)
* [store](_lib_atlas_.atlas.md#store)
* [zIndices](_lib_atlas_.atlas.md#private-zindices)

### Methods

* [addCircleSelect](_lib_atlas_.atlas.md#private-addcircleselect)
* [addControls](_lib_atlas_.atlas.md#private-addcontrols)
* [addCountries](_lib_atlas_.atlas.md#addcountries)
* [addGeometriesHook](_lib_atlas_.atlas.md#addgeometrieshook)
* [addJobFilterHook](_lib_atlas_.atlas.md#addjobfilterhook)
* [addLayer](_lib_atlas_.atlas.md#private-addlayer)
* [addSelect](_lib_atlas_.atlas.md#private-addselect)
* [addVisibleJobsHook](_lib_atlas_.atlas.md#addvisiblejobshook)
* [build](_lib_atlas_.atlas.md#private-build)
* [buildJobLayer](_lib_atlas_.atlas.md#private-buildjoblayer)
* [circleSelectRemoveButton](_lib_atlas_.atlas.md#private-circleselectremovebutton)
* [clearSource](_lib_atlas_.atlas.md#private-clearsource)
* [createSelectionLayer](_lib_atlas_.atlas.md#private-createselectionlayer)
* [createView](_lib_atlas_.atlas.md#private-createview)
* [getDrawLayer](_lib_atlas_.atlas.md#private-getdrawlayer)
* [getLayersByNames](_lib_atlas_.atlas.md#private-getlayersbynames)
* [getOrCreateLayer](_lib_atlas_.atlas.md#private-getorcreatelayer)
* [removeLayersByNames](_lib_atlas_.atlas.md#private-removelayersbynames)
* [search](_lib_atlas_.atlas.md#search)
* [setJobs](_lib_atlas_.atlas.md#setjobs)
* [setView](_lib_atlas_.atlas.md#setview)
* [subscribe](_lib_atlas_.atlas.md#subscribe)
* [zoomTo](_lib_atlas_.atlas.md#private-zoomto)
* [zoomToExtent](_lib_atlas_.atlas.md#zoomtoextent)
* [zoomToLayer](_lib_atlas_.atlas.md#zoomtolayer)

## Constructors

###  constructor

\+ **new Atlas**(`mapID`: string, `opts?`: [AtlasOpts](../interfaces/_lib_atlas_.atlasopts.md)): *[Atlas](_lib_atlas_.atlas.md)*

*Defined in [src/lib/atlas.ts:68](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L68)*

Creates an instance of Map.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`mapID` | string |
`opts?` | [AtlasOpts](../interfaces/_lib_atlas_.atlasopts.md) |

**Returns:** *[Atlas](_lib_atlas_.atlas.md)*

## Properties

### `Private` JobLayer

• **JobLayer**: *[JobLayer](_lib_joblayer_.joblayer.md)*

*Defined in [src/lib/atlas.ts:66](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L66)*

___

###  map

• **map**: *Map*

*Defined in [src/lib/atlas.ts:64](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L64)*

___

### `Private` mapID

• **mapID**: *string*

*Defined in [src/lib/atlas.ts:63](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L63)*

Used to find the correct HTMLElement to attach the map.

**`memberof`** Atlas

___

### `Private` selectionLayer

• **selectionLayer**: *[SelectionLayer](_lib_selectionlayer_.selectionlayer.md)*

*Defined in [src/lib/atlas.ts:68](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L68)*

___

###  store

• **store**: *[Store](_state_store_.store.md)*

*Defined in [src/lib/atlas.ts:65](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L65)*

___

### `Private` zIndices

• **zIndices**: *Record‹string, number›*

*Defined in [src/lib/atlas.ts:67](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L67)*

## Methods

### `Private` addCircleSelect

▸ **addCircleSelect**(): *void*

*Defined in [src/lib/atlas.ts:352](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L352)*

Add the possibility to draw a circle on the map.

TODO: Refactor this outside of the map class.

**`memberof`** Atlas

**Returns:** *void*

___

### `Private` addControls

▸ **addControls**(): *any*

*Defined in [src/lib/atlas.ts:284](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L284)*

Add sidebar controls to the map.
TODO: Move this outside of the class.

**`memberof`** Atlas

**Returns:** *any*

___

###  addCountries

▸ **addCountries**(): *Promise‹void›*

*Defined in [src/lib/atlas.ts:151](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L151)*

Load initial set of countries and add them to the map without showing them to the user.

**Returns:** *Promise‹void›*

___

###  addGeometriesHook

▸ **addGeometriesHook**(): *void*

*Defined in [src/lib/atlas.ts:228](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L228)*

Subscribes to the store to update the selected countries on the map.

**`memberof`** Atlas

**Returns:** *void*

___

###  addJobFilterHook

▸ **addJobFilterHook**(): *void*

*Defined in [src/lib/atlas.ts:240](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L240)*

Subscribes to the store to update state's visible jobs.
Whenever the jobs change, like jobs being added or removed, or if the user (de)selects geometry, we need to update the shown jobs.

**`memberof`** Atlas

**Returns:** *void*

___

### `Private` addLayer

▸ **addLayer**(`layer`: BaseLayer, `opts`: object): *void*

*Defined in [src/lib/atlas.ts:265](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L265)*

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

*Defined in [src/lib/atlas.ts:160](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L160)*

**Returns:** *void*

___

###  addVisibleJobsHook

▸ **addVisibleJobsHook**(): *void*

*Defined in [src/lib/atlas.ts:217](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L217)*

Subscribes to the store to update the jobs on the map.

**`memberof`** Atlas

**Returns:** *void*

___

### `Private` build

▸ **build**(`opts`: [AtlasOpts](../interfaces/_lib_atlas_.atlasopts.md)): *Map*

*Defined in [src/lib/atlas.ts:541](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L541)*

Create the actual map canvas.
Loads in tiles and displays the initial viewport.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [AtlasOpts](../interfaces/_lib_atlas_.atlasopts.md) |

**Returns:** *Map*

___

### `Private` buildJobLayer

▸ **buildJobLayer**(): *void*

*Defined in [src/lib/atlas.ts:572](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L572)*

TODO: Refactor  #AT-15.

**`memberof`** Atlas

**Returns:** *void*

___

### `Private` circleSelectRemoveButton

▸ **circleSelectRemoveButton**(): *void*

*Defined in [src/lib/atlas.ts:303](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L303)*

Create a button to remove the circle selection.
TODO: Move this outside of the class.

**`memberof`** Atlas

**Returns:** *void*

___

### `Private` clearSource

▸ **clearSource**(`layer`: VectorLayer): *VectorLayer*

*Defined in [src/lib/atlas.ts:447](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L447)*

Helper function to clear the source of a layer.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *VectorLayer*

___

### `Private` createSelectionLayer

▸ **createSelectionLayer**(): *[SelectionLayer](_lib_selectionlayer_.selectionlayer.md)*

*Defined in [src/lib/atlas.ts:207](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L207)*

Create a new Polygon layer and add the onClick event listener.

Will be called once in the constructor.

**`memberof`** Atlas

**Returns:** *[SelectionLayer](_lib_selectionlayer_.selectionlayer.md)*

A new polygon layer for countries or other areas the user selected.

___

### `Private` createView

▸ **createView**(`opts`: [AtlasOpts](../interfaces/_lib_atlas_.atlasopts.md)): *any*

*Defined in [src/lib/atlas.ts:513](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L513)*

Create an initial viewport in the following order:

1. From a specified `view` object in mapOpts.
2. From a specified `extent` onject
3. If neither options were given, create a default view centered on europe.

**`memberof`** Atlas

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [AtlasOpts](../interfaces/_lib_atlas_.atlasopts.md) | View configuration should be in this object. |

**Returns:** *any*

The View object for initial map rendering.

___

### `Private` getDrawLayer

▸ **getDrawLayer**(`clear?`: undefined | false | true): *VectorLayer*

*Defined in [src/lib/atlas.ts:425](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L425)*

Get or create a new layer to draw on.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`clear?` | undefined &#124; false &#124; true |

**Returns:** *VectorLayer*

___

### `Private` getLayersByNames

▸ **getLayersByNames**(`names`: string[]): *VectorLayer[]*

*Defined in [src/lib/atlas.ts:462](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L462)*

Filter all layers by name.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *VectorLayer[]*

___

### `Private` getOrCreateLayer

▸ **getOrCreateLayer**(`name`: string, `opts`: Record‹string, any›): *[VectorLayer, boolean]*

*Defined in [src/lib/atlas.ts:482](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L482)*

Try to get a layer by name or create a new one if it doesn't exist.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts` | Record‹string, any› |

**Returns:** *[VectorLayer, boolean]*

___

### `Private` removeLayersByNames

▸ **removeLayersByNames**(`names`: string[]): *void*

*Defined in [src/lib/atlas.ts:321](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L321)*

Remove layers from the map.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *void*

___

###  search

▸ **search**(`query`: string): *Promise‹void›*

*Defined in [src/lib/atlas.ts:136](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L136)*

Runs a user search for a place, country, etc.
This requires the backend to be running and configured properly via environmental variables.
See ../apis/charon.ts for more info.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹void›*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [src/lib/atlas.ts:587](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L587)*

Loads new jobs into the store.

This will overwrite the old ones, so please merge your jobs before if you wish to only add jobs.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *void*

___

###  setView

▸ **setView**(`lon`: number, `lat`: number, `zoom`: number): *void*

*Defined in [src/lib/atlas.ts:599](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L599)*

Instantly set the map viewport to center on lat/lon and zoom level.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`lon` | number |
`lat` | number |
`zoom` | number |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`hooks`: string[], `callback`: function): *void*

*Defined in [src/lib/atlas.ts:123](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L123)*

Subscribe to an event.

Events are prefixed by `STATE_CHANGE_` and named after the field that was updated.
For example `STATE_CHANGE_VISIBLEJOBS` or `STATE_CHANGE_SELECTEDGEOMETRIES`.

This can be used to update external UI like job counters.
Also used when the user clicks on a cluster to pass the job array outside of this class.
You can also pass in multiple hooks and your callback will be called whenever one of the events fires.

**`example:`** 
const atlas = new Atlas()
atlas.subscribe([STATE_CHANGE_ALLJOBS], (state: State) => console.log(state.allJobs))
atlas.setJobs(myJobsArray)

// you will now see your job array being printed in the console.

**`memberof`** Atlas

**Parameters:**

▪ **hooks**: *string[]*

An array of hooks, see ../state/store.ts

▪ **callback**: *function*

Gets called with the current state as argument, do whatever you want with it except overwriting it.
The state must remain immutable.

▸ (`state`: [State](../modules/_state_store_.md#state)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](../modules/_state_store_.md#state) |

**Returns:** *void*

___

### `Private` zoomTo

▸ **zoomTo**(`center`: number[], `zoom`: number): *void*

*Defined in [src/lib/atlas.ts:337](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L337)*

Moves the viewport to a center and zoom level.
Can be used to zoom in on clusters.

**`memberof`** Atlas

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`center` | number[] | - |
`zoom` | number | 16 |

**Returns:** *void*

___

###  zoomToExtent

▸ **zoomToExtent**(`extent`: Extent): *void*

*Defined in [src/lib/atlas.ts:622](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L622)*

Move the viewport to show the entire extent.
This will zoom in or out as necessary.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent |

**Returns:** *void*

___

###  zoomToLayer

▸ **zoomToLayer**(`layer`: VectorLayer): *void*

*Defined in [src/lib/atlas.ts:610](https://github.com/chronark/atlas/blob/198ad53/src/lib/atlas.ts#L610)*

Calculate the required viewport to display the entire layer and set the viewport accordingly.

**`memberof`** Atlas

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *void*
