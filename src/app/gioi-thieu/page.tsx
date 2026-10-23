import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { Parallax } from "@/components/sites/nha-cuu/parallax";
import { Photo } from "@/components/sites/nha-cuu/photo";
import { Reveal } from "@/components/sites/nha-cuu/reveal";
import { RoundButton } from "@/components/sites/nha-cuu/round-button";
import { CATEGORIES, getPhoto } from "@/data/concepts";
import { BRANCHES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Nhà Cừu Photography là studio chụp ảnh tại Thành phố Hồ Chí Minh, chuyên ảnh Bầu, Beauty, Bé và Gia đình, có hai chi nhánh ở Thủ Đức và Gò Vấp.",
  alternates: { canonical: "/gioi-thieu" },
};

// Lời văn trang này là bản nháp, chỉ dùng dữ kiện khách đã cung cấp (dịch vụ, chi nhánh, đối tượng khách).
// Studio nên xem lại và bổ sung câu chuyện thật của mình.
const STUDIO_PARAGRAPHS = [
  "Nhà Cừu là studio chụp ảnh ở Thành phố Hồ Chí Minh, có hai chi nhánh ở Thủ Đức và Gò Vấp.",
  "Studio chuyên chụp ảnh Bầu, Beauty, Bé và Gia đình, đồng thời nhận chụp ảnh concept cá nhân và ảnh nghệ thuật.",
  "Bạn đến để giữ lại một dịp đáng nhớ: những tháng mang thai, buổi thôi nôi của bé, một ngày sinh nhật hay một bộ ảnh riêng cho chính mình.",
  "Hãy xem các concept để chọn bối cảnh bạn thích, rồi nhắn Zalo hoặc gọi cho studio để đặt lịch.",
];

const MEMORY_PARAGRAPHS = [
  "Có những ngày đi qua rất nhanh: bụng bầu tròn dần, bé chập chững những bước đầu tiên, cả nhà có mặt đông đủ bên nhau.",
  "Một bộ ảnh đẹp giúp giữ lại những ngày ấy, để nhiều năm sau bạn vẫn nhìn thấy mình và những người thân yêu.",
  "Với các bạn trẻ, đó có thể là bộ ảnh concept cá nhân hay ảnh sinh nhật, một món quà bạn tự dành cho mình.",
];

const photo = getPhoto;

