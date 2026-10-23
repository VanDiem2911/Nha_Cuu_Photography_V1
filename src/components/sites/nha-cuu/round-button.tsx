import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

type RoundButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Nút tròn viền mảnh có mũi tên. Rê chuột hoặc focus: vòng ngoài phóng nhẹ, mũi tên xoay -45 độ. */
export function RoundButton({ href, children, className }: RoundButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex size-40 items-center justify-center rounded-full sm:size-48",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full border border-ink transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
      />
      <span className="relative inline-flex items-center gap-1.5 font-display text-xl font-medium whitespace-nowrap sm:text-2xl">
        {children}
        <ArrowDownRight
          aria-hidden
          className="size-[1.1em] transition-transform duration-500 ease-out group-hover:-rotate-45 group-focus-visible:-rotate-45 motion-reduce:transition-none"
        />
      </span>
    </Link>
  );
}
