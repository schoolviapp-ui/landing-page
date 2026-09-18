import { Blob } from "@/components/ui/blob";
import { CloudPanel } from "@/components/ui/cloud-panel";
import { AttendanceMockup, MiniDashboardMockup, ParentMockup } from "@/components/landing/mockups";
import { SOCIAL_PROOF, VALUE_PROPS } from "@/content/site";

const BLOBS = {
  sky: { shape: "leaf", tone: "sky" },
  lilac: { shape: "pill", tone: "lilac" },
  brand: { shape: "sun", tone: "brand" },
} as const;

export function ValueProps() {
  const [a, b, c] = VALUE_PROPS;

  return (
    <section className="mx-auto max-w-[1240px] px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="grid gap-2 md:grid-cols-2">
        {[a, b].map((item) => {
          const blob = BLOBS[item.tone];
          return (
            <article key={item.title} className="rounded-3xl border border-stone-300 bg-white p-6 sm:rounded-[32px] sm:p-9">
              <div className="grid size-16 place-items-center rounded-full bg-stone-100">
                <Blob shape={blob.shape} tone={blob.tone} face className="size-9" />
              </div>
              <h3 className="font-display mt-6 text-[26px] font-medium text-ink sm:mt-8 sm:text-[30px]">{item.title}</h3>
              <p className="mt-2 max-w-md text-[17px] leading-relaxed text-muted-foreground">{item.description}</p>
              <CloudPanel tone={item.tone === "sky" ? "sky" : "lilac"} className="mx-auto mt-6 flex h-[360px] max-w-[400px] items-center justify-center rounded-3xl px-4 sm:mt-8 sm:h-[400px]">
                {item.mockup === "attendance" ? (
                  <AttendanceMockup className="-rotate-3" />
                ) : (
                  <ParentMockup className="rotate-2" />
                )}
              </CloudPanel>
            </article>
          );
        })}
      </div>

      <article className="mt-2 grid overflow-hidden rounded-3xl border border-stone-300 bg-white sm:rounded-[32px] md:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-between p-6 sm:p-9">
          <div className="grid size-16 place-items-center rounded-full bg-stone-100">
            <Blob shape="sun" tone="brand" face className="size-9" />
          </div>
          <div className="mt-8 sm:mt-16">
            <h3 className="font-display text-[26px] font-medium text-ink sm:text-[30px]">{c.title}</h3>
            <p className="mt-2 max-w-xl text-[17px] leading-relaxed text-muted-foreground">{c.description}</p>
          </div>
        </div>
        <CloudPanel tone="brand" className="m-2 flex h-[320px] items-center justify-center rounded-3xl px-4 sm:h-[360px] md:h-auto">
          <MiniDashboardMockup className="translate-y-6 rotate-[-2deg]" />
        </CloudPanel>
      </article>

      <p className="py-16 text-center text-[16px] text-muted-foreground sm:py-24 sm:text-[17px]">{SOCIAL_PROOF}</p>
    </section>
  );
}
