[Atlas documentation](../globals.md) › ["apis/charon"](../modules/_apis_charon_.md) › [Charon](_apis_charon_.charon.md)

# Class: Charon

## Hierarchy

* **Charon**

## Index

### Constructors

* [constructor](_apis_charon_.charon.md#constructor)

### Properties

* [serverURL](_apis_charon_.charon.md#private-serverurl)

### Methods

* [forwardGeocoding](_apis_charon_.charon.md#forwardgeocoding)
* [getStyle](_apis_charon_.charon.md#getstyle)
* [getTileURL](_apis_charon_.charon.md#gettileurl)
* [reverseGeocoding](_apis_charon_.charon.md#reversegeocoding)

## Constructors

###  constructor

\+ **new Charon**(): *[Charon](_apis_charon_.charon.md)*

*Defined in [apis/charon.ts:5](https://github.com/chronark/atlas/blob/8711648/src/apis/charon.ts#L5)*

**Returns:** *[Charon](_apis_charon_.charon.md)*

## Properties

### `Private` serverURL

• **serverURL**: *string*

*Defined in [apis/charon.ts:5](https://github.com/chronark/atlas/blob/8711648/src/apis/charon.ts#L5)*

## Methods

###  forwardGeocoding

▸ **forwardGeocoding**(`query`: string): *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

*Defined in [apis/charon.ts:18](https://github.com/chronark/atlas/blob/8711648/src/apis/charon.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

___

###  getStyle

▸ **getStyle**(): *Promise‹Record‹string, any››*

*Defined in [apis/charon.ts:14](https://github.com/chronark/atlas/blob/8711648/src/apis/charon.ts#L14)*

**Returns:** *Promise‹Record‹string, any››*

___

###  getTileURL

▸ **getTileURL**(): *string*

*Defined in [apis/charon.ts:10](https://github.com/chronark/atlas/blob/8711648/src/apis/charon.ts#L10)*

**Returns:** *string*

___

###  reverseGeocoding

▸ **reverseGeocoding**(`lat`: number, `lon`: number): *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

*Defined in [apis/charon.ts:25](https://github.com/chronark/atlas/blob/8711648/src/apis/charon.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`lat` | number |
`lon` | number |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*
