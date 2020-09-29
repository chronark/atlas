[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/tracking"](../modules/_lib_tracking_.md) › [Metrics](_lib_tracking_.metrics.md)

# Class: Metrics

Metric collection handler.

## Hierarchy

* **Metrics**

## Index

### Constructors

* [constructor](_lib_tracking_.metrics.md#constructor)

### Properties

* [clicks](_lib_tracking_.metrics.md#private-clicks)
* [endTime](_lib_tracking_.metrics.md#private-endtime)
* [geocoding](_lib_tracking_.metrics.md#private-geocoding)
* [selected](_lib_tracking_.metrics.md#private-selected)
* [startTime](_lib_tracking_.metrics.md#private-starttime)
* [tiles](_lib_tracking_.metrics.md#private-tiles)

### Methods

* [addClick](_lib_tracking_.metrics.md#addclick)
* [addGeocoding](_lib_tracking_.metrics.md#addgeocoding)
* [addSelect](_lib_tracking_.metrics.md#addselect)
* [addtileLoad](_lib_tracking_.metrics.md#addtileload)
* [getResult](_lib_tracking_.metrics.md#getresult)
* [reset](_lib_tracking_.metrics.md#reset)
* [stop](_lib_tracking_.metrics.md#stop)

## Constructors

###  constructor

\+ **new Metrics**(): *[Metrics](_lib_tracking_.metrics.md)*

*Defined in [src/lib/tracking.ts:12](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L12)*

Creates an instance of Metrics.

**`memberof`** Metrics

**Returns:** *[Metrics](_lib_tracking_.metrics.md)*

## Properties

### `Private` clicks

• **clicks**: *number*

*Defined in [src/lib/tracking.ts:8](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L8)*

___

### `Private` endTime

• **endTime**: *Date*

*Defined in [src/lib/tracking.ts:12](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L12)*

___

### `Private` geocoding

• **geocoding**: *number*

*Defined in [src/lib/tracking.ts:10](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L10)*

___

### `Private` selected

• **selected**: *number*

*Defined in [src/lib/tracking.ts:9](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L9)*

___

### `Private` startTime

• **startTime**: *Date*

*Defined in [src/lib/tracking.ts:11](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L11)*

___

### `Private` tiles

• **tiles**: *number*

*Defined in [src/lib/tracking.ts:7](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L7)*

## Methods

###  addClick

▸ **addClick**(): *void*

*Defined in [src/lib/tracking.ts:45](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L45)*

Increments the clicks value by one.

**`memberof`** Metrics

**Returns:** *void*

___

###  addGeocoding

▸ **addGeocoding**(): *void*

*Defined in [src/lib/tracking.ts:27](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L27)*

Increments the geocoding value by one.

**`memberof`** Metrics

**Returns:** *void*

___

###  addSelect

▸ **addSelect**(): *void*

*Defined in [src/lib/tracking.ts:54](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L54)*

Increments the selected value by one.

**`memberof`** Metrics

**Returns:** *void*

___

###  addtileLoad

▸ **addtileLoad**(): *void*

*Defined in [src/lib/tracking.ts:36](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L36)*

Increments the tiles value by one.

**`memberof`** Metrics

**Returns:** *void*

___

###  getResult

▸ **getResult**(): *string*

*Defined in [src/lib/tracking.ts:86](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L86)*

Returns the collected metrics.

**`memberof`** Metrics

**Returns:** *string*

Serialized JSON.

___

###  reset

▸ **reset**(): *void*

*Defined in [src/lib/tracking.ts:63](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L63)*

Initializes / resets all values to 0.

**`memberof`** Metrics

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [src/lib/tracking.ts:76](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/tracking.ts#L76)*

Sets the end time.

**`memberof`** Metrics

**Returns:** *void*
