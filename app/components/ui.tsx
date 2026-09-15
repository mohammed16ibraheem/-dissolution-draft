"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.075, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1.5 text-[10px] font-semibold tracking-[0.28em] text-[var(--accent-soft)] uppercase sm:mb-2 sm:text-[11px]">
      {children}
    </p>
  );
}

export function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display max-w-4xl text-[clamp(1.35rem,2.6vw,2.45rem)] leading-[1.12] font-semibold tracking-tight text-[var(--cream)]">
      {children}
    </h2>
  );
}

export function SlideLead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 max-w-3xl text-[clamp(0.82rem,1.05vw,1.02rem)] leading-relaxed text-[var(--muted)]">
      {children}
    </p>
  );
}

export function IconMark({
  icon: Icon,
  tone = "accent",
  size = 20,
}: {
  icon: LucideIcon;
  tone?: "accent" | "gold" | "teal";
  size?: number;
}) {
  const accent = tone === "accent" || tone === "gold";
  return (
    <span
      className={`inline-grid h-9 w-9 shrink-0 place-items-center rounded-xl border ${
        accent
          ? "border-[var(--line)] bg-[rgba(255,255,255,0.08)] text-[var(--accent)]"
          : "border-[rgba(62,224,200,0.22)] bg-[rgba(62,224,200,0.08)] text-[var(--teal)]"
      }`}
    >
      <Icon size={size} strokeWidth={1.75} aria-hidden />
    </span>
  );
}

export function Card({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "gold" | "teal";
}) {
  const toneClass =
    tone === "accent" || tone === "gold"
      ? "panel-accent"
      : tone === "teal"
        ? "panel-teal"
        : "panel";
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2, transition: { duration: 0.3, ease: EASE } }}
      className={`flex h-full min-h-0 min-w-0 flex-col rounded-2xl p-3.5 sm:p-4 ${toneClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--line)] bg-white/5 px-3 py-1 text-[11px] tracking-[0.16em] text-[var(--accent-soft)] uppercase">
      {children}
    </span>
  );
}

export function BulletList({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  return (
    <ul
      className={
        compact
          ? "mt-2.5 space-y-1 sm:mt-3 sm:space-y-1.5"
          : "mt-3 space-y-1.5 sm:mt-4 sm:space-y-2"
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 leading-snug text-[var(--cream)]/90 ${
            compact
              ? "text-[0.8rem] sm:text-[0.86rem]"
              : "text-[0.84rem] sm:text-[0.92rem]"
          }`}
        >
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContentSlide({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col px-[clamp(1.1rem,4.8vw,4.75rem)] pt-[clamp(0.2rem,1vh,0.75rem)] pb-[clamp(0.2rem,0.9vh,0.65rem)]">
      <Kicker>{kicker}</Kicker>
      <SlideTitle>{title}</SlideTitle>
      <SlideLead>{lead}</SlideLead>
      <div className="mt-1.5 flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden sm:mt-2.5 sm:gap-3.5">
        {children}
      </div>
    </div>
  );
}

/**
 * Concept visual sized to the asset's 16:9 ratio.
 * Height drives width so diagrams fill the frame (no wide letterboxed strip).
 */
export function SlideVisual({
  src,
  alt,
  size = "md",
  className = "",
}: {
  src: string;
  alt: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const heightClass =
    size === "lg"
      ? "h-[clamp(7.75rem,21vh,12rem)]"
      : "h-[clamp(7.25rem,19vh,11rem)]";

  return (
    <motion.div
      variants={staggerItem}
      className={`relative mx-auto aspect-[16/9] w-auto max-w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--line)] bg-[rgba(8,14,26,0.55)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${heightClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center p-1 sm:p-1.5"
        sizes="(max-width: 900px) 88vw, 640px"
      />
    </motion.div>
  );
}
