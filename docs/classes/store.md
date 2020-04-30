[Atlas documentation](../globals.md) › [Store](store.md)

# Class: Store

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](store.md#constructor)

### Properties

* [actions](store.md#private-actions)
* [events](store.md#events)
* [mutations](store.md#private-mutations)
* [state](store.md#private-state)
* [status](store.md#private-status)

### Methods

* [commit](store.md#commit)
* [dispatch](store.md#dispatch)
* [getState](store.md#getstate)

## Constructors

###  constructor

\+ **new Store**(`actions`: Record‹string, [Action](../globals.md#action)›, `mutations`: Record‹string, [Mutation](../globals.md#mutation)›, `state?`: [State](../globals.md#state)): *[Store](store.md)*

*Defined in [state/store.ts:40](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | Record‹string, [Action](../globals.md#action)› |
`mutations` | Record‹string, [Mutation](../globals.md#mutation)› |
`state?` | [State](../globals.md#state) |

**Returns:** *[Store](store.md)*

## Properties

### `Private` actions

• **actions**: *Record‹string, [Action](../globals.md#action)›*

*Defined in [state/store.ts:36](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L36)*

___

###  events

• **events**: *[Events](events.md)*

*Defined in [state/store.ts:39](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L39)*

___

### `Private` mutations

• **mutations**: *Record‹string, [Mutation](../globals.md#mutation)›*

*Defined in [state/store.ts:37](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L37)*

___

### `Private` state

• **state**: *[State](../globals.md#state)*

*Defined in [state/store.ts:40](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L40)*

___

### `Private` status

• **status**: *[Status](../enums/status.md)*

*Defined in [state/store.ts:38](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L38)*

## Methods

###  commit

▸ **commit**(`mutationName`: string, `payload`: any): *boolean*

*Defined in [state/store.ts:75](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`mutationName` | string |
`payload` | any |

**Returns:** *boolean*

___

###  dispatch

▸ **dispatch**(`actionName`: string, `payload`: any): *boolean*

*Defined in [state/store.ts:65](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`actionName` | string |
`payload` | any |

**Returns:** *boolean*

___

###  getState

▸ **getState**(): *[State](../globals.md#state)*

*Defined in [state/store.ts:61](https://github.com/chronark/atlas/blob/11701e8/src/state/store.ts#L61)*

**Returns:** *[State](../globals.md#state)*
