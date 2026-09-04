export type RepresentativeImageStatus = "ACTIVE" | "HIDDEN";

export type RepresentativeImage = {
  id: string;
  storeId: string;
  assetId: string;
  sortOrder: number;
  status: RepresentativeImageStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateRepresentativeImageInput = Pick<
  RepresentativeImage,
  "assetId" | "sortOrder"
>;
