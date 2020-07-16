[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/mutations"](_state_mutations_.md)

# Module: "state/mutations"

## Index

### Type aliases

* [Mutation](_state_mutations_.md#mutation)

### Object literals

* [geometryMutations](_state_mutations_.md#const-geometrymutations)
* [jobMutations](_state_mutations_.md#const-jobmutations)
* [mutations](_state_mutations_.md#const-mutations)

## Type aliases

###  Mutation

Ƭ **Mutation**: *function*

*Defined in [src/state/mutations.ts:7](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L7)*

#### Type declaration:

▸ (`state`: [State](_state_store_.md#state), `payload`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](_state_store_.md#state) |
`payload` | any |

## Object literals

### `Const` geometryMutations

### ▪ **geometryMutations**: *object*

*Defined in [src/state/mutations.ts:11](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L11)*

A collection of mutations for geometry.

###  addGeometries

▸ **addGeometries**(`state`: [State](_state_store_.md#state), `payload`: Geometry[]): *boolean*

*Defined in [src/state/mutations.ts:19](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L19)*

Add a list of geometries to allGeoemtries.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | Geometry[] | A list of geometries you want to add to the existing ones. |

**Returns:** *boolean*

###  selectGeometries

▸ **selectGeometries**(`state`: [State](_state_store_.md#state), `payload`: Geometry[]): *boolean*

*Defined in [src/state/mutations.ts:31](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L31)*

Add a list of geometries to selectedGeoemtries.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | Geometry[] | - |

**Returns:** *boolean*

###  setSelectedGeometries

▸ **setSelectedGeometries**(`state`: [State](_state_store_.md#state), `payload`: Geometry[]): *boolean*

*Defined in [src/state/mutations.ts:54](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L54)*

Overwrite selectedGeoemtries.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | Geometry[] | - |

**Returns:** *boolean*

###  unselectGeometries

▸ **unselectGeometries**(`state`: [State](_state_store_.md#state), `payload`: Geometry[]): *boolean*

*Defined in [src/state/mutations.ts:43](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L43)*

Remove a list of geometries from selectedGeoemtries.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | Geometry[] | - |

**Returns:** *boolean*

___

### `Const` jobMutations

### ▪ **jobMutations**: *object*

*Defined in [src/state/mutations.ts:62](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L62)*

Collection of mutations for jobs.

###  setJobs

▸ **setJobs**(`state`: [State](_state_store_.md#state), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [src/state/mutations.ts:70](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L70)*

Replace allJobs with new jobs.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] | New jobs that will replace the old ones. |

**Returns:** *boolean*

###  setSelectedJobs

▸ **setSelectedJobs**(`state`: [State](_state_store_.md#state), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [src/state/mutations.ts:92](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L92)*

Replace selectedJobs with new jobs.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] | New jobs that will be selected. |

**Returns:** *boolean*

###  setVisibleJobs

▸ **setVisibleJobs**(`state`: [State](_state_store_.md#state), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [src/state/mutations.ts:81](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L81)*

Replace visibleJobs with new jobs..

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](_state_store_.md#state) | The current state. |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] | New jobs that will replace the old ones. |

**Returns:** *boolean*

___

### `Const` mutations

### ▪ **mutations**: *object*

*Defined in [src/state/mutations.ts:97](https://github.com/chronark/atlas/blob/a1ab160/src/state/mutations.ts#L97)*
