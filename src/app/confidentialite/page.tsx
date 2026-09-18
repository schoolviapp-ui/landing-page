import type { Metadata } from "next";

import { LegalPage } from "@/components/landing/legal-page";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description:
    "Comment Schoolvi collecte, utilise et protege les donnees personnelles des etablissements, du personnel, des eleves et des parents, conformement a la loi togolaise n. 2019-014.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialite" updatedAt="18 septembre 2026">
      <p>
        La presente politique decrit comment <strong>Schoolvi</strong> (ci-apres &laquo; nous &raquo;) collecte,
        utilise, conserve et protege les donnees a caractere personnel dans le cadre du site {SITE_URL} et de la
        plateforme de gestion scolaire Schoolvi (ci-apres &laquo; le Service &raquo;).
      </p>
      <p>
        Nous appliquons la <strong>loi togolaise n. 2019-014 du 29 octobre 2019</strong> relative a la protection des
        donnees a caractere personnel, sous le controle de l&apos;Instance de Protection des Donnees a Caractere
        Personnel (IPDCP), ainsi que les bonnes pratiques internationales en la matiere.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>[Raison sociale de la societe editrice de Schoolvi]</strong>,
        [forme juridique], immatriculee au RCCM sous le numero [numero], dont le siege est situe a [adresse
        complete], Lome, Togo. Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        Pour les donnees des eleves, des parents et du personnel saisies dans le Service, chaque
        <strong> etablissement scolaire</strong> abonne est responsable du traitement de ses propres donnees ;
        Schoolvi agit alors en qualite de sous-traitant, pour le compte et selon les instructions de
        l&apos;etablissement.
      </p>

      <h2>2. Donnees collectees</h2>
      <h3>2.1 Sur le site vitrine</h3>
      <ul>
        <li>Donnees de contact transmises volontairement lors d&apos;une demande de demonstration ou par email : nom,
          prenom, fonction, nom de l&apos;etablissement, email, telephone.</li>
        <li>Donnees techniques de navigation strictement necessaires au fonctionnement du site (adresse IP,
          type de navigateur, pages consultees), traitees par notre hebergeur a des fins de securite.</li>
      </ul>
      <h3>2.2 Sur la plateforme Schoolvi</h3>
      <ul>
        <li><strong>Comptes utilisateurs</strong> (direction, enseignants, personnel administratif, parents) :
          identite, email, telephone, role et etablissement de rattachement, journal de connexion.</li>
        <li><strong>Eleves</strong> : identite, date de naissance, sexe, classe, matricule, contacts des parents ou
          tuteurs, informations medicales utiles a la vie scolaire (allergies, contact d&apos;urgence), presences,
          notes, bulletins, situation des frais de scolarite, reclamations et suggestions.</li>
        <li><strong>Etablissement</strong> : coordonnees, classes, matieres, emploi du temps, paiements et
          encaissements.</li>
      </ul>
      <p>
        Les donnees relatives aux <strong>eleves mineurs</strong> sont saisies par l&apos;etablissement dans le cadre de
        sa mission educative. L&apos;etablissement s&apos;engage a informer les parents ou tuteurs de l&apos;utilisation
        de Schoolvi et a recueillir leur consentement lorsque la loi l&apos;exige.
      </p>

      <h2>3. Finalites et bases legales</h2>
      <ul>
        <li>Fournir le Service : gestion des eleves, presences, notes, bulletins, emploi du temps, frais de
          scolarite, communication avec les familles (execution du contrat).</li>
        <li>Creer et securiser les comptes, prevenir les acces non autorises (execution du contrat et interet
          legitime).</li>
        <li>Facturer l&apos;abonnement et tenir notre comptabilite (obligation legale).</li>
        <li>Repondre aux demandes de demonstration et de support (consentement et interet legitime).</li>
        <li>Ameliorer le Service a partir de statistiques d&apos;usage agregees et anonymisees (interet legitime).</li>
      </ul>
      <p>
        Les fonctionnalites d&apos;<strong>assistant IA</strong> traitent les donnees de l&apos;etablissement uniquement
        pour repondre aux questions de ses utilisateurs autorises. Elles ne sont pas utilisees pour entrainer des
        modeles tiers.
      </p>

      <h2>4. Destinataires et sous-traitants</h2>
      <p>
        Les donnees sont accessibles au personnel habilite de Schoolvi et, au sein de chaque etablissement, aux
        seuls utilisateurs autorises selon leur role (un enseignant ne voit que ses classes, un parent ne voit que
        ses enfants). Nous faisons appel a des prestataires techniques pour l&apos;hebergement, l&apos;envoi d&apos;emails
        et la messagerie (par exemple WhatsApp pour les relances), lies par des engagements de confidentialite et
        de securite.
      </p>
      <p>
        Certains prestataires peuvent heberger les donnees en dehors du Togo. Dans ce cas, nous nous assurons
        que le transfert est encadre par des garanties appropriees conformement a la loi n. 2019-014 et, le cas
        echeant, que les formalites aupres de l&apos;IPDCP sont accomplies.
      </p>
      <p>Nous ne vendons jamais de donnees personnelles a des tiers.</p>

      <h2>5. Duree de conservation</h2>
      <ul>
        <li>Donnees des eleves et de la vie scolaire : pendant toute la duree de l&apos;abonnement de
          l&apos;etablissement, puis suppression ou restitution dans un delai de 90 jours apres la fin du contrat,
          sauf obligation legale de conservation.</li>
        <li>Donnees de facturation : 10 ans conformement aux obligations comptables.</li>
        <li>Demandes de demonstration et de contact : 24 mois apres le dernier echange.</li>
        <li>Journaux techniques de securite : 12 mois.</li>
      </ul>

      <h2>6. Securite</h2>
      <p>
        Nous mettons en oeuvre des mesures techniques et organisationnelles adaptees : chiffrement des echanges
        (HTTPS), chiffrement des mots de passe, isolation stricte des donnees de chaque etablissement au niveau
        de la base de donnees, controle d&apos;acces par role, sauvegardes regulieres et journalisation des acces.
        En cas de violation de donnees susceptible de porter atteinte aux personnes concernees, nous en informons
        les etablissements concernes et l&apos;IPDCP dans les delais legaux.
      </p>

      <h2>7. Vos droits</h2>
      <p>
        Conformement a la loi n. 2019-014, toute personne dispose d&apos;un droit d&apos;acces, de rectification,
        d&apos;effacement, d&apos;opposition, de limitation du traitement et de portabilite de ses donnees, ainsi que
        du droit de definir des directives relatives au sort de ses donnees apres son deces.
      </p>
      <p>
        Les parents et eleves exercent en priorite leurs droits aupres de leur etablissement, qui dispose des
        outils necessaires dans Schoolvi. Vous pouvez egalement nous ecrire a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Nous repondons dans un delai maximal d&apos;un mois.
        Vous pouvez introduire une reclamation aupres de l&apos;IPDCP si vous estimez que vos droits ne sont pas
        respectes.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Le site vitrine n&apos;utilise aucun cookie publicitaire ni traceur tiers. La plateforme Schoolvi utilise
        uniquement des cookies strictement necessaires a l&apos;authentification et a la securite de votre session,
        qui ne requierent pas de consentement.
      </p>

      <h2>9. Modifications</h2>
      <p>
        Nous pouvons faire evoluer cette politique pour tenir compte des changements legaux ou du Service. La
        version en vigueur est toujours publiee a l&apos;adresse {SITE_URL}/confidentialite, avec sa date de mise a
        jour. En cas de changement important, les etablissements abonnes sont informes par email.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pour toute question relative a la protection des donnees :{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou par courrier a l&apos;adresse du siege indiquee
        a l&apos;article 1.
      </p>
    </LegalPage>
  );
}
