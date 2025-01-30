/* eslint-disable */
import { Campaign, Claim } from "./itc";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.itc.v1";
/** GenesisState defines the itc module's genesis state. */
export interface GenesisState {
  campaigns: Campaign[];
  nextCampaignNumber: bigint;
  claims: Claim[];
  params: Params;
}
function createBaseGenesisState(): GenesisState {
  return {
    campaigns: [],
    nextCampaignNumber: BigInt(0),
    claims: [],
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.itc.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCampaignNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextCampaignNumber);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.campaigns.push(Campaign.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextCampaignNumber = reader.uint64();
          break;
        case 3:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
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
    if (Array.isArray(object?.campaigns))
      obj.campaigns = object.campaigns.map((e: any) => Campaign.fromJSON(e));
    if (isSet(object.nextCampaignNumber))
      obj.nextCampaignNumber = BigInt(object.nextCampaignNumber.toString());
    if (Array.isArray(object?.claims)) obj.claims = object.claims.map((e: any) => Claim.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map((e) => (e ? Campaign.toJSON(e) : undefined));
    } else {
      obj.campaigns = [];
    }
    message.nextCampaignNumber !== undefined &&
      (obj.nextCampaignNumber = (message.nextCampaignNumber || BigInt(0)).toString());
    if (message.claims) {
      obj.claims = message.claims.map((e) => (e ? Claim.toJSON(e) : undefined));
    } else {
      obj.claims = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.campaigns = object.campaigns?.map((e) => Campaign.fromPartial(e)) || [];
    if (object.nextCampaignNumber !== undefined && object.nextCampaignNumber !== null) {
      message.nextCampaignNumber = BigInt(object.nextCampaignNumber.toString());
    }
    message.claims = object.claims?.map((e) => Claim.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
