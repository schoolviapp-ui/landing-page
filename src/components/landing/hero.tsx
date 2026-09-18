import type { CSSProperties } from "react";

import { Blob } from "@/components/ui/blob";
import { PillButton } from "@/components/ui/pill-button";
import { CTA, HERO } from "@/content/site";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Blob shape="arc" tone="pink" face className="absolute left-[22%] top-[4%] hidden size-36 animate-float-slow lg:block" />
        <Blob shape="dot" tone="sky" className="absolute left-[56%] top-[6%] size-12" />
        <Blob shape="sun" tone="brand" face className="absolute -left-10 top-[62%] size-40 animate-float lg:left-0" />
        <Blob shape="diamond" tone="mint" className="absolute left-[20%] top-[84%] size-14" />
        <Blob shape="leaf" tone="mint" face className="absolute -right-8 top-[64%] size-36 animate-float-slow lg:right-[2%]" />
      </div>

      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center px-6 pb-24 pt-32 text-center md:pt-48">
        <h1
          style={delay(1)}
          className="rise font-display mt-6 text-[44px] leading-[1.04] text-ink sm:text-[56px] md:text-[64px]"
        >
          {HERO.title[0]}
          <br />
          {HERO.title[1]}
        </h1>

        <p
          style={delay(2)}
          className="rise mt-7 max-w-2xl text-[17px] leading-relaxed text-muted-foreground md:text-[19px]"
        >
          {HERO.description[0]}
          <br className="hidden md:block" /> {HERO.description[1]}
        </p>

        <div style={delay(3)} className="rise mt-10 flex flex-wrap items-center justify-center gap-3">
          <PillButton href={CTA.primary.href} variant="arrow">
            {CTA.primary.label}
          </PillButton>
          <PillButton href={CTA.contact.href} variant="soft">
            {CTA.contact.label}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
