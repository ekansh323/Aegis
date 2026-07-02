"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.62 0.19 264 / 12%), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Start Your First Investigation.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Understand your attack surface with AI-assisted cybersecurity investigations.
        </p>
        <div className="mt-8">
          <Link href="/dashboard">
            <Button size="lg" className="min-w-[180px] text-sm font-medium">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
