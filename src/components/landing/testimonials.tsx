import { QuoteIcon } from "lucide-react";

import { TESTIMONIALS } from "@/content/site";

const TONES = ["bg-brand text-white", "bg-lilac", "bg-sky", "bg-pink", "bg-[#9bf0b8]", "bg-stone-300"];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-32">
      <h2 className="font-display mx-auto max-w-2xl text-center text-[40px] leading-[1.08] text-ink md:text-[55px]">
        Ce qu&apos;en disent
        <br />
        les etablissements
      </h2>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.quote}
            className="relative flex min-h-[300px] flex-col justify-between rounded-3xl border border-stone-300 bg-white p-7"
          >
            <QuoteIcon className="absolute right-6 top-6 size-10 fill-stone-200 text-stone-200" />
            <blockquote className="max-w-[85%] text-[17px] leading-relaxed text-ink">{t.quote}</blockquote>
            <figcaption className="mt-10 flex items-center justify-between">
              <div>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              <span className={`grid size-11 place-items-center rounded-xl text-sm font-semibold text-ink ${TONES[i % TONES.length]}`}>
                {t.name[0]}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
