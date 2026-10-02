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

The Cloudflare adapter generates the Static Assets and Wrangler deployment configuration. The Worker name defaults to `ym-portfolio` from `package.json`. The current site deploys only static assets, including real HTTP redirects for `/zh-TW` and `/zh-TW/`. If you add a route with `export const prerender = false`, the adapter also generates the Worker entrypoint for on-demand rendering.

For Cloudflare Workers Builds, use `pnpm build` as the build command and `pnpm exec wrangler deploy` as the deploy command. Set `PUBLIC_HOSTNAME` in the build environment if deploying with a different canonical domain.

`wrangler.jsonc` sets the Worker name and enables preview URLs. The adapter supplies the entrypoint, asset paths, and compatibility settings automatically.

### Branch previews from the CLI

```sh
pnpm deploy:preview
```

This builds the current checkout and uploads a Worker version without changing the production deployment. Wrangler prints the version URL and a stable branch alias URL. Running the command again on the same branch updates that alias.

Aliases use `branch-` followed by the lowercase branch name, with punctuation replaced by hyphens. For example, `feature/header` becomes `branch-feature-header`. Branch names that normalize to the same alias share a preview URL. The normalized branch name must be at most 43 characters. A detached checkout requires switching to a named branch first.

Previews are public and include local uncommitted changes. They keep the configured production canonical URL unless you set `PUBLIC_HOSTNAME` before building. Uploads run when you invoke the command; Git pushes do not automatically trigger this CLI workflow.

Run `node scripts/deploy-preview.mjs --check` to verify branch alias handling.

`server.example.js` and `.eslintrc` are legacy Next.js files and are not used by the current scripts.
