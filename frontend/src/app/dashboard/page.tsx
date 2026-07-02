import { AppShell } from "@/components/layout/app-shell";
import { WelcomeSection } from "@/components/dashboard/welcome-section";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { ProjectGrid } from "@/components/dashboard/project-grid";
import { RecentInvestigations } from "@/components/dashboard/recent-investigations";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <WelcomeSection />
        <QuickActions />
        <ProjectGrid />
        <RecentInvestigations />
      </div>
    </AppShell>
  );
}
