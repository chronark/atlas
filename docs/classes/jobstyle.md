[Atlas documentation](../globals.md) › [JobStyle](jobstyle.md)

# Class: JobStyle

## Hierarchy

* **JobStyle**

## Index

### Constructors

* [constructor](jobstyle.md#constructor)

### Properties

* [colorGradient](jobstyle.md#private-colorgradient)

### Methods

* [areaStyle](jobstyle.md#areastyle)
* [clusterStyle](jobstyle.md#clusterstyle)
* [colorByScore](jobstyle.md#private-colorbyscore)
* [getScore](jobstyle.md#private-getscore)
* [maxScore](jobstyle.md#private-maxscore)
* [polygonStyle](jobstyle.md#private-polygonstyle)
* [selectedStyle](jobstyle.md#private-selectedstyle)

## Constructors

###  constructor

\+ **new JobStyle**(`colorGradient`: [Color](color.md)[]): *[JobStyle](jobstyle.md)*

*Defined in [styles/jobs.ts:11](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L11)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`colorGradient` | [Color](color.md)[] | [
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

**Returns:** *[JobStyle](jobstyle.md)*

## Properties

### `Private` colorGradient

• **colorGradient**: *[Color](color.md)[]*

*Defined in [styles/jobs.ts:11](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L11)*

## Methods

###  areaStyle

▸ **areaStyle**(`feature`: Feature): *Style*

*Defined in [styles/jobs.ts:100](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | Feature |

**Returns:** *Style*

___

###  clusterStyle

▸ **clusterStyle**(`cluster`: Feature): *Style[]*

*Defined in [styles/jobs.ts:86](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`cluster` | Feature |

**Returns:** *Style[]*

___

### `Private` colorByScore

▸ **colorByScore**(`score`: number, `minScore`: number): *[Color](color.md)*

*Defined in [styles/jobs.ts:33](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`score` | number | - |
`minScore` | number | 0.5 |

**Returns:** *[Color](color.md)*

___

### `Private` getScore

▸ **getScore**(`feature`: Feature): *number*

*Defined in [styles/jobs.ts:113](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | Feature |

**Returns:** *number*

___

### `Private` maxScore

▸ **maxScore**(`features`: Feature[]): *number*

*Defined in [styles/jobs.ts:49](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`features` | Feature[] |

**Returns:** *number*

___

### `Private` polygonStyle

▸ **polygonStyle**(`score`: number, `scale`: number, `size`: number): *Style*

*Defined in [styles/jobs.ts:59](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`score` | number |
`scale` | number |
`size` | number |

**Returns:** *Style*

___

### `Private` selectedStyle

▸ **selectedStyle**(`cluster`: Feature): *Style[]*

*Defined in [styles/jobs.ts:124](https://github.com/chronark/atlas/blob/11701e8/src/styles/jobs.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`cluster` | Feature |

**Returns:** *Style[]*
