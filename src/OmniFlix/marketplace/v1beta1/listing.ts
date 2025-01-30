/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
export interface Listing {
  id: string;
  nftId: string;
  denomId: string;
  price: Coin;
  owner: string;
  splitShares: WeightedAddress[];
}
export interface WeightedAddress {
  address: string;
  weight: string;
}
function createBaseListing(): Listing {
  return {
    id: "",
    nftId: "",
    denomId: "",
    price: Coin.fromPartial({}),
    owner: "",
    splitShares: [],
  };
}
export const Listing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Listing",
  encode(message: Listing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    for (const v of message.splitShares) {
      WeightedAddress.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Listing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.splitShares.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Listing {
    const obj = createBaseListing();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.price)) obj.price = Coin.fromJSON(object.price);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (Array.isArray(object?.splitShares))
      obj.splitShares = object.splitShares.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: Listing): JsonSafe<Listing> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.splitShares) {
      obj.splitShares = message.splitShares.map((e) => (e ? WeightedAddress.toJSON(e) : undefined));
    } else {
      obj.splitShares = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Listing>, I>>(object: I): Listing {
    const message = createBaseListing();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    }
    message.owner = object.owner ?? "";
    message.splitShares = object.splitShares?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: "",
  };
}
export const WeightedAddress = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedAddress {
    const obj = createBaseWeightedAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedAddress): JsonSafe<WeightedAddress> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WeightedAddress>, I>>(object: I): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};