export default function AboutPage() {
  return (
    <>
      {/* 1. Ảnh ngang rộng hết bề ngang */}
      <section
        aria-label="Ảnh đại gia đình"
        className="px-[var(--gutter)] pt-[calc(var(--header-h)+clamp(1rem,2vw,2rem))]"
      >
        <div className="mx-auto max-w-[1920px]">
          <Reveal>
            <Photo
              photo={photo("dai-gia-dinh-nen-be", 0)}
              preload
              sizes="(min-width: 1920px) 1880px, 96vw"
              alt="Cả đại gia đình ba thế hệ trong một khung hình, phông be ấm"
            />
          </Reveal>
        </div>
      </section>

      {/* 2. Giới thiệu studio: chữ bên trái, lưới ảnh dọc trôi nhẹ bên phải */}
      <section
        aria-labelledby="studio-title"
        className="px-[var(--gutter)] py-[clamp(4rem,10vw,9rem)]"
      >
        <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-5 lg:pr-8">
            <Reveal as="h1" className="text-title">
              <span id="studio-title">Nhà Cừu Photography</span>
            </Reveal>
            <div className="mt-8 max-w-md space-y-5 text-[1.0625rem] leading-relaxed lg:mt-10">
              {STUDIO_PARAGRAPHS.map((text, index) => (
                <Reveal key={text} as="p" delay={0.1 + index * 0.1}>
                  {text}
                </Reveal>
              ))}
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-2 items-start gap-x-3 sm:gap-x-5 lg:col-span-7 xl:col-span-6 xl:col-start-7">
            <div className="flex flex-col gap-3 sm:gap-5">
              <Parallax speed={0.04}>
                <Reveal>
                  <Photo
                    photo={photo("me-va-con-gai-satin", 1)}
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, 46vw"
                  />
                </Reveal>
              </Parallax>
              <Parallax speed={0.1}>
                <Reveal delay={0.1}>
                  <Photo
                    photo={photo("thoi-noi-hong-tho-trang", 1)}
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, 46vw"
                  />
                </Reveal>
              </Parallax>
            </div>
            <div className="mt-[18%] flex flex-col gap-3 sm:gap-5">
              <Parallax speed={-0.03}>
                <Reveal delay={0.15}>
                  <Photo
                    photo={photo("bau-vay-trang-nen-xanh-reu", 0)}
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, 46vw"
                  />
                </Reveal>
              </Parallax>
              <Parallax speed={0.06}>
                <Reveal delay={0.25}>
                  <Photo
                    photo={photo("gia-dinh-giang-sinh-tuyet-trang", 0)}
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, 46vw"
                  />
                </Reveal>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hai ảnh ngang cạnh nhau */}
      <section aria-label="Ảnh bé sơ sinh và thôi nôi" className="px-[var(--gutter)] pb-[clamp(4rem,10vw,9rem)]">
        <div className="mx-auto grid max-w-[1920px] gap-3 sm:grid-cols-2 sm:gap-5">
          <Reveal>
            <Photo photo={photo("so-sinh-long-trang", 1)} sizes="(min-width: 640px) 48vw, 94vw" />
          </Reveal>
          <Reveal delay={0.15}>
            <Photo photo={photo("thoi-noi-hoa-vintage", 1)} sizes="(min-width: 640px) 48vw, 94vw" />
          </Reveal>
        </div>
      </section>

      {/* 4. Một tấm ảnh, một ký ức */}
      <section
        aria-labelledby="memory-title"
        className="px-[var(--gutter)] pb-[clamp(4rem,10vw,9rem)]"
      >
        <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-10">
          <Reveal as="h2" className="text-title col-span-12 lg:col-span-7">
            <span id="memory-title">Một tấm ảnh, một ký ức</span>
          </Reveal>
          <div className="col-span-12 max-w-lg space-y-5 text-[1.0625rem] leading-relaxed lg:col-span-4 lg:col-start-8">
            {MEMORY_PARAGRAPHS.map((text, index) => (
              <Reveal key={text} as="p" delay={0.1 + index * 0.1}>
                {text}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hai ảnh dọc lớn, ảnh thứ hai lệch xuống */}
      <section aria-label="Ảnh Beauty và Bầu" className="px-[var(--gutter)] pb-[clamp(4rem,10vw,9rem)]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 items-start gap-x-3 sm:gap-x-6">
          <Parallax speed={0.03}>
            <Reveal>
              <Photo photo={photo("ao-dai-hong-nen-xanh-reu", 3)} sizes="(min-width: 1600px) 780px, 48vw" />
            </Reveal>
          </Parallax>
          <Parallax speed={0.1} className="mt-[14%]">
            <Reveal delay={0.15}>
              <Photo photo={photo("bau-voan-anh-vang", 0)} sizes="(min-width: 1600px) 780px, 48vw" />
            </Reveal>
          </Parallax>
        </div>
      </section>

      {/* 6. Studio chụp gì */}
      <section aria-labelledby="services-title" className="px-[var(--gutter)] pb-[clamp(4rem,10vw,9rem)]">
        <div className="mx-auto max-w-[1920px]">
          <Reveal as="h2" className="text-title">
            <span id="services-title">Studio chụp gì</span>
          </Reveal>
          <ul className="mt-[clamp(2rem,5vw,4rem)] border-t border-line">
            {CATEGORIES.map((category, index) => (
              <li key={category.slug} className="border-b border-line">
                <Reveal delay={index * 0.08}>
                  <Link
                    href={`/concept?loai=${category.slug}`}
                    className="group grid min-h-24 items-center gap-x-8 gap-y-2 py-6 sm:grid-cols-12"
                  >
                    <span className="font-display text-[clamp(1.75rem,3.4vw,3rem)] leading-tight font-medium transition-colors duration-300 group-hover:text-accent sm:col-span-5">
                      {category.name}
                    </span>
                    <span className="text-ink-soft sm:col-span-6">{category.blurb}</span>
                    <ArrowDownRight
                      aria-hidden
                      className="hidden size-6 justify-self-end transition-transform duration-500 ease-out group-hover:-rotate-45 sm:col-span-1 sm:block motion-reduce:transition-none"
                    />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Hai chi nhánh */}
      <section aria-labelledby="branches-title" className="px-[var(--gutter)] pb-[clamp(4rem,10vw,9rem)]">
        <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-10">
          <Reveal as="h2" className="text-title col-span-12 lg:col-span-5">
            <span id="branches-title">Hai chi nhánh</span>
          </Reveal>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              {BRANCHES.map((branch, index) => (
                <Reveal key={branch.id} delay={0.1 + index * 0.1}>
                  <address className="not-italic">
                    <p className="font-display text-2xl font-medium">{branch.name}</p>
                    <p className="mt-2 text-ink-soft">{branch.address}</p>
                  </address>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3} className="mt-8">
              <Link
                href="/lien-he"
                className="inline-flex min-h-12 items-center rounded-full border border-ink px-6 text-[0.95rem] transition-colors duration-300 hover:bg-ink hover:text-cream"
              >
                Xem bản đồ và chỉ đường
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Lời mời liên hệ */}
      <section
        aria-labelledby="contact-title"
        className="px-[var(--gutter)] pb-[clamp(5rem,10vw,9rem)] text-center"
      >
        <Reveal as="h2" className="text-title">
          <span id="contact-title">Cùng hẹn một buổi chụp</span>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <RoundButton href="/lien-he">Liên hệ</RoundButton>
        </Reveal>
        <Reveal as="p" delay={0.3} className="mt-6 text-ink-soft">
          Gọi hoặc nhắn Zalo {SITE.phoneDisplay}
        </Reveal>
      </section>
    </>
  );
}
