[Atlas documentation](../README.md) › [Globals](../globals.md) › ["types/customTypes"](_types_customtypes_.md)

# Module: "types/customTypes"

## Index

### Interfaces

* [ContextEntity](../interfaces/_types_customtypes_.contextentity.md)
* [FeaturesEntity](../interfaces/_types_customtypes_.featuresentity.md)
* [GeocodingResponseObject](../interfaces/_types_customtypes_.geocodingresponseobject.md)
* [Geometry](../interfaces/_types_customtypes_.geometry.md)
* [Job](../interfaces/_types_customtypes_.job.md)
* [Properties](../interfaces/_types_customtypes_.properties.md)
* [RawJob](../interfaces/_types_customtypes_.rawjob.md)
* [RawLocation](../interfaces/_types_customtypes_.rawlocation.md)
* [RawSearch](../interfaces/_types_customtypes_.rawsearch.md)
* [SingleLocation](../interfaces/_types_customtypes_.singlelocation.md)

### Type aliases

* [Area](_types_customtypes_.md#area)
* [Location](_types_customtypes_.md#location)
* [LogObject](_types_customtypes_.md#logobject)

## Type aliases

###  Area

Ƭ **Area**: *[FeaturesEntity](../interfaces/_types_customtypes_.featuresentity.md)[]*

*Defined in [src/types/customTypes.ts:30](https://github.com/chronark/atlas/blob/3cdd76f/src/types/customTypes.ts#L30)*

___

###  Location

Ƭ **Location**: *[Area](_types_customtypes_.md#area) | [SingleLocation](../interfaces/_types_customtypes_.singlelocation.md)*

*Defined in [src/types/customTypes.ts:46](https://github.com/chronark/atlas/blob/3cdd76f/src/types/customTypes.ts#L46)*

The location for a job.
Address has to be added later on.

___

###  LogObject

Ƭ **LogObject**: *Record‹string, any› | number*

*Defined in [src/types/customTypes.ts:91](https://github.com/chronark/atlas/blob/3cdd76f/src/types/customTypes.ts#L91)*
