# AGENTS.md

`cat-ron-client` — Next.js 16 App Router client for a book-borrowing app. No tests, no CI, no formatter. `README.md` is stock create-next-app boilerplate and partially stale (code lives in `src/app/`, not `app/`).

## Commands

- `npm run dev` — dev server. Turbopack is the Next 16 default; `next.config.ts` sets `@tailwindcss/turbopack` as the loader for `*.css` (Tailwind v4, no `tailwind.config`).
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`).
- `npx tsc --noEmit` — typecheck (no npm script). Needs `.next/types` to exist: run `npm run dev` or `npm run build` first after a clean clone, or `LayoutProps<"/">` in `src/app/layout.tsx` won't resolve.
- `npm run build` — verified passing; runs its own TypeScript check and prerenders every route static. `npm run start` serves the output.
- Baseline: `npm run lint` exits 1 on two pre-existing `react-hooks/set-state-in-effect` errors in stock shadcn files (`src/components/ui/carousel.tsx:98`, `src/hooks/use-mobile.ts:14`). Not your regression; leave vendored UI files alone unless asked.

Verify with `npm run lint` + `npx tsc --noEmit`; use `npm run build` when the change touches config or routing.

## Architecture

- Routes in `src/app/`: `/`, `/all-books`, `/my-books`, `/my-borrows`, `/add-book`. Root layout wraps all pages in `Navbar` + `Footer`.
- Path alias `@/*` → `./src/*`.
- All book data is static mock data in `src/data/books.tsx`. Nothing in `src/` uses `fetch`, `process.env`, or `.env` files.
- Sibling repo `../cat-ron-server` (Express 5 + MongoDB, single `index.js`, separate git repo) exists but is not wired to this client yet.
- `src/components/ui/*` is shadcn-generated but built on **Base UI** (`@base-ui/react`), not Radix — see `components.json` (style `base-nova`). `cn` comes from the `cn` npm package; `src/lib/utils.ts` just re-exports it. Add components with `npx shadcn add <name>` and confirm they land on Base UI.

## next.config.ts

Enables `cacheComponents`, `partialPrefetching`, and `reactCompiler` (`babel-plugin-react-compiler` is a devDependency). With Cache Components on, the caching model is the one in `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` — not the previous Next caching model.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
