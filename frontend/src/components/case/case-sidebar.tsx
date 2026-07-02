"use client";

import { SeverityBadge } from "@/components/shared/severity-badge";
import { mockCaseDetail } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Copy, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function CaseSidebar() {
  const c = mockCaseDetail;
  return (
    <aside className="sticky top-20 space-y-5 rounded-xl border border-border bg-card p-5">
      <div>
        <p className="text-xs text-muted-foreground mb-1.5">Severity</p>
        <SeverityBadge severity={c.finding.severity} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1">Category</p>
        <p className="text-sm">{c.finding.category}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1">Scanner</p>
        <p className="text-sm">{c.finding.scanner}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1">Affected Target</p>
        <p className="text-sm truncate">{c.finding.affectedResource}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1">Discovered At</p>
        <p className="text-sm font-mono">{c.discoveryTime}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1">Reading Time</p>
        <p className="text-sm">{c.estimatedReadingTime}</p>
      </div>

      <div className="space-y-2 pt-2">
        <Button variant="outline" size="sm" className="w-full justify-start text-xs">
          <Copy className="mr-2 h-3.5 w-3.5" />
          Copy Finding
        </Button>
        <Link href="/report/rep-001" className="block">
          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
            <FileText className="mr-2 h-3.5 w-3.5" />
            Generate Report
          </Button>
        </Link>
        <Link href="/investigation/inv-001" className="block">
          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
            <ArrowLeft className="mr-2 h-3.5 w-3.5" />
            Back to Investigation
          </Button>
        </Link>
      </div>
    </aside>
  );
}
