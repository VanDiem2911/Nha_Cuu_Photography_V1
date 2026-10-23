import type { MetadataRoute } from "next";

import { CONCEPTS } from "@/data/concepts";
import { SITE_URL } from "@/lib/site-url";

const PAGES = ["/", "/gioi-thieu", "/concept", "/bang-gia", "/bo-suu-tap", "/lien-he"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...PAGES, ...CONCEPTS.map((concept) => `/concept/${concept.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` }));
}
