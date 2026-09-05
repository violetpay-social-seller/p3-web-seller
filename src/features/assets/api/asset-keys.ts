export const assetKeys = {
  all: ["assets"] as const,
  list: () => [...assetKeys.all, "list"] as const,
  detail: (assetId: string) => [...assetKeys.all, "detail", assetId] as const,
};
