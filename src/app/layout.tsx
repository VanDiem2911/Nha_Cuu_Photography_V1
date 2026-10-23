import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";

import { FloatingContact } from "@/components/sites/nha-cuu/floating-contact";
import { Footer } from "@/components/sites/nha-cuu/footer";
import { Header } from "@/components/sites/nha-cuu/header";
import { PhotographerJsonLd } from "@/components/sites/nha-cuu/structured-data";
import { SmoothScroll } from "@/components/sites/nha-cuu/smooth-scroll";
import { SITE_URL } from "@/lib/site-url";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

const description =
  "Nhà Cừu Photography là studio chụp ảnh tại Thành phố Hồ Chí Minh, chuyên ảnh Bầu, Beauty, Bé và Gia đình. Xem concept, bảng giá và liên hệ đặt lịch chụp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | Studio chụp ảnh Bầu, Beauty, Bé và Gia đình`,
    template: `%s | ${SITE.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: SITE.name,
    title: `${SITE.name} | Studio chụp ảnh Bầu, Beauty, Bé và Gia đình`,
    description,
    images: [
      {
        url: "/sites/nha-cuu/photos/bau-voan-anh-vang-2.jpg",
        width: 1067,
        height: 1600,
        alt: "Ảnh Bầu concept voan ánh vàng của Nhà Cừu Photography",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f0",
};

// Đặt lớp "js" trước khi vẽ trang: hiệu ứng hiện dần chỉ ẩn nội dung khi có JavaScript.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body className="min-h-screen bg-cream font-sans text-ink">
        <PhotographerJsonLd />
        <SmoothScroll />
        <a
          href="#noi-dung"
          className="fixed top-2 left-2 z-[60] -translate-y-20 rounded-full bg-ink px-5 py-3 text-sm text-cream focus:translate-y-0"
        >
          Bỏ qua, tới nội dung chính
        </a>
        <Header />
        <main id="noi-dung">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
