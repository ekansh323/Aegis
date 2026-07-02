"use client";

import { motion } from "framer-motion";
import { Search, FileCode, AlertTriangle, Crosshair, Globe, Wrench, BookOpen, ExternalLink } from "lucide-react";
import { mockCaseDetail } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sectionVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="relative rounded-lg border border-border bg-secondary/50 overflow-hidden">
      {label && (
        <div className="border-b border-border px-4 py-1.5 text-xs text-muted-foreground">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-xs font-mono text-muted-foreground leading-relaxed">
        {code}
      </pre>
    </div>
  );
}

export function CaseStory() {
  const c = mockCaseDetail;

  return (
    <div className="space-y-10">
      {/* 1. What We Discovered */}
      <motion.section custom={0} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={Search} title="What We Discovered" />
        <p className="text-sm leading-relaxed text-muted-foreground">{c.whatWeDiscovered}</p>
      </motion.section>

      {/* 2. Technical Evidence */}
      <motion.section custom={1} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={FileCode} title="Technical Evidence" />
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-xs text-muted-foreground mb-1">Scanner</p>
              <p className="text-sm font-medium">{c.technicalEvidence.scanner}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <p className="text-sm font-medium text-red-400">Missing</p>
            </div>
          </div>
          <CodeBlock label="HTTP Request" code={c.technicalEvidence.request} />
          <CodeBlock label="HTTP Response" code={c.technicalEvidence.response} />
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground mb-2">Response Headers</p>
            <div className="space-y-1.5">
              {Object.entries(c.technicalEvidence.headers).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between text-xs">
                  <span className="font-mono text-muted-foreground">{key}</span>
                  <span className={`font-mono ${value === "Missing" ? "text-red-400" : "text-foreground"}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Why It Matters */}
      <motion.section custom={2} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={AlertTriangle} title="Why It Matters" />
        <p className="text-sm leading-relaxed text-muted-foreground">{c.whyItMatters}</p>
      </motion.section>

      {/* 4. Attack Scenario */}
      <motion.section custom={3} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={Crosshair} title="How An Attacker Could Exploit This" />
        <p className="text-sm leading-relaxed text-muted-foreground">{c.attackScenario}</p>
      </motion.section>

      {/* 5. Real World Example */}
      <motion.section custom={4} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={Globe} title="Real World Example" />
        <p className="text-sm leading-relaxed text-muted-foreground">{c.realWorldExample}</p>
      </motion.section>

      {/* 6. Recommended Fix */}
      <motion.section custom={5} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={Wrench} title="Recommended Fix" />
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">{c.recommendedFix.description}</p>
        <Tabs defaultValue={c.recommendedFix.codeExamples[0]?.label} className="w-full">
          <TabsList className="bg-secondary/50">
            {c.recommendedFix.codeExamples.map((ex) => (
              <TabsTrigger key={ex.label} value={ex.label} className="text-xs">
                {ex.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {c.recommendedFix.codeExamples.map((ex) => (
            <TabsContent key={ex.label} value={ex.label}>
              <CodeBlock code={ex.code} />
            </TabsContent>
          ))}
        </Tabs>
      </motion.section>

      {/* 7. Learn More */}
      <motion.section custom={6} initial="hidden" animate="visible" variants={sectionVariant}>
        <SectionHeader icon={BookOpen} title="Learn More" />
        <div className="grid grid-cols-2 gap-3">
          {c.learnMore.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-border bg-card p-3 text-sm transition-colors hover:border-primary/30"
            >
              <div>
                <p className="font-medium text-sm">{resource.title}</p>
                <p className="text-xs text-muted-foreground">{resource.source}</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
