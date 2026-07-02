"use client";

import { motion } from "framer-motion";
import { Check, Loader2, Clock, AlertTriangle, SkipForward } from "lucide-react";
import { mockTimeline } from "@/lib/mock-data";
import type { TimelineStageStatus } from "@/types";
import { cn } from "@/lib/utils";

const statusIcon: Record<TimelineStageStatus, React.ReactNode> = {
  completed: <Check className="h-3.5 w-3.5" />,
  running: <Loader2 className="h-3.5 w-3.5 animate-spin" />,
  queued: <Clock className="h-3.5 w-3.5" />,
  failed: <AlertTriangle className="h-3.5 w-3.5" />,
  skipped: <SkipForward className="h-3.5 w-3.5" />,
};

const statusColor: Record<TimelineStageStatus, string> = {
  completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  running: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  queued: "bg-muted text-muted-foreground border-border",
  failed: "bg-red-500/15 text-red-400 border-red-500/30",
  skipped: "bg-muted text-muted-foreground border-border",
};

const progressColor: Record<TimelineStageStatus, string> = {
  completed: "bg-emerald-500",
  running: "bg-blue-500",
  queued: "bg-muted-foreground/30",
  failed: "bg-red-500",
  skipped: "bg-muted-foreground/30",
};

export function MissionTimeline() {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">Mission Timeline</h2>
      <div className="mt-4 space-y-3">
        {mockTimeline.map((stage, i) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            {/* Status icon */}
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                statusColor[stage.status]
              )}
            >
              {statusIcon[stage.status]}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{stage.name}</span>
                {stage.duration && (
                  <span className="text-xs text-muted-foreground">{stage.duration}</span>
                )}
              </div>
              {/* Progress bar */}
              <div className="mt-1.5 h-1 w-full rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stage.progress ?? 0}%` }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className={cn("h-full rounded-full", progressColor[stage.status])}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
