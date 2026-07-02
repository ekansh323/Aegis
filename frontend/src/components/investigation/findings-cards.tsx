"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SeverityBadge } from "@/components/shared/severity-badge";
import { mockFindings } from "@/lib/mock-data";

export function FindingsCards() {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">Security Findings</h2>
      <div className="mt-3 space-y-3">
        {mockFindings.map((finding, i) => (
          <motion.div
            key={finding.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
          >
            <Link
              href={`/case/${finding.id}`}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <SeverityBadge severity={finding.severity} />
                  <h3 className="text-sm font-medium truncate">{finding.title}</h3>
                </div>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-1">
                  {finding.summary}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Found by {finding.scanner}
                </p>
              </div>
              <ChevronRight className="ml-4 h-4 w-4 shrink-0 text-muted-foreground" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
