import Link from "next/link";

import { Logo } from "@/components/landing/logo";
import { FOOTER } from "@/content/site";
import { CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1240px] px-4 pb-6 sm:px-6 sm:pb-8">
      <div className="rounded-3xl border border-stone-300 bg-white p-6 sm:rounded-[32px] sm:p-8 md:p-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <Logo className="text-[26px]" />
            <p className="max-w-xs text-[15px] text-muted-foreground">{FOOTER.tagline}</p>
            <address className="text-[15px] not-italic text-muted-foreground">
              {FOOTER.location}
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-ink">
                {CONTACT_EMAIL}
              </a>
            </address>
          </div>
          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <p className="text-[15px] text-muted-foreground">{column.title}</p>
                <ul className="mt-4 space-y-3 text-[16px] font-medium text-ink">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link href={link.href} className="transition-opacity hover:opacity-60">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="transition-opacity hover:opacity-60">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="mt-10 text-[14px] text-ink sm:mt-16 sm:text-[15px]">
          &copy; {new Date().getFullYear()} Schoolvi. Gestion scolaire multi-etablissements.
        </p>
      </div>
    </footer>
  );
}
