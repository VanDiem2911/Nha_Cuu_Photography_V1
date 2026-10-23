# Bản đồ route và quyền sở hữu file (Nhà Cừu Photography, học bố cục từ danieleandmarilia.com)

Trang mẫu chỉ có **một trang** (`/`) là phần được học ở giai đoạn 1; các trang con của trang mẫu (portfolio, stories, about...) không nằm trong phạm vi.
Các route của Nhà Cừu lấy từ yêu cầu của khách (mục 4 trong PROMPT-nha-cuu.md), không lấy theo trang mẫu.

## Route

| Route Nhà Cừu | Học từ (trang mẫu) | Giai đoạn | Trạng thái |
|---|---|---|---|
| `/` | `/` | 1 | Đã dựng: header, hero, giới thiệu ngắn, cảnh ghim phóng ảnh, chữ chạy + cụm ảnh, 4 nhóm ảnh, "Khám phá concept", 3 thẻ concept chồng, "Về Nhà Cừu", lời mời đặt lịch + dải ảnh, footer, nút Zalo/Messenger |
| `/gioi-thieu`, `/concept` (+`?loai=`), `/concept/[slug]` x18, `/bang-gia`, `/bo-suu-tap`, `/chon-concept`, `/dat-lich`, `/lien-he` | không có tương ứng trực tiếp | 2 | Chưa dựng: liên kết đã có sẵn trên trang chủ, hiện rơi vào trang 404 tiếng Việt |
| `robots`, `sitemap`, JSON-LD `Photographer` | – | 2 | Chưa dựng |

## File thuộc giai đoạn 1

- `src/app/layout.tsx`: phông (Cormorant Garamond + Be Vietnam Pro, subset vietnamese), `lang="vi"`, metadata, lớp `html.js`, header, footer, nút nổi.
- `src/app/globals.css`: bảng màu, thang chữ (`text-display/title/jumbo/lead`), kiểu hiện dần, cảnh ghim, menu, thẻ chồng, giảm chuyển động.
- `src/app/page.tsx`, `src/app/not-found.tsx`.
- `src/components/sites/nha-cuu/`: `header.tsx` (header + menu toàn màn hình + thanh tiến độ cuộn), `footer.tsx`, `floating-contact.tsx`,
  `smooth-scroll.tsx` (Lenis), `reveal.tsx`, `parallax.tsx`, `round-button.tsx`, `photo.tsx`, `home/*` (từng section).
- `src/lib/scroll-frame.ts` (một bộ lắng nghe cuộn dùng chung), `src/lib/lenis-store.ts`, `src/hooks/use-reduced-motion.ts`.
- Dữ liệu copy từ D:\HUDI\Nha_Cuu_Photography (chỉ đọc, không sửa bản gốc): `src/data/{concepts,packages,photo-sizes}`, `src/lib/{site,site-url}.ts`.
  Đã đổi đường dẫn ảnh sang `/sites/nha-cuu/photos/` và thêm `getPhoto()`.
- Ảnh: `public/sites/nha-cuu/photos/` (68 ảnh web 1600px, copy nguyên từ D:\HUDI\Nha_Cuu_Photography\public\photos), `public/sites/nha-cuu/logo.png`, `src/app/icon.png`.

## Tái sử dụng so với dự án D:\HUDI\Nha_Cuu_Photography

Chỉ copy dữ liệu, ảnh, logo, icon (đúng như khách cho phép). Toàn bộ giao diện và hiệu ứng dựng mới theo nhịp của trang mẫu; không copy component giao diện cũ.

## Ảnh trên trang chủ

Nguồn: 68 ảnh studio đã xử lý. Không dùng ảnh nào của trang mẫu. Ảnh hero: `bau-voan-anh-vang-2`. Mọi ảnh giữ đúng tỉ lệ 2:3 hoặc 3:2 (không crop);
ảnh dọc/ngang được chọn theo ô chứa (ví dụ ảnh giữa của cảnh ghim là ảnh ngang 3:2 ở màn rộng, ảnh dọc 2:3 ở màn hẹp).
