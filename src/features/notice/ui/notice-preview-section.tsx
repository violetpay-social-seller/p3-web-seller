"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type NoticePreviewSectionProps = {
  items: string[];
  title: string;
};

export function NoticePreviewSection({
  items,
  title,
}: NoticePreviewSectionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="flex flex-col gap-4 rounded-seller-sm bg-surface-default px-4 py-6">
      <button
        aria-expanded={expanded}
        className="flex h-6 items-center justify-between text-left"
        onClick={() => setExpanded((current) => !current)}
        type="button"
      >
        <h2 className="text-seller-heading-md font-semibold tracking-[-0.54px]">
          {title}
        </h2>
        <ChevronDown
          aria-hidden="true"
          className={`size-6 text-text-secondary transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      {expanded ? (
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => (
            <li
              className="flex gap-2 text-[13px] leading-[18px] tracking-[-0.13px] text-text-secondary"
              key={`${index}-${item}`}
            >
              <span
                aria-hidden="true"
                className="mt-[7px] size-1 shrink-0 rounded-full bg-text-tertiary"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
