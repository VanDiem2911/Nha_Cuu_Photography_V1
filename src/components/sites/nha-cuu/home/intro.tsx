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
      className="px-[var(--gutter)] pt-[clamp(4rem,10vw,9rem)] pb-[clamp(5rem,9vw,8rem)]"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-start gap-x-4">
        <Parallax speed={0.06} className="col-span-5 col-start-2 sm:col-span-3 sm:col-start-4">
          <Reveal>
            <Photo photo={small} sizes="(min-width: 640px) 22vw, 42vw" />
          </Reveal>
        </Parallax>
        <Parallax
          speed={-0.05}
          className="col-span-6 col-start-7 mt-[16vw] sm:col-span-4 sm:col-start-7 sm:mt-[7vw]"
        >
          <Reveal delay={0.2}>
            <Photo photo={wide} sizes="(min-width: 640px) 32vw, 50vw" />
          </Reveal>
        </Parallax>
      </div>

      <div className="mx-auto mt-[clamp(3.5rem,8vw,7rem)] grid max-w-[1600px] grid-cols-12">
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
