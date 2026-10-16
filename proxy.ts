import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about` instead of `/en/about`)
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|fr)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};