import type { ReactNode } from "react";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 sm:pt-20">
          <h1 className="font-display text-[36px] leading-[1.08] text-ink sm:text-[48px]">{title}</h1>
          <p className="mt-3 text-[15px] text-muted-foreground">Derniere mise a jour : {updatedAt}</p>
          <div className="prose-legal mt-10">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
