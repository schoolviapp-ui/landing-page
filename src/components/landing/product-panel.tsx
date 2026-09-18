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
    <section id="produit" className="mx-auto max-w-[1240px] px-6">
      <div role="tablist" className="flex flex-wrap items-center justify-center gap-1 md:gap-6">
        {MODULE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === active}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex items-center gap-2.5 rounded-full px-5 py-3 text-[16px] font-medium text-ink transition-colors",
              tab.id === active ? "bg-stone-200" : "hover:bg-stone-100",
            )}
          >
            <ModuleIcon name={tab.id} className="size-5" strokeWidth={1.75} />
            {tab.label}
          </button>
        ))}
      </div>

      <CloudPanel tone="lilac" className="mt-8 h-[420px] rounded-[40px] md:h-[640px]">
        <div key={active} className="rise absolute left-6 top-14 w-[1100px] origin-top-left scale-[0.62] md:inset-x-16 md:top-24 md:w-auto md:scale-100">
          <Screen />
        </div>
      </CloudPanel>
    </section>
  );
}
