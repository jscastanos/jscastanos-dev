# jscastanos.dev

Personal portfolio site, built with [SvelteKit](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev/docs/svelte) and deployed as a static site on [Vercel](https://vercel.com).

## Stack

- SvelteKit + Svelte 5 (runes)
- TypeScript
- Tailwind CSS
- Vite
- Biome (lint + format)
- `@sveltejs/adapter-static` for static output

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `yarn dev` — start the dev server
- `yarn build` — produce the static build in `build/`
- `yarn preview` — serve the production build locally
- `yarn check` — run `svelte-check` and Biome lint
- `yarn lint` — Biome check + auto-fix
- `yarn format` — Biome formatter

## Deploy

Pushes to `main` deploy to production on Vercel; any other branch creates a preview deployment automatically.
