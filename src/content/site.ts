export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const NAV_LINKS = [
  { label: "Produit", href: "#produit" },
  { label: "Modules", href: "#modules" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const CTA = {
  primary: { label: "Demander une demo", href: "#contact" },
  login: { label: "Se connecter", href: `${APP_URL}/login` },
  contact: { label: "Nous contacter", href: "mailto:contact@schoolvi.app" },
};

export const HERO = {
  title: ["Gerer votre ecole", "redevient un plaisir"],
  description: [
    "La plateforme tout-en-un pour les ecoles, colleges et lycees :",
    "eleves, presences, notes, emploi du temps et frais de scolarite.",
  ],
};

export const MODULE_TABS = [
  { id: "students", label: "Eleves" },
  { id: "attendance", label: "Presences" },
  { id: "grades", label: "Notes" },
  { id: "timetable", label: "Emploi du temps" },
  { id: "fees", label: "Frais" },
] as const;

export const VALUE_PROPS = [
  {
    title: "Gagnez du temps",
    description:
      "Appel, notes et encaissements se font en quelques clics. Fini les cahiers et les fichiers Excel disperses.",
    tone: "sky",
    mockup: "attendance",
  },
  {
    title: "Impliquez les familles",
    description:
      "Les parents suivent les notes et les presences de leurs enfants et remontent leurs demandes directement.",
    tone: "lilac",
    mockup: "parent",
  },
  {
    title: "Gardez le controle",
    description:
      "Effectifs, presences du jour, fonds collectes et reclamations en attente : tout est sur votre tableau de bord.",
    tone: "brand",
    mockup: "dashboard",
  },
] as const;

export const SOCIAL_PROOF = "Pense pour les ecoles, colleges, lycees et universites";

export type Module = {
  id: string;
  title: string;
  description: string;
  tags: { icon: string; label: string }[];
  mockup: "students" | "grades" | "fees";
};

export const MODULES: Module[] = [
  {
    id: "vie-scolaire",
    title: "Vie scolaire",
    description:
      "Des dossiers eleves complets, des classes organisees par niveau et par filiere, un appel quotidien qui alimente directement le tableau de bord.",
    tags: [
      { icon: "students", label: "Eleves" },
      { icon: "classes", label: "Classes" },
      { icon: "attendance", label: "Presences" },
      { icon: "timetable", label: "Emploi du temps" },
    ],
    mockup: "students",
  },
  {
    id: "pedagogie",
    title: "Pedagogie",
    description:
      "Planifiez les sessions d'examen, saisissez les notes matiere par matiere avec leurs coefficients, et generez les bulletins de periode.",
    tags: [
      { icon: "exams", label: "Examens" },
      { icon: "grades", label: "Notes" },
      { icon: "reports", label: "Bulletins" },
      { icon: "subjects", label: "Matieres" },
    ],
    mockup: "grades",
  },
  {
    id: "administration",
    title: "Administration & finances",
    description:
      "Encaissez au guichet, suivez les paiements de chaque eleve et visualisez les fonds collectes. Les reclamations et suggestions des familles arrivent au meme endroit.",
    tags: [
      { icon: "fees", label: "Frais de scolarite" },
      { icon: "staff", label: "Personnel" },
      { icon: "complaints", label: "Reclamations" },
      { icon: "suggestions", label: "Suggestions" },
    ],
    mockup: "fees",
  },
];

// Temoignages fictifs a remplacer par de vrais retours clients avant mise en ligne.
export const TESTIMONIALS = [
  {
    quote: "L'appel du matin prend deux minutes et les parents sont prevenus aussitot.",
    name: "Directrice",
    role: "College prive, 420 eleves",
  },
  {
    quote: "Les bulletins de fin de trimestre sortent en une journee au lieu d'une semaine.",
    name: "Censeur",
    role: "Lycee, 900 eleves",
  },
  {
    quote: "On sait enfin qui a paye quoi, sans courir apres les recus papier.",
    name: "Secretaire comptable",
    role: "Ecole primaire, 260 eleves",
  },
  {
    quote: "Je gere mes deux etablissements avec un seul compte, chacun reste bien separe.",
    name: "Fondateur",
    role: "Groupe scolaire, 2 sites",
  },
  {
    quote: "Je vois les notes de mes trois enfants au meme endroit, meme s'ils ne sont pas dans la meme ecole.",
    name: "Parent d'eleves",
    role: "3 enfants",
  },
  {
    quote: "Je ne saisis que mes classes et mes matieres, rien de plus. C'est clair.",
    name: "Enseignant",
    role: "Mathematiques, 2 etablissements",
  },
] as const;

export const UNIFIED = {
  title: ["Tout votre etablissement", "au meme endroit"],
};

export const PRICING = {
  title: "Un tarif simple, sans surprise",
  description:
    "Vous payez uniquement pour vos eleves. Enseignants, personnel et modules sont inclus, sans limite.",
  pricePerStudentPerYear: 1000,
  currency: "FCFA",
  minStudents: 50,
  maxStudents: 3000,
  defaultStudents: 400,
  step: 10,
  included: [
    "Enseignants illimites",
    "Personnel administratif illimite",
    "Tous les modules inclus",
    "Plusieurs etablissements sur un seul compte",
    "Espace parents et eleves",
    "Assistance par email et WhatsApp",
  ],
  note: "Paiement par virement ou en especes, sans carte bancaire. Aucun frais d'installation.",
  cta: "Demander une demo",
};

export const FAQ = [
  {
    question: "Combien coute Schoolvi ?",
    answer:
      "1000 FCFA par eleve et par an. Les enseignants et le personnel administratif sont illimites, quel que soit le nombre d'etablissements.",
  },
  {
    question: "Schoolvi convient-il a plusieurs etablissements ?",
    answer:
      "Oui. Un fondateur gere plusieurs ecoles depuis un seul compte, chaque etablissement restant totalement isole des autres.",
  },
  {
    question: "Les donnees de mon ecole sont-elles protegees ?",
    answer:
      "Chaque etablissement est un espace independant. L'isolation est appliquee au niveau de la base de donnees, pas seulement dans l'interface.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Par virement ou en especes, sans carte bancaire. Vous recevez une facture annuelle calculee sur votre effectif reel.",
  },
  {
    question: "Faut-il un compte pour chaque eleve ?",
    answer:
      "Non. Un eleve peut exister dans Schoolvi sans acces de connexion, ce qui est frequent pour les plus jeunes. Les parents peuvent suivre plusieurs enfants depuis un seul compte.",
  },
] as const;

export const FINAL_CTA = {
  title: "Simplifiez votre rentree",
  description: "Passez a Schoolvi et concentrez-vous sur ce qui compte : vos eleves.",
  cta: "Demander une demo",
};

export const FOOTER = {
  columns: [
    {
      title: "Produit",
      links: [
        { label: "Eleves & classes", href: "#modules" },
        { label: "Presences", href: "#modules" },
        { label: "Examens & bulletins", href: "#modules" },
        { label: "Frais de scolarite", href: "#modules" },
        { label: "Emploi du temps", href: "#modules" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "Tarifs", href: "#tarifs" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
        { label: "Se connecter", href: `${APP_URL}/login` },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Conditions d'utilisation", href: "#" },
        { label: "Politique de confidentialite", href: "#" },
      ],
    },
  ],
};
