/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Collection, Denom, ONFT, Owner } from "./onft";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.onft.v1beta1";
export interface QueryCollectionRequest {
  denomId: string;
  pagination?: PageRequest;
}
export interface QueryCollectionResponse {
  collection?: Collection;
  pagination?: PageResponse;
}
export interface QueryIBCCollectionRequest {
  hash: string;
  pagination?: PageRequest;
}
export interface QueryDenomRequest {
  denomId: string;
}
export interface QueryDenomResponse {
  denom?: Denom;
}
export interface QueryIBCDenomRequest {
  hash: string;
}
export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  owner: string;
}
export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination?: PageResponse;
}
export interface QueryONFTRequest {
  denomId: string;
  id: string;
}
export interface QueryONFTResponse {
  onft?: ONFT;
}
export interface QueryIBCDenomONFTRequest {
  hash: string;
  id: string;
}
export interface QueryOwnerONFTsRequest {
  denomId: string;
  owner: string;
  pagination?: PageRequest;
}
export interface QueryOwnerONFTsResponse {
  owner?: Owner;
  pagination?: PageResponse;
}
export interface QueryOwnerIBCDenomONFTsRequest {
  hash: string;
  owner: string;
  pagination?: PageRequest;
}
export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}
export interface QuerySupplyResponse {
  amount: bigint;
}
export interface QueryIBCDenomSupplyRequest {
  hash: string;
  owner: string;
}
export interface OwnerONFTCollection {
  denom: Denom;
  onfts: ONFT[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    denomId: "",
    pagination: undefined,
  };
}
export const QueryCollectionRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
  encode(message: QueryCollectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
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
  fromJSON(object: any): QueryCollectionRequest {
    const obj = createBaseQueryCollectionRequest();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCollectionRequest): JsonSafe<QueryCollectionRequest> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(object: I): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: undefined,
    pagination: undefined,
  };
}
export const QueryCollectionResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
  encode(message: QueryCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryCollectionResponse {
    const obj = createBaseQueryCollectionResponse();
    if (isSet(object.collection)) obj.collection = Collection.fromJSON(object.collection);
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCollectionResponse): JsonSafe<QueryCollectionResponse> {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(object: I): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryIBCCollectionRequest(): QueryIBCCollectionRequest {
  return {
    hash: "",
    pagination: undefined,
  };
}
export const QueryIBCCollectionRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest",
  encode(message: QueryIBCCollectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCCollectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
  fromJSON(object: any): QueryIBCCollectionRequest {
    const obj = createBaseQueryIBCCollectionRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryIBCCollectionRequest): JsonSafe<QueryIBCCollectionRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCCollectionRequest>, I>>(
    object: I,
  ): QueryIBCCollectionRequest {
    const message = createBaseQueryIBCCollectionRequest();
    message.hash = object.hash ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDenomRequest(): QueryDenomRequest {
  return {
    denomId: "",
  };
}
export const QueryDenomRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
  encode(message: QueryDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomRequest {
    const obj = createBaseQueryDenomRequest();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    return obj;
  },
  toJSON(message: QueryDenomRequest): JsonSafe<QueryDenomRequest> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomRequest>, I>>(object: I): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
};
function createBaseQueryDenomResponse(): QueryDenomResponse {
  return {
    denom: undefined,
  };
}
export const QueryDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
  encode(message: QueryDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomResponse {
    const obj = createBaseQueryDenomResponse();
    if (isSet(object.denom)) obj.denom = Denom.fromJSON(object.denom);
    return obj;
  },
  toJSON(message: QueryDenomResponse): JsonSafe<QueryDenomResponse> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomResponse>, I>>(object: I): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    }
    return message;
  },
};
function createBaseQueryIBCDenomRequest(): QueryIBCDenomRequest {
  return {
    hash: "",
  };
}
export const QueryIBCDenomRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest",
  encode(message: QueryIBCDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIBCDenomRequest {
    const obj = createBaseQueryIBCDenomRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  toJSON(message: QueryIBCDenomRequest): JsonSafe<QueryIBCDenomRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCDenomRequest>, I>>(object: I): QueryIBCDenomRequest {
    const message = createBaseQueryIBCDenomRequest();
    message.hash = object.hash ?? "";
    return message;
  },
};
function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {
    pagination: undefined,
    owner: "",
  };
}
export const QueryDenomsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
  encode(message: QueryDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryDenomsRequest {
    const obj = createBaseQueryDenomsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryDenomsRequest): JsonSafe<QueryDenomsRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(object: I): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return {
    denoms: [],
    pagination: undefined,
  };
}
export const QueryDenomsResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
  encode(message: QueryDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDenomsResponse {
    const obj = createBaseQueryDenomsResponse();
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => Denom.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDenomsResponse): JsonSafe<QueryDenomsResponse> {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(object: I): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => Denom.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryONFTRequest(): QueryONFTRequest {
  return {
    denomId: "",
    id: "",
  };
}
export const QueryONFTRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
  encode(message: QueryONFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryONFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryONFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryONFTRequest {
    const obj = createBaseQueryONFTRequest();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryONFTRequest): JsonSafe<QueryONFTRequest> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryONFTRequest>, I>>(object: I): QueryONFTRequest {
    const message = createBaseQueryONFTRequest();
    message.denomId = object.denomId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseQueryONFTResponse(): QueryONFTResponse {
  return {
    onft: undefined,
  };
}
export const QueryONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
  encode(message: QueryONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.onft !== undefined) {
      ONFT.encode(message.onft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onft = ONFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryONFTResponse {
    const obj = createBaseQueryONFTResponse();
    if (isSet(object.onft)) obj.onft = ONFT.fromJSON(object.onft);
    return obj;
  },
  toJSON(message: QueryONFTResponse): JsonSafe<QueryONFTResponse> {
    const obj: any = {};
    message.onft !== undefined && (obj.onft = message.onft ? ONFT.toJSON(message.onft) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryONFTResponse>, I>>(object: I): QueryONFTResponse {
    const message = createBaseQueryONFTResponse();
    if (object.onft !== undefined && object.onft !== null) {
      message.onft = ONFT.fromPartial(object.onft);
    }
    return message;
  },
};
function createBaseQueryIBCDenomONFTRequest(): QueryIBCDenomONFTRequest {
  return {
    hash: "",
    id: "",
  };
}
export const QueryIBCDenomONFTRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest",
  encode(message: QueryIBCDenomONFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCDenomONFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCDenomONFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIBCDenomONFTRequest {
    const obj = createBaseQueryIBCDenomONFTRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryIBCDenomONFTRequest): JsonSafe<QueryIBCDenomONFTRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCDenomONFTRequest>, I>>(
    object: I,
  ): QueryIBCDenomONFTRequest {
    const message = createBaseQueryIBCDenomONFTRequest();
    message.hash = object.hash ?? "";
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseQueryOwnerONFTsRequest(): QueryOwnerONFTsRequest {
  return {
    denomId: "",
    owner: "",
    pagination: undefined,
  };
}
export const QueryOwnerONFTsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
  encode(message: QueryOwnerONFTsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerONFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerONFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
  fromJSON(object: any): QueryOwnerONFTsRequest {
    const obj = createBaseQueryOwnerONFTsRequest();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOwnerONFTsRequest): JsonSafe<QueryOwnerONFTsRequest> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOwnerONFTsRequest>, I>>(object: I): QueryOwnerONFTsRequest {
    const message = createBaseQueryOwnerONFTsRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryOwnerONFTsResponse(): QueryOwnerONFTsResponse {
  return {
    owner: undefined,
    pagination: undefined,
  };
}
export const QueryOwnerONFTsResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
  encode(message: QueryOwnerONFTsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerONFTsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerONFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryOwnerONFTsResponse {
    const obj = createBaseQueryOwnerONFTsResponse();
    if (isSet(object.owner)) obj.owner = Owner.fromJSON(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOwnerONFTsResponse): JsonSafe<QueryOwnerONFTsResponse> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOwnerONFTsResponse>, I>>(object: I): QueryOwnerONFTsResponse {
    const message = createBaseQueryOwnerONFTsResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromPartial(object.owner);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryOwnerIBCDenomONFTsRequest(): QueryOwnerIBCDenomONFTsRequest {
  return {
    hash: "",
    owner: "",
    pagination: undefined,
  };
}
export const QueryOwnerIBCDenomONFTsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest",
  encode(
    message: QueryOwnerIBCDenomONFTsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerIBCDenomONFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerIBCDenomONFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
  fromJSON(object: any): QueryOwnerIBCDenomONFTsRequest {
    const obj = createBaseQueryOwnerIBCDenomONFTsRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOwnerIBCDenomONFTsRequest): JsonSafe<QueryOwnerIBCDenomONFTsRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOwnerIBCDenomONFTsRequest>, I>>(
    object: I,
  ): QueryOwnerIBCDenomONFTsRequest {
    const message = createBaseQueryOwnerIBCDenomONFTsRequest();
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    denomId: "",
    owner: "",
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
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
  fromJSON(object: any): QuerySupplyRequest {
    const obj = createBaseQuerySupplyRequest();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QuerySupplyRequest): JsonSafe<QuerySupplyRequest> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(object: I): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0),
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    const obj = createBaseQuerySupplyResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  toJSON(message: QuerySupplyResponse): JsonSafe<QuerySupplyResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(object: I): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
};
function createBaseQueryIBCDenomSupplyRequest(): QueryIBCDenomSupplyRequest {
  return {
    hash: "",
    owner: "",
  };
}
export const QueryIBCDenomSupplyRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest",
  encode(message: QueryIBCDenomSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCDenomSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCDenomSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
  fromJSON(object: any): QueryIBCDenomSupplyRequest {
    const obj = createBaseQueryIBCDenomSupplyRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryIBCDenomSupplyRequest): JsonSafe<QueryIBCDenomSupplyRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCDenomSupplyRequest>, I>>(
    object: I,
  ): QueryIBCDenomSupplyRequest {
    const message = createBaseQueryIBCDenomSupplyRequest();
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseOwnerONFTCollection(): OwnerONFTCollection {
  return {
    denom: Denom.fromPartial({}),
    onfts: [],
  };
}
export const OwnerONFTCollection = {
  typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
  encode(message: OwnerONFTCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.onfts) {
      ONFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OwnerONFTCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerONFTCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.onfts.push(ONFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OwnerONFTCollection {
    const obj = createBaseOwnerONFTCollection();
    if (isSet(object.denom)) obj.denom = Denom.fromJSON(object.denom);
    if (Array.isArray(object?.onfts)) obj.onfts = object.onfts.map((e: any) => ONFT.fromJSON(e));
    return obj;
  },
  toJSON(message: OwnerONFTCollection): JsonSafe<OwnerONFTCollection> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.onfts) {
      obj.onfts = message.onfts.map((e) => (e ? ONFT.toJSON(e) : undefined));
    } else {
      obj.onfts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OwnerONFTCollection>, I>>(object: I): OwnerONFTCollection {
    const message = createBaseOwnerONFTCollection();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    }
    message.onfts = object.onfts?.map((e) => ONFT.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
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
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
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
export interface Query {
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  IBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse>;
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  IBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse>;
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  ONFT(request: QueryONFTRequest): Promise<QueryONFTResponse>;
  IBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse>;
  OwnerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse>;
  OwnerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse>;
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  IBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse>;
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Collection = this.Collection.bind(this);
    this.IBCCollection = this.IBCCollection.bind(this);
    this.Denom = this.Denom.bind(this);
    this.IBCDenom = this.IBCDenom.bind(this);
    this.Denoms = this.Denoms.bind(this);
    this.ONFT = this.ONFT.bind(this);
    this.IBCDenomONFT = this.IBCDenomONFT.bind(this);
    this.OwnerONFTs = this.OwnerONFTs.bind(this);
    this.OwnerIBCDenomONFTs = this.OwnerIBCDenomONFTs.bind(this);
    this.Supply = this.Supply.bind(this);
    this.IBCDenomSupply = this.IBCDenomSupply.bind(this);
    this.Params = this.Params.bind(this);
  }
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Collection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  IBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryIBCCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCCollection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denom", data);
    return promise.then((data) => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  IBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryIBCDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenom", data);
    return promise.then((data) => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(new BinaryReader(data)));
  }
  ONFT(request: QueryONFTRequest): Promise<QueryONFTResponse> {
    const data = QueryONFTRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "ONFT", data);
    return promise.then((data) => QueryONFTResponse.decode(new BinaryReader(data)));
  }
  IBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse> {
    const data = QueryIBCDenomONFTRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomONFT", data);
    return promise.then((data) => QueryONFTResponse.decode(new BinaryReader(data)));
  }
  OwnerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse> {
    const data = QueryOwnerONFTsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerONFTs", data);
    return promise.then((data) => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
  }
  OwnerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse> {
    const data = QueryOwnerIBCDenomONFTsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerIBCDenomONFTs", data);
    return promise.then((data) => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
  }
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Supply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  IBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse> {
    const data = QueryIBCDenomSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomSupply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
