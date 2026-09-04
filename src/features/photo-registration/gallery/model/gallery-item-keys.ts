export const galleryItemKeys = {
  all: ["photo-registration", "gallery-items"] as const,
  list: () => [...galleryItemKeys.all, "list"] as const,
};
