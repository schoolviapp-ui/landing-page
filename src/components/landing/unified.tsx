import { Blob } from "@/components/ui/blob";
import { ModuleIcon } from "@/components/ui/module-icon";
import { PillButton } from "@/components/ui/pill-button";
import { CTA, UNIFIED } from "@/content/site";

const RATIO = 1100 / 520;
const ARCS = [
  { f: 0.45, className: "bg-stone-100" },
  { f: 0.34, className: "bg-stone-200/70" },
  { f: 0.23, className: "bg-stone-200" },
];
const RINGS = [
  { f: 0.45, icons: ["timetable", "fees", "staff", "complaints", "suggestions"] },
  { f: 0.34, icons: ["students", "attendance", "grades"] },
];

export function Unified() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-20 sm:pt-32">
      <h2 className="font-display mx-auto max-w-2xl text-center text-[34px] leading-[1.08] text-ink sm:text-[40px] md:text-[55px]">
        {UNIFIED.title[0]}
        <br />
        {UNIFIED.title[1]}
      </h2>
      <div className="mt-8 flex justify-center">
        <PillButton href={CTA.primary.href} variant="arrow">
          {CTA.primary.label}
        </PillButton>
      </div>

      <div className="relative mx-auto mt-10 aspect-[1100/520] w-full max-w-[1100px] overflow-hidden sm:mt-16">
        {ARCS.map((arc) => (
          <span
            key={arc.f}
            style={{ width: `${arc.f * 200}%`, paddingBottom: `${arc.f * 200}%` }}
            className={`absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-300 ${arc.className}`}
          />
        ))}
        {RINGS.map((ring, ringIndex) =>
          ring.icons.map((name, i) => {
            const angle = Math.PI * ((i + 1) / (ring.icons.length + 1));
            const x = 50 + Math.cos(angle) * ring.f * 100;
            const y = 100 - Math.sin(angle) * ring.f * 100 * RATIO;
            return (
              <span
                key={name}
                style={{ left: `${x}%`, top: `${y}%` }}
                className={`absolute size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_16px_rgba(0,0,0,0.06)] md:size-[72px] ${ringIndex === 0 ? "hidden sm:grid" : "grid"}`}
              >
                <ModuleIcon name={name} className="size-4 md:size-6" strokeWidth={1.75} />
              </span>
            );
          }),
        )}
        <Blob
          shape="sun"
          tone="brand"
          face
          className="absolute left-1/2 top-full size-24 -translate-x-1/2 -translate-y-[62%] md:size-40"
        />
      </div>
    </section>
  );
}
