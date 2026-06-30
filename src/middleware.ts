import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api)
    // - Static files under public/ or build outputs (_next)
    // - Specific static assets like icon.svg, robots.txt, sitemap.xml
    '/((?!api|_next|icon\\.svg|robots\\.txt|sitemap\\.xml|.*\\..*).*)',
    // Match folders
    '/(fr|en|nl)/:path*',
  ],
}
