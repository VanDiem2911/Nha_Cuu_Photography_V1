import type { Metadata } from "next";

import { PageIntro } from "@/components/sites/nha-cuu/page-intro";
import { Reveal } from "@/components/sites/nha-cuu/reveal";
import { BRANCHES, mapDirectionsUrl, mapEmbedUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ và đặt lịch",
  description:
    "Đặt lịch chụp bằng cách nhắn Zalo, Messenger hoặc gọi 098 582 09 92. Địa chỉ hai chi nhánh Thủ Đức và Gò Vấp, bản đồ và chỉ đường.",
  alternates: { canonical: "/lien-he" },
};

const CHANNELS = [
  { label: "Gọi điện", detail: SITE.phoneDisplay, href: `tel:${SITE.phone}`, external: false },
  { label: "Nhắn Zalo", detail: SITE.phoneDisplay, href: SITE.zalo, external: true },
  { label: "Messenger", detail: "Nhà Cừu Photography", href: SITE.messenger, external: true },
  { label: "Facebook", detail: "facebook.com/NhaCuuPhotography", href: SITE.facebook, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Liên hệ và đặt lịch"
        lead="Để đặt lịch chụp, nhắn Zalo hoặc Messenger, hoặc gọi trực tiếp cho studio."
      />

      <section aria-label="Cách liên hệ" className="px-[var(--gutter)] pb-[clamp(4rem,9vw,8rem)]">
        <ul className="mx-auto max-w-[1920px] border-t border-line">
          {CHANNELS.map((channel, index) => (
            <li key={channel.label} className="border-b border-line">
              <Reveal delay={index * 0.08}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex min-h-20 flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-5"
                >
                  <span className="font-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium transition-colors duration-300 group-hover:text-accent">
                    {channel.label}
                  </span>
                  <span className="text-lead text-ink-soft">{channel.detail}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="branches-title" className="px-[var(--gutter)] pb-[clamp(4rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1920px]">
          <Reveal as="h2" className="text-title">
            <span id="branches-title">Hai chi nhánh</span>
          </Reveal>
          <div className="mt-[clamp(2rem,5vw,4rem)] grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {BRANCHES.map((branch, index) => (
              <Reveal key={branch.id} delay={index * 0.1}>
                <article>
                  <h3 className="font-display text-3xl font-medium">{branch.name}</h3>
                  <address className="mt-3 not-italic text-ink-soft">{branch.address}</address>
                  <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-line bg-ivory sm:aspect-[16/10]">
                    <iframe
                      title={`Bản đồ ${branch.name}`}
                      src={mapEmbedUrl(branch.mapQuery)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="size-full border-0"
                    />
                  </div>
                  <a
                    href={mapDirectionsUrl(branch.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-12 items-center rounded-full border border-ink px-6 text-[0.95rem] transition-colors duration-300 hover:bg-ink hover:text-cream"
                  >
                    Chỉ đường tới {branch.name.replace("Chi nhánh ", "")}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
