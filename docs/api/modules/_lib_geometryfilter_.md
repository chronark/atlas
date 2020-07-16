[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/geometryFilter"](_lib_geometryfilter_.md)

# Module: "lib/geometryFilter"

## Index

### Functions

* [areCoordinatesInGeometry](_lib_geometryfilter_.md#const-arecoordinatesingeometry)
* [filterJobs](_lib_geometryfilter_.md#const-filterjobs)
* [filterJobsByGeometry](_lib_geometryfilter_.md#const-filterjobsbygeometry)

## Functions

### `Const` areCoordinatesInGeometry

▸ **areCoordinatesInGeometry**(`lonLat`: [number, number], `geometry`: Geometry, `checkExtentFirst`: boolean): *boolean*

*Defined in [src/lib/geometryFilter.ts:16](https://github.com/chronark/atlas/blob/a1ab160/src/lib/geometryFilter.ts#L16)*

FIXME: Find a more efficient way #AT-4.

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

*Defined in [src/lib/geometryFilter.ts:84](https://github.com/chronark/atlas/blob/a1ab160/src/lib/geometryFilter.ts#L84)*

Differentiates between circle geometry and polygon geometries and calls the correct functions.

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

▸ **filterJobsByGeometry**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[], `geometries`: Geometry[]): *[Job](../interfaces/_types_customtypes_.job.md)[]*

*Defined in [src/lib/geometryFilter.ts:37](https://github.com/chronark/atlas/blob/a1ab160/src/lib/geometryFilter.ts#L37)*

Filter all jobs that are inside the geometries.

FIXME: Find a more efficient way #AT-4.

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |
`geometries` | Geometry[] |

**Returns:** *[Job](../interfaces/_types_customtypes_.job.md)[]*
