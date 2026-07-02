import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { CaseSidebar } from "@/components/case/case-sidebar";
import { CaseStory } from "@/components/case/case-story";
import { SeverityBadge } from "@/components/shared/severity-badge";
import { mockCaseDetail, mockFindings } from "@/lib/mock-data";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function CasePage() {
  const c = mockCaseDetail;

  return (
    <AppShell>
      <div>
        {/* Back link */}
        <Link
          href="/investigation/inv-001"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Investigation
        </Link>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <SeverityBadge severity={c.finding.severity} />
            <span className="text-xs text-muted-foreground">
              Detected by {c.finding.scanner}
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">{c.finding.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{c.finding.summary}</p>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-8">
          {/* Main story (70%) */}
          <div className="flex-1 min-w-0">
            <CaseStory />

            {/* Related Findings */}
            <div className="mt-12">
              <h2 className="text-sm font-medium text-muted-foreground mb-3">
                Related Findings
              </h2>
              <div className="space-y-2">
                {c.relatedFindings.map((f) => (
                  <Link
                    key={f.id}
                    href={`/case/${f.id}`}
                    className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3">
                      <SeverityBadge severity={f.severity} />
                      <span className="text-sm font-medium">{f.title}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (30%) */}
          <div className="hidden w-72 shrink-0 lg:block">
            <CaseSidebar />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
