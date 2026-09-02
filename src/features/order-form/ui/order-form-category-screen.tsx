"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  orderFormCategories,
  type OrderFormCategorySlug,
} from "@/features/order-form/model/order-form-categories";
import { OrderFormHeader } from "@/features/order-form/ui/order-form-header";
import { OrderFormConfiguredOptionCard } from "@/features/order-form/ui/order-form-configured-option-card";
import { OrderFormOptionCard } from "@/features/order-form/ui/order-form-option-card";
import { OrderFormOptionSheet } from "@/features/order-form/ui/order-form-option-sheet";

type OrderFormCategoryScreenProps = {
  category: OrderFormCategorySlug;
  title: string;
};

export function OrderFormCategoryScreen({
  category,
  title,
}: OrderFormCategoryScreenProps) {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [options, setOptions] = useState<
    {
      description: string;
      example: string;
      imageCount: number;
      label: string;
      price: string;
      type: string;
    }[]
  >([]);
  const isOptionLimitReached = options.length === 6;
  const currentCategoryIndex = orderFormCategories.findIndex(
    (item) => item.slug === category,
  );
  const nextCategory = orderFormCategories[currentCategoryIndex + 1];

  const moveToNextStep = () => {
    router.push(
      nextCategory
        ? `/seller/order-form/${nextCategory.slug}`
        : "/seller/order-form",
    );
  };

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col bg-surface-subtle text-text-primary">
      <div className="bg-surface-default">
        <OrderFormHeader
          backHref="/seller/order-form"
          showMenu={false}
          title={title}
        />
      </div>
      <section className="flex flex-1 flex-col gap-4 p-4">
        {options.map((option, index) => (
          <OrderFormConfiguredOptionCard
            description={option.description}
            example={option.example}
            imageCount={option.imageCount}
            index={index + 1}
            key={`${option.type}-${option.label}-${index}`}
            label={option.label}
            price={option.price}
            type={option.type}
          />
        ))}
        {isOptionLimitReached ? (
          <p className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-unavailable">
            최대 6개까지 추가할 수 있어요
          </p>
        ) : (
          <div className="flex flex-col gap-4 rounded-seller-md bg-surface-default p-4">
            <OrderFormOptionCard index={options.length + 1} />
            <Button
              className="h-11 rounded-seller-md py-0 pr-4 pl-0 text-[15px] font-semibold"
              onClick={() => setIsSheetOpen(true)}
              size="md"
            >
              <span className="flex size-11 items-center justify-center">
                <Plus aria-hidden="true" className="size-6" strokeWidth={2} />
              </span>
              옵션 추가
            </Button>
          </div>
        )}
      </section>
      <div className="flex gap-2 px-4 pt-4 pb-[34px]">
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          onClick={() => router.push("/seller/order-form")}
          size="md"
          variant="outline"
        >
          확인
        </Button>
        <Button
          className="h-11 flex-1 rounded-seller-md text-[15px] font-semibold"
          onClick={moveToNextStep}
          size="md"
        >
          다음
        </Button>
      </div>
      <OrderFormOptionSheet
        onComplete={(option) =>
          setOptions((currentOptions) => [...currentOptions, option])
        }
        onOpenChange={setIsSheetOpen}
        open={isSheetOpen && !isOptionLimitReached}
      />
    </main>
  );
}
