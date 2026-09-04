import { useQuery } from "@tanstack/react-query";
import { getRepresentativeImages } from "@/features/photo-registration/representative/api/representative-image-api";
import { representativeImageKeys } from "@/features/photo-registration/representative/model/representative-image-keys";

export function useRepresentativeImagesQuery(enabled = true) {
  return useQuery({
    queryKey: representativeImageKeys.list(),
    queryFn: getRepresentativeImages,
    enabled,
  });
}
