"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SettingRow } from "@/components/ui/setting-row/setting-row";
import { noticeCategories } from "@/features/notice/model/notice-categories";
import { useNoticeDraftStore } from "@/features/notice/model/notice-draft";
import { useStoreManagementStatusQuery } from "@/features/store/queries";
import { OrderFormHeader } from "@/features/order-form/ui/order-form-header";

export function NoticeHomeScreen() {
  const router = useRouter();
  const statusQuery = useStoreManagementStatusQuery();
  const itemsByType = useNoticeDraftStore((state) => state.itemsByType);
  const storeName = statusQuery.data?.storeName ?? "스토어";

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col bg-surface-default text-text-primary">
      <OrderFormHeader backHref="/seller/store-management" showMenu={false} />
      <section className="flex flex-1 flex-col gap-8 overflow-y-auto px-4 pt-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-seller-display-lg font-bold tracking-[-0.84px] whitespace-pre-line">
            {`‘${storeName}’의\n공지사항을 작성해주세요`}
          </h1>
          <p className="text-seller-body-md tracking-[-0.32px] text-text-secondary">
            손님이 주문할 때 채우는 주문서 양식을 만들어보세요
          </p>
        </div>
        <div className="space-y-2">
          {noticeCategories.map((category) => (
            <SettingRow
              completed={
                itemsByType[category.type]?.some((item) => item.trim()) ?? false
              }
              href={`/seller/notice/${category.slug}`}
              key={category.type}
              label={category.label}
            />
          ))}
        </div>
      </section>
      <div className="flex gap-2 px-4 pt-4 pb-[34px]">
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          onClick={() => router.push("/seller/notice/preview")}
          size="md"
          variant="outline"
        >
          미리보기
        </Button>
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          disabled
          size="md"
        >
          저장
        </Button>
      </div>
    </main>
  );
}
