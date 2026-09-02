import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { OrderFormCategorySlug } from "@/features/order-form/model/order-form-categories";

export type OrderFormDraftOptionType =
  "SELECT" | "SELECT_WITH_TEXT" | "IMAGE" | "TEXTAREA";

export type OrderFormDraftOption = {
  description: string;
  example: string;
  imageCount: number;
  label: string;
  price: string;
  type: OrderFormDraftOptionType;
};

type OrderFormDraftState = {
  addOption: (
    category: OrderFormCategorySlug,
    option: OrderFormDraftOption,
  ) => void;
  optionsByCategory: Partial<
    Record<OrderFormCategorySlug, OrderFormDraftOption[]>
  >;
};

export const useOrderFormDraftStore = create<OrderFormDraftState>()(
  persist(
    (set) => ({
      addOption: (category, option) =>
        set((state) => ({
          optionsByCategory: {
            ...state.optionsByCategory,
            [category]: [...(state.optionsByCategory[category] ?? []), option],
          },
        })),
      optionsByCategory: {},
    }),
    {
      name: "seller-order-form-draft",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
