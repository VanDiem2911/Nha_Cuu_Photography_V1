"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

type Tag = "div" | "span" | "p" | "h1" | "h2" | "h3" | "li" | "figure";

type RevealProps = {
  as?: Tag;
  /** Độ trễ (giây) để các khối cùng nhóm hiện lần lượt. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Hiện dần khi vào màn hình, ẩn lại khi ra khỏi màn hình hẳn, nên cuộn lên cũng chạy lại.
 * Kiểu hiện (>= 1,4 giây) nằm trong globals.css; thiếu JavaScript hoặc bật giảm chuyển động thì hiện sẵn.
 */
export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const Component = as as "div";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.dataset.in = "1";
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          el.dataset.in = "0";
          return;
        }
        const needed = Math.min(entry.boundingClientRect.height * 0.12, window.innerHeight * 0.12);
        if (entry.intersectionRect.height >= needed) el.dataset.in = "1";
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const style = delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;

  return (
    <Component ref={ref} data-reveal="" className={className} style={style}>
      {children}
    </Component>
  );
}
