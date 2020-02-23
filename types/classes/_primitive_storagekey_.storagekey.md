[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/StorageKey"](../modules/_primitive_storagekey_.md) › [StorageKey](_primitive_storagekey_.storagekey.md)

# Class: StorageKey

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Hierarchy

  ↳ [Bytes](_primitive_bytes_.bytes.md)

  ↳ **StorageKey**

## Implements

* [IU8a](../interfaces/_types_interfaces_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_storagekey_.storagekey.md#constructor)

### Properties

* [registry](_primitive_storagekey_.storagekey.md#registry)

### Accessors

* [encodedLength](_primitive_storagekey_.storagekey.md#encodedlength)
* [hash](_primitive_storagekey_.storagekey.md#hash)
* [isEmpty](_primitive_storagekey_.storagekey.md#isempty)
* [length](_primitive_storagekey_.storagekey.md#length)
* [meta](_primitive_storagekey_.storagekey.md#meta)
* [method](_primitive_storagekey_.storagekey.md#method)
* [outputType](_primitive_storagekey_.storagekey.md#outputtype)
* [section](_primitive_storagekey_.storagekey.md#section)

### Methods

* [bitLength](_primitive_storagekey_.storagekey.md#bitlength)
* [eq](_primitive_storagekey_.storagekey.md#eq)
* [setMeta](_primitive_storagekey_.storagekey.md#setmeta)
* [setOutputType](_primitive_storagekey_.storagekey.md#setoutputtype)
* [subarray](_primitive_storagekey_.storagekey.md#subarray)
* [toHex](_primitive_storagekey_.storagekey.md#tohex)
* [toHuman](_primitive_storagekey_.storagekey.md#tohuman)
* [toJSON](_primitive_storagekey_.storagekey.md#tojson)
* [toRawType](_primitive_storagekey_.storagekey.md#torawtype)
* [toString](_primitive_storagekey_.storagekey.md#tostring)
* [toU8a](_primitive_storagekey_.storagekey.md#tou8a)
* [getMeta](_primitive_storagekey_.storagekey.md#static-getmeta)
* [getType](_primitive_storagekey_.storagekey.md#static-gettype)

## Constructors

###  constructor

\+ **new StorageKey**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [AnyU8a](../modules/_types_helpers_.md#anyu8a) | [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any], `override`: Partial‹StorageKeyExtra›): *[StorageKey](_primitive_storagekey_.storagekey.md)*

*Overrides [Bytes](_primitive_bytes_.bytes.md).[constructor](_primitive_bytes_.bytes.md#constructor)*

*Defined in [packages/types/src/primitive/StorageKey.ts:65](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L65)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value?` | [AnyU8a](../modules/_types_helpers_.md#anyu8a) &#124; [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] | - |
`override` | Partial‹StorageKeyExtra› | {} |

**Returns:** *[StorageKey](_primitive_storagekey_.storagekey.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md).[registry](../interfaces/_types_interfaces_.iu8a.md#registry)*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:30](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L30)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[encodedLength](_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:55](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/Bytes.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:48](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L48)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:55](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L55)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides [IU8a](../interfaces/_types_interfaces_.iu8a.md).[length](../interfaces/_types_interfaces_.iu8a.md#length)*

*Defined in [packages/types/src/codec/Raw.ts:62](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L62)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *StorageEntryMetadataLatest | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:143](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L143)*

**`description`** The metadata or `undefined` when not available

**Returns:** *StorageEntryMetadataLatest | undefined*

___

###  method

• **get method**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:150](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L150)*

**`description`** The key method or `undefined` when not specified

**Returns:** *string | undefined*

___

###  outputType

• **get outputType**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:157](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L157)*

**`description`** The output type, `null` when not available

**Returns:** *string | undefined*

___

###  section

• **get section**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:164](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L164)*

**`description`** The key section or `undefined` when not specified

**Returns:** *string | undefined*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:70](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L70)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:77](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L77)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  setMeta

▸ **setMeta**(`meta?`: StorageEntryMetadataLatest): *this*

*Defined in [packages/types/src/primitive/StorageKey.ts:171](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L171)*

**`description`** Sets the meta for this key

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | StorageEntryMetadataLatest |

**Returns:** *this*

___

###  setOutputType

▸ **setOutputType**(`outputType?`: undefined | string): *this*

*Defined in [packages/types/src/primitive/StorageKey.ts:180](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L180)*

**`description`** Sets the output type for this storage key

**Parameters:**

Name | Type |
------ | ------ |
`outputType?` | undefined &#124; string |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[subarray](_codec_raw_.raw.md#subarray)*

*Overrides [IU8a](../interfaces/_types_interfaces_.iu8a.md).[subarray](../interfaces/_types_interfaces_.iu8a.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:91](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L91)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toHex](_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:98](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L98)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [Raw](_codec_raw_.raw.md).[toHuman](_codec_raw_.raw.md#tohuman)*

*Defined in [packages/types/src/codec/Raw.ts:105](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L105)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:112](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L112)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toRawType](_primitive_bytes_.bytes.md#torawtype)*

*Overrides [Raw](_codec_raw_.raw.md).[toRawType](_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:62](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/Bytes.ts#L62)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides [IU8a](../interfaces/_types_interfaces_.iu8a.md).[toString](../interfaces/_types_interfaces_.iu8a.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:126](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/codec/Raw.ts#L126)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toU8a](_primitive_bytes_.bytes.md#tou8a)*

*Overrides [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:70](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/Bytes.ts#L70)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` getMeta

▸ **getMeta**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *StorageEntryMetadataLatest | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:110](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *StorageEntryMetadataLatest | undefined*

___

### `Static` getType

▸ **getType**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:124](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/primitive/StorageKey.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *string | undefined*