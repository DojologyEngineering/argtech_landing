"use client";

import Link from "next/link";
import { Sprout, Briefcase } from "lucide-react";
import { Press } from "@/components/motion/press";
import { useContent } from "@/lib/i18n/context";

export function AudienceSwitcher() {
  const { ui } = useContent();
  return (
    <div className="mx-auto flex max-w-6xl justify-center px-6 pb-16 md:pb-20">
      <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-border bg-card p-1.5">
        <Press>
          <Link
            href="#platform"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Sprout className="h-4 w-4 text-primary" />
            {ui.forFarmers}
          </Link>
        </Press>
        <Press>
          <Link
            href="#partners"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Briefcase className="h-4 w-4 text-primary" />
            {ui.forPartnersAndInvestors}
          </Link>
        </Press>
      </div>
    </div>
  );
}
