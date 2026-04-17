"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className="font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                {item.question}
              </span>
              {isOpen ? (
                <ChevronUp
                  className="h-4 w-4 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
              ) : (
                <ChevronDown
                  className="h-4 w-4 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
              )}
            </button>
            {isOpen && (
              <p
                className="mt-2 pb-2 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
