import { MessageCircle, Send } from "lucide-react";

import { SITE } from "@/lib/site";

const pill =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper/95 px-4 text-sm font-medium sm:px-5 text-ink shadow-[0_8px_24px_-12px_rgba(43,38,35,0.35)] backdrop-blur transition-colors duration-300 hover:border-ink";

/** Nút Zalo và Messenger cố định ở góc dưới bên phải, hiện nhẹ sau khi trang tải xong. */
export function FloatingContact() {
  return (
    <div className="float-in fixed right-4 bottom-4 z-30 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6">
      <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className={pill}>
        <MessageCircle aria-hidden className="size-4" />
        Nhắn Zalo
      </a>
      <a href={SITE.messenger} target="_blank" rel="noopener noreferrer" className={pill}>
        <Send aria-hidden className="size-4" />
        Messenger
      </a>
    </div>
  );
}
