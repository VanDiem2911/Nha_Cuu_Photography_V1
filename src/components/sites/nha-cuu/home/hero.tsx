import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { getPhoto } from "@/data/concepts";
import { Photo } from "../photo";
import { Reveal } from "../reveal";

const RING_TEXT = "ĐẶT LỊCH CHỤP · ĐẶT LỊCH CHỤP · ĐẶT LỊCH CHỤP · ";

function HeroCta() {
  return (
    <Reveal
      delay={0.6}
      className="[grid-area:cta] self-end lg:mt-10 lg:ml-[5vw] lg:self-start"
    >
      <Link
        href="/lien-he"
        aria-label="Đặt lịch chụp"
        className="group relative grid size-28 place-items-center min-[360px]:size-32 rounded-full sm:size-48 lg:size-60"
      >
        <span
          aria-hidden
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
        >
          <svg viewBox="0 0 240 240" className="ring-spin size-full text-ink">
            <defs>
              <path id="hero-ring" d="M120 120m-100 0a100 100 0 1 1 200 0a100 100 0 1 1-200 0" />
            </defs>
            <text
              fill="currentColor"
              fontSize="21"
              fontWeight="500"
              fontFamily="var(--font-display)"
            >
              <textPath href="#hero-ring" textLength="614" lengthAdjust="spacing">
                {RING_TEXT}
              </textPath>
            </text>
          </svg>
        </span>
        <ArrowDownRight
          aria-hidden
          strokeWidth={1}
          className="relative size-12 text-ink sm:size-14 transition-transform duration-500 ease-out group-hover:-rotate-45 group-focus-visible:-rotate-45 motion-reduce:transition-none lg:size-20"
        />
      </Link>
    </Reveal>
  );
}

export function Hero() {
  const photo = getPhoto("gia-dinh-vay-kem-canh-kho", 0);

  return (
    <section
      aria-labelledby="hero-title"
      className="px-[var(--gutter)] pt-[calc(var(--header-h)+2rem)] pb-12 lg:flex lg:min-h-svh lg:items-center lg:py-[calc(var(--header-h)+1rem)]"
    >
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-10 sm:gap-x-6 [grid-template-areas:'title_title'_'cta_photo'] lg:gap-x-10 lg:[grid-template-areas:'title_photo'_'cta_photo']">
        <h1 id="hero-title" className="text-display [grid-area:title]">
          <Reveal as="span" className="ml-[6%] block">
            Một mái nhà
          </Reveal>
          <Reveal as="span" delay={0.2} className="block">
            nhỏ cho những
          </Reveal>
          <Reveal as="span" delay={0.4} className="ml-[6%] block">
            khoảnh khắc lớn
          </Reveal>
        </h1>

        <HeroCta />

        <Reveal
          delay={0.3}
          className="w-[min(50vw,22rem)] [grid-area:photo] lg:row-span-2 lg:w-auto lg:self-center"
        >
          <Photo
            photo={photo}
            preload
            sizes="(min-width: 1024px) 34vw, 56vw"
            className="lg:h-[min(76svh,52rem)] lg:w-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
