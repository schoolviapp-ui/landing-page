import type { Metadata } from "next";

import { LegalPage } from "@/components/landing/legal-page";
import { PRICING } from "@/content/site";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions generales d'utilisation",
  description:
    "Conditions generales d'utilisation de Schoolvi, logiciel de gestion scolaire pour les etablissements du Togo : abonnement, tarif de 1 000 FCFA par eleve et par an, obligations et responsabilites.",
  alternates: { canonical: "/cgu" },
  robots: { index: true, follow: true },
};

const fmt = new Intl.NumberFormat("fr-FR");

export default function TermsPage() {
  return (
    <LegalPage title="Conditions generales d'utilisation" updatedAt="18 septembre 2026">
      <p>
        Les presentes conditions generales d&apos;utilisation (ci-apres &laquo; CGU &raquo;) regissent l&apos;acces et
        l&apos;utilisation du site {SITE_URL} et de la plateforme de gestion scolaire <strong>Schoolvi</strong> (ci-apres
        &laquo; le Service &raquo;), editee par <strong>[Raison sociale de la societe editrice]</strong>, [forme
        juridique] immatriculee au RCCM sous le numero [numero], dont le siege est situe a [adresse complete],
        Lome, Togo (ci-apres &laquo; Schoolvi &raquo; ou &laquo; nous &raquo;).
      </p>
      <p>
        Toute utilisation du Service implique l&apos;acceptation pleine et entiere des presentes CGU par
        l&apos;etablissement abonne (ci-apres &laquo; l&apos;Etablissement &raquo;) et par chaque utilisateur.
      </p>

      <h2>1. Objet du Service</h2>
      <p>
        Schoolvi est un logiciel en ligne (SaaS) permettant aux ecoles, colleges, lycees et universites de gerer
        leur vie scolaire : eleves et classes, presences, notes, examens et bulletins, emploi du temps, frais de
        scolarite et encaissements, personnel, reclamations et suggestions des familles, ainsi qu&apos;un assistant
        IA. Un meme compte peut gerer plusieurs etablissements, chacun restant isole des autres.
      </p>

      <h2>2. Souscription et comptes</h2>
      <p>
        L&apos;abonnement est souscrit par un representant habilite de l&apos;Etablissement (fondateur, directeur ou
        personne mandatee). L&apos;Etablissement cree ensuite les comptes de ses utilisateurs (direction,
        enseignants, personnel, parents) et leur attribue des roles qui determinent les donnees accessibles.
      </p>
      <p>
        Chaque utilisateur est responsable de la confidentialite de ses identifiants et de toute activite
        realisee depuis son compte. Toute utilisation suspecte doit nous etre signalee sans delai a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>3. Tarif et paiement</h2>
      <p>
        Le Service est facture <strong>{fmt.format(PRICING.pricePerStudentPerYear)} {PRICING.currency} par eleve et
        par annee scolaire</strong>. Les comptes des enseignants et du personnel administratif sont illimites et
        inclus, de meme que l&apos;ensemble des modules et l&apos;acces des parents.
      </p>
      <ul>
        <li>Le montant annuel est calcule sur l&apos;effectif d&apos;eleves inscrits dans le Service pour l&apos;annee
          scolaire en cours. Les eleves inscrits en cours d&apos;annee sont factures au meme tarif.</li>
        <li>Le paiement s&apos;effectue par virement bancaire ou en especes contre recu, sur presentation d&apos;une
          facture. Aucune carte bancaire n&apos;est requise et aucun frais d&apos;installation n&apos;est facture.</li>
        <li>Les prix s&apos;entendent hors taxes eventuellement applicables selon la reglementation togolaise.</li>
        <li>En cas de non-paiement 30 jours apres l&apos;echeance et apres relance, Schoolvi peut suspendre
          l&apos;acces au Service jusqu&apos;a regularisation, sans suppression des donnees.</li>
      </ul>
      <p>
        Toute modification de tarif est communiquee a l&apos;Etablissement au moins 60 jours avant la date de
        renouvellement et ne s&apos;applique qu&apos;a partir de l&apos;annee scolaire suivante.
      </p>

      <h2>4. Duree et resiliation</h2>
      <p>
        L&apos;abonnement est conclu pour une annee scolaire et se renouvelle a chaque rentree sauf resiliation
        par l&apos;Etablissement, notifiee par email au moins 30 jours avant la fin de l&apos;annee scolaire en cours.
        Schoolvi peut resilier l&apos;abonnement en cas de manquement grave aux presentes CGU non corrige dans un
        delai de 15 jours apres notification.
      </p>
      <p>
        A la fin du contrat, l&apos;Etablissement peut exporter ses donnees pendant 90 jours ; passe ce delai, elles
        sont supprimees conformement a notre politique de confidentialite.
      </p>

      <h2>5. Obligations de l&apos;Etablissement</h2>
      <ul>
        <li>Utiliser le Service dans le cadre exclusif de sa mission educative et administrative, dans le respect
          des lois togolaises en vigueur.</li>
        <li>Saisir des informations exactes et les tenir a jour.</li>
        <li>Informer les parents, tuteurs et membres du personnel de l&apos;utilisation de Schoolvi et recueillir
          les consentements requis, en particulier pour les donnees des eleves mineurs.</li>
        <li>Attribuer les roles avec discernement et retirer l&apos;acces des utilisateurs qui quittent
          l&apos;Etablissement.</li>
        <li>Ne pas tenter d&apos;acceder aux donnees d&apos;autres etablissements, de contourner les mesures de
          securite ou de perturber le fonctionnement du Service.</li>
      </ul>

      <h2>6. Obligations de Schoolvi</h2>
      <ul>
        <li>Fournir le Service avec diligence et mettre en oeuvre les moyens raisonnables pour en assurer la
          disponibilite, la securite et la sauvegarde des donnees.</li>
        <li>Informer l&apos;Etablissement des interruptions planifiees pour maintenance, dans la mesure du possible
          en dehors des heures de cours.</li>
        <li>Assurer un support par email et WhatsApp les jours ouvres.</li>
        <li>Traiter les donnees conformement a la loi togolaise n. 2019-014 et a notre{" "}
          <a href="/confidentialite">politique de confidentialite</a>.</li>
      </ul>

      <h2>7. Propriete intellectuelle</h2>
      <p>
        Le Service, sa marque, son interface et son code restent la propriete exclusive de Schoolvi. L&apos;abonnement
        confere a l&apos;Etablissement un droit d&apos;utilisation personnel, non exclusif et non cessible, pour la
        duree du contrat. Les donnees saisies par l&apos;Etablissement restent sa propriete.
      </p>

      <h2>8. Responsabilite</h2>
      <p>
        Schoolvi est tenu a une obligation de moyens. Notre responsabilite ne saurait etre engagee en cas
        d&apos;utilisation non conforme du Service, d&apos;erreurs dans les donnees saisies par les utilisateurs, de
        defaillance du reseau internet ou des equipements de l&apos;Etablissement, ou de force majeure. En toute
        hypothese, notre responsabilite est limitee au montant de l&apos;abonnement verse au titre de l&apos;annee
        scolaire en cours.
      </p>
      <p>
        Les reponses de l&apos;assistant IA sont fournies a titre d&apos;aide et doivent etre verifiees par
        l&apos;utilisateur avant toute decision, notamment pour les notes, bulletins et paiements.
      </p>

      <h2>9. Evolution du Service et des CGU</h2>
      <p>
        Schoolvi peut faire evoluer le Service (ajout ou amelioration de fonctionnalites) et les presentes CGU.
        La version en vigueur est publiee a l&apos;adresse {SITE_URL}/cgu. Les modifications substantielles sont
        notifiees par email a l&apos;Etablissement au moins 30 jours avant leur entree en vigueur.
      </p>

      <h2>10. Droit applicable et litiges</h2>
      <p>
        Les presentes CGU sont soumises au droit togolais. En cas de differend, les parties s&apos;efforcent de
        trouver une solution amiable dans un delai de 30 jours. A defaut, le litige est porte devant les
        juridictions competentes de Lome, Togo.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question sur les presentes CGU : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
