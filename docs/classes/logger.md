[Atlas documentation](../globals.md) › [Logger](logger.md)

# Class: Logger

## Hierarchy

* **Logger**

## Index

### Constructors

* [constructor](logger.md#constructor)

### Methods

* [buildPayload](logger.md#private-buildpayload)
* [debug](logger.md#debug)
* [disableConsole](logger.md#private-disableconsole)
* [error](logger.md#error)
* [info](logger.md#info)
* [warn](logger.md#warn)

## Constructors

###  constructor

\+ **new Logger**(): *[Logger](logger.md)*

*Defined in [lib/logger.ts:6](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L6)*

**Returns:** *[Logger](logger.md)*

## Methods

### `Private` buildPayload

▸ **buildPayload**(`level`: string, `payload`: [LogObject](../globals.md#logobject)): *[LogObject](../globals.md#logobject)*

*Defined in [lib/logger.ts:30](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |
`payload` | [LogObject](../globals.md#logobject) |

**Returns:** *[LogObject](../globals.md#logobject)*

___

###  debug

▸ **debug**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [lib/logger.ts:39](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) | {} |

**Returns:** *void*

___

### `Private` disableConsole

▸ **disableConsole**(): *void*

*Defined in [lib/logger.ts:21](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L21)*

**Returns:** *void*

___

###  error

▸ **error**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [lib/logger.ts:54](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) | {} |

**Returns:** *void*

___

###  info

▸ **info**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [lib/logger.ts:44](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) | {} |

**Returns:** *void*

___

###  warn

▸ **warn**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [lib/logger.ts:49](https://github.com/chronark/atlas/blob/88749ce/src/lib/logger.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) | {} |

**Returns:** *void*
