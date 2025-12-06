'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    const locale = useLocale();
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                        <div className="footer-logo">
    {/* <Image src="/M_sign.png" alt="MasaPay Logo" width={40} height={40} /> */}
</div>
                            <span className="font-bold text-xl text-white">MasaPay</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {t('description')}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            {t('madeIn')}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white">{t('product')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href={`/${locale}/services`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('features')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('pricing')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/roadmap`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('roadmap')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white">{t('company')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('about')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white">{t('contact')}</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="text-gray-400 text-sm flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:masapay.workspace@gmail.com" className="hover:text-white transition-colors">
                                    masapay.workspace@gmail.com
                                </a>
                            </li>
                            <li className="text-gray-400 text-sm flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+994509888972" className="hover:text-white transition-colors">
                                    +994 50 988 89 72
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                                <span className="text-sm font-semibold">in</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        {t('copyright')}
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors">
                            {t('privacy')}
                        </Link>
                        <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors">
                            {t('terms')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
