[Atlas documentation](../globals.md) › [Sample](sample.md)

# Class: Sample

## Hierarchy

* **Sample**

## Index

### Methods

* [generateString](sample.md#private-generatestring)
* [getLocations](sample.md#private-getlocations)
* [jobs](sample.md#jobs)

## Methods

### `Private` generateString

▸ **generateString**(`length`: number): *string*

*Defined in [apis/sample.ts:45](https://github.com/chronark/atlas/blob/5df157b/src/apis/sample.ts#L45)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 4 |

**Returns:** *string*

___

### `Private` getLocations

▸ **getLocations**(`cities`: Record‹string, any›[], `locationCount`: number): *object[]*

*Defined in [apis/sample.ts:6](https://github.com/chronark/atlas/blob/5df157b/src/apis/sample.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`cities` | Record‹string, any›[] |
`locationCount` | number |

**Returns:** *object[]*

___

###  jobs

▸ **jobs**(`count`: number): *Promise‹[Job](../interfaces/job.md)[]›*

*Defined in [apis/sample.ts:18](https://github.com/chronark/atlas/blob/5df157b/src/apis/sample.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Promise‹[Job](../interfaces/job.md)[]›*
