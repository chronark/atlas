[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/selectionLayer"](../modules/_lib_selectionlayer_.md) › [SelectionLayer](_lib_selectionlayer_.selectionlayer.md)

# Class: SelectionLayer

A layer to display one or multiple polygons on the map.

## Hierarchy

* VectorLayer

  ↳ **SelectionLayer**

## Index

### Constructors

* [constructor](_lib_selectionlayer_.selectionlayer.md#constructor)

### Methods

* [addEventListener](_lib_selectionlayer_.selectionlayer.md#addeventlistener)
* [addFeatureFromGeojson](_lib_selectionlayer_.selectionlayer.md#addfeaturefromgeojson)
* [addFeatures](_lib_selectionlayer_.selectionlayer.md#addfeatures)
* [changed](_lib_selectionlayer_.selectionlayer.md#changed)
* [createRenderer](_lib_selectionlayer_.selectionlayer.md#protected-createrenderer)
* [dispatchEvent](_lib_selectionlayer_.selectionlayer.md#dispatchevent)
* [dispose](_lib_selectionlayer_.selectionlayer.md#dispose)
* [disposeInternal](_lib_selectionlayer_.selectionlayer.md#protected-disposeinternal)
* [get](_lib_selectionlayer_.selectionlayer.md#get)
* [getClassName](_lib_selectionlayer_.selectionlayer.md#getclassname)
* [getDeclutter](_lib_selectionlayer_.selectionlayer.md#getdeclutter)
* [getExtent](_lib_selectionlayer_.selectionlayer.md#getextent)
* [getFeatures](_lib_selectionlayer_.selectionlayer.md#getfeatures)
* [getKeys](_lib_selectionlayer_.selectionlayer.md#getkeys)
* [getLayerState](_lib_selectionlayer_.selectionlayer.md#getlayerstate)
* [getLayerStatesArray](_lib_selectionlayer_.selectionlayer.md#getlayerstatesarray)
* [getLayersArray](_lib_selectionlayer_.selectionlayer.md#getlayersarray)
* [getListeners](_lib_selectionlayer_.selectionlayer.md#getlisteners)
* [getMaxResolution](_lib_selectionlayer_.selectionlayer.md#getmaxresolution)
* [getMaxZoom](_lib_selectionlayer_.selectionlayer.md#getmaxzoom)
* [getMinResolution](_lib_selectionlayer_.selectionlayer.md#getminresolution)
* [getMinZoom](_lib_selectionlayer_.selectionlayer.md#getminzoom)
* [getOpacity](_lib_selectionlayer_.selectionlayer.md#getopacity)
* [getProperties](_lib_selectionlayer_.selectionlayer.md#getproperties)
* [getRenderBuffer](_lib_selectionlayer_.selectionlayer.md#getrenderbuffer)
* [getRenderOrder](_lib_selectionlayer_.selectionlayer.md#getrenderorder)
* [getRenderer](_lib_selectionlayer_.selectionlayer.md#getrenderer)
* [getRevision](_lib_selectionlayer_.selectionlayer.md#getrevision)
* [getSource](_lib_selectionlayer_.selectionlayer.md#getsource)
* [getSourceState](_lib_selectionlayer_.selectionlayer.md#getsourcestate)
* [getStyle](_lib_selectionlayer_.selectionlayer.md#getstyle)
* [getStyleFunction](_lib_selectionlayer_.selectionlayer.md#getstylefunction)
* [getUpdateWhileAnimating](_lib_selectionlayer_.selectionlayer.md#getupdatewhileanimating)
* [getUpdateWhileInteracting](_lib_selectionlayer_.selectionlayer.md#getupdatewhileinteracting)
* [getVisible](_lib_selectionlayer_.selectionlayer.md#getvisible)
* [getZIndex](_lib_selectionlayer_.selectionlayer.md#getzindex)
* [hasListener](_lib_selectionlayer_.selectionlayer.md#haslistener)
* [hasRenderer](_lib_selectionlayer_.selectionlayer.md#hasrenderer)
* [notify](_lib_selectionlayer_.selectionlayer.md#notify)
* [on](_lib_selectionlayer_.selectionlayer.md#on)
* [once](_lib_selectionlayer_.selectionlayer.md#once)
* [removeEventListener](_lib_selectionlayer_.selectionlayer.md#removeeventlistener)
* [render](_lib_selectionlayer_.selectionlayer.md#render)
* [set](_lib_selectionlayer_.selectionlayer.md#set)
* [setExtent](_lib_selectionlayer_.selectionlayer.md#setextent)
* [setFeaturesFromGeometry](_lib_selectionlayer_.selectionlayer.md#setfeaturesfromgeometry)
* [setMap](_lib_selectionlayer_.selectionlayer.md#setmap)
* [setMaxResolution](_lib_selectionlayer_.selectionlayer.md#setmaxresolution)
* [setMaxZoom](_lib_selectionlayer_.selectionlayer.md#setmaxzoom)
* [setMinResolution](_lib_selectionlayer_.selectionlayer.md#setminresolution)
* [setMinZoom](_lib_selectionlayer_.selectionlayer.md#setminzoom)
* [setOpacity](_lib_selectionlayer_.selectionlayer.md#setopacity)
* [setProperties](_lib_selectionlayer_.selectionlayer.md#setproperties)
* [setRenderOrder](_lib_selectionlayer_.selectionlayer.md#setrenderorder)
* [setSource](_lib_selectionlayer_.selectionlayer.md#setsource)
* [setStyle](_lib_selectionlayer_.selectionlayer.md#setstyle)
* [setVisible](_lib_selectionlayer_.selectionlayer.md#setvisible)
* [setVisibleFeatures](_lib_selectionlayer_.selectionlayer.md#setvisiblefeatures)
* [setZIndex](_lib_selectionlayer_.selectionlayer.md#setzindex)
* [un](_lib_selectionlayer_.selectionlayer.md#un)
* [unset](_lib_selectionlayer_.selectionlayer.md#unset)
* [convertGeoJsonToGeometries](_lib_selectionlayer_.selectionlayer.md#static-private-convertgeojsontogeometries)

## Constructors

###  constructor

\+ **new SelectionLayer**(): *[SelectionLayer](_lib_selectionlayer_.selectionlayer.md)*

*Overrides void*

*Defined in [src/lib/selectionLayer.ts:16](https://github.com/chronark/atlas/blob/198ad53/src/lib/selectionLayer.ts#L16)*

Creates an instance of SelectionLayer.

**`memberof`** SelectionLayer

**Returns:** *[SelectionLayer](_lib_selectionlayer_.selectionlayer.md)*

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: Listener): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[addEventListener](_lib_selectionlayer_.selectionlayer.md#addeventlistener)*

Defined in node_modules/@types/ol/events/Target.d.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`listener` | Listener |

**Returns:** *void*

___

###  addFeatureFromGeojson

▸ **addFeatureFromGeojson**(`geojson`: Record‹string, any›): *Feature[]*

*Defined in [src/lib/selectionLayer.ts:106](https://github.com/chronark/atlas/blob/198ad53/src/lib/selectionLayer.ts#L106)*

Add a geojson object as feature to the layer.

**`memberof`** SelectionLayer

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | Record‹string, any› |

**Returns:** *Feature[]*

The feature to be used in a zoomTo call for example.

___

###  addFeatures

▸ **addFeatures**(`features`: Feature[]): *void*

*Defined in [src/lib/selectionLayer.ts:37](https://github.com/chronark/atlas/blob/198ad53/src/lib/selectionLayer.ts#L37)*

Add one or multiple features to the layer.

**`memberof`** SelectionLayer

**Parameters:**

Name | Type |
------ | ------ |
`features` | Feature[] |

**Returns:** *void*

___

###  changed

▸ **changed**(): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[changed](_lib_selectionlayer_.selectionlayer.md#changed)*

Defined in node_modules/@types/ol/Observable.d.ts:7

**Returns:** *void*

___

### `Protected` createRenderer

▸ **createRenderer**(): *LayerRenderer‹Layer‹Source››*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[createRenderer](_lib_selectionlayer_.selectionlayer.md#protected-createrenderer)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:13

**Returns:** *LayerRenderer‹Layer‹Source››*

___

###  dispatchEvent

▸ **dispatchEvent**(`event`: BaseEvent | string): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[dispatchEvent](_lib_selectionlayer_.selectionlayer.md#dispatchevent)*

Defined in node_modules/@types/ol/events/Target.d.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`event` | BaseEvent &#124; string |

**Returns:** *boolean*

___

###  dispose

▸ **dispose**(): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[dispose](_lib_selectionlayer_.selectionlayer.md#dispose)*

Defined in node_modules/@types/ol/Disposable.d.ts:4

**Returns:** *void*

___

### `Protected` disposeInternal

▸ **disposeInternal**(): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[disposeInternal](_lib_selectionlayer_.selectionlayer.md#protected-disposeinternal)*

Defined in node_modules/@types/ol/Disposable.d.ts:3

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *any*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[get](_lib_selectionlayer_.selectionlayer.md#get)*

Defined in node_modules/@types/ol/Object.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

###  getClassName

▸ **getClassName**(): *string*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getClassName](_lib_selectionlayer_.selectionlayer.md#getclassname)*

Defined in node_modules/@types/ol/layer/Base.d.ts:22

**Returns:** *string*

___

###  getDeclutter

▸ **getDeclutter**(): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getDeclutter](_lib_selectionlayer_.selectionlayer.md#getdeclutter)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:39

**Returns:** *boolean*

___

###  getExtent

▸ **getExtent**(): *Extent*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getExtent](_lib_selectionlayer_.selectionlayer.md#getextent)*

Defined in node_modules/@types/ol/layer/Base.d.ts:23

**Returns:** *Extent*

___

###  getFeatures

▸ **getFeatures**(`pixel`: Pixel): *Promise‹Feature‹Geometry›[]›*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getFeatures](_lib_selectionlayer_.selectionlayer.md#getfeatures)*

*Overrides void*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`pixel` | Pixel |

**Returns:** *Promise‹Feature‹Geometry›[]›*

___

###  getKeys

▸ **getKeys**(): *string[]*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getKeys](_lib_selectionlayer_.selectionlayer.md#getkeys)*

Defined in node_modules/@types/ol/Object.d.ts:8

**Returns:** *string[]*

___

###  getLayerState

▸ **getLayerState**(`opt_managed?`: undefined | false | true): *State*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getLayerState](_lib_selectionlayer_.selectionlayer.md#getlayerstate)*

Defined in node_modules/@types/ol/layer/Base.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`opt_managed?` | undefined &#124; false &#124; true |

**Returns:** *State*

___

###  getLayerStatesArray

▸ **getLayerStatesArray**(`opt_states?`: State[]): *State[]*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getLayerStatesArray](_lib_selectionlayer_.selectionlayer.md#getlayerstatesarray)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Layer.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`opt_states?` | State[] |

**Returns:** *State[]*

___

###  getLayersArray

▸ **getLayersArray**(`opt_array?`: Layer‹Source›[]): *Layer‹Source›[]*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getLayersArray](_lib_selectionlayer_.selectionlayer.md#getlayersarray)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Layer.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`opt_array?` | Layer‹Source›[] |

**Returns:** *Layer‹Source›[]*

___

###  getListeners

▸ **getListeners**(`type`: string): *Listener[]*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getListeners](_lib_selectionlayer_.selectionlayer.md#getlisteners)*

Defined in node_modules/@types/ol/events/Target.d.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *Listener[]*

___

###  getMaxResolution

▸ **getMaxResolution**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getMaxResolution](_lib_selectionlayer_.selectionlayer.md#getmaxresolution)*

Defined in node_modules/@types/ol/layer/Base.d.ts:27

**Returns:** *number*

___

###  getMaxZoom

▸ **getMaxZoom**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getMaxZoom](_lib_selectionlayer_.selectionlayer.md#getmaxzoom)*

Defined in node_modules/@types/ol/layer/Base.d.ts:28

**Returns:** *number*

___

###  getMinResolution

▸ **getMinResolution**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getMinResolution](_lib_selectionlayer_.selectionlayer.md#getminresolution)*

Defined in node_modules/@types/ol/layer/Base.d.ts:29

**Returns:** *number*

___

###  getMinZoom

▸ **getMinZoom**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getMinZoom](_lib_selectionlayer_.selectionlayer.md#getminzoom)*

Defined in node_modules/@types/ol/layer/Base.d.ts:30

**Returns:** *number*

___

###  getOpacity

▸ **getOpacity**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getOpacity](_lib_selectionlayer_.selectionlayer.md#getopacity)*

Defined in node_modules/@types/ol/layer/Base.d.ts:31

**Returns:** *number*

___

###  getProperties

▸ **getProperties**(): *object*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getProperties](_lib_selectionlayer_.selectionlayer.md#getproperties)*

Defined in node_modules/@types/ol/Object.d.ts:9

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getRenderBuffer

▸ **getRenderBuffer**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getRenderBuffer](_lib_selectionlayer_.selectionlayer.md#getrenderbuffer)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:41

**Returns:** *number*

___

###  getRenderOrder

▸ **getRenderOrder**(): *function*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getRenderOrder](_lib_selectionlayer_.selectionlayer.md#getrenderorder)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:42

**Returns:** *function*

▸ (`p0`: Feature‹Geometry›, `p1`: Feature‹Geometry›): *number*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | Feature‹Geometry› |
`p1` | Feature‹Geometry› |

___

###  getRenderer

▸ **getRenderer**(): *LayerRenderer‹Layer‹Source››*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getRenderer](_lib_selectionlayer_.selectionlayer.md#getrenderer)*

Defined in node_modules/@types/ol/layer/Layer.d.ts:50

**Returns:** *LayerRenderer‹Layer‹Source››*

___

###  getRevision

▸ **getRevision**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getRevision](_lib_selectionlayer_.selectionlayer.md#getrevision)*

Defined in node_modules/@types/ol/Observable.d.ts:8

**Returns:** *number*

___

###  getSource

▸ **getSource**(): *VectorSource*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getSource](_lib_selectionlayer_.selectionlayer.md#getsource)*

Defined in node_modules/@types/ol/layer/Layer.d.ts:51

**Returns:** *VectorSource*

___

###  getSourceState

▸ **getSourceState**(): *State_1*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getSourceState](_lib_selectionlayer_.selectionlayer.md#getsourcestate)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Layer.d.ts:52

**Returns:** *State_1*

___

###  getStyle

▸ **getStyle**(): *StyleLike*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getStyle](_lib_selectionlayer_.selectionlayer.md#getstyle)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:43

**Returns:** *StyleLike*

___

###  getStyleFunction

▸ **getStyleFunction**(): *StyleFunction*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getStyleFunction](_lib_selectionlayer_.selectionlayer.md#getstylefunction)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:44

**Returns:** *StyleFunction*

___

###  getUpdateWhileAnimating

▸ **getUpdateWhileAnimating**(): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getUpdateWhileAnimating](_lib_selectionlayer_.selectionlayer.md#getupdatewhileanimating)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:45

**Returns:** *boolean*

___

###  getUpdateWhileInteracting

▸ **getUpdateWhileInteracting**(): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getUpdateWhileInteracting](_lib_selectionlayer_.selectionlayer.md#getupdatewhileinteracting)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:46

**Returns:** *boolean*

___

###  getVisible

▸ **getVisible**(): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getVisible](_lib_selectionlayer_.selectionlayer.md#getvisible)*

Defined in node_modules/@types/ol/layer/Base.d.ts:33

**Returns:** *boolean*

___

###  getZIndex

▸ **getZIndex**(): *number*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[getZIndex](_lib_selectionlayer_.selectionlayer.md#getzindex)*

Defined in node_modules/@types/ol/layer/Base.d.ts:34

**Returns:** *number*

___

###  hasListener

▸ **hasListener**(`opt_type?`: undefined | string): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[hasListener](_lib_selectionlayer_.selectionlayer.md#haslistener)*

Defined in node_modules/@types/ol/events/Target.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`opt_type?` | undefined &#124; string |

**Returns:** *boolean*

___

###  hasRenderer

▸ **hasRenderer**(): *boolean*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[hasRenderer](_lib_selectionlayer_.selectionlayer.md#hasrenderer)*

Defined in node_modules/@types/ol/layer/Layer.d.ts:53

**Returns:** *boolean*

___

###  notify

▸ **notify**(`key`: string, `oldValue`: any): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[notify](_lib_selectionlayer_.selectionlayer.md#notify)*

Defined in node_modules/@types/ol/Object.d.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`oldValue` | any |

**Returns:** *void*

___

###  on

▸ **on**(`type`: string | string[], `listener`: ListenerFunction): *EventsKey | EventsKey[]*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; string[] |
`listener` | ListenerFunction |

**Returns:** *EventsKey | EventsKey[]*

▸ **on**(`type`: "change", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:17

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: BaseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | BaseEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:extent", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:20

**Parameters:**

▪ **type**: *"change:extent"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:maxResolution", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:23

**Parameters:**

▪ **type**: *"change:maxResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:maxZoom", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:26

**Parameters:**

▪ **type**: *"change:maxZoom"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:minResolution", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:29

**Parameters:**

▪ **type**: *"change:minResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:minZoom", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:32

**Parameters:**

▪ **type**: *"change:minZoom"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:opacity", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:35

**Parameters:**

▪ **type**: *"change:opacity"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:source", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:38

**Parameters:**

▪ **type**: *"change:source"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:visible", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:41

**Parameters:**

▪ **type**: *"change:visible"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:zIndex", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:44

**Parameters:**

▪ **type**: *"change:zIndex"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "error", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:47

**Parameters:**

▪ **type**: *"error"*

▪ **listener**: *function*

▸ (`evt`: BaseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | BaseEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "postrender", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:50

**Parameters:**

▪ **type**: *"postrender"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "prerender", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:53

**Parameters:**

▪ **type**: *"prerender"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "propertychange", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[on](_lib_selectionlayer_.selectionlayer.md#on)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:56

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

___

###  once

▸ **once**(`type`: string | string[], `listener`: function): *EventsKey | EventsKey[]*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:15

**Parameters:**

▪ **type**: *string | string[]*

▪ **listener**: *function*

▸ (`p0`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | any |

**Returns:** *EventsKey | EventsKey[]*

▸ **once**(`type`: "change", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:18

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: BaseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | BaseEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:extent", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:21

**Parameters:**

▪ **type**: *"change:extent"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:maxResolution", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:24

**Parameters:**

▪ **type**: *"change:maxResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:maxZoom", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:27

**Parameters:**

▪ **type**: *"change:maxZoom"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:minResolution", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:30

**Parameters:**

▪ **type**: *"change:minResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:minZoom", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:33

**Parameters:**

▪ **type**: *"change:minZoom"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:opacity", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:36

**Parameters:**

▪ **type**: *"change:opacity"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:source", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:39

**Parameters:**

▪ **type**: *"change:source"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:visible", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:42

**Parameters:**

▪ **type**: *"change:visible"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:zIndex", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:45

**Parameters:**

▪ **type**: *"change:zIndex"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "error", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:48

**Parameters:**

▪ **type**: *"error"*

▪ **listener**: *function*

▸ (`evt`: BaseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | BaseEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "postrender", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:51

**Parameters:**

▪ **type**: *"postrender"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "prerender", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:54

**Parameters:**

▪ **type**: *"prerender"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "propertychange", `listener`: function): *EventsKey*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[once](_lib_selectionlayer_.selectionlayer.md#once)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:57

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

___

###  removeEventListener

▸ **removeEventListener**(`type`: string, `listener`: Listener): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[removeEventListener](_lib_selectionlayer_.selectionlayer.md#removeeventlistener)*

Defined in node_modules/@types/ol/events/Target.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`listener` | Listener |

**Returns:** *void*

___

###  render

▸ **render**(`frameState`: FrameState, `target`: HTMLElement): *HTMLElement*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[render](_lib_selectionlayer_.selectionlayer.md#render)*

Defined in node_modules/@types/ol/layer/Layer.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`frameState` | FrameState |
`target` | HTMLElement |

**Returns:** *HTMLElement*

___

###  set

▸ **set**(`key`: string, `value`: any, `opt_silent?`: undefined | false | true): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[set](_lib_selectionlayer_.selectionlayer.md#set)*

Defined in node_modules/@types/ol/Object.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`opt_silent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  setExtent

▸ **setExtent**(`extent`: Extent | undefined): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setExtent](_lib_selectionlayer_.selectionlayer.md#setextent)*

Defined in node_modules/@types/ol/layer/Base.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent &#124; undefined |

**Returns:** *void*

___

###  setFeaturesFromGeometry

▸ **setFeaturesFromGeometry**(`geometry`: Geometry[]): *void*

*Defined in [src/lib/selectionLayer.ts:47](https://github.com/chronark/atlas/blob/198ad53/src/lib/selectionLayer.ts#L47)*

Transform a geometry object into features and add them to the layer.

**`memberof`** SelectionLayer

**Parameters:**

Name | Type |
------ | ------ |
`geometry` | Geometry[] |

**Returns:** *void*

___

###  setMap

▸ **setMap**(`map`: PluggableMap): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setMap](_lib_selectionlayer_.selectionlayer.md#setmap)*

Defined in node_modules/@types/ol/layer/Layer.d.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`map` | PluggableMap |

**Returns:** *void*

___

###  setMaxResolution

▸ **setMaxResolution**(`maxResolution`: number): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setMaxResolution](_lib_selectionlayer_.selectionlayer.md#setmaxresolution)*

Defined in node_modules/@types/ol/layer/Base.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`maxResolution` | number |

**Returns:** *void*

___

###  setMaxZoom

▸ **setMaxZoom**(`maxZoom`: number): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setMaxZoom](_lib_selectionlayer_.selectionlayer.md#setmaxzoom)*

Defined in node_modules/@types/ol/layer/Base.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`maxZoom` | number |

**Returns:** *void*

___

###  setMinResolution

▸ **setMinResolution**(`minResolution`: number): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setMinResolution](_lib_selectionlayer_.selectionlayer.md#setminresolution)*

Defined in node_modules/@types/ol/layer/Base.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`minResolution` | number |

**Returns:** *void*

___

###  setMinZoom

▸ **setMinZoom**(`minZoom`: number): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setMinZoom](_lib_selectionlayer_.selectionlayer.md#setminzoom)*

Defined in node_modules/@types/ol/layer/Base.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`minZoom` | number |

**Returns:** *void*

___

###  setOpacity

▸ **setOpacity**(`opacity`: number): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setOpacity](_lib_selectionlayer_.selectionlayer.md#setopacity)*

Defined in node_modules/@types/ol/layer/Base.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`opacity` | number |

**Returns:** *void*

___

###  setProperties

▸ **setProperties**(`values`: object, `opt_silent?`: undefined | false | true): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setProperties](_lib_selectionlayer_.selectionlayer.md#setproperties)*

Defined in node_modules/@types/ol/Object.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`values` | object |
`opt_silent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  setRenderOrder

▸ **setRenderOrder**(`renderOrder`: OrderFunction | null | undefined): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setRenderOrder](_lib_selectionlayer_.selectionlayer.md#setrenderorder)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`renderOrder` | OrderFunction &#124; null &#124; undefined |

**Returns:** *void*

___

###  setSource

▸ **setSource**(`source`: VectorSource): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setSource](_lib_selectionlayer_.selectionlayer.md#setsource)*

Defined in node_modules/@types/ol/layer/Layer.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`source` | VectorSource |

**Returns:** *void*

___

###  setStyle

▸ **setStyle**(`style`: StyleLike | null | undefined): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setStyle](_lib_selectionlayer_.selectionlayer.md#setstyle)*

Defined in node_modules/@types/ol/layer/BaseVector.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`style` | StyleLike &#124; null &#124; undefined |

**Returns:** *void*

___

###  setVisible

▸ **setVisible**(`visible`: boolean): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setVisible](_lib_selectionlayer_.selectionlayer.md#setvisible)*

Defined in node_modules/@types/ol/layer/Base.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`visible` | boolean |

**Returns:** *void*

___

###  setVisibleFeatures

▸ **setVisibleFeatures**(`geometry`: Geometry[]): *void*

*Defined in [src/lib/selectionLayer.ts:66](https://github.com/chronark/atlas/blob/198ad53/src/lib/selectionLayer.ts#L66)*

Make geometry visible to the user by applying a style.

This is required because if features would have an undefined style they are not clickable.. For some reason.

**`memberof`** SelectionLayer

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`geometry` | Geometry[] | All geometries that you want to show. Pass in an empty array to hide everything. |

**Returns:** *void*

___

###  setZIndex

▸ **setZIndex**(`zindex`: number): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[setZIndex](_lib_selectionlayer_.selectionlayer.md#setzindex)*

Defined in node_modules/@types/ol/layer/Base.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`zindex` | number |

**Returns:** *void*

___

###  un

▸ **un**(`type`: string | string[], `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:16

**Parameters:**

▪ **type**: *string | string[]*

▪ **listener**: *function*

▸ (`p0`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | any |

**Returns:** *void*

▸ **un**(`type`: "change", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:19

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: BaseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | BaseEvent |

**Returns:** *void*

▸ **un**(`type`: "change:extent", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:22

**Parameters:**

▪ **type**: *"change:extent"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:maxResolution", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:25

**Parameters:**

▪ **type**: *"change:maxResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:maxZoom", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:28

**Parameters:**

▪ **type**: *"change:maxZoom"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:minResolution", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:31

**Parameters:**

▪ **type**: *"change:minResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:minZoom", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:34

**Parameters:**

▪ **type**: *"change:minZoom"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:opacity", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:37

**Parameters:**

▪ **type**: *"change:opacity"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:source", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:40

**Parameters:**

▪ **type**: *"change:source"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:visible", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:43

**Parameters:**

▪ **type**: *"change:visible"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:zIndex", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:46

**Parameters:**

▪ **type**: *"change:zIndex"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "error", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:49

**Parameters:**

▪ **type**: *"error"*

▪ **listener**: *function*

▸ (`evt`: BaseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | BaseEvent |

**Returns:** *void*

▸ **un**(`type`: "postrender", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:52

**Parameters:**

▪ **type**: *"postrender"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *void*

▸ **un**(`type`: "prerender", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:55

**Parameters:**

▪ **type**: *"prerender"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *void*

▸ **un**(`type`: "propertychange", `listener`: function): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[un](_lib_selectionlayer_.selectionlayer.md#un)*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:58

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

___

###  unset

▸ **unset**(`key`: string, `opt_silent?`: undefined | false | true): *void*

*Inherited from [SelectionLayer](_lib_selectionlayer_.selectionlayer.md).[unset](_lib_selectionlayer_.selectionlayer.md#unset)*

Defined in node_modules/@types/ol/Object.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`opt_silent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

### `Static` `Private` convertGeoJsonToGeometries

▸ **convertGeoJsonToGeometries**(`geojson`: Record‹string, any›): *Geometry[]*

*Defined in [src/lib/selectionLayer.ts:92](https://github.com/chronark/atlas/blob/198ad53/src/lib/selectionLayer.ts#L92)*

Create a list of Features from a geojson object.

**`memberof`** SelectionLayer

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | Record‹string, any› |

**Returns:** *Geometry[]*
