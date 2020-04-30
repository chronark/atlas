[Atlas documentation](../README.md) › [Globals](../globals.md) › [JobLayer](joblayer.md)

# Class: JobLayer

## Hierarchy

* **JobLayer**

## Index

### Constructors

* [constructor](joblayer.md#constructor)

### Properties

* [animatedCluster](joblayer.md#animatedcluster)
* [areas](joblayer.md#areas)
* [cluster](joblayer.md#private-cluster)
* [style](joblayer.md#private-style)

### Methods

* [createAreaFeature](joblayer.md#private-createareafeature)
* [createFeatures](joblayer.md#private-createfeatures)
* [createSingleLoationFeature](joblayer.md#private-createsingleloationfeature)
* [setJobs](joblayer.md#setjobs)

## Constructors

###  constructor

\+ **new JobLayer**(`distance`: number): *[JobLayer](joblayer.md)*

*Defined in [lib/jobLayer.ts:18](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`distance` | number | 40 |

**Returns:** *[JobLayer](joblayer.md)*

## Properties

###  animatedCluster

• **animatedCluster**: *VectorLayer*

*Defined in [lib/jobLayer.ts:16](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L16)*

___

###  areas

• **areas**: *VectorLayer*

*Defined in [lib/jobLayer.ts:17](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L17)*

___

### `Private` cluster

• **cluster**: *Cluster*

*Defined in [lib/jobLayer.ts:15](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L15)*

___

### `Private` style

• **style**: *[JobStyle](jobstyle.md)*

*Defined in [lib/jobLayer.ts:18](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L18)*

## Methods

### `Private` createAreaFeature

▸ **createAreaFeature**(`location`: [Area](../globals.md#area)): *Feature*

*Defined in [lib/jobLayer.ts:75](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`location` | [Area](../globals.md#area) |

**Returns:** *Feature*

___

### `Private` createFeatures

▸ **createFeatures**(`jobs`: [Job](../interfaces/job.md)[]): *object*

*Defined in [lib/jobLayer.ts:49](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/job.md)[] |

**Returns:** *object*

* **areas**: *Feature[]*

* **points**: *Feature[]*

___

### `Private` createSingleLoationFeature

▸ **createSingleLoationFeature**(`location`: [SingleLocation](../interfaces/singlelocation.md)): *Feature*

*Defined in [lib/jobLayer.ts:69](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`location` | [SingleLocation](../interfaces/singlelocation.md) |

**Returns:** *Feature*

___

###  setJobs

▸ **setJobs**(`jobs`: [Job](../interfaces/job.md)[]): *void*

*Defined in [lib/jobLayer.ts:39](https://github.com/chronark/atlas/blob/d12ab44/src/lib/jobLayer.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/job.md)[] |

**Returns:** *void*
