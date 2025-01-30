/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.itc.v1";
export interface Params {
  maxCampaignDuration: Duration;
  creationFee: Coin;
}
function createBaseParams(): Params {
  return {
    maxCampaignDuration: Duration.fromPartial({}),
    creationFee: Coin.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/OmniFlix.itc.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxCampaignDuration !== undefined) {
      Duration.encode(message.maxCampaignDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(18).fork()).ldelim();
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
          message.maxCampaignDuration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.creationFee = Coin.decode(reader, reader.uint32());
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
    if (isSet(object.maxCampaignDuration))
      obj.maxCampaignDuration = Duration.fromJSON(object.maxCampaignDuration);
    if (isSet(object.creationFee)) obj.creationFee = Coin.fromJSON(object.creationFee);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.maxCampaignDuration !== undefined &&
      (obj.maxCampaignDuration = message.maxCampaignDuration
        ? Duration.toJSON(message.maxCampaignDuration)
        : undefined);
    message.creationFee !== undefined &&
      (obj.creationFee = message.creationFee ? Coin.toJSON(message.creationFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.maxCampaignDuration !== undefined && object.maxCampaignDuration !== null) {
      message.maxCampaignDuration = Duration.fromPartial(object.maxCampaignDuration);
    }
    if (object.creationFee !== undefined && object.creationFee !== null) {
      message.creationFee = Coin.fromPartial(object.creationFee);
    }
    return message;
  },
};
