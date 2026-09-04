import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGalleryItem } from "@/features/photo-registration/gallery/api/gallery-item-api";
import { galleryItemKeys } from "@/features/photo-registration/gallery/model/gallery-item-keys";
import { storeKeys } from "@/features/store/model/store-keys";

export function useCreateGalleryItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGalleryItem,
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({ queryKey: galleryItemKeys.all }),
        queryClient.invalidateQueries({
          queryKey: storeKeys.managementStatus(),
        }),
      ]),
  });
}
