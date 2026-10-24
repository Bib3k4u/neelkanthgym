# Neelkanth Gym

A responsive, single-page Next.js 16 website for Neelkanth Gym in Laxmi Nagar, Delhi. Built from scratch with TypeScript, Tailwind CSS 4 utilities, Lucide icons, locally hosted optimized fonts, and original AI-generated gym imagery. No Bootstrap or animation library is used.

## Run locally

- `npm run dev` — start the development server at http://localhost:3000
- `npm run lint` — run ESLint
- `npm run build` — create a production build
- `npm run start` — serve the production build

## Site content

The site includes a split-layout hero, six filterable programs in a swipeable carousel, coach placeholders, Rajat Kr Sharma’s owner introduction, an interactive member-app showcase, FAQs, location, click-to-call, Google Maps search, and program-specific WhatsApp links. Black, ivory, and yellow themes persist locally before first paint. Scroll animations respect reduced-motion preferences, and content stays visible without JavaScript.

Body copy is 16–18px, with 14px supporting labels and generous touch targets. The carousel supports native touch scrolling, scroll snapping, keyboard arrows, previous/next buttons, and category filters. It does not auto-advance.

Navigation is 64px high on mobile and 72px on desktop, with an active section indicator that follows scrolling and direct section links. Sections remain visible by default; finite entrance animations use the Web Animations API and also register content that arrives after hydration. There is no hidden state waiting for a scroll callback. Subtle gym-image motion, floating app badges, and hover effects respect reduced-motion preferences.

The member-app preview has keyboard-accessible Workouts, Nutrition, and Progress tabs. It is an illustrative concept; this website does not implement the actual app or connect to member accounts.

Server-rendered content, HealthClub and FAQ structured data, a social sharing image, branded icon, robots.txt, and a domain-aware sitemap are included.

## Before publishing

Set `NEXT_PUBLIC_SITE_URL` to the actual public origin (for example, `https://your-real-domain.example`) in your deployment environment and rebuild. This sets canonical URLs, the social-image origin, and sitemap entries. Without it, local preview uses localhost for social-image metadata and the sitemap has no domain entry. Do not publish with the example URL.

Opening hours, schedules, membership prices, and precise directions should be confirmed with the owner. These have not been invented; current inquiries go directly to WhatsApp at +91 98106 42646.

## Replace placeholders

- `public/images/gym-hero.webp` and `public/images/gym-detail.webp` are original generated concept photography. Program cards reuse crops of these assets. Replace them with approved gym photography, update alt text, and remove the generated-image caption when using real images.
- Coach and owner portraits use initials and decorative silhouettes in `src/app/page.tsx`. Replace these with `next/image` portraits when available.
- Update programs, FAQs, and contact information in `src/lib/gym.ts`; section content in `src/app/page.tsx`; interactive components in `src/components/site-client.tsx`; and shared presentation components in `src/components/ui.tsx`.
- Styling uses Tailwind utilities within the components. `src/app/globals.css` contains theme tokens, global defaults, and animation/reduced-motion rules.
- The footer copyright starts in 2026.

Image generation method and exact prompts are recorded in [docs/imagery.md](docs/imagery.md).
