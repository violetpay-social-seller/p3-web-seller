"use client";

import { Button } from "@/components/ui/button";
import { OrderFormHeader } from "@/features/order-form/ui/order-form-header";
import { RepresentativePhotoUploadField } from "@/features/photo-registration/representative/ui/representative-photo-upload-field";
import { useStoreManagementStatusQuery } from "@/features/store/queries";

export function GalleryRegistrationScreen() {
  const statusQuery = useStoreManagementStatusQuery();
  const storeName = statusQuery.data?.storeName ?? "스토어";

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col bg-surface-default text-text-primary">
      <OrderFormHeader
        backHref="/seller/photo-registration/representative"
        title=""
      />
      <section className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 pt-4">
        <div className="space-y-2">
          <h1 className="text-seller-display-lg font-bold tracking-[-0.84px] whitespace-pre-line">
            {`‘${storeName}’의 Best 케이크\n사진을 등록해주세요`}
          </h1>
          <p className="text-seller-body-md tracking-[-0.32px] whitespace-pre-line text-text-secondary">
            {
              "매장의 인기 많은 디자인들을\n구매자들이 바로 주문할 수 있도록 해요"
            }
          </p>
        </div>
        <RepresentativePhotoUploadField
          disabled
          onFileSelect={() => undefined}
        />
        <p className="text-[13px] leading-[18px] tracking-[-0.13px] text-text-secondary">
          * 사진을 길게 눌러 순서를 바꿀 수 있어요.
        </p>
      </section>
      <div className="flex gap-2 px-4 pt-4 pb-[34px]">
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          size="md"
          variant="outline"
        >
          다음에 하기
        </Button>
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          disabled
          size="md"
        >
          갤러리 업데이트
        </Button>
      </div>
    </main>
  );
}
