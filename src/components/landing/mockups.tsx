import {
  BookOpenIcon,
  CalendarClockIcon,
  CheckIcon,
  ClipboardCheckIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LayersIcon,
  WalletIcon,
  XIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

function Sidebar() {
  return (
    <aside className="flex w-14 shrink-0 flex-col items-center gap-1 border-r border-stone-300 bg-stone-100 py-4">
      <span className="mb-3 grid size-7 place-items-center rounded-md bg-brand text-white">
        <LayersIcon className="size-4" />
      </span>
      {[LayoutDashboardIcon, BookOpenIcon, GraduationCapIcon, ClipboardCheckIcon, CalendarClockIcon, WalletIcon].map(
        (Icon, i) => (
          <span
            key={i}
            className={cn(
              "grid size-8 place-items-center rounded-md text-stone-400",
              i === 0 && "bg-stone-200 text-ink",
            )}
          >
            <Icon className="size-3.5" />
          </span>
        ),
      )}
    </aside>
  );
}

const STUDENTS = [
  { name: "Lea Martin", cls: "6eme A", status: "present" },
  { name: "Tom Bernard", cls: "5eme B", status: "present" },
  { name: "Awa Diallo", cls: "6eme A", status: "absent" },
  { name: "Kofi Mensah", cls: "4eme C", status: "present" },
  { name: "Nadia Traore", cls: "3eme A", status: "late" },
];

export function AttendanceMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-[300px] rounded-2xl bg-white p-4 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)]", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-[15px] font-medium">Appel - 6eme A</p>
          <p className="text-stone-500">Mathematiques - 08:00</p>
        </div>
        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-medium text-white">28 / 30</span>
      </div>
      <ul className="mt-3 divide-y divide-stone-200">
        {STUDENTS.slice(0, 4).map((s) => (
          <li key={s.name} className="flex items-center justify-between py-2">
            <span className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-full bg-stone-200 text-[9px] font-semibold">
                {s.name.split(" ").map((n) => n[0]).join("")}
              </span>
              {s.name}
            </span>
            <span className="flex gap-1">
              <span className={cn("grid size-6 place-items-center rounded-full", s.status === "present" ? "bg-brand text-white" : "bg-stone-100 text-stone-300")}>
                <CheckIcon className="size-3" strokeWidth={3} />
              </span>
              <span className={cn("grid size-6 place-items-center rounded-full", s.status === "absent" ? "bg-[#ffd6d6] text-[#a12b2b]" : "bg-stone-100 text-stone-300")}>
                <XIcon className="size-3" strokeWidth={3} />
              </span>
            </span>
          </li>
        ))}
      </ul>
      <button type="button" className="mt-3 h-8 w-full rounded-full bg-ink text-[11px] font-medium text-white">
        Valider l&apos;appel
      </button>
    </div>
  );
}

