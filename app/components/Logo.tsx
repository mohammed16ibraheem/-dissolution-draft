import Image from "next/image";

type LogoProps = {
  /** `header` for chrome; `cover` for brand-first cover; or a pixel height. */
  size?: "header" | "cover" | number;
  className?: string;
};

const PRESETS = {
  header: { height: 40, width: 40, pad: "p-[2px]", radius: "rounded-[0.7rem]" },
  cover: { height: 80, width: 80, pad: "p-1.5", radius: "rounded-2xl" },
} as const;

export function Logo({ size = "header", className = "" }: LogoProps) {
  const preset =
    typeof size === "number"
      ? {
          height: size,
          width: size,
          pad: size >= 80 ? "p-2" : "p-[2px]",
          radius: size >= 80 ? "rounded-2xl" : "rounded-[0.7rem]",
        }
      : PRESETS[size];

  return (
    <span
      className={`logo-badge inline-flex shrink-0 items-center justify-center overflow-hidden bg-[#eef2f7] shadow-[0_6px_22px_rgba(0,0,0,0.25)] ring-1 ring-white/15 ${preset.pad} ${preset.radius} ${className}`}
      style={{ width: preset.width, height: preset.height }}
    >
      <Image
        src="/mdbc-logo.png"
        alt="MDBC — Manar Digital Business Company"
        width={800}
        height={800}
        className="h-full w-full scale-[1.06] object-contain object-center"
        priority
      />
    </span>
  );
}
