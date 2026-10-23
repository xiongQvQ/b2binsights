# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

Monorepo with two independently deployed packages (bun is the package manager — `bun.lock`, not npm/pnpm):

- `web/` — B2Binsights marketing landing page. React 19 + Vite + Tailwind CSS v4, deployed to **Cloudflare Pages** (output `dist/`).
- `api/` — Hono API on **Cloudflare Workers** (`b2binsights-api`). Currently just `/api/health` and `POST /api/lead`, which only logs the lead (no storage yet).
- `prototype/` — static HTML prototype, not part of the build.
- `b2binsights-redesign-plan.md` — **historical** design doc from the previous "帮外贸人找客户 + 免费线索样本" positioning. As of 2026-10 the site sells a different offer: an **AI FDE team** — paid AI 咨询 (per-engagement) + FDE 驻场 AI 改造 (fixed project price). Copy stays jargon-light and outcome-first for non-technical business owners; no "free sample" CTAs anywhere.

## Commands

### web/

```bash
cd web
bun install
bun run dev        # vite dev server on :5173
bun run build      # tsc -b && vite build — type errors fail the build
bun run lint       # oxlint
bun run preview    # serve the built dist/
```

### api/

```bash
cd api
bun install
bunx wrangler dev     # local worker on :8787
bunx wrangler deploy
```

There are no tests or CI in this repo.

## web/ Architecture

- **Multi-page marketing site, no client router.** Five pages, directory-style: root `index.html` → `/` (home), plus `ai-consulting/`, `fde/`, `trade-leads/`, `about/` each with their own `index.html`, wired as Vite MPA inputs (`vite.config.ts` `rollupOptions.input`). Canonical URLs use the trailing-slash form (`https://b2binsights.io/fde/`); hosts 308 the slash-less form natively — verified on `wrangler pages dev`. Page components live in `src/pages/*.tsx`; client mount entries (createRoot) in `src/pages/entries/*.tsx`. Shared section components (Nav, Hero, PageHero, Demo, How, Local, Scenarios, Cta, Footer …) are named exports of `src/components/sections.tsx`; per-page content lives in the page files.
- **Build-time prerendering (GEO/SEO critical).** `bun run build` = `tsc -b && vite build && bun scripts/prerender.tsx`. The prerender script renders each page with `react-dom/server` and injects the markup into the matching `dist/*.html`, so crawlers that don't execute JS (AI engines, some search bots) read full content. Client JS still mounts normally over identical markup. Never ship a build that skips the prerender step.
- **Per-page meta tags are hand-maintained** in each HTML file's `<head>` (title / description / canonical / OG — not generated). Search Console/Bing verification token slots are commented in the root `index.html`.
- **Site facts + JSON-LD builders** live in `src/lib/site.ts` (brand, legal name, WeChat/email, nav, Organization/WebSite/FAQPage/Breadcrumb/Service LD). Home FAQ data is in `src/lib/content.ts`. Shared components: `plan-table.tsx` (ai_plan.md sample), `faq-list.tsx`, `json-ld.tsx`.
- **Scroll-CTA pattern:** nav/hero buttons call `scrollIntoView` on section anchors `#demo` and `#cta` (every page's Cta section has `id="cta"`). Keep those IDs when refactoring.
- **Tailwind v4 CSS-first config:** there is no `tailwind.config` file. Theme tokens are declared in the `@theme` block of `src/index.css` — the `brand-*` (amber/orange CTA) and `navy-*` (dark sections) palettes live there. Add new colors as tokens, not arbitrary hex classes.
- **Path alias:** `@/` → `src/` (wired in `vite.config.ts`, `tsconfig.app.json`, and root `tsconfig.json` — the last one so `bun scripts/prerender.tsx` can resolve it at runtime).
- **Scroll animation:** `src/components/reveal.tsx` uses an IntersectionObserver to add an `on` class; the `.reveal.on` transition CSS is in `src/index.css`.
- **shadcn/ui** is configured via `components.json` (style `base-nova`, lucide icons) with `cn()` in `src/lib/utils.ts`, but no components have been generated yet — new ones go to `@/components/ui/`.
- **TypeScript strictness:** `verbatimModuleSyntax` (type-only imports must use `import type`), `erasableSyntaxOnly` (no enums/namespaces), `noUnusedLocals`/`noUnusedParameters`.
- **GEO/SEO docs:** `web/docs/geo-verification.md` (Search Console/Bing verification steps) and `web/docs/ai-question-bank.md` (monthly AI-citation test prompts). `public/robots.txt` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider …); `public/llms.txt` summarizes the business for LLMs; `public/og-image.png` is the social share image.

## Conventions

- All user-facing copy is **zh-CN**. The conversion channel (WeChat ID `XiongX0110` / email `xiongbojian007@gmail.com`) is defined in `web/src/lib/site.ts` (used by Cta/Footer/llms.txt copy) and hardcoded in the API's lead response — update all of them together. The five root HTML files also repeat it in `<meta name="description">`.
- `api/src/index.ts` has a hardcoded CORS allowlist (`b2binsights.io` + `localhost:5173`). If the web dev port changes, update it; new API methods must be added to `allowMethods`.
