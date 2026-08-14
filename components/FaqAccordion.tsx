"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export type FaqItem = {
  question: string;
  answer?: React.ReactNode;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-md border border-[#e6e6e6]"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#DC0D15] text-[11px] text-white">
                {open ? <FaMinus /> : <FaPlus />}
              </span>
              <span className="text-[15px] font-medium text-[#DC0D15]">
                {item.question}
              </span>
            </button>
            {open && item.answer ? (
              <div className="px-4 pt-0 pb-4 pl-[52px] text-[14px] leading-7 text-[#333333]">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
