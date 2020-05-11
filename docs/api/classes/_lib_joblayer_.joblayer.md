[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/jobLayer"](../modules/_lib_joblayer_.md) › [JobLayer](_lib_joblayer_.joblayer.md)

# Class: JobLayer

## Hierarchy

* **JobLayer**

## Index

### Constructors

* [constructor](_lib_joblayer_.joblayer.md#constructor)

### Properties

* [animatedCluster](_lib_joblayer_.joblayer.md#animatedcluster)
* [areas](_lib_joblayer_.joblayer.md#areas)
* [cluster](_lib_joblayer_.joblayer.md#private-cluster)
* [style](_lib_joblayer_.joblayer.md#private-style)

### Methods

* [createAreaFeature](_lib_joblayer_.joblayer.md#private-createareafeature)
* [createFeatures](_lib_joblayer_.joblayer.md#private-createfeatures)
* [createSingleLoationFeature](_lib_joblayer_.joblayer.md#private-createsingleloationfeature)
* [setJobs](_lib_joblayer_.joblayer.md#setjobs)

## Constructors

###  constructor

\+ **new JobLayer**(`distance`: number): *[JobLayer](_lib_joblayer_.joblayer.md)*

*Defined in [lib/jobLayer.ts:18](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`distance` | number | 40 |

**Returns:** *[JobLayer](_lib_joblayer_.joblayer.md)*

## Properties

###  animatedCluster

• **animatedCluster**: *VectorLayer*

*Defined in [lib/jobLayer.ts:16](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L16)*

___

###  areas

• **areas**: *VectorLayer*

*Defined in [lib/jobLayer.ts:17](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L17)*

___

### `Private` cluster

• **cluster**: *Cluster*

*Defined in [lib/jobLayer.ts:15](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L15)*

___

### `Private` style

• **style**: *[JobStyle](_styles_jobs_.jobstyle.md)*

*Defined in [lib/jobLayer.ts:18](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L18)*

## Methods

### `Private` createAreaFeature

▸ **createAreaFeature**(`location`: [Area](../modules/_types_customtypes_.md#area)): *Feature*

*Defined in [lib/jobLayer.ts:75](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`location` | [Area](../modules/_types_customtypes_.md#area) |

**Returns:** *Feature*

___

### `Private` createFeatures

▸ **createFeatures**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *object*

*Defined in [lib/jobLayer.ts:49](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L49)*

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

*Defined in [lib/jobLayer.ts:69](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`location` | [SingleLocation](../interfaces/_types_customtypes_.singlelocation.md) |

**Returns:** *Feature*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [lib/jobLayer.ts:39](https://github.com/chronark/atlas/blob/e6359aa/src/lib/jobLayer.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |

**Returns:** *void*
