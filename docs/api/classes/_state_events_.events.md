[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/events"](../modules/_state_events_.md) › [Events](_state_events_.events.md)

# Class: Events

## Hierarchy

* **Events**

## Index

### Constructors

* [constructor](_state_events_.events.md#constructor)

### Properties

* [events](_state_events_.events.md#private-events)

### Methods

* [publish](_state_events_.events.md#publish)
* [subscribe](_state_events_.events.md#subscribe)

## Constructors

###  constructor

\+ **new Events**(): *[Events](_state_events_.events.md)*

*Defined in [state/events.ts:6](https://github.com/chronark/atlas/blob/7501b49/src/state/events.ts#L6)*

**Returns:** *[Events](_state_events_.events.md)*

## Properties

### `Private` events

• **events**: *Record‹string, any›*

*Defined in [state/events.ts:6](https://github.com/chronark/atlas/blob/7501b49/src/state/events.ts#L6)*

## Methods

###  publish

▸ **publish**(`event`: string, `state`: [State](../modules/_state_store_.md#state)): *void*

*Defined in [state/events.ts:20](https://github.com/chronark/atlas/blob/7501b49/src/state/events.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`state` | [State](../modules/_state_store_.md#state) |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`events`: string[], `callback`: [stateCallback](../modules/_state_events_.md#statecallback)): *void*

*Defined in [state/events.ts:11](https://github.com/chronark/atlas/blob/7501b49/src/state/events.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | string[] |
`callback` | [stateCallback](../modules/_state_events_.md#statecallback) |

**Returns:** *void*
