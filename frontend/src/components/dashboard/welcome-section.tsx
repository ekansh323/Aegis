"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  Search,
  FileText,
  Clock,
} from "lucide-react";
import { mockStats } from "@/lib/mock-data";

const stats = [
  { label: "Projects", value: mockStats.projects, icon: FolderOpen, color: "text-blue-400" },
  { label: "Investigations", value: mockStats.investigations, icon: Search, color: "text-purple-400" },
  { label: "Reports", value: mockStats.reports, icon: FileText, color: "text-emerald-400" },
  { label: "Recent Activity", value: mockStats.recentActivity, icon: Clock, color: "text-amber-400" },
];

export function WelcomeSection() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-semibold tracking-tight">
          {greeting}, <span className="text-primary">Ekansh</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Ready for your next investigation?
        </p>
      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{stat.label}</span>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
