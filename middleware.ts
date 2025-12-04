import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'az',
  localePrefix: 'always',
  localeDetection: true
});

export default function middleware(request: NextRequest) {
  // Check for locale cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const pathname = request.nextUrl.pathname;
  const pathLocale = pathname.split('/')[1];
  
  // If cookie exists and is valid, and path doesn't match cookie locale, redirect
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    if (!locales.includes(pathLocale as any)) {
      // Path doesn't have a locale, redirect to cookie locale
      const url = request.nextUrl.clone();
      url.pathname = `/${cookieLocale}${pathname === '/' ? '' : pathname}`;
      return NextResponse.redirect(url);
    } else if (pathLocale !== cookieLocale) {
      // Path has different locale than cookie, redirect to cookie locale
      const url = request.nextUrl.clone();
      const pathWithoutLocale = pathname.replace(`/${pathLocale}`, '') || '/';
      url.pathname = `/${cookieLocale}${pathWithoutLocale}`;
      return NextResponse.redirect(url);
    }
  }
  
  // Let next-intl middleware handle the rest
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
