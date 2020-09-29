[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/jobLayer"](../modules/_lib_joblayer_.md) › [JobLayer](_lib_joblayer_.joblayer.md)

# Class: JobLayer

The Joblayer is responsible for displaying and animating as clusters.

TODO: Refactor to implement ol/Layer #AT-15.

## Hierarchy

* **JobLayer**

## Index

### Constructors

* [constructor](_lib_joblayer_.joblayer.md#constructor)

### Properties

* [animatedCluster](_lib_joblayer_.joblayer.md#animatedcluster)
* [areas](_lib_joblayer_.joblayer.md#areas)
* [cluster](_lib_joblayer_.joblayer.md#private-cluster)
* [select](_lib_joblayer_.joblayer.md#private-select)
* [style](_lib_joblayer_.joblayer.md#private-style)

### Methods

* [createAreaFeature](_lib_joblayer_.joblayer.md#private-createareafeature)
* [createFeatures](_lib_joblayer_.joblayer.md#private-createfeatures)
* [createSingleLoationFeature](_lib_joblayer_.joblayer.md#private-createsingleloationfeature)
* [setJobs](_lib_joblayer_.joblayer.md#setjobs)

## Constructors

###  constructor

\+ **new JobLayer**(`distance`: number): *[JobLayer](_lib_joblayer_.joblayer.md)*

*Defined in [src/lib/jobLayer.ts:26](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L26)*

Creates an instance of JobLayer.

**`memberof`** JobLayer

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`distance` | number | 40 |

**Returns:** *[JobLayer](_lib_joblayer_.joblayer.md)*

## Properties

###  animatedCluster

• **animatedCluster**: *VectorLayer*

*Defined in [src/lib/jobLayer.ts:23](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L23)*

___

###  areas

• **areas**: *VectorLayer*

*Defined in [src/lib/jobLayer.ts:24](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L24)*

___

### `Private` cluster

• **cluster**: *Cluster*

*Defined in [src/lib/jobLayer.ts:22](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L22)*

___

### `Private` select

• **select**: *Select*

*Defined in [src/lib/jobLayer.ts:26](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L26)*

___

### `Private` style

• **style**: *[JobStyle](_styles_jobs_.jobstyle.md)*

*Defined in [src/lib/jobLayer.ts:25](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L25)*

## Methods

### `Private` createAreaFeature

▸ **createAreaFeature**(`location`: [Area](../modules/_types_customtypes_.md#area)): *Feature*

*Defined in [src/lib/jobLayer.ts:121](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L121)*

Construct a feature from an area.

**`memberof`** JobLayer

**Parameters:**

Name | Type |
------ | ------ |
`location` | [Area](../modules/_types_customtypes_.md#area) |

**Returns:** *Feature*

___

### `Private` createFeatures

▸ **createFeatures**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *object*

*Defined in [src/lib/jobLayer.ts:79](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L79)*

Transform the jobs from the api specififaction into a useful format.

Splits jobs into areas and points to support both areas as well as single location jobs.

**`memberof`** JobLayer

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *object*

* **areas**: *Feature[]*

* **points**: *Feature[]*

___

### `Private` createSingleLoationFeature

▸ **createSingleLoationFeature**(`location`: [SingleLocation](../interfaces/_types_customtypes_.singlelocation.md)): *Feature*

*Defined in [src/lib/jobLayer.ts:107](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L107)*

Construct a feature from a single location.

**`memberof`** JobLayer

**Parameters:**

Name | Type |
------ | ------ |
`location` | [SingleLocation](../interfaces/_types_customtypes_.singlelocation.md) |

**Returns:** *Feature*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [src/lib/jobLayer.ts:59](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/jobLayer.ts#L59)*

Clears the current jobs and applies the new ones.

**`memberof`** JobLayer

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *void*
