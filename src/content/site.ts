export const APP_URL = "https://app.schoolvi.co";

export const NAV_LINKS = [
  { label: "Produit", href: "/#produit" },
  { label: "Modules", href: "/#modules" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const DEMO_URL = "https://calendly.com/schoolvi-app/30min";

export const CTA = {
  primary: { label: "Demander une démo", href: DEMO_URL },
  login: { label: "Se connecter", href: `${APP_URL}/login` },
  contact: { label: "Nous contacter", href: "mailto:contact@schoolvi.co" },
};

export const HERO = {
  badge: "Logiciel de gestion d'établissement scolaire n°1 en Afrique de l'Ouest",
  title: ["Le logiciel de gestion scolaire", "pensé pour l'Afrique de l'Ouest"],
  description: [
    "Schoolvi libère les écoles, collèges et lycées du Togo, du Bénin, de Côte d'Ivoire et de la sous-région : bulletins automatiques sans recopie de notes, recouvrement des frais de scolarité (T-Money, Flooz, MTN, Wave), relances WhatsApp et assistant IA.",
    "100% gratuit et illimité pour l'établissement scolaire.",
  ],
};

export const MODULE_TABS = [
  { id: "dashboard", label: "Tableau de bord" },
  { id: "students", label: "Élèves" },
  { id: "fees", label: "Frais de scolarité" },
  { id: "assistant", label: "Assistant IA" },
  { id: "timetable", label: "Emploi du temps" },
] as const;

export type ModuleTabId = (typeof MODULE_TABS)[number]["id"];

export const VALUE_PROPS = [
  {
    title: "Libérez vos enseignants",
    description:
      "Fini les fiches de notes à remplir, les moyennes calculées à la main et les nuits blanches de fin de trimestre. L'enseignant fait l'appel et saisit ses notes depuis son téléphone : Schoolvi calcule moyennes, rangs et bulletins.",
    tone: "sky",
    mockup: "attendance",
  },
  {
    title: "Des parents prévenus à temps",
    description:
      "Trop de parents découvrent les absences et les mauvaises notes sur le bulletin, quand il est déjà tard. Avec Schoolvi, ils sont prévenus sur WhatsApp dès la première absence et suivent leur enfant tout au long du trimestre.",
    tone: "lilac",
    mockup: "parent",
  },
  {
    title: "Récupérez ce qu'on vous doit",
    description:
      "Qui a payé, qui est en retard, combien reste à encaisser : vous le voyez en un coup d'œil. Schoolvi relance les familles sur WhatsApp à votre place, envoie les reçus et suit chaque échéance, sans abîmer la relation avec les parents.",
    tone: "brand",
    mockup: "dashboard",
  },
] as const;

export const SOCIAL_PROOF =
  "Pensé pour la réalité des écoles en Afrique de l'Ouest (Togo, Bénin, Côte d'Ivoire, Sénégal) : paiements en espèces et Mobile Money (T-Money, Flooz, MTN MoMo, Wave, Orange Money), parents joignables sur WhatsApp, bulletins conformes aux programmes officiels.";

export type Module = {
  id: string;
  title: string;
  description: string;
  tags: { icon: string; label: string }[];
  mockup: "students" | "grades" | "fees";
  tone: "sky" | "lilac" | "mint";
};

export const MODULES: Module[] = [
  {
    id: "vie-scolaire",
    title: "Élèves et familles, main dans la main",
    description:
      "Un élève ne décroche pas du jour au lendemain. Schoolvi repère les absences qui se répètent, prévient les parents à chaque appel et leur répond sur WhatsApp : l'école et la famille agissent ensemble, avant l'échec scolaire.",
    tags: [
      { icon: "students", label: "Dossiers élèves" },
      { icon: "attendance", label: "Appel par cours" },
      { icon: "whatsapp", label: "Parents sur WhatsApp" },
      { icon: "timetable", label: "Emploi du temps" },
    ],
    mockup: "students",
    tone: "sky",
  },
  {
    id: "pedagogie",
    title: "Des bulletins sans corvée",
    description:
      "Plus de fiches de notes à remplir, de moyennes à recalculer ni de bulletins à recopier. Chaque enseignant saisit ses notes une seule fois : coefficients, moyennes, rangs et bulletins sont prêts dès la fin du trimestre, sans erreur de calcul.",
    tags: [
      { icon: "exams", label: "Examens" },
      { icon: "grades", label: "Saisie des notes" },
      { icon: "reports", label: "Bulletins automatiques" },
      { icon: "subjects", label: "Coefficients" },
    ],
    mockup: "grades",
    tone: "lilac",
  },
  {
    id: "administration",
    title: "Frais scolaires encaissés, trésorerie sereine",
    description:
      "Les impayés menacent les salaires et la vie de l'école. Schoolvi suit chaque échéance, relance les familles en retard sur WhatsApp, délivre les reçus et vous montre à tout moment ce qu'il y a en caisse, en banque et sur mobile money.",
    tags: [
      { icon: "fees", label: "Frais de scolarité" },
      { icon: "reminders", label: "Relances automatiques" },
      { icon: "reports", label: "Reçus" },
      { icon: "staff", label: "Paie du personnel" },
    ],
    mockup: "fees",
    tone: "mint",
  },
];

// Temoignages a remplacer par de vrais retours clients avant mise en ligne.
export const TESTIMONIALS = [
  {
    quote: "L'appel du matin prend deux minutes et les parents sont prévenus aussitôt sur WhatsApp.",
    name: "Directrice",
    role: "Collège privé, 420 élèves (Lomé, Togo)",
  },
  {
    quote: "Les bulletins de fin de trimestre sortent en une journée au lieu d'une semaine de calculs manuels.",
    name: "Censeur",
    role: "Lycée d'enseignement général, 900 élèves (Cotonou, Bénin)",
  },
  {
    quote: "On sait enfin qui a payé la scolarité et qui est en retard, avec les paiements Wave et MoMo.",
    name: "Secrétaire comptable",
    role: "Groupe scolaire, 580 élèves (Abidjan, Côte d'Ivoire)",
  },
  {
    quote: "Je gère mes deux établissements avec un seul compte Schoolvi, chacun restant parfaitement cloisonné.",
    name: "Fondateur",
    role: "Groupe scolaire, 2 campus (Porto-Novo, Bénin)",
  },
  {
    quote: "Je vois les notes et les absences de mes trois enfants au même endroit directement sur WhatsApp.",
    name: "Parent d'élèves",
    role: "3 enfants scolarisés (Lomé, Togo)",
  },
  {
    quote: "Je saisis mes notes sur mon smartphone en 5 minutes. Fini les fiches cartonnées à remplir la nuit.",
    name: "Enseignant",
    role: "Mathématiques & Sciences physiques (Bouaké, Côte d'Ivoire)",
  },
] as const;

export const UNIFIED = {
  title: ["Demandez,", "l'assistant IA s'en charge"],
  description:
    "« Qui n'a pas encore payé en 6ème A ? », « Relance les parents en retard », « Prépare le bulletin de Kofi » : écrivez ou dictez votre demande. L'assistant de Schoolvi cherche, prépare, et vous fait valider avant d'agir.",
};

export const PRICING = {
  title: "Gratuit pour votre établissement",
  description:
    "Schoolvi ne coûte rien à l'école, sans limite d'élèves, d'enseignants ni de modules. Seule une contribution de 1 000 FCFA par élève et par an est payée par les parents.",
  pricePerStudentPerYear: 1000,
  currency: "FCFA",
  minStudents: 50,
  maxStudents: 3000,
  defaultStudents: 400,
  step: 10,
  included: [
    "Gratuit pour l'établissement, sans limite",
    "Enseignants illimités",
    "Personnel administratif illimité",
    "Tous les modules inclus",
    "Plusieurs établissements sur un seul compte",
    "Espace parents sur WhatsApp",
    "Assistance par email et WhatsApp",
  ],
  note: "Aucun abonnement ni frais d'installation pour l'établissement. Les parents versent 1 000 FCFA par élève et par an, soit moins de 100 FCFA par mois, collectés par l'école.",
  cta: "Demander une démo",
};

export const FAQ = [
  {
    question: "Quel est le meilleur logiciel de gestion d'établissement scolaire au Togo, au Bénin et en Côte d'Ivoire ?",
    answer:
      "Schoolvi est la référence des logiciels de gestion d'établissement scolaire en Afrique de l'Ouest (Togo, Bénin, Côte d'Ivoire, Sénégal...). Pensé pour la réalité locale, il centralise les dossiers élèves, automatise le calcul des moyennes et l'édition des bulletins selon les programmes officiels, encaisse les frais par Mobile Money (T-Money, Flooz, MTN MoMo, Wave, Orange Money) et alerte les parents sur WhatsApp. De plus, il est 100% gratuit pour l'école.",
  },
  {
    question: "Comment Schoolvi calcule-t-il les moyennes et bulletins scolaires sans corvée ?",
    answer:
      "Chaque enseignant saisit les notes de ses interrogations et devoirs depuis un ordinateur ou son téléphone. Schoolvi applique automatiquement les coefficients officiels de chaque matière (programmes MEPST au Togo, MESTFP au Bénin, MENA en Côte d'Ivoire, MEN au Sénégal), calcule les moyennes générales, établit les rangs de classe et génère des bulletins clairs et prêts à imprimer en PDF.",
  },
  {
    question: "Comment Schoolvi m'aide-t-il à récupérer les impayés de scolarité ?",
    answer:
      "Chaque élève dispose d'un échéancier personnalisé. Schoolvi vous montre en un coup d'œil qui est à jour et qui est en retard. En un clic, l'école envoie des relances courtoises sur WhatsApp aux parents avec le montant exact dû. Les versements sont enregistrés (espèces, chèque, T-Money, Flooz, MTN, Wave, Orange Money) avec délivrance instantanée d'un reçu numérique.",
  },
  {
    question: "Quels modes de paiement des frais de scolarité sont supportés ?",
    answer:
      "Schoolvi prend en charge l'ensemble des moyens de paiement utilisés en Afrique francophone : espèces en caisse, virements bancaires et tous les opérateurs Mobile Money locaux (T-Money et Flooz au Togo, MTN Mobile Money et Moov Money au Bénin, Wave, Orange Money et MTN MoMo en Côte d'Ivoire et au Sénégal). L'école garde un état de trésorerie net et consolidé.",
  },
  {
    question: "Comment les parents d'élèves sont-ils informés ?",
    answer:
      "Directement sur WhatsApp, l'application déjà installée sur le téléphone de tous les parents en Afrique de l'Ouest. Dès qu'un professeur signale une absence ou un retard lors de l'appel, les parents reçoivent une alerte immédiate. Ils reçoivent également les avis de l'école et le suivi des frais sans avoir à télécharger d'application supplémentaire.",
  },
  {
    question: "Schoolvi est-il conforme aux systèmes éducatifs d'Afrique de l'Ouest ?",
    answer:
      "Oui. Schoolvi a été conçu spécifiquement pour les programmes scolaires du Togo (MEPST), du Bénin (MESTFP / MEMP), de Côte d'Ivoire (MENA) et du Sénégal (MEN). Il gère les cycles primaire, collège et lycée d'enseignement général et technique, les découpages trimestriels et semestriels, les coefficients par filière et les appréciations officielles.",
  },
  {
    question: "Que fait l'assistant IA de Schoolvi ?",
    answer:
      "Vous lui posez vos questions en français, par écrit ou par message vocal : « Donne-moi la liste des élèves en retard de paiement en 3ème B », « Quels élèves sont en difficulté en mathématiques ? », « Prépare le bulletin de Kofi ». L'assistant IA analyse les données de votre établissement, vous répond instantanément et peut préparer les actions (relances, convocations, certificats) après votre validation.",
  },
  {
    question: "Pourquoi Schoolvi est-il gratuit pour l'établissement scolaire ?",
    answer:
      "Schoolvi ne facture aucun frais de licence, d'abonnement logiciel ou d'installation à l'établissement. Tous les modules sont inclus et illimités (nombre d'élèves, de professeurs et de comptes administratifs). Seule une contribution minime de 1 000 FCFA par an et par élève (moins de 100 FCFA par mois) est versée par les parents d'élèves, collectée par l'école lors des inscriptions.",
  },
  {
    question: "Schoolvi permet-il de gérer plusieurs établissements ou campus ?",
    answer:
      "Oui. Un même fondateur ou groupe scolaire peut piloter plusieurs écoles ou plusieurs cycles (primaire, collège, lycée) depuis un compte unique, chaque établissement disposant d'un espace de données strictement isolé et sécurisé.",
  },
  {
    question: "Les données de mon école sont-elles protégées et confidentielles ?",
    answer:
      "Absolument. Chaque établissement dispose d'une base étanche. Vos données d'élèves, de notes et financières restent votre propriété exclusive et sont protégées selon les normes de sécurité les plus rigoureuses.",
  },
] as const;

export const FINAL_CTA = {
  title: "Ce trimestre, modernisez votre école",
  description:
    "Zéro impayé, des parents informés sur WhatsApp, des enseignants libérés de la paperasse. En 30 minutes, découvrez comment Schoolvi transforme la gestion de votre établissement au Togo, au Bénin, en Côte d'Ivoire et partout en Afrique de l'Ouest.",
  cta: "Demander une démo gratuite",
};

export const FOOTER = {
  tagline: "Le logiciel de gestion d'établissement scolaire n°1 en Afrique de l'Ouest (Togo, Bénin, Côte d'Ivoire, Sénégal...).",
  location: "Lomé (Togo) · Cotonou (Bénin) · Abidjan (Côte d'Ivoire)",
  columns: [
    {
      title: "Produit",
      links: [
        { label: "Gestion des élèves", href: "/#modules" },
        { label: "Appel & absences WhatsApp", href: "/#modules" },
        { label: "Bulletins & notes automatiques", href: "/#modules" },
        { label: "Frais de scolarité & Mobile Money", href: "/#modules" },
        { label: "Emploi du temps", href: "/#modules" },
        { label: "Assistant IA éducatif", href: "/#assistant" },
      ],
    },
    {
      title: "Pays couverts",
      links: [
        { label: "🇹🇬 Togo", href: "/togo" },
        { label: "🇧🇯 Bénin", href: "/benin" },
        { label: "🇨🇮 Côte d'Ivoire", href: "/cote-divoire" },
        { label: "🇸🇳 Sénégal", href: "/senegal" },
        { label: "🇧🇫 Burkina Faso", href: "/burkina-faso" },
        { label: "🇲🇱 Mali", href: "/mali" },
        { label: "🇬🇳 Guinée", href: "/guinee" },
        { label: "🇳🇪 Niger", href: "/niger" },
        { label: "🇨🇲 Cameroun", href: "/cameroun" },
      ],
    },
    {
      title: "Entreprise & Légal",
      links: [
        { label: "Tarifs (0 FCFA école)", href: "/#tarifs" },
        { label: "FAQ Référencement", href: "/#faq" },
        { label: "Demander une démo", href: DEMO_URL },
        { label: "Se connecter", href: `${APP_URL}/login` },
        { label: "Conditions générales", href: "/cgu" },
        { label: "Confidentialité", href: "/confidentialite" },
      ],
    },
  ],
};

