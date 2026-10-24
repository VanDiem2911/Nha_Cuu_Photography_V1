import { getPhoto } from "@/data/concepts";
import { SITE } from "@/lib/site";
import { Parallax } from "../parallax";
import { Photo } from "../photo";
import { Reveal } from "../reveal";

export function Intro() {
  const small = getPhoto("ao-dai-hong-nen-xanh-reu", 3);
  const wide = getPhoto("so-sinh-long-trang", 1);

  return (
    <section
      aria-label="Giới thiệu ngắn"
      className="px-[var(--gutter)] pt-[clamp(3rem,7vw,6rem)] pb-[clamp(3rem,6vw,5rem)]"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-start gap-x-4">
        <Parallax speed={0.06} className="col-span-6 col-start-1 sm:col-span-4 sm:col-start-3">
          <Reveal>
            <Photo photo={small} sizes="(min-width: 640px) 32vw, 46vw" />
          </Reveal>
        </Parallax>
        <Parallax
          speed={-0.05}
          className="col-span-6 col-start-7 mt-[16vw] sm:col-span-5 sm:col-start-7 sm:mt-[6vw]"
        >
          <Reveal delay={0.2}>
            <Photo photo={wide} sizes="(min-width: 640px) 40vw, 46vw" />
          </Reveal>
        </Parallax>
      </div>

      <div className="mx-auto mt-[clamp(2.5rem,6vw,5rem)] grid max-w-[1600px] grid-cols-12">
        <Reveal
          as="p"
          className="text-lead col-span-12 sm:col-span-9 sm:col-start-2 lg:col-span-6 lg:col-start-4"
        >
          {SITE.name} là studio chụp ảnh tại Thành phố Hồ Chí Minh. Studio chuyên ảnh Bầu, Beauty, Bé và Gia
          đình, ngoài ra nhận chụp ảnh concept cá nhân và ảnh nghệ thuật.
        </Reveal>
      </div>
    </section>
  );
}
