import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingCta } from "@/components/landing/floating-cta";
import { HashScroll } from "@/components/landing/hash-scroll";
import { Hero } from "@/components/landing/hero";
import { Modules } from "@/components/landing/modules";
import { Pricing } from "@/components/landing/pricing";
import { ProductPanel } from "@/components/landing/product-panel";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { StructuredData } from "@/components/landing/structured-data";
import { Unified } from "@/components/landing/unified";
import { ValueProps } from "@/components/landing/value-props";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HashScroll />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductPanel />
        <ValueProps />
        <Modules />
        <Unified />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
