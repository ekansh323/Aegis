"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { mockProjects } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  active: "bg-emerald-500/15 text-emerald-400",
  archived: "bg-slate-500/15 text-slate-400",
  draft: "bg-amber-500/15 text-amber-400",
};

export function ProjectGrid() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">Projects</h2>
        <button className="text-xs text-primary hover:underline">View All</button>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
            whileHover={{ y: -2 }}
          >
            <Link
              href="/investigation/inv-001"
              className="block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{project.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.investigationCount} investigations</span>
                <span>{project.lastUpdated}</span>
              </div>
              <div className="mt-3">
                <span
                  className={cn(
                    "inline-flex rounded-md px-2 py-0.5 text-xs font-medium capitalize",
                    statusStyles[project.status]
                  )}
                >
                  {project.status}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
