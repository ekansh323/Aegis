"use client";

import { Search, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopNavProps {
  sidebarWidth: number;
}

export function TopNav({ sidebarWidth }: TopNavProps) {
  return (
    <header
      className="fixed top-0 right-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-md"
      style={{ left: sidebarWidth }}
    >
      {/* Search */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search projects, investigations..."
          className="h-9 bg-secondary/50 pl-9 text-sm border-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground">
          <Moon className="h-4 w-4" />
        </div>
        <Avatar className="h-8 w-8 border border-border">
          <AvatarFallback className="bg-primary/20 text-xs text-primary">
            E
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
