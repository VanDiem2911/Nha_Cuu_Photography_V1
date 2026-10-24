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
  /**
   * Vị trí trên lưới 12 cột. Màn hẹp: hai cột so le, ảnh cột phải lệch xuống (thứ tự mảng xếp từng cặp trái/phải).
   * Màn từ 640px: bốn hàng, mỗi hàng 3 ảnh lệch nhau theo chiều dọc; các hàng sát nhau để cụm ảnh không bị loãng.
   */
  place: string;
  /** Tốc độ trôi: giữ trong khoảng nhỏ để ảnh của hai hàng liền nhau không chạm vào nhau khi cuộn. */
  speed: number;
  sizes: string;
};

const ITEMS: Item[] = [
  // Hàng 1
  {
    slug: "bau-voan-anh-vang",
    index: 2,
    place: "col-span-6 col-start-1 sm:col-span-4 sm:col-start-1 sm:row-start-1",
    speed: 0.04,
    sizes: "(min-width: 640px) 32vw, 46vw",
  },
  {
    slug: "thoi-noi-hong-tho-trang",
    index: 2,
    place: "col-span-6 col-start-7 mt-14 sm:col-span-3 sm:col-start-6 sm:row-start-1 sm:mt-[8vw]",
    speed: -0.03,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
  {
    slug: "bau-den-trang-toi-gian",
    index: 0,
    place: "col-span-6 col-start-1 sm:col-span-3 sm:col-start-10 sm:row-start-1 sm:mt-[3vw]",
    speed: 0.08,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
  // Hàng 2
  {
    slug: "dai-gia-dinh-nen-be",
    index: 1,
    place: "col-span-6 col-start-7 mt-14 sm:col-span-5 sm:col-start-1 sm:row-start-2 sm:mt-0",
    speed: 0.06,
    sizes: "(min-width: 640px) 40vw, 46vw",
  },
  {
    slug: "me-va-con-gai-satin",
    index: 1,
    place: "col-span-6 col-start-1 sm:col-span-3 sm:col-start-7 sm:row-start-2 sm:mt-[5vw]",
    speed: 0.02,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
  {
    slug: "ao-dai-hong-nen-xanh-reu",
    index: 0,
    place: "col-span-6 col-start-7 mt-14 sm:col-span-2 sm:col-start-11 sm:row-start-2 sm:mt-[11vw]",
    speed: 0.09,
    sizes: "(min-width: 640px) 16vw, 46vw",
  },
  // Hàng 3
  {
    slug: "bau-xanh-pastel-thu-bong",
    index: 1,
    place: "col-span-6 col-start-1 sm:col-span-3 sm:col-start-1 sm:row-start-3 sm:mt-[2vw]",
    speed: 0.05,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
  {
    slug: "thoi-noi-hoa-vintage",
    index: 0,
    place: "col-span-6 col-start-7 mt-14 sm:col-span-5 sm:col-start-5 sm:row-start-3 sm:mt-[6vw]",
    speed: -0.02,
    sizes: "(min-width: 640px) 40vw, 46vw",
  },
  {
    slug: "gia-dinh-vay-kem-canh-kho",
    index: 0,
    place: "col-span-6 col-start-1 sm:col-span-2 sm:col-start-11 sm:row-start-3 sm:mt-[12vw]",
    speed: 0.07,
    sizes: "(min-width: 640px) 16vw, 46vw",
  },
  // Hàng 4
  {
    slug: "gia-dinh-nen-den",
    index: 0,
    place: "col-span-6 col-start-7 mt-14 sm:col-span-3 sm:col-start-2 sm:row-start-4 sm:mt-0",
    speed: 0.06,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
  {
    slug: "me-va-be-giang-sinh-do",
    index: 0,
    place: "col-span-6 col-start-1 sm:col-span-3 sm:col-start-6 sm:row-start-4 sm:mt-[7vw]",
    speed: 0.0,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
  {
    slug: "bau-vay-trang-nen-xanh-reu",
    index: 0,
    place: "col-span-6 col-start-7 mt-14 sm:col-span-3 sm:col-start-10 sm:row-start-4 sm:mt-[2vw]",
    speed: 0.04,
    sizes: "(min-width: 640px) 24vw, 46vw",
  },
];

/** Cụm ảnh rải rác, mỗi ảnh trôi với tốc độ riêng; caption là tên concept và dẫn tới trang concept đó. */
export function Cluster() {
  return (
    <section
      aria-label="Một số concept"
      className="relative px-[var(--gutter)] pt-[clamp(5rem,12vw,11rem)] pb-[clamp(3rem,6vw,5rem)]"
    >
      <ScrollMarquee />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-x-4 gap-y-8 sm:gap-y-[3vw]">
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
