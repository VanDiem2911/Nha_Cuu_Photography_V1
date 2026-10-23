import type { Metadata } from "next";
import Link from "next/link";

import { RoundButton } from "@/components/sites/nha-cuu/round-button";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
};

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-start justify-center gap-8 px-[var(--gutter)] pt-[var(--header-h)] pb-16">
      <h1 className="text-display">Không tìm thấy trang</h1>
      <p className="text-lead max-w-xl text-ink-soft">
        Liên kết này không còn tồn tại. Bạn có thể quay về trang chủ hoặc xem các concept của studio.
      </p>
      <div className="flex flex-wrap items-center gap-8">
        <RoundButton href="/">Trang chủ</RoundButton>
        <Link
          href="/concept"
          className="inline-flex min-h-11 items-center text-lg underline underline-offset-4 transition-colors duration-300 hover:text-accent"
        >
          Xem các concept
        </Link>
      </div>
    </section>
  );
}
