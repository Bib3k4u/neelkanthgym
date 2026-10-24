"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ArrowLeft,
  UserRound,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Dumbbell,
  Flame,
  Home,
  Menu,
  Moon,
  Music2,
  Plus,
  Smartphone,
  Sun,
  Target,
  Users,
  Utensils,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { inquiry, programs, branches, trainersByBranch } from "@/lib/gym";
import { Brand, wrap } from "@/components/ui";

const nav = [
  { label: "Home", href: "#home" },
  { label: "The club", href: "#the-club" },
  { label: "Programs", href: "#programs" },
  { label: "Our trainers", href: "#trainers" },
  { label: "Member app", href: "#member-app" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Visit us", href: "#visit" },
];
const subscribeTheme = (callback: () => void) => {
  const onStorage = (event: StorageEvent) => {
    if (event.key === "neelkanth-theme") {
      document.documentElement.dataset.theme =
        event.newValue === "light" ? "light" : "dark";
      callback();
    }
  };
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("themechange", callback);
    window.removeEventListener("storage", onStorage);
  };
};
const getTheme = () => document.documentElement.dataset.theme || "dark";

export function Header() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const marker =
        (headerRef.current?.getBoundingClientRect().height ?? 72) +
        Math.min(window.innerHeight * 0.2, 140);
      let current = nav[0].href;
      for (const item of nav) {
        const section = document.getElementById(item.href.slice(1));
        if (section && section.getBoundingClientRect().top <= marker) {
          current = item.href;
        }
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8
      ) {
        current = nav[nav.length - 1].href;
      }
      setActiveHref(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    };
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    scheduleUpdate();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("neelkanth-theme", next);
    } catch {
      /* Theme remains usable without local storage. */
    }
    window.dispatchEvent(new Event("themechange"));
  };
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-2xl"
    >
      <div
        className={`${wrap} flex h-16 items-center justify-between gap-3 xl:h-18 xl:gap-5`}
      >
        <Brand />
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto border-b border-line bg-background p-4 xl:static xl:flex xl:max-h-none xl:flex-row xl:items-center xl:gap-1 xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveHref(item.href);
                setMenuOpen(false);
              }}
              aria-current={activeHref === item.href ? "location" : undefined}
              className={`group/nav relative rounded-lg px-3 py-3 text-base font-medium transition-colors duration-200 xl:py-2.5 xl:text-sm ${activeHref === item.href ? "text-foreground" : "text-muted hover:text-foreground"}`}
            >
              <span className="relative inline-block">
                {item.label}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-1.5 inset-x-0 h-0.5 origin-left rounded-full bg-accent-ink transition-transform duration-300 ease-out ${activeHref === item.href ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100 group-focus-visible/nav:scale-x-100"}`}
                />
              </span>
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid size-10 place-items-center rounded-full border border-line transition hover:bg-surface sm:size-11"
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>
          <a
            href={inquiry(
              "Hi Neelkanth Gym! I’d like to know about membership.",
            )}
            className="hidden min-h-11 items-center gap-5 rounded-full bg-accent px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#ffe761] sm:inline-flex"
          >
            Let’s talk <ArrowUpRight className="size-4" />
          </a>
          <button
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-10 place-items-center rounded-full border border-line sm:size-11 xl:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Motion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observed = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            if (reducedMotion.matches || !(entry.target instanceof HTMLElement))
              return;
            // Content stays visible by default. Only an element entering the
            // viewport receives a finite animation, never a hidden CSS state.
            const animation = entry.target.animate(
              [
                { opacity: 0.4, transform: "translate3d(0, 28px, 0)" },
                { opacity: 1, transform: "translate3d(0, 0, 0)" },
              ],
              { duration: 850, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -36px 0px" },
    );
    const observeReveals = () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };
    // Next.js can stream section markup after this client component mounts.
    // Register those elements too, including after development refreshes.
    const mutations = new MutationObserver(observeReveals);
    mutations.observe(document.body, { childList: true, subtree: true });
    observeReveals();
    const cancelAnimations = () => {
      if (reducedMotion.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    reducedMotion.addEventListener("change", cancelAnimations);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.cancel());
      reducedMotion.removeEventListener("change", cancelAnimations);
    };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
      });
    };
    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        ".glass, .bg-glass, .program-card",
      );
      if (target) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }
      const tilt = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-tilt]",
      );
      if (tilt && event.pointerType === "mouse") {
        const rect = tilt.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateZ(0)`;
      }
    };
    const onLeave = (event: PointerEvent) => {
      const tilt = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-tilt]",
      );
      if (tilt) tilt.style.transform = "";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
    };
  }, []);
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

const icons = {
  dumbbell: Dumbbell,
  target: Target,
  users: Users,
  wind: Wind,
  music: Music2,
  zap: Zap,
};
const filters = ["All programs", "Strength", "Energy", "Balance"];
export function Programs() {
  const [filter, setFilter] = useState("All programs");
  const [position, setPosition] = useState({
    index: 0,
    previous: false,
    next: true,
    progress: 0,
  });
  const trackRef = useRef<HTMLDivElement>(null);
  const visible = programs.filter(
    (program) => filter === "All programs" || program.category === filter,
  );
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const card = track.firstElementChild as HTMLElement | null;
      const max = track.scrollWidth - track.clientWidth;
      const step = (card?.getBoundingClientRect().width || 1) + 24;
      const index = Math.round(track.scrollLeft / step);
      const next = {
        index,
        previous: track.scrollLeft > 5,
        next: track.scrollLeft < max - 5,
        progress: max > 0 ? track.scrollLeft / max : 1,
      };
      setPosition((current) =>
        current.index === next.index &&
        current.previous === next.previous &&
        current.next === next.next &&
        Math.abs(current.progress - next.progress) < 0.005
          ? current
          : next,
      );
    };
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    const frame = requestAnimationFrame(update);
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, [filter]);
  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({
      left:
        direction *
        ((card?.getBoundingClientRect().width || track.clientWidth) + 24),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Training programs"
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
        <div
          role="group"
          aria-label="Filter training programs"
          className="flex flex-wrap gap-2"
        >
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => {
                setFilter(item);
                trackRef.current?.scrollTo({ left: 0, behavior: "instant" });
              }}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${filter === item ? "border-accent bg-accent text-ink" : "border-line bg-transparent text-muted hover:border-muted hover:text-foreground"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="mr-2 hidden text-sm text-muted sm:block">
            Find your fit
          </span>
          <button
            onClick={() => move(-1)}
            disabled={!position.previous}
            aria-label="Previous program"
            className="grid size-12 place-items-center rounded-full border border-line bg-background transition hover:border-foreground disabled:opacity-30"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            onClick={() => move(1)}
            disabled={!position.next}
            aria-label="Next program"
            className="grid size-12 place-items-center rounded-full border border-foreground bg-foreground text-background transition hover:bg-accent hover:text-ink disabled:opacity-30"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        tabIndex={0}
        aria-label="Swipe or use the arrow buttons to explore programs"
        onKeyDown={(event) => {
          if (
            event.target === event.currentTarget &&
            (event.key === "ArrowLeft" || event.key === "ArrowRight")
          ) {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="program-track flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {visible.map((program) => {
          const Icon = icons[program.icon];
          const index = programs.indexOf(program);
          return (
            <article
              key={program.name}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${programs.length}: ${program.name}`}
              className="program-card group flex basis-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-[1.25rem] border border-line bg-background transition duration-300 hover:-translate-y-1 hover:border-accent-ink/40 hover:shadow-lg sm:basis-[47%] lg:basis-[31.5%]"
            >
              <div className="relative isolate h-64 overflow-hidden bg-[#282f23] sm:h-72">
                {index < 3 ? (
                  <Image
                    src={
                      index === 1
                        ? "/images/gym-detail.webp"
                        : "/images/gym-hero.webp"
                    }
                    alt=""
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 47vw, 32vw"
                    className={`-z-20 object-cover transition-transform duration-700 group-hover:scale-105 ${index === 2 ? "object-left" : "object-right"}`}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 -z-20 grid place-items-center ${index === 4 ? "bg-[#3b3626]" : index === 5 ? "bg-[#263c36]" : "bg-[#303b2b]"}`}
                  >
                    <div className="absolute size-44 rounded-full border border-white/15" />
                    <div className="absolute size-64 rounded-full border border-white/10" />
                    <div className="absolute size-84 rounded-full border border-white/5" />
                    <Icon
                      className="size-24 text-[#e5e8ce] transition-transform duration-500 group-hover:-rotate-6"
                      strokeWidth={1}
                    />
                  </div>
                )}
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/55 via-transparent to-black/15" />
                <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-xs font-medium text-white backdrop-blur-lg">
                  <Icon className="size-4" />
                  {program.category}
                </span>
                <span className="absolute right-5 bottom-4 font-heading text-6xl font-medium text-white/80">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-[26px] font-bold tracking-[-0.05em] sm:text-[28px]">
                  {program.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {program.description}
                </p>
                <a
                  href={inquiry(
                    `Hi Neelkanth Gym! I’m interested in ${program.name.toLowerCase()}. Could you share more details?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-line pt-5 text-sm font-bold"
                >
                  <span className="sr-only">Ask about </span>
                  <span aria-hidden="true" className="mt-5">
                    Let’s get started
                  </span>
                  <span className="sr-only">{program.name}</span>
                  <span className="mt-5 grid size-10 place-items-center rounded-full border border-line transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <ArrowUpRight className="size-5" />
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-between gap-8">
        <p className="shrink-0 text-sm text-muted" aria-live="polite">
          {String(position.index + 1).padStart(2, "0")}{" "}
          <span className="mx-2 text-muted/50">/</span>{" "}
          {String(visible.length).padStart(2, "0")}
        </p>
        <div
          className="h-0.5 w-full max-w-xs overflow-hidden rounded-full bg-line"
          aria-hidden="true"
        >
          <div
            className="h-full rounded-full bg-accent-ink transition-[width] duration-300"
            style={{ width: `${20 + position.progress * 80}%` }}
          />
        </div>
        <span className="hidden text-sm text-muted sm:block">
          Your next chapter starts with a choice.
        </span>
      </div>
    </div>
  );
}

