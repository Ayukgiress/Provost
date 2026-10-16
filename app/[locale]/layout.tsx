import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n';
import LenisProvider from "../components/LenisProvider";
import "../globals.css";

async function getMessages(locale: string) {
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: "Provost | Navigate Your Academic & Funding Journey",
  description:
    "Empowering students and emerging professionals with intelligent guidance for academic and funding opportunities.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Get the translations for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisProvider>{children}</LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}