# Deployment — Cloudflare Workers (OpenNext)

The site runs on Cloudflare Workers via `@opennextjs/cloudflare`. Deploys are
driven by **Workers Builds** (Cloudflare's native Git integration): push to the
production branch deploys live; pushes to other branches create isolated
**per-PR preview deployments**.

## Per-PR preview deployments (GitHub Actions)

Each PR gets a **unique, PR-numbered** preview URL —
`https://pr-<n>-aubuscule.<your-subdomain>.workers.dev` — posted as a comment on
the PR. Driven by `.github/workflows/pr-preview.yml`, which builds the branch and
runs `wrangler versions upload --preview-alias pr-<n>`. `versions upload` creates
an isolated preview **without** deploying to production or touching custom
domains.

### One-time setup

1. **GitHub repo secrets** (Settings → Secrets and variables → Actions):
    - `CLOUDFLARE_API_TOKEN` — create at dash.cloudflare.com/profile/api-tokens
      using the **"Edit Cloudflare Workers"** template. The token must have
      **Workers Scripts:Edit** permission (and **Account Settings:Read** so
      wrangler can resolve the account ID).
    - `CLOUDFLARE_ACCOUNT_ID` — from the Cloudflare dashboard (Workers overview).
2. **Enable the Worker’s preview URLs** — Worker → Settings → Domains & Routes →
   ensure a `*.workers.dev` subdomain and **Preview URLs** are enabled (default).
3. **Workers Builds: production only** — to avoid double-deploys, set Workers
   Builds (the Git integration) to build the **production branch (`main`) only**.
   GitHub Actions owns the PR previews.

Node 22 is pinned in the workflow and `.nvmrc` (newer Node has no `sharp`
prebuild). The workflow installs with `npm ci --ignore-scripts` since `sharp` is
unused (`images.unoptimized`).

### Verifying a PR

Open the commented URL: `/`, `/agency`, `/apps`, `/apps/remplate`, `/blog`,
`/dev`, `/shop`. Note: PRs opened from forks don’t receive repo secrets, so the
preview step only runs for branches in this repo.

## Production cutover (when merging the path-based PR to `main`)

Merging deploys path-based routing to the live Worker. Because this branch’s
`wrangler.jsonc` makes `aubuscule.com` the primary domain and drops
`agency.aubuscule.com`, do this in order:

1. In Cloudflare, add **Redirect Rules** (301) before/at merge:
   - `agency.aubuscule.com/*` → `https://aubuscule.com/agency/$1`
   - `apps.aubuscule.com/*` → `https://aubuscule.com/apps/$1`
   - `blog.aubuscule.com/*` → `https://aubuscule.com/blog/$1`
   - `dev.aubuscule.com/*` → `https://aubuscule.com/dev/$1`
   - `shop.aubuscule.com/*` → `https://aubuscule.gumroad.com`
   - `remplate.aubuscule.com/*` → `https://aubuscule.com/apps/remplate`
2. Ensure `aubuscule.com` is attached to the Worker as a custom domain.
3. Merge → Workers Builds deploys. Verify `aubuscule.com/`, `/agency`, etc.

## Local development

```bash
nvm use            # Node 22 from .nvmrc
npm run dev        # fast loop — http://localhost:3000
npm run preview    # production parity (workerd + OpenNext); prints local port
```
