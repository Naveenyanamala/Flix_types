/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.alloc.v1beta1";
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface DistributionProportions {
  stakingRewards: string;
  nftIncentives: string;
  nodeHostsIncentives: string;
  developerRewards: string;
  communityPool: string;
}
export interface Params {
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions: DistributionProportions;
  /** address to receive developer rewards */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /** address to receive nft incentives */
  weightedNftIncentivesReceivers: WeightedAddress[];
  /** address to receive node host incentives */
  weightedNodeHostsIncentivesReceivers: WeightedAddress[];
}
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: "",
  };
}
export const WeightedAddress = {
  typeUrl: "/OmniFlix.alloc.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedAddress {
    const obj = createBaseWeightedAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedAddress): JsonSafe<WeightedAddress> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WeightedAddress>, I>>(object: I): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    stakingRewards: "",
    nftIncentives: "",
    nodeHostsIncentives: "",
    developerRewards: "",
    communityPool: "",
  };
}
export const DistributionProportions = {
  typeUrl: "/OmniFlix.alloc.v1beta1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.nftIncentives !== "") {
      writer.uint32(18).string(message.nftIncentives);
    }
    if (message.nodeHostsIncentives !== "") {
      writer.uint32(26).string(message.nodeHostsIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(34).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(42).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = reader.string();
          break;
        case 2:
          message.nftIncentives = reader.string();
          break;
        case 3:
          message.nodeHostsIncentives = reader.string();
          break;
        case 4:
          message.developerRewards = reader.string();
          break;
        case 5:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionProportions {
    const obj = createBaseDistributionProportions();
    if (isSet(object.stakingRewards)) obj.stakingRewards = String(object.stakingRewards);
    if (isSet(object.nftIncentives)) obj.nftIncentives = String(object.nftIncentives);
    if (isSet(object.nodeHostsIncentives)) obj.nodeHostsIncentives = String(object.nodeHostsIncentives);
    if (isSet(object.developerRewards)) obj.developerRewards = String(object.developerRewards);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: DistributionProportions): JsonSafe<DistributionProportions> {
    const obj: any = {};
    message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
    message.nftIncentives !== undefined && (obj.nftIncentives = message.nftIncentives);
    message.nodeHostsIncentives !== undefined && (obj.nodeHostsIncentives = message.nodeHostsIncentives);
    message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DistributionProportions>, I>>(object: I): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.stakingRewards = object.stakingRewards ?? "";
    message.nftIncentives = object.nftIncentives ?? "";
    message.nodeHostsIncentives = object.nodeHostsIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    weightedNftIncentivesReceivers: [],
    weightedNodeHostsIncentivesReceivers: [],
  };
}
export const Params = {
  typeUrl: "/OmniFlix.alloc.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.weightedNftIncentivesReceivers) {
      WeightedAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.weightedNodeHostsIncentivesReceivers) {
      WeightedAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 2:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 3:
          message.weightedNftIncentivesReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 4:
          message.weightedNodeHostsIncentivesReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.distributionProportions))
      obj.distributionProportions = DistributionProportions.fromJSON(object.distributionProportions);
    if (Array.isArray(object?.weightedDeveloperRewardsReceivers))
      obj.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers.map((e: any) =>
        WeightedAddress.fromJSON(e),
      );
    if (Array.isArray(object?.weightedNftIncentivesReceivers))
      obj.weightedNftIncentivesReceivers = object.weightedNftIncentivesReceivers.map((e: any) =>
        WeightedAddress.fromJSON(e),
      );
    if (Array.isArray(object?.weightedNodeHostsIncentivesReceivers))
      obj.weightedNodeHostsIncentivesReceivers = object.weightedNodeHostsIncentivesReceivers.map((e: any) =>
        WeightedAddress.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.distributionProportions !== undefined &&
      (obj.distributionProportions = message.distributionProportions
        ? DistributionProportions.toJSON(message.distributionProportions)
        : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map((e) =>
        e ? WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.weightedDeveloperRewardsReceivers = [];
    }
    if (message.weightedNftIncentivesReceivers) {
      obj.weightedNftIncentivesReceivers = message.weightedNftIncentivesReceivers.map((e) =>
        e ? WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.weightedNftIncentivesReceivers = [];
    }
    if (message.weightedNodeHostsIncentivesReceivers) {
      obj.weightedNodeHostsIncentivesReceivers = message.weightedNodeHostsIncentivesReceivers.map((e) =>
        e ? WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.weightedNodeHostsIncentivesReceivers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromPartial(object.distributionProportions);
    }
    message.weightedDeveloperRewardsReceivers =
      object.weightedDeveloperRewardsReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.weightedNftIncentivesReceivers =
      object.weightedNftIncentivesReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.weightedNodeHostsIncentivesReceivers =
      object.weightedNodeHostsIncentivesReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
