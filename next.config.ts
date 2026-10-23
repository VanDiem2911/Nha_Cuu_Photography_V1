import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Ẩn nút "N" của Next.js ở góc dưới bên trái khi chạy `npm run dev` (lỗi biên dịch vẫn hiện bình thường).
  devIndicators: false,
};

export default nextConfig;
