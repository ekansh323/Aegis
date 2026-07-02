import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { Separator } from "@/components/ui/separator";
import { Moon, Bell, User, Info } from "lucide-react";

function SettingSection({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2.5 mb-1">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      <p className="text-xs text-muted-foreground mb-4">{description}</p>
      {children}
    </div>
  );
}

function ToggleRow({ label, description, checked }: { label: string; description: string; checked: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div
        className={`h-5 w-9 rounded-full transition-colors ${checked ? "bg-primary" : "bg-secondary"} relative cursor-pointer`}
      >
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`}
        />
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="max-w-2xl">
        <PageHeader title="Settings" description="Manage your account and preferences" />

        <div className="mt-8 space-y-4">
          <SettingSection icon={User} title="Profile" description="Your account information">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Name</p>
                <p className="text-sm font-medium">Ekansh</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="text-sm font-medium">ekansh@aegis.dev</p>
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Moon} title="Appearance" description="Visual preferences">
            <ToggleRow label="Dark Mode" description="Always use dark theme" checked={true} />
          </SettingSection>

          <SettingSection icon={Bell} title="Notifications" description="Control notification preferences">
            <div className="space-y-1">
              <ToggleRow
                label="Investigation Complete"
                description="Notify when an investigation finishes"
                checked={true}
              />
              <Separator />
              <ToggleRow
                label="Critical Findings"
                description="Alert on critical severity discoveries"
                checked={true}
              />
              <Separator />
              <ToggleRow
                label="Weekly Summary"
                description="Receive weekly investigation summaries"
                checked={false}
              />
            </div>
          </SettingSection>

          <SettingSection icon={Info} title="About" description="Application information">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version</span>
                <span className="font-mono">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">License</span>
                <span>MIT</span>
              </div>
            </div>
          </SettingSection>
        </div>
      </div>
    </AppShell>
  );
}
