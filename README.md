# Dr. Aslan dental clinic

Arabic, RTL, mobile-first clinic landing page built with Next.js App Router, React, TypeScript and Tailwind CSS v4. Most sections render on the server; the navigation and before/after comparison are small client components. Fonts are self-hosted.

## Run locally

Requires Node.js 20.9+.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Browser verification (after building):

```sh
npx playwright install chromium
npm run test:e2e
```

The browser checks cover six viewport widths, mobile navigation, FAQ interaction,
booking destinations, metadata, the exact map URL, and WCAG A/AA checks. Desktop
and mobile screenshots are written to `test-results/`. The external Google Maps
document is mocked for deterministic tests; its network availability is not tested.

Use `npm run format` to format the source, or `npm run format:check` to verify it.

## Configuration and publishing

- Clinic details, the bio quote, all supplied social profiles, Telegram channel and bot, the exact supplied Google Maps embed URL and WhatsApp messages live in `src/lib/clinic.ts`.
- Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before building. This enables canonical metadata and the sitemap. There is deliberately no invented production domain.
- Optional environment variables can override the Instagram URL and map embed URL. For maps, use the iframe's `src`, not raw HTML. The provided embed attributes (including lazy loading and referrer policy) are preserved; CSS adapts its size to each screen.
- Deploy to a Next.js-compatible Node host or Vercel with `npm run build`. The normal build uses Next.js image optimization. Set `STATIC_EXPORT=true` to create a static `out/` folder for GitHub Pages; this mode serves local image files directly without needing an image server.
- Booking links open WhatsApp with editable Arabic messages. A booking is only confirmed by clinic staff in the conversation. There is no scheduling backend, payment processing, or patient-data storage.
- Confirm the offered treatments and clinic policies with the doctor before publication. No ratings, credentials, opening hours or patient counts were invented.

## GitHub Pages publication

The `.github/workflows/deploy-pages.yml` workflow publishes the site after each push to `main`. Set the repository's Pages source to **GitHub Actions**. The workflow derives the site URL and repository path from GitHub Pages so fonts, the portrait and JavaScript load correctly under the project URL.

To reproduce the Pages build locally:

```sh
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/dr-aslan-dental NEXT_PUBLIC_SITE_URL=https://seyedmohammadali2000.github.io/dr-aslan-dental/ npm run build
```

Serve `out/` with a static web server mounted at `/dr-aslan-dental/`. `npm start` is for the normal Node build, not the static export.

References: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Authentic case portfolio

The portfolio currently links to the supplied official Instagram account. No stock or synthetic image is presented as a real treatment outcome. To activate the accessible before/after sliders, add authorized local case images under `public/images/cases/` and populate `dentalCases` in `src/lib/clinic.ts`:

```ts
{
  id: "case-01",
  title: "A verified case title in Arabic",
  description: "A factual description in Arabic",
  treatment: "The actual treatment",
  before: "/images/cases/case-01-before.webp",
  after: "/images/cases/case-01-after.webp",
}
```

Use genuinely matching images with patient permission. Native range inputs support keyboard and touch. Rebuild after editing content.

## Structure

```text
src/app/             page, layout, metadata, robots, sitemap, styles
src/components/      reusable page sections and small interactive components
src/lib/clinic.ts    clinic details, external URLs and real case content
public/images/       locally served website assets
img/aslan.jpg        doctor's original portrait, statically imported by Next.js
```

The hero uses the supplied `img/aslan.jpg` portrait through Next.js Image, with responsive image optimization and a blur placeholder. Replace that file to update the portrait; no duplicate public copy is needed. The previous illustrative [Unsplash clinic image](https://images.unsplash.com/photo-1629909613654-28e377c37b09) remains available in `public/images/clinic.jpg` but is no longer displayed. The smile illustration is a decorative SVG, not a patient result.

Implementation references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Tailwind CSS for Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
