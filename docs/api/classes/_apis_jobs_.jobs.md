[Atlas documentation](../README.md) › [Globals](../globals.md) › ["apis/jobs"](../modules/_apis_jobs_.md) › [Jobs](_apis_jobs_.jobs.md)

# Class: Jobs

Responsible for loading jobs from an endpoint.
This is just for testing.
In production the map will receive jobs from outside.

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

*Defined in [src/apis/jobs.ts:11](https://github.com/chronark/atlas/blob/f6d4b61/src/apis/jobs.ts#L11)*

Creates an instance of Jobs.

**`memberof`** Jobs

**Parameters:**

Name | Type |
------ | ------ |
`url?` | undefined &#124; string |

**Returns:** *[Jobs](_apis_jobs_.jobs.md)*

## Properties

### `Private` url

• **url**: *string* = "https://jobboerse.th-nuernberg.de/srv.php/en/Suche/offers"

*Defined in [src/apis/jobs.ts:11](https://github.com/chronark/atlas/blob/f6d4b61/src/apis/jobs.ts#L11)*

## Methods

### `Private` fetchRawJobs

▸ **fetchRawJobs**(): *Promise‹[RawSearch](../interfaces/_types_customtypes_.rawsearch.md)›*

*Defined in [src/apis/jobs.ts:32](https://github.com/chronark/atlas/blob/f6d4b61/src/apis/jobs.ts#L32)*

Fetch data from API.

**`memberof`** Jobs

**Returns:** *Promise‹[RawSearch](../interfaces/_types_customtypes_.rawsearch.md)›*

___

###  get

▸ **get**(): *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*

*Defined in [src/apis/jobs.ts:83](https://github.com/chronark/atlas/blob/f6d4b61/src/apis/jobs.ts#L83)*

Public getter method.

**`memberof`** Jobs

**Returns:** *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*

___

### `Private` transform

▸ **transform**(`rawSearch`: [RawSearch](../interfaces/_types_customtypes_.rawsearch.md)): *[Job](../interfaces/_types_customtypes_.job.md)[]*

*Defined in [src/apis/jobs.ts:50](https://github.com/chronark/atlas/blob/f6d4b61/src/apis/jobs.ts#L50)*

Clean the jobs and transform into a useful format.
This is only necessary because we are still loading from the old google optimized job API.

**`memberof`** Jobs

**Parameters:**

Name | Type |
------ | ------ |
`rawSearch` | [RawSearch](../interfaces/_types_customtypes_.rawsearch.md) |

**Returns:** *[Job](../interfaces/_types_customtypes_.job.md)[]*
