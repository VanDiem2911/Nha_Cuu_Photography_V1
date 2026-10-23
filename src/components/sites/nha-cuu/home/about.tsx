import { getPhoto } from "@/data/concepts";
import { SITE } from "@/lib/site";
import { Parallax } from "../parallax";
import { Photo } from "../photo";
import { Reveal } from "../reveal";
import { RoundButton } from "../round-button";

export function About() {
  const back = getPhoto("me-va-con-gai-satin", 2);
  const front = getPhoto("bau-vay-trang-nen-xanh-reu", 1);

  return (
    <section
      aria-labelledby="about-title"
      className="px-[var(--gutter)] py-[clamp(4rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal as="h2" className="text-title text-center">
          <span id="about-title">Về Nhà Cừu</span>
        </Reveal>

        <div className="mt-[clamp(3rem,7vw,6rem)] grid grid-cols-12 items-center gap-y-14">
          <div className="relative col-span-11 pb-[22%] sm:col-span-6 sm:col-start-2 lg:col-span-5 lg:col-start-2">
            <Parallax speed={0.03}>
              <Reveal>
                <Photo photo={back} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 80vw" className="w-[78%]" />
              </Reveal>
            </Parallax>
            <Parallax speed={-0.06} className="absolute right-0 bottom-0 w-[56%]">
              <Reveal delay={0.25}>
                <Photo photo={front} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 32vw, 56vw" />
              </Reveal>
            </Parallax>
          </div>

          <div className="col-span-12 sm:col-span-5 sm:col-start-8 lg:col-span-4 lg:col-start-8">
            <Reveal as="p" className="text-lead">
              {SITE.name} có hai chi nhánh ở Thủ Đức và Gò Vấp, Thành phố Hồ Chí Minh. Xem thêm về studio và
              các dịch vụ chụp ảnh tại trang giới thiệu.
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <RoundButton href="/gioi-thieu">Giới thiệu</RoundButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
