import type {
  Project,
  Investigation,
  TimelineStage,
  Technology,
  Finding,
  CaseDetail,
  Report,
  ActivityEvent,
} from "@/types";

// ─── Projects ─────────────────────────────────────────────
export const mockProjects: Project[] = [
  {
    id: "proj-001",
    name: "Production Website",
    description: "Main company website security assessment",
    investigationCount: 5,
    lastUpdated: "2 hours ago",
    status: "active",
  },
  {
    id: "proj-002",
    name: "Staging Environment",
    description: "Pre-production security validation",
    investigationCount: 3,
    lastUpdated: "1 day ago",
    status: "active",
  },
  {
    id: "proj-003",
    name: "API Gateway",
    description: "REST API endpoint security review",
    investigationCount: 1,
    lastUpdated: "3 days ago",
    status: "draft",
  },
];

// ─── Investigations ───────────────────────────────────────
export const mockInvestigations: Investigation[] = [
  {
    id: "inv-001",
    target: "example.com",
    profile: "Standard",
    status: "completed",
    duration: "4m 32s",
    date: "2026-06-30",
    projectId: "proj-001",
  },
  {
    id: "inv-002",
    target: "staging.example.com",
    profile: "Quick Scan",
    status: "completed",
    duration: "1m 48s",
    date: "2026-06-29",
    projectId: "proj-002",
  },
  {
    id: "inv-003",
    target: "api.example.com",
    profile: "Standard",
    status: "running",
    duration: "2m 15s",
    date: "2026-06-30",
    projectId: "proj-003",
  },
  {
    id: "inv-004",
    target: "blog.example.com",
    profile: "Deep Scan",
    status: "failed",
    duration: "6m 01s",
    date: "2026-06-28",
    projectId: "proj-001",
  },
  {
    id: "inv-005",
    target: "shop.example.com",
    profile: "Standard",
    status: "queued",
    duration: "—",
    date: "2026-06-30",
    projectId: "proj-001",
  },
];

// ─── Timeline Stages ──────────────────────────────────────
export const mockTimeline: TimelineStage[] = [
  { id: "ts-1", name: "Reconnaissance", status: "completed", progress: 100, duration: "18s" },
  { id: "ts-2", name: "Technology Detection", status: "completed", progress: 100, duration: "32s" },
  { id: "ts-3", name: "Content Discovery", status: "completed", progress: 100, duration: "1m 45s" },
  { id: "ts-4", name: "Vulnerability Assessment", status: "completed", progress: 100, duration: "1m 58s" },
  { id: "ts-5", name: "AI Intelligence", status: "completed", progress: 100, duration: "39s" },
];

// ─── Technologies ─────────────────────────────────────────
export const mockTechnologies: Technology[] = [
  { name: "Apache", version: "2.4.58", category: "Web Server", description: "Open-source HTTP server" },
  { name: "PHP", version: "8.2.12", category: "Language", description: "Server-side scripting language" },
  { name: "Bootstrap", version: "5.3.2", category: "Framework", description: "CSS framework for responsive design" },
  { name: "Cloudflare", version: "Active", category: "CDN", description: "Content delivery and DDoS protection" },
  { name: "jQuery", version: "3.7.1", category: "Library", description: "JavaScript DOM manipulation library" },
  { name: "MySQL", version: "8.0", category: "Database", description: "Relational database management system" },
  { name: "OpenSSL", version: "3.0.11", category: "Security", description: "Cryptography and SSL/TLS toolkit" },
];

