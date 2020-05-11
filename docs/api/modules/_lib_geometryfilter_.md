[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/geometryFilter"](_lib_geometryfilter_.md)

# Module: "lib/geometryFilter"

## Index

### Functions

* [areCoordinatesInGeometry](_lib_geometryfilter_.md#const-arecoordinatesingeometry)
* [filterJobs](_lib_geometryfilter_.md#const-filterjobs)
* [filterJobsByGeometry](_lib_geometryfilter_.md#const-filterjobsbygeometry)
* [getJobsInGeometry](_lib_geometryfilter_.md#const-getjobsingeometry)

## Functions

### `Const` areCoordinatesInGeometry

▸ **areCoordinatesInGeometry**(`lonLat`: [number, number], `geometry`: Geometry, `checkExtentFirst`: boolean): *boolean*

*Defined in [lib/geometryFilter.ts:8](https://github.com/chronark/atlas/blob/eb59b04/src/lib/geometryFilter.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`lonLat` | [number, number] | - |
`geometry` | Geometry | - |
`checkExtentFirst` | boolean | true |

**Returns:** *boolean*

___

### `Const` filterJobs

▸ **filterJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[], `filter`: object): *[Job](../interfaces/_types_customtypes_.job.md)[]*

*Defined in [lib/geometryFilter.ts:63](https://github.com/chronark/atlas/blob/eb59b04/src/lib/geometryFilter.ts#L63)*

**Parameters:**

▪ **jobs**: *[Job](../interfaces/_types_customtypes_.job.md)[]*

▪ **filter**: *object*

Name | Type |
------ | ------ |
`circle?` | [Geometry](../interfaces/_types_customtypes_.geometry.md) |
`geometries?` | Geometry[] |

**Returns:** *[Job](../interfaces/_types_customtypes_.job.md)[]*

___

### `Const` filterJobsByGeometry

▸ **filterJobsByGeometry**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[], `geometry`: Geometry[]): *[Job](../interfaces/_types_customtypes_.job.md)[]*

*Defined in [lib/geometryFilter.ts:56](https://github.com/chronark/atlas/blob/eb59b04/src/lib/geometryFilter.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |
`geometry` | Geometry[] |

**Returns:** *[Job](../interfaces/_types_customtypes_.job.md)[]*

___

### `Const` getJobsInGeometry

▸ **getJobsInGeometry**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[], `geometries`: Geometry[]): *[Job](../interfaces/_types_customtypes_.job.md)[]*

*Defined in [lib/geometryFilter.ts:21](https://github.com/chronark/atlas/blob/eb59b04/src/lib/geometryFilter.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |
`geometries` | Geometry[] |

**Returns:** *[Job](../interfaces/_types_customtypes_.job.md)[]*
