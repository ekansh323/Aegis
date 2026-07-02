"use client";

import { motion } from "framer-motion";

export function GlobePlaceholder() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-72 w-72 rounded-full md:h-96 md:w-96"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.19 264 / 20%), transparent 70%)",
        }}
      />

      {/* Globe sphere */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative h-56 w-56 rounded-full md:h-72 md:w-72"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, oklch(0.25 0.02 264), oklch(0.15 0.01 285) 60%, oklch(0.10 0.005 285))",
          boxShadow: "inset -8px -8px 24px oklch(0 0 0 / 40%), 0 0 60px oklch(0.62 0.19 264 / 10%)",
        }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 48%, oklch(0.62 0.19 264 / 30%) 49%, oklch(0.62 0.19 264 / 30%) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, oklch(0.62 0.19 264 / 20%) 49%, oklch(0.62 0.19 264 / 20%) 51%, transparent 52%)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Network nodes */}
        {[
          { top: "20%", left: "60%", delay: 0 },
          { top: "45%", left: "25%", delay: 1.5 },
          { top: "65%", left: "55%", delay: 3 },
          { top: "35%", left: "75%", delay: 0.8 },
          { top: "75%", left: "35%", delay: 2.2 },
        ].map((node, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-400"
            style={{ top: node.top, left: node.left }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-blue-400/50"
          style={{
            top: `${25 + Math.random() * 50}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
}
