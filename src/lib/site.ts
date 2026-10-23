export const SITE = {
  name: "Nhà Cừu Photography",
  tagline: "Studio chuyên chụp ảnh Bầu, Beauty, Bé và Gia đình",
  city: "TP. Hồ Chí Minh",
  phone: "0985820992",
  phoneDisplay: "098 582 09 92",
  zalo: "https://zalo.me/0985820992",
  messenger: "https://m.me/NhaCuuPhotography",
  facebook: "https://www.facebook.com/NhaCuuPhotography/",
} as const;

export const BRANCHES = [
  {
    id: "thu-duc",
    name: "Chi nhánh Thủ Đức",
    address: "27 đường số 9, khu phố 56, phường Linh Xuân (phường Linh Tây cũ), TP. Hồ Chí Minh",
    hint: "Khu phố 56, phường Linh Xuân",
    streetAddress: "27 đường số 9, khu phố 56, phường Linh Xuân",
    // Toạ độ lấy từ liên kết Google Maps của studio.
    geo: { lat: 10.8592999, lng: 106.7580476 },
    mapQuery: "10.8592999,106.7580476",
  },
  {
    id: "go-vap",
    name: "Chi nhánh Gò Vấp",
    address: "89 đường số 3, Cityland Park Hills, phường Gò Vấp (mới), cạnh LOTTE Mart, TP. Hồ Chí Minh",
    hint: "Cityland Park Hills, cạnh LOTTE Mart",
    streetAddress: "89 đường số 3, Cityland Park Hills, phường Gò Vấp",
    // Khách chưa cung cấp toạ độ chi nhánh Gò Vấp nên tìm bản đồ theo tên địa điểm.
    mapQuery: "Cityland Park Hills, Gò Vấp, Hồ Chí Minh",
  },
] as const;

export type BranchId = (typeof BRANCHES)[number]["id"];

export const mapEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const NAV_LINKS = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/concept", label: "Concept" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/bo-suu-tap", label: "Bộ sưu tập" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;
