/* eslint-disable */
import {
  InteractionType,
  ClaimType,
  NFTDetails,
  Distribution,
  interactionTypeFromJSON,
  claimTypeFromJSON,
  interactionTypeToJSON,
  claimTypeToJSON,
} from "./itc";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.itc.v1";
export interface MsgCreateCampaign {
  name: string;
  description: string;
  interaction: InteractionType;
  claimType: ClaimType;
  nftDenomId: string;
  tokensPerClaim: Coin;
  maxAllowedClaims: bigint;
  deposit: Coin;
  nftMintDetails?: NFTDetails;
  startTime: Timestamp;
  duration: Duration;
  distribution?: Distribution;
  creator: string;
  creationFee: Coin;
}
export interface MsgCreateCampaignResponse {}
export interface MsgCancelCampaign {
  campaignId: bigint;
  creator: string;
}
export interface MsgCancelCampaignResponse {}
export interface MsgClaim {
  campaignId: bigint;
  nftId: string;
  interaction: InteractionType;
  claimer: string;
}
export interface MsgClaimResponse {}
export interface MsgDepositCampaign {
  campaignId: bigint;
  amount: Coin;
  depositor: string;
}
export interface MsgDepositCampaignResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/itc parameters to update.
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
function createBaseMsgCreateCampaign(): MsgCreateCampaign {
  return {
    name: "",
    description: "",
    interaction: 0,
    claimType: 0,
    nftDenomId: "",
    tokensPerClaim: Coin.fromPartial({}),
    maxAllowedClaims: BigInt(0),
    deposit: Coin.fromPartial({}),
    nftMintDetails: undefined,
    startTime: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
    distribution: undefined,
    creator: "",
    creationFee: Coin.fromPartial({}),
  };
}
export const MsgCreateCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
  encode(message: MsgCreateCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.interaction !== 0) {
      writer.uint32(24).int32(message.interaction);
    }
    if (message.claimType !== 0) {
      writer.uint32(32).int32(message.claimType);
    }
    if (message.nftDenomId !== "") {
      writer.uint32(42).string(message.nftDenomId);
    }
    if (message.tokensPerClaim !== undefined) {
      Coin.encode(message.tokensPerClaim, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxAllowedClaims !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxAllowedClaims);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
    }
    if (message.nftMintDetails !== undefined) {
      NFTDetails.encode(message.nftMintDetails, writer.uint32(74).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(82).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(90).fork()).ldelim();
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(98).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(106).string(message.creator);
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCampaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.interaction = reader.int32() as any;
          break;
        case 4:
          message.claimType = reader.int32() as any;
          break;
        case 5:
          message.nftDenomId = reader.string();
          break;
        case 6:
          message.tokensPerClaim = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.maxAllowedClaims = reader.uint64();
          break;
        case 8:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.nftMintDetails = NFTDetails.decode(reader, reader.uint32());
          break;
        case 10:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 12:
          message.distribution = Distribution.decode(reader, reader.uint32());
          break;
        case 13:
          message.creator = reader.string();
          break;
        case 14:
          message.creationFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateCampaign {
    const obj = createBaseMsgCreateCampaign();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.interaction)) obj.interaction = interactionTypeFromJSON(object.interaction);
    if (isSet(object.claimType)) obj.claimType = claimTypeFromJSON(object.claimType);
    if (isSet(object.nftDenomId)) obj.nftDenomId = String(object.nftDenomId);
    if (isSet(object.tokensPerClaim)) obj.tokensPerClaim = Coin.fromJSON(object.tokensPerClaim);
    if (isSet(object.maxAllowedClaims)) obj.maxAllowedClaims = BigInt(object.maxAllowedClaims.toString());
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    if (isSet(object.nftMintDetails)) obj.nftMintDetails = NFTDetails.fromJSON(object.nftMintDetails);
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.distribution)) obj.distribution = Distribution.fromJSON(object.distribution);
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.creationFee)) obj.creationFee = Coin.fromJSON(object.creationFee);
    return obj;
  },
  toJSON(message: MsgCreateCampaign): JsonSafe<MsgCreateCampaign> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.interaction !== undefined && (obj.interaction = interactionTypeToJSON(message.interaction));
    message.claimType !== undefined && (obj.claimType = claimTypeToJSON(message.claimType));
    message.nftDenomId !== undefined && (obj.nftDenomId = message.nftDenomId);
    message.tokensPerClaim !== undefined &&
      (obj.tokensPerClaim = message.tokensPerClaim ? Coin.toJSON(message.tokensPerClaim) : undefined);
    message.maxAllowedClaims !== undefined &&
      (obj.maxAllowedClaims = (message.maxAllowedClaims || BigInt(0)).toString());
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.nftMintDetails !== undefined &&
      (obj.nftMintDetails = message.nftMintDetails ? NFTDetails.toJSON(message.nftMintDetails) : undefined);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.distribution !== undefined &&
      (obj.distribution = message.distribution ? Distribution.toJSON(message.distribution) : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creationFee !== undefined &&
      (obj.creationFee = message.creationFee ? Coin.toJSON(message.creationFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateCampaign>, I>>(object: I): MsgCreateCampaign {
    const message = createBaseMsgCreateCampaign();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    message.nftDenomId = object.nftDenomId ?? "";
    if (object.tokensPerClaim !== undefined && object.tokensPerClaim !== null) {
      message.tokensPerClaim = Coin.fromPartial(object.tokensPerClaim);
    }
    if (object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null) {
      message.maxAllowedClaims = BigInt(object.maxAllowedClaims.toString());
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    if (object.nftMintDetails !== undefined && object.nftMintDetails !== null) {
      message.nftMintDetails = NFTDetails.fromPartial(object.nftMintDetails);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromPartial(object.distribution);
    }
    message.creator = object.creator ?? "";
    if (object.creationFee !== undefined && object.creationFee !== null) {
      message.creationFee = Coin.fromPartial(object.creationFee);
    }
    return message;
  },
};
function createBaseMsgCreateCampaignResponse(): MsgCreateCampaignResponse {
  return {};
}
export const MsgCreateCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
  encode(_: MsgCreateCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCampaignResponse();
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
  fromJSON(_: any): MsgCreateCampaignResponse {
    const obj = createBaseMsgCreateCampaignResponse();
    return obj;
  },
  toJSON(_: MsgCreateCampaignResponse): JsonSafe<MsgCreateCampaignResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateCampaignResponse>, I>>(_: I): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  },
};
function createBaseMsgCancelCampaign(): MsgCancelCampaign {
  return {
    campaignId: BigInt(0),
    creator: "",
  };
}
export const MsgCancelCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
  encode(message: MsgCancelCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCampaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelCampaign {
    const obj = createBaseMsgCancelCampaign();
    if (isSet(object.campaignId)) obj.campaignId = BigInt(object.campaignId.toString());
    if (isSet(object.creator)) obj.creator = String(object.creator);
    return obj;
  },
  toJSON(message: MsgCancelCampaign): JsonSafe<MsgCancelCampaign> {
    const obj: any = {};
    message.campaignId !== undefined && (obj.campaignId = (message.campaignId || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCampaign>, I>>(object: I): MsgCancelCampaign {
    const message = createBaseMsgCancelCampaign();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.creator = object.creator ?? "";
    return message;
  },
};
function createBaseMsgCancelCampaignResponse(): MsgCancelCampaignResponse {
  return {};
}
export const MsgCancelCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
  encode(_: MsgCancelCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCampaignResponse();
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
  fromJSON(_: any): MsgCancelCampaignResponse {
    const obj = createBaseMsgCancelCampaignResponse();
    return obj;
  },
  toJSON(_: MsgCancelCampaignResponse): JsonSafe<MsgCancelCampaignResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCampaignResponse>, I>>(_: I): MsgCancelCampaignResponse {
    const message = createBaseMsgCancelCampaignResponse();
    return message;
  },
};
function createBaseMsgClaim(): MsgClaim {
  return {
    campaignId: BigInt(0),
    nftId: "",
    interaction: 0,
    claimer: "",
  };
}
export const MsgClaim = {
  typeUrl: "/OmniFlix.itc.v1.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.interaction !== 0) {
      writer.uint32(24).int32(message.interaction);
    }
    if (message.claimer !== "") {
      writer.uint32(34).string(message.claimer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.interaction = reader.int32() as any;
          break;
        case 4:
          message.claimer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaim {
    const obj = createBaseMsgClaim();
    if (isSet(object.campaignId)) obj.campaignId = BigInt(object.campaignId.toString());
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.interaction)) obj.interaction = interactionTypeFromJSON(object.interaction);
    if (isSet(object.claimer)) obj.claimer = String(object.claimer);
    return obj;
  },
  toJSON(message: MsgClaim): JsonSafe<MsgClaim> {
    const obj: any = {};
    message.campaignId !== undefined && (obj.campaignId = (message.campaignId || BigInt(0)).toString());
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.interaction !== undefined && (obj.interaction = interactionTypeToJSON(message.interaction));
    message.claimer !== undefined && (obj.claimer = message.claimer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimer = object.claimer ?? "";
    return message;
  },
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
export const MsgClaimResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
  encode(_: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
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
  fromJSON(_: any): MsgClaimResponse {
    const obj = createBaseMsgClaimResponse();
    return obj;
  },
  toJSON(_: MsgClaimResponse): JsonSafe<MsgClaimResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(_: I): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
};
function createBaseMsgDepositCampaign(): MsgDepositCampaign {
  return {
    campaignId: BigInt(0),
    amount: Coin.fromPartial({}),
    depositor: "",
  };
}
export const MsgDepositCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
  encode(message: MsgDepositCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositCampaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDepositCampaign {
    const obj = createBaseMsgDepositCampaign();
    if (isSet(object.campaignId)) obj.campaignId = BigInt(object.campaignId.toString());
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    return obj;
  },
  toJSON(message: MsgDepositCampaign): JsonSafe<MsgDepositCampaign> {
    const obj: any = {};
    message.campaignId !== undefined && (obj.campaignId = (message.campaignId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositCampaign>, I>>(object: I): MsgDepositCampaign {
    const message = createBaseMsgDepositCampaign();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.depositor = object.depositor ?? "";
    return message;
  },
};
function createBaseMsgDepositCampaignResponse(): MsgDepositCampaignResponse {
  return {};
}
export const MsgDepositCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
  encode(_: MsgDepositCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCampaignResponse();
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
  fromJSON(_: any): MsgDepositCampaignResponse {
    const obj = createBaseMsgDepositCampaignResponse();
    return obj;
  },
  toJSON(_: MsgDepositCampaignResponse): JsonSafe<MsgDepositCampaignResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositCampaignResponse>, I>>(_: I): MsgDepositCampaignResponse {
    const message = createBaseMsgDepositCampaignResponse();
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
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
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
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
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
  CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
  CancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  DepositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/itc module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCampaign = this.CreateCampaign.bind(this);
    this.CancelCampaign = this.CancelCampaign.bind(this);
    this.Claim = this.Claim.bind(this);
    this.DepositCampaign = this.DepositCampaign.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse> {
    const data = MsgCreateCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CreateCampaign", data);
    return promise.then((data) => MsgCreateCampaignResponse.decode(new BinaryReader(data)));
  }
  CancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse> {
    const data = MsgCancelCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CancelCampaign", data);
    return promise.then((data) => MsgCancelCampaignResponse.decode(new BinaryReader(data)));
  }
  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "Claim", data);
    return promise.then((data) => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  DepositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse> {
    const data = MsgDepositCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "DepositCampaign", data);
    return promise.then((data) => MsgDepositCampaignResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
