import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LangSetter from '@/components/LangSetter';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <>
      <LangSetter locale={locale} />
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}

