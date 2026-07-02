import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
        <Shield className="h-7 w-7 text-primary" />
      </div>
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-muted-foreground">
        This page could not be found.
      </p>
      <Link href="/dashboard" className="mt-6">
        <Button>Return to Dashboard</Button>
      </Link>
    </div>
  );
}
