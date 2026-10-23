import { About } from "@/components/sites/nha-cuu/home/about";
import { CategoryLinks } from "@/components/sites/nha-cuu/home/category-links";
import { Cluster } from "@/components/sites/nha-cuu/home/cluster";
import { Connect } from "@/components/sites/nha-cuu/home/connect";
import { Discover } from "@/components/sites/nha-cuu/home/discover";
import { Featured } from "@/components/sites/nha-cuu/home/featured";
import { Hero } from "@/components/sites/nha-cuu/home/hero";
import { Intro } from "@/components/sites/nha-cuu/home/intro";
import { ZoomScene } from "@/components/sites/nha-cuu/home/zoom-scene";
import { getPhoto } from "@/data/concepts";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ZoomScene
        left={[getPhoto("thoi-noi-hong-tho-trang", 0), getPhoto("bau-xanh-pastel-thu-bong", 0)]}
        right={[getPhoto("ao-dai-hong-nen-xanh-reu", 1), getPhoto("gia-dinh-giang-sinh-tuyet-trang", 0)]}
        centerWide={getPhoto("dai-gia-dinh-nen-be", 0)}
        centerTall={getPhoto("me-va-con-gai-satin", 0)}
      />
      <Cluster />
      <CategoryLinks />
      <Discover />
      <Featured />
      <About />
      <Connect />
    </>
  );
}
