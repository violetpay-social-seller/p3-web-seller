import type { NoticeType } from "@/features/notice/model/notice-categories";

export type NoticeItem = {
  content: string;
  sortOrder: number;
};

export type NoticeGroup = {
  items: NoticeItem[];
  type: NoticeType;
};

export type NoticeCollection = {
  notices: NoticeGroup[];
};

export type UpdateNoticesInput = {
  notices: {
    items: { content: string }[];
    type: NoticeType;
  }[];
};
