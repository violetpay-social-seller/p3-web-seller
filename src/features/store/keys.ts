export const storeKeys = {
  all: ["store"] as const,
  detail: () => [...storeKeys.all, "detail"] as const,
  managementStatus: () => [...storeKeys.all, "management-status"] as const,
  settings: () => [...storeKeys.all, "settings"] as const,
  shareLink: () => [...storeKeys.all, "share-link"] as const,
  representativeImages: () =>
    [...storeKeys.all, "representative-images"] as const,
  representativeImage: (imageId: string) =>
    [...storeKeys.representativeImages(), imageId] as const,
};
