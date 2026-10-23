"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { clamp, subscribeScroll } from "@/lib/scroll-frame";
import { cn } from "@/lib/utils";

type StackCardProps = {
  index: number;
  /** Thẻ cuối không bị thẻ nào đè lên nên không thu nhỏ. */
  isLast?: boolean;
  className?: string;
  children: ReactNode;
};

const STACKED = "(min-width: 1024px) and (min-height: 620px)";
const SHRINK = 0.08;

/**
 * Thẻ dính đầu màn hình (kiểu css trong globals.css), thẻ sau trượt lên đè thẻ trước.
 * Thẻ trước thu nhỏ nhẹ khi bị đè. Màn hẹp hoặc thấp: các thẻ xếp dọc bình thường.
 */
export function StackCard({ index, isLast, className, children }: StackCardProps) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const frame = outer.current;
    const layer = inner.current;
    if (!frame || !layer) return;
    if (reduced || isLast) {
      layer.style.transform = "";
      return;
    }
    const media = window.matchMedia(STACKED);
    return subscribeScroll(({ vh }) => {
      const container = frame.parentElement;
      if (!container || !media.matches) {
        layer.style.transform = "";
        return;
      }
      const top = container.getBoundingClientRect().top;
      const covered = clamp((-top - index * vh) / vh);
      layer.style.transform = covered > 0 ? `scale(${(1 - SHRINK * covered).toFixed(4)})` : "";
    });
  }, [index, isLast, reduced]);

  return (
    <div ref={outer} className="stack-card">
      <div ref={inner} className={cn("h-full origin-top will-change-transform", className)}>
        {children}
      </div>
    </div>
  );
}
