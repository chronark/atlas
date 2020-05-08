[Atlas documentation](../globals.md) › ["state/store"](_state_store_.md)

# Module: "state/store"

## Index

### Enumerations

* [Status](../enums/_state_store_.status.md)

### Classes

* [Store](../classes/_state_store_.store.md)

### Type aliases

* [State](_state_store_.md#state)

### Functions

* [initialState](_state_store_.md#const-initialstate)
* [newDefaultStore](_state_store_.md#newdefaultstore)

## Type aliases

###  State

Ƭ **State**: *object*

*Defined in [state/store.ts:9](https://github.com/chronark/atlas/blob/3b4704d/src/state/store.ts#L9)*

#### Type declaration:

* \[ **key**: *string*\]: any

* **allGeometries**: *Geometry[]*

* **allJobs**: *[Job](../interfaces/_types_customtypes_.job.md)[]*

* **selectedGeometries**: *Geometry[]*

* **test**? : *undefined | string*

* **visibleJobs**: *[Job](../interfaces/_types_customtypes_.job.md)[]*

## Functions

### `Const` initialState

▸ **initialState**(): *[State](_state_store_.md#state)*

*Defined in [state/store.ts:26](https://github.com/chronark/atlas/blob/3b4704d/src/state/store.ts#L26)*

**Returns:** *[State](_state_store_.md#state)*

___

###  newDefaultStore

▸ **newDefaultStore**(): *[Store](../classes/_state_store_.store.md)*

*Defined in [state/store.ts:93](https://github.com/chronark/atlas/blob/3b4704d/src/state/store.ts#L93)*

NewDefaultStore creates a Store instance with the default actions, mutations, initialState and all hooks.

**Returns:** *[Store](../classes/_state_store_.store.md)*

A Store instance.
