import Image from "next/image";
import type { ReactNode } from "react";

import type { ModuleTabId } from "@/content/site";

type CaptureMeta = { src: string; alt: string; height?: number };

const CAPTURES: Record<ModuleTabId, CaptureMeta> = {
  dashboard: {
    src: "/screens/dashboard.webp",
    alt: "Tableau de bord Schoolvi : indicateurs eleves, enseignants, classes, reclamations et fonds collectes",
  },
  students: {
    src: "/screens/students.webp",
    alt: "Profil d'un eleve dans Schoolvi : moyenne du trimestre, rang, evolution et bulletin par matiere",
  },
  fees: {
    src: "/screens/fees.webp",
    alt: "Caisse et recouvrement dans Schoolvi : total recouvre, reste a recouvrer, situation des eleves et encaissement",
    height: 1142,
  },
  assistant: {
    src: "/screens/assistant.webp",
    alt: "Assistant IA de Schoolvi : posez une question, il repond avec les donnees de l'etablissement",
    height: 1142,
  },
  timetable: {
    src: "/screens/timetable.webp",
    alt: "Emploi du temps hebdomadaire d'une classe dans Schoolvi, par matiere, enseignant et salle",
  },
};

function Capture({ id, priority = false }: { id: ModuleTabId; priority?: boolean }) {
  const { src, alt, height = 1146 } = CAPTURES[id];
  return (
    <Image
      src={src}
      alt={alt}
      width={2000}
      height={height}
      priority={priority}
      className="h-auto w-full rounded-xl sm:rounded-[22px] shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09),0_6px_6px_-2px_rgba(0,0,0,0.06)]"
    />
  );
}

export const SCREENS: Record<ModuleTabId, () => ReactNode> = {
  dashboard: () => <Capture id="dashboard" priority />,
  students: () => <Capture id="students" />,
  fees: () => <Capture id="fees" />,
  assistant: () => <Capture id="assistant" />,
  timetable: () => <Capture id="timetable" />,
};
