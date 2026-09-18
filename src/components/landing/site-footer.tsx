import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";

import { Logo } from "@/components/landing/logo";
import { FOOTER } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1240px] px-6 pb-8">
      <div className="rounded-[32px] border border-stone-300 bg-white p-8 md:p-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col justify-between gap-10">
            <Logo className="text-[26px]" />
            <div className="flex gap-2">
              {[FacebookIcon, InstagramIcon, XIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-12 place-items-center rounded-xl bg-stone-100 text-muted-foreground transition-colors hover:bg-stone-200 hover:text-ink"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <p className="text-[15px] text-muted-foreground">{column.title}</p>
                <ul className="mt-4 space-y-3 text-[16px] font-medium text-ink">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-opacity hover:opacity-60">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-16 text-[15px] text-ink">
          &copy; {new Date().getFullYear()} Schoolvi. Gestion scolaire multi-etablissements.
        </p>
      </div>
    </footer>
  );
}
