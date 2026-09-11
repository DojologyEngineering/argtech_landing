"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { LogoMark } from "@/components/logo";
import { useContent } from "@/lib/i18n/context";

const WORDMARK = "ARG TECH";

// The bar creeps toward this cap on its own (so it always reads as "still
// working") but only actually completes once the page is confirmed ready —
// see the readiness effect below. It never reaches 100% by itself.
const SELF_FILL_CAP = 92;
const SELF_FILL_MS = 1800;
// Floor so the loader never flashes for a handful of ms on a fast/cached
// load, and ceiling so a hung resource can't leave it stuck forever.
const MIN_DISPLAY_MS = 900;
const MAX_WAIT_MS = 4000;
const EXIT_DELAY_MS = 150;
const WIPE_MS = 600;

const wordmarkContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.35 } },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export function IntroLoader() {
  const { ui } = useContent();
  // Defaults to visible: the inline INTRO_GATE_SCRIPT in layout.tsx has
  // already made the real (pre-paint) decision by the time this component
  // hydrates, via the `no-intro` class on <html> + a CSS rule that hides
  // #intro-loader instantly. Starting `show` at true just keeps this
  // component's first render consistent with what was already server-sent,
  // avoiding a hydration mismatch — it does not control initial visibility.
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [captionIndex, setCaptionIndex] = useState(0);
  const decided = useRef(false);

  // Mirrors the gate script's decision so React unmounts cleanly instead of
  // quietly running a full (CSS-hidden, invisible) animation timer for a
  // session that should never have seen the intro. Guarded by a ref (not
  // just re-reading the class) so React Strict Mode's dev-only
  // mount→cleanup→mount can't double-run this.
  useEffect(() => {
    if (decided.current) return;
    decided.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = reduced || document.documentElement.classList.contains("no-intro");
    if (skip) setShow(false);
  }, []);

  // Dismissal is gated on the page actually being ready — fonts decoded and
  // window "load" fired (all eagerly-loaded resources in, lazy below-fold
  // images excluded, which is exactly the above-the-fold scope this splash
  // is meant to cover) — not a fixed clock. A fixed timer means the loader
  // can disappear before a slow connection has actually finished bringing
  // the real page in, which just relocates the "blank/unsettled page"
  // problem to *after* the loader instead of fixing it.
  useEffect(() => {
    if (!show) return;

    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;
    let settled = false;
    let finishTimer = 0;
    let exitTimer = 0;
    let removeTimer = 0;

    function tick(now: number) {
      if (settled) return;
      const pct = Math.min(SELF_FILL_CAP, Math.round(((now - start) / SELF_FILL_MS) * SELF_FILL_CAP));
      setProgress((prev) => Math.max(prev, pct));
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function finishLoading() {
      if (settled) return;
      settled = true;
      cancelAnimationFrame(raf);

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      finishTimer = window.setTimeout(() => {
        setProgress(100);
        exitTimer = window.setTimeout(() => setExiting(true), EXIT_DELAY_MS);
        removeTimer = window.setTimeout(() => {
          setShow(false);
          document.body.style.overflow = "";
        }, EXIT_DELAY_MS + WIPE_MS);
      }, remaining);
    }

    const captionTimer1 = window.setTimeout(() => setCaptionIndex(1), 550);
    const captionTimer2 = window.setTimeout(() => setCaptionIndex(2), 1150);

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));
    Promise.all([fontsReady, pageLoaded]).then(finishLoading);

    const maxWaitTimer = window.setTimeout(finishLoading, MAX_WAIT_MS);

    return () => {
      settled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(captionTimer1);
      window.clearTimeout(captionTimer2);
      window.clearTimeout(maxWaitTimer);
      window.clearTimeout(finishTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="intro-loader"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          animate={{ clipPath: exiting ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: WIPE_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[oklch(36.9%_0.07_154.2)]"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[oklch(87.7%_0.189_129.4)]/25 blur-[90px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-32 h-80 w-80 rounded-full bg-[oklch(95.8%_0.012_91.5)]/10 blur-[100px]"
            animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-6 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(oklch(95.8% 0.012 91.5) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            animate={{ x: [0, 22], y: [0, 22] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex flex-col items-center gap-7">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <motion.span
                  aria-hidden
                  className="absolute h-16 w-16 rounded-full bg-[oklch(87.7%_0.189_129.4)]/30 blur-xl"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <LogoMark variant="light" className="h-10 w-10" />
                </motion.div>
              </div>

              <motion.div
                variants={wordmarkContainer}
                initial="hidden"
                animate="visible"
                className="flex font-sans text-xl font-extrabold tracking-[0.12em] text-[oklch(95.8%_0.012_91.5)]"
              >
                {WORDMARK.split("").map((char, i) => (
                  <motion.span key={i} variants={letter} className={char === " " ? "w-2" : undefined}>
                    {char === " " ? " " : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <div className="relative h-1 w-48 overflow-hidden rounded-full bg-[oklch(95.8%_0.012_91.5)]/15">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[oklch(87.7%_0.189_129.4)] to-[oklch(95.8%_0.012_91.5)] shadow-[0_0_10px_oklch(87.7%_0.189_129.4/0.7)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-[oklch(95.8%_0.012_91.5)]/60">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={captionIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {ui.introCaptions[captionIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="tabular-nums text-[oklch(87.7%_0.189_129.4)]">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
