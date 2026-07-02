"use client";

import { motion } from "framer-motion";
import { Network, FolderOpen, Cpu, ShieldCheck, Lock } from "lucide-react";

const surfaces = [
  { label: "Open Ports", count: 4, icon: Network, color: "text-blue-400" },
  { label: "Directories", count: 12, icon: FolderOpen, color: "text-purple-400" },
  { label: "Technologies", count: 7, icon: Cpu, color: "text-emerald-400" },
  { label: "Headers", count: 3, icon: ShieldCheck, color: "text-amber-400" },
  { label: "Certificates", count: 1, icon: Lock, color: "text-cyan-400" },
];

export function AttackSurfaceCards() {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">Attack Surface</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-5">
        {surfaces.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <Icon className={`mx-auto h-5 w-5 ${s.color}`} />
              <p className="mt-2 text-2xl font-semibold">{s.count}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
