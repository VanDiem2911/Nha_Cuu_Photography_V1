// DỮ LIỆU MẪU — studio chưa cung cấp bảng giá. Thay tên gói, giá và quyền lợi bằng bảng giá thật
// trước khi công khai website. Giá tính bằng VNĐ.
export const PACKAGES = [
  {
    id: "co-ban",
    name: "Gói Cơ bản",
    price: 990_000,
    description: "Gọn nhẹ cho buổi chụp đơn giản.",
    features: ["1 concept", "1 bộ trang phục", "5 ảnh chỉnh sửa"],
  },
  {
    id: "tieu-chuan",
    name: "Gói Tiêu chuẩn",
    price: 1_690_000,
    description: "Cân bằng giữa số ảnh và chi phí.",
    features: ["1–2 concept", "2 bộ trang phục", "10 ảnh chỉnh sửa", "Trang điểm cơ bản"],
  },
  {
    id: "cao-cap",
    name: "Gói Cao cấp",
    price: 2_690_000,
    description: "Trọn vẹn cho dịp đặc biệt.",
    features: ["2–3 concept", "3 bộ trang phục", "20 ảnh chỉnh sửa", "Trang điểm", "In ảnh kỷ niệm"],
  },
] as const;

export type PackageId = (typeof PACKAGES)[number]["id"];

export const formatPrice = (vnd: number) => `${new Intl.NumberFormat("vi-VN").format(vnd)}đ`;
