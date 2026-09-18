import { CloudPanel } from "@/components/ui/cloud-panel";
import { ModuleIcon } from "@/components/ui/module-icon";
import { DashboardMockup } from "@/components/landing/mockups";
import { MODULE_TABS } from "@/content/site";

import { cn } from "@/lib/utils";

export function ProductPanel() {
  return (
    <section id="produit" className="mx-auto max-w-[1240px] px-6">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8">
        {MODULE_TABS.map((tab, i) => (
          <span
            key={tab.id}
            className={cn(
              "flex items-center gap-2.5 rounded-full px-5 py-3 text-[16px] font-medium text-ink",
              i === 0 && "bg-stone-200",
            )}
          >
            <ModuleIcon name={tab.id} className="size-5" strokeWidth={1.75} />
            {tab.label}
          </span>
        ))}
      </div>

      <CloudPanel tone="lilac" className="mt-8 h-[420px] rounded-[40px] md:h-[640px]">
        <div className="absolute left-6 top-14 w-[1100px] origin-top-left scale-[0.62] md:left-16 md:top-24 md:scale-100">
          <DashboardMockup />
        </div>
      </CloudPanel>
    </section>
  );
}
