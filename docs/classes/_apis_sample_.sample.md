[Atlas documentation](../globals.md) › ["apis/sample"](../modules/_apis_sample_.md) › [Sample](_apis_sample_.sample.md)

# Class: Sample

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

*Defined in [apis/sample.ts:45](https://github.com/chronark/atlas/blob/e7527d8/src/apis/sample.ts#L45)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 4 |

**Returns:** *string*

___

### `Private` getLocations

▸ **getLocations**(`cities`: Record‹string, any›[], `locationCount`: number): *object[]*

*Defined in [apis/sample.ts:6](https://github.com/chronark/atlas/blob/e7527d8/src/apis/sample.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`cities` | Record‹string, any›[] |
`locationCount` | number |

**Returns:** *object[]*

___

###  jobs

▸ **jobs**(`count`: number): *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*

*Defined in [apis/sample.ts:18](https://github.com/chronark/atlas/blob/e7527d8/src/apis/sample.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Promise‹[Job](../interfaces/_types_customtypes_.job.md)[]›*
