import Image from "next/image";
import type { ReactNode } from "react";

import type { ModuleTabId } from "@/content/site";

type CaptureMeta = { src: string; alt: string; height?: number };

const CAPTURES: Record<ModuleTabId, CaptureMeta> = {
  dashboard: {
    src: "/screens/dashboard.webp",
    alt: "Schoolvi - Logiciel de gestion d'établissement scolaire : tableau de bord des indicateurs élèves, enseignants et trésorerie en Afrique de l'Ouest",
  },
  students: {
    src: "/screens/students.webp",
    alt: "Schoolvi - Gestion des élèves et bulletins scolaires : dossier scolaire, moyenne trimestrielle, rang et notes",
  },
  fees: {
    src: "/screens/fees.webp",
    alt: "Schoolvi - Recouvrement des frais de scolarité et Mobile Money : suivi des impayés, reçus numériques et trésorerie",
    height: 1142,
  },
  assistant: {
    src: "/screens/assistant.webp",
    alt: "Schoolvi - Assistant IA pour la direction d'école et l'administration des établissements scolaires",
    height: 1142,
  },
  timetable: {
    src: "/screens/timetable.webp",
    alt: "Schoolvi - Emploi du temps scolaire automatisé par classe, professeur et salle de cours",
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
