"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import { PillButton } from "@/components/ui/pill-button";
import { CTA, PRICING } from "@/content/site";

const fmt = new Intl.NumberFormat("fr-FR");

export function Pricing() {
  const [students, setStudents] = useState(PRICING.defaultStudents);
  const yearly = students * PRICING.pricePerStudentPerYear;
  const progress = ((students - PRICING.minStudents) / (PRICING.maxStudents - PRICING.minStudents)) * 100;

  return (
    <section id="tarifs" className="mx-auto max-w-[1240px] px-6 pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[40px] leading-[1.08] text-ink md:text-[55px]">{PRICING.title}</h2>
        <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">{PRICING.description}</p>
      </div>

      <div className="mx-auto mt-14 max-w-[920px] rounded-[32px] bg-stone-200 p-2.5">
        <div className="grid rounded-[24px] bg-white md:grid-cols-[1.15fr_1fr]">
          <div className="p-8 md:p-10">
            <p className="flex items-baseline gap-2">
              <span className="font-display text-[56px] leading-none text-brand md:text-[64px]">
                {fmt.format(PRICING.pricePerStudentPerYear)}
              </span>
              <span className="font-display text-[26px] text-brand">{PRICING.currency}</span>
              <span className="text-[16px] text-muted-foreground">/ eleve / an</span>
            </p>
            <p className="mt-2 text-[15px] text-muted-foreground">
              Enseignants et personnel illimites, tous les modules inclus.
            </p>
            <p className="font-display mt-8 text-[22px] text-ink">Estimez votre abonnement</p>

            <div className="mt-4">
              <label htmlFor="students" className="flex items-baseline justify-between">
                <span className="text-[15px] text-muted-foreground">Nombre d&apos;eleves</span>
                <span className="font-display text-[40px] leading-none text-ink">{fmt.format(students)}</span>
              </label>
              <input
                id="students"
                type="range"
                className="estimator mt-5"
                min={PRICING.minStudents}
                max={PRICING.maxStudents}
                step={PRICING.step}
                value={students}
                style={{ "--progress": `${progress}%` } as React.CSSProperties}
                onChange={(e) => setStudents(Number(e.target.value))}
              />
              <div className="mt-2 flex justify-between text-[12px] text-stone-400">
                <span>{fmt.format(PRICING.minStudents)}</span>
                <span>{fmt.format(PRICING.maxStudents)}+</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-stone-100 p-5">
              <p className="text-[13px] text-muted-foreground">Abonnement annuel</p>
              <p className="font-display mt-1 text-[34px] leading-none text-ink">
                {fmt.format(yearly)} <span className="text-[15px] text-muted-foreground">{PRICING.currency} / an</span>
              </p>
            </div>
            <p className="mt-4 text-[13px] text-muted-foreground">{PRICING.note}</p>
          </div>

          <div className="flex flex-col border-t border-stone-200 p-8 md:border-l md:border-t-0 md:p-10">
            <p className="text-[15px] text-muted-foreground">Tout est inclus</p>
            <ul className="mt-5 space-y-3.5">
              {PRICING.included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[16px] text-ink">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <CheckIcon className="size-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <PillButton href={CTA.primary.href} variant="brand" className="mt-auto h-14 w-full pt-0.5 text-[16px]">
              {PRICING.cta}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
