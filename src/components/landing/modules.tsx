import { FeesMockup, GradesMockup, StudentsMockup } from "@/components/landing/mockups";
import { ModuleIcon } from "@/components/ui/module-icon";
import { PillButton } from "@/components/ui/pill-button";
import { CTA, MODULES } from "@/content/site";

const TONES = {
  sky: "bg-[#e4eefc]",
  lilac: "bg-[#efe6fb]",
  mint: "bg-[#e3f5e8]",
};

const MOCKUPS = {
  students: <StudentsMockup className="w-[720px]" />,
  grades: <GradesMockup className="w-[640px]" />,
  fees: <FeesMockup />,
};

export function Modules() {
  return (
    <section id="modules" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 sm:px-6">
      <h2 className="font-display max-w-2xl text-[34px] leading-[1.08] text-ink sm:text-[40px] md:text-[55px]">
        Pilotez votre etablissement
        <br />
        avec clarte et serenite
      </h2>

      <div className="mt-12 space-y-4">
        {MODULES.map((module, i) => (
          <article
            key={module.id}
            style={{ top: `${112 + i * 24}px` }}
            className={`sticky grid gap-8 rounded-3xl p-6 sm:rounded-[40px] sm:p-8 lg:min-h-[560px] lg:grid-cols-[1fr_1.1fr] lg:p-12 ${TONES[module.tone]}`}
          >
            <div className="flex flex-col">
              <h3 className="font-display text-[30px] font-medium text-ink sm:text-[34px] md:text-[40px]">{module.title}</h3>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted-foreground">{module.description}</p>
              <ul className="mt-8 flex flex-col items-start gap-2">
                {module.tags.map((tag) => (
                  <li
                    key={tag.label}
                    className="flex items-center gap-2.5 rounded-full border border-black/5 bg-white px-4 py-2.5 text-[16px] font-medium text-ink"
                  >
                    <ModuleIcon name={tag.icon} className="size-5" strokeWidth={1.75} />
                    {tag.label}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <PillButton href={CTA.primary.href} variant="arrow" className="-ml-1">
                  {CTA.primary.label}
                </PillButton>
              </div>
            </div>
            <div className="relative hidden overflow-hidden rounded-3xl lg:block">
              <div className="absolute left-6 top-8 origin-top-left scale-[0.85] lg:scale-100">{MOCKUPS[module.mockup]}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
