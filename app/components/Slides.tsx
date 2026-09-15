"use client";

import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  BarChart3,
  Building2,
  Calculator,
  CalendarRange,
  ClipboardCheck,
  ClipboardList,
  DoorOpen,
  FileCheck,
  FileSignature,
  Filter,
  GitBranch,
  Handshake,
  Headphones,
  Landmark,
  Lock,
  MessageCircleQuestion,
  Package,
  Percent,
  Repeat,
  Scale,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Unlock,
  UserRound,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import {
  BulletList,
  Card,
  ContentSlide,
  IconMark,
  Pill,
  SlideVisual,
  Stagger,
  staggerItem,
} from "./ui";

export const SLIDE_TITLES = [
  "Cover",
  "Partnership Opportunity",
  "What We Take to Market",
  "Revenue Model",
  "Roles & Accountability",
  "Operating Model",
  "Commission Model",
  "Commission Example",
  "Lead Attribution & AMC",
  "Commercial Guardrails",
  "Opening the Conversation",
  "Pipeline & Governance",
  "First 90 Days",
  "What We Need to Agree",
  "The Goal",
];

export function SlideCover() {
  return (
    <div className="flex h-full min-h-0 flex-col justify-between gap-3 px-[clamp(1.1rem,5.5vw,5.5rem)] py-[clamp(0.35rem,1.8vh,1.1rem)]">
      <div className="flex shrink-0 items-center justify-between gap-4">
        <Pill>Confidential · Internal Discussion</Pill>
        <p className="text-[10px] tracking-[0.22em] text-[var(--muted)] uppercase sm:text-xs">
          15 September 2026
        </p>
      </div>

      <div className="min-h-0 max-w-5xl flex-1 content-center">
        <Logo size="cover" className="mb-3 sm:mb-5" />
        <p className="font-display text-xs tracking-[0.42em] text-[var(--teal)] uppercase sm:text-sm">
          MDBC × Osama Naseem
        </p>
        <div className="mt-3 h-px w-24 bg-[var(--gold)] sm:mt-4" />
        <h1 className="font-display mt-3 text-[clamp(1.85rem,5.2vw,5.2rem)] leading-[0.96] font-semibold tracking-tight sm:mt-5">
          External Business
          <br />
          <span className="gold-text">Partnership Model</span>
        </h1>
        <p className="mt-3 max-w-2xl text-[clamp(0.88rem,1.35vw,1.2rem)] leading-relaxed text-[var(--muted)] sm:mt-5">
          Turning relationships into qualified opportunities, profitable delivery
          and recurring customer accounts.
        </p>
      </div>

      <Stagger className="grid shrink-0 items-stretch gap-3 md:grid-cols-3 md:gap-4">
        {[
          {
            k: "01",
            t: "Market Access",
            d: "Osama opens doors and develops decision-maker relationships.",
            icon: Handshake,
          },
          {
            k: "02",
            t: "MDBC Delivery",
            d: "Discovery, solution, pricing, contracting and implementation.",
            icon: Wrench,
          },
          {
            k: "03",
            t: "5% of Profit",
            d: "Commission on collected, commissionable profit — not revenue.",
            icon: Percent,
          },
        ].map((item) => (
          <Card key={item.k} className="min-h-[7.5rem]">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs tracking-[0.28em] text-[var(--gold)]">{item.k}</p>
              <IconMark icon={item.icon} />
            </div>
            <h3 className="font-display mt-2 text-lg sm:mt-2.5 sm:text-xl">{item.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.d}</p>
          </Card>
        ))}
      </Stagger>
    </div>
  );
}

