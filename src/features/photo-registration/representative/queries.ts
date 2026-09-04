import { useQuery } from "@tanstack/react-query";
import { getRepresentativeImages } from "@/features/photo-registration/representative/api";
import { representativeImageKeys } from "@/features/photo-registration/representative/keys";

export function useRepresentativeImagesQuery(enabled = true) {
  return useQuery({
    queryKey: representativeImageKeys.list(),
    queryFn: getRepresentativeImages,
    enabled,
  });
}
