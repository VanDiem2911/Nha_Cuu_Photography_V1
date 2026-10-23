# Bản đồ route và quyền sở hữu file (Nhà Cừu Photography, học bố cục từ danieleandmarilia.com)

Trang mẫu chỉ có **một trang** (`/`) là phần được học ở giai đoạn 1; các trang con của trang mẫu (portfolio, stories, about...) không nằm trong phạm vi.
Các route của Nhà Cừu lấy từ yêu cầu của khách (mục 4 trong PROMPT-nha-cuu.md), không lấy theo trang mẫu.

## Route

| Route Nhà Cừu | Học từ (trang mẫu) | Giai đoạn | Trạng thái |
|---|---|---|---|
| `/` | `/` | 1 | Đã dựng (hero dùng ảnh gia đình `gia-dinh-vay-kem-canh-kho-1`) |
| `/gioi-thieu` | `/about` | 2 | Đã dựng theo nhịp trang mẫu: tiêu đề lớn + ảnh ngang rộng, khối chữ + lưới ảnh dọc trôi nhẹ, cặp ảnh ngang, tiêu đề + đoạn chữ hẹp, cặp ảnh dọc lệch nhau, "Studio chụp gì", "Hai chi nhánh", lời mời liên hệ. BỎ: dải logo báo, lời khen khách, form kiểu điền chỗ trống |
| `/concept` (+`?loai=bau\|beauty\|be\|gia-dinh`) | không có tương ứng | 2 | Đã dựng, lọc bằng liên kết (dùng được khi tắt JavaScript) |
| `/concept/[slug]` x18 | không có tương ứng | 2 | Đã dựng (tĩnh, `generateStaticParams`) |
| `/bang-gia` | không có tương ứng | 2 | Đã dựng, giá là dữ liệu mẫu |
| `/bo-suu-tap` | không có tương ứng | 2 | Đã dựng: 68 ảnh, mỗi ảnh dẫn tới concept của nó |
| `/lien-he` | `/contact-us` | 2 | Đã dựng: 4 kênh liên hệ, 2 chi nhánh, bản đồ nhúng, chỉ đường |
| `robots`, `sitemap`, JSON-LD `Photographer` | – | 2 | Đã dựng |
| `/dat-lich`, `/chon-concept`, SQLite | – | – | **Khách yêu cầu bỏ** ("bỏ cái đặt lịch"): không dựng, không có form hay cơ sở dữ liệu. Các nút "Đặt lịch" dẫn tới `/lien-he` |

## File (giai đoạn 1 và 2)

- `src/app/layout.tsx`: phông (Cormorant Garamond + Be Vietnam Pro, subset vietnamese), `lang="vi"`, metadata, lớp `html.js`, header, footer, nút nổi.
- `src/app/globals.css`: bảng màu, thang chữ (`text-display/title/jumbo/lead`), kiểu hiện dần, cảnh ghim, menu, thẻ chồng, giảm chuyển động.
- `src/app/page.tsx`, `src/app/not-found.tsx`.
- `src/components/sites/nha-cuu/`: `header.tsx` (header + menu toàn màn hình + thanh tiến độ cuộn), `footer.tsx`, `floating-contact.tsx`,
  `smooth-scroll.tsx` (Lenis), `reveal.tsx`, `parallax.tsx`, `round-button.tsx`, `photo.tsx`, `home/*` (từng section).
- `src/lib/scroll-frame.ts` (một bộ lắng nghe cuộn dùng chung), `src/lib/lenis-store.ts`, `src/hooks/use-reduced-motion.ts`.
- Dữ liệu copy từ D:\HUDI\Nha_Cuu_Photography (chỉ đọc, không sửa bản gốc): `src/data/{concepts,packages,photo-sizes}`, `src/lib/{site,site-url}.ts`.
  Đã đổi đường dẫn ảnh sang `/sites/nha-cuu/photos/` và thêm `getPhoto()`.
- Giai đoạn 2: `src/app/{gioi-thieu,concept,concept/[slug],bang-gia,bo-suu-tap,lien-he}/page.tsx`, `robots.ts`, `sitemap.ts`, `components/sites/nha-cuu/{page-intro,category-filter,concept-card,structured-data}.tsx`.
- Ảnh: `public/sites/nha-cuu/photos/` (68 ảnh web 1600px, copy nguyên từ D:\HUDI\Nha_Cuu_Photography\public\photos), `public/sites/nha-cuu/logo.png`, `src/app/icon.png`.

## Tái sử dụng so với dự án D:\HUDI\Nha_Cuu_Photography

Chỉ copy dữ liệu, ảnh, logo, icon (đúng như khách cho phép). Toàn bộ giao diện và hiệu ứng dựng mới theo nhịp của trang mẫu; không copy component giao diện cũ.

## Ảnh trên trang chủ

Nguồn: 68 ảnh studio đã xử lý. Không dùng ảnh nào của trang mẫu. Ảnh hero: `bau-voan-anh-vang-2`. Mọi ảnh giữ đúng tỉ lệ 2:3 hoặc 3:2 (không crop);
ảnh dọc/ngang được chọn theo ô chứa (ví dụ ảnh giữa của cảnh ghim là ảnh ngang 3:2 ở màn rộng, ảnh dọc 2:3 ở màn hẹp).
