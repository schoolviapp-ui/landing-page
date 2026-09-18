import { cn } from "@/lib/utils";

type BlobProps = {
  shape?: "sun" | "arc" | "leaf" | "pill" | "dot" | "diamond";
  tone?: "brand" | "pink" | "sky" | "lilac" | "mint";
  face?: boolean;
  className?: string;
};

const TONES = {
  brand: "bg-gradient-to-br from-[#60a5fa] via-brand-soft to-brand",
  pink: "bg-gradient-to-br from-pink via-[#f4b8ee] to-[#f6c9a6]",
  sky: "bg-gradient-to-br from-[#93c5fd] via-[#7cb8ff] to-[#a78bfa]",
  lilac: "bg-gradient-to-b from-lilac to-[#c9a4ff]",
  mint: "bg-gradient-to-br from-[#9bf0b8] to-[#5ee08d]",
};

export function Blob({ shape = "sun", tone = "brand", face = false, className }: BlobProps) {
  const soft = shape === "dot" || shape === "diamond";

  return (
    <div
      aria-hidden
      className={cn(
        "relative",
        shape !== "arc" && TONES[tone],
        shape === "sun" && "blob-sun",
        shape === "arc" && "blob-arc",
        shape === "leaf" && "blob-leaf",
        shape === "pill" && "rounded-[48%/28%]",
        shape === "dot" && "rounded-full blur-blob animate-pulse-soft",
        shape === "diamond" && "rotate-45 rounded-[18%] blur-blob animate-pulse-soft",
        !soft && "grain",
        className,
      )}
    >
      {face && (
        <svg
          viewBox="0 0 100 100"
          className={cn(
            "absolute inset-0 size-full",
            shape === "arc" && "-translate-x-[14%] -translate-y-[14%] scale-[0.55]",
            shape === "leaf" && "translate-x-[8%] -translate-y-[6%] scale-[0.7]",
            shape === "pill" && "-translate-y-[12%] scale-[0.8]",
          )}
          fill="none"
        >
          <path d="M30 44 q7 -9 14 0" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M56 44 q7 -9 14 0" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M36 60 q14 15 28 0" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
