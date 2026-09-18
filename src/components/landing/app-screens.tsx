import {
  BellIcon,
  BookOpenIcon,
  CalendarClockIcon,
  ClipboardCheckIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LayersIcon,
  NotebookPenIcon,
  SearchIcon,
  SendIcon,
  SparklesIcon,
  WalletIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import type { ModuleTabId } from "@/content/site";
import { cn } from "@/lib/utils";

type NavId = ModuleTabId | "classes" | "attendance" | "exams";

const NAV: { id: NavId; icon: typeof LayoutDashboardIcon }[] = [
  { id: "assistant", icon: SparklesIcon },
  { id: "dashboard", icon: LayoutDashboardIcon },
  { id: "classes", icon: BookOpenIcon },
  { id: "students", icon: GraduationCapIcon },
  { id: "attendance", icon: ClipboardCheckIcon },
  { id: "timetable", icon: CalendarClockIcon },
  { id: "exams", icon: NotebookPenIcon },
  { id: "fees", icon: WalletIcon },
];

export function AppFrame({
  active,
  title,
  subtitle,
  action,
  children,
}: {
  active: NavId;
  title: string;
  subtitle: string;
  action: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-[1100px] overflow-hidden rounded-[22px] md:w-full bg-stone-50 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09),0_6px_6px_-2px_rgba(0,0,0,0.06)]">
      <aside className="flex w-14 shrink-0 flex-col items-center gap-1 border-r border-stone-300 bg-stone-100 py-4">
        <span className="mb-3 grid size-7 place-items-center rounded-md bg-brand text-white">
          <LayersIcon className="size-4" />
        </span>
        {NAV.map(({ id, icon: Icon }) => (
          <span
            key={id}
            className={cn(
              "grid size-8 place-items-center rounded-md text-stone-400",
              id === active && "bg-stone-200 text-ink",
            )}
          >
            <Icon className="size-3.5" />
          </span>
        ))}
      </aside>
      <div className="min-w-0 flex-1 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-display text-[22px] font-medium tracking-tight">{title}</h4>
            <p className="text-stone-500">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 items-center gap-2 rounded-full border border-stone-300 bg-white px-3 text-stone-400">
              <SearchIcon className="size-3" /> Rechercher
            </span>
            <span className="grid size-8 place-items-center rounded-full border border-stone-300 bg-white">
              <BellIcon className="size-3.5" />
            </span>
            <span className="h-8 rounded-full bg-brand px-3 leading-8 text-white">{action}</span>
          </div>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

const Card = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn("rounded-xl border border-stone-300 bg-white p-3", className)}>{children}</div>
);

const Pill = ({ tone, children }: { tone: "ok" | "warn" | "bad" | "info"; children: ReactNode }) => (
  <span
    className={cn(
      "rounded-full px-2 py-0.5 text-[10px]",
      tone === "ok" && "bg-brand-light text-[#1e40af]",
      tone === "warn" && "bg-[#ffe9b8] text-[#8a5a00]",
      tone === "bad" && "bg-[#ffd6d6] text-[#a12b2b]",
      tone === "info" && "bg-stone-100 text-stone-600",
    )}
  >
    {children}
  </span>
);

const STUDENTS = [
  { name: "Lea Martin", cls: "6eme A", status: "ok", label: "Present" },
  { name: "Tom Bernard", cls: "5eme B", status: "ok", label: "Present" },
  { name: "Awa Diallo", cls: "6eme A", status: "bad", label: "Absent" },
  { name: "Kofi Mensah", cls: "4eme C", status: "ok", label: "Present" },
  { name: "Nadia Traore", cls: "3eme A", status: "warn", label: "Retard" },
] as const;

