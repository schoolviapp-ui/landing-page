"use client";

import { useState } from "react";

import { SCREENS } from "@/components/landing/app-screens";
import { CloudPanel } from "@/components/ui/cloud-panel";
import { ModuleIcon } from "@/components/ui/module-icon";
import { MODULE_TABS, type ModuleTabId } from "@/content/site";
import { cn } from "@/lib/utils";

export function ProductPanel() {
  const [active, setActive] = useState<ModuleTabId>("dashboard");
  const Screen = SCREENS[active];

  return (
    <section id="produit" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 sm:px-6">
      <div role="tablist" className="-mx-4 flex items-center gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 md:gap-6 [&::-webkit-scrollbar]:hidden">
        {MODULE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === active}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-medium text-ink transition-colors sm:gap-2.5 sm:px-5 sm:py-3 sm:text-[16px]",
              tab.id === active ? "bg-stone-200" : "hover:bg-stone-100",
            )}
          >
            <ModuleIcon name={tab.id} className="size-5" strokeWidth={1.75} />
            {tab.label}
          </button>
        ))}
      </div>

      <CloudPanel tone="lilac" className="mt-6 h-[240px] rounded-3xl sm:mt-8 sm:h-[420px] sm:rounded-[40px] md:h-[640px]">
        <div key={active} className="rise absolute inset-x-4 top-6 sm:inset-x-8 sm:top-12 md:inset-x-16 md:top-24">
          <Screen />
        </div>
      </CloudPanel>
    </section>
  );
}
