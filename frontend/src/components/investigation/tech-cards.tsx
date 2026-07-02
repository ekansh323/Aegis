"use client";

import { motion } from "framer-motion";
import { mockTechnologies } from "@/lib/mock-data";

export function TechCards() {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">Technology Profile</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {mockTechnologies.slice(0, 4).map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
            className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
          >
            <p className="text-sm font-semibold">{tech.name}</p>
            <p className="mt-1 text-xs text-primary">{tech.version}</p>
            <p className="mt-2 text-xs text-muted-foreground">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
