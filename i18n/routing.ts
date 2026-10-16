import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '../i18n';

export const routing = {
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Always add a locale prefix to all routes
  localePrefix: 'always'
} as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);