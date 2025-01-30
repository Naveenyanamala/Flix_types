/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.onft.v1beta1";
export interface Params {
  denomCreationFee: Coin;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: Coin.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/OmniFlix.onft.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomCreationFee !== undefined) {
      Coin.encode(message.denomCreationFee, writer.uint32(10).fork()).ldelim();
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
          message.denomCreationFee = Coin.decode(reader, reader.uint32());
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
    if (isSet(object.denomCreationFee)) obj.denomCreationFee = Coin.fromJSON(object.denomCreationFee);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.denomCreationFee !== undefined &&
      (obj.denomCreationFee = message.denomCreationFee ? Coin.toJSON(message.denomCreationFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.denomCreationFee !== undefined && object.denomCreationFee !== null) {
      message.denomCreationFee = Coin.fromPartial(object.denomCreationFee);
    }
    return message;
  },
};
