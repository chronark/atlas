[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/events"](../modules/_state_events_.md) › [Events](_state_events_.events.md)

# Class: Events

A PubSub implementation for callbacks used in atlas.

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

*Defined in [src/state/events.ts:11](https://github.com/chronark/atlas/blob/3cdd76f/src/state/events.ts#L11)*

Creates an instance of Events.

**`memberof`** Events

**Returns:** *[Events](_state_events_.events.md)*

## Properties

### `Private` events

• **events**: *Record‹string, any›*

*Defined in [src/state/events.ts:11](https://github.com/chronark/atlas/blob/3cdd76f/src/state/events.ts#L11)*

## Methods

###  publish

▸ **publish**(`event`: string, `state`: [State](../modules/_state_store_.md#state)): *void*

*Defined in [src/state/events.ts:44](https://github.com/chronark/atlas/blob/3cdd76f/src/state/events.ts#L44)*

Calls all subscribers.

**`memberof`** Events

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The triggered event. |
`state` | [State](../modules/_state_store_.md#state) | All subscribed callback will receive the current state as parameter. |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`events`: string[], `callback`: [stateCallback](../modules/_state_events_.md#statecallback)): *void*

*Defined in [src/state/events.ts:28](https://github.com/chronark/atlas/blob/3cdd76f/src/state/events.ts#L28)*

Subscribe to one or more events.

**`memberof`** Events

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | string[] | - |
`callback` | [stateCallback](../modules/_state_events_.md#statecallback) | Will be called whenever one of the events fires. |

**Returns:** *void*
