import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

// Drapeaux dessines en SVG : les drapeaux emoji s'affichent en lettres (« TG »)
// sous Windows, tres repandu dans les ecoles.

const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.382;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");

const vertical = (a: string, b: string, c: string) => (
  <>
    <rect width="10" height="20" fill={a} />
    <rect x="10" width="10" height="20" fill={b} />
    <rect x="20" width="10" height="20" fill={c} />
  </>
);

const FLAGS: Record<string, ReactNode> = {
  TG: (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} y={i * 4} width="30" height="4" fill={i % 2 === 0 ? "#006a4e" : "#ffce00"} />
      ))}
      <rect width="12" height="12" fill="#d21034" />
      <polygon points={star(6, 6.3, 3.8)} fill="#fff" />
    </>
  ),
  BJ: (
    <>
      <rect width="30" height="20" fill="#fcd116" />
      <rect y="10" width="30" height="10" fill="#e8112d" />
      <rect width="12" height="20" fill="#008751" />
    </>
  ),
  CI: vertical("#f77f00", "#fff", "#009e60"),
  SN: (
    <>
      {vertical("#00853f", "#fdef42", "#e31b23")}
      <polygon points={star(15, 10.4, 3.4)} fill="#00853f" />
    </>
  ),
  BF: (
    <>
      <rect width="30" height="10" fill="#ef2b2d" />
      <rect y="10" width="30" height="10" fill="#009e49" />
      <polygon points={star(15, 10.4, 3.6)} fill="#fcd116" />
    </>
  ),
  ML: vertical("#14b53a", "#fcd116", "#ce1126"),
  GN: vertical("#ce1126", "#fcd116", "#009460"),
  NE: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#e05206" />
      <rect y="13.33" width="30" height="6.67" fill="#0db02b" />
      <circle cx="15" cy="10" r="2.3" fill="#e05206" />
    </>
  ),
  CM: (
    <>
      {vertical("#007a5e", "#ce1126", "#fcd116")}
      <polygon points={star(15, 10.4, 3.4)} fill="#fcd116" />
    </>
  ),
};

export function Flag({ code, className }: { code: string; className?: string }) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden className={cn("h-5 w-[30px] shrink-0 overflow-hidden rounded-[4px] ring-1 ring-black/10", className)}>
      {FLAGS[code] ?? <rect width="30" height="20" fill="#e9e6e1" />}
    </svg>
  );
}
