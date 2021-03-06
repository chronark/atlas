[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/atlas"](../modules/_lib_atlas_.md) › [AtlasOpts](_lib_atlas_.atlasopts.md)

# Interface: AtlasOpts

Initial map configuration options.

**`interface`** AtlasOpts

## Hierarchy

* **AtlasOpts**

## Index

### Properties

* [extent](_lib_atlas_.atlasopts.md#optional-extent)
* [view](_lib_atlas_.atlasopts.md#optional-view)

## Properties

### `Optional` extent

• **extent**? : *Extent*

*Defined in [src/lib/atlas.ts:39](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/atlas.ts#L39)*

Provide this if you want to show a specifig area of the map on startup.
This will be overridden by view.

**`memberof`** AtlasOpts

___

### `Optional` view

• **view**? : *undefined | object*

*Defined in [src/lib/atlas.ts:46](https://github.com/chronark/atlas/blob/f6d4b61/src/lib/atlas.ts#L46)*

Initial latitude, longitude and zoom level. Default = { lat: 45, lon: 0, zoom: 2 }.
Providing this option will override extent.

**`memberof`** AtlasOpts
