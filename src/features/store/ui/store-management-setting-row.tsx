import { Check, ChevronRight } from "lucide-react";

type StoreManagementSettingRowProps = {
  completed: boolean;
  href?: string;
  label: string;
};

export function StoreManagementSettingRow({
  completed,
  href,
  label,
}: StoreManagementSettingRowProps) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className={
          completed
            ? "flex size-[18px] items-center justify-center rounded-[6px] bg-text-secondary text-text-inverse"
            : "size-[18px] rounded-[6px] border border-[#b8b9bb] bg-[#d0d0d2]"
        }
      >
        {completed ? <Check className="size-3" strokeWidth={3} /> : null}
      </span>
      <span className="text-seller-heading-md font-semibold tracking-[-0.54px]">
        {label}
      </span>
      <ChevronRight
        aria-hidden="true"
        className="ml-auto size-6 text-text-secondary"
      />
    </>
  );

  const className =
    "flex h-[87.8px] w-full items-center gap-5 rounded-seller-sm bg-surface-subtle px-4 text-left transition-colors hover:bg-seller-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seller-primary";

  return href ? (
    <a className={className} href={href}>
      {content}
    </a>
  ) : (
    <button className={className} type="button">
      {content}
    </button>
  );
}
