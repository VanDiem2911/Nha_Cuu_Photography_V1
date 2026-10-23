import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { PageIntro } from "@/components/sites/nha-cuu/page-intro";
import { Reveal } from "@/components/sites/nha-cuu/reveal";
import { formatPrice, PACKAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Bảng giá",
  description: "Các gói chụp ảnh của Nhà Cừu Photography. Liên hệ studio để được tư vấn gói phù hợp.",
  alternates: { canonical: "/bang-gia" },
};

export default function PricingPage() {
  return (
    <>
      <PageIntro
        title="Bảng giá"
        lead="Các gói chụp của studio. Liên hệ để được tư vấn gói và concept phù hợp."
      />
      <section aria-label="Các gói chụp" className="px-[var(--gutter)] pb-[clamp(4rem,9vw,8rem)]">
        <ul className="mx-auto grid max-w-[1920px] gap-6 md:grid-cols-3">
          {PACKAGES.map((item, index) => (
            <li key={item.id} className="flex">
              <Reveal delay={index * 0.12} className="flex w-full">
                <article className="flex w-full flex-col border border-line bg-paper p-8 lg:p-10">
                  <h2 className="font-display text-3xl font-medium">{item.name}</h2>
                  <p className="mt-6 font-display text-5xl font-light">{formatPrice(item.price)}</p>
                  <p className="mt-4 text-ink-soft">{item.description}</p>
                  <ul className="mt-8 flex flex-1 flex-col divide-y divide-line border-y border-line">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 py-3">
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/lien-he"
                    className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-6 text-[0.95rem] transition-colors duration-300 hover:bg-ink hover:text-cream"
                  >
                    Liên hệ gói này
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
