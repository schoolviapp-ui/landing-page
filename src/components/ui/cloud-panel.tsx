import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CloudPanelProps = {
  tone: "lilac" | "sky" | "brand";
  className?: string;
  children?: ReactNode;
};

const TONES = {
  lilac: { bg: "bg-[#d9a5ff]", cloud: "bg-[#e6bdff]" },
  sky: { bg: "bg-[#cfe6ff]", cloud: "bg-[#e2f0ff]" },
  brand: { bg: "bg-[#bfdbfe]", cloud: "bg-[#dbeafe]" },
};

export function CloudPanel({ tone, className, children }: CloudPanelProps) {
  const t = TONES[tone];
  return (
    <div className={cn("grain relative overflow-hidden", t.bg, className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className={cn("absolute -left-[10%] top-[8%] size-[46%] rounded-full", t.cloud)} />
        <span className={cn("absolute left-[18%] -top-[6%] size-[32%] rounded-full", t.cloud)} />
        <span className={cn("absolute right-[6%] top-[14%] size-[38%] rounded-full", t.cloud)} />
        <span className={cn("absolute -right-[8%] bottom-[10%] size-[42%] rounded-full", t.cloud)} />
        <span className={cn("absolute left-[30%] bottom-[-14%] size-[40%] rounded-full", t.cloud)} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
