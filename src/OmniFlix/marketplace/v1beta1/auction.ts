/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { WeightedAddress } from "./listing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
export enum AuctionStatus {
  AUCTION_STATUS_UNSPECIFIED = 0,
  AUCTION_STATUS_INACTIVE = 1,
  AUCTION_STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}
export function auctionStatusFromJSON(object: any): AuctionStatus {
  switch (object) {
    case 0:
    case "AUCTION_STATUS_UNSPECIFIED":
      return AuctionStatus.AUCTION_STATUS_UNSPECIFIED;
    case 1:
    case "AUCTION_STATUS_INACTIVE":
      return AuctionStatus.AUCTION_STATUS_INACTIVE;
    case 2:
    case "AUCTION_STATUS_ACTIVE":
      return AuctionStatus.AUCTION_STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionStatus.UNRECOGNIZED;
  }
}
export function auctionStatusToJSON(object: AuctionStatus): string {
  switch (object) {
    case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
      return "AUCTION_STATUS_UNSPECIFIED";
    case AuctionStatus.AUCTION_STATUS_INACTIVE:
      return "AUCTION_STATUS_INACTIVE";
    case AuctionStatus.AUCTION_STATUS_ACTIVE:
      return "AUCTION_STATUS_ACTIVE";
    case AuctionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface AuctionListing {
  id: bigint;
  nftId: string;
  denomId: string;
  startPrice: Coin;
  startTime: Timestamp;
  endTime?: Timestamp;
  owner: string;
  incrementPercentage: string;
  whitelistAccounts: string[];
  splitShares: WeightedAddress[];
}
export interface Bid {
  auctionId: bigint;
  bidder: string;
  amount: Coin;
  time: Timestamp;
}
function createBaseAuctionListing(): AuctionListing {
  return {
    id: BigInt(0),
    nftId: "",
    denomId: "",
    startPrice: Coin.fromPartial({}),
    startTime: Timestamp.fromPartial({}),
    endTime: undefined,
    owner: "",
    incrementPercentage: "",
    whitelistAccounts: [],
    splitShares: [],
  };
}
export const AuctionListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing",
  encode(message: AuctionListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.startPrice !== undefined) {
      Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    if (message.incrementPercentage !== "") {
      writer.uint32(66).string(message.incrementPercentage);
    }
    for (const v of message.whitelistAccounts) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.splitShares) {
      WeightedAddress.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuctionListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.startPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.owner = reader.string();
          break;
        case 8:
          message.incrementPercentage = reader.string();
          break;
        case 9:
          message.whitelistAccounts.push(reader.string());
          break;
        case 10:
          message.splitShares.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuctionListing {
    const obj = createBaseAuctionListing();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.startPrice)) obj.startPrice = Coin.fromJSON(object.startPrice);
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    if (isSet(object.endTime)) obj.endTime = fromJsonTimestamp(object.endTime);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.incrementPercentage)) obj.incrementPercentage = String(object.incrementPercentage);
    if (Array.isArray(object?.whitelistAccounts))
      obj.whitelistAccounts = object.whitelistAccounts.map((e: any) => String(e));
    if (Array.isArray(object?.splitShares))
      obj.splitShares = object.splitShares.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: AuctionListing): JsonSafe<AuctionListing> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.startPrice !== undefined &&
      (obj.startPrice = message.startPrice ? Coin.toJSON(message.startPrice) : undefined);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.owner !== undefined && (obj.owner = message.owner);
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuctionListing>, I>>(object: I): AuctionListing {
    const message = createBaseAuctionListing();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    if (object.startPrice !== undefined && object.startPrice !== null) {
      message.startPrice = Coin.fromPartial(object.startPrice);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Timestamp.fromPartial(object.endTime);
    }
    message.owner = object.owner ?? "";
    message.incrementPercentage = object.incrementPercentage ?? "";
    message.whitelistAccounts = object.whitelistAccounts?.map((e) => e) || [];
    message.splitShares = object.splitShares?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
function createBaseBid(): Bid {
  return {
    auctionId: BigInt(0),
    bidder: "",
    amount: Coin.fromPartial({}),
    time: Timestamp.fromPartial({}),
  };
}
export const Bid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bid {
    const obj = createBaseBid();
    if (isSet(object.auctionId)) obj.auctionId = BigInt(object.auctionId.toString());
    if (isSet(object.bidder)) obj.bidder = String(object.bidder);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    return obj;
  },
  toJSON(message: Bid): JsonSafe<Bid> {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
    const message = createBaseBid();
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = BigInt(object.auctionId.toString());
    }
    message.bidder = object.bidder ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    return message;
  },
};
