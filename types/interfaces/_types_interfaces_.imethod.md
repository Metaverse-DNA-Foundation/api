[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [IMethod](_types_interfaces_.imethod.md)

# Interface: IMethod

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **IMethod**

  ↳ [IExtrinsic](_types_extrinsic_.iextrinsic.md)

## Implemented by

* [Call](../classes/_generic_call_.call.md)

## Index

### Properties

* [args](_types_interfaces_.imethod.md#args)
* [argsDef](_types_interfaces_.imethod.md#argsdef)
* [callIndex](_types_interfaces_.imethod.md#callindex)
* [data](_types_interfaces_.imethod.md#data)
* [encodedLength](_types_interfaces_.imethod.md#encodedlength)
* [hasOrigin](_types_interfaces_.imethod.md#hasorigin)
* [hash](_types_interfaces_.imethod.md#hash)
* [isEmpty](_types_interfaces_.imethod.md#isempty)
* [meta](_types_interfaces_.imethod.md#meta)
* [registry](_types_interfaces_.imethod.md#registry)

### Methods

* [eq](_types_interfaces_.imethod.md#eq)
* [toHex](_types_interfaces_.imethod.md#tohex)
* [toHuman](_types_interfaces_.imethod.md#tohuman)
* [toJSON](_types_interfaces_.imethod.md#tojson)
* [toRawType](_types_interfaces_.imethod.md#torawtype)
* [toString](_types_interfaces_.imethod.md#tostring)
* [toU8a](_types_interfaces_.imethod.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_codec_.codec.md)[]*

*Defined in [packages/types/src/types/interfaces.ts:28](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L28)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_codec_.md#argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:29](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L29)*

___

###  callIndex

• **callIndex**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L30)*

___

###  data

• **data**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L31)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:40](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Defined in [packages/types/src/types/interfaces.ts:33](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L33)*

___

###  hash

• **hash**: *Hash*

*Overrides [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/interfaces.ts:32](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L32)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:50](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L50)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Defined in [packages/types/src/types/interfaces.ts:34](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/interfaces.ts#L34)*

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:55](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L55)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:60](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:65](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHuman](_codec_compact_.compactencodable.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:70](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L70)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toJSON](_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L75)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:80](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L80)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:85](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L85)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:91](https://github.com/polkadot-js/api/blob/443706a6e/packages/types/src/types/codec.ts#L91)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*