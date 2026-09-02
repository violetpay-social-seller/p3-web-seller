import Image from "next/image";
import type { OrderFormDraftOption } from "@/features/order-form/model/order-form-draft";

type OrderFormPreviewOptionProps = {
  option: OrderFormDraftOption;
};

function formatPrice(price: string) {
  const trimmedPrice = price.trim();
  const normalizedPrice = trimmedPrice.replace(/,/g, "");

  if (!/^\d+$/.test(normalizedPrice)) {
    return trimmedPrice;
  }

  return `+ ${Number(normalizedPrice).toLocaleString("ko-KR")}원`;
}

function OptionHeader({ option }: OrderFormPreviewOptionProps) {
  return (
    <div className="flex min-h-6 w-full items-start justify-between gap-3">
      <div className="flex min-w-0 items-start">
        <Image
          alt=""
          aria-hidden="true"
          className="-my-1 size-8 shrink-0"
          height={32}
          src={
            option.type === "SELECT"
              ? "/order-form/radio.svg"
              : "/order-form/radio-with-input.svg"
          }
          width={32}
        />
        <p className="min-w-0 text-base leading-6 tracking-[-0.32px]">
          {option.label}
        </p>
      </div>
      <p className="shrink-0 text-right text-[15px] leading-[22px] font-semibold tracking-[-0.15px]">
        {formatPrice(option.price)}
      </p>
    </div>
  );
}

function Description({ value }: { value: string }) {
  return value ? (
    <p className="w-full text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-tertiary">
      * {value}
    </p>
  ) : null;
}

export function OrderFormPreviewOption({
  option,
}: OrderFormPreviewOptionProps) {
  if (option.type === "TEXTAREA") {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-end gap-1">
          <div className="min-h-[88px] w-full rounded-seller-sm bg-surface-subtle px-4 py-2 text-base leading-6 tracking-[-0.32px] text-text-unavailable">
            {option.example || "요청사항을 입력해주세요"}
          </div>
          <span className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-unavailable">
            0/500
          </span>
        </div>
        <Description value={option.description} />
      </div>
    );
  }

  if (option.type === "IMAGE") {
    return (
      <div className="flex flex-col gap-2">
        <OptionHeader option={option} />
        <div
          aria-label={`사진 ${option.imageCount}장 첨부 영역`}
          className="flex size-[100px] items-center justify-center rounded-seller-sm bg-surface-subtle"
          role="img"
        >
          <Image
            alt=""
            aria-hidden="true"
            height={48}
            src="/order-form/upload.svg"
            width={48}
          />
        </div>
        <Description value={option.description} />
      </div>
    );
  }

  if (option.type === "SELECT_WITH_TEXT") {
    return (
      <div className="flex flex-col gap-2">
        <OptionHeader option={option} />
        <div className="flex flex-col items-end gap-1">
          <div className="flex h-11 w-full items-center rounded-seller-sm bg-surface-subtle px-4 text-base leading-6 tracking-[-0.32px] text-text-unavailable">
            {option.example || "설명예시를 입력해주세요"}
          </div>
          <span className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-unavailable">
            0/100
          </span>
        </div>
        <Description value={option.description} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <OptionHeader option={option} />
      <Description value={option.description} />
    </div>
  );
}
