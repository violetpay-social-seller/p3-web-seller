export type AssetStatus =
  "UPLOADED" | "PROCESSING" | "READY" | "FAILED" | "DELETED";

export type Asset = {
  id: string;
  uploadedBy: string;
  originalFilename: string;
  contentType: string;
  size: number;
  deliveryUrl: string | null;
  status: AssetStatus;
  createdAt: string;
  updatedAt: string;
};

export type UploadedAsset = { assetId: string; deliveryUrl: string | null };
