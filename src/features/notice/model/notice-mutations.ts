import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNotices } from "@/features/notice/api/notice-api";
import { noticeKeys } from "@/features/notice/model/notice-keys";
import { storeKeys } from "@/features/store/model/store-keys";

export function useUpdateNoticesMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNotices,
    onSuccess: (notices) => {
      queryClient.setQueryData(noticeKeys.detail(), notices);
      return queryClient.invalidateQueries({
        queryKey: storeKeys.managementStatus(),
      });
    },
  });
}
