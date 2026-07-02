import { cn } from "@/lib/utils";
import type { InvestigationStatus } from "@/types";

const statusConfig: Record<InvestigationStatus, { label: string; className: string; dot: string }> = {
  running: {
    label: "Running",
    className: "text-blue-400",
    dot: "bg-blue-400 animate-pulse",
  },
  completed: {
    label: "Completed",
    className: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  failed: {
    label: "Failed",
    className: "text-red-400",
    dot: "bg-red-400",
  },
  queued: {
    label: "Queued",
    className: "text-muted-foreground",
    dot: "bg-muted-foreground",
  },
};

interface StatusBadgeProps {
  status: InvestigationStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm", config.className, className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
      {config.label}
    </span>
  );
}
