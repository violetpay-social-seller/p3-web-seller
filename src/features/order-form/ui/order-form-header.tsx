import { ChevronLeft, Menu } from "lucide-react";

type OrderFormHeaderProps = {
  backLabel?: string;
  backHref: string;
  showMenu?: boolean;
  title?: string;
};

export function OrderFormHeader({
  backLabel = "스토어 관리로 돌아가기",
  backHref,
  showMenu = true,
  title,
}: OrderFormHeaderProps) {
  return (
    <header className="grid h-14 grid-cols-[48px_1fr_48px] items-center">
      <a
        aria-label={backLabel}
        className="flex size-12 items-center justify-center"
        href={backHref}
      >
        <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={2} />
      </a>
      {title ? (
        <h1 className="text-center text-seller-display-sm font-bold tracking-[-0.66px]">
          {title}
        </h1>
      ) : (
        <span aria-hidden="true" />
      )}
      {showMenu ? (
        <span
          aria-hidden="true"
          className="flex size-12 items-center justify-center"
        >
          <Menu className="size-6" strokeWidth={2} />
        </span>
      ) : (
        <span aria-hidden="true" className="size-12" />
      )}
    </header>
  );
}
