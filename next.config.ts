import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; form-action 'self' mailto:; frame-ancestors 'none'",
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

// Single-domain, path-based routing (aubuscule.com/agency, /apps, …) — pure Next
// routing, no host inspection. Old subdomains 301 to these paths via Cloudflare
// redirect rules (see TODO.md Epic 2). `shop`/`remplate` shortcuts below have no
// host condition, so the OpenNext `has:host` limitation doesn't apply.
const nextConfig: NextConfig = {
  // SSR on Cloudflare Workers via @opennextjs/cloudflare — no static export.
  //
  // Images are served unoptimized by design for now. Switching to a Cloudflare
  // Images loader is deferred until Image Resizing is enabled on the zone
  // (tracked in TODO.md, Epic 1) — it requires paid zone config, not code.
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  async redirects() {
    return [
      { source: '/shop', destination: 'https://aubuscule.gumroad.com', permanent: true },
      { source: '/remplate', destination: '/apps/remplate', permanent: true },
    ]
  },
}

export default nextConfig
