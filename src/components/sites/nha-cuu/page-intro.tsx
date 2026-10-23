import type { ReactNode } from "react";

import { Reveal } from "./reveal";

type PageIntroProps = {
  title: ReactNode;
  /** Một hoặc hai câu mô tả ngắn dưới tiêu đề. */
  lead?: ReactNode;
};

/** Đầu trang con: tiêu đề cỡ lớn như hero trang chủ và đoạn dẫn ngắn. */
export function PageIntro({ title, lead }: PageIntroProps) {
  return (
    <header className="px-[var(--gutter)] pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))] pb-[clamp(2.5rem,6vw,5rem)]">
      <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-6">
        <Reveal as="h1" className="text-display col-span-12 lg:col-span-9">
          {title}
        </Reveal>
        {lead ? (
          <Reveal
            as="p"
            delay={0.15}
            className="text-lead col-span-12 text-ink-soft sm:col-span-9 lg:col-span-5 lg:col-start-6"
          >
            {lead}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
