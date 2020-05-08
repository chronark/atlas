[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/store"](../modules/_state_store_.md) › [Store](_state_store_.store.md)

# Class: Store

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
* [status](_state_store_.store.md#private-status)

### Methods

* [commit](_state_store_.store.md#commit)
* [dispatch](_state_store_.store.md#dispatch)
* [getState](_state_store_.store.md#getstate)

## Constructors

###  constructor

\+ **new Store**(`actions`: Record‹string, [Action](../modules/_state_actions_.md#action)›, `mutations`: Record‹string, [Mutation](../modules/_state_mutations_.md#mutation)›, `state?`: [State](../modules/_state_store_.md#state)): *[Store](_state_store_.store.md)*

*Defined in [state/store.ts:40](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L40)*

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

*Defined in [state/store.ts:36](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L36)*

___

###  events

• **events**: *[Events](_state_events_.events.md)*

*Defined in [state/store.ts:39](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L39)*

___

### `Private` mutations

• **mutations**: *Record‹string, [Mutation](../modules/_state_mutations_.md#mutation)›*

*Defined in [state/store.ts:37](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L37)*

___

### `Private` state

• **state**: *[State](../modules/_state_store_.md#state)*

*Defined in [state/store.ts:40](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L40)*

___

### `Private` status

• **status**: *[Status](../enums/_state_store_.status.md)*

*Defined in [state/store.ts:38](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L38)*

## Methods

###  commit

▸ **commit**(`mutationName`: string, `payload`: any): *boolean*

*Defined in [state/store.ts:75](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`mutationName` | string |
`payload` | any |

**Returns:** *boolean*

___

###  dispatch

▸ **dispatch**(`actionName`: string, `payload`: any): *boolean*

*Defined in [state/store.ts:65](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`actionName` | string |
`payload` | any |

**Returns:** *boolean*

___

###  getState

▸ **getState**(): *[State](../modules/_state_store_.md#state)*

*Defined in [state/store.ts:61](https://github.com/chronark/atlas/blob/b457830/src/state/store.ts#L61)*

**Returns:** *[State](../modules/_state_store_.md#state)*
