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
  heroTitle: string;
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
    heroBadge: "N°1 des logiciels de gestion scolaire au Togo",
    heroTitle: "Le logiciel de gestion d'établissement scolaire de référence au Togo",
    heroSubtitle:
      "Conçu pour la réalité des écoles primaires, collèges et lycées de Lomé et des cinq régions togolaises : encaissez les frais via T-Money et Flooz, calculez vos bulletins automatiquement sans recopie de notes et prévenez les parents sur WhatsApp.",
    advantages: [
      {
        title: "Intégration T-Money & Flooz",
        description:
          "Les familles togolaises paient la scolarité en espèces ou directement par T-Money et Flooz. Schoolvi suit chaque versement en temps réel, émet un reçu numérique et met à jour la trésorerie de l'école.",
      },
      {
        title: "Bulletins 100% conformes au MEPST",
        description:
          "Calcul automatique des moyennes trimestrielles et annuelles selon les coefficients officiels togolais, classement des élèves et édition des bulletins en un clic sans aucune erreur manuelle.",
      },
      {
        title: "Relances des parents sur WhatsApp",
        description:
          "Au Togo, tout le monde est sur WhatsApp. Schoolvi alerte les parents dès la première absence non justifiée et envoie les rappels d'échéances de scolarité avec le solde exact.",
      },
      {
        title: "Gratuit pour l'établissement togolais",
        description:
          "L'école ne paie aucun frais d'abonnement ni d'installation. Seule une contribution minime de 1 000 FCFA par an et par élève est payée par les parents (moins de 100 FCFA par mois).",
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
    heroBadge: "Le logiciel de gestion scolaire n°1 au Bénin",
    heroTitle: "Le logiciel de gestion d'établissement scolaire n°1 au Bénin",
    heroSubtitle:
      "Pensé pour les complexes scolaires, collèges et lycées de Cotonou, Porto-Novo, Abomey-Calavi et Parakou : automatisez vos bulletins aux normes béninoises, encaissez via MTN MoMo et Moov Money, et éliminez les impayés.",
    advantages: [
      {
        title: "Paiements MTN MoMo & Moov Money Bénin",
        description:
          "Encaissez les frais de scolarité en toute transparence via les réseaux mobiles les plus utilisés au Bénin (MTN et Moov). Plus de risque de caisse ni de reçus papier perdus.",
      },
      {
        title: "Bulletins conformes aux normes MESTFP & MEMP",
        description:
          "Génération automatique des bulletins périodiques et récapitulatifs annuels avec coefficients officiels béninois, calcul des moyennes générales, rangs et appréciations des enseignants.",
      },
      {
        title: "Communication école-famille sur WhatsApp",
        description:
          "Au Bénin, tenez les parents informés en temps réel : alertes en cas de retard ou d'absence d'un élève, relances douces pour les échéances de scolarité, convocations et avis de l'administration.",
      },
      {
        title: "Zéro coût pour la direction de l'école",
        description:
          "Schoolvi est 100% gratuit pour l'établissement scolaire. Les parents s'acquittent d'une modeste contribution de 1 000 FCFA par élève et par an, prélevée par l'école lors de l'inscription.",
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
    heroBadge: "Le logiciel scolaire nouvelle génération en Côte d'Ivoire",
    heroTitle: "Le logiciel de gestion scolaire tout-en-un en Côte d'Ivoire",
    heroSubtitle:
      "Adapté aux groupes scolaires, collèges et lycées d'Abidjan, Bouaké, Yamoussoukro et San-Pédro : bulletins conformes aux exigences du MENA, paiements Wave / Orange Money / MTN MoMo, et suivi instantané des élèves sur WhatsApp.",
    advantages: [
      {
        title: "Intégration Wave, Orange Money & MTN MoMo",
        description:
          "Facilitez la vie des parents ivoiriens en leur permettant de régler la scolarité via Wave, Orange Money ou MTN Mobile Money. La trésorerie de votre école est mise à jour instantanément.",
      },
      {
        title: "Bulletins conformes aux directives MENA",
        description:
          "Édition rapide des bulletins de notes (trimestriels ou semestriels) avec coefficients officiels ivoiriens, calcul des moyennes pondérées, des rangs et des appréciations pour toutes les classes de la 6ème à la Terminale.",
      },
      {
        title: "Contrôle des présences et alertes WhatsApp",
        description:
          "Les professeurs font l'appel en un clic depuis leur smartphone en début de cours. Les parents à Abidjan ou en province reçoivent immédiatement un message WhatsApp en cas d'absence.",
      },
      {
        title: "Modèle gratuit pour l'établissement",
        description:
          "Aucun frais de licence ni d'hébergement pour l'école. Les parents contribuent à hauteur de 1 000 FCFA par élève et par an, collectés simplement lors des frais annexes d'inscription.",
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
    heroBadge: "La référence de la gestion scolaire au Sénégal",
    heroTitle: "Le logiciel de gestion scolaire moderne au Sénégal",
    heroSubtitle:
      "Pour les écoles primaires, collèges et lycées de Dakar, Thiès, Saint-Louis et Mbour : gérez les inscriptions, éditez les bulletins conformes aux inspections et encaissez la scolarité en toute sérénité via Wave et Orange Money.",
    advantages: [
      {
        title: "Compatibilité Wave & Orange Money Sénégal",
        description:
          "Simplifiez le recouvrement des mensualités grâce aux moyens de paiement préférés des familles sénégalaises : Wave et Orange Money, avec reçus automatiques et zéro litige.",
      },
      {
        title: "Bulletins semestriels conformes MEN",
        description:
          "Calcul automatique des moyennes par matière, coefficients officiels, rangs et édition des livrets scolaires conformes aux exigences des Inspections d'Académie (IA) et IEF.",
      },
      {
        title: "Communication WhatsApp en temps réel",
        description:
          "Prévenez instantanément les parents à chaque absence ou retard, partagez les convocations et envoyez les récapitulatifs de notes directement sur WhatsApp sans coût SMS.",
      },
      {
        title: "100% gratuit pour l'école sénégalaise",
        description:
          "Sans abonnement mensuel ni engagement pour l'établissement scolaire. Une contribution de 1 000 FCFA par élève et par an est prise en charge par les parents.",
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
    heroBadge: "Le logiciel scolaire de référence au Burkina Faso",
    heroTitle: "Le logiciel de gestion scolaire tout-en-un au Burkina Faso",
    heroSubtitle:
      "Conçu pour les écoles primaires, collèges et lycées de Ouagadougou, Bobo-Dioulasso et de toutes les régions burkinabè : gestion des effectifs, bulletins automatiques conformes MENAPLN, encaissements Orange Money & Moov Money, alertes WhatsApp.",
    advantages: [
      {
        title: "Intégration Orange Money & Moov Money Burkina",
        description:
          "Suivez les encaissements de scolarité en temps réel via Orange Money et Moov Money Burkina. Reçus numériques immédiats et zéro retard de trésorerie.",
      },
      {
        title: "Bulletins 100% conformes aux normes MENAPLN",
        description:
          "Calcul automatique des moyennes trimestrielles et annuelles selon les coefficients officiels du Burkina Faso, livrets scolaires et procès-verbaux de fin d'année.",
      },
      {
        title: "Alertes WhatsApp immédiates pour les parents",
        description:
          "Prévenez les parents burkinabè dès le premier retard ou absence non justifiée. Envoyez les convocations et les bilans de notes directement sur WhatsApp.",
      },
      {
        title: "Zéro coût pour l'établissement scolaire",
        description:
          "Schoolvi est 100% gratuit et illimité pour l'école au Burkina Faso. Une modeste participation de 1 000 FCFA par élève et par an est prise en charge par les familles.",
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
    heroBadge: "La référence de la gestion scolaire au Mali",
    heroTitle: "Le logiciel de gestion d'établissement scolaire n°1 au Mali",
    heroSubtitle:
      "Adapté aux groupes scolaires, collèges et lycées de Bamako (Rive droite & gauche), Sikasso, Ségou et Kayes : gérez les inscriptions, éditez les bulletins conformes aux Académies d'Enseignement et suivez la scolarité par Orange Money et Moov Money.",
    advantages: [
      {
        title: "Orange Money Mali, Moov Money & Wave",
        description:
          "Facilitez le paiement des frais de scolarité des familles maliennes grâce aux réseaux mobiles populaires. Suivi en temps réel et reçus numériques automatiques.",
      },
      {
        title: "Bulletins conformes aux Académies d'Enseignement (AE)",
        description:
          "Édition automatique des relevés et bulletins de notes périodiques avec respect rigoureux des coefficients et formats exigés par le Ministère de l'Éducation Nationale du Mali.",
      },
      {
        title: "Vie scolaire et communication WhatsApp",
        description:
          "Suivi des présences en temps réel, signalement des retards et absences par message WhatsApp direct aux parents à Bamako et dans les régions.",
      },
      {
        title: "100% gratuit pour l'école malienne",
        description:
          "Aucun abonnement logiciel pour l'établissement. Une contribution de 1 000 FCFA par élève et par an est versée par les parents lors de la scolarité.",
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
    heroBadge: "Le logiciel scolaire nouvelle génération en Guinée",
    heroTitle: "Le logiciel de gestion d'établissement scolaire leader en Guinée",
    heroSubtitle:
      "Pour les complexes scolaires, collèges et lycées de Conakry (Kaloum, Dixinn, Matam, Ratoma, Matoto), Kankan, Kindia et Labé : bulletins conformes aux directives du MEPU-A, gestion des frais et alertes WhatsApp aux familles.",
    advantages: [
      {
        title: "Paiements Orange Money & MTN MoMo Guinée",
        description:
          "Chaque versement des familles, en espèces, par Orange Money ou par MTN, est enregistré avec son reçu. La direction voit à tout moment qui a payé et qui est en retard.",
      },
      {
        title: "Bulletins conformes aux normes MEPU-A",
        description:
          "Calcul automatique des moyennes trimestrielles et annuelles selon les coefficients officiels guinéens, classements de fin de période et appréciations pédagogiques.",
      },
      {
        title: "Parents alertés en direct sur WhatsApp",
        description:
          "Les parents à Conakry et en province sont informés des absences dès le début du cours, des résultats scolaires et des échéances de scolarité directement sur WhatsApp.",
      },
      {
        title: "Gratuit pour les établissements guinéens",
        description:
          "Zéro frais de licence pour l'établissement. Une contribution modique par élève et par an est prise en charge par les parents lors de l'inscription.",
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
    heroBadge: "La référence de la gestion scolaire au Niger",
    heroTitle: "Le logiciel de gestion scolaire tout-en-un au Niger",
    heroSubtitle:
      "Conçu pour les complexes scolaires, collèges et lycées de Niamey, Zinder, Maradi et Tahoua : automatisez vos bulletins aux normes du Niger, suivez les encaissements Airtel Money & Moov Money, et informez les familles sur WhatsApp.",
    advantages: [
      {
        title: "Airtel Money, Moov Money & Zamani Cash",
        description:
          "Permettez aux parents de régler les frais de scolarité en espèces ou via leur compte Mobile Money nigérien. Reçus instantanés et trésorerie claire.",
      },
      {
        title: "Bulletins conformes aux programmes officiels du Niger",
        description:
          "Génération automatique des bulletins périodiques et annuels avec coefficients nigériens, calcul des moyennes et rangs sans risque d'erreur de calcul.",
      },
      {
        title: "Suivi des absences sur WhatsApp",
        description:
          "Prévenez immédiatement les familles dès qu'une absence est constatée en classe pour lutter efficacement contre le décrochage scolaire.",
      },
      {
        title: "Zéro coût pour la direction de l'école",
        description:
          "Schoolvi est 100% gratuit pour l'établissement scolaire nigérien. Les parents versent 1 000 FCFA par élève et par an, soit moins de 100 FCFA par mois.",
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
    heroBadge: "Le logiciel scolaire moderne au Cameroun",
    heroTitle: "Le logiciel de gestion d'établissement scolaire de référence au Cameroun",
    heroSubtitle:
      "Pour les collèges, lycées et groupes scolaires de Douala, Yaoundé, Bafoussam et des dix régions camerounaises : bulletins conformes aux exigences MINESEC, encaissement Orange Money et MTN MoMo, zéro litige financier.",
    advantages: [
      {
        title: "Intégration Orange Money & MTN MoMo Cameroun",
        description:
          "Encaissez les frais de scolarité via les deux opérateurs majeurs au Cameroun (Orange et MTN). Trésorerie en temps réel et reçus certifiés.",
      },
      {
        title: "Bulletins conformes aux normes MINESEC",
        description:
          "Calcul automatique des séquences, trimestres et moyennes annuelles selon les coefficients et compétences officielles camerounaises.",
      },
      {
        title: "Communication WhatsApp avec les parents",
        description:
          "Alertez les familles camerounaises dès la première heure d'absence, envoyez les convocations et facilitez le suivi régulier du travail scolaire.",
      },
      {
        title: "100% gratuit pour l'école camerounaise",
        description:
          "Aucun abonnement logiciel pour l'établissement. Une contribution modique de 1 000 FCFA par élève et par an est versée par les parents.",
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
