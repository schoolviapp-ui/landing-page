"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/landing/logo";
import { PillButton } from "@/components/ui/pill-button";
import { CTA, NAV_LINKS } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:h-[88px]">
        <Logo />

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-ink lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <PillButton href={CTA.login.href} variant="soft" className="h-11 px-5">
            {CTA.login.label}
          </PillButton>
          <PillButton href={CTA.primary.href} variant="arrow">
            {CTA.primary.label}
          </PillButton>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-stone-200 lg:hidden"
        >
          {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-300 bg-stone-50 px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4 text-[17px] font-medium">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-2">
            <PillButton href={CTA.primary.href} variant="brand">
              {CTA.primary.label}
            </PillButton>
            <PillButton href={CTA.login.href} variant="soft">
              {CTA.login.label}
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
