import { CONCEPTS } from "@/data/concepts";
import { Reveal } from "../reveal";

export function Discover() {
  return (
    <section
      aria-labelledby="discover-title"
      className="px-[var(--gutter)] pb-[clamp(4rem,8vw,7rem)]"
    >
      <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-8">
        <Reveal as="h2" className="text-title col-span-12 lg:col-span-7">
          <span id="discover-title">Khám phá concept</span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.15}
          className="text-lead col-span-12 sm:col-span-9 lg:col-span-4 lg:col-start-6"
        >
          Studio hiện có {CONCEPTS.length} concept cho ảnh Bầu, Beauty, Bé và Gia đình. Xem từng concept, rồi
          liên hệ studio để đặt lịch.
        </Reveal>
      </div>
    </section>
  );
}
