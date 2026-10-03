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
pnpm check:theme
pnpm build
pnpm preview
```

## Deploy to Cloudflare Workers

```sh
pnpm exec wrangler login
pnpm deploy
```

The Cloudflare adapter generates the Static Assets and Wrangler deployment configuration. The Worker name is `portfolio`, set in `wrangler.jsonc`. The current site deploys only static assets, including real HTTP redirects for `/zh-TW` and `/zh-TW/`. If you add a route with `export const prerender = false`, the adapter also generates the Worker entrypoint for on-demand rendering.

### Automatic deployments with Cloudflare Workers Builds

Connect the `ymcheung/portfolio` GitHub repository in the Worker's Settings > Build. Configure these settings and enable Preview Builds under Branch control:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `pnpm build` |
| Deploy command | `pnpm exec wrangler deploy` |
| Preview command | `pnpm exec wrangler preview` |

Once connected, pushes to `main` deploy production and pushes to other branches update native Worker Previews. Cloudflare manages build authentication. No GitHub Actions workflow is needed. Set `PUBLIC_HOSTNAME` in the build environment if deploying with a different canonical domain.

`wrangler.jsonc` sets the Worker name and enables preview URLs. The adapter supplies the entrypoint, asset paths, and compatibility settings automatically.

### Branch previews from the CLI

```sh
pnpm deploy:preview
```

This builds the current checkout and creates or updates a native Worker Preview for the current Git branch without changing production. Wrangler prints its preview URL. This replaces the earlier `branch-*` version aliases with Cloudflare's native preview naming.

CLI previews include local uncommitted changes; automatic builds use pushed commits. Previews keep the configured production canonical URL unless you set `PUBLIC_HOSTNAME` before building.

`server.example.js` and `.eslintrc` are legacy Next.js files and are not used by the current scripts.
