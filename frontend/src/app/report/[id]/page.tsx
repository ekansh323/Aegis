"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/app-shell";
import { SeverityBadge } from "@/components/shared/severity-badge";
import { Button } from "@/components/ui/button";
import { mockReport } from "@/lib/mock-data";
import {
  ArrowLeft,
  Download,
  FileText,
  FileCode,
  Printer,
  Shield,
  Check,
  AlertTriangle,
  Server,
  Globe,
  Network,
  FolderOpen,
  Link2,
  ShieldCheck,
  Lock,
  ChevronRight,
  BookOpen,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  immediate: { label: "Immediate", color: "bg-red-500/15 text-red-400" },
  high: { label: "High Priority", color: "bg-orange-500/15 text-orange-400" },
  medium: { label: "Medium Priority", color: "bg-amber-500/15 text-amber-400" },
  "best-practice": { label: "Best Practice", color: "bg-blue-500/15 text-blue-400" },
};

export default function ReportPage() {
  const r = mockReport;

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/investigation/inv-001"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Investigation
        </Link>

        {/* Report Header */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeIn}>
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">{r.reportId}</span>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">{r.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{r.target}</span>
                <span>·</span>
                <span>{r.generatedDate}</span>
                <span>·</span>
                <span>{r.profile}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs">
                <Download className="mr-1.5 h-3.5 w-3.5" />
                PDF
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                <FileCode className="mr-1.5 h-3.5 w-3.5" />
                HTML
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                <FileText className="mr-1.5 h-3.5 w-3.5" />
                MD
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                <Printer className="mr-1.5 h-3.5 w-3.5" />
                Print
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.section custom={1} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Executive Summary</h2>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">{r.executiveSummary}</p>
          </div>
        </motion.section>

        {/* Security Posture */}
        <motion.section custom={2} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Security Posture</h2>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4">
              <span className="text-xs text-muted-foreground">Overall Assessment</span>
              <p className="text-lg font-semibold text-amber-400">{r.securityPosture.overall}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Strengths</p>
                <div className="space-y-1.5">
                  {r.securityPosture.strengths.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-emerald-400">
                      <Check className="h-3.5 w-3.5 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Areas Requiring Attention</p>
                <div className="space-y-1.5">
                  {r.securityPosture.areasOfConcern.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-amber-400">
                      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Target Overview */}
        <motion.section custom={3} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Target Overview</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Target", value: r.targetOverview.target, icon: Globe },
              { label: "IP Address", value: r.targetOverview.ip, icon: Network },
              { label: "Server", value: r.targetOverview.server, icon: Server },
              { label: "Framework", value: r.targetOverview.framework, icon: FileCode },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-border bg-card p-4">
                  <Icon className="h-4 w-4 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Technology Profile */}
        <motion.section custom={4} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Technology Profile</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {r.technologies.slice(0, 4).map((tech) => (
              <div key={tech.name} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-semibold">{tech.name}</p>
                <p className="text-xs text-primary mt-0.5">{tech.version}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Attack Surface */}
        <motion.section custom={5} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Attack Surface</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              { label: "Open Ports", count: r.attackSurface.openPorts, icon: Network },
              { label: "Directories", count: r.attackSurface.directories, icon: FolderOpen },
              { label: "Endpoints", count: r.attackSurface.endpoints, icon: Link2 },
              { label: "Headers", count: r.attackSurface.securityHeaders, icon: ShieldCheck },
              { label: "Certificates", count: r.attackSurface.certificates, icon: Lock },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <Icon className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                  <p className="text-xl font-semibold">{item.count}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Security Findings */}
        <motion.section custom={6} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Security Findings</h2>
          <div className="space-y-2">
            {r.findings.map((f) => (
              <Link
                key={f.id}
                href={`/case/${f.id}`}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <SeverityBadge severity={f.severity} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{f.summary}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-2 shrink-0" />
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Recommendations */}
        <motion.section custom={7} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Recommendations</h2>
          <div className="space-y-3">
            {r.recommendations.map((rec, i) => {
              const config = priorityConfig[rec.priority];
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${config.color}`}>
                      {config.label}
                    </span>
                    <h3 className="text-sm font-semibold">{rec.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">Impact:</span> {rec.impact}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Appendix */}
        <motion.section custom={8} initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Appendix</h2>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Investigation Profile</p>
                <p className="font-medium">{r.targetOverview.profile}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-medium">{r.targetOverview.duration}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Date</p>
                <p className="font-medium">{r.targetOverview.date}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <p className="font-medium text-emerald-400">{r.targetOverview.status}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Modules Executed</p>
                <p className="font-medium">Nmap, WhatWeb, Gobuster, Nuclei, AI Intelligence</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Report Generated</p>
                <p className="font-medium">{r.generatedDate}</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </AppShell>
  );
}
