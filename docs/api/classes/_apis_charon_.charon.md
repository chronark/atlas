[Atlas documentation](../README.md) › [Globals](../globals.md) › ["apis/charon"](../modules/_apis_charon_.md) › [Charon](_apis_charon_.charon.md)

# Class: Charon

Handles all commucation to the charon backend service.

## Hierarchy

* **Charon**

## Index

### Constructors

* [constructor](_apis_charon_.charon.md#constructor)

### Properties

* [serverURL](_apis_charon_.charon.md#private-serverurl)
* [tileURL](_apis_charon_.charon.md#tileurl)

### Methods

* [forwardGeocoding](_apis_charon_.charon.md#forwardgeocoding)
* [getStyle](_apis_charon_.charon.md#getstyle)
* [reverseGeocoding](_apis_charon_.charon.md#reversegeocoding)

## Constructors

###  constructor

\+ **new Charon**(): *[Charon](_apis_charon_.charon.md)*

*Defined in [src/apis/charon.ts:11](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/charon.ts#L11)*

Creates an instance of Charon.

**`memberof`** Charon

**Returns:** *[Charon](_apis_charon_.charon.md)*

## Properties

### `Private` serverURL

• **serverURL**: *string*

*Defined in [src/apis/charon.ts:10](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/charon.ts#L10)*

___

###  tileURL

• **tileURL**: *string*

*Defined in [src/apis/charon.ts:11](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/charon.ts#L11)*

## Methods

###  forwardGeocoding

▸ **forwardGeocoding**(`query`: string): *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

*Defined in [src/apis/charon.ts:39](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/charon.ts#L39)*

Perform a forward geocoding request against the backend.

**`memberof`** Charon

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

Deserialized json or undefined if nothing was found.

___

###  getStyle

▸ **getStyle**(): *Promise‹Record‹string, any››*

*Defined in [src/apis/charon.ts:28](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/charon.ts#L28)*

Fetches the style from the API and deserialize it into json.

**`memberof`** Charon

**Returns:** *Promise‹Record‹string, any››*

___

###  reverseGeocoding

▸ **reverseGeocoding**(`lat`: number, `lon`: number): *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

*Defined in [src/apis/charon.ts:54](https://github.com/chronark/atlas/blob/3cdd76f/src/apis/charon.ts#L54)*

Perform a reverse geocoding request agaisnt the backend.

**`memberof`** Charon

**Parameters:**

Name | Type |
------ | ------ |
`lat` | number |
`lon` | number |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md) | undefined›*

Deserialized json or undefined if nothing was found.
