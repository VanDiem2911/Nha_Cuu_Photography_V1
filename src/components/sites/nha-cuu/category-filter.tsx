import Link from "next/link";

import { CATEGORIES, CONCEPTS, type CategorySlug } from "@/data/concepts";
import { cn } from "@/lib/utils";

const chip =
  "inline-flex min-h-11 items-center rounded-full border px-5 text-[0.95rem] transition-colors duration-300";

/** Lọc concept theo nhóm bằng liên kết (?loai=), nên dùng được cả khi tắt JavaScript. */
export function CategoryFilter({ current }: { current: CategorySlug | null }) {
  const items = [
    { slug: null, label: "Tất cả", href: "/concept", count: CONCEPTS.length },
    ...CATEGORIES.map((category) => ({
      slug: category.slug,
      label: category.name,
      href: `/concept?loai=${category.slug}`,
      count: CONCEPTS.filter((concept) => concept.category === category.slug).length,
    })),
  ];

  return (
    <nav aria-label="Lọc concept theo nhóm" className="px-[var(--gutter)] pb-[clamp(2rem,5vw,4rem)]">
      <ul className="mx-auto flex max-w-[1920px] flex-wrap gap-2 sm:gap-3">
        {items.map((item) => {
          const active = item.slug === current;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  chip,
                  active
                    ? "border-ink bg-ink text-cream"
                    : "border-line text-ink hover:border-ink",
                )}
              >
                {item.label}
                <span className={cn("ml-2 text-sm", active ? "text-cream/80" : "text-ink-soft")}>
                  {item.count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
