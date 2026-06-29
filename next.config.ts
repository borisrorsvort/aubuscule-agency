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

const nextConfig: NextConfig = {
  // SSR on Cloudflare Workers via @opennextjs/cloudflare — host-based
  // multi-domain routing needs request-time middleware, so no static export.
  //
  // Images are served unoptimized by design for now. Switching to a Cloudflare
  // Images loader is deferred until Image Resizing is enabled on the zone
  // (tracked in TODO.md, Epic 1) — it requires paid zone config, not code.
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
