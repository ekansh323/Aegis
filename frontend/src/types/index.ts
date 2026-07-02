// ─── Project ──────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  description: string;
  investigationCount: number;
  lastUpdated: string;
  status: "active" | "archived" | "draft";
}

// ─── Investigation ────────────────────────────────────────
export type InvestigationStatus = "running" | "completed" | "failed" | "queued";

export interface Investigation {
  id: string;
  target: string;
  profile: string;
  status: InvestigationStatus;
  duration: string;
  date: string;
  projectId: string;
}

// ─── Timeline ─────────────────────────────────────────────
export type TimelineStageStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed"
  | "skipped";

export interface TimelineStage {
  id: string;
  name: string;
  status: TimelineStageStatus;
  progress?: number;
  duration?: string;
}

// ─── Technology ───────────────────────────────────────────
export interface Technology {
  name: string;
  version: string;
  category: string;
  description: string;
}

// ─── Finding ──────────────────────────────────────────────
export type Severity = "critical" | "high" | "medium" | "low" | "info";

export interface Finding {
  id: string;
  title: string;
  severity: Severity;
  summary: string;
  scanner: string;
  affectedResource: string;
  category: string;
}

// ─── Case (detailed finding) ─────────────────────────────
export interface CaseDetail {
  id: string;
  finding: Finding;
  discoveryTime: string;
  estimatedReadingTime: string;
  whatWeDiscovered: string;
  technicalEvidence: {
    scanner: string;
    request: string;
    response: string;
    headers: Record<string, string>;
    relevantOutput: string;
  };
  whyItMatters: string;
  attackScenario: string;
  realWorldExample: string;
  recommendedFix: {
    description: string;
    codeExamples: { label: string; code: string }[];
  };
  learnMore: { title: string; url: string; source: string }[];
  relatedFindings: Finding[];
}

// ─── Report ───────────────────────────────────────────────
export interface Report {
  id: string;
  name: string;
  target: string;
  generatedDate: string;
  profile: string;
  reportId: string;
  executiveSummary: string;
  securityPosture: {
    overall: string;
    strengths: string[];
    areasOfConcern: string[];
  };
  targetOverview: {
    target: string;
    ip: string;
    server: string;
    framework: string;
    profile: string;
    duration: string;
    date: string;
    status: string;
  };
  technologies: Technology[];
  attackSurface: {
    openPorts: number;
    directories: number;
    endpoints: number;
    securityHeaders: number;
    certificates: number;
  };
  findings: Finding[];
  recommendations: {
    priority: "immediate" | "high" | "medium" | "best-practice";
    title: string;
    description: string;
    impact: string;
  }[];
}

// ─── Activity ─────────────────────────────────────────────
export interface ActivityEvent {
  id: string;
  time: string;
  title: string;
  description?: string;
  type: "info" | "success" | "warning" | "error";
}

// ─── Navigation ───────────────────────────────────────────
export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
}
