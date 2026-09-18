import { Blob } from "@/components/ui/blob";
import { PillButton } from "@/components/ui/pill-button";
import { CTA, FINAL_CTA } from "@/content/site";

export function FinalCta() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1240px] overflow-visible px-6 pb-8 pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Blob shape="sun" tone="brand" face className="absolute left-1/2 top-[22%] size-24 -translate-x-1/2 animate-float md:top-[18%]" />
        <Blob shape="diamond" tone="pink" className="absolute left-[8%] top-[30%] size-12" />
        <Blob shape="dot" tone="brand" className="absolute right-[20%] top-[40%] size-10" />
        <Blob shape="pill" tone="lilac" face className="absolute bottom-0 left-[16%] hidden h-28 w-16 md:block" />
        <Blob shape="leaf" tone="mint" face className="absolute -right-6 bottom-[8%] hidden size-28 md:block" />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-display text-[44px] leading-[1.04] text-ink md:text-[64px]">{FINAL_CTA.title}</h2>
        <p className="mt-5 text-[17px] text-muted-foreground md:text-[19px]">{FINAL_CTA.description}</p>
        <div className="mt-8">
          <PillButton href={CTA.contact.href} variant="arrow">
            {FINAL_CTA.cta}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