// ─── Findings ─────────────────────────────────────────────
export const mockFindings: Finding[] = [
  {
    id: "case-001",
    title: "Missing Content Security Policy",
    severity: "high",
    summary: "Your website does not define a Content Security Policy, allowing browsers to execute scripts with fewer restrictions.",
    scanner: "Nuclei",
    affectedResource: "https://example.com",
    category: "Security Misconfiguration",
  },
  {
    id: "case-002",
    title: "Missing HTTP Strict Transport Security",
    severity: "high",
    summary: "HSTS header is not configured, leaving the website vulnerable to protocol downgrade attacks.",
    scanner: "Nuclei",
    affectedResource: "https://example.com",
    category: "Security Misconfiguration",
  },
  {
    id: "case-003",
    title: "Server Version Disclosure",
    severity: "medium",
    summary: "The web server exposes its version number in HTTP response headers, aiding attacker reconnaissance.",
    scanner: "WhatWeb",
    affectedResource: "https://example.com",
    category: "Information Disclosure",
  },
  {
    id: "case-004",
    title: "Missing X-Content-Type-Options",
    severity: "low",
    summary: "The X-Content-Type-Options header is not set to nosniff, which could allow MIME-type sniffing attacks.",
    scanner: "Nuclei",
    affectedResource: "https://example.com",
    category: "Security Misconfiguration",
  },
  {
    id: "case-005",
    title: "Directory Listing Enabled",
    severity: "medium",
    summary: "Directory listing is enabled on /uploads, exposing file structure to potential attackers.",
    scanner: "Gobuster",
    affectedResource: "https://example.com/uploads",
    category: "Information Disclosure",
  },
];

// ─── Case Detail ──────────────────────────────────────────
export const mockCaseDetail: CaseDetail = {
  id: "case-001",
  finding: mockFindings[0],
  discoveryTime: "10:21:51",
  estimatedReadingTime: "4 min",
  whatWeDiscovered:
    "Aegis discovered that your website does not send the Content-Security-Policy HTTP header. As a result, browsers receive no instructions restricting where scripts may execute from. This means that if any other vulnerability exists on the site, the lack of CSP significantly increases the potential impact.",
  technicalEvidence: {
    scanner: "Nuclei",
    request: "GET / HTTP/1.1\nHost: example.com\nUser-Agent: Aegis/1.0",
    response: "HTTP/1.1 200 OK\nServer: Apache/2.4.58\nContent-Type: text/html; charset=UTF-8",
    headers: {
      Server: "Apache/2.4.58",
      "Content-Type": "text/html; charset=UTF-8",
      "X-Powered-By": "PHP/8.2.12",
      "Content-Security-Policy": "Missing",
    },
    relevantOutput: "content-security-policy header is missing",
  },
  whyItMatters:
    "Without a Content Security Policy, the browser cannot restrict where JavaScript loads from. If another vulnerability exists — such as Cross-Site Scripting — this missing protection significantly increases its impact. CSP acts as a safety net, and without it, even small vulnerabilities can escalate into critical security incidents.",
  attackScenario:
    "Imagine an attacker discovers an XSS vulnerability on your website. Normally, a strict Content Security Policy could prevent many malicious scripts from executing. Without CSP, the attacker injects JavaScript that the browser trusts completely. Sessions may be stolen, accounts compromised, or sensitive information exfiltrated — all because this defensive layer was absent.",
  realWorldExample:
    "GitHub, Google, and many banking applications enforce strict Content Security Policies to reduce the impact of Cross-Site Scripting attacks. Although CSP is not a replacement for secure code, it provides an important additional layer of defense. The absence of CSP has been a contributing factor in numerous real-world data breaches.",
  recommendedFix: {
    description:
      "Add a Content-Security-Policy header to your HTTP responses. Start with a restrictive policy and gradually loosen it as needed.",
    codeExamples: [
      {
        label: "Apache",
        code: 'Header set Content-Security-Policy "default-src \'self\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\'"',
      },
      {
        label: "Nginx",
        code: "add_header Content-Security-Policy \"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'\";",
      },
      {
        label: "Express",
        code: "app.use((req, res, next) => {\n  res.setHeader('Content-Security-Policy', \"default-src 'self'\");\n  next();\n});",
      },
    ],
  },
  learnMore: [
    { title: "Content Security Policy", url: "https://owasp.org/www-project-secure-headers/", source: "OWASP" },
    { title: "CSP Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP", source: "MDN" },
    { title: "CWE-693: Protection Mechanism Failure", url: "https://cwe.mitre.org/data/definitions/693.html", source: "CWE" },
    { title: "CSP Evaluator", url: "https://csp-evaluator.withgoogle.com/", source: "Google" },
  ],
  relatedFindings: [mockFindings[1], mockFindings[3]],
};

