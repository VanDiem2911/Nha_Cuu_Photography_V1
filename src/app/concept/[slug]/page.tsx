import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ConceptCard } from "@/components/sites/nha-cuu/concept-card";
import { Photo } from "@/components/sites/nha-cuu/photo";
import { Reveal } from "@/components/sites/nha-cuu/reveal";
import { RoundButton } from "@/components/sites/nha-cuu/round-button";
import { CONCEPTS, getCategory, getConcept } from "@/data/concepts";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONCEPTS.map((concept) => ({ slug: concept.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const concept = getConcept((await params).slug);
  if (!concept) return {};
  const category = getCategory(concept.category);
  const cover = concept.photos[0];
  return {
    title: concept.name,
    description: `${concept.summary} Concept thuộc nhóm ${category?.name ?? "ảnh"} của ${SITE.name}.`,
    alternates: { canonical: `/concept/${concept.slug}` },
    openGraph: {
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
    },
  };
}

/** Tối đa 3 concept liên quan: ưu tiên cùng nhóm, thiếu thì lấy các concept kế tiếp trong danh sách. */
function relatedConcepts(slug: string) {
  const index = CONCEPTS.findIndex((concept) => concept.slug === slug);
  const sameGroup = CONCEPTS.filter(
    (concept) => concept.slug !== slug && concept.category === CONCEPTS[index]?.category,
  );
  const next = [...CONCEPTS.slice(index + 1), ...CONCEPTS.slice(0, index)].filter(
    (concept) => !sameGroup.includes(concept),
  );
  return [...sameGroup, ...next].slice(0, 3);
}

export default async function ConceptPage({ params }: PageProps) {
  const concept = getConcept((await params).slug);
  if (!concept) notFound();
  const category = getCategory(concept.category);
  const related = relatedConcepts(concept.slug);

  return (
    <>
      <header className="px-[var(--gutter)] pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))] pb-[clamp(2.5rem,6vw,5rem)]">
        <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-8">
          <Reveal as="h1" className="text-display col-span-12 lg:col-span-8">
            {concept.name}
          </Reveal>
          <div className="col-span-12 sm:col-span-10 lg:col-span-4 lg:col-start-9 lg:self-end">
            <Reveal as="p" delay={0.15} className="text-lead text-ink-soft">
              {concept.description}
            </Reveal>
            {category ? (
              <Reveal delay={0.3} className="mt-4">
                <Link
                  href={`/concept?loai=${category.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 text-[0.95rem] text-ink underline underline-offset-4 transition-colors duration-300 hover:text-accent"
                >
                  <ArrowLeft aria-hidden className="size-4" />
                  Các concept {category.name}
                </Link>
              </Reveal>
            ) : null}
          </div>
        </div>
      </header>

      <section
        aria-label={`Ảnh của concept ${concept.name}`}
        className="px-[var(--gutter)] pb-[clamp(4rem,9vw,8rem)]"
      >
        <div className="mx-auto max-w-[1920px] columns-1 gap-x-3 sm:columns-2 md:gap-x-6">
          {concept.photos.map((photo, index) => (
            <div key={photo.src} className="mb-3 break-inside-avoid md:mb-6">
              <Reveal delay={(index % 2) * 0.12}>
                <Photo photo={photo} preload={index === 0} sizes="(min-width: 640px) 48vw, 94vw" />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="book-title"
        className="px-[var(--gutter)] py-[clamp(3rem,8vw,7rem)] text-center"
      >
        <Reveal as="h2" className="text-title">
          <span id="book-title">Thích concept này?</span>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <RoundButton href="/lien-he">Đặt lịch</RoundButton>
        </Reveal>
      </section>

      <section
        aria-labelledby="related-title"
        className="px-[var(--gutter)] pt-[clamp(2rem,5vw,4rem)] pb-[clamp(4rem,9vw,8rem)]"
      >
        <div className="mx-auto max-w-[1920px]">
          <Reveal as="h2" className="text-title">
            <span id="related-title">Concept khác</span>
          </Reveal>
          <div className="mt-[clamp(2rem,5vw,4rem)] grid items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ConceptCard
                key={item.slug}
                concept={item}
                delay={index * 0.1}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 92vw"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
