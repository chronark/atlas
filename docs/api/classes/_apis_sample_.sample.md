[Atlas documentation](../README.md) › [Globals](../globals.md) › ["apis/sample"](../modules/_apis_sample_.md) › [Sample](_apis_sample_.sample.md)

# Class: Sample

Sample generator for testing.

## Hierarchy

* **Sample**

## Index

### Methods

* [generateString](_apis_sample_.sample.md#private-generatestring)
* [getLocations](_apis_sample_.sample.md#private-getlocations)
* [jobs](_apis_sample_.sample.md#jobs)

## Methods

### `Private` generateString

▸ **generateString**(`length`: number): *string*

*Defined in [src/apis/sample.ts:70](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/sample.ts#L70)*

Create a random string with a specific length.

**`memberof`** Sample

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 4 |

**Returns:** *string*

___

### `Private` getLocations

▸ **getLocations**(`cities`: Record‹string, any›[], `locationCount`: number): *object[]*

*Defined in [src/apis/sample.ts:19](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/sample.ts#L19)*

Create a list of locations.

**`memberof`** Sample

**Parameters:**

Name | Type |
------ | ------ |
`cities` | Record‹string, any›[] |
`locationCount` | number |

**Returns:** *object[]*

___

###  jobs

▸ **jobs**(`count`: number): *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*

*Defined in [src/apis/sample.ts:38](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/sample.ts#L38)*

Create a list of jobs for testing.

**`memberof`** Sample

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*
