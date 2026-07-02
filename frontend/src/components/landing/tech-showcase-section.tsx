"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Nmap", category: "Network Scanner" },
  { name: "WhatWeb", category: "Technology Detection" },
  { name: "Gobuster", category: "Content Discovery" },
  { name: "Nuclei", category: "Vulnerability Scanner" },
  { name: "Ollama", category: "AI Intelligence" },
  { name: "FastAPI", category: "Backend Framework" },
  { name: "Next.js", category: "Frontend Framework" },
  { name: "Tailwind CSS", category: "Styling" },
];

export function TechShowcaseSection() {
  return (
    <section id="technology" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Powered By
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Industry-standard security tools and modern development frameworks.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/30"
            >
              <p className="text-sm font-semibold">{tool.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{tool.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
