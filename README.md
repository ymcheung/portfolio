# Yuming's Portfolio

https://ymcheung.tw

Astro site deployed to Cloudflare Workers with Static Assets, Svelte components, Markdoc content, and Tailwind CSS.

## Setup

Use Node.js 22.12.0 or newer and the pnpm version pinned in `package.json`.

```sh
corepack enable
pnpm install
pnpm dev
```

The development server runs at http://localhost:4321.

## Settings

- `astro.config.mjs` configures the Cloudflare adapter, canonical site URL, English and Traditional Chinese routing, fonts, and integrations. Pages are prerendered by default; images are processed at build time and sessions are disabled.
- `PUBLIC_HOSTNAME` optionally overrides the canonical site URL. Copy `.env.sample` to `.env.development` to configure it locally. `NEXT_PUBLIC_HOSTNAME` remains supported for existing deployments.
- `src/content.config.ts` defines the Markdoc collection loaded from `src/content/pages`.
- `tsconfig.json` uses Astro's base TypeScript settings.
- `pnpm-workspace.yaml` allows the native dependency build scripts.

## Checks and build

```sh
pnpm check
pnpm build
pnpm preview
```

## Deploy to Cloudflare Workers

```sh
pnpm exec wrangler login
pnpm deploy
```

The Cloudflare adapter generates the Static Assets and Wrangler deployment configuration. The Worker name defaults to `ym-portfolio` from `package.json`. The current site deploys only static assets, including real HTTP redirects for `/zh-TW` and `/zh-TW/`. If you add a route with `export const prerender = false`, the adapter also generates the Worker entrypoint for on-demand rendering.

For Cloudflare Workers Builds, use `pnpm build` as the build command and `pnpm exec wrangler deploy` as the deploy command. Set `PUBLIC_HOSTNAME` in the build environment if deploying with a different canonical domain.

Add a root `wrangler.jsonc` only when you need a different Worker name, custom domains, or resource bindings. The adapter supplies the entrypoint, asset paths, and compatibility settings automatically.

`server.example.js` and `.eslintrc` are legacy Next.js files and are not used by the current scripts.
