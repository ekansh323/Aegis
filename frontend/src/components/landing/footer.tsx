import { Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "License", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold">Aegis</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Separator className="max-w-xs" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aegis. MIT License.
        </p>
      </div>
    </footer>
  );
}
