import Link from "next/link";
import { CheckCircle2Icon, ChevronRightIcon, MapPinIcon, ShieldCheckIcon, SmartphoneIcon, SparklesIcon } from "lucide-react";

import { HashScroll } from "@/components/landing/hash-scroll";
import { ProductPanel } from "@/components/landing/product-panel";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Blob } from "@/components/ui/blob";
import { PillButton } from "@/components/ui/pill-button";
import type { CountrySeo } from "@/content/countries";
import { COUNTRIES } from "@/content/countries";
import { CTA, DEMO_URL, PRICING, getWhatsAppDemoUrl } from "@/content/site";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export function CountryPageTemplate({ country }: { country: CountrySeo }) {
  const otherCountries = COUNTRIES.filter((c) => c.slug !== country.slug);
  const countryDemoUrl = getWhatsAppDemoUrl(country.name);

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
          priceCurrency: "XOF",
          description: `Gratuit et illimité pour l'établissement. Contribution de ${PRICING.pricePerStudentPerYear} FCFA par élève et par an versée par les familles.`,
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pb-24 sm:pt-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Blob shape="sun" tone="brand" face className="absolute -left-10 top-[20%] hidden size-36 animate-float sm:block lg:left-4" />
            <Blob shape="leaf" tone="mint" face className="absolute -right-8 top-[30%] hidden size-32 animate-float-slow sm:block lg:right-6" />
          </div>

          <div className="relative mx-auto flex max-w-[1240px] flex-col items-center px-6 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-6 flex items-center gap-2 text-[14px] text-muted-foreground">
              <Link href="/" className="hover:text-ink">
                Accueil
              </Link>
              <ChevronRightIcon className="size-3.5" />
              <span className="font-medium text-ink">Afrique de l&apos;Ouest</span>
              <ChevronRightIcon className="size-3.5" />
              <span className="font-semibold text-brand">{country.name}</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-light/70 px-4 py-1.5 text-[13px] font-semibold text-brand shadow-sm sm:text-[14px]">
              <span className="text-base">{country.flag}</span>
              <span>{country.heroBadge}</span>
            </div>

            {/* H1 */}
            <h1 className="font-display mt-6 max-w-4xl text-[38px] leading-[1.06] text-ink sm:text-[52px] md:text-[60px]">
              {country.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted-foreground sm:text-[19px]">
              {country.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
              <PillButton href={countryDemoUrl} variant="arrow">
                {CTA.primary.label}
              </PillButton>
              <PillButton href={countryDemoUrl} variant="soft">
                Échanger sur WhatsApp ({country.name})
              </PillButton>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[14px] font-medium text-muted-foreground sm:gap-8 sm:text-[15px]">
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-emerald-600" />
                Gratuit pour l&apos;établissement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-emerald-600" />
                100% conforme {country.name}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-emerald-600" />
                Parents informés sur WhatsApp
              </span>
            </div>
          </div>
        </section>

        {/* Product Preview */}
        <ProductPanel />

        {/* Local Advantages Grid */}
        <section className="mx-auto max-w-[1240px] px-4 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[32px] leading-[1.1] text-ink sm:text-[42px]">
              Pourquoi les écoles au {country.name} choisissent Schoolvi
            </h2>
            <p className="mt-3 text-[17px] text-muted-foreground">
              Des fonctionnalités taillées pour le contexte éducatif et financier local.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {country.advantages.map((adv) => (
              <article key={adv.title} className="rounded-3xl border border-stone-300 bg-white p-7 sm:p-9 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <SparklesIcon className="size-6" />
                </div>
                <h3 className="font-display mt-6 text-[22px] font-semibold text-ink sm:text-[24px]">{adv.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{adv.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Country Specific Highlights banner */}
        <section className="mx-auto max-w-[1240px] px-4 pt-16 sm:px-6">
          <div className="rounded-3xl border border-stone-300 bg-stone-100 p-8 sm:p-12 md:p-14">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wider text-brand">
                  <MapPinIcon className="size-4" />
                  Villes couvertes au {country.name}
                </p>
                <p className="font-display mt-3 text-[22px] text-ink">
                  {country.mainCities.join(" · ")}
                </p>
                <p className="mt-2 text-[14px] text-muted-foreground">
                  Accessible partout au {country.name}, même avec une connexion internet mobile modeste.
                </p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wider text-brand">
                  <SmartphoneIcon className="size-4" />
                  Moyens de paiement acceptés
                </p>
                <p className="font-display mt-3 text-[22px] text-ink">
                  {country.mobileMoney.join(" · ")}
                </p>
                <p className="mt-2 text-[14px] text-muted-foreground">
                  Encaissement transparent, reçus instantanés et réconciliation financière sans écarts de caisse.
                </p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wider text-brand">
                  <ShieldCheckIcon className="size-4" />
                  Conformité officielle
                </p>
                <p className="font-display mt-3 text-[22px] text-ink">
                  {country.ministry}
                </p>
                <p className="mt-2 text-[14px] text-muted-foreground">
                  Moyennes, coefficients et bulletins alignés sur les directives ministérielles officielles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="mx-auto max-w-[1240px] px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">FAQ {country.name}</span>
              <h2 className="font-display mt-2 text-[32px] leading-[1.08] text-ink sm:text-[42px]">
                Questions posées par les chefs d&apos;établissement au {country.name}
              </h2>
              <p className="mt-4 text-[16px] text-muted-foreground">
                Vous avez d&apos;autres questions spécifiques à votre inspection ou diocèse ? Nos équipes vous répondent en direct sur WhatsApp.
              </p>
              <div className="mt-6">
                <PillButton href={countryDemoUrl} variant="arrow">
                  Poser une question sur WhatsApp
                </PillButton>
              </div>
            </div>

            <div className="space-y-4">
              {country.localFaqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-stone-300 bg-white p-6 open:bg-stone-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[18px] font-medium text-ink">
                    {faq.question}
                    <span className="text-xl transition-transform group-open:rotate-45 text-muted-foreground">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Country Navigation (Internal Linking for SEO) */}
        <section className="mx-auto max-w-[1240px] px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="rounded-3xl border border-stone-300 bg-white p-8 sm:p-12">
            <h3 className="font-display text-[24px] text-ink">
              Découvrez aussi Schoolvi dans d&apos;autres pays d&apos;Afrique de l&apos;Ouest :
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {otherCountries.map((other) => (
                <Link
                  key={other.slug}
                  href={`/${other.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-stone-200 p-4 transition-colors hover:border-brand/40 hover:bg-stone-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{other.flag}</span>
                    <div>
                      <p className="font-medium text-ink group-hover:text-brand">Schoolvi au {other.name}</p>
                      <p className="text-xs text-muted-foreground">{other.capital}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-[1240px] px-6 py-20 text-center sm:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-[34px] leading-tight text-ink sm:text-[48px]">
              Rejoignez les établissements scolaires du {country.name} qui gagnent du temps avec Schoolvi
            </h2>
            <p className="mt-4 text-[17px] text-muted-foreground">
              Démarrage en 30 minutes. Zéro frais pour votre école.
            </p>
            <div className="mt-8 flex justify-center">
              <PillButton href={countryDemoUrl} variant="arrow">
                Demander votre démonstration gratuite
              </PillButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
