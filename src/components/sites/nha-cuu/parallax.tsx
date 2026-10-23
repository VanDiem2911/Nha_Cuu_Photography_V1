"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { subscribeScroll } from "@/lib/scroll-frame";

type ParallaxProps = {
  /** Cộng thêm vào tốc độ cuộn, tính theo chiều cao màn hình: dương trôi nhanh hơn trang, âm chậm hơn. */
  speed?: number;
  className?: string;
  children: ReactNode;
};

/** Ảnh trôi nhẹ theo cuộn. Đo vị trí trên khung ngoài (không bị dịch) để không tự đuổi theo chính mình. */
export function Parallax({ speed = 0.1, className, children }: ParallaxProps) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const frame = outer.current;
    const layer = inner.current;
    if (!frame || !layer) return;
    if (reduced) {
      layer.style.transform = "";
      return;
    }
    return subscribeScroll(({ vh }) => {
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
      layer.style.transform = `translate3d(0, ${(offset * speed * vh).toFixed(1)}px, 0)`;
    });
  }, [reduced, speed]);

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
