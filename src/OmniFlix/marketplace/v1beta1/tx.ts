/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress } from "./listing";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "./params";
import { AuctionListing } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
export interface MsgListNFT {
  id: string;
  nftId: string;
  denomId: string;
  price: Coin;
  owner: string;
  splitShares: WeightedAddress[];
}
export interface MsgListNFTResponse {}
export interface MsgEditListing {
  id: string;
  price: Coin;
  owner: string;
}
export interface MsgEditListingResponse {}
export interface MsgDeListNFT {
  id: string;
  owner: string;
}
export interface MsgDeListNFTResponse {}
export interface MsgBuyNFT {
  id: string;
  price: Coin;
  buyer: string;
}
export interface MsgBuyNFTResponse {}
export interface MsgCreateAuction {
  nftId: string;
  denomId: string;
  startTime: Timestamp;
  startPrice: Coin;
  duration?: Duration;
  incrementPercentage: string;
  whitelistAccounts: string[];
  splitShares: WeightedAddress[];
  owner: string;
}
export interface MsgCreateAuctionResponse {
  auction?: AuctionListing;
}
export interface MsgCancelAuction {
  auctionId: bigint;
  owner: string;
}
export interface MsgCancelAuctionResponse {}
export interface MsgPlaceBid {
  auctionId: bigint;
  amount: Coin;
  bidder: string;
}
export interface MsgPlaceBidResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/marketplace parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgListNFT(): MsgListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    price: Coin.fromPartial({}),
    owner: "",
    splitShares: [],
  };
}
export const MsgListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
  encode(message: MsgListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgListNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListNFT();
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
  fromJSON(object: any): MsgListNFT {
    const obj = createBaseMsgListNFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.price)) obj.price = Coin.fromJSON(object.price);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (Array.isArray(object?.splitShares))
      obj.splitShares = object.splitShares.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgListNFT): JsonSafe<MsgListNFT> {
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
  fromPartial<I extends Exact<DeepPartial<MsgListNFT>, I>>(object: I): MsgListNFT {
    const message = createBaseMsgListNFT();
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
function createBaseMsgListNFTResponse(): MsgListNFTResponse {
  return {};
}
export const MsgListNFTResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse",
  encode(_: MsgListNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgListNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgListNFTResponse {
    const obj = createBaseMsgListNFTResponse();
    return obj;
  },
  toJSON(_: MsgListNFTResponse): JsonSafe<MsgListNFTResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgListNFTResponse>, I>>(_: I): MsgListNFTResponse {
    const message = createBaseMsgListNFTResponse();
    return message;
  },
};
function createBaseMsgEditListing(): MsgEditListing {
  return {
    id: "",
    price: Coin.fromPartial({}),
    owner: "",
  };
}
export const MsgEditListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
  encode(message: MsgEditListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEditListing {
    const obj = createBaseMsgEditListing();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.price)) obj.price = Coin.fromJSON(object.price);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgEditListing): JsonSafe<MsgEditListing> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditListing>, I>>(object: I): MsgEditListing {
    const message = createBaseMsgEditListing();
    message.id = object.id ?? "";
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgEditListingResponse(): MsgEditListingResponse {
  return {};
}
export const MsgEditListingResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse",
  encode(_: MsgEditListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgEditListingResponse {
    const obj = createBaseMsgEditListingResponse();
    return obj;
  },
  toJSON(_: MsgEditListingResponse): JsonSafe<MsgEditListingResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditListingResponse>, I>>(_: I): MsgEditListingResponse {
    const message = createBaseMsgEditListingResponse();
    return message;
  },
};
function createBaseMsgDeListNFT(): MsgDeListNFT {
  return {
    id: "",
    owner: "",
  };
}
export const MsgDeListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
  encode(message: MsgDeListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeListNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeListNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeListNFT {
    const obj = createBaseMsgDeListNFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgDeListNFT): JsonSafe<MsgDeListNFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeListNFT>, I>>(object: I): MsgDeListNFT {
    const message = createBaseMsgDeListNFT();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgDeListNFTResponse(): MsgDeListNFTResponse {
  return {};
}
export const MsgDeListNFTResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse",
  encode(_: MsgDeListNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeListNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeListNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeListNFTResponse {
    const obj = createBaseMsgDeListNFTResponse();
    return obj;
  },
  toJSON(_: MsgDeListNFTResponse): JsonSafe<MsgDeListNFTResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeListNFTResponse>, I>>(_: I): MsgDeListNFTResponse {
    const message = createBaseMsgDeListNFTResponse();
    return message;
  },
};
function createBaseMsgBuyNFT(): MsgBuyNFT {
  return {
    id: "",
    price: Coin.fromPartial({}),
    buyer: "",
  };
}
export const MsgBuyNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
  encode(message: MsgBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBuyNFT {
    const obj = createBaseMsgBuyNFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.price)) obj.price = Coin.fromJSON(object.price);
    if (isSet(object.buyer)) obj.buyer = String(object.buyer);
    return obj;
  },
  toJSON(message: MsgBuyNFT): JsonSafe<MsgBuyNFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBuyNFT>, I>>(object: I): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    message.id = object.id ?? "";
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    }
    message.buyer = object.buyer ?? "";
    return message;
  },
};
function createBaseMsgBuyNFTResponse(): MsgBuyNFTResponse {
  return {};
}
export const MsgBuyNFTResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse",
  encode(_: MsgBuyNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBuyNFTResponse {
    const obj = createBaseMsgBuyNFTResponse();
    return obj;
  },
  toJSON(_: MsgBuyNFTResponse): JsonSafe<MsgBuyNFTResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBuyNFTResponse>, I>>(_: I): MsgBuyNFTResponse {
    const message = createBaseMsgBuyNFTResponse();
    return message;
  },
};
function createBaseMsgCreateAuction(): MsgCreateAuction {
  return {
    nftId: "",
    denomId: "",
    startTime: Timestamp.fromPartial({}),
    startPrice: Coin.fromPartial({}),
    duration: undefined,
    incrementPercentage: "",
    whitelistAccounts: [],
    splitShares: [],
    owner: "",
  };
}
export const MsgCreateAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
  encode(message: MsgCreateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.startPrice !== undefined) {
      Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (message.incrementPercentage !== "") {
      writer.uint32(50).string(message.incrementPercentage);
    }
    for (const v of message.whitelistAccounts) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.splitShares) {
      WeightedAddress.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.startPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.incrementPercentage = reader.string();
          break;
        case 7:
          message.whitelistAccounts.push(reader.string());
          break;
        case 8:
          message.splitShares.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 9:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateAuction {
    const obj = createBaseMsgCreateAuction();
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    if (isSet(object.startPrice)) obj.startPrice = Coin.fromJSON(object.startPrice);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.incrementPercentage)) obj.incrementPercentage = String(object.incrementPercentage);
    if (Array.isArray(object?.whitelistAccounts))
      obj.whitelistAccounts = object.whitelistAccounts.map((e: any) => String(e));
    if (Array.isArray(object?.splitShares))
      obj.splitShares = object.splitShares.map((e: any) => WeightedAddress.fromJSON(e));
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgCreateAuction): JsonSafe<MsgCreateAuction> {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.startPrice !== undefined &&
      (obj.startPrice = message.startPrice ? Coin.toJSON(message.startPrice) : undefined);
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.incrementPercentage !== undefined && (obj.incrementPercentage = message.incrementPercentage);
    if (message.whitelistAccounts) {
      obj.whitelistAccounts = message.whitelistAccounts.map((e) => e);
    } else {
      obj.whitelistAccounts = [];
    }
    if (message.splitShares) {
      obj.splitShares = message.splitShares.map((e) => (e ? WeightedAddress.toJSON(e) : undefined));
    } else {
      obj.splitShares = [];
    }
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateAuction>, I>>(object: I): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.startPrice !== undefined && object.startPrice !== null) {
      message.startPrice = Coin.fromPartial(object.startPrice);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.incrementPercentage = object.incrementPercentage ?? "";
    message.whitelistAccounts = object.whitelistAccounts?.map((e) => e) || [];
    message.splitShares = object.splitShares?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgCreateAuctionResponse(): MsgCreateAuctionResponse {
  return {
    auction: undefined,
  };
}
export const MsgCreateAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse",
  encode(message: MsgCreateAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = AuctionListing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateAuctionResponse {
    const obj = createBaseMsgCreateAuctionResponse();
    if (isSet(object.auction)) obj.auction = AuctionListing.fromJSON(object.auction);
    return obj;
  },
  toJSON(message: MsgCreateAuctionResponse): JsonSafe<MsgCreateAuctionResponse> {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction ? AuctionListing.toJSON(message.auction) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateAuctionResponse>, I>>(
    object: I,
  ): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = AuctionListing.fromPartial(object.auction);
    }
    return message;
  },
};
function createBaseMsgCancelAuction(): MsgCancelAuction {
  return {
    auctionId: BigInt(0),
    owner: "",
  };
}
export const MsgCancelAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
  encode(message: MsgCancelAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelAuction {
    const obj = createBaseMsgCancelAuction();
    if (isSet(object.auctionId)) obj.auctionId = BigInt(object.auctionId.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgCancelAuction): JsonSafe<MsgCancelAuction> {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelAuction>, I>>(object: I): MsgCancelAuction {
    const message = createBaseMsgCancelAuction();
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = BigInt(object.auctionId.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgCancelAuctionResponse(): MsgCancelAuctionResponse {
  return {};
}
export const MsgCancelAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse",
  encode(_: MsgCancelAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCancelAuctionResponse {
    const obj = createBaseMsgCancelAuctionResponse();
    return obj;
  },
  toJSON(_: MsgCancelAuctionResponse): JsonSafe<MsgCancelAuctionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelAuctionResponse>, I>>(_: I): MsgCancelAuctionResponse {
    const message = createBaseMsgCancelAuctionResponse();
    return message;
  },
};
function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    auctionId: BigInt(0),
    amount: Coin.fromPartial({}),
    bidder: "",
  };
}
export const MsgPlaceBid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
  encode(message: MsgPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.bidder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPlaceBid {
    const obj = createBaseMsgPlaceBid();
    if (isSet(object.auctionId)) obj.auctionId = BigInt(object.auctionId.toString());
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.bidder)) obj.bidder = String(object.bidder);
    return obj;
  },
  toJSON(message: MsgPlaceBid): JsonSafe<MsgPlaceBid> {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlaceBid>, I>>(object: I): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = BigInt(object.auctionId.toString());
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.bidder = object.bidder ?? "";
    return message;
  },
};
function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}
export const MsgPlaceBidResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse",
  encode(_: MsgPlaceBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgPlaceBidResponse {
    const obj = createBaseMsgPlaceBidResponse();
    return obj;
  },
  toJSON(_: MsgPlaceBidResponse): JsonSafe<MsgPlaceBidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlaceBidResponse>, I>>(_: I): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
export interface Msg {
  ListNFT(request: MsgListNFT): Promise<MsgListNFTResponse>;
  EditListing(request: MsgEditListing): Promise<MsgEditListingResponse>;
  DeListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse>;
  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  CancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/marketplace module
   * parameters. The authority is hard-coded to the x/marketplace module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListNFT = this.ListNFT.bind(this);
    this.EditListing = this.EditListing.bind(this);
    this.DeListNFT = this.DeListNFT.bind(this);
    this.BuyNFT = this.BuyNFT.bind(this);
    this.CreateAuction = this.CreateAuction.bind(this);
    this.CancelAuction = this.CancelAuction.bind(this);
    this.PlaceBid = this.PlaceBid.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  ListNFT(request: MsgListNFT): Promise<MsgListNFTResponse> {
    const data = MsgListNFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "ListNFT", data);
    return promise.then((data) => MsgListNFTResponse.decode(new BinaryReader(data)));
  }
  EditListing(request: MsgEditListing): Promise<MsgEditListingResponse> {
    const data = MsgEditListing.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "EditListing", data);
    return promise.then((data) => MsgEditListingResponse.decode(new BinaryReader(data)));
  }
  DeListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse> {
    const data = MsgDeListNFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "DeListNFT", data);
    return promise.then((data) => MsgDeListNFTResponse.decode(new BinaryReader(data)));
  }
  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse> {
    const data = MsgBuyNFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "BuyNFT", data);
    return promise.then((data) => MsgBuyNFTResponse.decode(new BinaryReader(data)));
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "CreateAuction", data);
    return promise.then((data) => MsgCreateAuctionResponse.decode(new BinaryReader(data)));
  }
  CancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse> {
    const data = MsgCancelAuction.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "CancelAuction", data);
    return promise.then((data) => MsgCancelAuctionResponse.decode(new BinaryReader(data)));
  }
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "PlaceBid", data);
    return promise.then((data) => MsgPlaceBidResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
