"use client";

import {
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { SLIDES, SLIDE_TITLES } from "./Slides";
import { EASE } from "./ui";

const TOTAL = SLIDES.length;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -32 : 32,
    opacity: 0,
    transition: { duration: 0.4, ease: EASE },
  }),
};

export default function Presentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [overview, setOverview] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((next: number) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(TOTAL - 1, next));
      if (clamped === current) return current;
      setDirection(clamped > current ? 1 : -1);
      return clamped;
    });
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const toggleFullscreen = useCallback(async () => {
    const node = wrapRef.current;
    if (!node) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await node.requestFullscreen();
      }
    } catch {
      /* browser blocked fullscreen */
    }
  }, []);

  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, [contenteditable='true']")) return;

      if (event.key === "Escape") {
        if (overview) {
          setOverview(false);
          return;
        }
        if (document.fullscreenElement) {
          void document.exitFullscreen();
        }
        return;
      }

      if (event.key === "o" || event.key === "O") {
        event.preventDefault();
        setOverview((open) => !open);
        return;
      }

      if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        void toggleFullscreen();
        return;
      }

      if (overview && event.key !== "Home" && event.key !== "End") return;

      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.key === " "
      ) {
        event.preventDefault();
        goTo(index + 1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goTo(index - 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(TOTAL - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index, overview, toggleFullscreen]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchX.current;
    const end = event.changedTouches[0]?.clientX;
    touchX.current = null;
    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < 56) return;
    if (delta < 0) goTo(index + 1);
    else goTo(index - 1);
  };

  const Slide = SLIDES[index];
  const progress = ((index + 1) / TOTAL) * 100;

  return (
    <div
      ref={wrapRef}
      className="relative h-[100dvh] w-[100vw] overflow-hidden bg-[var(--ink)] text-[var(--cream)] select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="noise" />
      <div className="grid-glow" />
      <motion.div
        className="orb orb-teal"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-silver"
        animate={reduceMotion ? undefined : { x: [0, -16, 0], y: [0, 12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>

      <header className="absolute top-3 right-0 left-0 z-30 flex items-center justify-between px-[clamp(1rem,4.5vw,3.5rem)] pt-1">
        <div className="flex min-w-0 items-center gap-3">
          {/* Cover carries the brand hero — hide duplicate chrome there */}
          {index === 0 ? (
            <p className="text-[10px] tracking-[0.2em] text-[var(--dim)] uppercase sm:text-[11px]">
              Discussion draft
            </p>
          ) : (
            <>
              <Logo size="header" />
              <div className="hidden min-w-0 sm:block">
                <p className="font-display text-[11px] tracking-[0.22em] text-[var(--accent-soft)] uppercase">
                  MDBC × Osama Naseem
                </p>
                <p className="truncate text-[10px] tracking-[0.16em] text-[var(--dim)] uppercase">
                  Business Partnership Model
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3 text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
          <span className="tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </span>
          <span className="hidden text-[var(--dim)] md:inline">· {SLIDE_TITLES[index]}</span>
        </div>
      </header>

      <button
        type="button"
        aria-label="Previous slide"
        className="absolute top-16 bottom-16 left-0 z-20 w-[min(12vw,7.5rem)] cursor-w-resize bg-transparent"
        onClick={prev}
        disabled={index === 0 || overview}
      />
      <button
        type="button"
        aria-label="Next slide"
        className="absolute top-16 right-0 bottom-16 z-20 w-[min(12vw,7.5rem)] cursor-e-resize bg-transparent"
        onClick={next}
        disabled={index === TOTAL - 1 || overview}
      />

      <main className="slide-stage absolute inset-0 pt-14 pb-[4.25rem]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={reduceMotion ? undefined : slideVariants}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit={reduceMotion ? undefined : "exit"}
            className="h-full w-full overflow-hidden"
          >
            <Slide />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="absolute right-0 bottom-0 left-0 z-30 flex items-center justify-between gap-3 px-[clamp(1rem,4.5vw,3.5rem)] pb-3">
        <div className="flex min-w-0 items-center gap-1.5 overflow-hidden">
          {SLIDE_TITLES.map((title, i) => (
            <button
              key={title}
              type="button"
              aria-label={`Go to ${title}`}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="nav-btn"
            aria-label="Overview"
            onClick={() => setOverview(true)}
          >
            <Grid2x2 size={16} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="nav-btn"
            aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            onClick={() => void toggleFullscreen()}
          >
            {fullscreen ? (
              <Minimize2 size={16} strokeWidth={1.75} />
            ) : (
              <Maximize2 size={16} strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            className="nav-btn"
            aria-label="Previous slide"
            onClick={prev}
            disabled={index === 0}
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="nav-btn"
            aria-label="Next slide"
            onClick={next}
            disabled={index === TOTAL - 1}
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </footer>

      <AnimatePresence>
        {overview ? (
          <motion.div
            className="absolute inset-0 z-40 overflow-auto bg-[rgba(5,8,15,0.92)] px-[clamp(1rem,4vw,3rem)] py-16 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.28em] text-[var(--accent)] uppercase">Overview</p>
                <h2 className="font-display mt-2 text-3xl">Jump to a slide</h2>
              </div>
              <button type="button" className="nav-btn w-auto px-4" onClick={() => setOverview(false)}>
                Close · Esc
              </button>
            </div>
            <div className="overview-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {SLIDE_TITLES.map((title, i) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => {
                    goTo(i);
                    setOverview(false);
                  }}
                  className={`panel rounded-2xl p-4 text-left transition ${
                    i === index ? "panel-accent" : ""
                  }`}
                >
                  <p className="text-xs tracking-[0.22em] text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-display mt-2 text-base leading-snug">{title}</p>
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
