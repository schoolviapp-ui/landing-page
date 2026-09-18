import { PlusIcon } from "lucide-react";

import { FAQ } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-32">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <h2 className="font-display text-[34px] leading-[1.08] text-ink sm:text-[40px] md:text-[55px]">
          Questions
          <br />
          frequentes
        </h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-stone-300 bg-white px-5 py-4 open:bg-stone-100 sm:rounded-3xl sm:px-7 sm:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium text-ink">
                {item.question}
                <PlusIcon className="size-5 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
