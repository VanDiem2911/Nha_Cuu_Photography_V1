"use client";

import { useEffect, useRef } from "react";

import type { Photo as PhotoData } from "@/data/concepts";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { clamp, subscribeScroll } from "@/lib/scroll-frame";
import { Photo } from "../photo";

// Header cao 4,5rem (72px); chừa thêm khoảng trống phía dưới để ảnh cuối cảnh không sát mép.
const HEADER_SPACE = 96;
const BOTTOM_GAP = 24;

// Ảnh hai cột bên không cao quá nửa chiều cao còn lại của màn hình, nên không bao giờ bị cắt.
const SIDE_PHOTO = "w-auto max-w-full max-h-[calc((100svh-11rem)/2)]";

type ZoomSceneProps = {
  left: PhotoData[];
  right: PhotoData[];
  /** Ảnh giữa dạng ngang (3:2) cho màn từ 768px. */
  centerWide: PhotoData;
  /** Ảnh giữa dạng dọc (2:3) cho màn hẹp, để không phải cắt ảnh. */
  centerTall: PhotoData;
};

/**
 * Cảnh ghim: khối ảnh 3 cột bị giữ lại, cuộn thì cả khối phóng to cho ảnh giữa choán gần hết màn hình,
 * hai cột ảnh trượt ra ngoài. Chỉ dùng phép dịch và phóng, ảnh không bị cắt, tỉ lệ giữ nguyên.
 * Tắt JavaScript hoặc giảm chuyển động: hiện thành một khối ảnh tĩnh.
 */
export function ZoomScene({ left, right, centerWide, centerTall }: ZoomSceneProps) {
  const scene = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const sceneEl = scene.current;
    const stageEl = stage.current;
    const centerEl = center.current;
    const leftEl = leftCol.current;
    const rightEl = rightCol.current;
    if (!sceneEl || !stageEl || !centerEl || !leftEl || !rightEl) return;

    const reset = () => {
      stageEl.style.transform = "";
      leftEl.style.transform = "";
      rightEl.style.transform = "";
    };
    if (reduced) {
      reset();
      return;
    }

    const wideRatio = centerWide.width / centerWide.height;
    const tallRatio = centerTall.width / centerTall.height;

    const unsubscribe = subscribeScroll(({ vw, vh }) => {
      const rect = sceneEl.getBoundingClientRect();
      const range = sceneEl.offsetHeight - vh;
      if (range <= 0) return;
      const progress = clamp(-rect.top / range);

      // Phóng tới khi ảnh giữa vừa khít bề ngang hoặc vừa khít chiều cao còn lại dưới header, không bị cắt.
      const ratio = vw >= 768 ? wideRatio : tallRatio;
      const room = vh - HEADER_SPACE;
      const finalScale = Math.max(1, Math.min(vw, room * ratio) / centerEl.offsetWidth);
      const t = clamp((progress - 0.05) / 0.8);
      const eased = Math.sin((t * Math.PI) / 2);

      // Đẩy cả khối xuống nửa chiều cao header để ảnh nằm trọn dưới thanh header.
      const shift = eased * ((HEADER_SPACE - BOTTOM_GAP) / 2);
      stageEl.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${(1 + (finalScale - 1) * eased).toFixed(4)})`;
      leftEl.style.transform = `translate3d(0, ${(-eased * 0.12 * vh).toFixed(1)}px, 0)`;
      rightEl.style.transform = `translate3d(0, ${(eased * 0.12 * vh).toFixed(1)}px, 0)`;
    });
    return () => {
      unsubscribe();
      reset();
    };
  }, [reduced, centerWide, centerTall]);

  return (
    <section ref={scene} aria-label="Một số ảnh của studio" className="zoom-scene relative">
      <div className="zoom-sticky">
        <div
          ref={stage}
          className="mx-auto grid h-full w-full grid-cols-[24fr_44fr_24fr] items-center gap-x-[2%] px-[2%] will-change-transform md:grid-cols-[16fr_52fr_16fr]"
        >
          <div ref={leftCol} className="flex flex-col items-center gap-2 will-change-transform md:gap-4">
            {left.map((photo) => (
              <Photo key={photo.src} photo={photo} sizes="(min-width: 768px) 18vw, 25vw" className={SIDE_PHOTO} />
            ))}
          </div>

          <div ref={center}>
            <Photo
              photo={centerWide}
              sizes="(min-width: 768px) 70vw, 1px"
              className="hidden md:block"
            />
            <Photo photo={centerTall} sizes="(min-width: 768px) 1px, 48vw" className="md:hidden" />
          </div>

          <div ref={rightCol} className="flex flex-col items-center gap-2 will-change-transform md:gap-4">
            {right.map((photo) => (
              <Photo key={photo.src} photo={photo} sizes="(min-width: 768px) 18vw, 25vw" className={SIDE_PHOTO} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
