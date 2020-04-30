[Atlas documentation](../globals.md) › [Jobs](jobs.md)

# Class: Jobs

## Hierarchy

* **Jobs**

## Index

### Constructors

* [constructor](jobs.md#constructor)

### Properties

* [url](jobs.md#private-url)

### Methods

* [fetchRawJobs](jobs.md#private-fetchrawjobs)
* [get](jobs.md#get)
* [transform](jobs.md#private-transform)

## Constructors

###  constructor

\+ **new Jobs**(`url?`: undefined | string): *[Jobs](jobs.md)*

*Defined in [apis/jobs.ts:6](https://github.com/chronark/atlas/blob/11701e8/src/apis/jobs.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`url?` | undefined &#124; string |

**Returns:** *[Jobs](jobs.md)*

## Properties

### `Private` url

• **url**: *string* = "https://jobboerse.th-nuernberg.de/srv.php/en/Suche/offers"

*Defined in [apis/jobs.ts:6](https://github.com/chronark/atlas/blob/11701e8/src/apis/jobs.ts#L6)*

## Methods

### `Private` fetchRawJobs

▸ **fetchRawJobs**(): *Promise‹[RawSearch](../interfaces/rawsearch.md)›*

*Defined in [apis/jobs.ts:14](https://github.com/chronark/atlas/blob/11701e8/src/apis/jobs.ts#L14)*

**Returns:** *Promise‹[RawSearch](../interfaces/rawsearch.md)›*

___

###  get

▸ **get**(): *Promise‹[Job](../interfaces/job.md)[]›*

*Defined in [apis/jobs.ts:49](https://github.com/chronark/atlas/blob/11701e8/src/apis/jobs.ts#L49)*

**Returns:** *Promise‹[Job](../interfaces/job.md)[]›*

___

### `Private` transform

▸ **transform**(`rawSearch`: [RawSearch](../interfaces/rawsearch.md)): *[Job](../interfaces/job.md)[]*

*Defined in [apis/jobs.ts:23](https://github.com/chronark/atlas/blob/11701e8/src/apis/jobs.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`rawSearch` | [RawSearch](../interfaces/rawsearch.md) |

**Returns:** *[Job](../interfaces/job.md)[]*
