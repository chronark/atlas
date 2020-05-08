[Atlas documentation](../globals.md) › ["apis/jobs"](../modules/_apis_jobs_.md) › [Jobs](_apis_jobs_.jobs.md)

# Class: Jobs

## Hierarchy

* **Jobs**

## Index

### Constructors

* [constructor](_apis_jobs_.jobs.md#constructor)

### Properties

* [url](_apis_jobs_.jobs.md#private-url)

### Methods

* [fetchRawJobs](_apis_jobs_.jobs.md#private-fetchrawjobs)
* [get](_apis_jobs_.jobs.md#get)
* [transform](_apis_jobs_.jobs.md#private-transform)

## Constructors

###  constructor

\+ **new Jobs**(`url?`: undefined | string): *[Jobs](_apis_jobs_.jobs.md)*

*Defined in [apis/jobs.ts:6](https://github.com/chronark/atlas/blob/ce984e8/src/apis/jobs.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`url?` | undefined &#124; string |

**Returns:** *[Jobs](_apis_jobs_.jobs.md)*

## Properties

### `Private` url

• **url**: *string* = "https://jobboerse.th-nuernberg.de/srv.php/en/Suche/offers"

*Defined in [apis/jobs.ts:6](https://github.com/chronark/atlas/blob/ce984e8/src/apis/jobs.ts#L6)*

## Methods

### `Private` fetchRawJobs

▸ **fetchRawJobs**(): *Promise‹[RawSearch](../interfaces/_types_customtypes_.rawsearch.md)›*

*Defined in [apis/jobs.ts:14](https://github.com/chronark/atlas/blob/ce984e8/src/apis/jobs.ts#L14)*

**Returns:** *Promise‹[RawSearch](../interfaces/_types_customtypes_.rawsearch.md)›*

___

###  get

▸ **get**(): *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*

*Defined in [apis/jobs.ts:49](https://github.com/chronark/atlas/blob/ce984e8/src/apis/jobs.ts#L49)*

**Returns:** *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*

___

### `Private` transform

▸ **transform**(`rawSearch`: [RawSearch](../interfaces/_types_customtypes_.rawsearch.md)): *[Job](../interfaces/_types_customtypes_.job.md)[]*

*Defined in [apis/jobs.ts:23](https://github.com/chronark/atlas/blob/ce984e8/src/apis/jobs.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`rawSearch` | [RawSearch](../interfaces/_types_customtypes_.rawsearch.md) |

**Returns:** *[Job](../interfaces/_types_customtypes_.job.md)[]*
