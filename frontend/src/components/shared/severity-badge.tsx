import { cn } from "@/lib/utils";
import type { Severity } from "@/types";

const severityConfig: Record<Severity, { label: string; className: string }> = {
  critical: {
    label: "Critical",
    className: "bg-red-500/15 text-red-400 border-red-500/25",
  },
  high: {
    label: "High",
    className: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  },
  medium: {
    label: "Medium",
    className: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  },
  low: {
    label: "Low",
    className: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  },
  info: {
    label: "Info",
    className: "bg-slate-500/15 text-slate-400 border-slate-500/25",
  },
};

interface SeverityBadgeProps {
  severity: Severity;
  className?: string;
}

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const config = severityConfig[severity];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
