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

*Defined in [state/mutations.ts:7](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L7)*

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

*Defined in [state/mutations.ts:9](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L9)*

###  addGeometries

▸ **addGeometries**(`state`: [State](_state_store_.md#state), `payload`: Geometry[]): *boolean*

*Defined in [state/mutations.ts:10](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](_state_store_.md#state) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  selectGeometries

▸ **selectGeometries**(`state`: [State](_state_store_.md#state), `payload`: Geometry[]): *boolean*

*Defined in [state/mutations.ts:16](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](_state_store_.md#state) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  unselectGeometries

▸ **unselectGeometries**(`state`: [State](_state_store_.md#state), `payload`: Record‹string, any›[]): *boolean*

*Defined in [state/mutations.ts:22](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](_state_store_.md#state) |
`payload` | Record‹string, any›[] |

**Returns:** *boolean*

___

### `Const` jobMutations

### ▪ **jobMutations**: *object*

*Defined in [state/mutations.ts:27](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L27)*

###  setJobs

▸ **setJobs**(`state`: [State](_state_store_.md#state), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [state/mutations.ts:28](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](_state_store_.md#state) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*

###  setVisibleJobs

▸ **setVisibleJobs**(`state`: [State](_state_store_.md#state), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [state/mutations.ts:32](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](_state_store_.md#state) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*

___

### `Const` mutations

### ▪ **mutations**: *object*

*Defined in [state/mutations.ts:37](https://github.com/chronark/atlas/blob/0720030/src/state/mutations.ts#L37)*
