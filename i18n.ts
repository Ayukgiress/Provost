import { createI18nClient } from 'next-intl';

export type Locale = 'en' | 'fr';

export const locales: Locale[] = ['en', 'fr'];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
};

export default {
  locales,
  defaultLocale,
  localeLabels,
};