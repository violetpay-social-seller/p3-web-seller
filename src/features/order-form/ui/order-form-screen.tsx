"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { orderFormCategories } from "@/features/order-form/model/order-form-categories";
import { useOrderFormDraftStore } from "@/features/order-form/model/order-form-draft";
import { OrderFormCategoryRow } from "@/features/order-form/ui/order-form-category-row";
import { OrderFormHeader } from "@/features/order-form/ui/order-form-header";
import { useStoreManagementStatusQuery } from "@/features/store/queries";

export function OrderFormScreen() {
  const router = useRouter();
  const statusQuery = useStoreManagementStatusQuery();
  const optionsByCategory = useOrderFormDraftStore(
    (state) => state.optionsByCategory,
  );
  const storeName = statusQuery.data?.storeName ?? "스토어";

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col bg-surface-default text-text-primary">
      <OrderFormHeader backHref="/seller/store-management" />
      <section className="flex flex-1 flex-col gap-8 overflow-y-auto px-4 pt-6 pb-4">
        <div className="space-y-2">
          <h2 className="text-seller-display-lg font-bold tracking-[-0.84px] whitespace-pre-line">
            {`‘${storeName}’의\n주문서를 작성해주세요`}
          </h2>
          <p className="text-seller-body-md tracking-[-0.32px] text-text-secondary">
            손님이 주문할 때 채우는 주문서 양식을 만들어보세요
          </p>
        </div>
        <div className="space-y-2">
          {orderFormCategories.map((category) => (
            <OrderFormCategoryRow
              completed={(optionsByCategory[category.slug]?.length ?? 0) > 0}
              href={`/seller/order-form/${category.slug}`}
              key={category.slug}
              label={category.label}
            />
          ))}
        </div>
      </section>
      <div className="flex gap-2 px-4 pt-4 pb-[34px]">
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          onClick={() => router.push("/seller/order-form/preview")}
          size="md"
          variant="outline"
        >
          미리보기
        </Button>
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          size="md"
        >
          저장
        </Button>
      </div>
    </main>
  );
}
