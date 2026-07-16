# Shreya Ashoka — Portfolio

A cinematic, animated portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS,
GSAP, Framer Motion, Lenis smooth scrolling, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `src/lib/data.ts` — all real content (profile, projects, experience, skills, publications,
  certifications). Edit this file to update copy — every component reads from here, nothing is
  hardcoded per-component.
- `src/components/` — page sections: `Hero`, `About`, `Skills`, `Projects`, `Experience`,
  `Publications`, `Certifications`, `Contact`, `Footer`, `Navbar`.
- `src/components/canvas/` — React Three Fiber scenes: `StarfieldBackdrop` (persistent ambient
  background) and `PortalOrb` (the rotating wireframe centerpiece in the intro).
- `src/components/SmoothScroll.tsx` — Lenis + GSAP ScrollTrigger wiring.
- `src/components/CursorGlow.tsx` — cursor-follow ambient light (desktop only).

## Sections (matches the reference recording)

1. Intro / Portal splash — name reveal + rotating wireframe orb + "Enter the Portal"
2. Home — headline, availability badge, CTA buttons, stats
3. About — "Inside the Lab"
4. Skills — "An AI Universe" (orbiting galaxy + flat categorized tags)
5. Projects — "Holographic Room"
6. Experience — "The Pathway"
7. Publications — "The Digital Library"
8. Certifications — "Floating Certificates"
9. Contact — "Let's Build Something"

## To finish setup

1. Add your resume PDF at `public/resume.pdf` (linked from the navbar and hero — not included
   since no resume file was provided).
2. Fonts ("Space Grotesk" + "Inter") load from Google Fonts via a `<link>` tag in
   `src/app/layout.tsx`, so they need network access at runtime — this works out of the box on
   Vercel or any normal host.
3. Update social links / email / phone in `src/lib/data.ts` if anything changes.

## Deploying

Standard Next.js app — deploy directly to Vercel, or any Node host that supports Next.js 15.
