import type { Metadata } from "next";

import { CategoryFilter } from "@/components/sites/nha-cuu/category-filter";
import { ConceptCard } from "@/components/sites/nha-cuu/concept-card";
import { PageIntro } from "@/components/sites/nha-cuu/page-intro";
import { CONCEPTS, parseCategory } from "@/data/concepts";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "Các concept chụp ảnh Bầu, Beauty, Bé và Gia đình tại Nhà Cừu Photography. Chọn nhóm để xem từng concept.",
  alternates: { canonical: "/concept" },
};

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ConceptsPage({ searchParams }: PageProps) {
  const category = parseCategory((await searchParams).loai);
  const list = category ? CONCEPTS.filter((concept) => concept.category === category) : CONCEPTS;

  return (
    <>
      <PageIntro
        title="Concept"
        lead="Mỗi concept là một bối cảnh chụp riêng. Chọn một nhóm để lọc, hoặc xem tất cả."
      />
      <CategoryFilter current={category} />
      <section aria-label="Danh sách concept" className="px-[var(--gutter)] pb-[clamp(4rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1920px] columns-1 gap-x-6 sm:columns-2 lg:columns-3 xl:gap-x-10">
          {list.map((concept, index) => (
            <div key={concept.slug} className="mb-12 break-inside-avoid">
              <ConceptCard
                concept={concept}
                delay={(index % 3) * 0.1}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 92vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
