# Quan sát trang mẫu danieleandmarilia.com (chỉ để học bố cục và chuyển động)

Nguồn quan sát: Chrome thật (Playwright, cuộn bằng con lăn chuột), 1440x900, 390x844, 768x1024, 1920/2560; đọc thêm
dữ liệu hoạt ảnh Webflow đã khai báo trong trang (`webflow-ix2-actions.txt`) thay vì đoán từ vài khung hình.
Ảnh chụp tham chiếu: `docs/design-references/danieleandmarilia/` (chỉ để đối chiếu, KHÔNG đưa lên web, đã đưa vào .gitignore).

**Quy tắc cao nhất của dự án này:** không lấy ảnh, chữ, logo, tên báo, phông, số liệu của trang mẫu. Tài liệu này chỉ ghi
nhịp section, bố cục, thang chữ, cách chuyển động. Màu sắc không theo trang mẫu (đen–trắng–xám).

## 1. Công nghệ của trang mẫu (đã kiểm chứng)

- Dựng bằng Webflow, hoạt ảnh bằng Webflow IX2, cuộn mượt bằng **Lenis 1.0.23**:
  `duration 1.5s`, easing `min(1, 1.001 - 2^(-10t))` (expo-out), `smoothTouch: false` (cảm ứng cuộn thường), `touchMultiplier 2`.
- Phông chữ: Big Caslon FB (Adobe Fonts/Typekit) cho mọi chữ, chữ HOA ở tiêu đề. Không dùng được, thay bằng Cormorant Garamond + Be Vietnam Pro.
- Chữ ký là ảnh, logo là SVG xám nhạt. Header dùng `mix-blend-mode: difference` để đọc được trên cả nền sáng lẫn tối.
- **Màn chờ (preloader)**: logo + bộ đếm "0% → 100%" (đây là "0%" mà gợi ý ban đầu tưởng là tiến độ cuộn). Đếm khoảng 4 giây, rồi
  cả lớp trượt lên (1,0s, inOutSine). Khoá cuộn 4s. Tiêu đề hero hiện dần sau đó (1,0s easeIn, lệch nhau 0,2s mỗi dòng).
- **Trang mẫu KHÔNG có thanh/chỉ số tiến độ cuộn.** Thanh tiến độ cuộn là yêu cầu riêng của khách Nhà Cừu, tự thiết kế.
- Có banner cookie (không áp dụng), dải logo báo, danh sách bài báo, form kiểu điền chỗ trống, lưới Instagram (đều BỎ).

## 2. Thứ tự section và nhịp (1440x900)

