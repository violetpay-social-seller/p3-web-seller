export type GalleryItemStatus = "VISIBLE" | "HIDDEN";

export type GalleryItem = {
  id: string;
  storeId: string;
  assetId: string;
  sortOrder: number;
  featured: boolean;
  status: GalleryItemStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateGalleryItemInput = Pick<
  GalleryItem,
  "assetId" | "sortOrder" | "featured"
>;
