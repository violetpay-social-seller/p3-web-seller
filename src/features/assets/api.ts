import { apiRequest, getJson, sendJson } from "@/lib/api/client";
import type { Asset, UploadedAsset } from "@/features/assets/types";

export const uploadAsset = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return apiRequest<UploadedAsset>("/assets", {
    method: "POST",
    body: formData,
  });
};

export const getAssets = () => getJson<Asset[]>("/assets");
export const getAsset = (assetId: string) =>
  getJson<Asset>(`/assets/${assetId}`);
export const deleteAsset = (assetId: string) =>
  sendJson<void>(`/assets/${assetId}`, "DELETE");
