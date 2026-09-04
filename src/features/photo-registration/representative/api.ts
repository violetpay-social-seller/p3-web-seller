import { getJson, sendJson } from "@/lib/api/client";
import type {
  CreateRepresentativeImageInput,
  RepresentativeImage,
} from "@/features/photo-registration/representative/types";

export const getRepresentativeImages = () =>
  getJson<RepresentativeImage[]>("/seller/representative-images");

export const createRepresentativeImage = (
  input: CreateRepresentativeImageInput,
) =>
  sendJson<RepresentativeImage>("/seller/representative-images", "POST", input);
