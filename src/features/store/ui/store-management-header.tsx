import { ChevronLeft, Menu } from "lucide-react";

export function StoreManagementHeader() {
  return (
    <header className="flex h-14 items-center justify-between">
      <a
        aria-label="판매자 홈으로 돌아가기"
        className="flex size-12 items-center justify-center"
        href="/seller"
      >
        <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={2} />
      </a>
      <h1 className="text-seller-display-sm font-bold tracking-[-0.66px]">
        스토어 관리
      </h1>
      <span
        aria-hidden="true"
        className="flex size-12 items-center justify-center"
      >
        <Menu className="size-6" strokeWidth={2} />
      </span>
    </header>
  );
}
