# Deployment

Andriano Cherini is a Next.js 15 (App Router) marketing site. Every page is pre-rendered at
build time (SSG, `ru` + `en`); `src/middleware.ts` maps unprefixed URLs to the Russian
locale, so the site runs on the Next.js Node server (not a static export).

No database, no API keys, no auth, no file uploads. The contact form opens the visitor's
mail client (`mailto:`).

## Build

- Package manager: **npm** (`package-lock.json`), Node 22 LTS.
- `next.config.mjs` uses `output: "standalone"`; `npm run build` produces
  `.next/standalone/server.js`.

### Docker

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://andrianocherini.com \
  --build-arg NEXT_PUBLIC_SITE_ENV=production \
  -t andriano-cherini .

docker run --rm -p 3000:3000 andriano-cherini
# http://localhost:3000            site
# http://localhost:3000/api/health {"status":"ok"}
```

The container listens on `0.0.0.0:$PORT` (default **3000**) and runs as a non-root user.

## Environment variables

All variables are `NEXT_PUBLIC_*`: they are **inlined at build time**, so they must be
passed as build args (Coolify: tick **Build Variable**). Changing them requires a rebuild.
None of them are secrets.

| Variable | Required | Example | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes (falls back to `https://andrianocherini.com`) | `https://andrianocherini.com` | canonical URLs, hreflang, Open Graph, sitemap, robots |
| `NEXT_PUBLIC_SITE_ENV` | no (defaults to production) | `production` / `staging` | anything except `production` makes `robots.txt` disallow everything |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | no | — | Google Search Console meta tag |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | no | — | Yandex Webmaster meta tag |

Runtime-only variables set by the image: `PORT=3000`, `HOSTNAME=0.0.0.0`, `NODE_ENV=production`.

## Storage

None required. Optimised images are cached in `/app/.next/cache`; it is rebuilt on demand,
so a volume there is optional (only keeps the cache warm across redeploys).

## Coolify

| Setting | Value |
| --- | --- |
| Source | GitHub `stassb129/andriano-cherini`, branch `main` |
| Base Directory | `/` |
| Build Pack | Dockerfile |
| Dockerfile Location | `/Dockerfile` |
| Ports Exposes | `3000` |
| Build Variables | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SITE_ENV`, optional verification codes |
| Health Check | path `/api/health`, port `3000` |
| Domains | `https://andrianocherini.com` (add `www` and redirect it to the apex if needed) |

For a staging app, use a separate domain and set `NEXT_PUBLIC_SITE_ENV=staging` and
`NEXT_PUBLIC_SITE_URL` to the staging URL.

## Vercel notes

The same commit still deploys to Vercel.

- `vercel.json` — region `fra1` (and a leftover `/models/*` cache header that is unused
  after the 3D model was removed).
- `src/app/robots.ts` falls back to `VERCEL_ENV` when `NEXT_PUBLIC_SITE_ENV` is empty, so
  Vercel preview deployments stay non-indexable.
- No `@vercel/*` packages, Edge runtime, Blob/KV/Postgres or `*.vercel.app` URLs are used.

## Moving production to the VPS

1. Create the Coolify app with the settings above and deploy.
2. Check `https://<coolify-temp-domain>/api/health`.
3. Point the domain's DNS (A/AAAA) to the VPS; Coolify issues the TLS certificate.
4. Verify `https://andrianocherini.com/robots.txt` and `/sitemap.xml` use the right domain.
5. Remove the domain from the Vercel project so the two don't compete.