const tabs = [
  { label: "Workouts", icon: Dumbbell },
  { label: "Nutrition", icon: Utensils },
  { label: "Progress", icon: BarChart3 },
];
const appContent = {
  Workouts: {
    label: "YOUR WORKOUT PLAN",
    title: "Build your foundation.",
    items: [
      {
        icon: Dumbbell,
        title: "Train with a plan",
        sub: "Your personalized workouts",
      },
      {
        icon: Target,
        title: "Make every rep count",
        sub: "Log your sets and weights",
      },
      {
        icon: BarChart3,
        title: "See your progress",
        sub: "Track your performance",
      },
    ],
  },
  Nutrition: {
    label: "FUEL YOUR PROGRESS",
    title: "Eat well. Train better.",
    items: [
      {
        icon: Utensils,
        title: "Your daily meals",
        sub: "Keep your food log in one place",
      },
      {
        icon: Flame,
        title: "Nutrition, made clear",
        sub: "Understand what fuels you",
      },
      {
        icon: Target,
        title: "Make macros simple",
        sub: "Track protein, carbs & fats",
      },
    ],
  },
  Progress: {
    label: "THE BIGGER PICTURE",
    title: "Your effort. Made visible.",
    items: [
      {
        icon: BarChart3,
        title: "Your performance",
        sub: "See how far you’ve come",
      },
      { icon: Check, title: "Build consistency", sub: "Every session adds up" },
      {
        icon: Target,
        title: "Celebrate milestones",
        sub: "Keep your goals in sight",
      },
    ],
  },
};
export function MemberApp() {
  const [tab, setTab] = useState<keyof typeof appContent>("Workouts");
  const content = appContent[tab];
  return (
    <div className="relative isolate mx-auto flex min-h-[660px] w-full max-w-[550px] items-center justify-center sm:min-h-[730px] lg:min-h-[600px] lg:scale-90">
      <div className="absolute -z-10 size-[330px] rounded-full border border-line sm:size-[450px]" />
      <div className="absolute -z-10 size-[440px] rounded-full border border-line/50 sm:size-[590px]" />
      <div className="absolute top-9 left-0 z-10 flex motion-safe:animate-[float_6s_ease-in-out_infinite] -rotate-4 items-center gap-3 rounded-2xl border border-line bg-glass p-4 shadow-xl backdrop-blur-xl sm:top-8">
        <span className="grid size-10 place-items-center rounded-full bg-accent/15 text-accent-ink">
          <Flame className="size-5" />
        </span>
        <div>
          <b className="block text-sm font-semibold">
            Your next personal best.
          </b>
          <span className="mt-1 block text-xs text-muted">
            One session closer.
          </span>
        </div>
      </div>
      <div className="relative w-full max-w-[310px] rotate-3 rounded-[42px] border border-white/20 bg-[#10150e] p-2.5 text-[#f5f5e8] shadow-[20px_30px_70px_#0003] sm:w-[330px] sm:max-w-none">
        <div className="absolute top-5 left-1/2 z-10 h-5 w-22 -translate-x-1/2 rounded-full bg-[#0b0f09]" />
        <div className="overflow-hidden rounded-[33px] bg-[#20281b] px-5 pt-4 pb-5">
          <div className="flex justify-between px-1 text-[11px]">
            <span>9:41</span>
            <span>••• ▰</span>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm font-bold tracking-wide">
            <Dumbbell className="size-5 text-accent" />
            NEELKANTH
            <span className="ml-auto rounded-full border border-white/20 px-2 py-1 text-[9px] font-medium text-[#bcc5ac]">
              MEMBER
            </span>
          </div>
          <div className="mt-7">
            <span className="text-[10px] font-medium tracking-wider text-[#b5bfa5]">
              LET’S MAKE TODAY COUNT
            </span>
            <h3 className="mt-2 text-[25px] font-semibold leading-tight tracking-[-0.055em]">
              Your stronger self.
              <span className="mt-1 block text-lg font-normal text-[#bcc5ac]">
                One day at a time.
              </span>
            </h3>
          </div>
          <div
            className="mt-6 flex gap-2 border-b border-white/15"
            role="tablist"
            aria-label="Member app preview"
          >
            {tabs.map(({ label, icon: Icon }) => (
              <button
                key={label}
                id={`tab-${label}`}
                role="tab"
                aria-selected={tab === label}
                aria-controls="app-preview-panel"
                tabIndex={tab === label ? 0 : -1}
                onClick={() => setTab(label as keyof typeof appContent)}
                onKeyDown={(event) => {
                  if (
                    ["ArrowRight", "ArrowLeft", "Home", "End"].includes(
                      event.key,
                    )
                  ) {
                    event.preventDefault();
                    const i = tabs.findIndex((item) => item.label === tab);
                    const next =
                      event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? 2
                          : (i + (event.key === "ArrowRight" ? 1 : -1) + 3) % 3;
                    setTab(tabs[next].label as keyof typeof appContent);
                    document.getElementById(`tab-${tabs[next].label}`)?.focus();
                  }
                }}
                className={`flex min-h-11 items-center gap-1.5 border-b-2 pb-2 text-[11px] font-medium ${tab === label ? "border-accent text-accent" : "border-transparent text-[#bcc5ac]"}`}
              >
                <Icon className="size-3.5" />
                {label}
              </button>
            ))}
          </div>
          <div
            id="app-preview-panel"
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            tabIndex={0}
            className="mt-5 min-h-[305px]"
          >
            <div className="relative overflow-hidden rounded-xl border border-[#eff5b5]/15 bg-[#3b472c] p-4">
              <span className="text-[10px] tracking-wider text-[#d5dfb4]">
                {content.label}
              </span>
              <h4 className="mt-3 max-w-40 text-[29px] font-semibold leading-[1.03] tracking-[-0.05em]">
                {content.title}
              </h4>
              <div className="absolute -top-8 -right-11 size-44 rounded-full border border-white/10" />
              <p className="mt-4 text-[11px] text-[#d5dfb4]">
                Personalized for you{" "}
                <ArrowUpRight className="ml-2 inline size-3.5" />
              </p>
            </div>
            <div className="mt-4 space-y-1">
              {content.items.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 border-b border-white/5 py-3"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-[#313d27] text-[#c7d1b3]">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <b className="block text-xs font-semibold">{title}</b>
                    <span className="mt-1 block text-[10px] text-[#b7c0a4]">
                      {sub}
                    </span>
                  </div>
                  <ChevronRight className="ml-auto size-3.5 text-[#b7c0a4]" />
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-[#a4b18f]"
            aria-hidden="true"
          >
            <Home className="size-5 text-accent" />
            <BarChart3 className="size-5" />
            <span className="grid size-9 place-items-center rounded-full bg-accent text-ink">
              <Plus className="size-5" />
            </span>
            <Utensils className="size-5" />
            <Smartphone className="size-5" />
          </div>
          <p className="mt-5 text-center text-[9px] tracking-wide text-[#b5bfa5]">
            ILLUSTRATIVE MEMBER APP PREVIEW
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-2 z-10 flex motion-safe:animate-[float_8s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-line bg-glass p-4 shadow-xl backdrop-blur-xl sm:bottom-8">
        <span className="grid size-10 place-items-center rounded-full bg-accent/15 text-accent-ink">
          <Check className="size-5" />
        </span>
        <div>
          <b className="block text-sm font-semibold">
            Training. Nutrition. Progress.
          </b>
          <span className="mt-1 block text-xs text-muted">
            All moving together.
          </span>
        </div>
      </div>
    </div>
  );
}

export function BranchMap() {
  const [active, setActive] = useState(0);
  const branch = branches[active];
  return (
    <div className="reveal relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-line bg-background lg:min-h-[440px]">
      <div className="flex gap-2 border-b border-line p-3" role="tablist" aria-label="Branches">
        {branches.map((b, i) => (
          <button
            key={b.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`min-h-11 flex-1 rounded-full border px-4 text-sm font-semibold transition ${i === active ? "border-accent bg-accent text-ink" : "border-line text-muted hover:text-foreground"}`}
          >
            {b.name}
          </button>
        ))}
      </div>
      <iframe
        key={branch.id}
        title={`Neelkanth Gym ${branch.name} on Google Maps`}
        src={branch.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="min-h-[300px] w-full flex-1 border-0"
      />
      <a
        href={branch.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 border-t border-line bg-background p-5 transition hover:bg-elevated"
      >
        <div>
          <span className="text-sm text-muted">NEELKANTH GYM · {branch.name.toUpperCase()}</span>
          <b className="mt-1 block text-base font-semibold">
            Open in Google Maps &amp; read reviews
          </b>
        </div>
        <ArrowUpRight className="size-6" />
      </a>
    </div>
  );
}

export function TrainerGrid() {
  const [active, setActive] = useState(0);
  const branch = branches[active];
  const trainers = trainersByBranch[branch.id] ?? [];
  const scroller = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [stops, setStops] = useState(1);
  const [paused, setPaused] = useState(false);
  const step = () => {
    const el = scroller.current;
    const first = el?.children[0] as HTMLElement | undefined;
    const second = el?.children[1] as HTMLElement | undefined;
    return first && second ? second.offsetLeft - first.offsetLeft : (first?.offsetWidth ?? 1);
  };
  const goTo = (i: number) =>
    scroller.current?.scrollTo({ left: i * step(), behavior: "smooth" });
  const slide = (dir: number) => goTo(Math.max(0, Math.min(stops - 1, pos + dir)));
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const measure = () => {
      setStops(Math.max(1, Math.round((el.scrollWidth - el.clientWidth) / step()) + 1));
      setPos(Math.round(el.scrollLeft / step()));
    };
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [branch.id]);
  useEffect(() => {
    if (paused || stops < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => goTo(pos + 1 >= stops ? 0 : pos + 1), 3500);
    return () => clearInterval(id);
  }, [paused, stops, pos]);
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="mb-8 flex flex-wrap items-center gap-3" role="tablist" aria-label="Trainer branch">
        {branches.map((b, i) => (
          <button
            key={b.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition ${i === active ? "border-accent bg-accent text-ink" : "border-line text-muted hover:text-foreground"}`}
          >
            {b.name}
          </button>
        ))}
        <span className="text-sm text-muted">{trainers.length} coaches at this branch</span>
        <div className="ml-auto flex gap-2">
          <button aria-label="Previous coaches" onClick={() => slide(-1)} className="grid size-11 place-items-center rounded-full border border-line transition hover:bg-accent hover:text-ink">
            <ArrowLeft className="size-5" />
          </button>
          <button aria-label="Next coaches" onClick={() => slide(1)} className="grid size-11 place-items-center rounded-full border border-line transition hover:bg-accent hover:text-ink">
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
      <div ref={scroller} key={branch.id} className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden">
        {trainers.map(({ name, role }, index) => (
          <article className="group w-[calc(50%-0.5rem)] shrink-0 snap-start lg:w-[calc(25%-1.125rem)]" key={name}>
            <div className="glass relative isolate h-60 overflow-hidden rounded-2xl sm:h-80">
              <span className="absolute top-5 left-5 text-xs font-medium tracking-wider text-muted sm:text-sm">
                COACH / 0{index + 1}
              </span>
              <span
                className="absolute top-14 left-3 font-heading text-[150px] leading-none font-semibold text-foreground/5 sm:text-[200px]"
                aria-hidden="true"
              >
                {name[0]}
              </span>
              <div className="absolute -right-5 -bottom-18 -z-10 size-64 rounded-full border border-line" />
              <UserRound
                className="absolute right-1 bottom-9 size-37 text-foreground/25 transition-transform duration-500 group-hover:-translate-y-2 sm:right-3 sm:size-46"
                strokeWidth={0.7}
                aria-hidden="true"
              />
              <span className="absolute bottom-4 left-4 text-[10px] text-muted sm:left-5 sm:text-xs">
                Portrait coming soon
              </span>
              <a
                href={inquiry(
                  `Hi Neelkanth Gym! I’d like to ask about training with ${name} at the ${branch.name} branch.`,
                )}
                aria-label={`Ask about training with ${name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full border border-line bg-glass backdrop-blur-xl transition hover:bg-accent hover:text-ink sm:size-11"
              >
                <ArrowUpRight className="size-5" />
              </a>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">{name}</h3>
            <p className="mt-1 text-sm text-muted">{role ?? "Neelkanth trainer"}</p>
          </article>
        ))}
      </div>
      {stops > 1 && (
        <div className="mt-5 flex justify-center gap-2" aria-label="Coach carousel position">
          {Array.from({ length: stops }, (_, i) => (
            <button
              key={i}
              aria-label={`Go to position ${i + 1}`}
              aria-current={i === pos}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === pos ? "w-8 bg-accent" : "w-2 bg-foreground/25 hover:bg-foreground/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
