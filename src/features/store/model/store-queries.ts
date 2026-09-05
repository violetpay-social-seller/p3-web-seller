import { useQuery } from "@tanstack/react-query";
import {
  getStore,
  getStoreManagementStatus,
  getStoreSettings,
  getStoreShareLink,
} from "@/features/store/api/store-api";
import { storeKeys } from "@/features/store/model/store-keys";

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
