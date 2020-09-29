[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/index"](_lib_index_.md)

# Module: "lib/index"

## Index

### Variables

* [atlas](_lib_index_.md#const-atlas)
* [searchField](_lib_index_.md#const-searchfield)
* [searchForm](_lib_index_.md#const-searchform)
* [startButton](_lib_index_.md#const-startbutton)
* [stopButton](_lib_index_.md#const-stopbutton)

### Functions

* [handleClick](_lib_index_.md#const-handleclick)
* [showJobs](_lib_index_.md#const-showjobs)

## Variables

### `Const` atlas

• **atlas**: *[Atlas](../classes/_lib_atlas_.atlas.md)‹›* = new Atlas("map-container")

*Defined in [src/lib/index.ts:67](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L67)*

___

### `Const` searchField

• **searchField**: *HTMLInputElement* = document.getElementById("searchField") as HTMLInputElement

*Defined in [src/lib/index.ts:81](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L81)*

___

### `Const` searchForm

• **searchForm**: *null | HTMLElement* = document.getElementById("searchForm")

*Defined in [src/lib/index.ts:82](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L82)*

___

### `Const` startButton

• **startButton**: *null | HTMLElement* = document.getElementById("start")

*Defined in [src/lib/index.ts:113](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L113)*

___

### `Const` stopButton

• **stopButton**: *null | HTMLElement* = document.getElementById("stop")

*Defined in [src/lib/index.ts:114](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L114)*

## Functions

### `Const` handleClick

▸ **handleClick**(`atlas`: [Atlas](../classes/_lib_atlas_.atlas.md), `jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [src/lib/index.ts:45](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L45)*

Gets called when the user clicks on a cluster.

Depending on our test setup we either zoom in and display jobs only if we cannot zoom in any further.
Or we zoom in and show always.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`atlas` | [Atlas](../classes/_lib_atlas_.atlas.md) | - |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] |   |

**Returns:** *void*

___

### `Const` showJobs

▸ **showJobs**(`jobs`: [Job](../interfaces/_types_customtypes_.job.md)[]): *void*

*Defined in [src/lib/index.ts:15](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/index.ts#L15)*

Displays a list of jobs under the map.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jobs` | [Job](../interfaces/_types_customtypes_.job.md)[] | The jobs the user clicked on.  |

**Returns:** *void*
