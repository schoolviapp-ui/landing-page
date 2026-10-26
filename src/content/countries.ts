export type CountrySeo = {
  slug: string;
  name: string;
  /** « au Togo », « en Guinée » : la forme qui suit « les écoles ». */
  inName: string;
  /** « du Togo », « de Guinée ». */
  ofName: string;
  region: "Afrique de l'Ouest" | "Afrique centrale";
  /** Code ISO 4217 de la monnaie locale (XOF, XAF, GNF). */
  currency: string;
  officialName: string;
  flag: string;
  code: string;
  capital: string;
  mainCities: string[];
  ministry: string;
  mobileMoney: string[];
  seoTitle: string;
  seoDescription: string;
  metaKeywords: string[];
  heroBadge: string;
  heroSubtitle: string;
  advantages: {
    title: string;
    description: string;
  }[];
  localFaqs: {
    question: string;
    answer: string;
  }[];
};

export const COUNTRIES: CountrySeo[] = [
  {
    slug: "togo",
    name: "Togo",
    inName: "au Togo",
    ofName: "du Togo",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "République Togolaise",
    flag: "🇹🇬",
    code: "TG",
    capital: "Lomé",
    mainCities: ["Lomé", "Kara", "Sokodé", "Kpalimé", "Atakpamé", "Dapaong", "Tsévié"],
    ministry: "Ministère des Enseignements Primaire, Secondaire et Technique (MEPST)",
    mobileMoney: ["T-Money (Togocom)", "Flooz (Moov Africa Togo)", "Espèces", "Virement"],
    seoTitle: "Logiciel de gestion scolaire au Togo · Schoolvi (Lomé & Régions)",
    seoDescription:
      "Schoolvi est le logiciel de gestion d'établissement scolaire de référence au Togo. Zéro impayé avec T-Money & Flooz, bulletins automatiques conformes MEPST, alertes WhatsApp et assistant IA. Gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Togo",
      "logiciel de gestion d'établissement scolaire Togo",
      "logiciel école Togo",
      "logiciel gestion scolaire Lomé",
      "logiciel collège lycée Togo",
      "bulletins scolaires Togo MEPST",
      "frais de scolarité T-Money Flooz",
      "recouvrement scolarité Togo",
      "gestion élèves Togo",
      "Schoolvi Togo",
    ],
    heroBadge: "N°1 de la gestion scolaire au Togo",
    heroSubtitle:
      "Frais encaissés en espèces, T-Money ou Flooz, bulletins sans recopie, parents prévenus sur WhatsApp. De Lomé à Dapaong.",
    advantages: [
      {
        title: "T-Money et Flooz",
        description: "Chaque versement est enregistré avec son reçu. La caisse est toujours à jour.",
      },
      {
        title: "Bulletins conformes au MEPST",
        description: "Moyennes, rangs et bulletins calculés avec les coefficients officiels. Sans recopie, sans erreur.",
      },
      {
        title: "Parents prévenus sur WhatsApp",
        description: "Une absence, une échéance : le parent reçoit le message aussitôt, avec le montant exact.",
      },
      {
        title: "Gratuit pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi est-il adapté aux écoles privées et laïques du Togo ?",
        answer:
          "Oui, absolument. Schoolvi équipe aussi bien les écoles primaires que les collèges, lycées d'enseignement général et technique de Lomé (Golfe, Agoè-Nyivé) et des régions Maritime, des Plateaux, Centrale, de la Kara et des Savanes.",
      },
      {
        question: "Comment gérer les paiements par T-Money et Flooz avec Schoolvi ?",
        answer:
          "Schoolvi enregistre chaque paiement effectué en caisse, par virement bancaire ou par Mobile Money (T-Money / Flooz). Dès l'enregistrement, un reçu est délivré et le compte élève est instantanément soldé.",
      },
      {
        question: "Les bulletins respectent-ils les grilles de notation togolaises ?",
        answer:
          "Oui, les matières, coefficients et grilles de notation appliqués sont strictement conformes aux programmes officiels du Ministère des Enseignements Primaire, Secondaire et Technique du Togo.",
      },
    ],
  },
  {
    slug: "benin",
    name: "Bénin",
    inName: "au Bénin",
    ofName: "du Bénin",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "République du Bénin",
    flag: "🇧🇯",
    code: "BJ",
    capital: "Porto-Novo (Capitale) · Cotonou (Économique)",
    mainCities: ["Cotonou", "Porto-Novo", "Abomey-Calavi", "Parakou", "Bohicon", "Djougou", "Ouidah"],
    ministry: "Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle (MESTFP) & MEMP",
    mobileMoney: ["MTN Mobile Money Bénin", "Moov Money Bénin", "Espèces", "Virement"],
    seoTitle: "Logiciel de gestion scolaire au Bénin · Schoolvi (Cotonou, Parakou)",
    seoDescription:
      "Schoolvi est le logiciel de gestion d'établissement scolaire leader au Bénin (Cotonou, Porto-Novo, Parakou...). Gestion des élèves, bulletins conformes MESTFP, frais de scolarité via MTN & Moov Money, suivi WhatsApp. 100% gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Bénin",
      "logiciel de gestion d'établissement scolaire Bénin",
      "logiciel école Bénin",
      "logiciel école Cotonou",
      "gestion scolaire Porto-Novo",
      "bulletins scolaires Bénin MESTFP",
      "frais de scolarité MTN MoMo Moov Bénin",
      "gestion élèves Bénin",
      "Schoolvi Bénin",
    ],
    heroBadge: "N°1 de la gestion scolaire au Bénin",
    heroSubtitle:
      "Frais suivis via MTN MoMo et Moov Money, bulletins aux normes béninoises, parents prévenus sur WhatsApp. De Cotonou à Parakou.",
    advantages: [
      {
        title: "MTN MoMo et Moov Money",
        description: "Chaque versement est enregistré avec son reçu. Fini les reçus papier perdus.",
      },
      {
        title: "Bulletins aux normes MESTFP",
        description: "Moyennes, rangs et appréciations calculés avec les coefficients officiels béninois.",
      },
      {
        title: "Familles informées sur WhatsApp",
        description: "Absences, retards, échéances et avis de l'école arrivent directement chez les parents.",
      },
      {
        title: "Zéro coût pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi prend-il en compte les séries des lycées au Bénin ?",
        answer:
          "Oui, Schoolvi gère parfaitement les séries générales (A1, A2, B, C, D) et techniques en vigueur dans les lycées et collèges du Bénin, avec leurs coefficients respectifs et leurs épreuves spécifiques.",
      },
      {
        question: "Comment Schoolvi aide-t-il à réduire les impayés scolaires au Bénin ?",
        answer:
          "Grâce au tableau de bord en temps réel, l'administration voit immédiatement qui a payé et qui est en retard. Des messages automatiques courtois sont envoyés sur WhatsApp aux parents avec le solde exact.",
      },
      {
        question: "Peut-on utiliser Schoolvi pour un complexe scolaire primaire + collège + lycée ?",
        answer:
          "Oui, un même groupe scolaire ou fondateur peut administrer plusieurs cycles ou plusieurs campus séparément avec un tableau de bord unifié.",
      },
    ],
  },
  {
    slug: "cote-divoire",
    name: "Côte d'Ivoire",
    inName: "en Côte d'Ivoire",
    ofName: "de Côte d'Ivoire",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "République de Côte d'Ivoire",
    flag: "🇨🇮",
    code: "CI",
    capital: "Yamoussoukro (Politique) · Abidjan (Économique)",
    mainCities: ["Abidjan", "Bouaké", "Yamoussoukro", "San-Pédro", "Korhogo", "Daloa", "Man"],
    ministry: "Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA)",
    mobileMoney: ["Wave Côte d'Ivoire", "Orange Money CI", "MTN MoMo CI", "Moov Money CI", "Espèces"],
    seoTitle: "Logiciel de gestion scolaire en Côte d'Ivoire · Schoolvi (Abidjan, Bouaké)",
    seoDescription:
      "Le logiciel de gestion d'établissement scolaire moderne en Côte d'Ivoire. Bulletins trimestriels et semestriels conformes MENA, encaissements Wave, Orange Money et MTN MoMo, suivi des présences sur WhatsApp. Gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Côte d'Ivoire",
      "logiciel de gestion d'établissement scolaire Côte d'Ivoire",
      "logiciel école Abidjan",
      "logiciel collège lycée Côte d'Ivoire",
      "bulletins scolaires MENA Côte d'Ivoire",
      "frais de scolarité Wave Orange Money MTN CI",
      "gestion élèves Abidjan DREN",
      "Schoolvi Côte d'Ivoire",
    ],
    heroBadge: "Nouvelle génération en Côte d'Ivoire",
    heroSubtitle:
      "Paiements Wave, Orange Money et MTN MoMo, bulletins conformes au MENA, parents prévenus sur WhatsApp. D'Abidjan à Korhogo.",
    advantages: [
      {
        title: "Wave, Orange Money, MTN",
        description: "Les parents paient comme ils en ont l'habitude. La trésorerie se met à jour à chaque versement.",
      },
      {
        title: "Bulletins conformes au MENA",
        description: "De la 6ème à la Terminale, moyennes et rangs calculés pour vous, par trimestre ou par semestre.",
      },
      {
        title: "L'appel en un clic",
        description: "Le professeur fait l'appel sur son téléphone. Le parent est prévenu sur WhatsApp dans la minute.",
      },
      {
        title: "Gratuit pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi est-il compatible avec le découpage des DREN en Côte d'Ivoire ?",
        answer:
          "Oui, Schoolvi permet de structurer les effectifs, classes et examens conformément aux standards des DREN (Directions Régionales de l'Éducation Nationale) d'Abidjan 1 à 4 et de l'intérieur du pays.",
      },
      {
        question: "Les paiements Wave sont-ils supportés pour la scolarité ?",
        answer:
          "Oui, le personnel comptable de l'école peut renseigner et réconcilier les transferts Wave, Orange Money et MTN MoMo avec délivrance automatique de reçus numériques conformes.",
      },
      {
        question: "Les enseignants peuvent-ils saisir leurs notes sur téléphone portable ?",
        answer:
          "Absolument. L'interface de saisie des notes est ultra-fluide sur smartphone Android et iPhone, sans avoir besoin d'installer une application lourde.",
      },
    ],
  },
  {
    slug: "senegal",
    name: "Sénégal",
    inName: "au Sénégal",
    ofName: "du Sénégal",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "République du Sénégal",
    flag: "🇸🇳",
    code: "SN",
    capital: "Dakar",
    mainCities: ["Dakar", "Thiès", "Saint-Louis", "Mbour", "Ziguinchor", "Touba", "Kaolack"],
    ministry: "Ministère de l'Éducation Nationale du Sénégal (MEN)",
    mobileMoney: ["Wave Sénégal", "Orange Money Sénégal", "Free Money", "Espèces"],
    seoTitle: "Logiciel de gestion scolaire au Sénégal · Schoolvi (Dakar, Thiès)",
    seoDescription:
      "Schoolvi, le logiciel de gestion d'établissement scolaire adapté au Sénégal (Dakar, Thiès, Saint-Louis). Bulletins scolaires conformes MEN, frais de scolarité via Wave et Orange Money, alertes WhatsApp. Gratuit pour l'établissement.",
    metaKeywords: [
      "logiciel de gestion scolaire Sénégal",
      "logiciel de gestion d'établissement scolaire Sénégal",
      "logiciel école Dakar",
      "logiciel collège lycée Sénégal",
      "bulletins scolaires Sénégal MEN",
      "frais de scolarité Wave Orange Money Sénégal",
      "gestion élèves Dakar IA IEF",
      "Schoolvi Sénégal",
    ],
    heroBadge: "La référence au Sénégal",
    heroSubtitle:
      "Scolarité réglée par Wave ou Orange Money, bulletins conformes, parents prévenus sur WhatsApp. De Dakar à Saint-Louis.",
    advantages: [
      {
        title: "Wave et Orange Money",
        description: "Les mensualités se règlent comme les familles le préfèrent, avec un reçu à chaque paiement.",
      },
      {
        title: "Bulletins semestriels conformes",
        description: "Moyennes, coefficients et rangs conformes aux exigences des IA et des IEF.",
      },
      {
        title: "WhatsApp, sans coût SMS",
        description: "Absences, retards, convocations et notes partent directement sur WhatsApp.",
      },
      {
        title: "Gratuit pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi convient-il aux écoles privées de Dakar et des régions ?",
        answer:
          "Oui, Schoolvi est idéal pour les écoles privées laïques et confessionnelles, de la maternelle au lycée, à Dakar (Almadies, Plateau, Parcelles, Guédiawaye) comme à Thiès, Saint-Louis ou Mbour.",
      },
      {
        question: "Comment se déroule la formation des enseignants et secrétaires ?",
        answer:
          "La prise en main se fait en moins de 30 minutes : l'interface est épurée, claire et intuitive. Une assistance dédiée par WhatsApp et visio accompagne votre équipe à chaque étape.",
      },
      {
        question: "Les données des élèves sont-elles sécurisées et confidentielles ?",
        answer:
          "Chaque établissement dispose d'un espace isolé et chiffré. Vos données restent votre propriété exclusive et sont protégées selon les normes les plus strictes.",
      },
    ],
  },
  {
    slug: "burkina-faso",
    name: "Burkina Faso",
    inName: "au Burkina Faso",
    ofName: "du Burkina Faso",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "Burkina Faso",
    flag: "🇧🇫",
    code: "BF",
    capital: "Ouagadougou",
    mainCities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora", "Fada N'Gourma", "Dédougou"],
    ministry: "Ministère de l'Éducation Nationale, de l'Alphabétisation et de la Promotion des Langues Nationales (MENAPLN)",
    mobileMoney: ["Orange Money Burkina", "Moov Money Burkina (Moov Africa)", "Coris Money", "Espèces"],
    seoTitle: "Logiciel de gestion scolaire au Burkina Faso · Schoolvi (Ouaga, Bobo)",
    seoDescription:
      "Schoolvi est le logiciel de gestion d'établissement scolaire leader au Burkina Faso (Ouagadougou, Bobo-Dioulasso...). Bulletins trimestriels conformes MENAPLN, encaissement Orange Money & Moov Money, alertes WhatsApp. Gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Burkina Faso",
      "logiciel de gestion d'établissement scolaire Burkina Faso",
      "logiciel école Ouagadougou",
      "logiciel collège lycée Bobo-Dioulasso",
      "bulletins scolaires MENAPLN Burkina",
      "frais de scolarité Orange Money Moov Burkina",
      "gestion élèves Burkina Faso",
      "Schoolvi Burkina Faso",
    ],
    heroBadge: "La référence au Burkina Faso",
    heroSubtitle:
      "Paiements Orange Money et Moov Money, bulletins conformes au MENAPLN, parents prévenus sur WhatsApp. De Ouagadougou à Bobo-Dioulasso.",
    advantages: [
      {
        title: "Orange Money et Moov Money",
        description: "Chaque encaissement est suivi en temps réel, avec un reçu numérique immédiat.",
      },
      {
        title: "Bulletins conformes au MENAPLN",
        description: "Moyennes, livrets et procès-verbaux de fin d'année calculés avec les coefficients officiels.",
      },
      {
        title: "Parents alertés sur WhatsApp",
        description: "Dès le premier retard ou la première absence, le parent est prévenu.",
      },
      {
        title: "Zéro coût pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi fonctionne-t-il avec les connexions internet du Burkina Faso ?",
        answer:
          "Oui, l'application est extrêmement légère et optimisée pour fonctionner parfaitement même avec une connexion 3G ou 4G mobile standard à Ouagadougou, Bobo-Dioulasso ou dans les provinces.",
      },
      {
        question: "Les bulletins sont-ils adaptés aux collèges et lycées d'enseignement général et technique ?",
        answer:
          "Absolument. Schoolvi prend en charge les filières générales et techniques avec leurs grilles de coefficients et matières conformes aux directives du MENAPLN.",
      },
      {
        question: "Comment débuter avec Schoolvi au Burkina Faso ?",
        answer:
          "Il suffit de réserver une démonstration en ligne de 30 minutes. Votre établissement est configuré et prêt à l'emploi le jour même.",
      },
    ],
  },
  {
    slug: "mali",
    name: "Mali",
    inName: "au Mali",
    ofName: "du Mali",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "République du Mali",
    flag: "🇲🇱",
    code: "ML",
    capital: "Bamako",
    mainCities: ["Bamako", "Sikasso", "Ségou", "Mopti", "Kayes", "Koulikoro", "Gao"],
    ministry: "Ministère de l'Éducation Nationale du Mali (MEN)",
    mobileMoney: ["Orange Money Mali", "Moov Money Mali (Malitel)", "Wave Mali", "Espèces"],
    seoTitle: "Logiciel de gestion scolaire au Mali · Schoolvi (Bamako, Sikasso, Ségou)",
    seoDescription:
      "Schoolvi, le logiciel de gestion d'établissement scolaire moderne au Mali. Dossiers élèves, bulletins conformes aux programmes maliens, encaissement Orange Money et Moov Money, suivi WhatsApp. 100% gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Mali",
      "logiciel de gestion d'établissement scolaire Mali",
      "logiciel école Bamako",
      "bulletins scolaires Mali MEN",
      "frais de scolarité Orange Money Mali",
      "gestion élèves Mali Académie Enseignement",
      "Schoolvi Mali",
    ],
    heroBadge: "La référence au Mali",
    heroSubtitle:
      "Paiements Orange Money et Moov Money, bulletins conformes, parents prévenus sur WhatsApp. De Bamako à Kayes.",
    advantages: [
      {
        title: "Orange Money, Moov, Wave",
        description: "Les familles paient par Mobile Money, et chaque versement a son reçu.",
      },
      {
        title: "Bulletins conformes aux AE",
        description: "Relevés et bulletins aux coefficients et formats exigés par le ministère.",
      },
      {
        title: "Vie scolaire sur WhatsApp",
        description: "Retards et absences signalés aux parents, à Bamako comme dans les régions.",
      },
      {
        title: "Gratuit pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi est-il compatible avec les centres d'animation pédagogique (CAP) et AE au Mali ?",
        answer:
          "Oui, la structure des classes, matières et PV de délibération est pensée pour répondre aux attentes des CAP et Académies d'Enseignement du Mali.",
      },
      {
        question: "Peut-on imprimer les bulletins scolaires sans connexion ?",
        answer:
          "Une fois générés, les bulletins sont téléchargeables en PDF pour être imprimés à tout moment en haute qualité sur n'importe quelle imprimante.",
      },
      {
        question: "Comment sécuriser les données financières de l'école ?",
        answer:
          "Schoolvi offre des profils d'accès stricts : seuls les administrateurs et comptables autorisés accèdent aux données financières et aux états de caisse.",
      },
    ],
  },
  {
    slug: "guinee",
    name: "Guinée",
    inName: "en Guinée",
    ofName: "de Guinée",
    region: "Afrique de l'Ouest",
    currency: "GNF",
    officialName: "République de Guinée",
    flag: "🇬🇳",
    code: "GN",
    capital: "Conakry",
    mainCities: ["Conakry", "Kankan", "Nzérékoré", "Kindia", "Labé", "Mamou", "Boké"],
    ministry: "Ministère de l'Enseignement Pré-Universitaire et de l'Alphabétisation (MEPU-A)",
    mobileMoney: ["Orange Money Guinée", "MTN Mobile Money Guinée", "Espèces", "Virement"],
    seoTitle: "Logiciel de gestion scolaire en Guinée · Schoolvi (Conakry, Kankan)",
    seoDescription:
      "Le logiciel de gestion d'établissement scolaire n°1 en Guinée (Conakry, Kankan, Kindia...). Gestion des effectifs, bulletins scolaires conformes MEPU-A, encaissement Orange Money et MTN MoMo, suivi WhatsApp. Gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Guinée",
      "logiciel de gestion d'établissement scolaire Guinée",
      "logiciel école Conakry",
      "bulletins scolaires Guinée MEPU-A",
      "frais de scolarité Orange Money Guinée",
      "Schoolvi Guinée",
      "gestion élèves Guinée DPE DCE",
    ],
    heroBadge: "Le leader en Guinée",
    heroSubtitle:
      "Bulletins conformes au MEPU-A, frais suivis jusqu'au dernier versement, parents prévenus sur WhatsApp. De Conakry à Labé.",
    advantages: [
      {
        title: "Orange Money et MTN",
        description: "Chaque versement est enregistré avec son reçu. Vous voyez qui a payé et qui est en retard.",
      },
      {
        title: "Bulletins conformes au MEPU-A",
        description: "Moyennes, classements et appréciations calculés avec les coefficients officiels guinéens.",
      },
      {
        title: "Parents alertés sur WhatsApp",
        description: "Absences, résultats et échéances arrivent chez les parents, à Conakry comme en province.",
      },
      {
        title: "Gratuit pour l'école",
        description: "Aucune licence à payer. Une petite contribution annuelle par élève est versée par les parents.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi fonctionne-t-il avec le franc guinéen (GNF) ?",
        answer:
          "Aujourd'hui, Schoolvi affiche les montants en FCFA. Si votre école facture en francs guinéens, écrivez-nous sur WhatsApp pour en parler avant le démarrage.",
      },
      {
        question: "Les bulletins correspondent-ils aux exigences des DPE et DCE ?",
        answer:
          "Oui, les matières, coefficients et livrets sont configurés pour correspondre aux grilles officielles des Directions Préfectorales et Communales de l'Éducation en Guinée.",
      },
      {
        question: "Les professeurs peuvent-ils saisir leurs notes sur smartphone ?",
        answer:
          "Absolument. Chaque enseignant dispose de son accès sécurisé sur son téléphone pour faire l'appel et enregistrer les notes d'évaluation en quelques minutes.",
      },
    ],
  },
  {
    slug: "niger",
    name: "Niger",
    inName: "au Niger",
    ofName: "du Niger",
    region: "Afrique de l'Ouest",
    currency: "XOF",
    officialName: "République du Niger",
    flag: "🇳🇪",
    code: "NE",
    capital: "Niamey",
    mainCities: ["Niamey", "Zinder", "Maradi", "Tahoua", "Agadez", "Dosso", "Diffa"],
    ministry: "Ministère de l'Éducation Nationale, de l'Alphabétisation et de l'Enseignement Professionnel (MENA/EP)",
    mobileMoney: ["Airtel Money Niger", "Moov Money Niger (Al Izza)", "Zamani Cash", "Espèces"],
    seoTitle: "Logiciel de gestion scolaire au Niger · Schoolvi (Niamey, Zinder, Maradi)",
    seoDescription:
      "Schoolvi simplifie la gestion de votre école, collège ou lycée au Niger. Bulletins automatiques conformes aux programmes nigériens, suivi des frais de scolarité (Airtel Money, Moov Money), relances WhatsApp. Gratuit pour l'établissement.",
    metaKeywords: [
      "logiciel de gestion scolaire Niger",
      "logiciel de gestion d'établissement scolaire Niger",
      "logiciel école Niamey",
      "bulletins scolaires Niger MENA",
      "frais de scolarité Airtel Money Niger",
      "Schoolvi Niger",
      "gestion élèves Niger DREN",
    ],
    heroBadge: "La référence au Niger",
    heroSubtitle:
      "Paiements Airtel Money et Moov Money, bulletins conformes, parents prévenus sur WhatsApp. De Niamey à Zinder.",
    advantages: [
      {
        title: "Airtel, Moov, Zamani Cash",
        description: "Les parents paient en espèces ou par Mobile Money. Reçu immédiat, trésorerie claire.",
      },
      {
        title: "Bulletins conformes",
        description: "Moyennes et rangs calculés avec les coefficients officiels du Niger, sans erreur.",
      },
      {
        title: "Absences signalées sur WhatsApp",
        description: "La famille est prévenue dès l'absence constatée : le meilleur rempart contre le décrochage.",
      },
      {
        title: "Zéro coût pour l'école",
        description: "Les parents versent 1 000 FCFA par élève et par an, moins de 100 FCFA par mois.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi est-il adapté aux écoles privées de Niamey et des régions ?",
        answer:
          "Oui, Schoolvi est utilisé dans les écoles primaires, collèges et lycées d'enseignement général et technique de Niamey et des chefs-lieux régionaux.",
      },
      {
        question: "Comment fonctionne l'assistant IA de Schoolvi au Niger ?",
        answer:
          "L'assistant IA répond en français à vos demandes écrites ou vocales : état des impayés, statistiques de réussite, préparation des PV de conseils de classe.",
      },
      {
        question: "L'application fonctionne-t-elle sur les réseaux mobiles du Niger ?",
        answer:
          "Oui, l'architecture est optimisée pour une faible consommation de bande passante et fonctionne rapidement sur les réseaux 3G/4G Airtel et Moov.",
      },
    ],
  },
  {
    slug: "cameroun",
    name: "Cameroun",
    inName: "au Cameroun",
    ofName: "du Cameroun",
    region: "Afrique centrale",
    currency: "XAF",
    officialName: "République du Cameroun",
    flag: "🇨🇲",
    code: "CM",
    capital: "Yaoundé (Politique) · Douala (Économique)",
    mainCities: ["Douala", "Yaoundé", "Bafoussam", "Garoua", "Bamenda", "Kribi", "Maroua"],
    ministry: "Ministère des Enseignements Secondaires (MINESEC) & MINEDUB",
    mobileMoney: ["Orange Money Cameroun", "MTN Mobile Money Cameroun", "Espèces", "Virement"],
    seoTitle: "Logiciel de gestion scolaire au Cameroun · Schoolvi (Douala, Yaoundé)",
    seoDescription:
      "Le logiciel de gestion d'établissement scolaire moderne au Cameroun. Relevés et bulletins conformes MINESEC, encaissement Orange Money et MTN MoMo, suivi des absences sur WhatsApp. 100% gratuit pour l'école.",
    metaKeywords: [
      "logiciel de gestion scolaire Cameroun",
      "logiciel de gestion d'établissement scolaire Cameroun",
      "logiciel école Douala",
      "logiciel collège lycée Yaoundé",
      "bulletins scolaires MINESEC Cameroun",
      "frais de scolarité Orange MTN MoMo Cameroun",
      "Schoolvi Cameroun",
      "gestion élèves Cameroun Délégué Régional",
    ],
    heroBadge: "Le logiciel moderne du Cameroun",
    heroSubtitle:
      "Bulletins par séquence conformes au MINESEC, paiements Orange Money et MTN MoMo, parents prévenus sur WhatsApp. De Douala à Garoua.",
    advantages: [
      {
        title: "Orange Money et MTN MoMo",
        description: "Les frais se règlent sur les deux grands réseaux du pays, avec un reçu à chaque versement.",
      },
      {
        title: "Bulletins conformes au MINESEC",
        description: "Séquences, trimestres et moyennes annuelles calculés avec les coefficients officiels.",
      },
      {
        title: "Parents prévenus sur WhatsApp",
        description: "Dès la première heure d'absence, avec les convocations et le suivi du travail.",
      },
      {
        title: "Gratuit pour l'école",
        description: "Aucun abonnement. Les parents versent 1 000 FCFA par élève et par an.",
      },
    ],
    localFaqs: [
      {
        question: "Schoolvi gère-t-il le système séquentiel en vigueur au Cameroun ?",
        answer:
          "Oui, Schoolvi s'adapte au découpage séquentiel et trimestriel standard du MINESEC pour le sous-système francophone (séquences 1 à 6).",
      },
      {
        question: "Combien de temps prend la saisie des notes par les enseignants ?",
        answer:
          "Chaque professeur saisit les notes de sa matière directement sur smartphone ou ordinateur en quelques minutes, sans recopie manuelle.",
      },
      {
        question: "Comment organiser une démo pour notre groupe scolaire au Cameroun ?",
        answer:
          "Cliquez sur « Demander une démo » : vous écrivez directement à notre équipe sur WhatsApp et nous fixons ensemble un créneau de 30 minutes.",
      },
    ],
  },
];

export function getCountryBySlug(slug: string): CountrySeo | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}
