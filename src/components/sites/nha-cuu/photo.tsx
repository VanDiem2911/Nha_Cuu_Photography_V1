import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Photo as PhotoData } from "@/data/concepts";

type PhotoProps = {
  photo: PhotoData;
  /** Gợi ý bề rộng hiển thị để trình duyệt chọn kích thước ảnh vừa đủ. */
  sizes: string;
  className?: string;
  alt?: string;
  preload?: boolean;
};

/** Ảnh studio với kích thước gốc đã biết, giữ nguyên tỉ lệ (2:3 hoặc 3:2), không cắt ép. */
export function Photo({ photo, sizes, className, alt, preload }: PhotoProps) {
  return (
    <Image
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={alt ?? photo.alt}
      sizes={sizes}
      preload={preload}
      className={cn("block h-auto w-full", className)}
    />
  );
}
