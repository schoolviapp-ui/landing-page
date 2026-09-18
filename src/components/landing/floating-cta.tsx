import { PillButton } from "@/components/ui/pill-button";
import { CTA } from "@/content/site";

export function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <PillButton href={CTA.primary.href} variant="floating">
        {CTA.primary.label}
      </PillButton>
    </div>
  );
}
