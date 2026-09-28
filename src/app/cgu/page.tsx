import type { Metadata } from "next";

import { LegalPage } from "@/components/landing/legal-page";
import { PRICING } from "@/content/site";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation de Schoolvi, logiciel de gestion scolaire pour les établissements du Togo : service gratuit pour l'établissement, contribution des familles de 1 000 FCFA par élève et par an collectée par l'école, obligations et responsabilités.",
  alternates: { canonical: "/cgu" },
  robots: { index: true, follow: true },
};

const fmt = new Intl.NumberFormat("fr-FR");

export default function TermsPage() {
  return (
    <LegalPage title="Conditions générales d'utilisation" updatedAt="28 septembre 2026">
      <p>
        Les présentes conditions générales d&apos;utilisation (ci-après &laquo; CGU &raquo;) régissent l&apos;accès et
        l&apos;utilisation du site {SITE_URL} et de la plateforme de gestion scolaire <strong>Schoolvi</strong> (ci-après
        &laquo; le Service &raquo;), éditée par <strong>[Raison sociale de la société éditrice]</strong>, [forme
        juridique] immatriculée au RCCM sous le numéro [numéro], dont le siège est situé à [adresse complète],
        Lomé, Togo (ci-après &laquo; Schoolvi &raquo; ou &laquo; nous &raquo;).
      </p>
      <p>
        Toute utilisation du Service implique l&apos;acceptation pleine et entière des présentes CGU par
        l&apos;établissement utilisateur (ci-après &laquo; l&apos;Établissement &raquo;) et par chaque utilisateur.
      </p>

      <h2>1. Objet du Service</h2>
      <p>
        Schoolvi est un logiciel en ligne (SaaS) permettant aux écoles, collèges, lycées et universités de gérer
        leur vie scolaire : élèves et classes, présences, notes, examens et bulletins, emploi du temps, frais de
        scolarité et encaissements, personnel, réclamations et suggestions des familles, messagerie WhatsApp avec
        les parents, ainsi qu&apos;un assistant IA. Un même compte peut gérer plusieurs établissements, chacun
        restant isolé des autres.
      </p>

      <h2>2. Adhésion et comptes</h2>
      <p>
        L&apos;adhésion au Service est faite par un représentant habilité de l&apos;Établissement (fondateur, directeur ou
        personne mandatée). L&apos;Établissement crée ensuite les comptes de ses utilisateurs (direction,
        enseignants, personnel) et leur attribue des rôles qui déterminent les données accessibles. Les parents
        accèdent aux informations de leurs enfants par WhatsApp, depuis le numéro enregistré par l&apos;Établissement.
      </p>
      <p>
        Chaque utilisateur est responsable de la confidentialité de ses identifiants et de toute activité
        réalisée depuis son compte. Toute utilisation suspecte doit nous être signalée sans délai à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>3. Gratuité pour l&apos;Établissement et contribution des familles</h2>
      <p>
        Le Service est <strong>gratuit pour l&apos;Établissement</strong> : aucun abonnement ni frais
        d&apos;installation, des comptes illimités pour la direction, les enseignants et le personnel
        administratif, et l&apos;ensemble des modules inclus.
      </p>
      <p>
        En contrepartie, une contribution de{" "}
        <strong>
          {fmt.format(PRICING.pricePerStudentPerYear)} {PRICING.currency} par élève et par année scolaire
        </strong>{" "}
        est due pour chaque élève inscrit dans le Service. Elle est payée par les parents ou tuteurs et collectée
        par l&apos;Établissement pour le compte de Schoolvi, par exemple avec les frais de scolarité.
      </p>
      <ul>
        <li>La contribution est calculée sur l&apos;effectif d&apos;élèves inscrits dans le Service pour l&apos;année
          scolaire en cours. Les élèves inscrits en cours d&apos;année sont comptés au même tarif.</li>
        <li>L&apos;Établissement reverse à Schoolvi les contributions collectées selon le calendrier convenu entre
          les parties, par virement bancaire ou en espèces contre reçu.</li>
        <li>Les montants s&apos;entendent hors taxes éventuellement applicables selon la réglementation togolaise.</li>
        <li>En cas de non-reversement 30 jours après l&apos;échéance convenue et après relance, Schoolvi peut
          suspendre l&apos;accès au Service jusqu&apos;à régularisation, sans suppression des données.</li>
      </ul>
      <p>
        Toute modification du montant de la contribution est communiquée à l&apos;Établissement au moins 60 jours
        avant la rentrée et ne s&apos;applique qu&apos;à partir de l&apos;année scolaire suivante.
      </p>

      <h2>4. Durée et résiliation</h2>
      <p>
        L&apos;adhésion est conclue pour une année scolaire et se renouvelle à chaque rentrée sauf résiliation
        par l&apos;Établissement, notifiée par email au moins 30 jours avant la fin de l&apos;année scolaire en cours.
        Schoolvi peut résilier l&apos;adhésion en cas de manquement grave aux présentes CGU non corrigé dans un
        délai de 15 jours après notification.
      </p>
      <p>
        À la fin du contrat, l&apos;Établissement peut exporter ses données pendant 90 jours ; passé ce délai, elles
        sont supprimées conformément à notre politique de confidentialité.
      </p>

      <h2>5. Obligations de l&apos;Établissement</h2>
      <ul>
        <li>Utiliser le Service dans le cadre exclusif de sa mission éducative et administrative, dans le respect
          des lois togolaises en vigueur.</li>
        <li>Saisir des informations exactes et les tenir à jour.</li>
        <li>Informer les parents, tuteurs et membres du personnel de l&apos;utilisation de Schoolvi et de la
          contribution des familles, et recueillir les consentements requis, en particulier pour les données des
          élèves mineurs.</li>
        <li>Collecter la contribution des familles et la reverser à Schoolvi dans les conditions de
          l&apos;article 3.</li>
        <li>Attribuer les rôles avec discernement et retirer l&apos;accès des utilisateurs qui quittent
          l&apos;Établissement.</li>
        <li>Ne pas tenter d&apos;accéder aux données d&apos;autres établissements, de contourner les mesures de
          sécurité ou de perturber le fonctionnement du Service.</li>
      </ul>

      <h2>6. Obligations de Schoolvi</h2>
      <ul>
        <li>Fournir le Service avec diligence et mettre en œuvre les moyens raisonnables pour en assurer la
          disponibilité, la sécurité et la sauvegarde des données.</li>
        <li>Informer l&apos;Établissement des interruptions planifiées pour maintenance, dans la mesure du possible
          en dehors des heures de cours.</li>
        <li>Assurer un support par email et WhatsApp les jours ouvrés.</li>
        <li>Traiter les données conformément à la loi togolaise n° 2019-014 et à notre{" "}
          <a href="/confidentialite">politique de confidentialité</a>.</li>
      </ul>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        Le Service, sa marque, son interface et son code restent la propriété exclusive de Schoolvi. L&apos;adhésion
        confère à l&apos;Établissement un droit d&apos;utilisation personnel, non exclusif et non cessible, pour la
        durée du contrat. Les données saisies par l&apos;Établissement restent sa propriété.
      </p>

      <h2>8. Responsabilité</h2>
      <p>
        Schoolvi est tenu à une obligation de moyens. Notre responsabilité ne saurait être engagée en cas
        d&apos;utilisation non conforme du Service, d&apos;erreurs dans les données saisies par les utilisateurs, de
        défaillance du réseau internet ou des équipements de l&apos;Établissement, ou de force majeure. En toute
        hypothèse, notre responsabilité est limitée au montant des contributions reversées à Schoolvi au titre de
        l&apos;année scolaire en cours.
      </p>
      <p>
        Les réponses de l&apos;assistant IA sont fournies à titre d&apos;aide et doivent être vérifiées par
        l&apos;utilisateur avant toute décision, notamment pour les notes, bulletins et paiements.
      </p>

      <h2>9. Évolution du Service et des CGU</h2>
      <p>
        Schoolvi peut faire évoluer le Service (ajout ou amélioration de fonctionnalités) et les présentes CGU.
        La version en vigueur est publiée à l&apos;adresse {SITE_URL}/cgu. Les modifications substantielles sont
        notifiées par email à l&apos;Établissement au moins 30 jours avant leur entrée en vigueur.
      </p>

      <h2>10. Droit applicable et litiges</h2>
      <p>
        Les présentes CGU sont soumises au droit togolais. En cas de différend, les parties s&apos;efforcent de
        trouver une solution amiable dans un délai de 30 jours. À défaut, le litige est porté devant les
        juridictions compétentes de Lomé, Togo.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question sur les présentes CGU : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
