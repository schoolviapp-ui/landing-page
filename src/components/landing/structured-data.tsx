import { DEMO_URL, FAQ, PRICING } from "@/content/site";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const COUNTRIES_SERVED = [
  { "@type": "Country", name: "Togo" },
  { "@type": "Country", name: "Bénin" },
  { "@type": "Country", name: "Côte d'Ivoire" },
  { "@type": "Country", name: "Sénégal" },
  { "@type": "Country", name: "Burkina Faso" },
  { "@type": "Country", name: "Mali" },
  { "@type": "Country", name: "Guinée" },
  { "@type": "Country", name: "Niger" },
  { "@type": "Country", name: "Cameroun" },
];

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Schoolvi Afrique", "Schoolvi Togo", "Schoolvi Bénin", "Schoolvi Côte d'Ivoire"],
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.png`,
  email: CONTACT_EMAIL,
  areaServed: COUNTRIES_SERVED,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lomé",
    addressCountry: "TG",
  },
  knowsAbout: [
    "Logiciel de gestion scolaire",
    "Logiciel de gestion d'établissement scolaire",
    "Bulletins scolaires et calcul des moyennes",
    "Recouvrement des frais de scolarité",
    "Mobile Money (T-Money, Flooz, MTN MoMo, Wave, Orange Money)",
    "Vie scolaire et communication WhatsApp parents",
    "Systèmes éducatifs d'Afrique de l'Ouest",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Schoolvi · Logiciel de gestion d'établissement scolaire",
  alternateName: ["Schoolvi", "Schoolvi Afrique"],
  inLanguage: ["fr", "fr-TG", "fr-BJ", "fr-CI", "fr-SN"],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const software = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "Schoolvi · Logiciel de gestion d'établissement scolaire",
  alternateName: ["Schoolvi", "Schoolvi App", "Schoolvi School Management Software"],
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "Logiciel de gestion scolaire et administrative",
  operatingSystem: "Web, Android, iOS",
  inLanguage: "fr",
  description:
    "Logiciel de gestion d'établissement scolaire de référence en Afrique de l'Ouest (Togo, Bénin, Côte d'Ivoire, Sénégal...) : dossiers élèves, calcul automatique des moyennes et bulletins scolaires, encaissement des frais de scolarité par Mobile Money (T-Money, Flooz, MTN MoMo, Wave, Orange Money), alertes WhatsApp et assistant IA.",
  featureList: [
    "Gestion complète des dossiers élèves, inscriptions et matricules",
    "Appel numérique en classe sur smartphone et alertes WhatsApp automatiques aux parents",
    "Calcul automatique des moyennes, coefficients officiels, rangs et bulletins scolaires PDF",
    "Suivi des frais de scolarité, gestion des impayés et reçus numériques",
    "Encaissements Mobile Money multi-opérateurs (T-Money, Flooz, MTN MoMo, Wave, Orange Money)",
    "Emploi du temps par classe, professeur et salle de cours",
    "Assistant IA pour l'administration et la direction de l'école",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "XOF",
    description: `Gratuit et illimité pour l'établissement. Contribution de ${PRICING.pricePerStudentPerYear} FCFA par élève et par an versée par les parents.`,
    availability: "https://schema.org/InStock",
    url: DEMO_URL,
    areaServed: ["TG", "BJ", "CI", "SN", "BF", "ML", "GN", "NE", "CM"],
  },
  provider: { "@id": `${SITE_URL}/#organization` },
};

const breadcrumbs = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
  ],
};

const faq = {
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, website, software, breadcrumbs, faq],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}

