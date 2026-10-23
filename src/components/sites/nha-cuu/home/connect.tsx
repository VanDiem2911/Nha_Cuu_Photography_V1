import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowDownRight } from "lucide-react";

import { getPhoto } from "@/data/concepts";
import { SITE } from "@/lib/site";
import { Photo } from "../photo";
import { Reveal } from "../reveal";
import { RoundButton } from "../round-button";

const STRIP: [string, number][] = [
  ["bau-giang-sinh-do", 1],
  ["thoi-noi-hoa-vintage", 0],
  ["me-va-con-gai-satin", 3],
  ["so-sinh-long-trang", 0],
  ["gia-dinh-nen-den", 0],
  ["thoi-noi-nen-den", 2],
  ["bau-den-trang-toi-gian", 1],
  ["be-giang-sinh-gau-bong", 0],
  ["dai-gia-dinh-nen-be", 2],
  ["gia-dinh-giang-sinh-tuyet-trang", 1],
];

const HEIGHT = "h-[clamp(13rem,34svh,24rem)]";

function StripRow({ duplicate }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className={`flex shrink-0 gap-3 pr-3 ${HEIGHT}`}>
      {STRIP.map(([slug, index]) => (
        <li key={`${slug}-${index}`} className="h-full shrink-0">
          <Photo
            photo={getPhoto(slug, index)}
            alt={duplicate ? "" : undefined}
            sizes="(min-width: 768px) 24vw, 46vw"
            className="h-full w-auto"
          />
        </li>
      ))}
    </ul>
  );
}

export function Connect() {
  return (
    <section
      aria-labelledby="connect-title"
      className="overflow-x-clip py-[clamp(4rem,10vw,9rem)] text-center"
    >
      <div className="px-[var(--gutter)]">
        <Reveal as="h2" className="text-title">
          <span id="connect-title">Cùng hẹn một buổi chụp</span>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <RoundButton href="/lien-he">Đặt lịch</RoundButton>
        </Reveal>
        <Reveal as="p" delay={0.3} className="mt-6 text-ink-soft">
          Hoặc nhắn Zalo{" "}
          <a
            href={SITE.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-ink underline underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            {SITE.phoneDisplay}
          </a>
        </Reveal>
      </div>

      <div className="marquee-viewport mt-[clamp(3.5rem,8vw,6rem)] overflow-hidden">
        <div
          className="marquee-track flex w-max"
          style={{ "--marquee-duration": "60s" } as CSSProperties}
        >
          <StripRow />
          <StripRow duplicate />
        </div>
      </div>

      <div className="mt-[clamp(3rem,7vw,5rem)] px-[var(--gutter)]">
        <Reveal>
          <Link
            href="/bo-suu-tap"
            className="group inline-flex min-h-11 items-center gap-3 font-display text-[clamp(1.75rem,4vw,3rem)] font-medium transition-colors duration-300 hover:text-accent"
          >
            Xem bộ sưu tập
            <ArrowDownRight
              aria-hidden
              className="size-[1em] transition-transform duration-500 ease-out group-hover:-rotate-45 motion-reduce:transition-none"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
