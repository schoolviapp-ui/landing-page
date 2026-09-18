import {
  BookOpenIcon,
  CalendarClockIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  GraduationCapIcon,
  IdCardIcon,
  LayoutDashboardIcon,
  LightbulbIcon,
  MessageSquareWarningIcon,
  NotebookPenIcon,
  PenLineIcon,
  SparklesIcon,
  UsersIcon,
  WalletIcon,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  dashboard: LayoutDashboardIcon,
  assistant: SparklesIcon,
  students: GraduationCapIcon,
  classes: BookOpenIcon,
  attendance: ClipboardCheckIcon,
  timetable: CalendarClockIcon,
  exams: NotebookPenIcon,
  grades: PenLineIcon,
  reports: FileTextIcon,
  subjects: BookOpenIcon,
  fees: WalletIcon,
  staff: IdCardIcon,
  teachers: UsersIcon,
  complaints: MessageSquareWarningIcon,
  suggestions: LightbulbIcon,
};

export type ModuleIconName = keyof typeof ICONS;

export function ModuleIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = ICONS[name as ModuleIconName] ?? BookOpenIcon;
  return <Icon {...props} />;
}
