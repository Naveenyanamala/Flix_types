/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListing {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  buyer: string;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuction {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  minPrice: string;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuction {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBid {
  auctionId: string;
  nftId: string;
  denomId: string;
  bidder: string;
  amount: string;
}
function createBaseEventListNFT(): EventListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
  encode(message: EventListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventListNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventListNFT();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventListNFT {
    const obj = createBaseEventListNFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventListNFT): JsonSafe<EventListNFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventListNFT>, I>>(object: I): EventListNFT {
    const message = createBaseEventListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseEventEditListing(): EventEditListing {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventEditListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
  encode(message: EventEditListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEditListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditListing();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventEditListing {
    const obj = createBaseEventEditListing();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventEditListing): JsonSafe<EventEditListing> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventEditListing>, I>>(object: I): EventEditListing {
    const message = createBaseEventEditListing();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseEventDeListNFT(): EventDeListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventDeListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
  encode(message: EventDeListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeListNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeListNFT();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeListNFT {
    const obj = createBaseEventDeListNFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventDeListNFT): JsonSafe<EventDeListNFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeListNFT>, I>>(object: I): EventDeListNFT {
    const message = createBaseEventDeListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseEventBuyNFT(): EventBuyNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    buyer: "",
  };
}
export const EventBuyNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
  encode(message: EventBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBuyNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyNFT();
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
          message.owner = reader.string();
          break;
        case 5:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBuyNFT {
    const obj = createBaseEventBuyNFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.buyer)) obj.buyer = String(object.buyer);
    return obj;
  },
  toJSON(message: EventBuyNFT): JsonSafe<EventBuyNFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBuyNFT>, I>>(object: I): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
};
function createBaseEventCreateAuction(): EventCreateAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    minPrice: "",
  };
}
export const EventCreateAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
  encode(message: EventCreateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.minPrice !== "") {
      writer.uint32(42).string(message.minPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateAuction();
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
          message.owner = reader.string();
          break;
        case 5:
          message.minPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateAuction {
    const obj = createBaseEventCreateAuction();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.minPrice)) obj.minPrice = String(object.minPrice);
    return obj;
  },
  toJSON(message: EventCreateAuction): JsonSafe<EventCreateAuction> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.minPrice !== undefined && (obj.minPrice = message.minPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateAuction>, I>>(object: I): EventCreateAuction {
    const message = createBaseEventCreateAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.minPrice = object.minPrice ?? "";
    return message;
  },
};
function createBaseEventCancelAuction(): EventCancelAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventCancelAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
  encode(message: EventCancelAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelAuction();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCancelAuction {
    const obj = createBaseEventCancelAuction();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventCancelAuction): JsonSafe<EventCancelAuction> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCancelAuction>, I>>(object: I): EventCancelAuction {
    const message = createBaseEventCancelAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseEventPlaceBid(): EventPlaceBid {
  return {
    auctionId: "",
    nftId: "",
    denomId: "",
    bidder: "",
    amount: "",
  };
}
export const EventPlaceBid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
  encode(message: EventPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPlaceBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPlaceBid {
    const obj = createBaseEventPlaceBid();
    if (isSet(object.auctionId)) obj.auctionId = String(object.auctionId);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.bidder)) obj.bidder = String(object.bidder);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: EventPlaceBid): JsonSafe<EventPlaceBid> {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventPlaceBid>, I>>(object: I): EventPlaceBid {
    const message = createBaseEventPlaceBid();
    message.auctionId = object.auctionId ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
