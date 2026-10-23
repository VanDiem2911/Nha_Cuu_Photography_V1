import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/sites/nha-cuu/page-intro";
import { Photo } from "@/components/sites/nha-cuu/photo";
import { Reveal } from "@/components/sites/nha-cuu/reveal";
import { CONCEPTS } from "@/data/concepts";

export const metadata: Metadata = {
  title: "Bộ sưu tập",
  description: "Toàn bộ ảnh các concept Bầu, Beauty, Bé và Gia đình của Nhà Cừu Photography.",
  alternates: { canonical: "/bo-suu-tap" },
};

const photos = CONCEPTS.flatMap((concept) => concept.photos.map((photo) => ({ photo, concept })));

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        title="Bộ sưu tập"
        lead={`${photos.length} ảnh từ ${CONCEPTS.length} concept. Chọn một ảnh để xem cả concept.`}
      />
      <section aria-label="Tất cả ảnh" className="px-[var(--gutter)] pb-[clamp(4rem,9vw,8rem)]">
        <ul className="mx-auto max-w-[1920px] columns-2 gap-x-2 sm:gap-x-3 md:columns-3 lg:columns-4 xl:columns-5">
          {photos.map(({ photo, concept }) => (
            <li key={photo.src} className="mb-2 break-inside-avoid sm:mb-3">
              <Reveal>
                <Link href={`/concept/${concept.slug}`} className="group block overflow-hidden">
                  <Photo
                    photo={photo}
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="transition-transform duration-[1400ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
