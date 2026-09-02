import { ChevronRight } from "lucide-react";

type OrderFormCategoryRowProps = {
  href: string;
  label: string;
};

export function OrderFormCategoryRow({
  href,
  label,
}: OrderFormCategoryRowProps) {
  return (
    <a
      className="flex h-[71.83px] w-full items-center gap-5 rounded-seller-sm bg-surface-subtle px-4 text-left transition-colors hover:bg-seller-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seller-primary"
      href={href}
    >
      <span className="flex size-6 shrink-0 items-center justify-center overflow-hidden p-[3px]">
        <span className="size-[18px] rounded-[6px] border border-[#b8b9bb] bg-[#d0d0d2]" />
      </span>
      <span className="text-seller-heading-md font-semibold tracking-[-0.54px]">
        {label}
      </span>
      <ChevronRight
        aria-hidden="true"
        className="ml-auto size-6 shrink-0 text-text-secondary"
      />
    </a>
  );
}
