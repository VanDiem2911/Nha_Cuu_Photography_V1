"use client";

import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { clamp, subscribeScroll } from "@/lib/scroll-frame";

const PHRASE = "Bầu · Beauty · Bé · Gia đình · ";
const REPEAT = 8;

/** Hai hàng chữ lớn, nhạt: hàng trên chạy sang trái, hàng dưới sang phải theo tiến độ cuộn qua section. */
export function ScrollMarquee() {
  const host = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const hostEl = host.current;
    const topEl = top.current;
    const bottomEl = bottom.current;
    if (!hostEl || !topEl || !bottomEl) return;
    if (reduced) {
      topEl.style.transform = "";
      bottomEl.style.transform = "";
      return;
    }
    return subscribeScroll(({ vh }) => {
      const rect = hostEl.getBoundingClientRect();
      const progress = clamp((vh - rect.top) / (vh + rect.height));
      topEl.style.transform = `translate3d(${(-progress * 9).toFixed(2)}%, 0, 0)`;
      bottomEl.style.transform = `translate3d(${((progress - 1) * 9).toFixed(2)}%, 0, 0)`;
    });
  }, [reduced]);

  const text = PHRASE.repeat(REPEAT);
  const row =
    "font-display text-[clamp(5rem,14vw,14rem)] leading-[1.05] font-light whitespace-nowrap text-line will-change-transform";

  return (
    <div
      ref={host}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden select-none"
    >
      <div ref={top} className={row}>
        {text}
      </div>
      <div ref={bottom} className={row}>
        {text}
      </div>
    </div>
  );
}
