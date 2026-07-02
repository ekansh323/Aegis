import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { MissionTimeline } from "@/components/investigation/mission-timeline";
import { TechCards } from "@/components/investigation/tech-cards";
import { AttackSurfaceCards } from "@/components/investigation/attack-surface-cards";
import { FindingsCards } from "@/components/investigation/findings-cards";
import { AISummaryCard } from "@/components/investigation/ai-summary-card";
import { ActivityFeed } from "@/components/investigation/activity-feed";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, RotateCcw } from "lucide-react";
import { StatusBadge } from "@/components/shared/status-badge";

export default function InvestigationPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Dashboard
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">example.com</h1>
              <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span>Standard Investigation</span>
                <StatusBadge status="completed" />
                <span>Duration: 4m 32s</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/report/rep-001">
                <Button size="sm" variant="outline" className="text-xs">
                  <FileText className="mr-1.5 h-3.5 w-3.5" />
                  Generate Report
                </Button>
              </Link>
              <Button size="sm" variant="outline" className="text-xs">
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                Restart
              </Button>
            </div>
          </div>
        </div>

        {/* AI Summary */}
        <AISummaryCard />

        {/* Timeline */}
        <MissionTimeline />

        {/* Stats + Tech */}
        <AttackSurfaceCards />
        <TechCards />

        {/* Findings */}
        <FindingsCards />

        {/* Activity Feed */}
        <ActivityFeed />
      </div>
    </AppShell>
  );
}
