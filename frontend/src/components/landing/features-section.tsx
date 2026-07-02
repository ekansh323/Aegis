"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Fingerprint,
  FileText,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Intelligence",
    description:
      "Transform raw scanner results into understandable explanations with AI-powered analysis.",
  },
  {
    icon: Clock,
    title: "Investigation Timeline",
    description:
      "Watch every stage of your security investigation unfold in real time.",
  },
  {
    icon: Fingerprint,
    title: "Technology Fingerprinting",
    description:
      "Automatically identify web servers, frameworks, libraries, and CMS platforms.",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description:
      "Generate comprehensive security reports suitable for technical and non-technical audiences.",
  },
  {
    icon: GraduationCap,
    title: "Learning Mode",
    description:
      "Understand not just what was found, but why it matters and how attackers exploit it.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Investigate
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Aegis combines industry-standard security tools with AI to deliver a complete investigation experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
