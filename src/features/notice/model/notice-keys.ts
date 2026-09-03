export const noticeKeys = {
  all: ["notice"] as const,
  detail: () => [...noticeKeys.all, "detail"] as const,
};
