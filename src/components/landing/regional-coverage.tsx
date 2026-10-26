import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon, MapPinIcon, SmartphoneIcon } from "lucide-react";

import { COUNTRIES } from "@/content/countries";
import { DEMO_URL } from "@/content/site";

export function RegionalCoverage() {
  return (
    <section id="pays" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand-light/60 px-3.5 py-1 text-[13px] font-semibold text-brand">
          🌍 Présence en Afrique de l&apos;Ouest & Centrale
        </span>
        <h2 className="font-display mt-4 text-[34px] leading-[1.08] text-ink sm:text-[40px] md:text-[52px]">
          Conçu pour les écoles du Togo, Bénin, Côte d&apos;Ivoire, Burkina Faso, Mali, Guinée, Niger et Sénégal
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
          Chaque pays a ses réalités, ses ministères de tutelle et ses habitudes de paiement mobile.
          Schoolvi s&apos;adapte nativement aux programmes scolaires officiels et aux moyens de paiement locaux de votre pays.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.map((country) => (
          <article
            key={country.slug}
            className="group relative flex flex-col justify-between rounded-3xl border border-stone-300 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-4xl" role="img" aria-label={country.name}>
                  {country.flag}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {country.code}
                </span>
              </div>

              <h3 className="font-display mt-5 text-[24px] font-medium text-ink group-hover:text-brand">
                {country.name}
              </h3>

              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <strong className="text-ink font-medium">Villes :</strong>{" "}
                    {country.mainCities.slice(0, 3).join(", ")}...
                  </span>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground">
                  <SmartphoneIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <strong className="text-ink font-medium">Paiements :</strong>{" "}
                    {country.mobileMoney.slice(0, 2).join(", ")}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                  <span className="line-clamp-2">
                    <strong className="text-ink font-medium">Conformité :</strong> {country.ministry}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200/80">
              <Link
                href={`/${country.slug}`}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand transition-colors group-hover:text-brand-soft"
              >
                <span>Découvrir l&apos;offre au {country.name}</span>
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-100/70 p-5 text-center text-[15px] text-muted-foreground sm:p-6">
        <p>
          <strong className="text-ink font-semibold">Votre établissement scolaire est dans un autre pays ?</strong>{" "}
          (Tchad, Gabon, RDC, Congo...) Schoolvi s&apos;adapte à tout établissement de la zone francophone UEMOA, CEMAC et OHADA.{" "}
          <a href={DEMO_URL} target="_blank" rel="noreferrer" className="font-semibold text-brand underline underline-offset-4 hover:text-ink">
            Contactez notre équipe sur WhatsApp pour une démonstration personnalisée
          </a>
        </p>
      </div>
    </section>
  );
}
