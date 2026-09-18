import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("font-display text-[22px] font-bold tracking-tight text-ink", className)}
    >
      Schoolvi
    </Link>
  );
}