export function ParentMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-[260px] rounded-[26px] border-[6px] border-ink bg-white p-4 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)]", className)}>
      <p className="text-stone-500">Bonjour Mme Martin</p>
      <p className="font-display text-[17px] font-medium">Lea - 6eme A</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-stone-100 p-2.5">
          <p className="text-stone-500">Moyenne</p>
          <p className="font-display text-[18px] font-medium">14,8</p>
        </div>
        <div className="rounded-xl bg-brand-light p-2.5">
          <p className="text-stone-600">Presence</p>
          <p className="font-display text-[18px] font-medium">98 %</p>
        </div>
      </div>
      <p className="mt-3 font-semibold">Dernieres notes</p>
      <ul className="mt-1 space-y-1.5">
        {[
          ["Mathematiques", "16 / 20"],
          ["Francais", "13 / 20"],
          ["SVT", "15 / 20"],
        ].map(([s, n]) => (
          <li key={s} className="flex justify-between rounded-lg border border-stone-200 px-2.5 py-1.5">
            <span>{s}</span>
            <span className="font-semibold">{n}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-xl bg-stone-100 p-2.5">
        <p className="text-[10px] text-stone-500">Frais de scolarite</p>
        <div className="mt-1 h-1.5 rounded-full bg-stone-300">
          <div className="h-full w-2/3 rounded-full bg-ink" />
        </div>
        <p className="mt-1 text-[10px]">120 000 / 180 000 FCFA</p>
      </div>
    </div>
  );
}

export function MiniDashboardMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-[340px] rounded-2xl bg-white p-4 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)]", className)}>
      <div className="flex items-center justify-between">
        <p className="font-display text-[15px] font-medium">Aujourd&apos;hui</p>
        <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px]">College Demo</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["Eleves", "612"],
          ["Presents", "589"],
          ["Encaisse", "2,1 M"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl border border-stone-200 p-2.5">
            <p className="text-stone-500">{l}</p>
            <p className="font-display text-[18px] font-medium">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 font-semibold">Reclamations en attente</p>
      <ul className="mt-1 space-y-1.5">
        {[
          ["Erreur de note en anglais", "Parent - 4eme C"],
          ["Bus scolaire en retard", "Parent - 6eme A"],
          ["Recu de paiement manquant", "Parent - 3eme B"],
        ].map(([t, s]) => (
          <li key={t} className="flex items-center justify-between rounded-lg border border-stone-200 px-2.5 py-1.5">
            <div>
              <p className="font-medium">{t}</p>
              <p className="text-[10px] text-stone-400">{s}</p>
            </div>
            <span className="rounded-full bg-[#ffe9b8] px-2 py-0.5 text-[10px] text-[#8a5a00]">A traiter</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StudentsMockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex overflow-hidden rounded-[20px] bg-stone-50 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)]", className)}>
      <Sidebar />
      <div className="min-w-0 flex-1 p-5">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-[20px] font-medium">Eleves</h4>
          <span className="h-8 rounded-full bg-ink px-3 leading-8 text-white">+ Inscrire un eleve</span>
        </div>
        <div className="mt-3 flex gap-2">
          {["Tous", "6eme", "5eme", "4eme", "3eme"].map((f, i) => (
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
              <th className="py-2 font-medium">Presence</th>
              <th className="py-2 pr-3 text-right font-medium">Frais</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["LD-2026-0142", "Lea Martin", "6eme A", "98 %", "Solde"],
              ["LD-2026-0143", "Tom Bernard", "5eme B", "94 %", "Partiel"],
              ["LD-2026-0144", "Awa Diallo", "6eme A", "91 %", "Solde"],
              ["LD-2026-0145", "Kofi Mensah", "4eme C", "97 %", "En retard"],
              ["LD-2026-0146", "Nadia Traore", "3eme A", "99 %", "Solde"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-stone-200">
                <td className="px-3 py-2 text-stone-400">{r[0]}</td>
                <td className="py-2 font-medium">{r[1]}</td>
                <td className="py-2">{r[2]}</td>
                <td className="py-2">{r[3]}</td>
                <td className="py-2 pr-3 text-right">
                  <span className={cn("rounded-full px-2 py-0.5 text-[10px]", r[4] === "Solde" ? "bg-brand-light text-[#1e40af]" : r[4] === "Partiel" ? "bg-[#ffe9b8] text-[#8a5a00]" : "bg-[#ffd6d6] text-[#a12b2b]")}>
                    {r[4]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function GradesMockup({ className }: { className?: string }) {
  const subjects = ["Maths", "Francais", "Anglais", "SVT"];
  const rows = [
    ["Lea Martin", 16, 13, 15, 14],
    ["Tom Bernard", 11, 14, 12, 13],
    ["Awa Diallo", 18, 15, 17, 16],
    ["Kofi Mensah", 9, 12, 10, 11],
  ];
  return (
    <div className={cn("overflow-hidden rounded-[20px] bg-white p-5 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)]", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display text-[20px] font-medium">Saisie des notes</h4>
          <p className="text-stone-500">Trimestre 1 - 6eme A - Coefficients appliques</p>
        </div>
        <span className="h-8 rounded-full bg-brand px-3 leading-8 font-medium text-white">Generer les bulletins</span>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr className="text-left text-[10px] text-stone-400">
            <th className="py-2 font-medium">Eleve</th>
            {subjects.map((s, i) => (
              <th key={s} className="py-2 font-medium">
                {s} <span className="text-stone-300">x{[4, 3, 2, 2][i]}</span>
              </th>
            ))}
            <th className="py-2 text-right font-medium">Moyenne</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const notes = r.slice(1) as number[];
            const coef = [4, 3, 2, 2];
            const avg = notes.reduce((a, n, i) => a + n * coef[i], 0) / 11;
            return (
              <tr key={r[0] as string} className="border-t border-stone-200">
                <td className="py-2 font-medium">{r[0]}</td>
                {notes.map((n, i) => (
                  <td key={i} className="py-2">
                    <span className={cn("inline-block w-10 rounded-md border px-1.5 py-0.5 text-center", i === 0 ? "border-ink bg-stone-50" : "border-stone-200")}>
                      {n}
                    </span>
                  </td>
                ))}
                <td className="py-2 text-right font-semibold">{avg.toFixed(1).replace(".", ",")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function FeesMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-[360px] rounded-[20px] bg-white p-5 font-sans text-[11px] text-ink shadow-[0_20px_18px_-3px_rgba(0,0,0,0.09)]", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-display text-[20px] font-medium">Recu de paiement</h4>
          <p className="text-stone-500">N. RC-2026-00412</p>
        </div>
        <span className="grid size-7 place-items-center rounded-md bg-brand text-white">
          <LayersIcon className="size-4" />
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-stone-200 p-3">
        <div>
          <p className="text-[10px] text-stone-400">Eleve</p>
          <p className="font-medium">Lea Martin - 6eme A</p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400">Date</p>
          <p className="font-medium">18 septembre 2026</p>
        </div>
      </div>
      <table className="mt-3 w-full">
        <thead>
          <tr className="bg-brand-light text-left text-[10px]">
            <th className="rounded-l-md px-2 py-1.5 font-medium">Libelle</th>
            <th className="py-1.5 text-right font-medium">Montant</th>
            <th className="rounded-r-md px-2 py-1.5 text-right font-medium">Reste</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Scolarite T1", "60 000", "0"],
            ["Scolarite T2", "60 000", "0"],
            ["Cantine", "15 000", "5 000"],
          ].map((r) => (
            <tr key={r[0]} className="border-b border-stone-200">
              <td className="px-2 py-1.5 font-medium">{r[0]}</td>
              <td className="py-1.5 text-right">{r[1]}</td>
              <td className="px-2 py-1.5 text-right text-stone-500">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 ml-auto w-40 rounded-xl border border-stone-200 p-2.5">
        <div className="flex justify-between text-stone-500">
          <span>Sous-total</span>
          <span>135 000</span>
        </div>
        <div className="mt-1 flex justify-between border-t border-stone-200 pt-1 font-semibold">
          <span>Total</span>
          <span>135 000 FCFA</span>
        </div>
      </div>
    </div>
  );
}
