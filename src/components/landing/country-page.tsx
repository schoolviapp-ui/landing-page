import Link from "next/link";
import type { ReactNode } from "react";
import { CheckCircle2Icon, ChevronRightIcon, LandmarkIcon, MapPinIcon, PlusIcon, SmartphoneIcon } from "lucide-react";

import { CountryMarquee } from "@/components/landing/country-marquee";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingCta } from "@/components/landing/floating-cta";
import { HashScroll } from "@/components/landing/hash-scroll";
import { ProductPanel } from "@/components/landing/product-panel";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Blob } from "@/components/ui/blob";
import { Flag } from "@/components/ui/flag";
import { PillButton } from "@/components/ui/pill-button";
import type { CountrySeo } from "@/content/countries";
import { COUNTRIES } from "@/content/countries";
import { CTA, PRICING, getWhatsAppDemoUrl } from "@/content/site";
import { SITE_URL } from "@/lib/site";

// Une forme par avantage, comme les cartes de l'accueil.
const ADVANTAGE_BLOBS = [
  { shape: "sun", tone: "brand" },
  { shape: "leaf", tone: "mint" },
  { shape: "pill", tone: "lilac" },
  { shape: "leaf", tone: "sky" },
] as const;

/** « MEPST » depuis « Ministère ... (MEPST) ». */
const ministryAcronym = (ministry: string) => ministry.match(/\(([^)]+)\)/)?.[1] ?? null;

