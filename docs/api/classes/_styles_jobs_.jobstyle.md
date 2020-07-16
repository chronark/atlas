[Atlas documentation](../README.md) › [Globals](../globals.md) › ["styles/jobs"](../modules/_styles_jobs_.md) › [JobStyle](_styles_jobs_.jobstyle.md)

# Class: JobStyle

Create a style for job clusters based on their score and proximity to each other.

## Hierarchy

* **JobStyle**

## Index

### Constructors

* [constructor](_styles_jobs_.jobstyle.md#constructor)

### Properties

* [colorGradient](_styles_jobs_.jobstyle.md#private-colorgradient)

### Methods

* [areaStyle](_styles_jobs_.jobstyle.md#areastyle)
* [clusterStyle](_styles_jobs_.jobstyle.md#clusterstyle)
* [colorByScore](_styles_jobs_.jobstyle.md#private-colorbyscore)
* [getScore](_styles_jobs_.jobstyle.md#private-getscore)
* [maxScore](_styles_jobs_.jobstyle.md#private-maxscore)
* [polygonStyle](_styles_jobs_.jobstyle.md#private-polygonstyle)

## Constructors

###  constructor

\+ **new JobStyle**(`colorGradient`: [Color](_styles_color_.color.md)[]): *[JobStyle](_styles_jobs_.jobstyle.md)*

*Defined in [src/styles/jobs.ts:16](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L16)*

Creates an instance of JobStyle.

**`memberof`** JobStyle

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`colorGradient` | [Color](_styles_color_.color.md)[] | [
      new Color(112, 148, 194),
      new Color(103, 142, 191),
      new Color(93, 135, 188),
      new Color(84, 129, 186),
      new Color(47, 103, 174),
      new Color(75, 122, 183),
      new Color(65, 116, 180),
      new Color(56, 109, 177),
      new Color(37, 96, 171),
      new Color(28, 90, 168),
      new Color(19, 83, 166),
      new Color(9, 77, 163),
      new Color(0, 70, 160),
    ] |

**Returns:** *[JobStyle](_styles_jobs_.jobstyle.md)*

## Properties

### `Private` colorGradient

• **colorGradient**: *[Color](_styles_color_.color.md)[]*

*Defined in [src/styles/jobs.ts:16](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L16)*

## Methods

###  areaStyle

▸ **areaStyle**(`feature`: Feature): *Style*

*Defined in [src/styles/jobs.ts:160](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L160)*

Build the style for a job area.

**`memberof`** JobStyle

**Parameters:**

Name | Type |
------ | ------ |
`feature` | Feature |

**Returns:** *Style*

___

###  clusterStyle

▸ **clusterStyle**(`cluster`: Feature): *Style[]*

*Defined in [src/styles/jobs.ts:144](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L144)*

Build the style for a job cluster.

**`memberof`** JobStyle

**Parameters:**

Name | Type |
------ | ------ |
`cluster` | Feature |

**Returns:** *Style[]*

___

### `Private` colorByScore

▸ **colorByScore**(`score`: number, `minScore`: number): *[Color](_styles_color_.color.md)*

*Defined in [src/styles/jobs.ts:67](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L67)*

Choose a color from the colorGradient by score.

**`memberof`** JobStyle

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`score` | number | - |
`minScore` | number | 0.5 |

**Returns:** *[Color](_styles_color_.color.md)*

A single color from the colorGradient.

___

### `Private` getScore

▸ **getScore**(`feature`: Feature): *number*

*Defined in [src/styles/jobs.ts:181](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L181)*

Extract the score from a feature.

**`memberof`** JobStyle

**Parameters:**

Name | Type |
------ | ------ |
`feature` | Feature |

**Returns:** *number*

___

### `Private` maxScore

▸ **maxScore**(`features`: Feature[]): *number*

*Defined in [src/styles/jobs.ts:91](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L91)*

Calculate the maximum score from a cluster of jobs.

**`memberof`** JobStyle

**Parameters:**

Name | Type |
------ | ------ |
`features` | Feature[] |

**Returns:** *number*

The score of the best matching job.

___

### `Private` polygonStyle

▸ **polygonStyle**(`score`: number, `size`: number): *Style*

*Defined in [src/styles/jobs.ts:110](https://github.com/chronark/atlas/blob/a1ab160/src/styles/jobs.ts#L110)*

Create a regular polygon as icon to display a cluster.

**`memberof`** JobStyle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`score` | number | Determines the color for the cluster. |
`size` | number | The size of the polygon will scale with the number of jobs inside the cluster. |

**Returns:** *Style*
