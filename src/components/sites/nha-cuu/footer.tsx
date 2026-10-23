import { BRANCHES, SITE } from "@/lib/site";

const contactLinks = [
  { href: `tel:${SITE.phone}`, label: `Gọi ${SITE.phoneDisplay}` },
  { href: SITE.zalo, label: "Zalo", external: true },
  { href: SITE.messenger, label: "Messenger", external: true },
  { href: SITE.facebook, label: "Facebook", external: true },
];

const linkClass =
  "inline-flex min-h-11 min-w-11 items-center text-ink underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline";

export function Footer() {
  return (
    <footer className="border-t border-line px-[var(--gutter)] pt-10 pb-28 sm:pb-24">
      <ul className="flex flex-wrap gap-x-8 gap-y-1">
        {contactLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={linkClass}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-6 text-[0.95rem] sm:grid-cols-2 lg:max-w-4xl">
        {BRANCHES.map((branch) => (
          <address key={branch.id} className="not-italic">
            <p className="font-medium">{branch.name}</p>
            <p className="mt-1 text-ink-soft">{branch.address}</p>
          </address>
        ))}
      </div>

      <p className="mt-8 text-sm text-ink-soft">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
}
