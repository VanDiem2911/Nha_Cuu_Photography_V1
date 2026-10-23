import { BRANCHES, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/site-url";

const phoneE164 = `+84${SITE.phone.slice(1)}`;

/** Dữ liệu có cấu trúc schema.org Photographer, chỉ gồm thông tin khách đã cung cấp. */
export function PhotographerJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    "@id": `${SITE_URL}/#studio`,
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}/sites/nha-cuu/logo.png`,
    image: `${SITE_URL}/sites/nha-cuu/photos/bau-voan-anh-vang-2.jpg`,
    description: SITE.tagline,
    telephone: phoneE164,
    sameAs: [SITE.facebook],
    areaServed: { "@type": "City", name: "Thành phố Hồ Chí Minh" },
    branch: BRANCHES.map((branch) => ({
      "@type": "Photographer",
      name: `${SITE.name} - ${branch.name.replace("Chi nhánh ", "")}`,
      telephone: phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.streetAddress,
        addressLocality: "Thành phố Hồ Chí Minh",
        addressCountry: "VN",
      },
      ...("geo" in branch
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: branch.geo.lat,
              longitude: branch.geo.lng,
            },
          }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
