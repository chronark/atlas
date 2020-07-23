[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/store"](_state_store_.md)

# Module: "state/store"

## Index

### Enumerations

* [Status](../enums/_state_store_.status.md)

### Classes

* [Store](../classes/_state_store_.store.md)

### Type aliases

* [State](_state_store_.md#state)

### Variables

* [globalStore](_state_store_.md#const-globalstore)

### Functions

* [initialState](_state_store_.md#const-initialstate)
* [newDefaultStore](_state_store_.md#newdefaultstore)

## Type aliases

###  State

Ƭ **State**: *object*

*Defined in [src/state/store.ts:8](https://github.com/chronark/atlas/blob/f950874/src/state/store.ts#L8)*

#### Type declaration:

* \[ **key**: *string*\]: any

* **allGeometries**: *Geometry[]*

* **allJobs**: *[Job](../interfaces/_types_customtypes_.job.md)[]*

* **selectedGeometries**: *Geometry[]*

* **selectedJobs**: *[Job](../interfaces/_types_customtypes_.job.md)[]*

* **test**? : *undefined | string*

* **visibleJobs**: *[Job](../interfaces/_types_customtypes_.job.md)[]*

## Variables

### `Const` globalStore

• **globalStore**: *[Store](../classes/_state_store_.store.md)‹›* = newDefaultStore()

*Defined in [src/state/store.ts:142](https://github.com/chronark/atlas/blob/f950874/src/state/store.ts#L142)*

## Functions

### `Const` initialState

▸ **initialState**(): *[State](_state_store_.md#state)*

*Defined in [src/state/store.ts:38](https://github.com/chronark/atlas/blob/f950874/src/state/store.ts#L38)*

Create a fresh state.
I had issues where the initialState was changed by side effects. So instead of defining this as an object, it returns a new object every time it is called.

**Returns:** *[State](_state_store_.md#state)*

___

###  newDefaultStore

▸ **newDefaultStore**(): *[Store](../classes/_state_store_.store.md)*

*Defined in [src/state/store.ts:138](https://github.com/chronark/atlas/blob/f950874/src/state/store.ts#L138)*

NewDefaultStore creates a Store instance with the default actions, mutations, initialState and all hooks.

This is mainly used for testing.

**Returns:** *[Store](../classes/_state_store_.store.md)*
