[Atlas documentation](../README.md) › [Globals](../globals.md) › ["lib/logger"](../modules/_lib_logger_.md) › [Logger](_lib_logger_.logger.md)

# Class: Logger

## Hierarchy

* **Logger**

## Index

### Constructors

* [constructor](_lib_logger_.logger.md#constructor)

### Methods

* [buildPayload](_lib_logger_.logger.md#private-buildpayload)
* [debug](_lib_logger_.logger.md#debug)
* [disableConsole](_lib_logger_.logger.md#private-disableconsole)
* [error](_lib_logger_.logger.md#error)
* [info](_lib_logger_.logger.md#info)
* [warn](_lib_logger_.logger.md#warn)

## Constructors

###  constructor

\+ **new Logger**(): *[Logger](_lib_logger_.logger.md)*

*Defined in [lib/logger.ts:6](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L6)*

**Returns:** *[Logger](_lib_logger_.logger.md)*

## Methods

### `Private` buildPayload

▸ **buildPayload**(`level`: string, `payload`: [LogObject](../modules/_types_customtypes_.md#logobject)): *[LogObject](../modules/_types_customtypes_.md#logobject)*

*Defined in [lib/logger.ts:30](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |
`payload` | [LogObject](../modules/_types_customtypes_.md#logobject) |

**Returns:** *[LogObject](../modules/_types_customtypes_.md#logobject)*

___

###  debug

▸ **debug**(`text`: string, `payload`: [LogObject](../modules/_types_customtypes_.md#logobject)): *void*

*Defined in [lib/logger.ts:39](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../modules/_types_customtypes_.md#logobject) | {} |

**Returns:** *void*

___

### `Private` disableConsole

▸ **disableConsole**(): *void*

*Defined in [lib/logger.ts:21](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L21)*

**Returns:** *void*

___

###  error

▸ **error**(`text`: string, `payload`: [LogObject](../modules/_types_customtypes_.md#logobject)): *void*

*Defined in [lib/logger.ts:54](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../modules/_types_customtypes_.md#logobject) | {} |

**Returns:** *void*

___

###  info

▸ **info**(`text`: string, `payload`: [LogObject](../modules/_types_customtypes_.md#logobject)): *void*

*Defined in [lib/logger.ts:44](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../modules/_types_customtypes_.md#logobject) | {} |

**Returns:** *void*

___

###  warn

▸ **warn**(`text`: string, `payload`: [LogObject](../modules/_types_customtypes_.md#logobject)): *void*

*Defined in [lib/logger.ts:49](https://github.com/chronark/atlas/blob/a253197/src/lib/logger.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../modules/_types_customtypes_.md#logobject) | {} |

**Returns:** *void*
