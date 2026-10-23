import Link from "next/link";

import { getCategory, type Concept } from "@/data/concepts";
import { Photo } from "./photo";
import { Reveal } from "./reveal";

type ConceptCardProps = {
  concept: Concept;
  sizes: string;
  delay?: number;
};

/** Thẻ concept: ảnh bìa giữ nguyên tỉ lệ (không cắt), tên và một câu mô tả. */
export function ConceptCard({ concept, sizes, delay = 0 }: ConceptCardProps) {
  const category = getCategory(concept.category);
  return (
    <Reveal delay={delay}>
      <Link href={`/concept/${concept.slug}`} className="group block">
        <div className="overflow-hidden">
          <Photo
            photo={concept.photos[0]}
            sizes={sizes}
            alt={`${concept.name}, ảnh bìa`}
            className="transition-transform duration-[1400ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight font-medium transition-colors duration-300 group-hover:text-accent sm:text-[1.7rem]">
          {concept.name}
        </h3>
        <p className="mt-1 text-[0.95rem] leading-snug text-ink-soft">
          {category ? `${category.name}, ` : ""}
          {concept.photos.length} ảnh
        </p>
      </Link>
    </Reveal>
  );
}