export function DashboardScreen() {
  return (
    <AppFrame active="dashboard" title="Tableau de bord" subtitle="Lycee Demo - Jeudi 18 septembre" action="Faire l'appel">
      <div className="grid grid-cols-4 gap-3">
        {[
          ["Eleves", "1 248", "+32 ce mois"],
          ["Presence du jour", "96,4 %", "43 absents"],
          ["Fonds collectes", "18,4 M", "FCFA - 74 %"],
          ["Reclamations", "7", "3 en attente"],
        ].map(([label, value, sub]) => (
          <Card key={label}>
            <p className="text-stone-500">{label}</p>
            <p className="font-display mt-1 text-[20px] font-medium tracking-tight">{value}</p>
            <p className="text-[10px] text-stone-400">{sub}</p>
          </Card>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1.4fr_1fr] gap-3">
        <Card>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Presences du jour</p>
            <Pill tone="info">6eme A</Pill>
          </div>
          <table className="mt-2 w-full">
            <tbody>
              {STUDENTS.map((s) => (
                <tr key={s.name} className="border-t border-stone-200">
                  <td className="py-1.5 font-medium">{s.name}</td>
                  <td className="text-stone-400">{s.cls}</td>
                  <td className="text-right">
                    <Pill tone={s.status}>{s.label}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card>
          <p className="font-semibold">Fonds collectes</p>
          <div className="mt-3 flex h-24 items-end gap-1.5">
            {[35, 55, 40, 70, 62, 85, 78, 92].map((h, i) => (
              <span key={i} className={cn("flex-1 rounded-t-md", i === 7 ? "bg-brand" : "bg-stone-200")} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-stone-400">
            <span>Fev</span>
            <span>Sep</span>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

export function StudentsScreen() {
  return (
    <AppFrame active="students" title="Eleves" subtitle="1 248 eleves inscrits - annee 2026-2027" action="+ Inscrire un eleve">
      <div className="flex gap-2">
        {["Tous", "6eme", "5eme", "4eme", "3eme", "2nde", "1ere", "Tle"].map((f, i) => (
          <span key={f} className={cn("rounded-full px-2.5 py-1", i === 0 ? "bg-stone-200 font-medium" : "text-stone-500")}>
            {f}
          </span>
        ))}
      </div>
      <table className="mt-3 w-full rounded-xl border border-stone-300 bg-white">
        <thead>
          <tr className="text-left text-[10px] text-stone-400">
            <th className="px-3 py-2 font-medium">Matricule</th>
            <th className="py-2 font-medium">Nom</th>
            <th className="py-2 font-medium">Classe</th>
            <th className="py-2 font-medium">Parent</th>
            <th className="py-2 font-medium">Presence</th>
            <th className="py-2 pr-3 text-right font-medium">Frais</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["LD-2026-0142", "Lea Martin", "6eme A", "Mme Martin", "98 %", "ok", "Solde"],
            ["LD-2026-0143", "Tom Bernard", "5eme B", "M. Bernard", "94 %", "warn", "Partiel"],
            ["LD-2026-0144", "Awa Diallo", "6eme A", "Mme Diallo", "91 %", "ok", "Solde"],
            ["LD-2026-0145", "Kofi Mensah", "4eme C", "M. Mensah", "97 %", "bad", "En retard"],
            ["LD-2026-0146", "Nadia Traore", "3eme A", "Mme Traore", "99 %", "ok", "Solde"],
            ["LD-2026-0147", "Yann Kouassi", "2nde C", "M. Kouassi", "95 %", "ok", "Solde"],
          ].map((r) => (
            <tr key={r[0]} className="border-t border-stone-200">
              <td className="px-3 py-2 text-stone-400">{r[0]}</td>
              <td className="py-2 font-medium">{r[1]}</td>
              <td className="py-2">{r[2]}</td>
              <td className="py-2 text-stone-500">{r[3]}</td>
              <td className="py-2">{r[4]}</td>
              <td className="py-2 pr-3 text-right">
                <Pill tone={r[5] as "ok" | "warn" | "bad"}>{r[6]}</Pill>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppFrame>
  );
}

export function FeesScreen() {
  return (
    <AppFrame active="fees" title="Frais de scolarite" subtitle="Trimestre 1 - 18,4 M FCFA collectes sur 24,9 M" action="Encaisser un paiement">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Collecte", "18 420 000", "74 % de l'attendu"],
          ["Reste a percevoir", "6 480 000", "212 eleves"],
          ["Encaisse aujourd'hui", "640 000", "11 paiements"],
        ].map(([label, value, sub]) => (
          <Card key={label}>
            <p className="text-stone-500">{label}</p>
            <p className="font-display mt-1 text-[20px] font-medium tracking-tight">
              {value} <span className="text-[11px] font-normal text-stone-400">FCFA</span>
            </p>
            <p className="text-[10px] text-stone-400">{sub}</p>
          </Card>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1.5fr_1fr] gap-3">
        <Card>
          <p className="font-semibold">Derniers paiements</p>
          <table className="mt-2 w-full">
            <tbody>
              {[
                ["Lea Martin", "6eme A", "Scolarite T1", "60 000", "Especes"],
                ["Kofi Mensah", "4eme C", "Cantine", "15 000", "Virement"],
                ["Awa Diallo", "6eme A", "Scolarite T1", "60 000", "Especes"],
                ["Yann Kouassi", "2nde C", "Scolarite T1", "75 000", "Mobile money"],
              ].map((r) => (
                <tr key={r[0] + r[2]} className="border-t border-stone-200">
                  <td className="py-1.5 font-medium">{r[0]}</td>
                  <td className="text-stone-400">{r[1]}</td>
                  <td>{r[2]}</td>
                  <td className="text-right font-semibold">{r[3]}</td>
                  <td className="pl-3 text-right">
                    <Pill tone="info">{r[4]}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card>
          <p className="font-semibold">Recu RC-2026-00412</p>
          <div className="mt-2 rounded-lg bg-stone-100 p-2.5">
            <p className="text-[10px] text-stone-400">Eleve</p>
            <p className="font-medium">Lea Martin - 6eme A</p>
          </div>
          <ul className="mt-2 divide-y divide-stone-200">
            {[
              ["Scolarite T1", "60 000"],
              ["Cantine", "15 000"],
            ].map(([l, v]) => (
              <li key={l} className="flex justify-between py-1.5">
                <span>{l}</span>
                <span className="font-semibold">{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-between rounded-lg bg-brand-light px-2.5 py-2 font-semibold text-[#1e40af]">
            <span>Total</span>
            <span>75 000 FCFA</span>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

export function ExamsScreen() {
  const subjects = ["Maths", "Francais", "Anglais", "SVT", "Hist-Geo"];
  const coef = [4, 3, 2, 2, 2];
  const rows: [string, ...number[]][] = [
    ["Lea Martin", 16, 13, 15, 14, 12],
    ["Tom Bernard", 11, 14, 12, 13, 15],
    ["Awa Diallo", 18, 15, 17, 16, 14],
    ["Kofi Mensah", 9, 12, 10, 11, 13],
    ["Nadia Traore", 14, 16, 13, 15, 17],
  ];
  const total = coef.reduce((a, c) => a + c, 0);
  return (
    <AppFrame active="exams" title="Examens & bulletins" subtitle="Trimestre 1 - 6eme A - saisie en cours" action="Generer les bulletins">
      <div className="flex gap-2">
        {["Composition T1", "Devoir 1", "Devoir 2"].map((f, i) => (
          <span key={f} className={cn("rounded-full px-2.5 py-1", i === 0 ? "bg-stone-200 font-medium" : "text-stone-500")}>
            {f}
          </span>
        ))}
      </div>
      <table className="mt-3 w-full rounded-xl border border-stone-300 bg-white">
        <thead>
          <tr className="text-left text-[10px] text-stone-400">
            <th className="px-3 py-2 font-medium">Eleve</th>
            {subjects.map((s, i) => (
              <th key={s} className="py-2 font-medium">
                {s} <span className="text-stone-300">x{coef[i]}</span>
              </th>
            ))}
            <th className="py-2 pr-3 text-right font-medium">Moyenne</th>
            <th className="py-2 pr-3 text-right font-medium">Rang</th>
          </tr>
        </thead>
        <tbody>
          {rows
            .map((r) => {
              const notes = r.slice(1) as number[];
              return { name: r[0], notes, avg: notes.reduce((a, n, i) => a + n * coef[i], 0) / total };
            })
            .map((r, _, arr) => (
              <tr key={r.name} className="border-t border-stone-200">
                <td className="px-3 py-2 font-medium">{r.name}</td>
                {r.notes.map((n, i) => (
                  <td key={i} className="py-2">
                    <span className={cn("inline-block w-10 rounded-md border px-1.5 py-0.5 text-center", i === 0 ? "border-brand bg-brand-light/50" : "border-stone-200")}>
                      {n}
                    </span>
                  </td>
                ))}
                <td className="py-2 pr-3 text-right font-semibold">{r.avg.toFixed(2).replace(".", ",")}</td>
                <td className="py-2 pr-3 text-right text-stone-500">
                  {[...arr].sort((a, b) => b.avg - a.avg).findIndex((x) => x.name === r.name) + 1}e
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </AppFrame>
  );
}

const DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const SLOTS = ["08:00", "10:00", "12:00", "14:00", "16:00"];
const TT: Record<string, [string, string, "a" | "b" | "c" | "d"][]> = {
  Lundi: [["Maths", "M. Diop", "a"], ["Francais", "Mme Sow", "b"], ["", "", "d"], ["SVT", "M. Ndiaye", "c"], ["Anglais", "Mme Fall", "a"]],
  Mardi: [["Francais", "Mme Sow", "b"], ["Maths", "M. Diop", "a"], ["", "", "d"], ["Hist-Geo", "M. Ba", "c"], ["", "", "d"]],
  Mercredi: [["Anglais", "Mme Fall", "a"], ["SVT", "M. Ndiaye", "c"], ["", "", "d"], ["", "", "d"], ["", "", "d"]],
  Jeudi: [["Maths", "M. Diop", "a"], ["Hist-Geo", "M. Ba", "c"], ["", "", "d"], ["Francais", "Mme Sow", "b"], ["EPS", "M. Sy", "a"]],
  Vendredi: [["SVT", "M. Ndiaye", "c"], ["Anglais", "Mme Fall", "a"], ["", "", "d"], ["Maths", "M. Diop", "a"], ["", "", "d"]],
};
const TONE = {
  a: "bg-brand-light text-[#1e40af]",
  b: "bg-[#fde7f3] text-[#9d174d]",
  c: "bg-[#e3f7e8] text-[#166534]",
  d: "bg-transparent",
};

export function TimetableScreen() {
  return (
    <AppFrame active="timetable" title="Emploi du temps" subtitle="6eme A - semaine du 14 septembre" action="+ Ajouter un creneau">
      <div className="flex items-center gap-2">
        {["6eme A", "6eme B", "5eme A"].map((f, i) => (
          <span key={f} className={cn("rounded-full px-2.5 py-1", i === 0 ? "bg-stone-200 font-medium" : "text-stone-500")}>
            {f}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-stone-500">
          <span className="size-2 rounded-full bg-[#ef4444]" /> 1 conflit detecte : M. Diop, jeudi 08:00
        </span>
      </div>
      <div className="mt-3 grid grid-cols-[56px_repeat(5,1fr)] gap-1.5 rounded-xl border border-stone-300 bg-white p-3">
        <span />
        {DAYS.map((d) => (
          <span key={d} className="text-center text-[10px] font-medium text-stone-500">
            {d}
          </span>
        ))}
        {SLOTS.map((slot, si) => (
          <div key={slot} className="contents">
            <span className="pt-1 text-[10px] text-stone-400">{slot}</span>
            {DAYS.map((d) => {
              const [subject, teacher, tone] = TT[d][si];
              const conflict = d === "Jeudi" && si === 0;
              return (
                <div
                  key={d + slot}
                  className={cn(
                    "h-11 rounded-lg px-2 py-1.5",
                    subject ? TONE[tone] : "border border-dashed border-stone-200",
                    conflict && "ring-2 ring-[#ef4444]",
                  )}
                >
                  {subject && (
                    <>
                      <p className="font-medium leading-tight">{subject}</p>
                      <p className="text-[10px] opacity-70">{teacher}</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

const CAPTURES = {
  dashboard: {
    src: "/screens/dashboard.webp",
    alt: "Tableau de bord Schoolvi : indicateurs eleves, enseignants, classes, reclamations et fonds collectes",
  },
  students: {
    src: "/screens/students.webp",
    alt: "Profil d'un eleve dans Schoolvi : moyenne du trimestre, rang, evolution et bulletin par matiere",
  },
  timetable: {
    src: "/screens/timetable.webp",
    alt: "Emploi du temps hebdomadaire d'une classe dans Schoolvi, par matiere, enseignant et salle",
  },
} as const;

function Capture({ id, priority = false }: { id: keyof typeof CAPTURES; priority?: boolean }) {
  const { src, alt } = CAPTURES[id];
  return (
    <Image
      src={src}
      alt={alt}
      width={2000}
      height={1146}
      priority={priority}
      className="h-auto w-[1100px] rounded-[22px] md:w-full shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09),0_6px_6px_-2px_rgba(0,0,0,0.06)]"
    />
  );
}

export function AssistantScreen() {
  return (
    <AppFrame active="assistant" title="Assistant IA" subtitle="Repond avec les donnees de votre etablissement" action="Nouvelle conversation">
      <div className="grid grid-cols-[1fr_260px] gap-3">
        <Card className="flex min-h-[300px] flex-col p-4">
          <div className="flex-1 space-y-3">
            <div className="flex justify-end">
              <p className="max-w-[70%] rounded-2xl rounded-br-md bg-brand px-3 py-2 text-white">
                Quels eleves de 6eme A ont plus de 3 absences ce mois-ci ?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#93c5fd] to-brand text-white">
                <SparklesIcon className="size-3.5" />
              </span>
              <div className="max-w-[80%] space-y-2 rounded-2xl rounded-tl-md bg-stone-100 px-3 py-2.5">
                <p>3 eleves de 6eme A depassent 3 absences en septembre :</p>
                <table className="w-full">
                  <tbody>
                    {[
                      ["Awa Diallo", "5 absences", "2 justifiees"],
                      ["Moussa Kone", "4 absences", "0 justifiee"],
                      ["Fatou Sarr", "4 absences", "4 justifiees"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t border-stone-200">
                        <td className="py-1 font-medium">{r[0]}</td>
                        <td className="py-1 text-stone-500">{r[1]}</td>
                        <td className="py-1 text-right text-stone-500">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Souhaitez-vous que je prevenne les parents de Moussa Kone ?</p>
                <div className="flex gap-1.5 pt-1">
                  <span className="rounded-full bg-brand px-2.5 py-1 text-[10px] text-white">Envoyer un SMS aux parents</span>
                  <span className="rounded-full border border-stone-300 bg-white px-2.5 py-1 text-[10px]">Voir le dossier</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-full border border-stone-300 bg-white py-1.5 pl-4 pr-1.5 text-stone-400">
            <span className="flex-1">Posez une question sur vos eleves, vos classes, vos paiements...</span>
            <span className="grid size-7 place-items-center rounded-full bg-brand text-white">
              <SendIcon className="size-3.5" />
            </span>
          </div>
        </Card>
        <div className="space-y-3">
          <Card>
            <p className="font-semibold">Suggestions</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Resume les reclamations en attente",
                "Quels parents n'ont pas paye le trimestre 1 ?",
                "Prepare le bulletin de Lea Martin",
                "Y a-t-il des conflits dans l'emploi du temps ?",
              ].map((q) => (
                <li key={q} className="rounded-lg border border-stone-200 px-2.5 py-1.5 text-stone-600">
                  {q}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-brand-light/50">
            <p className="font-semibold text-[#1e40af]">Ce que l&apos;assistant sait faire</p>
            <ul className="mt-1.5 space-y-1 text-[10px] text-[#1e40af]">
              <li>- Repondre a partir des donnees reelles de l&apos;ecole</li>
              <li>- Rediger avis, convocations et rappels</li>
              <li>- Preparer presences, notes et paiements</li>
            </ul>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

export const SCREENS: Record<ModuleTabId, () => ReactNode> = {
  dashboard: () => <Capture id="dashboard" priority />,
  students: () => <Capture id="students" />,
  fees: FeesScreen,
  assistant: AssistantScreen,
  timetable: () => <Capture id="timetable" />,
};
