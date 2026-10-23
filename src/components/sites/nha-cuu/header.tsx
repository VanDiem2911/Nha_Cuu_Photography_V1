"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getLenis, scrollToTop } from "@/lib/lenis-store";
import { clamp, subscribeScroll } from "@/lib/scroll-frame";
import { NAV_LINKS, SITE } from "@/lib/site";

const MENU_LINKS = [{ href: "/", label: "Trang chủ" }, ...NAV_LINKS];

const linkClass =
  "inline-flex min-h-11 items-center text-[0.95rem] text-ink transition-colors duration-300 hover:text-accent";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const wasOpen = useRef(false);

  // Thanh tiến độ cuộn và nền mờ của header sau khi rời đầu trang.
  useEffect(() => {
    let last = false;
    return subscribeScroll(({ scrollY, vh }) => {
      const max = document.documentElement.scrollHeight - vh;
      const progress = max > 0 ? clamp(scrollY / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      const next = scrollY > 24;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    });
  }, []);

  // Đổi trang thì đóng menu.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Mở menu: khoá cuộn, đưa focus vào menu, Esc để đóng, Tab quay vòng trong header và menu.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", open);
    if (open) {
      getLenis()?.stop();
      wasOpen.current = true;
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    } else {
      getLenis()?.start();
      if (wasOpen.current) {
        wasOpen.current = false;
        buttonRef.current?.focus();
      }
    }
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = [
        ...(headerRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []),
        ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
      ].filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;
      const index = items.indexOf(document.activeElement as HTMLElement);
      const next = event.shiftKey ? index - 1 : index + 1;
      if (next < 0 || next >= items.length) {
        event.preventDefault();
        items[next < 0 ? items.length - 1 : 0].focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => document.documentElement.classList.remove("menu-open"), []);

  const onMenuLink = (href: string) => {
    setOpen(false);
    if (href === pathname) scrollToTop();
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
          scrolled && !open
            ? "border-b border-line bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="flex h-[var(--header-h)] items-center justify-between gap-4 px-[var(--gutter)]">
          <Link
            href="/"
            aria-label={`${SITE.name}, về trang chủ`}
            className="inline-flex min-h-11 items-center"
            onClick={() => {
              if (pathname === "/") scrollToTop();
            }}
          >
            <Image
              src="/sites/nha-cuu/logo.png"
              alt={SITE.name}
              width={1010}
              height={354}
              preload
              className="h-auto w-[8.5rem] sm:w-[11rem]"
            />
          </Link>

          <nav aria-label="Liên kết chính" className="nojs-nav flex flex-wrap items-center gap-x-5">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <Link
              href="/lien-he"
              className="hidden min-h-11 items-center rounded-full border border-ink px-5 text-[0.95rem] text-ink transition-colors duration-300 hover:bg-ink hover:text-cream sm:inline-flex"
            >
              Đặt lịch chụp
            </Link>
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              onClick={() => setOpen((value) => !value)}
              className="menu-btn group inline-flex size-11 items-center justify-center"
            >
              <span aria-hidden className="relative block h-3 w-8">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full origin-center bg-ink transition-all duration-500 ease-out motion-reduce:transition-none",
                    open ? "top-1/2 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-1/2 right-0 h-px bg-ink transition-all duration-500 ease-out group-hover:w-full motion-reduce:transition-none",
                    open ? "w-0 opacity-0" : "w-3/4",
                  )}
                />
                <span
                  className={cn(
                    "absolute right-0 h-px origin-center bg-ink transition-all duration-500 ease-out group-hover:w-full motion-reduce:transition-none",
                    open ? "top-1/2 w-full -rotate-45" : "bottom-0 w-1/2",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
        <span aria-hidden className="absolute inset-x-0 bottom-0 block h-0.5 bg-transparent">
          <span
            ref={progressRef}
            className="block h-full origin-left scale-x-0 bg-accent"
          />
        </span>
      </header>

      <div
        id="site-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        data-open={open}
        className="menu-panel fixed inset-0 z-40 bg-cream"
      >
        <nav
          aria-label="Menu chính"
          className="flex h-full flex-col justify-center px-[var(--gutter)] pt-24 pb-12 sm:items-center"
        >
          <ol className="flex flex-col gap-1 sm:gap-2">
            {MENU_LINKS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => onMenuLink(item.href)}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className="group flex min-h-14 items-baseline gap-5 py-1"
                >
                  <span className="w-9 font-display text-xl text-accent italic">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(2.25rem,6.5vw,3.75rem)] leading-[1.15] font-medium transition-transform duration-[600ms] ease-[var(--ease-out-quint)] group-hover:-translate-x-5 group-focus-visible:-translate-x-5 motion-reduce:transition-none">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-ink-soft sm:text-center">
            Gọi hoặc nhắn Zalo{" "}
            <a href={`tel:${SITE.phone}`} className="inline-flex min-h-11 items-center text-ink underline underline-offset-4">
              {SITE.phoneDisplay}
            </a>
          </p>
        </nav>
      </div>
    </>
  );
}
