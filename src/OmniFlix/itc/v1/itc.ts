/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.itc.v1";
export enum DistributionType {
  DISTRIBUTION_TYPE_INSTANT = 0,
  DISTRIBUTION_TYPE_STREAM = 1,
  UNRECOGNIZED = -1,
}
export function distributionTypeFromJSON(object: any): DistributionType {
  switch (object) {
    case 0:
    case "DISTRIBUTION_TYPE_INSTANT":
      return DistributionType.DISTRIBUTION_TYPE_INSTANT;
    case 1:
    case "DISTRIBUTION_TYPE_STREAM":
      return DistributionType.DISTRIBUTION_TYPE_STREAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DistributionType.UNRECOGNIZED;
  }
}
export function distributionTypeToJSON(object: DistributionType): string {
  switch (object) {
    case DistributionType.DISTRIBUTION_TYPE_INSTANT:
      return "DISTRIBUTION_TYPE_INSTANT";
    case DistributionType.DISTRIBUTION_TYPE_STREAM:
      return "DISTRIBUTION_TYPE_STREAM";
    case DistributionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InteractionType {
  INTERACTION_TYPE_BURN = 0,
  INTERACTION_TYPE_TRANSFER = 1,
  INTERACTION_TYPE_HOLD = 2,
  UNRECOGNIZED = -1,
}
export function interactionTypeFromJSON(object: any): InteractionType {
  switch (object) {
    case 0:
    case "INTERACTION_TYPE_BURN":
      return InteractionType.INTERACTION_TYPE_BURN;
    case 1:
    case "INTERACTION_TYPE_TRANSFER":
      return InteractionType.INTERACTION_TYPE_TRANSFER;
    case 2:
    case "INTERACTION_TYPE_HOLD":
      return InteractionType.INTERACTION_TYPE_HOLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InteractionType.UNRECOGNIZED;
  }
}
export function interactionTypeToJSON(object: InteractionType): string {
  switch (object) {
    case InteractionType.INTERACTION_TYPE_BURN:
      return "INTERACTION_TYPE_BURN";
    case InteractionType.INTERACTION_TYPE_TRANSFER:
      return "INTERACTION_TYPE_TRANSFER";
    case InteractionType.INTERACTION_TYPE_HOLD:
      return "INTERACTION_TYPE_HOLD";
    case InteractionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CampaignStatus {
  CAMPAIGN_STATUS_UNSPECIFIED = 0,
  CAMPAIGN_STATUS_INACTIVE = 1,
  CAMPAIGN_STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}
export function campaignStatusFromJSON(object: any): CampaignStatus {
  switch (object) {
    case 0:
    case "CAMPAIGN_STATUS_UNSPECIFIED":
      return CampaignStatus.CAMPAIGN_STATUS_UNSPECIFIED;
    case 1:
    case "CAMPAIGN_STATUS_INACTIVE":
      return CampaignStatus.CAMPAIGN_STATUS_INACTIVE;
    case 2:
    case "CAMPAIGN_STATUS_ACTIVE":
      return CampaignStatus.CAMPAIGN_STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CampaignStatus.UNRECOGNIZED;
  }
}
export function campaignStatusToJSON(object: CampaignStatus): string {
  switch (object) {
    case CampaignStatus.CAMPAIGN_STATUS_UNSPECIFIED:
      return "CAMPAIGN_STATUS_UNSPECIFIED";
    case CampaignStatus.CAMPAIGN_STATUS_INACTIVE:
      return "CAMPAIGN_STATUS_INACTIVE";
    case CampaignStatus.CAMPAIGN_STATUS_ACTIVE:
      return "CAMPAIGN_STATUS_ACTIVE";
    case CampaignStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ClaimType {
  CLAIM_TYPE_FT = 0,
  CLAIM_TYPE_NFT = 1,
  CLAIM_TYPE_FT_AND_NFT = 2,
  UNRECOGNIZED = -1,
}
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_FT":
      return ClaimType.CLAIM_TYPE_FT;
    case 1:
    case "CLAIM_TYPE_NFT":
      return ClaimType.CLAIM_TYPE_NFT;
    case 2:
    case "CLAIM_TYPE_FT_AND_NFT":
      return ClaimType.CLAIM_TYPE_FT_AND_NFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_FT:
      return "CLAIM_TYPE_FT";
    case ClaimType.CLAIM_TYPE_NFT:
      return "CLAIM_TYPE_NFT";
    case ClaimType.CLAIM_TYPE_FT_AND_NFT:
      return "CLAIM_TYPE_FT_AND_NFT";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Campaign {
  id: bigint;
  name: string;
  description: string;
  startTime: Timestamp;
  endTime: Timestamp;
  creator: string;
  nftDenomId: string;
  maxAllowedClaims: bigint;
  interaction: InteractionType;
  claimType: ClaimType;
  tokensPerClaim: Coin;
  totalTokens: Coin;
  availableTokens: Coin;
  receivedNftIds: string[];
  nftMintDetails?: NFTDetails;
  distribution?: Distribution;
  mintCount: bigint;
  claimCount: bigint;
}
export interface Distribution {
  type: DistributionType;
  streamDuration: Duration;
}
export interface NFTDetails {
  denomId: string;
  name: string;
  description: string;
  mediaUri: string;
  previewUri: string;
  royaltyShare: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  data: string;
  uriHash: string;
  startIndex: bigint;
  nameDelimiter: string;
}
export interface Claim {
  campaignId: bigint;
  address: string;
  nftId: string;
  interaction: InteractionType;
}
function createBaseCampaign(): Campaign {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    creator: "",
    nftDenomId: "",
    maxAllowedClaims: BigInt(0),
    interaction: 0,
    claimType: 0,
    tokensPerClaim: Coin.fromPartial({}),
    totalTokens: Coin.fromPartial({}),
    availableTokens: Coin.fromPartial({}),
    receivedNftIds: [],
    nftMintDetails: undefined,
    distribution: undefined,
    mintCount: BigInt(0),
    claimCount: BigInt(0),
  };
}
export const Campaign = {
  typeUrl: "/OmniFlix.itc.v1.Campaign",
  encode(message: Campaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.nftDenomId !== "") {
      writer.uint32(58).string(message.nftDenomId);
    }
    if (message.maxAllowedClaims !== BigInt(0)) {
      writer.uint32(64).uint64(message.maxAllowedClaims);
    }
    if (message.interaction !== 0) {
      writer.uint32(72).int32(message.interaction);
    }
    if (message.claimType !== 0) {
      writer.uint32(80).int32(message.claimType);
    }
    if (message.tokensPerClaim !== undefined) {
      Coin.encode(message.tokensPerClaim, writer.uint32(90).fork()).ldelim();
    }
    if (message.totalTokens !== undefined) {
      Coin.encode(message.totalTokens, writer.uint32(98).fork()).ldelim();
    }
    if (message.availableTokens !== undefined) {
      Coin.encode(message.availableTokens, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.receivedNftIds) {
      writer.uint32(114).string(v!);
    }
    if (message.nftMintDetails !== undefined) {
      NFTDetails.encode(message.nftMintDetails, writer.uint32(122).fork()).ldelim();
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(130).fork()).ldelim();
    }
    if (message.mintCount !== BigInt(0)) {
      writer.uint32(136).uint64(message.mintCount);
    }
    if (message.claimCount !== BigInt(0)) {
      writer.uint32(144).uint64(message.claimCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Campaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.nftDenomId = reader.string();
          break;
        case 8:
          message.maxAllowedClaims = reader.uint64();
          break;
        case 9:
          message.interaction = reader.int32() as any;
          break;
        case 10:
          message.claimType = reader.int32() as any;
          break;
        case 11:
          message.tokensPerClaim = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.totalTokens = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.availableTokens = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.receivedNftIds.push(reader.string());
          break;
        case 15:
          message.nftMintDetails = NFTDetails.decode(reader, reader.uint32());
          break;
        case 16:
          message.distribution = Distribution.decode(reader, reader.uint32());
          break;
        case 17:
          message.mintCount = reader.uint64();
          break;
        case 18:
          message.claimCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Campaign {
    const obj = createBaseCampaign();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    if (isSet(object.endTime)) obj.endTime = fromJsonTimestamp(object.endTime);
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nftDenomId)) obj.nftDenomId = String(object.nftDenomId);
    if (isSet(object.maxAllowedClaims)) obj.maxAllowedClaims = BigInt(object.maxAllowedClaims.toString());
    if (isSet(object.interaction)) obj.interaction = interactionTypeFromJSON(object.interaction);
    if (isSet(object.claimType)) obj.claimType = claimTypeFromJSON(object.claimType);
    if (isSet(object.tokensPerClaim)) obj.tokensPerClaim = Coin.fromJSON(object.tokensPerClaim);
    if (isSet(object.totalTokens)) obj.totalTokens = Coin.fromJSON(object.totalTokens);
    if (isSet(object.availableTokens)) obj.availableTokens = Coin.fromJSON(object.availableTokens);
    if (Array.isArray(object?.receivedNftIds))
      obj.receivedNftIds = object.receivedNftIds.map((e: any) => String(e));
    if (isSet(object.nftMintDetails)) obj.nftMintDetails = NFTDetails.fromJSON(object.nftMintDetails);
    if (isSet(object.distribution)) obj.distribution = Distribution.fromJSON(object.distribution);
    if (isSet(object.mintCount)) obj.mintCount = BigInt(object.mintCount.toString());
    if (isSet(object.claimCount)) obj.claimCount = BigInt(object.claimCount.toString());
    return obj;
  },
  toJSON(message: Campaign): JsonSafe<Campaign> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftDenomId !== undefined && (obj.nftDenomId = message.nftDenomId);
    message.maxAllowedClaims !== undefined &&
      (obj.maxAllowedClaims = (message.maxAllowedClaims || BigInt(0)).toString());
    message.interaction !== undefined && (obj.interaction = interactionTypeToJSON(message.interaction));
    message.claimType !== undefined && (obj.claimType = claimTypeToJSON(message.claimType));
    message.tokensPerClaim !== undefined &&
      (obj.tokensPerClaim = message.tokensPerClaim ? Coin.toJSON(message.tokensPerClaim) : undefined);
    message.totalTokens !== undefined &&
      (obj.totalTokens = message.totalTokens ? Coin.toJSON(message.totalTokens) : undefined);
    message.availableTokens !== undefined &&
      (obj.availableTokens = message.availableTokens ? Coin.toJSON(message.availableTokens) : undefined);
    if (message.receivedNftIds) {
      obj.receivedNftIds = message.receivedNftIds.map((e) => e);
    } else {
      obj.receivedNftIds = [];
    }
    message.nftMintDetails !== undefined &&
      (obj.nftMintDetails = message.nftMintDetails ? NFTDetails.toJSON(message.nftMintDetails) : undefined);
    message.distribution !== undefined &&
      (obj.distribution = message.distribution ? Distribution.toJSON(message.distribution) : undefined);
    message.mintCount !== undefined && (obj.mintCount = (message.mintCount || BigInt(0)).toString());
    message.claimCount !== undefined && (obj.claimCount = (message.claimCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Campaign>, I>>(object: I): Campaign {
    const message = createBaseCampaign();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Timestamp.fromPartial(object.endTime);
    }
    message.creator = object.creator ?? "";
    message.nftDenomId = object.nftDenomId ?? "";
    if (object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null) {
      message.maxAllowedClaims = BigInt(object.maxAllowedClaims.toString());
    }
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    if (object.tokensPerClaim !== undefined && object.tokensPerClaim !== null) {
      message.tokensPerClaim = Coin.fromPartial(object.tokensPerClaim);
    }
    if (object.totalTokens !== undefined && object.totalTokens !== null) {
      message.totalTokens = Coin.fromPartial(object.totalTokens);
    }
    if (object.availableTokens !== undefined && object.availableTokens !== null) {
      message.availableTokens = Coin.fromPartial(object.availableTokens);
    }
    message.receivedNftIds = object.receivedNftIds?.map((e) => e) || [];
    if (object.nftMintDetails !== undefined && object.nftMintDetails !== null) {
      message.nftMintDetails = NFTDetails.fromPartial(object.nftMintDetails);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromPartial(object.distribution);
    }
    if (object.mintCount !== undefined && object.mintCount !== null) {
      message.mintCount = BigInt(object.mintCount.toString());
    }
    if (object.claimCount !== undefined && object.claimCount !== null) {
      message.claimCount = BigInt(object.claimCount.toString());
    }
    return message;
  },
};
function createBaseDistribution(): Distribution {
  return {
    type: 0,
    streamDuration: Duration.fromPartial({}),
  };
}
export const Distribution = {
  typeUrl: "/OmniFlix.itc.v1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.streamDuration !== undefined) {
      Duration.encode(message.streamDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.streamDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution {
    const obj = createBaseDistribution();
    if (isSet(object.type)) obj.type = distributionTypeFromJSON(object.type);
    if (isSet(object.streamDuration)) obj.streamDuration = Duration.fromJSON(object.streamDuration);
    return obj;
  },
  toJSON(message: Distribution): JsonSafe<Distribution> {
    const obj: any = {};
    message.type !== undefined && (obj.type = distributionTypeToJSON(message.type));
    message.streamDuration !== undefined &&
      (obj.streamDuration = message.streamDuration ? Duration.toJSON(message.streamDuration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Distribution>, I>>(object: I): Distribution {
    const message = createBaseDistribution();
    message.type = object.type ?? 0;
    if (object.streamDuration !== undefined && object.streamDuration !== null) {
      message.streamDuration = Duration.fromPartial(object.streamDuration);
    }
    return message;
  },
};
function createBaseNFTDetails(): NFTDetails {
  return {
    denomId: "",
    name: "",
    description: "",
    mediaUri: "",
    previewUri: "",
    royaltyShare: "",
    transferable: false,
    extensible: false,
    nsfw: false,
    data: "",
    uriHash: "",
    startIndex: BigInt(0),
    nameDelimiter: "",
  };
}
export const NFTDetails = {
  typeUrl: "/OmniFlix.itc.v1.NFTDetails",
  encode(message: NFTDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(34).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(50).string(message.royaltyShare);
    }
    if (message.transferable === true) {
      writer.uint32(56).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(64).bool(message.extensible);
    }
    if (message.nsfw === true) {
      writer.uint32(72).bool(message.nsfw);
    }
    if (message.data !== "") {
      writer.uint32(82).string(message.data);
    }
    if (message.uriHash !== "") {
      writer.uint32(90).string(message.uriHash);
    }
    if (message.startIndex !== BigInt(0)) {
      writer.uint32(96).uint64(message.startIndex);
    }
    if (message.nameDelimiter !== "") {
      writer.uint32(106).string(message.nameDelimiter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NFTDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.mediaUri = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        case 6:
          message.royaltyShare = reader.string();
          break;
        case 7:
          message.transferable = reader.bool();
          break;
        case 8:
          message.extensible = reader.bool();
          break;
        case 9:
          message.nsfw = reader.bool();
          break;
        case 10:
          message.data = reader.string();
          break;
        case 11:
          message.uriHash = reader.string();
          break;
        case 12:
          message.startIndex = reader.uint64();
          break;
        case 13:
          message.nameDelimiter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NFTDetails {
    const obj = createBaseNFTDetails();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.mediaUri)) obj.mediaUri = String(object.mediaUri);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.royaltyShare)) obj.royaltyShare = String(object.royaltyShare);
    if (isSet(object.transferable)) obj.transferable = Boolean(object.transferable);
    if (isSet(object.extensible)) obj.extensible = Boolean(object.extensible);
    if (isSet(object.nsfw)) obj.nsfw = Boolean(object.nsfw);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.startIndex)) obj.startIndex = BigInt(object.startIndex.toString());
    if (isSet(object.nameDelimiter)) obj.nameDelimiter = String(object.nameDelimiter);
    return obj;
  },
  toJSON(message: NFTDetails): JsonSafe<NFTDetails> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.mediaUri !== undefined && (obj.mediaUri = message.mediaUri);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.royaltyShare !== undefined && (obj.royaltyShare = message.royaltyShare);
    message.transferable !== undefined && (obj.transferable = message.transferable);
    message.extensible !== undefined && (obj.extensible = message.extensible);
    message.nsfw !== undefined && (obj.nsfw = message.nsfw);
    message.data !== undefined && (obj.data = message.data);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.startIndex !== undefined && (obj.startIndex = (message.startIndex || BigInt(0)).toString());
    message.nameDelimiter !== undefined && (obj.nameDelimiter = message.nameDelimiter);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NFTDetails>, I>>(object: I): NFTDetails {
    const message = createBaseNFTDetails();
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    message.royaltyShare = object.royaltyShare ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.nsfw = object.nsfw ?? false;
    message.data = object.data ?? "";
    message.uriHash = object.uriHash ?? "";
    if (object.startIndex !== undefined && object.startIndex !== null) {
      message.startIndex = BigInt(object.startIndex.toString());
    }
    message.nameDelimiter = object.nameDelimiter ?? "";
    return message;
  },
};
function createBaseClaim(): Claim {
  return {
    campaignId: BigInt(0),
    address: "",
    nftId: "",
    interaction: 0,
  };
}
export const Claim = {
  typeUrl: "/OmniFlix.itc.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.interaction !== 0) {
      writer.uint32(32).int32(message.interaction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Claim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
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
          message.nftId = reader.string();
          break;
        case 4:
          message.interaction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Claim {
    const obj = createBaseClaim();
    if (isSet(object.campaignId)) obj.campaignId = BigInt(object.campaignId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.nftId)) obj.nftId = String(object.nftId);
    if (isSet(object.interaction)) obj.interaction = interactionTypeFromJSON(object.interaction);
    return obj;
  },
  toJSON(message: Claim): JsonSafe<Claim> {
    const obj: any = {};
    message.campaignId !== undefined && (obj.campaignId = (message.campaignId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.interaction !== undefined && (obj.interaction = interactionTypeToJSON(message.interaction));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Claim>, I>>(object: I): Claim {
    const message = createBaseClaim();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.address = object.address ?? "";
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    return message;
  },
};
