import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getConcept, getPhoto } from "@/data/concepts";
import { Photo } from "../photo";
import { Reveal } from "../reveal";
import { RoundButton } from "../round-button";
import { StackCard } from "./stack-card";

// Mỗi thẻ lấy tông nền nhạt từ phông ảnh của concept, và thuộc một nhóm khác nhau.
const FEATURED = [
  { slug: "bau-voan-anh-vang", photo: 0, tint: "bg-tint-sand" },
  { slug: "thoi-noi-hong-tho-trang", photo: 1, tint: "bg-tint-rose" },
  { slug: "gia-dinh-vay-kem-canh-kho", photo: 3, tint: "bg-tint-sky" },
] as const;

export function Featured() {
  return (
    <section aria-label="Concept nổi bật">
      <div>
        {FEATURED.map((item, index) => {
          const concept = getConcept(item.slug);
          if (!concept) return null;
          return (
            <StackCard
              key={item.slug}
              index={index}
              isLast={index === FEATURED.length - 1}
              className={item.tint}
            >
              <div className="mx-auto grid h-full w-full max-w-[1920px] items-center gap-8 px-[var(--gutter)] py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-10">
                <div className="flex justify-center">
                  <Photo
                    photo={getPhoto(item.slug, item.photo)}
                    sizes="(min-width: 1024px) 34vw, (min-width: 768px) 46vw, 86vw"
                    className="max-h-[78svh] w-auto max-w-full"
                  />
                </div>
                <div className="max-w-xl">
                  <Reveal as="h3" className="text-title">
                    {concept.name}
                  </Reveal>
                  <Reveal as="p" delay={0.15} className="text-lead mt-6 text-ink-soft">
                    {concept.summary}
                  </Reveal>
                  <Reveal delay={0.3} className="mt-10">
                    <RoundButton href={`/concept/${concept.slug}`}>Xem concept</RoundButton>
                  </Reveal>
                </div>
              </div>
            </StackCard>
          );
        })}
      </div>

      <div className="px-[var(--gutter)] py-[clamp(4rem,8vw,7rem)] text-center">
        <Reveal>
          <Link
            href="/concept"
            className="group inline-flex min-h-11 items-center gap-3 font-display text-[clamp(1.75rem,4vw,3rem)] font-medium transition-colors duration-300 hover:text-accent"
          >
            Xem tất cả concept
            <ArrowRight
              aria-hidden
              className="size-[1em] transition-transform duration-500 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
