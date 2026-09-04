import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRepresentativeImage } from "@/features/photo-registration/representative/api";
import { representativeImageKeys } from "@/features/photo-registration/representative/keys";
import { storeKeys } from "@/features/store/keys";

export function useCreateRepresentativeImageMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRepresentativeImage,
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: representativeImageKeys.all,
        }),
        queryClient.invalidateQueries({
          queryKey: storeKeys.managementStatus(),
        }),
      ]),
  });
}
