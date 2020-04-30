[Atlas documentation](../globals.md) › [Charon](charon.md)

# Class: Charon

## Hierarchy

* **Charon**

## Index

### Constructors

* [constructor](charon.md#constructor)

### Properties

* [serverURL](charon.md#private-serverurl)

### Methods

* [forwardGeocoding](charon.md#forwardgeocoding)
* [getStyle](charon.md#getstyle)
* [getTileURL](charon.md#gettileurl)
* [reverseGeocoding](charon.md#reversegeocoding)

## Constructors

###  constructor

\+ **new Charon**(): *[Charon](charon.md)*

*Defined in [apis/charon.ts:5](https://github.com/chronark/atlas/blob/5df157b/src/apis/charon.ts#L5)*

**Returns:** *[Charon](charon.md)*

## Properties

### `Private` serverURL

• **serverURL**: *string*

*Defined in [apis/charon.ts:5](https://github.com/chronark/atlas/blob/5df157b/src/apis/charon.ts#L5)*

## Methods

###  forwardGeocoding

▸ **forwardGeocoding**(`query`: string): *Promise‹[GeocodingResponseObject](../interfaces/geocodingresponseobject.md) | undefined›*

*Defined in [apis/charon.ts:18](https://github.com/chronark/atlas/blob/5df157b/src/apis/charon.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/geocodingresponseobject.md) | undefined›*

___

###  getStyle

▸ **getStyle**(): *Promise‹Record‹string, any››*

*Defined in [apis/charon.ts:14](https://github.com/chronark/atlas/blob/5df157b/src/apis/charon.ts#L14)*

**Returns:** *Promise‹Record‹string, any››*

___

###  getTileURL

▸ **getTileURL**(): *string*

*Defined in [apis/charon.ts:10](https://github.com/chronark/atlas/blob/5df157b/src/apis/charon.ts#L10)*

**Returns:** *string*

___

###  reverseGeocoding

▸ **reverseGeocoding**(`lat`: number, `lon`: number): *Promise‹[GeocodingResponseObject](../interfaces/geocodingresponseobject.md) | undefined›*

*Defined in [apis/charon.ts:25](https://github.com/chronark/atlas/blob/5df157b/src/apis/charon.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`lat` | number |
`lon` | number |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/geocodingresponseobject.md) | undefined›*
