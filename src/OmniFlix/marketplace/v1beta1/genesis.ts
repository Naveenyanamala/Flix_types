/* eslint-disable */
import { Listing } from "./listing";
import { Params } from "./params";
import { AuctionListing, Bid } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
export interface GenesisState {
  /** NFTs that are listed in marketplace */
  listings: Listing[];
  listingCount: bigint;
  params: Params;
  auctions: AuctionListing[];
  bids: Bid[];
  nextAuctionNumber: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    listings: [],
    listingCount: BigInt(0),
    params: Params.fromPartial({}),
    auctions: [],
    bids: [],
    nextAuctionNumber: BigInt(0),
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.listingCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.listingCount);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.auctions) {
      AuctionListing.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.nextAuctionNumber !== BigInt(0)) {
      writer.uint32(48).uint64(message.nextAuctionNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.listingCount = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.auctions.push(AuctionListing.decode(reader, reader.uint32()));
          break;
        case 5:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        case 6:
          message.nextAuctionNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.listings)) obj.listings = object.listings.map((e: any) => Listing.fromJSON(e));
    if (isSet(object.listingCount)) obj.listingCount = BigInt(object.listingCount.toString());
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.auctions))
      obj.auctions = object.auctions.map((e: any) => AuctionListing.fromJSON(e));
    if (Array.isArray(object?.bids)) obj.bids = object.bids.map((e: any) => Bid.fromJSON(e));
    if (isSet(object.nextAuctionNumber)) obj.nextAuctionNumber = BigInt(object.nextAuctionNumber.toString());
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toJSON(e) : undefined));
    } else {
      obj.listings = [];
    }
    message.listingCount !== undefined && (obj.listingCount = (message.listingCount || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) => (e ? AuctionListing.toJSON(e) : undefined));
    } else {
      obj.auctions = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    message.nextAuctionNumber !== undefined &&
      (obj.nextAuctionNumber = (message.nextAuctionNumber || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.listingCount !== undefined && object.listingCount !== null) {
      message.listingCount = BigInt(object.listingCount.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.auctions = object.auctions?.map((e) => AuctionListing.fromPartial(e)) || [];
    message.bids = object.bids?.map((e) => Bid.fromPartial(e)) || [];
    if (object.nextAuctionNumber !== undefined && object.nextAuctionNumber !== null) {
      message.nextAuctionNumber = BigInt(object.nextAuctionNumber.toString());
    }
    return message;
  },
};
