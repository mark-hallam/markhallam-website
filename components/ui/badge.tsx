import { type ProjectStatus, getStatusLabel } from "@/lib/data";

const statusStyles: Record<ProjectStatus, string> = {
  live: "bg-success-light text-success border-success/20",
  building: "bg-accent-light text-building border-building/20",
  "coming-soon": "bg-surface-hover text-coming border-coming/20",
};

const dotStyles: Record<ProjectStatus, string> = {
  live: "bg-success",
  building: "bg-building animate-pulse",
  "coming-soon": "bg-coming",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`} />
      {getStatusLabel(status)}
    </span>
  );
}
