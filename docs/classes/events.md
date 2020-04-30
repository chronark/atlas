[Atlas documentation](../globals.md) › [Events](events.md)

# Class: Events

## Hierarchy

* **Events**

## Index

### Constructors

* [constructor](events.md#constructor)

### Properties

* [events](events.md#private-events)

### Methods

* [publish](events.md#publish)
* [subscribe](events.md#subscribe)

## Constructors

###  constructor

\+ **new Events**(): *[Events](events.md)*

*Defined in [state/events.ts:6](https://github.com/chronark/atlas/blob/88749ce/src/state/events.ts#L6)*

**Returns:** *[Events](events.md)*

## Properties

### `Private` events

• **events**: *Record‹string, any›*

*Defined in [state/events.ts:6](https://github.com/chronark/atlas/blob/88749ce/src/state/events.ts#L6)*

## Methods

###  publish

▸ **publish**(`event`: string, `state`: [State](../globals.md#state)): *void*

*Defined in [state/events.ts:20](https://github.com/chronark/atlas/blob/88749ce/src/state/events.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`state` | [State](../globals.md#state) |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`events`: string[], `callback`: [stateCallback](../globals.md#statecallback)): *void*

*Defined in [state/events.ts:11](https://github.com/chronark/atlas/blob/88749ce/src/state/events.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | string[] |
`callback` | [stateCallback](../globals.md#statecallback) |

**Returns:** *void*
