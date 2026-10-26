"use client";

import { Dialog } from "@base-ui/react/dialog";
import { motion } from "motion/react";
import { ArrowUpRight, ShoppingCart, Sprout, X } from "lucide-react";
import { DEMO_LINKS } from "@/lib/demo";
import { useContent } from "@/lib/i18n/context";

export function DemoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { ui } = useContent();

  const options = [
    { href: DEMO_LINKS.agent, icon: Sprout, title: ui.demoAgentTitle, body: ui.demoAgentBody },
    { href: DEMO_LINKS.buyer, icon: ShoppingCart, title: ui.demoBuyerTitle, body: ui.demoBuyerBody },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-[61] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-2xl transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 md:p-8">
          <Dialog.Close
            aria-label={ui.close}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Dialog.Close>

          <Dialog.Title className="font-heading text-2xl font-semibold text-foreground">
            {ui.demoTitle}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {ui.demoSubtitle}
          </Dialog.Description>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {options.map(({ href, icon: Icon, title, body }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[17px] font-bold text-foreground">{title}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{body}</span>
                </span>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {ui.openDemo}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
