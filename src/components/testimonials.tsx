"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { reviews } from "@/lib/gym";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef<number | null>(null);
  const count = reviews.length;
  const go = (step: number) => setActive((i) => (i + step + count) % count);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = setInterval(() => setActive((i) => (i + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [paused, count]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Google reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div
        className="relative mx-auto h-[470px] touch-pan-y select-none sm:h-[420px]"
        style={{ perspective: "1400px" }}
        onPointerDown={(e) => (drag.current = e.clientX)}
        onPointerUp={(e) => {
          if (drag.current !== null) {
            const dx = e.clientX - drag.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }
          drag.current = null;
        }}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {reviews.map((review, i) => {
            let d = i - active;
            if (d > count / 2) d -= count;
            if (d < -count / 2) d += count;
            const abs = Math.abs(d);
            const shown = abs <= 2;
            return (
              <article
                key={review.name}
                aria-hidden={d !== 0}
                aria-label={`Review ${i + 1} of ${count}`}
                onClick={() => d !== 0 && setActive(i)}
                className={`glass absolute top-0 left-1/2 flex h-full w-[min(86vw,420px)] flex-col rounded-3xl p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8 ${d === 0 ? "border-accent/60" : "cursor-pointer"}`}
                style={{
                  transform: `translateX(calc(-50% + ${d * 58}%)) translateZ(${-abs * 170}px) rotateY(${d * -32}deg) scale(${d === 0 ? 1 : 0.92})`,
                  opacity: shown ? 1 - abs * 0.3 : 0,
                  zIndex: 10 - abs,
                  pointerEvents: shown ? "auto" : "none",
                  filter: d === 0 ? "none" : `blur(${abs * 1.2}px) brightness(0.7)`,
                }}
              >
                <Quote
                  className="size-10 text-accent"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <div
                  className="mt-4 flex gap-1 text-accent"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      className="size-5"
                      fill={s < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
                  “{review.text}”
                </p>
                <div className="mt-auto flex shrink-0 items-center gap-3 pt-5">
                  <span className="grid size-12 place-items-center rounded-full bg-accent text-lg font-bold text-ink">
                    {review.name[0]}
                  </span>
                  <div className="min-w-0">
                    <b className="block truncate text-base">{review.name}</b>
                    <span className="text-sm text-muted">
                      Google review · {review.when}
                    </span>
                  </div>
                  {review.sample && (
                    <span className="ml-auto rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold tracking-wider text-muted">
                      SAMPLE
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="glass grid size-12 place-items-center rounded-full transition hover:bg-accent hover:text-ink"
        >
          <ArrowLeft className="size-5" />
        </button>
        <div className="flex gap-2" aria-hidden="true">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              tabIndex={-1}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-accent" : "w-2 bg-foreground/30"}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next review"
          className="glass grid size-12 place-items-center rounded-full transition hover:bg-accent hover:text-ink"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
