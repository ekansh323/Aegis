"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobePlaceholder } from "./globe-placeholder";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Animated grid background */}
      <div className="bg-grid absolute inset-0" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.19 264 / 25%), oklch(0.6 0.2 300 / 15%), transparent)",
        }}
      />

      {/* Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 mb-8"
      >
        <GlobePlaceholder />
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Know Your Attack Surface.</span>
          <span className="mt-2 block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Before Attackers Do.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Modern security assessments powered by industry-standard cybersecurity tools and AI.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="min-w-[180px] text-sm font-medium">
              Start Investigation
            </Button>
          </Link>
          <Link href="/investigation/inv-001">
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px] text-sm font-medium"
            >
              View Demo
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to Begin Investigation</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
