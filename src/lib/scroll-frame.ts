export type ScrollState = { scrollY: number; vw: number; vh: number };
type Frame = (state: ScrollState) => void;

const subscribers = new Set<Frame>();
let frame = 0;
let listening = false;

function run() {
  frame = 0;
  const state: ScrollState = {
    scrollY: window.scrollY,
    vw: window.innerWidth,
    vh: window.innerHeight,
  };
  subscribers.forEach((fn) => fn(state));
}

function request() {
  if (!frame) frame = requestAnimationFrame(run);
}

/**
 * Một bộ lắng nghe cuộn dùng chung cho mọi hiệu ứng theo cuộn (thanh tiến độ, ảnh trôi, cảnh ghim...).
 * Lenis cuộn bằng window.scrollTo nên sự kiện scroll vẫn chạy ở mỗi khung hình.
 */
export function subscribeScroll(fn: Frame): () => void {
  subscribers.add(fn);
  if (!listening) {
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    listening = true;
  }
  request();
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      listening = false;
    }
  };
}

export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
