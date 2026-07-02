"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export function AISummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="rounded-xl border border-primary/20 bg-primary/5 p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Brain className="h-4 w-4 text-primary" />
        <h2 className="text-sm font-medium">AI Investigation Summary</h2>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Aegis completed the investigation successfully. The assessment identified two
        high-risk findings related to missing security headers and one medium-risk
        configuration issue. No critical remote code execution vulnerabilities were
        detected. Priority should be given to implementing CSP and HSTS.
      </p>
    </motion.div>
  );
}
