import { getJson, sendJson } from "@/lib/api/client";
import type {
  CreateGalleryItemInput,
  GalleryItem,
} from "@/features/photo-registration/gallery/model/gallery-item-types";

export const getGalleryItems = () =>
  getJson<GalleryItem[]>("/seller/gallery-items");

export const createGalleryItem = (input: CreateGalleryItemInput) =>
  sendJson<GalleryItem>("/seller/gallery-items", "POST", input);
