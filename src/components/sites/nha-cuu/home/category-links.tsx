import Link from "next/link";

import type { CategorySlug } from "@/data/concepts";
import { Reveal } from "../reveal";

const GROUPS: { slug: CategorySlug; label: string }[] = [
  { slug: "bau", label: "Ảnh Bầu" },
  { slug: "beauty", label: "Beauty" },
  { slug: "be", label: "Ảnh Bé" },
  { slug: "gia-dinh", label: "Gia đình" },
];

/** Bốn nhóm ảnh của studio, chữ rất lớn, mỗi dòng dẫn tới danh sách concept đã lọc. */
export function CategoryLinks() {
  return (
    <section
      aria-label="Các nhóm ảnh"
      className="px-[var(--gutter)] py-[clamp(4rem,10vw,9rem)] text-center"
    >
      <ul className="text-jumbo">
        {GROUPS.map((group, index) => (
          <li key={group.slug}>
            <Reveal delay={index * 0.12}>
              <Link
                href={`/concept?loai=${group.slug}`}
                className="inline-block min-h-11 px-3 transition-colors duration-500 hover:text-accent focus-visible:text-accent"
              >
                {group.label}
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
