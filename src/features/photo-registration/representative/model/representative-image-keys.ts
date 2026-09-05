export const representativeImageKeys = {
  all: ["photo-registration", "representative-images"] as const,
  list: () => [...representativeImageKeys.all, "list"] as const,
};
