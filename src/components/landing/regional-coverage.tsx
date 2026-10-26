import { CountryMarquee } from "@/components/landing/country-marquee";
import { Blob } from "@/components/ui/blob";
import { COUNTRIES } from "@/content/countries";
import { DEMO_URL } from "@/content/site";

export function RegionalCoverage() {
  return (
    <section id="pays" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pb-20 sm:px-6 sm:pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-stone-300 bg-white py-10 sm:rounded-[32px] sm:py-14">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Blob shape="dot" tone="sky" className="absolute left-[7%] top-[14%] hidden size-10 sm:block" />
          <Blob shape="diamond" tone="mint" className="absolute right-[9%] top-[18%] hidden size-9 sm:block" />
        </div>

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[48px]">
            Votre pays, vos programmes,
            <br />
            vos moyens de paiement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            Schoolvi suit les programmes officiels et les habitudes de paiement de chaque pays. Choisissez le vôtre.
          </p>
        </div>

        <CountryMarquee countries={COUNTRIES} className="relative mt-8 sm:mt-10" />

        <p className="relative mt-8 px-6 text-center text-[15px] text-muted-foreground sm:mt-10">
          Votre pays n&apos;est pas dans la liste ?{" "}
          <a href={DEMO_URL} target="_blank" rel="noreferrer" className="font-medium text-brand underline-offset-4 hover:underline">
            Écrivez-nous sur WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
