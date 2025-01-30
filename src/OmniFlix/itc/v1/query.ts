/* eslint-disable */
import { CampaignStatus, Campaign, Claim, campaignStatusFromJSON, campaignStatusToJSON } from "./itc";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.itc.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequest {
  status: CampaignStatus;
  creator: string;
  pagination?: PageRequest;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponse {
  campaigns: Campaign[];
  pagination?: PageResponse;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequest {
  campaignId: bigint;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponse {
  campaign: Campaign;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
  campaignId: bigint;
  address: string;
  pagination?: PageRequest;
}
export interface QueryClaimsResponse {
  claims: Claim[];
  pagination?: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
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
  typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
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
function createBaseQueryCampaignsRequest(): QueryCampaignsRequest {
  return {
    status: 0,
    creator: "",
    pagination: undefined,
  };
}
export const QueryCampaignsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
  encode(message: QueryCampaignsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.creator = reader.string();
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
  fromJSON(object: any): QueryCampaignsRequest {
    const obj = createBaseQueryCampaignsRequest();
    if (isSet(object.status)) obj.status = campaignStatusFromJSON(object.status);
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCampaignsRequest): JsonSafe<QueryCampaignsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = campaignStatusToJSON(message.status));
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignsRequest>, I>>(object: I): QueryCampaignsRequest {
    const message = createBaseQueryCampaignsRequest();
    message.status = object.status ?? 0;
    message.creator = object.creator ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryCampaignsResponse(): QueryCampaignsResponse {
  return {
    campaigns: [],
    pagination: undefined,
  };
}
export const QueryCampaignsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
  encode(message: QueryCampaignsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaigns.push(Campaign.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryCampaignsResponse {
    const obj = createBaseQueryCampaignsResponse();
    if (Array.isArray(object?.campaigns))
      obj.campaigns = object.campaigns.map((e: any) => Campaign.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCampaignsResponse): JsonSafe<QueryCampaignsResponse> {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map((e) => (e ? Campaign.toJSON(e) : undefined));
    } else {
      obj.campaigns = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignsResponse>, I>>(object: I): QueryCampaignsResponse {
    const message = createBaseQueryCampaignsResponse();
    message.campaigns = object.campaigns?.map((e) => Campaign.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryCampaignRequest(): QueryCampaignRequest {
  return {
    campaignId: BigInt(0),
  };
}
export const QueryCampaignRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
  encode(message: QueryCampaignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCampaignRequest {
    const obj = createBaseQueryCampaignRequest();
    if (isSet(object.campaignId)) obj.campaignId = BigInt(object.campaignId.toString());
    return obj;
  },
  toJSON(message: QueryCampaignRequest): JsonSafe<QueryCampaignRequest> {
    const obj: any = {};
    message.campaignId !== undefined && (obj.campaignId = (message.campaignId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignRequest>, I>>(object: I): QueryCampaignRequest {
    const message = createBaseQueryCampaignRequest();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    return message;
  },
};
function createBaseQueryCampaignResponse(): QueryCampaignResponse {
  return {
    campaign: Campaign.fromPartial({}),
  };
}
export const QueryCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
  encode(message: QueryCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaign = Campaign.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCampaignResponse {
    const obj = createBaseQueryCampaignResponse();
    if (isSet(object.campaign)) obj.campaign = Campaign.fromJSON(object.campaign);
    return obj;
  },
  toJSON(message: QueryCampaignResponse): JsonSafe<QueryCampaignResponse> {
    const obj: any = {};
    message.campaign !== undefined &&
      (obj.campaign = message.campaign ? Campaign.toJSON(message.campaign) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignResponse>, I>>(object: I): QueryCampaignResponse {
    const message = createBaseQueryCampaignResponse();
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromPartial(object.campaign);
    }
    return message;
  },
};
function createBaseQueryClaimsRequest(): QueryClaimsRequest {
  return {
    campaignId: BigInt(0),
    address: "",
    pagination: undefined,
  };
}
export const QueryClaimsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
  encode(message: QueryClaimsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
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
  fromJSON(object: any): QueryClaimsRequest {
    const obj = createBaseQueryClaimsRequest();
    if (isSet(object.campaignId)) obj.campaignId = BigInt(object.campaignId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClaimsRequest): JsonSafe<QueryClaimsRequest> {
    const obj: any = {};
    message.campaignId !== undefined && (obj.campaignId = (message.campaignId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClaimsRequest>, I>>(object: I): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    pagination: undefined,
  };
}
export const QueryClaimsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
  encode(message: QueryClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(Claim.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClaimsResponse {
    const obj = createBaseQueryClaimsResponse();
    if (Array.isArray(object?.claims)) obj.claims = object.claims.map((e: any) => Claim.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClaimsResponse): JsonSafe<QueryClaimsResponse> {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map((e) => (e ? Claim.toJSON(e) : undefined));
    } else {
      obj.claims = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClaimsResponse>, I>>(object: I): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map((e) => Claim.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  Campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse>;
  Campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse>;
  Claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Campaigns = this.Campaigns.bind(this);
    this.Campaign = this.Campaign.bind(this);
    this.Claims = this.Claims.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse> {
    const data = QueryCampaignsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaigns", data);
    return promise.then((data) => QueryCampaignsResponse.decode(new BinaryReader(data)));
  }
  Campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse> {
    const data = QueryCampaignRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaign", data);
    return promise.then((data) => QueryCampaignResponse.decode(new BinaryReader(data)));
  }
  Claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Claims", data);
    return promise.then((data) => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
}
