[Atlas documentation](globals.md)

# Atlas documentation

## Index

### Enumerations

* [Status](enums/status.md)

### Classes

* [Charon](classes/charon.md)
* [Color](classes/color.md)
* [Events](classes/events.md)
* [JobLayer](classes/joblayer.md)
* [JobStyle](classes/jobstyle.md)
* [Jobs](classes/jobs.md)
* [Logger](classes/logger.md)
* [Map](classes/map.md)
* [MapboxLayer](classes/mapboxlayer.md)
* [OSMLayer](classes/osmlayer.md)
* [Sample](classes/sample.md)
* [Store](classes/store.md)

### Interfaces

* [ContextEntity](interfaces/contextentity.md)
* [FeaturesEntity](interfaces/featuresentity.md)
* [GeocodingResponseObject](interfaces/geocodingresponseobject.md)
* [Geometry](interfaces/geometry.md)
* [Job](interfaces/job.md)
* [Properties](interfaces/properties.md)
* [RawJob](interfaces/rawjob.md)
* [RawLocation](interfaces/rawlocation.md)
* [RawSearch](interfaces/rawsearch.md)
* [SingleLocation](interfaces/singlelocation.md)
* [TileLayerGenerator](interfaces/tilelayergenerator.md)

### Type aliases

* [Action](globals.md#action)
* [Area](globals.md#area)
* [Location](globals.md#location)
* [LogObject](globals.md#logobject)
* [Mutation](globals.md#mutation)
* [State](globals.md#state)
* [stateCallback](globals.md#statecallback)

### Variables

* [circles](globals.md#const-circles)
* [log](globals.md#const-log)
* [map](globals.md#const-map)
* [searchField](globals.md#const-searchfield)
* [searchForm](globals.md#const-searchform)

### Functions

* [areCoordinatesInGeometry](globals.md#const-arecoordinatesingeometry)
* [bboxToExtent](globals.md#bboxtoextent)
* [bound](globals.md#bound)
* [convertGeoJsonToGeometries](globals.md#convertgeojsontogeometries)
* [countryLayer](globals.md#const-countrylayer)
* [countryLayerStyle](globals.md#const-countrylayerstyle)
* [filterJobs](globals.md#const-filterjobs)
* [filterJobsByGeometry](globals.md#const-filterjobsbygeometry)
* [getCachedGeometry](globals.md#const-getcachedgeometry)
* [getJobsInGeometry](globals.md#const-getjobsingeometry)
* [initialState](globals.md#const-initialstate)
* [isSingleLocation](globals.md#issinglelocation)
* [newDefaultStore](globals.md#newdefaultstore)
* [polygonStyle](globals.md#const-polygonstyle)
* [removeFrom](globals.md#removefrom)
* [removeListFromList](globals.md#removelistfromlist)
* [unique](globals.md#unique)

### Object literals

* [actions](globals.md#const-actions)
* [geometryActions](globals.md#const-geometryactions)
* [geometryMutations](globals.md#const-geometrymutations)
* [jobActions](globals.md#const-jobactions)
* [jobMutations](globals.md#const-jobmutations)
* [mutations](globals.md#const-mutations)

## Type aliases

###  Action

Ƭ **Action**: *function*

*Defined in [state/actions.ts:5](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L5)*

#### Type declaration:

▸ (`ctx`: [Store](classes/store.md), `payload`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](classes/store.md) |
`payload` | any |

___

###  Area

Ƭ **Area**: *[FeaturesEntity](interfaces/featuresentity.md)[]*

*Defined in [types/customTypes.ts:30](https://github.com/chronark/atlas/blob/11701e8/src/types/customTypes.ts#L30)*

___

###  Location

Ƭ **Location**: *[Area](globals.md#area) | [SingleLocation](interfaces/singlelocation.md)*

*Defined in [types/customTypes.ts:46](https://github.com/chronark/atlas/blob/11701e8/src/types/customTypes.ts#L46)*

The location for a job.
Address has to be added later on.

___

###  LogObject

Ƭ **LogObject**: *Record‹string, any› | number*

*Defined in [types/customTypes.ts:91](https://github.com/chronark/atlas/blob/11701e8/src/types/customTypes.ts#L91)*

___

###  Mutation

Ƭ **Mutation**: *function*

*Defined in [state/mutations.ts:7](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L7)*

#### Type declaration:

▸ (`state`: [State](globals.md#state), `payload`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |
`payload` | any |

___

###  State

Ƭ **State**: *object*

*Defined in [state/store.ts:9](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L9)*

#### Type declaration:

* \[ **key**: *string*\]: any

* **allGeometries**: *Geometry[]*

* **allJobs**: *[Job](interfaces/job.md)[]*

* **selectedGeometries**: *Geometry[]*

* **test**? : *undefined | string*

* **visibleJobs**: *[Job](interfaces/job.md)[]*

___

###  stateCallback

Ƭ **stateCallback**: *function*

*Defined in [state/events.ts:3](https://github.com/chronark/atlas/blob/11701e8/src/state/events.ts#L3)*

#### Type declaration:

▸ (`state`: [State](globals.md#state)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |

## Variables

### `Const` circles

• **circles**: *Circle‹›[]* = [
  new Circle([1, 1], 1),
  new Circle([2, 2], 2),
  new Circle([3, 3], 3),
  new Circle([4, 4], 4),
  new Circle([5, 5], 5),
]

*Defined in [state/geometry.test.ts:7](https://github.com/chronark/atlas/blob/11701e8/src/state/geometry.test.ts#L7)*

___

### `Const` log

• **log**: *[Logger](classes/logger.md)‹›* = new Logger()

*Defined in [lib/logger.ts:60](https://github.com/chronark/atlas/blob/11701e8/src/lib/logger.ts#L60)*

___

### `Const` map

• **map**: *[Map](classes/map.md)‹›* = new Map("map-container")

*Defined in [lib/index.ts:8](https://github.com/chronark/atlas/blob/11701e8/src/lib/index.ts#L8)*

___

### `Const` searchField

• **searchField**: *HTMLInputElement* = document.getElementById("searchField") as HTMLInputElement

*Defined in [lib/index.ts:25](https://github.com/chronark/atlas/blob/11701e8/src/lib/index.ts#L25)*

___

### `Const` searchForm

• **searchForm**: *null | HTMLElement* = document.getElementById("searchForm")

*Defined in [lib/index.ts:26](https://github.com/chronark/atlas/blob/11701e8/src/lib/index.ts#L26)*

## Functions

### `Const` areCoordinatesInGeometry

▸ **areCoordinatesInGeometry**(`lonLat`: [number, number], `geometry`: Geometry, `checkExtentFirst`: boolean): *boolean*

*Defined in [lib/geometryFilter.ts:8](https://github.com/chronark/atlas/blob/11701e8/src/lib/geometryFilter.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`lonLat` | [number, number] | - |
`geometry` | Geometry | - |
`checkExtentFirst` | boolean | true |

**Returns:** *boolean*

___

###  bboxToExtent

▸ **bboxToExtent**(`bbox`: [number, number, number, number]): *Extent*

*Defined in [lib/util.ts:70](https://github.com/chronark/atlas/blob/11701e8/src/lib/util.ts#L70)*

Transforms a bounding box to an Extent in EPSG:3875 format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bbox` | [number, number, number, number] | A bounding box of a feature, layer or anything else. |

**Returns:** *Extent*

An Extent in EPSG-3875 format.

___

###  bound

▸ **bound**(`lower`: number, `value`: number, `upper`: number): *number*

*Defined in [lib/util.ts:41](https://github.com/chronark/atlas/blob/11701e8/src/lib/util.ts#L41)*

Return value if it is between lower and upper, otherwise return the boundary value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lower` | number | The lower end of the boundary. |
`value` | number | Any value. |
`upper` | number | The upper end of the boundary. |

**Returns:** *number*

A number that is within lower and upper.

___

###  convertGeoJsonToGeometries

▸ **convertGeoJsonToGeometries**(`geojson`: Record‹string, any›): *undefined | Geometry‹›[]*

*Defined in [lib/countryLayer.ts:17](https://github.com/chronark/atlas/blob/11701e8/src/lib/countryLayer.ts#L17)*

Creates a Geometry object from geojson data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`geojson` | Record‹string, any› | A geojson object you want to convert. |

**Returns:** *undefined | Geometry‹›[]*

GeometryFeatures.

___

### `Const` countryLayer

▸ **countryLayer**(`map`: [Map](classes/map.md)): *void*

*Defined in [lib/countryLayer.ts:31](https://github.com/chronark/atlas/blob/11701e8/src/lib/countryLayer.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [Map](classes/map.md) |

**Returns:** *void*

___

### `Const` countryLayerStyle

▸ **countryLayerStyle**(`__namedParameters`: object): *Style*

*Defined in [styles/countryStyle.ts:5](https://github.com/chronark/atlas/blob/11701e8/src/styles/countryStyle.ts#L5)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`isSelected` | boolean | false |

**Returns:** *Style*

___

### `Const` filterJobs

▸ **filterJobs**(`jobs`: [Job](interfaces/job.md)[], `filter`: object): *[Job](interfaces/job.md)[]*

*Defined in [lib/geometryFilter.ts:63](https://github.com/chronark/atlas/blob/11701e8/src/lib/geometryFilter.ts#L63)*

**Parameters:**

▪ **jobs**: *[Job](interfaces/job.md)[]*

▪ **filter**: *object*

Name | Type |
------ | ------ |
`circle?` | [Geometry](interfaces/geometry.md) |
`geometries?` | Geometry[] |

**Returns:** *[Job](interfaces/job.md)[]*

___

### `Const` filterJobsByGeometry

▸ **filterJobsByGeometry**(`jobs`: [Job](interfaces/job.md)[], `geometry`: Geometry[]): *[Job](interfaces/job.md)[]*

*Defined in [lib/geometryFilter.ts:56](https://github.com/chronark/atlas/blob/11701e8/src/lib/geometryFilter.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](interfaces/job.md)[] |
`geometry` | Geometry[] |

**Returns:** *[Job](interfaces/job.md)[]*

___

### `Const` getCachedGeometry

▸ **getCachedGeometry**(`store`: [Store](classes/store.md), `event`: MapBrowserEvent): *Geometry*

*Defined in [lib/countryLayer.ts:23](https://github.com/chronark/atlas/blob/11701e8/src/lib/countryLayer.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [Store](classes/store.md) |
`event` | MapBrowserEvent |

**Returns:** *Geometry*

___

### `Const` getJobsInGeometry

▸ **getJobsInGeometry**(`jobs`: [Job](interfaces/job.md)[], `geometries`: Geometry[]): *[Job](interfaces/job.md)[]*

*Defined in [lib/geometryFilter.ts:21](https://github.com/chronark/atlas/blob/11701e8/src/lib/geometryFilter.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](interfaces/job.md)[] |
`geometries` | Geometry[] |

**Returns:** *[Job](interfaces/job.md)[]*

___

### `Const` initialState

▸ **initialState**(): *[State](globals.md#state)*

*Defined in [state/store.ts:26](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L26)*

**Returns:** *[State](globals.md#state)*

▸ **initialState**(): *[State](globals.md#state)*

*Defined in [state/geometry.test.ts:15](https://github.com/chronark/atlas/blob/11701e8/src/state/geometry.test.ts#L15)*

**Returns:** *[State](globals.md#state)*

___

###  isSingleLocation

▸ **isSingleLocation**(`location`: [Location](globals.md#location)): *location is SingleLocation*

*Defined in [lib/util.ts:80](https://github.com/chronark/atlas/blob/11701e8/src/lib/util.ts#L80)*

Typeguard for SingleLocation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`location` | [Location](globals.md#location) | A location object that is either a SingleLocation or an Area. |

**Returns:** *location is SingleLocation*

True if location is a SingleLocation.

___

###  newDefaultStore

▸ **newDefaultStore**(): *[Store](classes/store.md)*

*Defined in [state/store.ts:93](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L93)*

NewDefaultStore creates a Store instance with the default actions, mutations, initialState and all hooks.

**Returns:** *[Store](classes/store.md)*

A Store instance.

___

### `Const` polygonStyle

▸ **polygonStyle**(`__namedParameters`: object): *Style*

*Defined in [styles/polygon.ts:5](https://github.com/chronark/atlas/blob/11701e8/src/styles/polygon.ts#L5)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`isSelected` | boolean | false |

**Returns:** *Style*

___

###  removeFrom

▸ **removeFrom**(`list`: any[], `entry`: any): *any[]*

*Defined in [lib/util.ts:13](https://github.com/chronark/atlas/blob/11701e8/src/lib/util.ts#L13)*

Remove an item from a list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | any[] | A list of items. |
`entry` | any | A single item. |

**Returns:** *any[]*

List without entry.

___

###  removeListFromList

▸ **removeListFromList**(`list1`: any[], `list2`: any[]): *any[]*

*Defined in [lib/util.ts:26](https://github.com/chronark/atlas/blob/11701e8/src/lib/util.ts#L26)*

Remove every item in list1 from list2.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list1` | any[] | A subset of list2. |
`list2` | any[] | A list of items. |

**Returns:** *any[]*

List2 without all items present in list1.

___

###  unique

▸ **unique**(`list`: any[]): *any[]*

*Defined in [lib/util.ts:51](https://github.com/chronark/atlas/blob/11701e8/src/lib/util.ts#L51)*

Removes all duplicates from an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | any[] | An array with duplicates. |

**Returns:** *any[]*

A filtered array where all items are unique.

## Object literals

### `Const` actions

### ▪ **actions**: *object*

*Defined in [state/actions.ts:27](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L27)*

___

### `Const` geometryActions

### ▪ **geometryActions**: *object*

*Defined in [state/actions.ts:7](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L7)*

###  addGeometries

▸ **addGeometries**(`ctx`: [Store](classes/store.md), `payload`: Geometry[]): *boolean*

*Defined in [state/actions.ts:8](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](classes/store.md) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  selectGeometries

▸ **selectGeometries**(`ctx`: [Store](classes/store.md), `payload`: Geometry[]): *boolean*

*Defined in [state/actions.ts:11](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](classes/store.md) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  unselectGeometries

▸ **unselectGeometries**(`ctx`: [Store](classes/store.md), `payload`: Record‹string, any›[]): *boolean*

*Defined in [state/actions.ts:14](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](classes/store.md) |
`payload` | Record‹string, any›[] |

**Returns:** *boolean*

___

### `Const` geometryMutations

### ▪ **geometryMutations**: *object*

*Defined in [state/mutations.ts:9](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L9)*

###  addGeometries

▸ **addGeometries**(`state`: [State](globals.md#state), `payload`: Geometry[]): *boolean*

*Defined in [state/mutations.ts:10](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  selectGeometries

▸ **selectGeometries**(`state`: [State](globals.md#state), `payload`: Geometry[]): *boolean*

*Defined in [state/mutations.ts:16](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  unselectGeometries

▸ **unselectGeometries**(`state`: [State](globals.md#state), `payload`: Record‹string, any›[]): *boolean*

*Defined in [state/mutations.ts:22](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |
`payload` | Record‹string, any›[] |

**Returns:** *boolean*

___

### `Const` jobActions

### ▪ **jobActions**: *object*

*Defined in [state/actions.ts:19](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L19)*

###  setJobs

▸ **setJobs**(`ctx`: [Store](classes/store.md), `payload`: [Job](interfaces/job.md)[]): *boolean*

*Defined in [state/actions.ts:20](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](classes/store.md) |
`payload` | [Job](interfaces/job.md)[] |

**Returns:** *boolean*

###  setVisibleJobs

▸ **setVisibleJobs**(`ctx`: [Store](classes/store.md), `payload`: [Job](interfaces/job.md)[]): *boolean*

*Defined in [state/actions.ts:23](https://github.com/chronark/atlas/blob/11701e8/src/state/actions.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](classes/store.md) |
`payload` | [Job](interfaces/job.md)[] |

**Returns:** *boolean*

___

### `Const` jobMutations

### ▪ **jobMutations**: *object*

*Defined in [state/mutations.ts:27](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L27)*

###  setJobs

▸ **setJobs**(`state`: [State](globals.md#state), `payload`: [Job](interfaces/job.md)[]): *boolean*

*Defined in [state/mutations.ts:28](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |
`payload` | [Job](interfaces/job.md)[] |

**Returns:** *boolean*

###  setVisibleJobs

▸ **setVisibleJobs**(`state`: [State](globals.md#state), `payload`: [Job](interfaces/job.md)[]): *boolean*

*Defined in [state/mutations.ts:32](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](globals.md#state) |
`payload` | [Job](interfaces/job.md)[] |

**Returns:** *boolean*

___

### `Const` mutations

### ▪ **mutations**: *object*

*Defined in [state/mutations.ts:37](https://github.com/chronark/atlas/blob/11701e8/src/state/mutations.ts#L37)*
