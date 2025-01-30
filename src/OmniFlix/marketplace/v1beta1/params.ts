/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
export interface Params {
  saleCommission: string;
  distribution: Distribution;
  bidCloseDuration: Duration;
  maxAuctionDuration: Duration;
}
export interface Distribution {
  staking: string;
  communityPool: string;
}
function createBaseParams(): Params {
  return {
    saleCommission: "",
    distribution: Distribution.fromPartial({}),
    bidCloseDuration: Duration.fromPartial({}),
    maxAuctionDuration: Duration.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.saleCommission !== "") {
      writer.uint32(10).string(message.saleCommission);
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidCloseDuration !== undefined) {
      Duration.encode(message.bidCloseDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxAuctionDuration !== undefined) {
      Duration.encode(message.maxAuctionDuration, writer.uint32(34).fork()).ldelim();
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
          message.saleCommission = reader.string();
          break;
        case 2:
          message.distribution = Distribution.decode(reader, reader.uint32());
          break;
        case 3:
          message.bidCloseDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxAuctionDuration = Duration.decode(reader, reader.uint32());
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
    if (isSet(object.saleCommission)) obj.saleCommission = String(object.saleCommission);
    if (isSet(object.distribution)) obj.distribution = Distribution.fromJSON(object.distribution);
    if (isSet(object.bidCloseDuration)) obj.bidCloseDuration = Duration.fromJSON(object.bidCloseDuration);
    if (isSet(object.maxAuctionDuration))
      obj.maxAuctionDuration = Duration.fromJSON(object.maxAuctionDuration);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.saleCommission !== undefined && (obj.saleCommission = message.saleCommission);
    message.distribution !== undefined &&
      (obj.distribution = message.distribution ? Distribution.toJSON(message.distribution) : undefined);
    message.bidCloseDuration !== undefined &&
      (obj.bidCloseDuration = message.bidCloseDuration
        ? Duration.toJSON(message.bidCloseDuration)
        : undefined);
    message.maxAuctionDuration !== undefined &&
      (obj.maxAuctionDuration = message.maxAuctionDuration
        ? Duration.toJSON(message.maxAuctionDuration)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.saleCommission = object.saleCommission ?? "";
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromPartial(object.distribution);
    }
    if (object.bidCloseDuration !== undefined && object.bidCloseDuration !== null) {
      message.bidCloseDuration = Duration.fromPartial(object.bidCloseDuration);
    }
    if (object.maxAuctionDuration !== undefined && object.maxAuctionDuration !== null) {
      message.maxAuctionDuration = Duration.fromPartial(object.maxAuctionDuration);
    }
    return message;
  },
};
function createBaseDistribution(): Distribution {
  return {
    staking: "",
    communityPool: "",
  };
}
export const Distribution = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution {
    const obj = createBaseDistribution();
    if (isSet(object.staking)) obj.staking = String(object.staking);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: Distribution): JsonSafe<Distribution> {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Distribution>, I>>(object: I): Distribution {
    const message = createBaseDistribution();
    message.staking = object.staking ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
};
