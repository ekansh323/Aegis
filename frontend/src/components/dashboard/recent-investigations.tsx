"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/shared/status-badge";
import { mockInvestigations } from "@/lib/mock-data";
import { ChevronRight } from "lucide-react";

export function RecentInvestigations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">
          Recent Investigations
        </h2>
        <button className="text-xs text-primary hover:underline">View All</button>
      </div>

      <div className="mt-3 rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border">
              <TableHead className="text-xs text-muted-foreground">Target</TableHead>
              <TableHead className="text-xs text-muted-foreground">Profile</TableHead>
              <TableHead className="text-xs text-muted-foreground">Status</TableHead>
              <TableHead className="text-xs text-muted-foreground">Duration</TableHead>
              <TableHead className="text-xs text-muted-foreground">Date</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockInvestigations.map((inv) => (
              <TableRow
                key={inv.id}
                className="border-border cursor-pointer transition-colors hover:bg-secondary/50"
              >
                <TableCell>
                  <Link
                    href={`/investigation/${inv.id}`}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {inv.target}
                  </Link>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {inv.profile}
                </TableCell>
                <TableCell>
                  <StatusBadge status={inv.status} />
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {inv.duration}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {inv.date}
                </TableCell>
                <TableCell>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
