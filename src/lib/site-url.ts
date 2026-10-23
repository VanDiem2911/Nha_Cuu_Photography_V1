// Địa chỉ gốc của website, dùng cho metadata, sitemap và dữ liệu có cấu trúc (đặt SITE_URL khi triển khai).
export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
