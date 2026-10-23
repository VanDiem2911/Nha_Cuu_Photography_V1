# Brief: dựng website Nhà Cừu Photography theo mẫu thiết kế của danieleandmarilia.com

## 0. Quy tắc cao nhất (ghi đè mặc định của skill clone-website)

Skill `clone-website` mặc định "giữ nguyên chữ, ảnh, phông của trang nguồn". **Lần này KHÔNG làm vậy.** Đây là dựng website cho một studio khác, lấy trang mẫu làm cảm hứng thiết kế.

- **Chỉ học từ trang mẫu:** thứ tự và nhịp các section, bố cục lưới ảnh, khoảng trắng, thang cỡ chữ, cách ảnh và chữ chuyển động khi cuộn/rê chuột, hành vi của header, menu, nút.
- **KHÔNG lấy:** ảnh, logo, lời văn, tên tạp chí/báo (Vogue, Brides, Wedluxe, Harper's Bazaar, Elle…), tên địa điểm/bài viết, "D&M", chữ ký, phông riêng của họ, mọi số liệu.
- Mọi ảnh, chữ, logo trên website kết quả là của **Nhà Cừu Photography**.
- **Không bịa:** giải thưởng, báo chí, lượt đánh giá, con số, tuyên bố "nổi tiếng/hàng đầu". Giá trong `packages.ts` chỉ là dữ liệu mẫu.
- **Màu sắc không theo trang mẫu** (đen–trắng–xám). Dùng bảng màu ở mục 3.

## 1. Thông tin doanh nghiệp (do khách điền, đừng suy diễn thêm)

- Tên: **Nhà Cừu Photography**. Ngành: studio chụp ảnh. Tỉnh/TP: Hồ Chí Minh.
- SĐT / Zalo: **098 582 09 92** (gọi: `tel:0985820992`, Zalo: `https://zalo.me/0985820992`).
- Facebook: https://www.facebook.com/NhaCuuPhotography/ (Messenger: `https://m.me/NhaCuuPhotography`).
- Google Maps (chi nhánh Thủ Đức, toạ độ 10.8592999, 106.7580476):
  `https://www.google.com/maps/place/Nh%C3%A0+C%E1%BB%ABu+Photography+-+Th%E1%BB%A7+%C4%90%E1%BB%A9c+(Studio+ch%E1%BB%A5p+%E1%BA%A3nh+B%E1%BA%A7u,+Gia+%C4%91%C3%ACnh,+B%C3%A9,+Beauty)/@10.8562963,106.7376402,15z/data=!4m10!1m2!2m1!1zc3R1ZGlvIGNo4bulcCDhuqNuaA!3m6!1s0x317527c9f5619eab:0x175519d1d0e6a4e0!8m2!3d10.8592999!4d106.7580476`
- Website hiện tại: chưa có. Mục tiêu website: **giới thiệu studio và dịch vụ, nhận yêu cầu đặt lịch**.
- Dịch vụ: chụp ảnh concept cá nhân; chụp ảnh nghệ thuật; chuyên chụp ảnh **Bầu, Beauty, Bé, Gia đình**.
- Khách hàng mục tiêu: nữ 18–35 tuổi; sinh viên; người thích chụp ảnh nghệ thuật; khách muốn lưu giữ kỷ niệm, chụp sinh nhật hoặc concept cá nhân.
- Hai chi nhánh:
  - **Thủ Đức:** 27 đường số 9, phường Linh Xuân (phường Linh Tây cũ), khách hay gọi là "khu phố 56".
  - **Gò Vấp:** 89 đường số 3, Cityland Park Hills, phường Gò Vấp (mới), cạnh LOTTE Mart.
- Điểm mạnh/USP: khách chưa cung cấp, **đừng tự nghĩ ra**.
- Phong cách khách chọn: **hiện đại, tươi sáng, trắng kem**.
- Yêu cầu kỹ thuật của khách: viết fullstack bằng Next.js, **không thiết kế thừa, viết phải đúng**, dùng ảnh của studio trong Drive.

## 2. Ảnh và logo (đã xử lý sẵn, chỉ đọc, copy sang dự án này)

Agent không đăng nhập được Google Drive (`https://drive.google.com/drive/u/0/folders/1tXdG5x9ioPI5C211IJPoInHraDDZGM9I`), hãy dùng file cục bộ:

- **Ảnh web đã tối ưu:** `D:\HUDI\Nha_Cuu_Photography\public\photos\` — 68 file `.jpg`, cạnh dài tối đa 1600px, **46 ảnh dọc (tỉ lệ 2:3) và 22 ảnh ngang (3:2)**. Tên file: `<slug-concept>-<số>.jpg`. Kích thước từng ảnh: `D:\HUDI\Nha_Cuu_Photography\src\data\photo-sizes.json`. Copy vào `public/sites/nha-cuu/photos/`.
- **Logo:** `D:\HUDI\Nha_Cuu_Photography\public\logo.png` (nền trong suốt, 1010×354, màu xám đậm). Logo gốc có in một số điện thoại cũ, bản này đã cắt bỏ. Icon trình duyệt: `src\app\icon.png`.
- **Ảnh gốc:** `D:\HUDI\Nha_Cuu_Photography\DN0112\` (70 file tải từ Drive: 68 ảnh trên, logo gốc, và 1 ảnh ngang 1958×745 chưa dùng). **Không đưa bản gốc lên web, không sửa, không xóa.**
- **18 concept** (slug: số ảnh). Tên hiển thị và mô tả trong `src\data\concepts.ts` là **bản nháp** ghép theo nội dung ảnh, studio chưa xác nhận.
  - Bầu (17): bau-xanh-pastel-thu-bong 3, bau-giang-sinh-do 4, bau-den-trang-toi-gian 4, bau-voan-anh-vang 3, bau-vay-trang-nen-xanh-reu 3
  - Beauty (5): ao-dai-hong-nen-xanh-reu 5
  - Bé (25): be-giang-sinh-tuyet-trang 4, be-giang-sinh-gau-bong 3, me-va-be-giang-sinh-do 3, thoi-noi-hong-tho-trang 3, thoi-noi-hoa-vintage 3, thoi-noi-nen-den 4, so-sinh-long-trang 5
  - Gia đình (21): gia-dinh-vay-kem-canh-kho 5, dai-gia-dinh-nen-be 4, me-va-con-gai-satin 4, gia-dinh-giang-sinh-tuyet-trang 5, gia-dinh-nen-den 3
- **Giữ đúng tỉ lệ ảnh.** Ảnh dọc là 2:3, đừng cắt ép sang 4:5, vuông hay khung hẹp làm mất đầu/chân. Nếu cần crop, kiểm tra từng ảnh bằng mắt.

## 3. Phong cách và quy tắc thiết kế (khách đã yêu cầu trong quá trình làm)

- **Bảng màu:** nền kem `#fbf7f0`, ivory `#f6efe2`, giấy `#fffdf9`, hồng nhạt `#f5e6dd`, chữ `#2b2623`, chữ phụ `#6a5f57`, viền `#e7ddcf`, nhấn `#a64b36`. Tông nền nhạt lấy từ phông trong ảnh: hồng `#f6e3dc`, xanh rêu `#e5eadb`, cát `#f1e7d3`, xanh trời `#e3e9f0`.
- **Phông:** Cormorant Garamond (tiêu đề) + Be Vietnam Pro (nội dung) qua `next/font`, subset `vietnamese`. Không dùng phông của trang mẫu. Nếu dùng tiêu đề chữ HOA, kiểm tra dấu tiếng Việt hiển thị đúng.
- **Tối giản:** không nhãn nhỏ viết hoa phía trên tiêu đề; không huy hiệu hay họa tiết trang trí thừa; không làm một thẻ nào "nổi bật" hơn thẻ cùng hàng; đoạn mô tả tối đa 1–2 câu; footer gọn (một hàng liên hệ + địa chỉ hai chi nhánh + bản quyền).
- **Chuyển động:** hiện dần khi cuộn (cuộn lên cũng chạy lại), chậm (≥ 1,2 giây), ảnh trôi nhẹ theo cuộn, thanh tiến độ cuộn, bấm menu thì về đầu trang. **Tự tắt khi người dùng bật "giảm chuyển động"; tắt JavaScript nội dung vẫn hiện đủ.**
- Chạm ≥ 44px, tương phản chữ ≥ 4.5:1, alt tiếng Việt, `lang="vi"`, không tràn ngang từ 320px đến 2560px.

## 4. Trang và chức năng cần có

Trang chủ `/` · Giới thiệu `/gioi-thieu` · Danh sách concept `/concept` (lọc `?loai=bau|beauty|be|gia-dinh`) · Chi tiết concept `/concept/[slug]` (18 trang) · Bảng giá theo gói `/bang-gia` · Bộ sưu tập ảnh `/bo-suu-tap` · Chọn concept `/chon-concept` (tối đa 3, chuyển sang `/dat-lich?concept=...`) · Đặt lịch chụp `/dat-lich` · Liên hệ `/lien-he` (hai chi nhánh, bản đồ nhúng, chỉ đường) · Nút Zalo/Messenger cố định ở góc · robots, sitemap, dữ liệu có cấu trúc `Photographer`.

**Quản lý yêu cầu đặt lịch:** khách có ghi trong yêu cầu ban đầu nhưng sau đó đã quyết định **không làm trang admin**. Chỉ lưu yêu cầu vào cơ sở dữ liệu, không dựng đăng nhập hay trang quản trị.

**Form đặt lịch** (Server Action + SQLite `better-sqlite3`):
- Trường: họ tên, SĐT/Zalo, chi nhánh (Thủ Đức/Gò Vấp), ngày mong muốn (từ hôm nay đến 180 ngày, theo giờ Việt Nam), buổi (sáng/chiều/chưa rõ), gói chụp (không bắt buộc), concept (≤ 3), ghi chú (≤ 500 ký tự).
- Kiểm tra ở cả form (báo lỗi khi rời ô) lẫn server (nguồn kiểm tra cuối cùng). Chuẩn hoá SĐT về dạng `0xxxxxxxxx`. Mỗi SĐT gửi tối đa 3 yêu cầu/24 giờ. Có ô mồi chống bot. Lỗi hiển thị cạnh từng ô và có bảng tóm tắt ở đầu form được focus, liên kết tới từng ô.
- **Có thể copy (không sửa bản gốc)** từ `D:\HUDI\Nha_Cuu_Photography`: `src\lib\{booking-validation,bookings,db,dates,site,site-url}.ts`, `src\data\{concepts,packages}.ts`, `src\app\(site)\dat-lich\{actions.ts,booking-form.tsx}`. Nhớ cài `better-sqlite3` và `@types/better-sqlite3`.

## 5. Quan sát trang mẫu (gợi ý ban đầu, PHẢI tự kiểm chứng trong trình duyệt)

Từ HTML trang chủ: có vẻ dựng bằng Webflow, tiếng Anh, đen–trắng–xám, tiêu đề chữ hoa cỡ rất lớn, nặng về ảnh. Thứ tự section và cách ánh xạ sang Nhà Cừu:

| Trang mẫu | Nhà Cừu |
|---|---|
| Header: logo, chỉ số tiến độ cuộn "0%", nút "Book now", nút menu | Logo Nhà Cừu, tiến độ cuộn, nút "Đặt lịch chụp", menu |
| Hero: tiêu đề chữ lớn xếp tầng + nút tròn có mũi tên | Tiêu đề lớn "Một mái nhà nhỏ cho những khoảnh khắc lớn" + nút tròn mũi tên tới `/dat-lich` |
| Dải logo báo chí | **BỎ** |
| Đoạn giới thiệu "worldwide-acclaimed" | 1 câu về studio, không tự khen |
| Các cụm ảnh kèm caption lặp lại | Cụm ảnh Nhà Cừu, caption ngắn theo concept thật |
| "Featured stories": 3 thẻ + "more stories" | 3 concept nổi bật (link `/concept/[slug]`) + "Xem tất cả concept" |
| "Meet D&M" | Giới thiệu ngắn → `/gioi-thieu` |
| "Let's connect" + lưới ảnh | Lời mời đặt lịch + lưới ảnh |
| "Our portfolio" | Bộ sưu tập → `/bo-suu-tap` |
| "Little black book" (logo báo) | **BỎ** |
| "Passport to photography" (danh sách theo tháng) | Không áp dụng. Có thể đổi thành danh sách chữ lớn 4 nhóm Bầu / Beauty / Bé / Gia đình, hoặc bỏ |
| Form "Invest in the indelible" | Form đặt lịch thật (mục 4) |
| Instagram feed | **BỎ** (không có nguồn thật) |
| Footer + banner cookie | Footer gọn; không cần banner cookie |

**Không xác định được từ HTML:** phông, cỡ chữ, màu, khoảng cách, chuyển động, responsive. Phải mở trang bằng trình duyệt, cuộn thật ở 1440px và 390px, ghi lại từng hiệu ứng (khi nào kích hoạt, thời lượng, easing, cuộn ngược thì sao) và lưu vào `docs/research/danieleandmarilia/`. **Không đoán.** Chỗ nào không quan sát được thì ghi rõ "chưa xác định", đừng bịa.

## 6. Cách làm

**Phạm vi file:** chỉ ghi trong `D:\HUDI\Daniele_Marilia_Clone`. Chỉ đọc: `D:\HUDI\Nha_Cuu_Photography` và `DN0112`. Không đụng `D:\HUDI\ai-website-cloner-template` (đang chứa dự án khác) và `D:\HUDI\BACLE_Photography`. Đừng dừng server đang chạy ở cổng 3000 và 3100; chạy thử ở cổng khác (ví dụ 3001). Tuân theo `AGENTS.md` của template, đọc `node_modules/next/dist/docs/` trước khi dùng API Next mới.

1. **Chuẩn bị:** `npm install`, `npm run check` khi template còn sạch.
2. **Quan sát** trang mẫu như mục 5.
3. **Giai đoạn 1:** chỉ làm **header, trang chủ, footer, nút Zalo/Messenger**. Chạy lên, chụp màn hình ở 1440px và 390px, rồi **DỪNG và báo tôi xem**. Chỉ làm tiếp khi tôi duyệt.
4. **Giai đoạn 2:** các trang còn lại và form đặt lịch.
5. **Kiểm tra:** `npm run check`; không tràn ngang từ 320px đến 2560px; mọi ảnh tải đủ; không lỗi console; thử form (để trống, SĐT sai, ngày quá khứ, hợp lệ, gửi lặp quá 3 lần); hiệu ứng khi bật giảm chuyển động và khi tắt JavaScript.
6. **Báo cáo cuối:** điểm giống và khác trang mẫu, phần chưa làm, những gì còn là dữ liệu mẫu cần khách xác nhận (giá, tên và mô tả concept, lời văn trang Giới thiệu).
