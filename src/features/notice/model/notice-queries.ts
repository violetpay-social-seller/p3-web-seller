import { useQuery } from "@tanstack/react-query";
import { getNotices } from "@/features/notice/api/notice-api";
import { noticeKeys } from "@/features/notice/model/notice-keys";
import { toNoticeDraftSnapshot } from "@/features/notice/model/notice-response";

export function useNoticesQuery() {
  return useQuery({
    queryFn: getNotices,
    queryKey: noticeKeys.detail(),
    select: toNoticeDraftSnapshot,
  });
}
