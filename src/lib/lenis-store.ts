import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (next: Lenis | null) => {
  instance = next;
};

export const getLenis = () => instance;

/** Về đầu trang: dùng Lenis nếu đang chạy, nếu không thì cuộn thường. */
export function scrollToTop() {
  if (instance) instance.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}
