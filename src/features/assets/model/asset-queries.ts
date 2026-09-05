import { useQuery } from "@tanstack/react-query";
import { getAsset, getAssets } from "@/features/assets/api/assets-api";
import { assetKeys } from "@/features/assets/api/asset-keys";

export function useAssetsQuery(enabled = true) {
  return useQuery({ queryKey: assetKeys.list(), queryFn: getAssets, enabled });
}

export function useAssetQuery(assetId: string, enabled = true) {
  return useQuery({
    queryKey: assetKeys.detail(assetId),
    queryFn: () => getAsset(assetId),
    enabled: enabled && Boolean(assetId),
  });
}
