import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { BackToTop } from "@/components/motion/back-to-top";
import { footer } from "@/lib/mock-data";

// Fixed brand green/cream (not the theme-swappable --primary/--foreground
// tokens) so the footer stays a consistent dark anchor in both light and
// dark mode — see globals.css for where these same values are derived.

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(36.9%_0.07_154.2)] text-[oklch(95.8%_0.012_91.5)]">
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 text-center text-[15vw] leading-none font-semibold whitespace-nowrap text-[oklch(95.8%_0.012_91.5)]/[0.05] select-none sm:-bottom-8 sm:text-[11rem] lg:-bottom-10 lg:text-[13rem]"
      >
        ARG TECH
      </span>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-[1.3fr_repeat(3,1fr)] md:gap-12">
          <div className="flex flex-col gap-5">
            <Logo
              variant="light"
              showTagline
              wordmarkClassName="text-[oklch(95.8%_0.012_91.5)]"
              taglineClassName="text-[oklch(95.8%_0.012_91.5)]/55"
            />
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <div className="text-sm font-semibold text-[oklch(95.8%_0.012_91.5)]">
                {column.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-[oklch(95.8%_0.012_91.5)]/60 transition-colors hover:text-[oklch(95.8%_0.012_91.5)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="text-sm text-[oklch(95.8%_0.012_91.5)]/50">
            {footer.copyright}
          </span>
          <div className="flex flex-wrap items-start gap-4 sm:items-center sm:gap-6">
            <Link
              href={footer.location.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-1.5 text-sm text-[oklch(95.8%_0.012_91.5)]/50 transition-colors hover:text-[oklch(95.8%_0.012_91.5)]"
            >
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {footer.location.value}
            </Link>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
