[Atlas documentation](../README.md) › [Globals](../globals.md) › ["styles/color"](../modules/_styles_color_.md) › [Color](_styles_color_.color.md)

# Class: Color

A Helper class to convert colors from rgb(a) values to strings.

## Hierarchy

* **Color**

## Index

### Constructors

* [constructor](_styles_color_.color.md#constructor)

### Properties

* [a](_styles_color_.color.md#private-a)
* [b](_styles_color_.color.md#private-b)
* [g](_styles_color_.color.md#private-g)
* [r](_styles_color_.color.md#private-r)

### Methods

* [rgb](_styles_color_.color.md#rgb)
* [rgba](_styles_color_.color.md#rgba)

## Constructors

###  constructor

\+ **new Color**(`r`: number, `g`: number, `b`: number, `a?`: undefined | number): *[Color](_styles_color_.color.md)*

*Defined in [src/styles/color.ts:10](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L10)*

Creates an instance of Color.

**`memberof`** Color

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`r` | number | Red value between 0 and 255. This must be an integer. |
`g` | number | Green value between 0 and 255. This must be an integer. |
`b` | number | Blue value between 0 and 255. This must be an integer. |
`a?` | undefined &#124; number | - |

**Returns:** *[Color](_styles_color_.color.md)*

## Properties

### `Private` a

• **a**: *number*

*Defined in [src/styles/color.ts:10](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L10)*

___

### `Private` b

• **b**: *number*

*Defined in [src/styles/color.ts:9](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L9)*

___

### `Private` g

• **g**: *number*

*Defined in [src/styles/color.ts:8](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L8)*

___

### `Private` r

• **r**: *number*

*Defined in [src/styles/color.ts:7](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L7)*

## Methods

###  rgb

▸ **rgb**(): *string*

*Defined in [src/styles/color.ts:33](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L33)*

Turn a color into a string disregarding the alpha channel.

**`memberof`** Color

**Returns:** *string*

___

###  rgba

▸ **rgba**(`a?`: undefined | number): *string*

*Defined in [src/styles/color.ts:44](https://github.com/chronark/atlas/blob/a1ab160/src/styles/color.ts#L44)*

Turn a color into a string with an alpha channel.

**`memberof`** Color

**Parameters:**

Name | Type |
------ | ------ |
`a?` | undefined &#124; number |

**Returns:** *string*
