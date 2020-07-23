[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/actions"](_state_actions_.md)

# Module: "state/actions"

## Index

### Type aliases

* [Action](_state_actions_.md#action)

### Object literals

* [actions](_state_actions_.md#const-actions)
* [geometryActions](_state_actions_.md#const-geometryactions)
* [jobActions](_state_actions_.md#const-jobactions)

## Type aliases

###  Action

Ƭ **Action**: *function*

*Defined in [src/state/actions.ts:5](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L5)*

#### Type declaration:

▸ (`ctx`: [Store](../classes/_state_store_.store.md), `payload`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | any |

## Object literals

### `Const` actions

### ▪ **actions**: *object*

*Defined in [src/state/actions.ts:88](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L88)*

___

### `Const` geometryActions

### ▪ **geometryActions**: *object*

*Defined in [src/state/actions.ts:9](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L9)*

Collection if geometry actions.

###  addGeometries

▸ **addGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Geometry[]): *boolean*

*Defined in [src/state/actions.ts:17](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L17)*

Add geometries to allGeometries.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  selectGeometries

▸ **selectGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Geometry[]): *boolean*

*Defined in [src/state/actions.ts:27](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L27)*

Add geometries to selectedGeometries.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  setSelectedGeometries

▸ **setSelectedGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Record‹string, any›[]): *boolean*

*Defined in [src/state/actions.ts:47](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L47)*

Overwrite selectedGeometries.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Record‹string, any›[] |

**Returns:** *boolean*

###  unselectGeometries

▸ **unselectGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Record‹string, any›[]): *boolean*

*Defined in [src/state/actions.ts:37](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L37)*

Remove geometries from selectedGeometries.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Record‹string, any›[] |

**Returns:** *boolean*

___

### `Const` jobActions

### ▪ **jobActions**: *object*

*Defined in [src/state/actions.ts:54](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L54)*

Collection of job actions.

###  setJobs

▸ **setJobs**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [src/state/actions.ts:62](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L62)*

Replace jobs in allJobs.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*

###  setSelectedJobs

▸ **setSelectedJobs**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [src/state/actions.ts:83](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L83)*

Replace jobs in selectedJobs.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*

###  setVisibleJobs

▸ **setVisibleJobs**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [src/state/actions.ts:72](https://github.com/chronark/atlas/blob/3cdd76f/src/state/actions.ts#L72)*

Replace jobs in visibleJobs.

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*
