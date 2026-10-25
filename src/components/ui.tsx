import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export const wrap = "mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10";
export const sectionSpace = "py-16 lg:py-20";
export const heading =
  "grad-text font-heading text-[clamp(2.6rem,min(4.4vw,8svh),4rem)] font-semibold uppercase leading-[0.98] tracking-[-0.02em] pb-1";
export const serif =
  "shine-text font-serif font-normal lowercase italic tracking-[-0.055em]";

export function Brand() {
  return (
    <a
      href="#home"
      aria-label="Neelkanth Gym home"
      className="inline-flex shrink-0 items-center gap-2.5 sm:gap-3"
    >
      <Image
        src="/images/logo-dark-v6.png"
        alt="Neelkanth Gym"
        width={640}
        height={226}
        className="h-[4.25rem] w-auto sm:h-[5rem] [[data-theme=light]_&]:hidden"
      />
      <Image
        src="/images/logo-light-v6.png"
        alt=""
        aria-hidden="true"
        width={640}
        height={226}
        className="hidden h-[4.25rem] w-auto sm:h-[5rem] [[data-theme=light]_&]:block"
      />
    </a>
  );
}

export function Button({
  children,
  className = "",
  dark = false,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { dark?: boolean }) {
  return (
    <a
      {...props}
      className={`btn-shine group inline-flex min-h-13 items-center justify-center gap-6 rounded-full px-6 py-3.5 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-offset-4 sm:text-base ${dark ? "bg-ink text-[#fffdf3] hover:bg-[#262626]" : "bg-accent text-ink hover:bg-[#ffe761]"} ${className}`}
    >
      {children}
      <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:rotate-45" />
    </a>
  );
}

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="glass mb-5 inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-4 text-xs font-semibold tracking-[0.08em] text-foreground/85 sm:text-sm">
      <span className="pulse-dot relative size-2 rounded-full bg-accent" />
      <span>
        {number} / {children}
      </span>
    </div>
  );
}
