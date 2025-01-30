/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "OmniFlix.onft.v1beta1";
/** Collection */
export interface Collection {
  denom: Denom;
  onfts: ONFT[];
}
export interface IDCollection {
  denomId: string;
  onftIds: string[];
}
export interface Denom {
  id: string;
  symbol: string;
  name: string;
  schema: string;
  creator: string;
  description: string;
  previewUri: string;
  uri: string;
  uriHash: string;
  data: string;
  royaltyReceivers: WeightedAddress[];
}
export interface DenomMetadata {
  creator: string;
  schema: string;
  description: string;
  previewUri: string;
  data: string;
  uriHash: string;
  royaltyReceivers: WeightedAddress[];
}
/** ASSET or ONFT */
export interface ONFT {
  id: string;
  metadata: Metadata;
  data: string;
  owner: string;
  transferable: boolean;
  extensible: boolean;
  createdAt: Timestamp;
  nsfw: boolean;
  royaltyShare: string;
}
export interface Metadata {
  name: string;
  description: string;
  mediaUri: string;
  previewUri: string;
  uriHash: string;
}
export interface ONFTMetadata {
  name: string;
  description: string;
  previewUri: string;
  data: string;
  transferable: boolean;
  extensible: boolean;
  createdAt: Timestamp;
  nsfw: boolean;
  royaltyShare: string;
  uriHash: string;
}
export interface Owner {
  address: string;
  idCollections: IDCollection[];
}
export interface WeightedAddress {
  address: string;
  weight: string;
}
function createBaseCollection(): Collection {
  return {
    denom: Denom.fromPartial({}),
    onfts: [],
  };
}
export const Collection = {
  typeUrl: "/OmniFlix.onft.v1beta1.Collection",
  encode(message: Collection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.onfts) {
      ONFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Collection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
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
  fromJSON(object: any): Collection {
    const obj = createBaseCollection();
    if (isSet(object.denom)) obj.denom = Denom.fromJSON(object.denom);
    if (Array.isArray(object?.onfts)) obj.onfts = object.onfts.map((e: any) => ONFT.fromJSON(e));
    return obj;
  },
  toJSON(message: Collection): JsonSafe<Collection> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.onfts) {
      obj.onfts = message.onfts.map((e) => (e ? ONFT.toJSON(e) : undefined));
    } else {
      obj.onfts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(object: I): Collection {
    const message = createBaseCollection();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    }
    message.onfts = object.onfts?.map((e) => ONFT.fromPartial(e)) || [];
    return message;
  },
};
function createBaseIDCollection(): IDCollection {
  return {
    denomId: "",
    onftIds: [],
  };
}
export const IDCollection = {
  typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
  encode(message: IDCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.onftIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IDCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.onftIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IDCollection {
    const obj = createBaseIDCollection();
    if (isSet(object.denomId)) obj.denomId = String(object.denomId);
    if (Array.isArray(object?.onftIds)) obj.onftIds = object.onftIds.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: IDCollection): JsonSafe<IDCollection> {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    if (message.onftIds) {
      obj.onftIds = message.onftIds.map((e) => e);
    } else {
      obj.onftIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IDCollection>, I>>(object: I): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.onftIds = object.onftIds?.map((e) => e) || [];
    return message;
  },
};
function createBaseDenom(): Denom {
  return {
    id: "",
    symbol: "",
    name: "",
    schema: "",
    creator: "",
    description: "",
    previewUri: "",
    uri: "",
    uriHash: "",
    data: "",
    royaltyReceivers: [],
  };
}
export const Denom = {
  typeUrl: "/OmniFlix.onft.v1beta1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(34).string(message.schema);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(58).string(message.previewUri);
    }
    if (message.uri !== "") {
      writer.uint32(66).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(74).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(82).string(message.data);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
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
          message.schema = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.previewUri = reader.string();
          break;
        case 8:
          message.uri = reader.string();
          break;
        case 9:
          message.uriHash = reader.string();
          break;
        case 10:
          message.data = reader.string();
          break;
        case 11:
          message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Denom {
    const obj = createBaseDenom();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.symbol)) obj.symbol = String(object.symbol);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.schema)) obj.schema = String(object.schema);
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = String(object.data);
    if (Array.isArray(object?.royaltyReceivers))
      obj.royaltyReceivers = object.royaltyReceivers.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: Denom): JsonSafe<Denom> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.schema !== undefined && (obj.schema = message.schema);
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
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
  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDenomMetadata(): DenomMetadata {
  return {
    creator: "",
    schema: "",
    description: "",
    previewUri: "",
    data: "",
    uriHash: "",
    royaltyReceivers: [],
  };
}
export const DenomMetadata = {
  typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata",
  encode(message: DenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schema !== "") {
      writer.uint32(18).string(message.schema);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schema = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomMetadata {
    const obj = createBaseDenomMetadata();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.schema)) obj.schema = String(object.schema);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (Array.isArray(object?.royaltyReceivers))
      obj.royaltyReceivers = object.royaltyReceivers.map((e: any) => WeightedAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: DenomMetadata): JsonSafe<DenomMetadata> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schema !== undefined && (obj.schema = message.schema);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.data !== undefined && (obj.data = message.data);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    if (message.royaltyReceivers) {
      obj.royaltyReceivers = message.royaltyReceivers.map((e) => (e ? WeightedAddress.toJSON(e) : undefined));
    } else {
      obj.royaltyReceivers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomMetadata>, I>>(object: I): DenomMetadata {
    const message = createBaseDenomMetadata();
    message.creator = object.creator ?? "";
    message.schema = object.schema ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.data = object.data ?? "";
    message.uriHash = object.uriHash ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
};
function createBaseONFT(): ONFT {
  return {
    id: "",
    metadata: Metadata.fromPartial({}),
    data: "",
    owner: "",
    transferable: false,
    extensible: false,
    createdAt: Timestamp.fromPartial({}),
    nsfw: false,
    royaltyShare: "",
  };
}
export const ONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
  encode(message: ONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.nsfw === true) {
      writer.uint32(64).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(74).string(message.royaltyShare);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.transferable = reader.bool();
          break;
        case 6:
          message.extensible = reader.bool();
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.nsfw = reader.bool();
          break;
        case 9:
          message.royaltyShare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ONFT {
    const obj = createBaseONFT();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.metadata)) obj.metadata = Metadata.fromJSON(object.metadata);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.transferable)) obj.transferable = Boolean(object.transferable);
    if (isSet(object.extensible)) obj.extensible = Boolean(object.extensible);
    if (isSet(object.createdAt)) obj.createdAt = fromJsonTimestamp(object.createdAt);
    if (isSet(object.nsfw)) obj.nsfw = Boolean(object.nsfw);
    if (isSet(object.royaltyShare)) obj.royaltyShare = String(object.royaltyShare);
    return obj;
  },
  toJSON(message: ONFT): JsonSafe<ONFT> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.data !== undefined && (obj.data = message.data);
    message.owner !== undefined && (obj.owner = message.owner);
    message.transferable !== undefined && (obj.transferable = message.transferable);
    message.extensible !== undefined && (obj.extensible = message.extensible);
    message.createdAt !== undefined && (obj.createdAt = fromTimestamp(message.createdAt).toISOString());
    message.nsfw !== undefined && (obj.nsfw = message.nsfw);
    message.royaltyShare !== undefined && (obj.royaltyShare = message.royaltyShare);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ONFT>, I>>(object: I): ONFT {
    const message = createBaseONFT();
    message.id = object.id ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    message.data = object.data ?? "";
    message.owner = object.owner ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    }
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    return message;
  },
};
function createBaseMetadata(): Metadata {
  return {
    name: "",
    description: "",
    mediaUri: "",
    previewUri: "",
    uriHash: "",
  };
}
export const Metadata = {
  typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(26).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
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
          message.mediaUri = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        case 5:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metadata {
    const obj = createBaseMetadata();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.mediaUri)) obj.mediaUri = String(object.mediaUri);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    return obj;
  },
  toJSON(message: Metadata): JsonSafe<Metadata> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.mediaUri !== undefined && (obj.mediaUri = message.mediaUri);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
};
function createBaseONFTMetadata(): ONFTMetadata {
  return {
    name: "",
    description: "",
    previewUri: "",
    data: "",
    transferable: false,
    extensible: false,
    createdAt: Timestamp.fromPartial({}),
    nsfw: false,
    royaltyShare: "",
    uriHash: "",
  };
}
export const ONFTMetadata = {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata",
  encode(message: ONFTMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(26).string(message.previewUri);
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
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.nsfw === true) {
      writer.uint32(64).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(74).string(message.royaltyShare);
    }
    if (message.uriHash !== "") {
      writer.uint32(82).string(message.uriHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ONFTMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONFTMetadata();
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
          message.previewUri = reader.string();
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
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.nsfw = reader.bool();
          break;
        case 9:
          message.royaltyShare = reader.string();
          break;
        case 10:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ONFTMetadata {
    const obj = createBaseONFTMetadata();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.previewUri)) obj.previewUri = String(object.previewUri);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.transferable)) obj.transferable = Boolean(object.transferable);
    if (isSet(object.extensible)) obj.extensible = Boolean(object.extensible);
    if (isSet(object.createdAt)) obj.createdAt = fromJsonTimestamp(object.createdAt);
    if (isSet(object.nsfw)) obj.nsfw = Boolean(object.nsfw);
    if (isSet(object.royaltyShare)) obj.royaltyShare = String(object.royaltyShare);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    return obj;
  },
  toJSON(message: ONFTMetadata): JsonSafe<ONFTMetadata> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.data !== undefined && (obj.data = message.data);
    message.transferable !== undefined && (obj.transferable = message.transferable);
    message.extensible !== undefined && (obj.extensible = message.extensible);
    message.createdAt !== undefined && (obj.createdAt = fromTimestamp(message.createdAt).toISOString());
    message.nsfw !== undefined && (obj.nsfw = message.nsfw);
    message.royaltyShare !== undefined && (obj.royaltyShare = message.royaltyShare);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ONFTMetadata>, I>>(object: I): ONFTMetadata {
    const message = createBaseONFTMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.data = object.data ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    }
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
};
function createBaseOwner(): Owner {
  return {
    address: "",
    idCollections: [],
  };
}
export const Owner = {
  typeUrl: "/OmniFlix.onft.v1beta1.Owner",
  encode(message: Owner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.idCollections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Owner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Owner {
    const obj = createBaseOwner();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.idCollections))
      obj.idCollections = object.idCollections.map((e: any) => IDCollection.fromJSON(e));
    return obj;
  },
  toJSON(message: Owner): JsonSafe<Owner> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.idCollections) {
      obj.idCollections = message.idCollections.map((e) => (e ? IDCollection.toJSON(e) : undefined));
    } else {
      obj.idCollections = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.idCollections = object.idCollections?.map((e) => IDCollection.fromPartial(e)) || [];
    return message;
  },
};
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: "",
  };
}
export const WeightedAddress = {
  typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress",
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
