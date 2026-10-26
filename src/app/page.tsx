import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Dumbbell,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  Utensils,
  Rocket,
  Zap,
} from "lucide-react";
import { BranchMap, Header, MemberApp, Motion, Programs, ScheduleTabs, TrainerGrid } from "@/components/site-client";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import {
  Button,
  SectionLabel,
  heading,
  sectionSpace,
  serif,
  wrap,
} from "@/components/ui";
import {
  faqs,
  inquiry,
  branches,
  phone,
  programs,
  ownerPhoto,
  siteUrl,
  whatsapp,
} from "@/lib/gym";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...[
      {
        branch: branches[0],
        street: "M - 122, Near Jagat Ram Park, Laxmi Nagar",
        locality: "Laxmi Nagar, Delhi",
        geo: { "@type": "GeoCoordinates", latitude: 28.6349314, longitude: 77.2762768 },
      },
      {
        branch: branches[1],
        street: "C-7, Sai Chowk, Madhu Vihar Rd, near FITNEST GYM, Madhu Vihar, I.P. Extension, Patparganj",
        locality: "Delhi",
        geo: undefined,
      },
    ].map(({ branch, street, locality, geo }) => ({
      "@type": "HealthClub",
      "@id": siteUrl ? `${siteUrl}/#${branch.id}` : `#${branch.id}`,
      name: `Neelkanth Gym ${branch.name}`,
      alternateName: "Neelkanth Gym",
      description: `Weight training, personal training, group training, yoga, Zumba and dance fitness at Neelkanth Gym, ${branch.name}, Delhi.`,
      telephone: phone,
      ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/opengraph-image` } : {}),
      founder: { "@type": "Person", name: "Rajat Kr Sharma" },
      address: {
        "@type": "PostalAddress",
        streetAddress: street,
        addressLocality: locality,
        addressRegion: "Delhi",
        postalCode: "110092",
        addressCountry: "IN",
      },
      ...(geo ? { geo } : {}),
      hasMap: branch.mapLink,
      areaServed: branch.name,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Training programs",
        itemListElement: programs.map((program) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: program.name,
            description: program.description,
          },
        })),
      },
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-4 z-[100] -translate-y-24 rounded-full bg-accent px-6 py-3 text-base font-bold text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col sm:min-h-[calc(100svh-5.5rem)] overflow-hidden lg:h-[calc(100svh-5.5rem)] lg:min-h-[540px]"
        >
          <div className="hero-parallax absolute inset-0 -z-20">
            <Image
              src="/images/gym-hero.webp"
              alt="Illustrative modern gym with free weights and warm natural light"
              fill
              preload
              sizes="100vw"
              className="object-cover object-[70%_50%] motion-safe:animate-[ambient-zoom_18s_ease-in-out_infinite_alternate]"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-black via-transparent to-black/40" />

          <div className={`${wrap} flex flex-1 items-center py-12 lg:py-6`}>
            <div className="grid w-full items-end gap-12 lg:gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="hero-fade">
                <div
                  className="glass pop-in mb-8 lg:mb-5 inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-3 text-xs font-semibold tracking-[0.14em] text-white sm:text-sm"
                  style={{ "--d": "0ms" } as React.CSSProperties}
                >
                  <span className="grid size-6 place-items-center rounded-full bg-accent text-black">
                    <Sparkles className="size-3.5" />
                  </span>
                  YOUR NEIGHBOURHOOD. YOUR GYM.
                </div>
                <h1
                  id="hero-title"
                  className="font-heading text-[clamp(4rem,min(10vw,16svh),9rem)] leading-[0.82] font-bold tracking-[-0.02em] text-white [perspective:800px]"
                >
                  <span className="hero-word mr-[0.2em]" style={{ "--i": 0 } as React.CSSProperties}>BUILT</span>
                  <span className="hero-word" style={{ "--i": 1 } as React.CSSProperties}>FOR</span>
                  <br />
                  <span
                    className="hero-word mr-[0.2em] text-transparent [-webkit-text-stroke:2px_#fff]"
                    style={{ "--i": 2 } as React.CSSProperties}
                  >
                    YOUR
                  </span>
                  <span className="hero-word" style={{ "--i": 3 } as React.CSSProperties}>NEXT</span>
                  <br />
                  <span
                    className="hero-word mt-2 inline-block -skew-x-6 bg-accent px-[0.12em] pt-[0.04em] text-black"
                    style={{ "--i": 4 } as React.CSSProperties}
                  >
                    CHAPTER.
                  </span>
                </h1>
                <p
                  className="pop-in mt-9 lg:mt-5 max-w-xl text-xl leading-snug font-medium text-white sm:text-2xl"
                  style={{ "--d": "700ms" } as React.CSSProperties}
                >
                  A stronger body. A clearer mind. A place to belong.
                  <span className="mt-3 block text-base font-normal text-white/70 sm:text-lg">
                    Purposeful training and personal guidance, now at two locations: Laxmi Nagar and Madhu Vihar.
                  </span>
                </p>
                <div
                  className="pop-in mt-9 lg:mt-5 flex flex-wrap items-center gap-4 sm:gap-6"
                  style={{ "--d": "850ms" } as React.CSSProperties}
                >
                  <Button
                    href={inquiry(
                      "Hi Neelkanth Gym! I’d like to know about membership and arrange a visit.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find your strong
                  </Button>
                  <a
                    href="#programs"
                    className="glass group inline-flex min-h-13 items-center gap-3 rounded-full px-6 text-sm font-semibold text-white transition hover:-translate-y-1 sm:text-base"
                  >
                    Explore programs
                    <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
                  </a>
                </div>
              </div>

              <div
                className="pop-in float-slow flex flex-col gap-4"
                style={{ "--d": "600ms" } as React.CSSProperties}
              >
                <div className="glass rounded-3xl p-6 lg:p-5 text-white">
                  <div className="mb-4 flex items-center gap-2 text-sm text-white/75">
                    <MapPin className="size-4 text-accent" /> 2 branches · Laxmi Nagar &amp; Madhu Vihar
                  </div>
                  <p className="text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl">
                    The work is yours.
                    <br />
                    The support is <span className="text-accent">ours.</span>
                  </p>
                </div>
                <div className="glass grid grid-cols-3 divide-x divide-white/20 rounded-3xl py-5 text-white">
                  {[
                    ["6", "Programs"],
                    ["4", "Coaches"],
                    ["24/7", "App"],
                  ].map(([n, label]) => (
                    <div key={label} className="px-3 text-center">
                      <b className="block font-heading text-4xl leading-none text-accent sm:text-5xl">{n}</b>
                      <span className="mt-2 block text-[11px] font-medium tracking-wider text-white/70 uppercase">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-accent py-3 text-black" aria-hidden="true">
            <div className="marquee font-heading text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              {[0, 1].map((k) => (
                <div className="flex shrink-0 items-center" key={k}>
                  {programs.map((p) => p.name).map((t) => (
                    <span key={t} className="flex items-center">
                      <span className="px-7">{t}</span>
                      <Zap className="size-5" fill="currentColor" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="the-club" className={`${wrap} ${sectionSpace}`}>
          <div className="reveal grid gap-9 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <div>
              <SectionLabel number="01">A DIFFERENT KIND OF GYM</SectionLabel>
              <h2 className={heading}>
                A SPACE TO TRAIN.
                <br />A PLACE TO{" "}
                <span className={`${serif} text-[0.85em]`}>belong.</span>
              </h2>
            </div>
            <div className="self-end">
              <p className="text-xl leading-relaxed tracking-tight sm:text-2xl">
                Big goals. First steps. Fresh starts.
                <br />
                There’s room for all of it here.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted lg:text-lg">
                At Neelkanth Gym, we bring purposeful training, personal
                guidance, and a community that keeps you moving. You bring
                yourself. We’ll build the rest together.
              </p>
            </div>
          </div>
          <div className="reveal mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16 [&>div]:reveal-scale">
            {[
              {
                icon: Target,
                title: "Your goals, your way.",
                text: "Thoughtful training that meets you where you are.",
              },
              {
                icon: Heart,
                title: "Support that shows up.",
                text: "Expert guidance and a little encouragement, every session.",
              },
              {
                icon: BarChart3,
                title: "Progress beyond the gym.",
                text: "Your workouts and nutrition, connected in our member app.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                data-tilt
                className="reveal-scale rounded-2xl border border-line bg-glass p-6 lg:p-8"
              >
                <span className="mb-5 grid size-12 place-items-center rounded-xl border border-line bg-background text-accent-ink">
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="programs"
          className={`${sectionSpace} overflow-hidden border-y border-line bg-surface`}
        >
          <div className={wrap}>
            <div className="reveal mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
              <div>
                <SectionLabel number="02">FIND YOUR MOVEMENT</SectionLabel>
                <h2 className={heading}>
                  YOUR GOALS.
                  <br />
                  YOUR KIND OF{" "}
                  <span className={`${serif} text-[0.85em]`}>movement.</span>
                </h2>
              </div>
              <p className="max-w-80 text-base leading-relaxed text-muted lg:pb-2 lg:text-lg">
                Lift with purpose. Find your flow.
                <br />
                There’s no one way to do this.
                <br />
                Just your way.
              </p>
            </div>
            <Programs />
          </div>
        </section>

        <section id="schedule" className={`${wrap} pt-2 pb-16 lg:pb-20`}>
          <div className="reveal mb-8 flex flex-col justify-between gap-5 lg:mb-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel number="03">GROUP CLASSES · BOTH BRANCHES</SectionLabel>
              <h2 className={heading}>
                SHOW UP.
                <br />
                <span className={`${serif} text-[0.85em]`}>we’ll lead.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-base leading-relaxed text-muted lg:text-lg">
                Weekly group fitness timetable. Pick your branch.
              </p>
            </div>
          </div>
          <ScheduleTabs />
        </section>

        <section className={`${wrap} py-16 lg:py-14`}>
          <div className="reveal reveal-scale relative isolate min-h-[360px] lg:min-h-[380px] overflow-hidden rounded-3xl border border-white/25 p-7 shadow-[0_30px_80px_-20px_#000] sm:p-12 lg:p-12">
            <Image
              src="/images/gym-detail.webp"
              alt="Illustrative gym free weights in warm yellow light"
              fill
              sizes="100vw"
              className="-z-20 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/60 to-black/10" />
            <span className="text-sm font-medium tracking-wide text-white/75">
              YOUR ONLY COMPETITION IS YESTERDAY.
            </span>
            <h2 className="mt-7 font-heading text-[clamp(2.8rem,min(5vw,9svh),4.5rem)] leading-[0.95] font-semibold tracking-tight text-white">
              YOUR PACE.
              <br />
              YOUR <span className="text-accent">PROGRESS.</span>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/75">
              You don’t need a perfect starting point.
              <br />
              Just a place that’s ready when you are.
            </p>
            <Button
              href={inquiry(
                "Hi Neelkanth Gym! I’d like to arrange a gym visit.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7"
            >
              Come see the club
            </Button>
          </div>
          <p className="mt-3 text-right text-sm text-muted">
            A glimpse of the atmosphere · AI-generated gym imagery
          </p>
        </section>

        <section id="trainers" className={`${wrap} pt-2 pb-16 lg:pb-20`}>
          <div className="reveal mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
            <div>
              <SectionLabel number="04">
                THE PEOPLE BEHIND YOUR PROGRESS
              </SectionLabel>
              <h2 className={heading}>
                YOUR EFFORT.
                <br />
                OUR <span className={`${serif} text-[0.85em]`}>expertise.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted lg:text-lg">
              Real guidance. The right encouragement.
              <br />
              Your team, rep after rep.
            </p>
          </div>
          <div className="reveal reveal-scale glass mb-10 grid items-center gap-8 rounded-3xl p-5 sm:p-6 md:grid-cols-[280px_1fr] md:gap-10 lg:mb-14 lg:grid-cols-[340px_1fr] lg:p-8">
            <div className="relative isolate h-80 overflow-hidden rounded-2xl border border-line bg-black/30 md:h-[380px]">
              {ownerPhoto ? (
                <Image
                  src={ownerPhoto}
                  alt="Rajat Kr Sharma, owner of Neelkanth Gym"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover"
                />
              ) : (
                <>
                  <span
                    className="absolute top-6 left-4 font-heading text-[220px] leading-none font-semibold text-foreground/5"
                    aria-hidden="true"
                  >
                    R
                  </span>
                  <UserRound
                    className="absolute inset-x-0 bottom-6 mx-auto size-52 text-foreground/25"
                    strokeWidth={0.7}
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-4 left-4 text-xs text-muted">
                    Owner photo coming soon
                  </span>
                </>
              )}
            </div>
            <div>
              <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-widest text-ink">
                OWNER &amp; FOUNDER
              </span>
              <h3 className="mt-5 font-heading text-5xl leading-none font-semibold tracking-tight sm:text-6xl">
                Rajat Kr Sharma
              </h3>
              <p className="mt-2 text-sm text-muted">Owner, Neelkanth Gym</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                A neighbourhood gym with a simple purpose: give you the space,
                the support, and the confidence to keep getting stronger.
              </p>
            </div>
          </div>
          <TrainerGrid />
        </section>

        <section
          id="member-app"
          className={`${sectionSpace} overflow-hidden border-y border-line bg-surface`}
        >
          <div
            className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20`}
          >
            <div className="reveal reveal-slide-l">
              <SectionLabel number="05">YOUR GYM. IN YOUR POCKET.</SectionLabel>
              <span className="mb-6 ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-ink">
                <Rocket className="size-4" /> LAUNCHING SOON
              </span>
              <h2 className={heading}>
                TRAIN SMARTER.
                <br />
                FUEL BETTER.
                <br />
                <span className={`${serif} text-[0.78em]`}>
                  See your progress.
                </span>
              </h2>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted lg:text-lg">
                Your goals don’t stop at the gym door. Our personalized member
                app brings your workouts, meals, nutrition, and macros together,
                helping you stay consistent and work towards your goals.
              </p>
              <div className="my-8 space-y-6">
                {[
                  {
                    icon: Dumbbell,
                    title: "A plan for every session",
                    text: "Keep your workouts organized and purposeful.",
                  },
                  {
                    icon: Utensils,
                    title: "Fuel with intention",
                    text: "Track meals, nutrition, protein, carbs, and fats.",
                  },
                  {
                    icon: BarChart3,
                    title: "Make your progress visible",
                    text: "Follow your performance and celebrate your milestones.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div className="flex items-start gap-4" key={title}>
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-line bg-background text-accent-ink">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                href={inquiry(
                  "Hi Neelkanth Gym! Please notify me when the personalized member app launches.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get notified at launch
              </Button>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <ShieldCheck className="size-4" />
                Launching soon, made for Neelkanth members.
              </p>
            </div>
            <div className="reveal reveal-slide-r">
              <MemberApp />
            </div>
          </div>
        </section>

        <section id="reviews" className={`${sectionSpace} overflow-hidden`}>
          <div className={wrap}>
            <div className="reveal mb-12 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
              <div>
                <SectionLabel number="06">REAL WORDS FROM REAL MEMBERS</SectionLabel>
                <h2 className={heading}>
                  LOVED ON
                  <br />
                  <span className={`${serif} text-[0.85em]`}>google.</span>
                </h2>
              </div>
            </div>
            <div className="reveal">
              <Testimonials />
            </div>
          </div>
        </section>

        <section
          id="faqs"
          className={`${wrap} ${sectionSpace} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}
        >
          <div className="reveal">
            <SectionLabel number="07">
              A LITTLE CLARITY BEFORE YOU START
            </SectionLabel>
            <h2 className={heading}>
              GOOD QUESTIONS.
              <br />
              <span className={`${serif} text-[0.78em]`}>
                Straight answers.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              First steps feel easier with a little clarity.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center gap-4 border-b border-line pb-2 text-base font-semibold"
            >
              Let’s talk on WhatsApp <ArrowUpRight className="size-5" />
            </a>
          </div>
          <div className="reveal border-t border-line">
            {faqs.map((faq, index) => (
              <details
                name="neelkanth-faq"
                className="group rounded-xl border-b border-line transition-colors duration-200 open:border-accent-ink/40 open:bg-elevated/70 hover:bg-elevated/70"
                key={faq.question}
              >
                <summary className="flex min-h-23 list-none items-center gap-4 rounded-xl px-4 py-5 text-base font-semibold leading-relaxed transition duration-200 active:scale-[0.995] active:bg-accent/10">
                  <span className="text-sm font-normal text-muted transition-colors group-open:text-accent-ink group-hover:text-accent-ink">
                    0{index + 1}
                  </span>
                  <span>{faq.question}</span>
                  <span className="ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-line text-muted transition duration-200 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <Plus className="size-5" />
                  </span>
                </summary>
                <p className="px-4 pb-7 text-base leading-relaxed text-muted sm:pr-18 sm:pl-13 motion-safe:animate-[arrive_.25s_ease-out]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="visit"
          className={`${sectionSpace} border-t border-line bg-surface`}
        >
          <div
            className={`${wrap} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
          >
            <div className="reveal">
              <SectionLabel number="08">
                YOUR NEXT CHAPTER IS NEARBY
              </SectionLabel>
              <h2 className={heading}>
                A SMALL STEP.
                <br />A{" "}
                <span className={`${serif} text-[0.85em]`}>strong start.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted lg:text-lg">
                Come by. Meet the team. Get a feel for the place.
                <br />
                Your journey can start with a simple hello.
              </p>
              <div className="mt-8 flex items-start gap-4">
                <MapPin className="mt-1 size-6 text-accent-ink" />
                <div>
                  <h3 className="text-sm font-semibold text-muted">
                    FIND YOUR WAY HERE
                  </h3>
                  <div className="mt-2 space-y-5">
                    {branches.map((b) => (
                      <address key={b.id} className="text-lg leading-relaxed not-italic">
                        <b className="font-semibold">{b.name}</b> — {b.address}
                        <a
                          href={b.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 flex min-h-9 items-center gap-2 text-sm font-semibold"
                        >
                          Open in Google Maps <ArrowUpRight className="size-4" />
                        </a>
                      </address>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-7 flex items-start gap-4">
                <Phone className="mt-1 size-6 text-accent-ink" />
                <div>
                  <h3 className="text-sm font-semibold text-muted">
                    MEMBERSHIPS, HELP & INQUIRIES
                  </h3>
                  <a
                    href="tel:+919810642646"
                    className="mt-2 block text-2xl font-semibold tracking-tight"
                  >
                    {phone}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Call or WhatsApp for hours, plans, and a gym visit.
                  </p>
                </div>
              </div>
              <Button
                href={inquiry(
                  "Hi Neelkanth Gym! I’d like to visit. Could you share the opening hours and membership details?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
              >
                <MessageCircle className="size-5" />
                Say hello
              </Button>
            </div>
            <BranchMap />
          </div>
        </section>

        <section className={`${wrap} py-14 lg:py-16`}>
          <div className="reveal reveal-scale relative overflow-hidden rounded-3xl border border-white/50 bg-linear-to-br from-accent to-accent p-8 text-ink shadow-[0_30px_90px_-20px_#f6dc3c88] sm:p-12 lg:p-12">
            <div className="absolute -top-32 -right-32 size-[450px] rounded-full border border-ink/10" />
            <div className="relative grid items-end gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-sm font-semibold tracking-wide">
                  YOU DON’T NEED TO HAVE IT ALL FIGURED OUT.
                </p>
                <h2 className="mt-6 font-heading text-[clamp(3rem,min(6.5vw,12svh),5.5rem)] leading-[0.9] font-semibold tracking-tight">
                  JUST
                  <br />
                  <span className="text-transparent [-webkit-text-stroke:1.5px_#0a0a0a]">
                    SHOW UP.
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-ink/75">
                  We’ll meet you where you are.
                  <br />
                  Let’s see where you can go.
                </p>
                <Button
                  href={inquiry(
                    "Hi Neelkanth Gym! I’m interested in joining. Let’s talk!",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  dark
                  className="mt-6"
                >
                  Make your first move
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Neelkanth Gym on WhatsApp at ${phone}`}
        className="fixed right-5 bottom-5 z-40 flex min-h-13 items-center gap-3 rounded-full border border-line bg-glass p-3.5 shadow-xl backdrop-blur-2xl transition hover:-translate-y-1 sm:right-7 sm:bottom-7 sm:px-5"
      >
        <MessageCircle className="size-6" />
        <span className="hidden text-sm font-bold sm:inline">Let’s talk</span>
        <span className="hidden size-2 rounded-full bg-[#90bd6b] sm:block" />
      </a>
    </>
  );
}
