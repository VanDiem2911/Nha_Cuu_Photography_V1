"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

import { scrollToTop, setLenis } from "@/lib/lenis-store";

/**
 * Cuộn mượt toàn trang, chỉ cho con lăn chuột và bàn phím (cảm ứng vẫn cuộn tự nhiên).
 * Tự tắt khi người dùng bật "giảm chuyển động". Chuyển trang thì về đầu trang.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const start = () => {
      lenis = new Lenis({
        autoRaf: true,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      });
      setLenis(lenis);
    };
    const stop = () => {
      lenis?.destroy();
      lenis = null;
      setLenis(null);
    };
    const sync = () => {
      if (media.matches) stop();
      else if (!lenis) start();
    };

    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      stop();
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    scrollToTop();
  }, [pathname]);

  return null;
}
