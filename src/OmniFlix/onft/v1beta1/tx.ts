/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress, Metadata } from "./onft";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.onft.v1beta1";
export interface MsgCreateDenom {
  id: string;
  symbol: string;
  name: string;
  description: string;
  previewUri: string;
  schema: string;
  sender: string;
  creationFee: Coin;
  uri: string;
  uriHash: string;
  data: string;
  royaltyReceivers: WeightedAddress[];
}
export interface MsgCreateDenomResponse {}
export interface MsgUpdateDenom {
  id: string;
  name: string;
  description: string;
  previewUri: string;
  sender: string;
  royaltyReceivers: WeightedAddress[];
}
export interface MsgUpdateDenomResponse {}
export interface MsgPurgeDenom {
  id: string;
  sender: string;
}
export interface MsgPurgeDenomResponse {}
export interface MsgTransferDenom {
  id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferDenomResponse {}
export interface MsgMintONFT {
  id: string;
  denomId: string;
  metadata: Metadata;
  data: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  royaltyShare: string;
  sender: string;
  recipient: string;
}
export interface MsgMintONFTResponse {}
export interface MsgTransferONFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferONFTResponse {}
export interface MsgBurnONFT {
  id: string;
  denomId: string;
  sender: string;
}
export interface MsgBurnONFTResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the onft module parameters to update.
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
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    id: "",
    symbol: "",
    name: "",
    description: "",
    previewUri: "",
    schema: "",
    sender: "",
    creationFee: Coin.fromPartial({}),
    uri: "",
    uriHash: "",
    data: "",
    royaltyReceivers: [],
  };
}
export const MsgCreateDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.schema !== "") {
      writer.uint32(50).string(message.schema);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(66).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(74).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(82).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(90).string(message.data);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        case 6:
          message.schema = reader.string();
          break;
        case 7:
          message.sender = reader.string();
          break;
        case 8:
          message.creationFee = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.uri = reader.string();
          break;
        case 10:
          message.uriHash = reader.string();
          break;
        case 11:
          message.data = reader.string();
          break;
        case 12:
          message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenom {
    const obj = createBaseMsgCreateDenom();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.symbol)) obj.symbol = String(object.symbol);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.schema)) obj.schema = String(object.schema);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.creationFee)) obj.creationFee = Coin.fromJSON(object.creationFee);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = String(object.data);
    if (Array.isArray(object?.royaltyReceivers))
      obj.royaltyReceivers = object.royaltyReceivers.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgCreateDenom): JsonSafe<MsgCreateDenom> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.schema !== undefined && (obj.schema = message.schema);
    message.sender !== undefined && (obj.sender = message.sender);
    message.creationFee !== undefined &&
      (obj.creationFee = message.creationFee ? Coin.toJSON(message.creationFee) : undefined);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined && (obj.data = message.data);
    if (message.royaltyReceivers) {
      obj.royaltyReceivers = message.royaltyReceivers.map((e) => (e ? WeightedAddress.toJSON(e) : undefined));
    } else {
      obj.royaltyReceivers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.id = object.id ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.schema = object.schema ?? "";
    message.sender = object.sender ?? "";
    if (object.creationFee !== undefined && object.creationFee !== null) {
      message.creationFee = Coin.fromPartial(object.creationFee);
    }
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}
export const MsgCreateDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
  encode(_: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
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
  fromJSON(_: any): MsgCreateDenomResponse {
    const obj = createBaseMsgCreateDenomResponse();
    return obj;
  },
  toJSON(_: MsgCreateDenomResponse): JsonSafe<MsgCreateDenomResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(_: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
};
function createBaseMsgUpdateDenom(): MsgUpdateDenom {
  return {
    id: "",
    name: "",
    description: "",
    previewUri: "",
    sender: "",
    royaltyReceivers: [],
  };
}
export const MsgUpdateDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
  encode(message: MsgUpdateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        case 6:
          message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateDenom {
    const obj = createBaseMsgUpdateDenom();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.royaltyReceivers))
      obj.royaltyReceivers = object.royaltyReceivers.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgUpdateDenom): JsonSafe<MsgUpdateDenom> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.royaltyReceivers) {
      obj.royaltyReceivers = message.royaltyReceivers.map((e) => (e ? WeightedAddress.toJSON(e) : undefined));
    } else {
      obj.royaltyReceivers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(object: I): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.sender = object.sender ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
  return {};
}
export const MsgUpdateDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
  encode(_: MsgUpdateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomResponse();
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
  fromJSON(_: any): MsgUpdateDenomResponse {
    const obj = createBaseMsgUpdateDenomResponse();
    return obj;
  },
  toJSON(_: MsgUpdateDenomResponse): JsonSafe<MsgUpdateDenomResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(_: I): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
};
function createBaseMsgPurgeDenom(): MsgPurgeDenom {
  return {
    id: "",
    sender: "",
  };
}
export const MsgPurgeDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
  encode(message: MsgPurgeDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurgeDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurgeDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPurgeDenom {
    const obj = createBaseMsgPurgeDenom();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgPurgeDenom): JsonSafe<MsgPurgeDenom> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurgeDenom>, I>>(object: I): MsgPurgeDenom {
    const message = createBaseMsgPurgeDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgPurgeDenomResponse(): MsgPurgeDenomResponse {
  return {};
}
export const MsgPurgeDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse",
  encode(_: MsgPurgeDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurgeDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurgeDenomResponse();
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
  fromJSON(_: any): MsgPurgeDenomResponse {
    const obj = createBaseMsgPurgeDenomResponse();
    return obj;
  },
  toJSON(_: MsgPurgeDenomResponse): JsonSafe<MsgPurgeDenomResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurgeDenomResponse>, I>>(_: I): MsgPurgeDenomResponse {
    const message = createBaseMsgPurgeDenomResponse();
    return message;
  },
};
function createBaseMsgTransferDenom(): MsgTransferDenom {
  return {
    id: "",
    sender: "",
    recipient: "",
  };
}
export const MsgTransferDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
  encode(message: MsgTransferDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferDenom {
    const obj = createBaseMsgTransferDenom();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    return obj;
  },
  toJSON(message: MsgTransferDenom): JsonSafe<MsgTransferDenom> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferDenom>, I>>(object: I): MsgTransferDenom {
    const message = createBaseMsgTransferDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};
function createBaseMsgTransferDenomResponse(): MsgTransferDenomResponse {
  return {};
}
export const MsgTransferDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
  encode(_: MsgTransferDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenomResponse();
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
  fromJSON(_: any): MsgTransferDenomResponse {
    const obj = createBaseMsgTransferDenomResponse();
    return obj;
  },
  toJSON(_: MsgTransferDenomResponse): JsonSafe<MsgTransferDenomResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferDenomResponse>, I>>(_: I): MsgTransferDenomResponse {
    const message = createBaseMsgTransferDenomResponse();
    return message;
  },
};
function createBaseMsgMintONFT(): MsgMintONFT {
  return {
    id: "",
    denomId: "",
    metadata: Metadata.fromPartial({}),
    data: "",
    transferable: false,
    extensible: false,
    nsfw: false,
    royaltyShare: "",
    sender: "",
    recipient: "",
  };
}
export const MsgMintONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
  encode(message: MsgMintONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.nsfw === true) {
      writer.uint32(56).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(66).string(message.royaltyShare);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(82).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.transferable = reader.bool();
          break;
        case 6:
          message.extensible = reader.bool();
          break;
        case 7:
          message.nsfw = reader.bool();
          break;
        case 8:
          message.royaltyShare = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMintONFT {
    const obj = createBaseMsgMintONFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.metadata)) obj.metadata = Metadata.fromJSON(object.metadata);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.transferable)) obj.transferable = Boolean(object.transferable);
    if (isSet(object.extensible)) obj.extensible = Boolean(object.extensible);
    if (isSet(object.nsfw)) obj.nsfw = Boolean(object.nsfw);
    if (isSet(object.royaltyShare)) obj.royaltyShare = String(object.royaltyShare);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    return obj;
  },
  toJSON(message: MsgMintONFT): JsonSafe<MsgMintONFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.data !== undefined && (obj.data = message.data);
    message.transferable !== undefined && (obj.transferable = message.transferable);
    message.extensible !== undefined && (obj.extensible = message.extensible);
    message.nsfw !== undefined && (obj.nsfw = message.nsfw);
    message.royaltyShare !== undefined && (obj.royaltyShare = message.royaltyShare);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintONFT>, I>>(object: I): MsgMintONFT {
    const message = createBaseMsgMintONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    message.data = object.data ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};
