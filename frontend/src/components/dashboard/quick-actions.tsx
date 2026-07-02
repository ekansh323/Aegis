"use client";

import { motion } from "framer-motion";
import { Plus, FolderPlus, FileText, Clock } from "lucide-react";

const actions = [
  { title: "New Investigation", description: "Start a security assessment", icon: Plus, color: "bg-blue-500/10 text-blue-400" },
  { title: "Create Project", description: "Organize your targets", icon: FolderPlus, color: "bg-purple-500/10 text-purple-400" },
  { title: "View Reports", description: "Browse generated reports", icon: FileText, color: "bg-emerald-500/10 text-emerald-400" },
  { title: "Continue Last", description: "Resume investigation", icon: Clock, color: "bg-amber-500/10 text-amber-400" },
];

export function QuickActions() {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">Quick Actions</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -2 }}
              className="flex flex-col items-start rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/30"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${action.color}`}>
                <Icon className="h-4 w-4" />
              </div>
              <p className="mt-3 text-sm font-medium">{action.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{action.description}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
