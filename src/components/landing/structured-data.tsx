import { DEMO_URL, FAQ, PRICING } from "@/content/site";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.png`,
  email: CONTACT_EMAIL,
  areaServed: { "@type": "Country", name: "Togo" },
  address: { "@type": "PostalAddress", addressLocality: "Lome", addressCountry: "TG" },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "fr",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const software = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "fr",
  description:
    "Logiciel de gestion scolaire pour les écoles, collèges et lycées du Togo : recouvrement des frais de scolarité, parents prévenus sur WhatsApp, notes et bulletins automatiques, emploi du temps et assistant IA.",
  featureList: [
    "Gestion des élèves et des classes",
    "Presences et appel quotidien",
    "Notes, examens et bulletins",
    "Emploi du temps",
    "Frais de scolarité et encaissements en FCFA",
    "Reclamations et suggestions des familles",
    "Assistant IA",
  ],
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "XOF",
    description: `Gratuit et illimité pour l'établissement. Contribution de ${PRICING.pricePerStudentPerYear} FCFA par élève et par an payée par les parents.`,
    availability: "https://schema.org/InStock",
    url: DEMO_URL,
    areaServed: "TG",
  },
  provider: { "@id": `${SITE_URL}/#organization` },
};

const faq = {
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const graph = { "@context": "https://schema.org", "@graph": [organization, website, software, faq] };

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
