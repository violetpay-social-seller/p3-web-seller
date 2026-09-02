import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type OrderFormConfiguredOptionCardProps = {
  description: string;
  example: string;
  imageCount: number;
  index: number;
  label: string;
  price: string;
  type: string;
};

function formatPrice(price: string) {
  const trimmedPrice = price.trim();
  const normalizedPrice = trimmedPrice.replace(/,/g, "");

  if (!/^\d+$/.test(normalizedPrice)) {
    return trimmedPrice;
  }

  return `+ ${Number(normalizedPrice).toLocaleString("ko-KR")}원`;
}

export function OrderFormConfiguredOptionCard({
  description,
  example,
  imageCount,
  index,
  label,
  price,
  type,
}: OrderFormConfiguredOptionCardProps) {
  return (
    <article className="flex flex-col gap-2 rounded-seller-md bg-surface-default p-4">
      <p className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-tertiary">
        옵션 {index}
      </p>
      {type === "SELECT" || type === "SELECT_WITH_TEXT" ? (
        <div className="flex items-start justify-between gap-4 text-seller-heading-md font-semibold tracking-[-0.54px]">
          <p>{label}</p>
          <p className="shrink-0">{formatPrice(price)}</p>
        </div>
      ) : null}
      {type === "SELECT_WITH_TEXT" ? (
        <>
          <Input
            className="border-0 bg-surface-subtle px-4 placeholder:text-text-unavailable"
            placeholder={example || "설명예시를 입력해주세요"}
            readOnly
          />
          {description ? (
            <p className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-tertiary">
              * {description}
            </p>
          ) : null}
        </>
      ) : type === "IMAGE" ? (
        <>
          <div className="flex items-center gap-0 text-seller-heading-md font-semibold tracking-[-0.54px]">
            <p>{label || "사진첨부"}</p>
            <p className="ml-1 text-[15px] leading-5 font-medium tracking-[-0.3px] text-text-tertiary">
              {price || "문의필요"}
            </p>
          </div>
          <div
            aria-label={`사진 ${imageCount}장 첨부`}
            className="flex size-[100px] items-center justify-center rounded-seller-sm bg-surface-subtle text-text-tertiary"
            role="img"
          >
            <Upload aria-hidden="true" className="size-6" strokeWidth={2} />
          </div>
          {description ? (
            <p className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-tertiary">
              * {description}
            </p>
          ) : null}
        </>
      ) : type === "TEXTAREA" ? (
        <>
          <Textarea
            className="min-h-[88px] resize-none border-0 bg-surface-subtle px-4 py-2 placeholder:text-text-unavailable"
            readOnly
            value={example}
          />
          {description ? (
            <p className="text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-tertiary">
              * {description}
            </p>
          ) : null}
        </>
      ) : null}
    </article>
  );
}