function createBaseMsgMintONFTResponse(): MsgMintONFTResponse {
  return {};
}
export const MsgMintONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
  encode(_: MsgMintONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintONFTResponse();
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
  fromJSON(_: any): MsgMintONFTResponse {
    const obj = createBaseMsgMintONFTResponse();
    return obj;
  },
  toJSON(_: MsgMintONFTResponse): JsonSafe<MsgMintONFTResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintONFTResponse>, I>>(_: I): MsgMintONFTResponse {
    const message = createBaseMsgMintONFTResponse();
    return message;
  },
};
function createBaseMsgTransferONFT(): MsgTransferONFT {
  return {
    id: "",
    denomId: "",
    sender: "",
    recipient: "",
  };
}
export const MsgTransferONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
  encode(message: MsgTransferONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferONFT {
    const obj = createBaseMsgTransferONFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    return obj;
  },
  toJSON(message: MsgTransferONFT): JsonSafe<MsgTransferONFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferONFT>, I>>(object: I): MsgTransferONFT {
    const message = createBaseMsgTransferONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};
function createBaseMsgTransferONFTResponse(): MsgTransferONFTResponse {
  return {};
}
export const MsgTransferONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
  encode(_: MsgTransferONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferONFTResponse();
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
  fromJSON(_: any): MsgTransferONFTResponse {
    const obj = createBaseMsgTransferONFTResponse();
    return obj;
  },
  toJSON(_: MsgTransferONFTResponse): JsonSafe<MsgTransferONFTResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferONFTResponse>, I>>(_: I): MsgTransferONFTResponse {
    const message = createBaseMsgTransferONFTResponse();
    return message;
  },
};
function createBaseMsgBurnONFT(): MsgBurnONFT {
  return {
    id: "",
    denomId: "",
    sender: "",
  };
}
export const MsgBurnONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
  encode(message: MsgBurnONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurnONFT {
    const obj = createBaseMsgBurnONFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgBurnONFT): JsonSafe<MsgBurnONFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnONFT>, I>>(object: I): MsgBurnONFT {
    const message = createBaseMsgBurnONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgBurnONFTResponse(): MsgBurnONFTResponse {
  return {};
}
export const MsgBurnONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
  encode(_: MsgBurnONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnONFTResponse();
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
  fromJSON(_: any): MsgBurnONFTResponse {
    const obj = createBaseMsgBurnONFTResponse();
    return obj;
  },
  toJSON(_: MsgBurnONFTResponse): JsonSafe<MsgBurnONFTResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnONFTResponse>, I>>(_: I): MsgBurnONFTResponse {
    const message = createBaseMsgBurnONFTResponse();
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
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
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
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse",
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
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
  PurgeDenom(request: MsgPurgeDenom): Promise<MsgPurgeDenomResponse>;
  MintONFT(request: MsgMintONFT): Promise<MsgMintONFTResponse>;
  TransferONFT(request: MsgTransferONFT): Promise<MsgTransferONFTResponse>;
  BurnONFT(request: MsgBurnONFT): Promise<MsgBurnONFTResponse>;
  /**
   * UpdateParams defines a governance operation for updating the onft module
   * parameters. The authority is hard-coded to the onft module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDenom = this.CreateDenom.bind(this);
    this.UpdateDenom = this.UpdateDenom.bind(this);
    this.TransferDenom = this.TransferDenom.bind(this);
    this.PurgeDenom = this.PurgeDenom.bind(this);
    this.MintONFT = this.MintONFT.bind(this);
    this.TransferONFT = this.TransferONFT.bind(this);
    this.BurnONFT = this.BurnONFT.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "CreateDenom", data);
    return promise.then((data) => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  }
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "UpdateDenom", data);
    return promise.then((data) => MsgUpdateDenomResponse.decode(new BinaryReader(data)));
  }
  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse> {
    const data = MsgTransferDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "TransferDenom", data);
    return promise.then((data) => MsgTransferDenomResponse.decode(new BinaryReader(data)));
  }
  PurgeDenom(request: MsgPurgeDenom): Promise<MsgPurgeDenomResponse> {
    const data = MsgPurgeDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "PurgeDenom", data);
    return promise.then((data) => MsgPurgeDenomResponse.decode(new BinaryReader(data)));
  }
  MintONFT(request: MsgMintONFT): Promise<MsgMintONFTResponse> {
    const data = MsgMintONFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "MintONFT", data);
    return promise.then((data) => MsgMintONFTResponse.decode(new BinaryReader(data)));
  }
  TransferONFT(request: MsgTransferONFT): Promise<MsgTransferONFTResponse> {
    const data = MsgTransferONFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "TransferONFT", data);
    return promise.then((data) => MsgTransferONFTResponse.decode(new BinaryReader(data)));
  }
  BurnONFT(request: MsgBurnONFT): Promise<MsgBurnONFTResponse> {
    const data = MsgBurnONFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "BurnONFT", data);
    return promise.then((data) => MsgBurnONFTResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
