import { getJson, sendJson } from "@/lib/api/client";
import type {
  NoticeCollection,
  UpdateNoticesInput,
} from "@/features/notice/model/notice-api-types";

export const getNotices = () => getJson<NoticeCollection>("/seller/notices");

export const updateNotices = (input: UpdateNoticesInput) =>
  sendJson<NoticeCollection>("/seller/notices", "PUT", input);
