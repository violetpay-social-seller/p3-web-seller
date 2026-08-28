import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAsset, uploadAsset } from "@/features/assets/api";
import { assetKeys } from "@/features/assets/keys";

export function useUploadAssetMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadAsset,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: assetKeys.list() }),
  });
}

export function useDeleteAssetMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAsset,
    onSuccess: (_, assetId) => {
      queryClient.removeQueries({ queryKey: assetKeys.detail(assetId) });
      return queryClient.invalidateQueries({ queryKey: assetKeys.list() });
    },
  });
}
