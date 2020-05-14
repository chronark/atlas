[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/map"](../modules/_lib_map_.md) › [MapOpts](_lib_map_.mapopts.md)

# Interface: MapOpts

## Hierarchy

* **MapOpts**

## Index

### Properties

* [extent](_lib_map_.mapopts.md#optional-extent)
* [view](_lib_map_.mapopts.md#optional-view)

## Properties

### `Optional` extent

• **extent**? : *Extent*

*Defined in [lib/map.ts:39](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L39)*

Provide this if you want to show a specifig area of the map on startup.
This will be overridden by view.

___

### `Optional` view

• **view**? : *[ViewOpts](_lib_map_.viewopts.md)*

*Defined in [lib/map.ts:44](https://github.com/chronark/atlas/blob/a253197/src/lib/map.ts#L44)*

Initial latitude, longitude and zoom level. Default = { lat: 45, lon: 0, zoom: 2 }
Providing this option will override extent.