export function SlideOpportunity() {
  return (
    <ContentSlide
      kicker="01 · Partnership"
      title="A business-development partnership — not just a referral arrangement."
      lead="Osama originates the relationship. MDBC owns the solution and delivery. Together we build recurring customer accounts."
    >
      <Stagger className="flex min-h-0 flex-1 flex-col gap-3">
        <SlideVisual
          src="/presentation/market-access-delivery.png"
          alt="Market access opens the door; MDBC delivers the solution"
          className="h-[clamp(5rem,14vh,8rem)]"
        />
        <div className="grid min-h-0 flex-1 items-stretch gap-3 xl:grid-cols-3 xl:gap-4">
          <Card className="min-h-0">
            <div className="flex items-center gap-3">
              <IconMark icon={Handshake} />
              <p className="text-xs tracking-[0.22em] text-[var(--gold)] uppercase">Osama brings</p>
            </div>
            <BulletList
              compact
              items={[
                "Market relationships",
                "Access to decision makers",
                "Qualified introductions",
                "Commercial intelligence",
                "Follow-up and relationship development",
              ]}
            />
          </Card>
          <Card tone="teal" className="min-h-0">
            <div className="flex items-center gap-3">
              <IconMark icon={Building2} tone="teal" />
              <p className="text-xs tracking-[0.22em] text-[var(--teal)] uppercase">MDBC brings</p>
            </div>
            <BulletList
              compact
              items={[
                "Discovery & solution design",
                "Technical capability",
                "Pricing & proposal",
                "Contracting & delivery",
                "Support & account expansion",
              ]}
            />
          </Card>
          <Card tone="gold" className="min-h-0">
            <div className="flex items-center gap-3">
              <IconMark icon={Target} />
              <p className="text-xs tracking-[0.22em] text-[var(--gold-soft)] uppercase">Joint outcome</p>
            </div>
            <BulletList
              compact
              items={[
                "External customer acquisition",
                "Profitable projects",
                "Recurring AMC revenue",
                "Cross-sell across the stack",
                "Long-term customer accounts",
              ]}
            />
          </Card>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/4 px-4 py-1.5 text-center text-[10px] tracking-[0.16em] text-[var(--gold-soft)] uppercase sm:gap-3 sm:px-5 sm:py-2 sm:text-xs">
          Relationships <Arrow /> Solutions <Arrow /> Revenue <Arrow /> Recurring accounts
        </div>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideMarket() {
  const pillars: { n: string; t: string; icon: LucideIcon; items: string[] }[] = [
    {
      n: "01",
      t: "ERP & Business Applications",
      icon: Landmark,
      items: ["Odoo ERP", "Process automation", "Modules & customization", "Integrations", "Reporting", "Ongoing Odoo support"],
    },
    {
      n: "02",
      t: "AI & Software Solutions",
      icon: Sparkles,
      items: ["AI agents", "Workflow automation", "Custom software", "Mobile apps", "Web / desktop applications", "Data-led solutions"],
    },
    {
      n: "03",
      t: "Infrastructure & Security",
      icon: Shield,
      items: ["Networks & Wi-Fi", "Servers & cloud", "Cybersecurity", "Firewall", "CCTV", "Structured cabling"],
    },
    {
      n: "04",
      t: "Managed IT Services",
      icon: Headphones,
      items: ["End-user IT", "Infrastructure support", "Security support", "Odoo support", "AMC / SLA", "Preventive maintenance"],
    },
  ];

  return (
    <ContentSlide
      kicker="02 · Portfolio"
      title="What we take to market"
      lead="Four customer conversations cover the full MDBC external service portfolio."
    >
      <Stagger className="grid min-h-0 flex-1 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((p) => (
          <Card key={p.n}>
            <div className="flex items-start justify-between gap-3">
              <p className="gold-text font-display text-xl sm:text-2xl">{p.n}</p>
              <IconMark icon={p.icon} />
            </div>
            <h3 className="font-display mt-3 text-base leading-snug sm:text-lg">{p.t}</h3>
            <BulletList items={p.items} compact />
          </Card>
        ))}
      </Stagger>
    </ContentSlide>
  );
}

