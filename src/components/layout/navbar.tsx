"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { HamburgerIcon } from "@/components/motion/hamburger-icon";
import { Press } from "@/components/motion/press";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useContent } from "@/lib/i18n/context";

export function Navbar() {
  const { navLinks, ui } = useContent();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 80], [64, 56]);
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 1px 0 rgba(0,0,0,0)", "0 8px 24px -12px rgba(0,0,0,0.18)"],
  );
  const dotsOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  function scrollToTop(e: MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Faint dotted texture sitting behind the desktop bar — only ever
            visible through the bar's rounded bottom corners, and fades out
            on scroll so it only ever reads as a top-of-page flourish.
            Height matches the desktop bar's fixed height exactly (both are
            multiples of the 12px dot tile) so this grid stays in phase with
            the one in Hero, which tiles from its own top starting right
            where this bar ends — no matching offset, no seam. */}
        <motion.div
          aria-hidden
          style={{ opacity: dotsOpacity }}
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-21 lg:block"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
              opacity: 0.4,
            }}
          />
        </motion.div>

        {/* Mobile / tablet bar */}
        <motion.div
          style={{ boxShadow: headerShadow, height: headerHeight }}
          className="relative flex items-center justify-between border-b border-border/70 bg-background/85 px-6 backdrop-blur-md lg:hidden"
        >
          <Link href="#hero" onClick={scrollToTop} className="cursor-pointer">
            <Logo />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Press className="hidden sm:inline-block">
              <Button
                render={<Link href="#contact" />}
                nativeButton={false}
                size="lg"
                className="h-9 px-5 font-semibold"
              >
                {ui.bookADemo}
              </Button>
            </Press>

            <motion.button
              type="button"
              aria-label={open ? ui.closeMenu : ui.openMenu}
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

        {/* Desktop bar — full width, flush to the top and sides, with only
            the bottom corners rounded so the dotted texture behind it peeks
            through in the two corner notches. */}
        <div className="relative hidden rounded-b-xl bg-background/95 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.3)] backdrop-blur-md lg:block">
          <div className="mx-auto flex h-21 max-w-6xl items-center justify-between px-8">
            <Link href="#hero" onClick={scrollToTop} className="cursor-pointer">
              <Logo />
            </Link>

            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <div className="flex items-center overflow-hidden rounded-full">
                <Press>
                  <Button
                    render={<Link href="#contact" />}
                    nativeButton={false}
                    className="h-10 rounded-none rounded-l-full border-0 pr-4 pl-5 font-semibold"
                  >
                    {ui.bookADemo}
                  </Button>
                </Press>
                <Press>
                  <Link
                    href="#contact"
                    aria-label={ui.bookADemo}
                    className="flex h-10 w-10 items-center justify-center bg-primary-foreground text-primary transition-opacity hover:opacity-90"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Press>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not a descendant: the header's
        backdrop-blur establishes a new containing block for position:fixed
        descendants, which collapsed this overlay to a 0-height box when it
        lived inside it (fixed inset-0 resolved against the ~64px header
        box, not the viewport) — invisible and non-blocking.
      */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-45 bg-foreground/20 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ top: headerHeight }}
              className="fixed inset-x-0 z-50 border-b border-border/70 bg-background shadow-lg"
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
                <motion.div variants={fadeUp} className="px-3 pt-3 sm:hidden">
                  <Button
                    render={<Link href="#contact" onClick={() => setOpen(false)} />}
                    nativeButton={false}
                    size="lg"
                    className="h-10 w-full font-semibold"
                  >
                    {ui.bookADemo}
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
