import { ArrowUpRight, Clock, Heart, MapPin, MessageCircle, Phone } from "lucide-react";
import { Brand, Button, wrap } from "@/components/ui";
import { branches, creditInstagram, inquiry, navLinks, phone, programs, whatsapp } from "@/lib/gym";

const heading = "text-xs font-semibold tracking-[0.2em] text-muted";
const link = "inline-flex min-h-9 items-center text-sm text-foreground/80 transition hover:text-accent-ink";

export function Footer() {
  const isInstagram = creditInstagram.includes("instagram.com");
  return (
    <footer className="glass border-x-0 border-b-0">
      <div className={wrap}>
        <div className="grid items-center gap-6 border-b border-line py-10 lg:grid-cols-[1.4fr_1fr] lg:py-12">
          <div>
            <h2 className="font-heading text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
              READY TO FIND YOUR <span className="text-accent-ink">STRONG?</span>
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted">
              Walk in, meet the team and see the floors. Two branches, one family.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <Button
              href={inquiry("Hi Neelkanth Gym! I’d like to know about membership and arrange a visit.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" />
              WhatsApp us
            </Button>
            <a href="tel:+919810642646" className="inline-flex items-center gap-2 text-lg font-semibold">
              <Phone className="size-5 text-accent-ink" />
              {phone}
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.6fr] lg:gap-8">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Built by you. Backed by us. Weight training, personal coaching, group
              classes, yoga and dance fitness, in your neighbourhood.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <Clock className="size-4 text-accent-ink" />
              Call or WhatsApp for timings
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className={heading}>EXPLORE</h3>
            <ul className="mt-4 flex flex-col">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={heading}>PROGRAMS</h3>
            <ul className="mt-4 flex flex-col">
              {programs.map((program) => (
                <li key={program.name}>
                  <a href="#programs" className={link}>{program.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>OUR BRANCHES</h3>
            <ul className="mt-4 flex flex-col gap-5">
              {branches.map((b) => (
                <li key={b.id} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent-ink" />
                  <address className="text-sm leading-relaxed not-italic text-foreground/80">
                    <b className="block text-base font-semibold text-foreground">{b.name}</b>
                    {b.address}
                    <a
                      href={b.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex min-h-9 items-center gap-1.5 font-semibold text-foreground"
                    >
                      Get directions <ArrowUpRight className="size-4" />
                    </a>
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 pb-22 text-sm leading-relaxed text-muted sm:pb-6">
          <span>© 2026 Neelkanth Gym. All rights reserved.</span>
          <span>Owned by Rajat Kr Sharma.</span>
          <span className="flex items-center gap-5">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
            <a href="#home" className="inline-flex items-center gap-1.5 hover:text-foreground">
              Back to top <ArrowUpRight className="size-4 -rotate-45" />
            </a>
          </span>
        </div>
        <p className="flex items-center justify-center gap-1.5 border-t border-line py-5 text-sm text-muted">
          Developed By <Heart className="size-4 text-accent-ink" fill="currentColor" aria-label="love" /> by{" "}
          {creditInstagram ? (
            <a
              href={creditInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isInstagram ? "Bibek on Instagram" : "Bibek on GitHub"}
              className="inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Bibek
              <svg viewBox="0 0 24 24" className="size-5 text-accent-ink" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {isInstagram ? (
                  <>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                  </>
                ) : (
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                )}
              </svg>
            </a>
          ) : (
            <span className="font-semibold text-foreground">Bibek</span>
          )}
        </p>
      </div>
    </footer>
  );
}
