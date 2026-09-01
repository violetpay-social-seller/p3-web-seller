import { useQuery } from "@tanstack/react-query";
import {
  getRepresentativeImage,
  getRepresentativeImages,
  getStore,
  getStoreManagementStatus,
  getStoreSettings,
  getStoreShareLink,
} from "@/features/store/api";
import { storeKeys } from "@/features/store/keys";

export function useStoreQuery(enabled = true) {
  return useQuery({ queryKey: storeKeys.detail(), queryFn: getStore, enabled });
}

export function useStoreManagementStatusQuery(enabled = true) {
  return useQuery({
    queryKey: storeKeys.managementStatus(),
    queryFn: getStoreManagementStatus,
    enabled,
  });
}

export function useStoreSettingsQuery(enabled = true) {
  return useQuery({
    queryKey: storeKeys.settings(),
    queryFn: getStoreSettings,
    enabled,
  });
}

export function useStoreShareLinkQuery(enabled = true) {
  return useQuery({
    queryKey: storeKeys.shareLink(),
    queryFn: getStoreShareLink,
    enabled,
  });
}

export function useRepresentativeImagesQuery(enabled = true) {
  return useQuery({
    queryKey: storeKeys.representativeImages(),
    queryFn: getRepresentativeImages,
    enabled,
  });
}

export function useRepresentativeImageQuery(imageId: string, enabled = true) {
  return useQuery({
    queryKey: storeKeys.representativeImage(imageId),
    queryFn: () => getRepresentativeImage(imageId),
    enabled: enabled && Boolean(imageId),
  });
}
