/* eslint-disable */
import { DecCoin, Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.distribution.v1beta1";
/** Params defines the set of params for the distribution module. */
export interface Params {
  communityTax: string;
  /**
   * Deprecated: The base_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   */
  /** @deprecated */
  baseProposerReward: string;
  /**
   * Deprecated: The bonus_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   */
  /** @deprecated */
  bonusProposerReward: string;
  withdrawAddrEnabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
  cumulativeRewardRatio: DecCoin[];
  referenceCount: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: bigint;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
  validatorPeriod: bigint;
  fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
  validatorSlashEvents: ValidatorSlashEvent[];
}
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  communityPool: DecCoin[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
/** @deprecated */
export interface CommunityPoolSpendProposal {
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
  previousPeriod: bigint;
  stake: string;
  height: bigint;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
  validatorAddress: string;
  reward: DecCoin[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
function createBaseParams(): Params {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false,
  };
}
export const Params = {
  typeUrl: "/cosmos.distribution.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.communityTax !== "") {
      writer.uint32(10).string(message.communityTax);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(message.baseProposerReward);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(message.bonusProposerReward);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
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
          message.communityTax = reader.string();
          break;
        case 2:
          message.baseProposerReward = reader.string();
          break;
        case 3:
          message.bonusProposerReward = reader.string();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
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
    if (isSet(object.communityTax)) obj.communityTax = String(object.communityTax);
    if (isSet(object.baseProposerReward)) obj.baseProposerReward = String(object.baseProposerReward);
    if (isSet(object.bonusProposerReward)) obj.bonusProposerReward = String(object.bonusProposerReward);
    if (isSet(object.withdrawAddrEnabled)) obj.withdrawAddrEnabled = Boolean(object.withdrawAddrEnabled);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.communityTax !== undefined && (obj.communityTax = message.communityTax);
    message.baseProposerReward !== undefined && (obj.baseProposerReward = message.baseProposerReward);
    message.bonusProposerReward !== undefined && (obj.bonusProposerReward = message.bonusProposerReward);
    message.withdrawAddrEnabled !== undefined && (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.communityTax = object.communityTax ?? "";
    message.baseProposerReward = object.baseProposerReward ?? "";
    message.bonusProposerReward = object.bonusProposerReward ?? "";
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    return message;
  },
};
function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0,
  };
}
export const ValidatorHistoricalRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  encode(message: ValidatorHistoricalRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewards {
    const obj = createBaseValidatorHistoricalRewards();
    if (Array.isArray(object?.cumulativeRewardRatio))
      obj.cumulativeRewardRatio = object.cumulativeRewardRatio.map((e: any) => DecCoin.fromJSON(e));
    if (isSet(object.referenceCount)) obj.referenceCount = Number(object.referenceCount);
    return obj;
  },
  toJSON(message: ValidatorHistoricalRewards): JsonSafe<ValidatorHistoricalRewards> {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map((e) =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.cumulativeRewardRatio = [];
    }
    message.referenceCount !== undefined && (obj.referenceCount = Math.round(message.referenceCount));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorHistoricalRewards>, I>>(
    object: I,
  ): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map((e) => DecCoin.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },
};
function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    rewards: [],
    period: BigInt(0),
  };
}
export const ValidatorCurrentRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  encode(message: ValidatorCurrentRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewards {
    const obj = createBaseValidatorCurrentRewards();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DecCoin.fromJSON(e));
    if (isSet(object.period)) obj.period = BigInt(object.period.toString());
    return obj;
  },
  toJSON(message: ValidatorCurrentRewards): JsonSafe<ValidatorCurrentRewards> {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorCurrentRewards>, I>>(object: I): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period.toString());
    }
    return message;
  },
};
function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    commission: [],
  };
}
export const ValidatorAccumulatedCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  encode(
    message: ValidatorAccumulatedCommission,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommission {
    const obj = createBaseValidatorAccumulatedCommission();
    if (Array.isArray(object?.commission))
      obj.commission = object.commission.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorAccumulatedCommission): JsonSafe<ValidatorAccumulatedCommission> {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorAccumulatedCommission>, I>>(
    object: I,
  ): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    rewards: [],
  };
}
export const ValidatorOutstandingRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  encode(message: ValidatorOutstandingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewards {
    const obj = createBaseValidatorOutstandingRewards();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorOutstandingRewards): JsonSafe<ValidatorOutstandingRewards> {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorOutstandingRewards>, I>>(
    object: I,
  ): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    validatorPeriod: BigInt(0),
    fraction: "",
  };
}
export const ValidatorSlashEvent = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
  encode(message: ValidatorSlashEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = reader.uint64();
          break;
        case 2:
          message.fraction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvent {
    const obj = createBaseValidatorSlashEvent();
    if (isSet(object.validatorPeriod)) obj.validatorPeriod = BigInt(object.validatorPeriod.toString());
    if (isSet(object.fraction)) obj.fraction = String(object.fraction);
    return obj;
  },
  toJSON(message: ValidatorSlashEvent): JsonSafe<ValidatorSlashEvent> {
    const obj: any = {};
    message.validatorPeriod !== undefined &&
      (obj.validatorPeriod = (message.validatorPeriod || BigInt(0)).toString());
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvent>, I>>(object: I): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    if (object.validatorPeriod !== undefined && object.validatorPeriod !== null) {
      message.validatorPeriod = BigInt(object.validatorPeriod.toString());
    }
    message.fraction = object.fraction ?? "";
    return message;
  },
};
function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    validatorSlashEvents: [],
  };
}
export const ValidatorSlashEvents = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
  encode(message: ValidatorSlashEvents, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEvents {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvents {
    const obj = createBaseValidatorSlashEvents();
    if (Array.isArray(object?.validatorSlashEvents))
      obj.validatorSlashEvents = object.validatorSlashEvents.map((e: any) => ValidatorSlashEvent.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorSlashEvents): JsonSafe<ValidatorSlashEvents> {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map((e) =>
        e ? ValidatorSlashEvent.toJSON(e) : undefined,
      );
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvents>, I>>(object: I): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents =
      object.validatorSlashEvents?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  },
};
function createBaseFeePool(): FeePool {
  return {
    communityPool: [],
  };
}
export const FeePool = {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool",
  encode(message: FeePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.communityPool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeePool {
    const obj = createBaseFeePool();
    if (Array.isArray(object?.communityPool))
      obj.communityPool = object.communityPool.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: FeePool): JsonSafe<FeePool> {
    const obj: any = {};
    if (message.communityPool) {
      obj.communityPool = message.communityPool.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.communityPool = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeePool>, I>>(object: I): FeePool {
    const message = createBaseFeePool();
    message.communityPool = object.communityPool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: [],
  };
}
export const CommunityPoolSpendProposal = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  encode(message: CommunityPoolSpendProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommunityPoolSpendProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposal {
    const obj = createBaseCommunityPoolSpendProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: CommunityPoolSpendProposal): JsonSafe<CommunityPoolSpendProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposal>, I>>(
    object: I,
  ): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previousPeriod: BigInt(0),
    stake: "",
    height: BigInt(0),
  };
}
export const DelegatorStartingInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
  encode(message: DelegatorStartingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.previousPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64();
          break;
        case 2:
          message.stake = reader.string();
          break;
        case 3:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfo {
    const obj = createBaseDelegatorStartingInfo();
    if (isSet(object.previousPeriod)) obj.previousPeriod = BigInt(object.previousPeriod.toString());
    if (isSet(object.stake)) obj.stake = String(object.stake);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: DelegatorStartingInfo): JsonSafe<DelegatorStartingInfo> {
    const obj: any = {};
    message.previousPeriod !== undefined &&
      (obj.previousPeriod = (message.previousPeriod || BigInt(0)).toString());
    message.stake !== undefined && (obj.stake = message.stake);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegatorStartingInfo>, I>>(object: I): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    if (object.previousPeriod !== undefined && object.previousPeriod !== null) {
      message.previousPeriod = BigInt(object.previousPeriod.toString());
    }
    message.stake = object.stake ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validatorAddress: "",
    reward: [],
  };
}
export const DelegationDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
  encode(message: DelegationDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationDelegatorReward {
    const obj = createBaseDelegationDelegatorReward();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (Array.isArray(object?.reward)) obj.reward = object.reward.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: DelegationDelegatorReward): JsonSafe<DelegationDelegatorReward> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.reward) {
      obj.reward = message.reward.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegationDelegatorReward>, I>>(
    object: I,
  ): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: "",
  };
}
export const CommunityPoolSpendProposalWithDeposit = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  encode(
    message: CommunityPoolSpendProposalWithDeposit,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
    const obj = createBaseCommunityPoolSpendProposalWithDeposit();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.deposit)) obj.deposit = String(object.deposit);
    return obj;
  },
  toJSON(message: CommunityPoolSpendProposalWithDeposit): JsonSafe<CommunityPoolSpendProposalWithDeposit> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposalWithDeposit>, I>>(
    object: I,
  ): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
};
