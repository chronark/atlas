[Atlas documentation](../globals.md) › ["state/actions"](_state_actions_.md)

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

*Defined in [state/actions.ts:5](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L5)*

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

*Defined in [state/actions.ts:27](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L27)*

___

### `Const` geometryActions

### ▪ **geometryActions**: *object*

*Defined in [state/actions.ts:7](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L7)*

###  addGeometries

▸ **addGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Geometry[]): *boolean*

*Defined in [state/actions.ts:8](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  selectGeometries

▸ **selectGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Geometry[]): *boolean*

*Defined in [state/actions.ts:11](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Geometry[] |

**Returns:** *boolean*

###  unselectGeometries

▸ **unselectGeometries**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: Record‹string, any›[]): *boolean*

*Defined in [state/actions.ts:14](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | Record‹string, any›[] |

**Returns:** *boolean*

___

### `Const` jobActions

### ▪ **jobActions**: *object*

*Defined in [state/actions.ts:19](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L19)*

###  setJobs

▸ **setJobs**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [state/actions.ts:20](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*

###  setVisibleJobs

▸ **setVisibleJobs**(`ctx`: [Store](../classes/_state_store_.store.md), `payload`: [Job](../interfaces/_types_customtypes_.job.md)[]): *boolean*

*Defined in [state/actions.ts:23](https://github.com/chronark/atlas/blob/4376b4d/src/state/actions.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [Store](../classes/_state_store_.store.md) |
`payload` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *boolean*
