import Link from "next/link";

import { getConcept, getPhoto } from "@/data/concepts";
import { cn } from "@/lib/utils";
import { Parallax } from "../parallax";
import { Photo } from "../photo";
import { Reveal } from "../reveal";
import { ScrollMarquee } from "./scroll-marquee";

type Item = {
  slug: string;
  index: number;
  /** Vị trí trên lưới 12 cột: màn hẹp xếp so le, màn rộng rải rác. */
  place: string;
  speed: number;
  sizes: string;
};

const ITEMS: Item[] = [
  {
    slug: "bau-voan-anh-vang",
    index: 2,
    place: "col-span-8 col-start-3 sm:col-span-4 sm:col-start-5",
    speed: 0.04,
    sizes: "(min-width: 640px) 32vw, 64vw",
  },
  {
    slug: "me-va-con-gai-satin",
    index: 1,
    place: "col-span-7 col-start-1 mt-10 sm:col-span-3 sm:col-start-1 sm:mt-[6vw]",
    speed: 0.12,
    sizes: "(min-width: 640px) 24vw, 56vw",
  },
  {
    slug: "thoi-noi-hong-tho-trang",
    index: 1,
    place: "col-span-6 col-start-7 mt-10 sm:col-span-3 sm:col-start-8 sm:mt-[14vw]",
    speed: -0.04,
    sizes: "(min-width: 640px) 24vw, 48vw",
  },
  {
    slug: "dai-gia-dinh-nen-be",
    index: 1,
    place: "col-span-9 col-start-1 mt-10 sm:col-span-4 sm:col-start-3 sm:mt-[8vw]",
    speed: 0.08,
    sizes: "(min-width: 640px) 32vw, 72vw",
  },
  {
    slug: "ao-dai-hong-nen-xanh-reu",
    index: 0,
    place: "col-span-5 col-start-8 mt-10 sm:col-span-2 sm:col-start-9 sm:mt-[18vw]",
    speed: 0.16,
    sizes: "(min-width: 640px) 16vw, 40vw",
  },
  {
    slug: "bau-xanh-pastel-thu-bong",
    index: 0,
    place: "col-span-7 col-start-3 mt-10 sm:col-span-3 sm:col-start-4 sm:mt-[6vw]",
    speed: 0.05,
    sizes: "(min-width: 640px) 24vw, 56vw",
  },
];

/** Cụm ảnh rải rác, mỗi ảnh trôi với tốc độ riêng; caption là tên concept và dẫn tới trang concept đó. */
export function Cluster() {
  return (
    <section
      aria-label="Một số concept"
      className="relative px-[var(--gutter)] pt-[clamp(6rem,16vw,15rem)] pb-[clamp(4rem,8vw,7rem)]"
    >
      <ScrollMarquee />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-x-4">
        {ITEMS.map((item, order) => {
          const concept = getConcept(item.slug);
          if (!concept) return null;
          return (
            <Parallax key={item.slug} speed={item.speed} className={cn("relative z-10", item.place)}>
              <Reveal delay={(order % 2) * 0.15}>
                <Link href={`/concept/${item.slug}`} className="group block">
                  <figure>
                    <div className="overflow-hidden">
                      <Photo
                        photo={getPhoto(item.slug, item.index)}
                        sizes={item.sizes}
                        className="transition-transform duration-[1400ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.03] motion-reduce:transition-none"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm leading-snug text-ink-soft transition-colors duration-300 group-hover:text-ink">
                      {concept.name}
                    </figcaption>
                  </figure>
                </Link>
              </Reveal>
            </Parallax>
          );
        })}
      </div>
    </section>
  );
}
