[Atlas documentation](../README.md) › [Globals](../globals.md) › ["state/store"](../modules/_state_store_.md) › [Status](_state_store_.status.md)

# Enumeration: Status

The store's status can be one of the following.
Action: The store is currently performing an action.
Listening: The store is ready for an action.
Mutation: The store is running a mutation right now. This is used to ensure you aren't calling a mutation by itself but always through an action.

## Index

### Enumeration members

* [action](_state_store_.status.md#action)
* [listening](_state_store_.status.md#listening)
* [mutation](_state_store_.status.md#mutation)

## Enumeration members

###  action

• **action**:

*Defined in [src/state/store.ts:27](https://github.com/chronark/atlas/blob/3cdd76f/src/state/store.ts#L27)*

___

###  listening

• **listening**:

*Defined in [src/state/store.ts:28](https://github.com/chronark/atlas/blob/3cdd76f/src/state/store.ts#L28)*

___

###  mutation

• **mutation**:

*Defined in [src/state/store.ts:29](https://github.com/chronark/atlas/blob/3cdd76f/src/state/store.ts#L29)*
