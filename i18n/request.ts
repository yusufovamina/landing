import { getRequestConfig } from 'next-intl/server';

export const locales = ['az', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Ensure that a valid locale is used
  const validLocale: Locale = (locale && locales.includes(locale as Locale)) 
    ? (locale as Locale) 
    : 'az';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});

