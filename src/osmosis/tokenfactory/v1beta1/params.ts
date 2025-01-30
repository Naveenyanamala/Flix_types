/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  denomCreationFee: Coin[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
   * to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: bigint;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined,
  };
}
export const Params = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.denomCreationFee))
      obj.denomCreationFee = object.denomCreationFee.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.denomCreationGasConsume))
      obj.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.denomCreationFee = [];
    }
    if (message.denomCreationGasConsume !== undefined) {
      obj.denomCreationGasConsume = message.denomCreationGasConsume.toString();
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
      message.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
    }
    return message;
  },
};
