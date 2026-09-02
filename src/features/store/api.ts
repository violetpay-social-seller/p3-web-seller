import { getJson, sendJson } from "@/lib/api/client";
import type {
  CreateRepresentativeImageInput,
  RepresentativeImage,
  Store,
  StoreInput,
  StoreManagementStatus,
  StoreSettings,
  StoreSettingsInput,
  StoreShareLink,
  StoreStatus,
  UpdateRepresentativeImageInput,
} from "@/features/store/types";

export const getStore = () => getJson<Store>("/seller/store");
export const getStoreManagementStatus = () =>
  getJson<StoreManagementStatus>("/seller/store/management-status");
export const createStore = (input: StoreInput) =>
  sendJson<Store>("/seller/store", "POST", input);
export const updateStore = (input: StoreInput) =>
  sendJson<Store>("/seller/store", "PATCH", input);
export const updateStoreStatus = (status: StoreStatus) =>
  sendJson<Store>("/seller/store/status", "PATCH", { status });
export const deleteStore = () => sendJson<void>("/seller/store", "DELETE");

export const getStoreSettings = () =>
  getJson<StoreSettings>("/seller/store/settings");
export const updateStoreSettings = (input: StoreSettingsInput) =>
  sendJson<StoreSettings>("/seller/store/settings", "PUT", input);
export const getStoreShareLink = () =>
  getJson<StoreShareLink>("/seller/store/share-link");

export const getRepresentativeImages = () =>
  getJson<RepresentativeImage[]>("/seller/representative-images");
export const getRepresentativeImage = (imageId: string) =>
  getJson<RepresentativeImage>(`/seller/representative-images/${imageId}`);
export const createRepresentativeImage = (
  input: CreateRepresentativeImageInput,
) =>
  sendJson<RepresentativeImage>("/seller/representative-images", "POST", input);
export const updateRepresentativeImage = ({
  imageId,
  ...input
}: UpdateRepresentativeImageInput & { imageId: string }) =>
  sendJson<RepresentativeImage>(
    `/seller/representative-images/${imageId}`,
    "PATCH",
    input,
  );
export const deleteRepresentativeImage = (imageId: string) =>
  sendJson<void>(`/seller/representative-images/${imageId}`, "DELETE");
