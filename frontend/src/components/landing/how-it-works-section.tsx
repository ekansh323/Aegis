"use client";

import { motion } from "framer-motion";
import {
  FolderPlus,
  Search,
  BarChart3,
  FileText,
} from "lucide-react";

const steps = [
  { number: "01", icon: FolderPlus, title: "Create Project", description: "Set up a new project and add your target website." },
  { number: "02", icon: Search, title: "Start Investigation", description: "Select an investigation profile and launch the assessment." },
  { number: "03", icon: BarChart3, title: "Review Findings", description: "Explore discovered vulnerabilities with AI-powered explanations." },
  { number: "04", icon: FileText, title: "Generate Report", description: "Create a professional security report ready to share." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Aegis Works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Four simple steps from project creation to professional security report.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative text-center"
              >
                <span className="text-5xl font-bold text-muted/50">{step.number}</span>
                <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