| # | Section trang mẫu | Chiều cao | Bố cục / hành vi | Ánh xạ sang Nhà Cừu |
|---|---|---|---|---|
| 0 | Header cố định | 69px | Logo trái, nút "Book now" (ẩn ở màn rộng, hiện khi rê), nút menu 3 gạch phải, mép 16px | Logo Nhà Cừu, "Đặt lịch chụp", nút menu, thanh tiến độ cuộn |
| 1 | Hero | 990 (≈100vh+) | Nền tối + ảnh phải; 3 dòng tiêu đề 120px xếp tầng (dòng 1 và 3 lùi vào, dòng 2 sát trái); nút tròn 240px, vòng chữ quay 12s + mũi tên | Tiêu đề "Một mái nhà nhỏ cho những khoảnh khắc lớn", nút tròn tới /dat-lich, ảnh Nhà Cừu |
| 2 | Dải logo báo | – | BỎ | BỎ |
| 3 | Cụm 2 ảnh lệch + đoạn giới thiệu | ≈900 | 2 ảnh nhỏ/vừa đặt lệch nhau, ảnh trôi nhẹ; đoạn chữ 19,2px rộng 720px có chữ cái đầu to (drop cap) | 2 ảnh + 1 câu về studio (chỉ dữ kiện có thật) |
| 4 | Cảnh ghim + phóng ảnh | 4500 (≈5vh) | Khối ảnh 3 cột (cột ảnh dọc trái, ảnh giữa, cột ảnh dọc phải) bị ghim; cuộn thì cả khối phóng to 1,1 → 2,4 (outSine), cột bên trượt ra, ảnh giữa phủ kín màn hình; sau đó nhả ghim | Cảnh ghim ảnh Nhà Cừu, giữ đúng tỉ lệ ảnh |
| 5 | Chữ chạy + cụm ảnh | 3953 | 2 hàng chữ xám nhạt rất lớn chạy ngang theo cuộn (hàng 1 sang trái, hàng 2 sang phải, mỗi hàng 8–9% bề rộng); sau đó 6–8 ảnh rải rác, mỗi ảnh trôi dọc với tốc độ khác nhau (−46% … −120%); rồi tiêu đề 4 dòng cỡ lớn | Hàng chữ chạy "Bầu · Beauty · Bé · Gia đình", cụm ảnh có caption là tên concept |
| 6 | "Discover our work" | 775 | Tiêu đề 80px sát trái; đoạn chữ 3 khối lệch sang giữa, rộng ≈420px | Tiêu đề "Khám phá concept" + 1–2 câu |
| 7 | "Featured stories" | 2836 (3 thẻ x 100vh) | Mỗi thẻ cao 100vh dính (sticky) chồng lên nhau: ảnh trái 40%, bảng đen phải (tiêu đề 80px, mô tả 16px, nút tròn "Discover" 186px). Thẻ trước thu nhỏ khi thẻ sau trượt lên (đo ≈0,93–0,96, khai báo tối đa 0,7). Cuối: link "More stories →" | 3 concept nổi bật (nền nhạt theo phông ảnh), link /concept/[slug], "Xem tất cả concept" |
| 8 | "Meet D&M" | 2884 | Tiêu đề giữa, chữ ký, đoạn chữ lệch phải, nút tròn "About us", 2 ảnh đặt chồng lệch, ảnh trôi 3rem | Giới thiệu ngắn + nút tròn tới /gioi-thieu (bỏ chữ ký) |
| 9 | "Let's connect" | – | Tiêu đề giữa lớn, nút tròn "Book now" 200px, dải ảnh 4 ảnh chạy ngang tự động (vòng lặp 28s tuyến tính) | Lời mời đặt lịch + dải ảnh chạy |
| 10 | "Our portfolio" | – | Link chữ lớn có mũi tên | "Xem bộ sưu tập" |
| 11 | "Little black book" | 1511 | Danh sách bài báo 01–05, rê vào thì đổi ảnh bìa (phóng 1,1 trong 1,5s outCubic) | BỎ |
| 12 | "Passport to photography" | 1018 | 5 cột (theo tháng): nhãn tháng, ảnh dọc, danh sách địa điểm 4 dòng | Đổi thành 4 cột nhóm Bầu / Beauty / Bé / Gia đình, mỗi cột 1 ảnh + danh sách concept thật |
| 13 | Form "Invest in the indelible" | 932 | Câu điền chỗ trống, nút tròn "Send" | Trang /dat-lich thật (giai đoạn 2) |
| 14 | Instagram | 611 | Lưới ảnh | BỎ (không có nguồn thật) |
| 15 | Footer | 455 | Ô chữ lồng "D&M" lớn bên trái; cột MENU, INFO; dòng bản quyền | Footer gọn: 1 hàng liên hệ + 2 địa chỉ + bản quyền |
| – | Nút cố định bên phải | 112px | Ô vuông 7rem giữa mép phải, trượt vào (0,8s outSine) khi cảnh ghim vào màn hình; rê chuột thì cao 8rem và hiện chữ "Book Now" | Nút Zalo/Messenger cố định ở góc |

## 3. Thang chữ đo được (px, `getComputedStyle`)

| Vai trò | 390 | 768 | 1440 | ≥1920 |
|---|---|---|---|---|
| Tiêu đề hero (h1 display, chữ HOA, line-height 1,0) | 32 | 83 | 120 | 160 (dừng lại ở 1920, 2560 vẫn 160) |
| Tiêu đề section (h2, 80 ở 1440) | 20,8 | 22,4 | 80 | 80 |
| Đoạn lớn (body big, letter-spacing 0,32px, line-height 1,4) | 16 | 16 | 19,2 | 25,6 |
| Đoạn thường | 12,8 | 16 | 16 | 22,4 |
| Mục menu toàn màn hình (HOA) | 28 | 39,2 | 50,4 | 50,4 |
| Nhãn nhỏ (h3 in đậm HOA) | 11,2 | 16 | 19,2 | 28,8 |

Lề ngang trang: 16px ở mọi cỡ (full-bleed). Padding section lớn: 48px (≤768) / 64px (≥1440). Header: padding 16px.
Nội dung 2560: bố cục không giãn thêm, chỉ giữ 160px cho tiêu đề (khoảng trắng hai bên rộng ra).

## 4. Quy tắc chuyển động (trigger → kết quả)

**Thời gian (time-driven)**
- Màn chờ: xem mục 1. Sau khi mở: tiêu đề hero 3 dòng + nút tròn hiện dần 1,0s `easeIn`, so le 0 / 0,2 / 0,4 / 0,6s.
- Vòng chữ quanh nút tròn hero quay đều −360° / 12s tuyến tính, lặp vô hạn.
- Dải ảnh "Let's connect" chạy ngang −100% / 28s tuyến tính, lặp.

