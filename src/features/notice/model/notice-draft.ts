import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { NoticeType } from "@/features/notice/model/notice-categories";

type NoticeDraftState = {
  addItem: (type: NoticeType, content: string) => void;
  itemsByType: Partial<Record<NoticeType, string[]>>;
  updateItem: (type: NoticeType, index: number, content: string) => void;
};

export const useNoticeDraftStore = create<NoticeDraftState>()(
  persist(
    (set) => ({
      addItem: (type, content) =>
        set((state) => ({
          itemsByType: {
            ...state.itemsByType,
            [type]: [...(state.itemsByType[type] ?? []), content],
          },
        })),
      itemsByType: {},
      updateItem: (type, index, content) =>
        set((state) => ({
          itemsByType: {
            ...state.itemsByType,
            [type]: (state.itemsByType[type] ?? []).map((item, itemIndex) =>
              itemIndex === index ? content : item,
            ),
          },
        })),
    }),
    {
      name: "seller-notice-draft",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
