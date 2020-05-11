[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/util"](_lib_util_.md)

# Module: "lib/util"

## Index

### Functions

* [bboxToExtent](_lib_util_.md#bboxtoextent)
* [bound](_lib_util_.md#bound)
* [carthesianProduct](_lib_util_.md#carthesianproduct)
* [isSingleLocation](_lib_util_.md#issinglelocation)
* [removeFrom](_lib_util_.md#removefrom)
* [removeListFromList](_lib_util_.md#removelistfromlist)
* [unique](_lib_util_.md#unique)

## Functions

###  bboxToExtent

▸ **bboxToExtent**(`bbox`: [number, number, number, number]): *Extent*

*Defined in [lib/util.ts:70](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L70)*

Transforms a bounding box to an Extent in EPSG:3875 format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bbox` | [number, number, number, number] | A bounding box of a feature, layer or anything else. |

**Returns:** *Extent*

An Extent in EPSG-3875 format.

___

###  bound

▸ **bound**(`lower`: number, `value`: number, `upper`: number): *number*

*Defined in [lib/util.ts:41](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L41)*

Return value if it is between lower and upper, otherwise return the boundary value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lower` | number | The lower end of the boundary. |
`value` | number | Any value. |
`upper` | number | The upper end of the boundary. |

**Returns:** *number*

A number that is within lower and upper.

___

###  carthesianProduct

▸ **carthesianProduct**(`array`: any[][]): *any[][]*

*Defined in [lib/util.ts:93](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L93)*

Calcualte the carthesian product of n vectors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | any[][] | The vectors you want to multiply. |

**Returns:** *any[][]*

Carthesian product of all vectors.

___

###  isSingleLocation

▸ **isSingleLocation**(`location`: [Location](_types_customtypes_.md#location)): *location is SingleLocation*

*Defined in [lib/util.ts:80](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L80)*

Typeguard for SingleLocation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`location` | [Location](_types_customtypes_.md#location) | A location object that is either a SingleLocation or an Area. |

**Returns:** *location is SingleLocation*

True if location is a SingleLocation.

___

###  removeFrom

▸ **removeFrom**(`list`: any[], `entry`: any): *any[]*

*Defined in [lib/util.ts:13](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L13)*

Remove an item from a list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | any[] | A list of items. |
`entry` | any | A single item. |

**Returns:** *any[]*

List without entry.

___

###  removeListFromList

▸ **removeListFromList**(`list1`: any[], `list2`: any[]): *any[]*

*Defined in [lib/util.ts:26](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L26)*

Remove every item in list1 from list2.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list1` | any[] | A subset of list2. |
`list2` | any[] | A list of items. |

**Returns:** *any[]*

List2 without all items present in list1.

___

###  unique

▸ **unique**(`list`: any[]): *any[]*

*Defined in [lib/util.ts:51](https://github.com/chronark/atlas/blob/aadb4be/src/lib/util.ts#L51)*

Removes all duplicates from an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | any[] | An array with duplicates. |

**Returns:** *any[]*

A filtered array where all items are unique.
