'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const t = useTranslations('nav');
    const nextIntlLocale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    
    // Get locale from URL pathname as fallback (more reliable)
    const pathLocale = pathname.split('/')[1];
    const validLocales = ['az', 'ru', 'en'];
    const localeFromPath = validLocales.includes(pathLocale) ? pathLocale : nextIntlLocale;
    
    // Use locale from path if available, otherwise use next-intl locale
    const locale = localeFromPath || nextIntlLocale || 'az';

    // Sync cookie with current locale on mount and when locale changes
    useEffect(() => {
        const cookieLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('NEXT_LOCALE='))
            ?.split('=')[1];
        
        // If cookie exists and doesn't match current locale, update cookie
        if (cookieLocale && cookieLocale !== locale) {
            document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
        } else if (!cookieLocale) {
            // If no cookie exists, set it to current locale
            document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
        }
    }, [locale, pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.language-selector')) {
                setIsLangMenuOpen(false);
            }
        };
        if (isLangMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isLangMenuOpen]);

    const changeLanguage = (newLocale: string) => {
        // Save locale preference to cookie (next-intl uses NEXT_LOCALE by default)
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        
        // Get the current pathname from the URL
        const currentPath = window.location.pathname;
        
        // Remove all locale prefixes (az, ru, en) from the path using regex
        let pathWithoutLocale = currentPath.replace(/^\/(az|ru|en)/, '') || '/';
        
        // Remove any remaining duplicate locale prefixes
        pathWithoutLocale = pathWithoutLocale.replace(/^\/(az|ru|en)/, '') || '/';
        
        // Ensure path starts with /
        if (!pathWithoutLocale.startsWith('/')) {
            pathWithoutLocale = '/' + pathWithoutLocale;
        }
        
        // If path is empty or just /, keep it as /
        if (pathWithoutLocale === '' || pathWithoutLocale === '/') {
            pathWithoutLocale = '/';
        } else {
            // Remove trailing slash if present
            pathWithoutLocale = pathWithoutLocale.replace(/\/$/, '');
        }
        
        // Use window.location to ensure full page navigation and cookie is respected
        window.location.href = `/${newLocale}${pathWithoutLocale}`;
        setIsLangMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform relative">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                            </svg>
                        </div>
                        <span className="font-bold text-xl text-gray-900">MasaPay</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href={`/${locale}`} className="text-gray-900 hover:text-green-600 transition-colors font-medium text-sm">
                            {t('home')}
                        </Link>
                        <Link href={`/${locale}/services`} className="text-gray-900 hover:text-green-600 transition-colors font-medium text-sm">
                            {t('features')}
                        </Link>
                        <Link href={`/${locale}/roadmap`} className="text-gray-900 hover:text-green-600 transition-colors font-medium text-sm">
                            {t('roadmap')}
                        </Link>
                        <Link href={`/${locale}/about`} className="text-gray-900 hover:text-green-600 transition-colors font-medium text-sm">
                            {t('about')}
                        </Link>
                    </div>

                    {/* Language Selector */}
                    <div className="hidden md:flex items-center gap-4 relative language-selector">
                        <div 
                            className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg cursor-pointer hover:border-green-600 transition-colors"
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                        >
                            <span className="text-sm font-medium">
                                {locale === 'az' ? 'AZ - Azərbaycan' : locale === 'ru' ? 'RU - Русский' : 'EN - English'}
                            </span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isLangMenuOpen && (
                            <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px] z-50">
                                <button
                                    onClick={() => changeLanguage('az')}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${locale === 'az' ? 'text-green-600 font-medium bg-green-50' : 'text-gray-700'}`}
                                >
                                    AZ - Azərbaycan
                                </button>
                                <button
                                    onClick={() => changeLanguage('ru')}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${locale === 'ru' ? 'text-green-600 font-medium bg-green-50' : 'text-gray-700'}`}
                                >
                                    RU - Русский
                                </button>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${locale === 'en' ? 'text-green-600 font-medium bg-green-50' : 'text-gray-700'}`}
                                >
                                    EN - English
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t animate-fadeIn">
                        <div className="flex flex-col gap-4">
                            <Link href={`/${locale}`} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                                {t('home')}
                            </Link>
                            <Link href={`/${locale}/services`} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                                {t('features')}
                            </Link>
                            <Link href={`/${locale}/roadmap`} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                                {t('roadmap')}
                            </Link>
                            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                                {t('about')}
                            </Link>
                            <div className="pt-4 border-t">
                                <div className="text-sm font-medium text-gray-900 mb-2">Language / Dil / Язык</div>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => changeLanguage('az')}
                                        className={`text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors rounded ${locale === 'az' ? 'text-green-600 font-medium bg-green-50 border border-green-200' : 'text-gray-700'}`}
                                    >
                                        AZ - Azərbaycan
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('ru')}
                                        className={`text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors rounded ${locale === 'ru' ? 'text-green-600 font-medium bg-green-50 border border-green-200' : 'text-gray-700'}`}
                                    >
                                        RU - Русский
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={`text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors rounded ${locale === 'en' ? 'text-green-600 font-medium bg-green-50 border border-green-200' : 'text-gray-700'}`}
                                    >
                                        EN - English
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
