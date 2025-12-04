'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('home');
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className={`${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="text-sm text-gray-600 mb-4">
                MasaPay. <span className="text-green-600 font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                  {t('hero.buttonSoon')}
                </Link>
                <Link href={`/${locale}/services`} className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all">
                  {t('hero.buttonDetails')}
                </Link>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className={`${mounted ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200" style={{ background: 'linear-gradient(to bottom, #F0FDF4 0%, #FFFFFF 30%)' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-gray-800">{t('dashboard.title')}</h3>
                  <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-green-700 font-semibold">{t('dashboard.live')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-600 rounded-xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">₼2,450</div>
                    <div className="text-sm opacity-90">{t('dashboard.todaySales')}</div>
                  </div>

                  <div className="bg-blue-600 rounded-xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">43</div>
                    <div className="text-sm opacity-90">{t('dashboard.orders')}</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-900">{t('dashboard.recentOrders')}</h4>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: t('dashboard.order1.name'), time: t('dashboard.order1.time'), amount: t('dashboard.order1.amount') },
                      { name: t('dashboard.order2.name'), time: t('dashboard.order2.time'), amount: t('dashboard.order2.amount') },
                      { name: t('dashboard.order3.name'), time: t('dashboard.order3.time'), amount: t('dashboard.order3.amount') },
                    ].map((order, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{order.name}</div>
                            <div className="text-xs text-gray-500">{order.time}</div>
                          </div>
                        </div>
                        <div className="text-sm font-bold text-gray-900">{order.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niyə MasaPay Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{t('why.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: t('why.affordable.title'),
                description: t('why.affordable.description'),
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: t('why.local.title'),
                description: t('why.local.description'),
                link: t('why.local.link'),
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: t('why.fast.title'),
                description: t('why.fast.description'),
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`w-14 h-14 ${item.iconBg || 'bg-green-100'} rounded-xl flex items-center justify-center mb-4 ${item.iconColor || 'text-green-600'}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                {item.link && (
                  <Link href={`/${locale}/about`} className="inline-flex items-center gap-1 text-green-600 font-medium text-sm hover:gap-2 transition-all">
                    {item.link}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Əsas Xüsusiyyətlər */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{t('features.title')}</h2>
            <p className="text-base text-gray-600">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
                title: t('features.qrMenu.title'),
                description: t('features.qrMenu.description'),
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
                title: t('features.payment.title'),
                description: t('features.payment.description'),
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                title: t('features.analytics.title'),
                description: t('features.analytics.description'),
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
                title: t('features.inventory.title'),
                description: t('features.inventory.description'),
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
                title: t('features.staff.title'),
                description: t('features.staff.description'),
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                title: t('features.kitchen.title'),
                description: t('features.kitchen.description'),
                color: 'bg-green-100 text-green-600'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mövcud Sistemlərlə İnteqrasiya */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('integration.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('integration.subtitle')}</p>
          
          <ScrollAnimation animation="scale" delay={200}>
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-12">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t('integration.badge')}
            </div>
          </ScrollAnimation>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {[
              { name: t('integration.services.abbTerminals.name'), subtitle: t('integration.services.abbTerminals.subtitle'), icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, color: 'bg-red-100 text-red-600' },
              { name: t('integration.services.pashaPay.name'), subtitle: t('integration.services.pashaPay.subtitle'), icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, color: 'bg-blue-100 text-blue-600' },
              { name: t('integration.services.cuzdan.name'), subtitle: t('integration.services.cuzdan.subtitle'), icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, color: 'bg-green-100 text-green-600' },
              { name: t('integration.services.azeriCard.name'), subtitle: t('integration.services.azeriCard.subtitle'), icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, color: 'bg-orange-100 text-orange-600' },
              { name: t('integration.services.milliKart.name'), subtitle: t('integration.services.milliKart.subtitle'), icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, color: 'bg-purple-100 text-purple-600' },
            ].map((item, i) => (
              <ScrollAnimation key={i} animation="scale" delay={i * 100}>
                <div className={`${item.color} w-32 h-32 rounded-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl p-4`}>
                  <div className="mb-2">{item.icon}</div>
                  <span className="text-xs font-semibold text-center mb-1">{item.name}</span>
                  <span className="text-xs text-gray-600 text-center">{item.subtitle}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t('integration.checkmark')}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container-custom text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-10 text-green-50">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/about`} className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all hover:shadow-lg">
                {t('cta.contact')}
              </Link>
              <Link href={`/${locale}/services`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                {t('cta.more')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
