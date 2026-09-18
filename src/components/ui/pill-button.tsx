import { ArrowUpRightIcon, ChevronRightIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type PillButtonProps = ComponentProps<"a"> & {
  variant?: "arrow" | "soft" | "dark" | "brand" | "floating";
};

export function PillButton({ variant = "soft", className, children, ...props }: PillButtonProps) {
  if (variant === "arrow") {
    return (
      <a
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-full py-1 pl-1 pr-4 text-[15px] font-medium text-ink transition-colors hover:bg-stone-200",
          className,
        )}
        {...props}
      >
        <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5">
          <ChevronRightIcon className="size-4" strokeWidth={2.5} />
        </span>
        {children}
      </a>
    );
  }

  if (variant === "floating") {
    return (
      <a
        className={cn(
          "group inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-4 pr-1.5 text-[15px] font-medium text-white shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)] transition-transform hover:-translate-y-0.5",
          className,
        )}
        {...props}
      >
        {children}
        <span className="grid size-8 place-items-center rounded-full bg-brand text-white">
          <ArrowUpRightIcon className="size-4" strokeWidth={2.5} />
        </span>
      </a>
    );
  }

  return (
    <a
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-[15px] font-medium transition-colors",
        variant === "soft" && "bg-stone-200 text-ink hover:bg-stone-300",
        variant === "dark" && "bg-ink text-white hover:bg-black",
        variant === "brand" && "bg-brand text-white hover:bg-[#1d4ed8]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
