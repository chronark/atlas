[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/store"](../modules/_state_store_.md) › [Store](_state_store_.store.md)

# Class: Store

State manager for all map business.

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_state_store_.store.md#constructor)

### Properties

* [actions](_state_store_.store.md#private-actions)
* [events](_state_store_.store.md#events)
* [mutations](_state_store_.store.md#private-mutations)
* [state](_state_store_.store.md#private-state)

### Methods

* [commit](_state_store_.store.md#commit)
* [dispatch](_state_store_.store.md#dispatch)
* [getState](_state_store_.store.md#getstate)

## Constructors

###  constructor

\+ **new Store**(`actions`: Record‹string, [Action](../modules/_state_actions_.md#action)›, `mutations`: Record‹string, [Mutation](../modules/_state_mutations_.md#mutation)›, `state?`: [State](../modules/_state_store_.md#state)): *[Store](_state_store_.store.md)*

*Defined in [src/state/store.ts:43](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L43)*

Creates an instance of Store.

**`memberof`** Store

**Parameters:**

Name | Type |
------ | ------ |
`actions` | Record‹string, [Action](../modules/_state_actions_.md#action)› |
`mutations` | Record‹string, [Mutation](../modules/_state_mutations_.md#mutation)› |
`state?` | [State](../modules/_state_store_.md#state) |

**Returns:** *[Store](_state_store_.store.md)*

## Properties

### `Private` actions

• **actions**: *Record‹string, [Action](../modules/_state_actions_.md#action)›*

*Defined in [src/state/store.ts:40](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L40)*

___

###  events

• **events**: *[Events](_state_events_.events.md)*

*Defined in [src/state/store.ts:42](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L42)*

___

### `Private` mutations

• **mutations**: *Record‹string, [Mutation](../modules/_state_mutations_.md#mutation)›*

*Defined in [src/state/store.ts:41](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L41)*

___

### `Private` state

• **state**: *[State](../modules/_state_store_.md#state)*

*Defined in [src/state/store.ts:43](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L43)*

## Methods

###  commit

▸ **commit**(`mutationName`: string, `payload`: any): *boolean*

*Defined in [src/state/store.ts:108](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L108)*

Run a mutation against the current state.

This function is public to work properly with custom actions but you *must never* call this yourself!

**`memberof`** Store

**Parameters:**

Name | Type |
------ | ------ |
`mutationName` | string |
`payload` | any |

**Returns:** *boolean*

Return whether mutation was performed successful or not.

___

###  dispatch

▸ **dispatch**(`actionName`: string, `payload`: any): *boolean*

*Defined in [src/state/store.ts:90](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L90)*

Run an action to perform state change.

Always use this if you want the state to change.

**`memberof`** Store

**Parameters:**

Name | Type |
------ | ------ |
`actionName` | string |
`payload` | any |

**Returns:** *boolean*

Return whether action was performed successful or not.

___

###  getState

▸ **getState**(): *[State](../modules/_state_store_.md#state)*

*Defined in [src/state/store.ts:76](https://github.com/chronark/atlas/blob/f6d4b61/src/state/store.ts#L76)*

Getter method.

**`memberof`** Store

**Returns:** *[State](../modules/_state_store_.md#state)*
