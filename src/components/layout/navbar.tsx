"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { HamburgerIcon } from "@/components/motion/hamburger-icon";
import { Press } from "@/components/motion/press";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { navLinks } from "@/lib/mock-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 80], [64, 56]);
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 1px 0 rgba(0,0,0,0)", "0 8px 24px -12px rgba(0,0,0,0.18)"],
  );

  return (
    <motion.header
      style={{ boxShadow: headerShadow }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md"
    >
      <motion.div
        style={{ height: headerHeight }}
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
      >
        <Logo />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Press className="hidden sm:inline-block">
            <Button
              render={<Link href="#contact" />}
              nativeButton={false}
              size="lg"
              className="h-9 px-5 font-semibold"
            >
              Book a demo
            </Button>
          </Press>

          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
          >
            <HamburgerIcon open={open} className="flex flex-col" />
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-foreground/20 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full z-50 border-b border-border/70 bg-background shadow-lg"
            >
              <motion.nav
                variants={staggerContainer(0.05)}
                initial="hidden"
                animate="visible"
                className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={fadeUp}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={fadeUp} className="mt-2 border-t border-border/70 pt-4">
                  <Link
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Log in
                  </Link>
                </motion.div>
                <motion.div variants={fadeUp} className="px-3 pt-1 sm:hidden">
                  <Button
                    render={<Link href="#contact" onClick={() => setOpen(false)} />}
                    nativeButton={false}
                    size="lg"
                    className="h-10 w-full font-semibold"
                  >
                    Book a demo
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