export function SlideRevenue() {
  const stages: { t: string; s: string; d: string; icon: LucideIcon }[] = [
    { t: "Land", s: "Project Revenue", d: "Odoo · CCTV · Network · Software · AI · Cloud", icon: Target },
    { t: "Deliver", s: "Hardware & Licensing", d: "Equipment · licences · third-party products", icon: Package },
    { t: "Support", s: "Recurring AMC", d: "Managed IT · Odoo · Infrastructure · Security", icon: Headphones },
    { t: "Expand", s: "Change Requests", d: "New modules · branches · reports · integrations", icon: TrendingUp },
  ];

  return (
    <ContentSlide
      kicker="03 · Economics"
      title="Revenue model"
      lead="The first project opens the account; recurring support and expansion build lifetime value."
    >
      <Stagger className="flex min-h-0 flex-1 flex-col gap-3">
        <SlideVisual
          src="/presentation/revenue-flywheel.png"
          alt="Revenue flywheel: Land, Deliver, Support, Expand"
          className="h-[clamp(5rem,14vh,8rem)]"
        />
        <div className="grid min-h-0 flex-1 items-stretch gap-3 md:grid-cols-4 md:gap-4">
          {stages.map((stage, i) => (
            <Card key={stage.t} className="min-h-0">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] tracking-[0.28em] text-[var(--gold)]">
                  STAGE 0{i + 1}
                </p>
                <IconMark icon={stage.icon} tone={i % 2 ? "teal" : "gold"} />
              </div>
              <h3 className="font-display mt-2 text-lg sm:mt-2.5 sm:text-xl">{stage.t}</h3>
              <p className="mt-1 text-sm text-[var(--teal)]">{stage.s}</p>
              <p className="mt-auto pt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                {stage.d}
              </p>
            </Card>
          ))}
        </div>
        <p className="shrink-0 text-center text-xs tracking-[0.08em] text-[var(--gold-soft)] sm:text-sm">
          Commercial objective: convert transactions into recurring MDBC customer accounts.
        </p>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideRoles() {
  return (
    <ContentSlide
      kicker="04 · Ownership"
      title="Roles & accountability"
      lead="Clear ownership protects customer experience, margin and delivery quality."
    >
      <Stagger className="grid min-h-0 flex-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
        <Card>
          <div className="flex items-start gap-3">
            <IconMark icon={UserRound} />
            <p className="text-xs tracking-[0.2em] text-[var(--gold)] uppercase">
              Osama Naseem · Business Development Partner
            </p>
          </div>
          <BulletList
            compact
            items={[
              "Identify external prospects",
              "Open decision-maker relationships",
              "Register and qualify opportunities",
              "Facilitate discovery meetings",
              "Support proposal follow-up",
              "Help navigate the customer decision process",
              "Develop the relationship and identify cross-sell",
            ]}
          />
          <p className="mt-auto border-t border-[var(--line)] pt-3 text-sm leading-relaxed text-[var(--rose)] sm:pt-4">
            Not authorized to independently commit technical scope, price, discount or delivery dates.
          </p>
        </Card>
        <Card tone="teal">
          <div className="flex items-start gap-3">
            <IconMark icon={Building2} tone="teal" />
            <p className="text-xs tracking-[0.2em] text-[var(--teal)] uppercase">
              MDBC · Solution & Delivery Owner
            </p>
          </div>
          <BulletList
            compact
            items={[
              "Technical discovery & site survey",
              "Solution architecture and feasibility",
              "Costing, pricing and proposal",
              "Commercial approval and contracting",
              "Project management & procurement",
              "Implementation, testing and training",
              "Support, SLA and account management",
            ]}
          />
          <p className="mt-auto border-t border-[var(--line)] pt-3 text-sm leading-relaxed text-[var(--gold-soft)] sm:pt-4">
            MDBC remains the contracting, invoicing and delivery entity.
          </p>
        </Card>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideOperating() {
  const steps: { n: string; t: string; icon: LucideIcon }[] = [
    { n: "1", t: "Register lead", icon: ClipboardList },
    { n: "2", t: "Qualify", icon: Filter },
    { n: "3", t: "Discovery", icon: Search },
    { n: "4", t: "Solution & price", icon: Calculator },
    { n: "5", t: "Proposal & win", icon: FileCheck },
    { n: "6", t: "Deliver", icon: Truck },
    { n: "7", t: "Collect", icon: Banknote },
    { n: "8", t: "Commission", icon: Percent },
  ];

  return (
    <ContentSlide
      kicker="05 · Process"
      title="Opportunity-to-commission operating model"
      lead="One transparent flow from lead origination to realized profit."
    >
      <Stagger className="grid shrink-0 grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8 xl:gap-2.5">
        {steps.map((step) => (
          <motion.div
            key={step.n}
            variants={staggerItem}
            className="panel flex min-h-[88px] flex-col items-center justify-center rounded-2xl px-2 py-3 text-center sm:min-h-[100px] sm:py-3.5"
          >
            <IconMark icon={step.icon} />
            <span className="font-display mt-1.5 text-xl text-[var(--gold)] sm:mt-2 sm:text-2xl">{step.n}</span>
            <p className="mt-1 text-[11px] leading-snug sm:text-xs">{step.t}</p>
          </motion.div>
        ))}
      </Stagger>
      <Stagger className="grid shrink-0 items-stretch gap-3 md:grid-cols-2 md:gap-4">
        <Card className="justify-center !h-auto min-h-[5.5rem]">
          <div className="flex items-start gap-3">
            <IconMark icon={Wallet} />
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Commission becomes payable only after MDBC receives the corresponding customer payment.
            </p>
          </div>
        </Card>
        <Card tone="gold" className="justify-center !h-auto min-h-[5.5rem]">
          <div className="flex items-start gap-3">
            <IconMark icon={ClipboardCheck} />
            <p className="text-sm leading-relaxed text-[var(--cream)]/90">
              Lead registration + CRM visibility eliminates ambiguity over attribution and gives both sides a shared pipeline.
            </p>
          </div>
        </Card>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideCommission() {
  return (
    <ContentSlide
      kicker="06 · Economics"
      title="Commission model"
      lead="5% of Commissionable Profit on eligible Osama-originated external business."
    >
      <Stagger className="flex min-h-0 flex-1 flex-col gap-3">
        <SlideVisual
          src="/presentation/commission-formula.png"
          alt="Commissionable profit formula: revenue less direct costs, then 5% to partner"
          className="h-[clamp(4.5rem,12vh,7.25rem)]"
        />
        <div className="grid min-h-0 flex-1 items-stretch gap-3 xl:grid-cols-3 xl:gap-4">
          <Card>
            <div className="flex items-center gap-3">
              <IconMark icon={Scale} />
              <p className="text-xs tracking-[0.22em] text-[var(--gold)] uppercase">The principle</p>
            </div>
            <div className="mt-4 flex min-h-0 flex-1 flex-col justify-center space-y-2.5 text-sm sm:space-y-3">
              <Row label="Customer revenue" note="actually collected" />
              <p className="text-center text-[var(--gold)]">less</p>
              <Row label="Direct costs" note="attributable to delivering the business" />
              <div className="hairline my-2" />
              <p className="font-display text-center text-lg text-[var(--gold-soft)] sm:text-xl">
                Commissionable Profit
              </p>
            </div>
          </Card>
          <Card tone="gold" className="items-center justify-center text-center">
            <IconMark icon={Percent} />
            <p className="mt-3 text-xs tracking-[0.28em] uppercase">Osama receives</p>
            <p className="font-display gold-text mt-2 text-[clamp(3.2rem,6.5vw,5rem)] leading-none">
              5%
            </p>
            <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">
              of Commissionable Profit. Payment follows customer collection. Milestone collections can
              trigger proportionate commission.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <IconMark icon={Calculator} tone="teal" />
              <p className="text-xs tracking-[0.22em] text-[var(--teal)] uppercase">Direct cost examples</p>
            </div>
            <BulletList
              compact
              items={[
                "Hardware / products",
                "Third-party licences",
                "Subcontractors",
                "External consultants",
                "Project-specific manpower",
                "Direct logistics / travel",
                "Other agreed direct project costs",
              ]}
            />
            <p className="mt-3 text-xs text-[var(--muted)]">
              General MDBC overhead is not normally allocated.
            </p>
          </Card>
        </div>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideExample() {
  const rows = [
    { l: "Customer contract", v: "SAR 250,000", tone: "base" as const },
    { l: "Hardware", v: "(SAR 90,000)", tone: "cost" as const },
    { l: "Subcontractor", v: "(SAR 30,000)", tone: "cost" as const },
    { l: "Project-specific implementation", v: "(SAR 20,000)", tone: "cost" as const },
    { l: "Other direct costs", v: "(SAR 10,000)", tone: "cost" as const },
    { l: "Commissionable profit", v: "SAR 100,000", tone: "profit" as const },
    { l: "Osama commission @ 5%", v: "SAR 5,000", tone: "gold" as const },
    { l: "Balance to MDBC", v: "SAR 95,000", tone: "teal" as const },
  ];

  return (
    <ContentSlide
      kicker="07 · Illustration"
      title="Commission example"
      lead="Illustrative project economics — transparency is built into the model."
    >
      <div className="grid min-h-0 flex-1 items-stretch gap-4 lg:grid-cols-[1.4fr_0.8fr] lg:gap-6">
        <Card className="overflow-hidden p-0">
          <Stagger className="divide-y divide-white/8">
            {rows.map((row) => (
              <motion.div
                key={row.l}
                variants={staggerItem}
                className="flex items-center justify-between gap-4 px-5 py-2.5 sm:px-6 sm:py-3"
              >
                <span
                  className={
                    row.tone === "profit" || row.tone === "gold"
                      ? "text-sm font-medium sm:text-base"
                      : "text-sm text-[var(--muted)] sm:text-base"
                  }
                >
                  {row.l}
                </span>
                <span
                  className={`font-display text-base sm:text-lg ${
                    row.tone === "gold"
                      ? "text-[var(--gold)]"
                      : row.tone === "teal"
                        ? "text-[var(--teal)]"
                        : row.tone === "profit"
                          ? "text-[var(--cream)]"
                          : row.tone === "cost"
                            ? "text-[var(--rose)]"
                            : ""
                  }`}
                >
                  {row.v}
                </span>
              </motion.div>
            ))}
          </Stagger>
        </Card>
        <Stagger className="flex h-full min-h-0 flex-col gap-3 sm:gap-4">
          <Card tone="gold" className="flex-1 items-center justify-center text-center">
            <IconMark icon={Wallet} />
            <p className="mt-3 text-xs tracking-[0.22em] uppercase">Osama</p>
            <p className="font-display mt-2 text-3xl sm:text-4xl">SAR 5,000</p>
            <p className="mt-2 text-sm text-[var(--muted)]">5% of SAR 100,000 profit</p>
          </Card>
          <Card tone="teal" className="flex-1 items-center justify-center text-center">
            <IconMark icon={Building2} tone="teal" />
            <p className="mt-3 text-xs tracking-[0.22em] uppercase">MDBC</p>
            <p className="font-display mt-2 text-3xl sm:text-4xl">SAR 95,000</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Retained project profit</p>
          </Card>
          <p className="shrink-0 px-2 text-sm leading-relaxed text-[var(--muted)]">
            Direct costs of SAR 150,000 are stripped out first. Commission is never paid on hardware, licences or pass-through spend.
          </p>
        </Stagger>
      </div>
    </ContentSlide>
  );
}

export function SlideAttribution() {
  return (
    <ContentSlide
      kicker="08 · Attribution"
      title="Lead attribution, repeat business & AMC"
      lead="Reward account origination without creating an indefinite commission obligation."
    >
      <Stagger className="grid min-h-0 flex-1 items-stretch gap-3 xl:grid-cols-3 xl:gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <IconMark icon={ClipboardCheck} />
            <p className="text-xs tracking-[0.22em] text-[var(--gold)] uppercase">Lead registration</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Every opportunity is registered before substantive pursuit.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[var(--cream)]/85">
            {["Company", "Decision maker", "Requirement", "Date", "Introduced by", "Next action"].map(
              (f) => (
                <span key={f} className="rounded-lg border border-white/8 bg-white/4 px-3 py-2">
                  {f}
                </span>
              ),
            )}
          </div>
          <p className="mt-auto pt-4 text-sm text-[var(--teal)]">
            MDBC confirms: “Registered — Osama Originated.”
          </p>
        </Card>
        <Card tone="gold">
          <div className="flex items-center gap-3">
            <IconMark icon={CalendarRange} />
            <p className="text-xs tracking-[0.22em] uppercase">Account attribution</p>
          </div>
          <p className="font-display mt-4 text-3xl sm:mt-5 sm:text-4xl">12 months</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Recommended starting position: 12-month attribution from first commercial engagement. Qualifying cross-sell during that period remains commissionable.
          </p>
          <p className="mt-auto pt-4 text-sm text-[var(--gold-soft)]">12 vs 24 months to be agreed.</p>
        </Card>
        <Card tone="teal">
          <div className="flex items-center gap-3">
            <IconMark icon={Repeat} tone="teal" />
            <p className="text-xs tracking-[0.22em] uppercase">Recurring AMC</p>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Initial AMC contract period is commissionable.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Renewals: define separately — stop, reduce %, or continue only with active partner involvement.
          </p>
          <p className="mt-auto pt-4 text-sm text-[var(--gold-soft)]">
            Avoid perpetual automatic commission.
          </p>
        </Card>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideGuardrails() {
  const rules: { t: string; d: string; icon: LucideIcon }[] = [
    {
      t: "External business only",
      d: "Diamond Star internal AMC and internal Group business are explicitly outside Osama’s commission model.",
      icon: Shield,
    },
    {
      t: "MDBC pricing authority",
      d: "Osama may discuss budgets; final scope, price, discounts and delivery commitments require MDBC approval.",
      icon: Scale,
    },
    {
      t: "Customer contracts with MDBC",
      d: "MDBC contracts, invoices, collects, delivers and supports. Osama receives attribution and commission.",
      icon: FileSignature,
    },
    {
      t: "Existing accounts",
      d: "Existing active MDBC opportunities do not automatically become commissionable; new opportunities are agreed upfront.",
      icon: Users,
    },
    {
      t: "Non-exclusive initially",
      d: "MDBC can sell directly and through other channels. Osama is rewarded for his registered qualifying business.",
      icon: Unlock,
    },
    {
      t: "Confidentiality / non-circumvention",
      d: "Protect MDBC pricing, IP and customer information; protect legitimate registered opportunities from circumvention.",
      icon: Lock,
    },
  ];

  return (
    <ContentSlide
      kicker="09 · Guardrails"
      title="Commercial guardrails"
      lead="Simple rules that keep the partnership scalable and dispute-resistant."
    >
      <Stagger className="grid min-h-0 flex-1 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {rules.map((rule, i) => (
          <Card key={rule.t}>
            <div className="flex items-start justify-between gap-3">
              <p className="gold-text font-display text-lg sm:text-xl">0{i + 1}</p>
              <IconMark icon={rule.icon} />
            </div>
            <h3 className="font-display mt-3 text-base sm:text-lg">{rule.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:mt-3">{rule.d}</p>
          </Card>
        ))}
      </Stagger>
    </ContentSlide>
  );
}

export function SlideConversation() {
  const qs = [
    "How are finance, inventory, purchasing and sales managed today?",
    "Are teams still dependent on Excel or disconnected systems?",
    "Who manages your IT infrastructure and recurring support today?",
    "Are network, CCTV, server or security issues affecting operations?",
    "Can management get the reports it needs quickly and reliably?",
    "Which repetitive manual processes would you most like to automate?",
  ];

  return (
    <ContentSlide
      kicker="10 · Sales motion"
      title="How Osama opens the customer conversation"
      lead="Sell the business problem first — MDBC handles the technical solution."
    >
      <Stagger className="grid min-h-0 flex-1 items-stretch gap-2.5 sm:grid-cols-2 sm:gap-3">
        {qs.map((q, i) => (
          <motion.div key={q} variants={staggerItem} className="panel flex h-full items-start gap-4 rounded-2xl p-3.5 sm:p-4">
            <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--gold)]">
              {i + 1}
            </span>
            <p className="pt-1.5 text-[0.9rem] leading-snug sm:text-[0.98rem]">{q}</p>
          </motion.div>
        ))}
      </Stagger>
      <blockquote className="panel-gold flex shrink-0 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center sm:px-6 sm:py-5">
        <MessageCircleQuestion className="hidden h-5 w-5 shrink-0 text-[var(--gold)] sm:block" strokeWidth={1.75} />
        <p className="font-display text-base text-[var(--gold-soft)] italic sm:text-lg">
          “I work with MDBC. Let me bring their technical team in to assess this properly.”
        </p>
      </blockquote>
    </ContentSlide>
  );
}

export function SlidePipeline() {
  const stages = [
    "Lead",
    "Qualified",
    "Discovery",
    "Solutioning",
    "Proposal",
    "Negotiation",
    "Won / Lost",
    "Delivery",
    "Collection",
  ];

  return (
    <ContentSlide
      kicker="11 · Governance"
      title="Pipeline & governance"
      lead="Keep the process disciplined — without making it bureaucratic."
    >
      <Stagger className="flex shrink-0 flex-wrap gap-2">
        {stages.map((s, i) => (
          <motion.span
            key={s}
            variants={staggerItem}
            className="rounded-full border border-[var(--line)] bg-white/4 px-3 py-1.5 text-xs tracking-wide"
          >
            <span className="mr-1.5 text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </motion.span>
        ))}
      </Stagger>
      <Stagger className="grid min-h-0 flex-1 items-stretch gap-4 lg:grid-cols-2">
        <Card>
          <div className="flex items-center gap-3">
            <IconMark icon={GitBranch} />
            <p className="text-xs tracking-[0.22em] text-[var(--gold)] uppercase">
              Weekly 30-minute pipeline review
            </p>
          </div>
          <BulletList
            compact
            items={[
              "New leads & qualification",
              "Customer meetings",
              "Proposal status",
              "Commercial blockers",
              "Next actions & ownership",
              "Expected collection / commission",
            ]}
          />
        </Card>
        <Card tone="teal">
          <div className="flex items-center gap-3">
            <IconMark icon={BarChart3} tone="teal" />
            <p className="text-xs tracking-[0.22em] text-[var(--teal)] uppercase">
              Core pipeline metrics
            </p>
          </div>
          <BulletList
            compact
            items={[
              "Qualified pipeline value",
              "Proposals submitted",
              "Business won",
              "Revenue collected",
              "Project profit",
              "AMC / recurring revenue",
              "Commission earned",
            ]}
          />
        </Card>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideNinety() {
  const months: { m: string; t: string; icon: LucideIcon; items: string[] }[] = [
    {
      m: "Month 1",
      t: "Build",
      icon: ClipboardList,
      items: [
        "Target-account list",
        "Warm introductions",
        "Discovery meetings",
        "Test which offers resonate",
        "Establish CRM / lead registration",
        "Build first qualified pipeline",
      ],
    },
    {
      m: "Month 2",
      t: "Qualify",
      icon: Filter,
      items: [
        "Deepen qualified pipeline",
        "Technical discovery",
        "Site visits where required",
        "Submit proposals",
        "Refine sector-specific propositions",
        "Build follow-up cadence",
      ],
    },
    {
      m: "Month 3",
      t: "Convert",
      icon: Target,
      items: [
        "Close initial customers",
        "Deliver first wins strongly",
        "Identify AMC opportunities",
        "Cross-sell adjacent services",
        "Review economics and commission",
        "Scale what works",
      ],
    },
  ];

  return (
    <ContentSlide
      kicker="12 · Launch"
      title="First 90 days"
      lead="Prove the acquisition engine, learn the market and convert the first accounts."
    >
      <Stagger className="flex min-h-0 flex-1 flex-col gap-3">
        <SlideVisual
          src="/presentation/ninety-day-path.png"
          alt="90-day launch path: Build, Qualify, Convert"
          className="h-[clamp(4.25rem,11vh,6.75rem)]"
        />
        <div className="grid min-h-0 flex-1 items-stretch gap-3 xl:grid-cols-3 xl:gap-4">
          {months.map((month, i) => (
            <Card key={month.t} tone={i === 2 ? "gold" : i === 1 ? "teal" : "default"}>
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs tracking-[0.22em] uppercase">{month.m}</p>
                <IconMark icon={month.icon} tone={i === 1 ? "teal" : "gold"} />
              </div>
              <h3 className="font-display mt-2 text-xl sm:mt-3 sm:text-2xl">{month.t}</h3>
              <BulletList items={month.items} compact />
            </Card>
          ))}
        </div>
      </Stagger>
    </ContentSlide>
  );
}

export function SlideAgree() {
  const rows = [
    ["Relationship", "Non-exclusive Business Development Partner"],
    ["Scope", "Full external MDBC service portfolio; internal Diamond Star business excluded"],
    ["Commission", "5% of agreed Commissionable Profit"],
    ["Payment trigger", "After MDBC receives customer payment"],
    ["Pricing authority", "MDBC"],
    ["Lead attribution", "Formal registration; propose 12-month account attribution"],
    ["AMC treatment", "Initial contract commissionable; renewal rule to finalize"],
    ["Governance", "Weekly pipeline review + shared CRM / opportunity tracker"],
    ["Territory", "Primary market: Saudi Arabia"],
  ];

  return (
    <ContentSlide
      kicker="13 · Decision"
      title="What we need to agree today"
      lead="Commercial alignment first; formal documentation follows."
    >
      <Card className="min-h-0 flex-1 overflow-hidden p-0">
        <Stagger className="divide-y divide-white/8">
          {rows.map(([k, v]) => (
            <motion.div
              key={k}
              variants={staggerItem}
              className="grid gap-1 px-5 py-2.5 md:grid-cols-[200px_1fr] md:items-center md:gap-2 sm:px-6 sm:py-3"
            >
              <p className="text-[10px] tracking-[0.18em] text-[var(--gold)] uppercase sm:text-xs">{k}</p>
              <p className="text-[0.9rem] sm:text-[0.98rem]">{v}</p>
            </motion.div>
          ))}
        </Stagger>
      </Card>
    </ContentSlide>
  );
}

export function SlideClose() {
  const steps: { t: string; icon: LucideIcon }[] = [
    { t: "Open the door", icon: DoorOpen },
    { t: "Win the work", icon: Target },
    { t: "Deliver well", icon: Wrench },
    { t: "Grow the account", icon: TrendingUp },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col justify-between px-[clamp(1.1rem,5.5vw,5.5rem)] py-[clamp(0.5rem,2.5vh,1.5rem)]">
      <p className="text-[10px] tracking-[0.28em] text-[var(--teal)] uppercase sm:text-xs">
        Discussion Draft · 15 September 2026
      </p>
      <div>
        <p className="font-display text-sm tracking-[0.4em] text-[var(--gold)] uppercase">
          The Goal
        </p>
        <h2 className="font-display mt-3 max-w-4xl text-[clamp(1.7rem,4.2vw,3.8rem)] leading-[1.02] font-semibold sm:mt-4">
          Build customer accounts —
          <br />
          <span className="gold-text">not one-off transactions.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-lg">
          Osama creates market access. MDBC converts it into solutions, delivery, recurring revenue and long-term customer value.
        </p>
      </div>
      <Stagger className="flex flex-col gap-3">
        <SlideVisual
          src="/presentation/account-growth.png"
          alt="Customer account growth: Open, Win, Deliver, Grow"
          className="h-[clamp(4.5rem,12vh,7.5rem)]"
        />
        <div className="grid gap-3 sm:grid-cols-4">
          {steps.map((step, i) => (
            <Card key={step.t} className="px-4 py-3.5 text-center sm:py-4">
              <div className="flex justify-center">
                <IconMark icon={step.icon} />
              </div>
              <p className="mt-2 text-xs text-[var(--gold)]">0{i + 1}</p>
              <p className="font-display mt-1 text-base sm:text-lg">{step.t}</p>
            </Card>
          ))}
        </div>
      </Stagger>
    </div>
  );
}

export const SLIDES = [
  SlideCover,
  SlideOpportunity,
  SlideMarket,
  SlideRevenue,
  SlideRoles,
  SlideOperating,
  SlideCommission,
  SlideExample,
  SlideAttribution,
  SlideGuardrails,
  SlideConversation,
  SlidePipeline,
  SlideNinety,
  SlideAgree,
  SlideClose,
];

function Arrow() {
  return <span className="mx-1 text-[var(--gold)]">→</span>;
}

function Row({ label, note }: { label: string; note: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3">
      <p className="font-medium">{label}</p>
      <p className="text-xs text-[var(--muted)]">{note}</p>
    </div>
  );
}
