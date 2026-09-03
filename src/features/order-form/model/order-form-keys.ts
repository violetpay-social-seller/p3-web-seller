export const orderFormKeys = {
  all: ["order-form"] as const,
  active: () => [...orderFormKeys.all, "active"] as const,
};
