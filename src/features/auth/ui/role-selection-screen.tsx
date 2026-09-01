"use client";

import { ChevronLeft } from "lucide-react";
import { roleOptions } from "@/features/auth/constants/roles";

export function RoleSelectionScreen() {
  return (
    <main className="flex min-h-dvh flex-col bg-surface-default text-text-primary">
      <header className="flex h-14 items-center justify-between">
        <a
          aria-label="로그인 화면으로 돌아가기"
          className="flex size-12 items-center justify-center"
          href="/seller"
        >
          <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={2} />
        </a>
        <h1 className="text-[22px] leading-[30px] font-bold tracking-[-0.66px]">
          오류
        </h1>
        <span aria-hidden="true" className="size-12" />
      </header>

      <section className="flex flex-1 flex-col gap-8 px-4 pt-12">
        <h2 className="text-[28px] leading-9 font-bold tracking-[-0.84px] whitespace-pre-line">
          어떻게 {"\n"}시작할까요?
        </h2>

        <div className="flex flex-col gap-2">
          {roleOptions.map((role) => {
            const content = (
              <>
                <span className="mb-1 text-[11px] leading-4 font-medium tracking-[-0.11px] text-text-tertiary">
                  {role.label}
                </span>
                <strong className="text-xl leading-7 tracking-[-0.6px] whitespace-pre-line">
                  {role.title}
                </strong>
                <span className="text-[13px] leading-[18px] tracking-[-0.13px] text-text-tertiary">
                  {role.description}
                </span>
              </>
            );
            const className =
              "flex min-h-[150px] flex-col items-start justify-center gap-1 rounded-xl bg-surface-subtle px-4 py-5 text-left";

            return role.label === "판매자" ? (
              <a className={className} href="/onboarding" key={role.label}>
                {content}
              </a>
            ) : (
              <button className={className} key={role.label} type="button">
                {content}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