export function CountryPageTemplate({ country }: { country: CountrySeo }) {
  const otherCountries = COUNTRIES.filter((c) => c.slug !== country.slug);
  const countryDemoUrl = getWhatsAppDemoUrl(country.inName);
  const acronym = ministryAcronym(country.ministry);
  // La contribution est fixee en FCFA ; en Guinee (franc guineen) le montant
  // n'est pas annonce.
  const usesFcfa = country.currency === "XOF" || country.currency === "XAF";

  const localStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: country.name, item: `${SITE_URL}/${country.slug}` },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/${country.slug}#software`,
        name: `Schoolvi ${country.name} - Logiciel de gestion d'établissement scolaire`,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, Android, iOS",
        inLanguage: "fr",
        description: country.seoDescription,
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: country.currency,
          description: usesFcfa
            ? `Gratuit et illimité pour l'établissement. Contribution de ${PRICING.pricePerStudentPerYear} FCFA par élève et par an versée par les familles.`
            : "Gratuit et illimité pour l'établissement. Contribution annuelle par élève versée par les familles.",
          availability: "https://schema.org/InStock",
          url: countryDemoUrl,
          areaServed: country.code,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "48",
          bestRating: "5",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: country.localFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localStructuredData).replace(/</g, "\\u003c") }}
      />
      <HashScroll />
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Blob shape="arc" tone="pink" face className="absolute left-[18%] top-[6%] hidden size-32 animate-float-slow lg:block" />
            <Blob shape="dot" tone="sky" className="absolute left-[62%] top-[5%] size-10 sm:size-12" />
            <Blob shape="sun" tone="brand" face className="absolute -left-10 top-[58%] hidden size-36 animate-float sm:block lg:left-0" />
            <Blob shape="leaf" tone="mint" face className="absolute -right-8 top-[56%] hidden size-32 animate-float-slow sm:block lg:right-[2%]" />
          </div>

          <div className="relative mx-auto flex max-w-[1240px] flex-col items-center px-6 pb-16 pt-12 text-center sm:pb-24 sm:pt-20 md:pt-28">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-[14px] text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-ink">
                Accueil
              </Link>
              <ChevronRightIcon className="size-3.5" />
              <span>{country.region}</span>
              <ChevronRightIcon className="size-3.5" />
              <span className="font-medium text-ink">{country.name}</span>
            </nav>

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white py-1.5 pl-2 pr-4 text-[14px] font-medium text-ink">
              <Flag code={country.code} className="h-4 w-6" />
              {country.heroBadge}
            </div>

            <h1 className="font-display mt-6 max-w-4xl text-[38px] leading-[1.06] text-ink sm:text-[52px] md:text-[60px]">{country.heroTitle}</h1>

            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px] md:text-[19px]">{country.heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
              <PillButton href={countryDemoUrl} variant="arrow">
                {CTA.primary.label}
              </PillButton>
              <PillButton href={countryDemoUrl} variant="soft">
                Nous écrire sur WhatsApp
              </PillButton>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[15px] text-muted-foreground">
              {["Gratuit pour l'établissement", acronym ? `100 % conforme ${acronym}` : `100 % conforme ${country.inName}`, "Parents informés sur WhatsApp"].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-emerald-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProductPanel />

        <section className="mx-auto max-w-[1240px] px-4 pt-20 sm:px-6 sm:pt-32">
          <h2 className="font-display max-w-2xl text-[34px] leading-[1.08] text-ink sm:text-[40px] md:text-[55px]">
            Pourquoi les écoles {country.ofName} choisissent Schoolvi
          </h2>

          <div className="mt-10 grid gap-2 md:grid-cols-2 sm:mt-12">
            {country.advantages.map((adv, i) => {
              const blob = ADVANTAGE_BLOBS[i % ADVANTAGE_BLOBS.length];
              return (
                <article key={adv.title} className="rounded-3xl border border-stone-300 bg-white p-6 sm:rounded-[32px] sm:p-9">
                  <div className="grid size-16 place-items-center rounded-full bg-stone-100">
                    <Blob shape={blob.shape} tone={blob.tone} face className="size-9" />
                  </div>
                  <h3 className="font-display mt-6 text-[24px] font-medium leading-[1.15] text-ink sm:mt-8 sm:text-[28px]">{adv.title}</h3>
                  <p className="mt-2 max-w-lg text-[17px] leading-relaxed text-muted-foreground">{adv.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-2 grid rounded-3xl border border-stone-300 bg-white sm:rounded-[32px] md:grid-cols-3">
            <LocalFact icon={<MapPinIcon className="size-4" />} label="Partout dans le pays">
              <Chips items={country.mainCities.slice(0, 6)} />
              <p className="mt-4 text-[15px] text-muted-foreground">Fonctionne avec une connexion mobile modeste.</p>
            </LocalFact>
            <LocalFact icon={<SmartphoneIcon className="size-4" />} label="Paiements suivis" className="border-t border-stone-300 md:border-l md:border-t-0">
              <Chips items={country.mobileMoney} />
              <p className="mt-4 text-[15px] text-muted-foreground">Chaque versement a son reçu, la caisse tombe juste.</p>
            </LocalFact>
            <LocalFact icon={<LandmarkIcon className="size-4" />} label="Programmes officiels" className="border-t border-stone-300 md:border-l md:border-t-0">
              <p className="text-[17px] leading-snug text-ink">{country.ministry}</p>
              <p className="mt-4 text-[15px] text-muted-foreground">Coefficients, moyennes et bulletins alignés sur ses directives.</p>
            </LocalFact>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 pt-20 sm:px-6 sm:pt-32">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-[34px] leading-[1.08] text-ink sm:text-[40px] md:text-[55px]">
                Questions
                <br />
                fréquentes
              </h2>
              <p className="mt-4 max-w-sm text-[17px] text-muted-foreground">
                Posées par les chefs d&apos;établissement {country.inName}. Une autre question ? On vous répond sur WhatsApp.
              </p>
              <div className="mt-6">
                <PillButton href={countryDemoUrl} variant="arrow">
                  Poser une question
                </PillButton>
              </div>
            </div>
            <div className="space-y-3">
              {country.localFaqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-stone-300 bg-white px-5 py-4 open:bg-stone-100 sm:rounded-3xl sm:px-7 sm:py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium text-ink">
                    {faq.question}
                    <PlusIcon className="size-5 shrink-0 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 pt-20 sm:px-6 sm:pt-32">
          <p className="text-center text-[16px] text-muted-foreground sm:text-[17px]">Schoolvi équipe aussi les écoles de ces pays</p>
          <CountryMarquee countries={otherCountries} className="mt-6" />
        </section>

        <FinalCta
          title={`Rejoignez les écoles ${country.ofName} qui gagnent du temps`}
          description="Démarrage en 30 minutes, aucun frais pour votre établissement. Parlons-en sur WhatsApp."
          cta="Demander votre démo gratuite"
          href={countryDemoUrl}
        />
      </main>

      <SiteFooter />
      <FloatingCta />
    </>
  );
}

function LocalFact({ icon, label, className, children }: { icon: ReactNode; label: string; className?: string; children: ReactNode }) {
  return (
    <div className={`p-6 sm:p-9 ${className ?? ""}`}>
      <p className="flex items-center gap-2 text-[15px] text-muted-foreground">
        <span className="grid size-8 place-items-center rounded-full bg-stone-100 text-brand">{icon}</span>
        {label}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-stone-100 px-3 py-1 text-[15px] text-ink">
          {item}
        </li>
      ))}
    </ul>
  );
}
