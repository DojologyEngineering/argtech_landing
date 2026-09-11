"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Home, Sprout, Users, Mail } from "lucide-react";
import { Press } from "@/components/motion/press";
import { cn } from "@/lib/utils";
import { useContent } from "@/lib/i18n/context";

export function MobileBottomNav() {
  const { ui } = useContent();
  const items = [
    { id: "hero", label: ui.mobileNav.home, icon: Home },
    { id: "platform", label: ui.mobileNav.platform, icon: Sprout },
    { id: "team", label: ui.mobileNav.team, icon: Users },
    { id: "contact-info", label: ui.mobileNav.contact, icon: Mail },
  ];
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
      <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/70 p-1.5 shadow-[0_16px_36px_-14px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <Press key={id}>
              <button
                type="button"
                onClick={() => goTo(id)}
                aria-label={label}
                className="relative flex h-12 w-14 flex-col items-center justify-center gap-0.5 rounded-full"
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <Icon
                  className={cn(
                    "relative z-10 h-4.5 w-4.5",
                    isActive ? "text-primary-foreground" : "text-muted-foreground dark:text-white/85",
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 text-[9px] font-semibold",
                    isActive ? "text-primary-foreground" : "text-muted-foreground dark:text-white/85",
                  )}
                >
                  {label}
                </span>
              </button>
            </Press>
          );
        })}
      </div>
    </nav>
  );
}
