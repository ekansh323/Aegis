"use client";

import { motion } from "framer-motion";
import { mockActivity } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const dotColor: Record<string, string> = {
  info: "bg-blue-400",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  error: "bg-red-400",
};

export function ActivityFeed() {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">Activity Feed</h2>
      <div className="mt-3 space-y-0 rounded-xl border border-border bg-card p-4">
        {mockActivity.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
            className={cn(
              "flex gap-3 py-3",
              i < mockActivity.length - 1 && "border-b border-border"
            )}
          >
            <span className="mt-1.5 shrink-0">
              <span className={cn("block h-2 w-2 rounded-full", dotColor[event.type])} />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium truncate">{event.title}</p>
                <span className="shrink-0 ml-2 text-xs text-muted-foreground font-mono">
                  {event.time}
                </span>
              </div>
              {event.description && (
                <p className="mt-0.5 text-xs text-muted-foreground">{event.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
