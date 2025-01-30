/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { AuctionStatus, AuctionListing, Bid, auctionStatusFromJSON, auctionStatusToJSON } from "./auction";
import { Params } from "./params";
import { Listing } from "./listing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryListingsRequest {
  owner: string;
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryListingsResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingRequest {
  id: string;
}
export interface QueryListingResponse {
  listing?: Listing;
}
export interface QueryListingsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryListingsByOwnerResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingByNFTIDRequest {
  nftId: string;
}
export interface QueryListingsByPriceDenomRequest {
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryListingsByPriceDenomResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryAuctionsRequest {
  status: AuctionStatus;
  owner: string;
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsResponse {
  auctions: AuctionListing[];
  pagination?: PageResponse;
}
export interface QueryAuctionRequest {
  id: bigint;
}
export interface QueryAuctionResponse {
  auction?: AuctionListing;
}
export interface QueryAuctionsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryAuctionByNFTIDRequest {
  nftId: string;
}
export interface QueryAuctionsByPriceDenomRequest {
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryBidsRequest {
  bidder: string;
  pagination?: PageRequest;
}
export interface QueryBidsResponse {
  bids: Bid[];
  pagination?: PageResponse;
}
export interface QueryBidRequest {
  id: bigint;
}
export interface QueryBidResponse {
  bid?: Bid;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryListingsRequest(): QueryListingsRequest {
  return {
    owner: "",
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryListingsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
  encode(message: QueryListingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingsRequest {
    const obj = createBaseQueryListingsRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.priceDenom)) obj.priceDenom = String(object.priceDenom);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryListingsRequest): JsonSafe<QueryListingsRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsRequest>, I>>(object: I): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    message.owner = object.owner ?? "";
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryListingsResponse(): QueryListingsResponse {
  return {
    listings: [],
    pagination: undefined,
  };
}
export const QueryListingsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
  encode(message: QueryListingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingsResponse {
    const obj = createBaseQueryListingsResponse();
    if (Array.isArray(object?.listings)) obj.listings = object.listings.map((e: any) => Listing.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryListingsResponse): JsonSafe<QueryListingsResponse> {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toJSON(e) : undefined));
    } else {
      obj.listings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsResponse>, I>>(object: I): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    id: "",
  };
}
export const QueryListingRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
  encode(message: QueryListingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingRequest {
    const obj = createBaseQueryListingRequest();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryListingRequest): JsonSafe<QueryListingRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingRequest>, I>>(object: I): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: undefined,
  };
}
export const QueryListingResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
  encode(message: QueryListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingResponse {
    const obj = createBaseQueryListingResponse();
    if (isSet(object.listing)) obj.listing = Listing.fromJSON(object.listing);
    return obj;
  },
  toJSON(message: QueryListingResponse): JsonSafe<QueryListingResponse> {
    const obj: any = {};
    message.listing !== undefined &&
      (obj.listing = message.listing ? Listing.toJSON(message.listing) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingResponse>, I>>(object: I): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromPartial(object.listing);
    }
    return message;
  },
};
function createBaseQueryListingsByOwnerRequest(): QueryListingsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined,
  };
}
export const QueryListingsByOwnerRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
  encode(message: QueryListingsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingsByOwnerRequest {
    const obj = createBaseQueryListingsByOwnerRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryListingsByOwnerRequest): JsonSafe<QueryListingsByOwnerRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsByOwnerRequest>, I>>(
    object: I,
  ): QueryListingsByOwnerRequest {
    const message = createBaseQueryListingsByOwnerRequest();
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryListingsByOwnerResponse(): QueryListingsByOwnerResponse {
  return {
    listings: [],
    pagination: undefined,
  };
}
export const QueryListingsByOwnerResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
  encode(message: QueryListingsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingsByOwnerResponse {
    const obj = createBaseQueryListingsByOwnerResponse();
    if (Array.isArray(object?.listings)) obj.listings = object.listings.map((e: any) => Listing.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryListingsByOwnerResponse): JsonSafe<QueryListingsByOwnerResponse> {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toJSON(e) : undefined));
    } else {
      obj.listings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsByOwnerResponse>, I>>(
    object: I,
  ): QueryListingsByOwnerResponse {
    const message = createBaseQueryListingsByOwnerResponse();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryListingByNFTIDRequest(): QueryListingByNFTIDRequest {
  return {
    nftId: "",
  };
}
export const QueryListingByNFTIDRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
  encode(message: QueryListingByNFTIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingByNFTIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingByNFTIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingByNFTIDRequest {
    const obj = createBaseQueryListingByNFTIDRequest();
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    return obj;
  },
  toJSON(message: QueryListingByNFTIDRequest): JsonSafe<QueryListingByNFTIDRequest> {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingByNFTIDRequest>, I>>(
    object: I,
  ): QueryListingByNFTIDRequest {
    const message = createBaseQueryListingByNFTIDRequest();
    message.nftId = object.nftId ?? "";
    return message;
  },
};
function createBaseQueryListingsByPriceDenomRequest(): QueryListingsByPriceDenomRequest {
  return {
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryListingsByPriceDenomRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
  encode(
    message: QueryListingsByPriceDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByPriceDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByPriceDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingsByPriceDenomRequest {
    const obj = createBaseQueryListingsByPriceDenomRequest();
    if (isSet(object.priceDenom)) obj.priceDenom = String(object.priceDenom);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryListingsByPriceDenomRequest): JsonSafe<QueryListingsByPriceDenomRequest> {
    const obj: any = {};
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsByPriceDenomRequest>, I>>(
    object: I,
  ): QueryListingsByPriceDenomRequest {
    const message = createBaseQueryListingsByPriceDenomRequest();
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryListingsByPriceDenomResponse(): QueryListingsByPriceDenomResponse {
  return {
    listings: [],
    pagination: undefined,
  };
}
export const QueryListingsByPriceDenomResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
  encode(
    message: QueryListingsByPriceDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByPriceDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByPriceDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListingsByPriceDenomResponse {
    const obj = createBaseQueryListingsByPriceDenomResponse();
    if (Array.isArray(object?.listings)) obj.listings = object.listings.map((e: any) => Listing.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryListingsByPriceDenomResponse): JsonSafe<QueryListingsByPriceDenomResponse> {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toJSON(e) : undefined));
    } else {
      obj.listings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsByPriceDenomResponse>, I>>(
    object: I,
  ): QueryListingsByPriceDenomResponse {
    const message = createBaseQueryListingsByPriceDenomResponse();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    status: 0,
    owner: "",
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryAuctionsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
  encode(message: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionsRequest {
    const obj = createBaseQueryAuctionsRequest();
    if (isSet(object.status)) obj.status = auctionStatusFromJSON(object.status);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.priceDenom)) obj.priceDenom = String(object.priceDenom);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAuctionsRequest): JsonSafe<QueryAuctionsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = auctionStatusToJSON(message.status));
    message.owner !== undefined && (obj.owner = message.owner);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsRequest>, I>>(object: I): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.status = object.status ?? 0;
    message.owner = object.owner ?? "";
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined,
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      AuctionListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(AuctionListing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionsResponse {
    const obj = createBaseQueryAuctionsResponse();
    if (Array.isArray(object?.auctions))
      obj.auctions = object.auctions.map((e: any) => AuctionListing.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAuctionsResponse): JsonSafe<QueryAuctionsResponse> {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) => (e ? AuctionListing.toJSON(e) : undefined));
    } else {
      obj.auctions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsResponse>, I>>(object: I): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => AuctionListing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    id: BigInt(0),
  };
}
export const QueryAuctionRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
  encode(message: QueryAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionRequest {
    const obj = createBaseQueryAuctionRequest();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: QueryAuctionRequest): JsonSafe<QueryAuctionRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionRequest>, I>>(object: I): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: undefined,
  };
}
export const QueryAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
  encode(message: QueryAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
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
  fromJSON(object: any): QueryAuctionResponse {
    const obj = createBaseQueryAuctionResponse();
    if (isSet(object.auction)) obj.auction = AuctionListing.fromJSON(object.auction);
    return obj;
  },
  toJSON(message: QueryAuctionResponse): JsonSafe<QueryAuctionResponse> {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction ? AuctionListing.toJSON(message.auction) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionResponse>, I>>(object: I): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = AuctionListing.fromPartial(object.auction);
    }
    return message;
  },
};
function createBaseQueryAuctionsByOwnerRequest(): QueryAuctionsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined,
  };
}
export const QueryAuctionsByOwnerRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
  encode(message: QueryAuctionsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionsByOwnerRequest {
    const obj = createBaseQueryAuctionsByOwnerRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAuctionsByOwnerRequest): JsonSafe<QueryAuctionsByOwnerRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsByOwnerRequest>, I>>(
    object: I,
  ): QueryAuctionsByOwnerRequest {
    const message = createBaseQueryAuctionsByOwnerRequest();
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAuctionByNFTIDRequest(): QueryAuctionByNFTIDRequest {
  return {
    nftId: "",
  };
}
export const QueryAuctionByNFTIDRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
  encode(message: QueryAuctionByNFTIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionByNFTIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByNFTIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionByNFTIDRequest {
    const obj = createBaseQueryAuctionByNFTIDRequest();
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    return obj;
  },
  toJSON(message: QueryAuctionByNFTIDRequest): JsonSafe<QueryAuctionByNFTIDRequest> {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionByNFTIDRequest>, I>>(
    object: I,
  ): QueryAuctionByNFTIDRequest {
    const message = createBaseQueryAuctionByNFTIDRequest();
    message.nftId = object.nftId ?? "";
    return message;
  },
};
function createBaseQueryAuctionsByPriceDenomRequest(): QueryAuctionsByPriceDenomRequest {
  return {
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryAuctionsByPriceDenomRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
  encode(
    message: QueryAuctionsByPriceDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsByPriceDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionsByPriceDenomRequest {
    const obj = createBaseQueryAuctionsByPriceDenomRequest();
    if (isSet(object.priceDenom)) obj.priceDenom = String(object.priceDenom);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAuctionsByPriceDenomRequest): JsonSafe<QueryAuctionsByPriceDenomRequest> {
    const obj: any = {};
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsByPriceDenomRequest>, I>>(
    object: I,
  ): QueryAuctionsByPriceDenomRequest {
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    bidder: "",
    pagination: undefined,
  };
}
export const QueryBidsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidsRequest {
    const obj = createBaseQueryBidsRequest();
    if (isSet(object.bidder)) obj.bidder = String(object.bidder);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBidsRequest): JsonSafe<QueryBidsRequest> {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(object: I): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.bidder = object.bidder ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined,
  };
}
export const QueryBidsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidsResponse {
    const obj = createBaseQueryBidsResponse();
    if (Array.isArray(object?.bids)) obj.bids = object.bids.map((e: any) => Bid.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBidsResponse): JsonSafe<QueryBidsResponse> {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(object: I): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map((e) => Bid.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BigInt(0),
  };
}
export const QueryBidRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidRequest {
    const obj = createBaseQueryBidRequest();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: QueryBidRequest): JsonSafe<QueryBidRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidRequest>, I>>(object: I): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: undefined,
  };
}
export const QueryBidResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidResponse {
    const obj = createBaseQueryBidResponse();
    if (isSet(object.bid)) obj.bid = Bid.fromJSON(object.bid);
    return obj;
  },
  toJSON(message: QueryBidResponse): JsonSafe<QueryBidResponse> {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toJSON(message.bid) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(object: I): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    }
    return message;
  },
};
export interface Query {
  /** Params queries params of the marketplace module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  Listings(request: QueryListingsRequest): Promise<QueryListingsResponse>;
  Listing(request: QueryListingRequest): Promise<QueryListingResponse>;
  ListingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse>;
  ListingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse>;
  ListingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse>;
  /** auction queries */
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  AuctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse>;
  AuctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse>;
  AuctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse>;
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Listings = this.Listings.bind(this);
    this.Listing = this.Listing.bind(this);
    this.ListingsByOwner = this.ListingsByOwner.bind(this);
    this.ListingsByPriceDenom = this.ListingsByPriceDenom.bind(this);
    this.ListingByNftId = this.ListingByNftId.bind(this);
    this.Auctions = this.Auctions.bind(this);
    this.Auction = this.Auction.bind(this);
    this.AuctionsByOwner = this.AuctionsByOwner.bind(this);
    this.AuctionsByPriceDenom = this.AuctionsByPriceDenom.bind(this);
    this.AuctionByNftId = this.AuctionByNftId.bind(this);
    this.Bids = this.Bids.bind(this);
    this.Bid = this.Bid.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Listings(request: QueryListingsRequest): Promise<QueryListingsResponse> {
    const data = QueryListingsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listings", data);
    return promise.then((data) => QueryListingsResponse.decode(new BinaryReader(data)));
  }
  Listing(request: QueryListingRequest): Promise<QueryListingResponse> {
    const data = QueryListingRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listing", data);
    return promise.then((data) => QueryListingResponse.decode(new BinaryReader(data)));
  }
  ListingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse> {
    const data = QueryListingsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByOwner", data);
    return promise.then((data) => QueryListingsByOwnerResponse.decode(new BinaryReader(data)));
  }
  ListingsByPriceDenom(
    request: QueryListingsByPriceDenomRequest,
  ): Promise<QueryListingsByPriceDenomResponse> {
    const data = QueryListingsByPriceDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByPriceDenom", data);
    return promise.then((data) => QueryListingsByPriceDenomResponse.decode(new BinaryReader(data)));
  }
  ListingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse> {
    const data = QueryListingByNFTIDRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingByNftId", data);
    return promise.then((data) => QueryListingResponse.decode(new BinaryReader(data)));
  }
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auctions", data);
    return promise.then((data) => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auction", data);
    return promise.then((data) => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  AuctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByOwner", data);
    return promise.then((data) => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  AuctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsByPriceDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByPriceDenom", data);
    return promise.then((data) => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  AuctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionByNFTIDRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionByNftId", data);
    return promise.then((data) => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bids", data);
    return promise.then((data) => QueryBidsResponse.decode(new BinaryReader(data)));
  }
  Bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bid", data);
    return promise.then((data) => QueryBidResponse.decode(new BinaryReader(data)));
  }
}