**Cuộn – hiện dần (scroll-reveal)**
- Tiêu đề section: opacity 0 → 1, 0,7s `inSine`, từng dòng/khối so le 0,1s. Đoạn chữ: 0,7s `inSine`. Danh sách bài: so le 0,1s.
- **Đã kiểm chứng: chỉ chạy MỘT LẦN.** Cuộn tới → hiện; cuộn lên rồi xuống lại → giữ nguyên, không chạy lại (opacity đo = 1 ngay lập tức).
  Khách Nhà Cừu yêu cầu khác: chạy lại cả khi cuộn lên, chậm ≥ 1,2s → làm theo khách, ghi nhận đây là điểm khác trang mẫu.
- Mốc kích hoạt: phần tử vào khoảng 80–85% chiều cao màn hình (đo: bắt đầu hiện khi top phần tử ≈ 684/900).

**Cuộn – liên tục (scroll-linked)**
- Cụm ảnh trôi: `translateY` theo tiến độ phần tử trong màn hình, mỗi ảnh một tốc độ riêng, easing `ease`, làm mượt 88–100.
  Desktop dùng đơn vị %, tablet/mobile dùng rem (biên độ nhỏ hơn: −2,8rem … −18rem).
- Ảnh giới thiệu hai bên: trôi xuống 3rem khi cuộn qua.
- Cảnh ghim phóng ảnh: xem bảng mục 2 (#4), mốc 45–90% tiến độ section, mobile phóng tới 3x.
- Hàng chữ lớn: `translateX` 0 → −8…−9% theo tiến độ section.
- Thẻ concept chồng: `scale` 1 → 0,7 (khai báo) trong khoảng 35–100% tiến độ; đo thực tế 0,93–0,97.
- Hover/click: xem mục 5.

**Cuộn mượt toàn trang**: Lenis như mục 1 (chỉ con lăn/bàn phím; cảm ứng cuộn tự nhiên).

## 5. Tương tác (đã thử bằng chuột thật)

- **Nút menu (3 gạch)**: rê chuột → gạch giữa và gạch dưới dài ra bằng gạch trên (0,5s → 0,8–1,0s outQuart). Bấm → bảng menu toàn màn hình
  nền xám nhạt trượt xuống từ trên (chiều cao 0 → 100% trong 0,7s `inOutQuad`; đo: 250ms đã 660/900px). Đóng: 0,5s `inQuad`.
  Mục menu: số thứ tự đậm + chữ HOA 50px; rê vào mục → mục dịch trái ≈25% (0,6s outQuint; đo −77px). Trang vẫn cuộn được phía sau (không khoá).
  Mobile 390: mục menu 28px, cách nhau 92px, lề trái 66px, nút menu 24x13px (nhỏ hơn 44px → bản mới phải phóng vùng chạm).
- **Nút tròn (hero, "About us", "Book now", "Send", "Discover")**: rê chuột → vòng ngoài phóng 1,1 (0,5s outSine), mũi tên xoay −45° (0,5s outQuart); rời chuột 0,3s.
- **Nút cố định phải**: trượt vào khi cảnh ghim vào màn hình và ở lại; rê chuột → cao 128px và hiện chữ trượt vào (0,5s).
- **Liên kết chữ**: rê chuột đổi màu chữ sang xám 50% (0,5s outQuart).
- **Danh sách bài báo**: rê chuột đổi ảnh bìa và phóng 1,1 (1,5s outCubic) — không áp dụng.
- Header: luôn hiện (sticky, `top: 16px`) ở mọi vị trí cuộn; không ẩn khi cuộn xuống (đã đo ở 0/800/3000/9000px).

## 6. Chưa xác định / không bắt chước

- Màu thật (đen–trắng–xám) và phông Big Caslon: không dùng.
- Hành vi cuộn ngược của các hiệu ứng liên tục: khớp theo tiến độ nên đảo chiều tự nhiên (đã xem ảnh chụp lên/xuống ở mục 2), không có mốc riêng.
- Bố cục tablet 768 chỉ quan sát qua ảnh chụp (hero, giới thiệu, cụm ảnh, thẻ): thẻ concept chuyển sang ảnh trên – bảng dưới, cụm ảnh gọn hơn.
- Vì sao Webflow đặt `SCROLL_INTO_VIEW` chạy một lần: do cấu hình không bật phát lại, không phải giới hạn kỹ thuật.
- Không đo hiệu ứng khi bật "giảm chuyển động" trên trang mẫu (trang mẫu không khai báo xử lý riêng cho hoạt ảnh IX2).
