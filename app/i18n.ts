import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '../i18n';

export async function getMessages(locale: string) {
  // Validate that the incoming locale is supported
  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export { locales, defaultLocale };