// ─── Activity Feed ────────────────────────────────────────
export const mockActivity: ActivityEvent[] = [
  { id: "act-1", time: "10:21:13", title: "Investigation started", description: "Standard investigation initiated for example.com", type: "info" },
  { id: "act-2", time: "10:21:18", title: "Nmap completed", description: "4 open ports discovered", type: "success" },
  { id: "act-3", time: "10:21:32", title: "WhatWeb identified technologies", description: "Apache, PHP, Bootstrap, Cloudflare", type: "success" },
  { id: "act-4", time: "10:21:51", title: "Gobuster discovered directories", description: "/admin, /login, /uploads, /api", type: "success" },
  { id: "act-5", time: "10:22:27", title: "Nuclei discovered findings", description: "Missing CSP, Missing HSTS, Server version disclosure", type: "warning" },
  { id: "act-6", time: "10:23:06", title: "AI Intelligence completed", description: "Executive summary generated", type: "success" },
];

// ─── Report ───────────────────────────────────────────────
export const mockReport: Report = {
  id: "rep-001",
  name: "Website Investigation Report",
  target: "example.com",
  generatedDate: "30 June 2026",
  profile: "Standard Investigation",
  reportId: "REP-000124",
  executiveSummary:
    "Aegis completed a Standard Investigation of example.com. The assessment identified two High severity findings related to missing security headers and one Medium severity configuration issue. No Critical vulnerabilities or remote code execution risks were detected. Priority should be given to implementing a Content Security Policy and enabling HTTP Strict Transport Security.",
  securityPosture: {
    overall: "Moderate Risk",
    strengths: [
      "HTTPS enabled with valid certificate",
      "Modern server software versions",
      "Updated PHP version",
      "Cloudflare DDoS protection active",
    ],
    areasOfConcern: [
      "Missing Content Security Policy",
      "Missing HTTP Strict Transport Security",
      "Server version disclosure",
      "Directory listing enabled",
    ],
  },
  targetOverview: {
    target: "example.com",
    ip: "104.21.45.123",
    server: "Apache 2.4.58",
    framework: "PHP 8.2.12",
    profile: "Standard Investigation",
    duration: "4 minutes 32 seconds",
    date: "30 June 2026",
    status: "Completed",
  },
  technologies: mockTechnologies,
  attackSurface: {
    openPorts: 4,
    directories: 12,
    endpoints: 8,
    securityHeaders: 3,
    certificates: 1,
  },
  findings: mockFindings,
  recommendations: [
    {
      priority: "immediate",
      title: "Implement Content Security Policy",
      description: "Add a CSP header to prevent unauthorized script execution and reduce XSS impact.",
      impact: "Significantly reduces the impact of cross-site scripting vulnerabilities.",
    },
    {
      priority: "high",
      title: "Enable HTTP Strict Transport Security",
      description: "Configure HSTS to prevent protocol downgrade attacks and ensure all connections use HTTPS.",
      impact: "Protects against man-in-the-middle and SSL stripping attacks.",
    },
    {
      priority: "medium",
      title: "Hide Server Version",
      description: "Remove version information from HTTP response headers to reduce attacker reconnaissance.",
      impact: "Limits information available to attackers during initial scanning.",
    },
    {
      priority: "best-practice",
      title: "Disable Directory Listing",
      description: "Turn off automatic directory listing on all web server directories.",
      impact: "Prevents exposure of internal file structures and sensitive files.",
    },
  ],
};

// ─── Dashboard Stats ──────────────────────────────────────
export const mockStats = {
  projects: 3,
  investigations: 12,
  reports: 8,
  recentActivity: 5,
};
