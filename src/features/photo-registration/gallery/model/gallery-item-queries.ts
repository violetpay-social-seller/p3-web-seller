import { useQuery } from "@tanstack/react-query";
import { getGalleryItems } from "@/features/photo-registration/gallery/api/gallery-item-api";
import { galleryItemKeys } from "@/features/photo-registration/gallery/model/gallery-item-keys";

export function useGalleryItemsQuery(enabled = true) {
  return useQuery({
    queryKey: galleryItemKeys.list(),
    queryFn: getGalleryItems,
    enabled,
  });
}
