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
  title: ["Moins d'impayés,", "plus d'élèves qui réussissent"],
  description: [
    "Relances des familles sur WhatsApp, parents prévenus dès la première absence, bulletins calculés sans recopier une seule note, et un assistant IA qui répond à vos questions.",
    "Schoolvi, le logiciel des écoles, collèges et lycées du Togo.",
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
  "Pensé pour la réalité des écoles du Togo : paiements en espèces, T-Money ou Flooz, parents joignables sur WhatsApp, classes chargées.";

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
    question: "Comment Schoolvi m'aide-t-il à récupérer les impayés ?",
    answer:
      "Chaque élève a ses échéances. Schoolvi vous montre qui est en retard et de combien, relance les familles sur WhatsApp avec le montant exact, envoie un reçu à chaque paiement et tient votre trésorerie à jour (espèces, banque, T-Money, Flooz). Vous gardez la main : c'est vous qui choisissez quand relancer.",
  },
  {
    question: "Mes enseignants doivent-ils encore remplir des fiches de notes ?",
    answer:
      "Non. Chaque enseignant saisit ses notes une seule fois, depuis un ordinateur ou son téléphone. Les moyennes, les rangs et les bulletins se calculent tout seuls, avec les coefficients de chaque matière. Fini les relevés recopiés et les erreurs de calcul en fin de trimestre.",
  },
  {
    question: "Comment les parents sont-ils tenus informés ?",
    answer:
      "Sur WhatsApp, l'application qu'ils utilisent déjà. Ils sont prévenus dès qu'une absence est notée, reçoivent les rappels d'échéance et les avis de l'école, et peuvent écrire à l'école, qui leur répond depuis Schoolvi. Pas d'application à installer.",
  },
  {
    question: "Que fait l'assistant IA ?",
    answer:
      "Vous lui posez vos questions en français, à l'écrit ou à la voix : « Quels élèves sont en difficulté en maths ? », « Combien a-t-on encaissé ce mois-ci ? ». Il répond avec les chiffres de votre école, prépare les listes et les documents, et peut lancer une action (relance, encaissement, avis) après votre validation.",
  },
  {
    question: "Schoolvi est-il adapté aux écoles du Togo ?",
    answer:
      "Oui. Schoolvi est pensé pour les établissements togolais : facturation en FCFA, paiement par virement ou en espèces, assistance par WhatsApp et une interface en français utilisable depuis un ordinateur ou un téléphone, à Lomé comme dans les autres régions.",
  },
  {
    question: "Combien coûte Schoolvi ?",
    answer:
      "Rien pour l'établissement : Schoolvi est gratuit et illimité pour l'école (élèves, enseignants, personnel, modules, plusieurs établissements). Les parents versent 1 000 FCFA par élève et par an, soit moins de 100 FCFA par mois.",
  },
  {
    question: "Schoolvi convient-il à plusieurs établissements ?",
    answer:
      "Oui. Un fondateur gère plusieurs écoles depuis un seul compte, chaque établissement restant totalement isolé des autres.",
  },
  {
    question: "Les données de mon école sont-elles protégées ?",
    answer:
      "Chaque établissement est un espace indépendant. L'isolation est appliquée au niveau de la base de données, pas seulement dans l'interface.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "L'établissement ne paie rien. Chaque famille verse 1 000 FCFA par élève et par an (moins de 100 FCFA par mois). L'école collecte cette contribution pour Schoolvi, par exemple avec les frais de scolarité, puis nous la reverse selon le calendrier convenu ensemble.",
  },
  {
    question: "Faut-il un compte pour chaque élève ?",
    answer:
      "Non. Un élève peut exister dans Schoolvi sans accès de connexion, ce qui est fréquent pour les plus jeunes. Les parents suivent tous leurs enfants depuis leur numéro WhatsApp, sans application à installer.",
  },
] as const;

export const FINAL_CTA = {
  title: "Ce trimestre, respirez",
  description:
    "Moins d'impayés, des parents impliqués, des enseignants libérés de la paperasse. En 30 minutes, voyons ensemble ce que Schoolvi change pour votre école.",
  cta: "Demander une démo",
};

export const FOOTER = {
  tagline: "Logiciel de gestion scolaire pour les écoles, collèges et lycées du Togo.",
  location: "Lomé, Togo",
  columns: [
    {
      title: "Produit",
      links: [
        { label: "Élèves & classes", href: "/#modules" },
        { label: "Présences", href: "/#modules" },
        { label: "Examens & bulletins", href: "/#modules" },
        { label: "Frais de scolarité", href: "/#modules" },
        { label: "Emploi du temps", href: "/#modules" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "Tarifs", href: "/#tarifs" },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact", href: "/#contact" },
        { label: "Se connecter", href: `${APP_URL}/login` },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Conditions générales d'utilisation", href: "/cgu" },
        { label: "Politique de confidentialité", href: "/confidentialite" },
      ],
    },
  ],
};
