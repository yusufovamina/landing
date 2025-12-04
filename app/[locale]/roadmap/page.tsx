'use client';

import { useTranslations } from 'next-intl';

export default function YolXeritesiPage() {
    const t = useTranslations('roadmap');
    const milestones = [
        {
            id: 'hazirlanir',
            date: t('phases.core.badge'),
            color: 'green',
            colorClass: 'bg-green-600',
            colorLight: 'bg-green-100',
            colorText: 'text-green-700',
            title: t('phases.core.title'),
            features: [
                { title: t('phases.core.orderManagement.title'), desc: t('phases.core.orderManagement.description') },
                { title: t('phases.core.payment.title'), desc: t('phases.core.payment.description') },
                { title: t('phases.core.employee.title'), desc: t('phases.core.employee.description') },
                { title: t('phases.core.menu.title'), desc: t('phases.core.menu.description') },
                { title: t('phases.core.analytics.title'), desc: t('phases.core.analytics.description') },
                { title: t('phases.core.mobile.title'), desc: t('phases.core.mobile.description') },
            ],
            isCompleted: true,
        },
        {
            id: 'jan2026',
            date: t('phases.expansion.date'),
            color: 'blue',
            colorClass: 'bg-blue-600',
            colorLight: 'bg-blue-100',
            colorText: 'text-blue-700',
            title: t('phases.expansion.title'),
            features: [
                { title: t('phases.expansion.qrMenu.title'), desc: t('phases.expansion.qrMenu.description') },
                { title: t('phases.expansion.payment.title'), desc: t('phases.expansion.payment.description') },
                { title: t('phases.expansion.ai.title'), desc: t('phases.expansion.ai.description') },
                { title: t('phases.expansion.inventory.title'), desc: t('phases.expansion.inventory.description') },
            ],
            isCompleted: false,
        },
        {
            id: 'fev2026',
            date: t('phases.professional.date'),
            color: 'purple',
            colorClass: 'bg-purple-600',
            colorLight: 'bg-purple-100',
            colorText: 'text-purple-700',
            title: t('phases.professional.title'),
            features: [
                { title: t('phases.professional.kitchen.title'), desc: t('phases.professional.kitchen.description') },
                { title: t('phases.professional.crm.title'), desc: t('phases.professional.crm.description') },
                { title: t('phases.professional.analytics.title'), desc: t('phases.professional.analytics.description') },
                { title: t('phases.professional.multiLocation.title'), desc: t('phases.professional.multiLocation.description') },
            ],
            isCompleted: false,
        },
        {
            id: 'mar2026',
            date: t('phases.ecosystem.date'),
            color: 'orange',
            colorClass: 'bg-orange-600',
            colorLight: 'bg-orange-100',
            colorText: 'text-orange-700',
            title: t('phases.ecosystem.title'),
            features: [
                { title: t('phases.ecosystem.marketplace.title'), desc: t('phases.ecosystem.marketplace.description') },
                { title: t('phases.ecosystem.waste.title'), desc: t('phases.ecosystem.waste.description') },
                { title: t('phases.ecosystem.delivery.title'), desc: t('phases.ecosystem.delivery.description') },
                { title: t('phases.ecosystem.monitoring.title'), desc: t('phases.ecosystem.monitoring.description') },
            ],
            isCompleted: false,
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-white">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        {t('hero.badge')}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Roadmap Cards Section - Single Column */}
            <section className="pb-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {milestones.map((milestone, i) => (
                            <div key={milestone.id} className="flex items-start gap-6 my-8">
                                {/* Left side: Icon and Date Label (outside the card) */}
                                <div className="flex flex-col items-start gap-4 flex-shrink-0 pt-1">
                                    <div className={`w-14 h-14 ${milestone.colorClass} rounded-lg flex items-center justify-center`}>
                                        {milestone.id === 'hazirlanir' ? (
                                            <svg className="w-7 h-7 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        ) : (
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className={`inline-flex items-center gap-2 ${milestone.colorLight} ${milestone.colorText} px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap`}>
                                        {milestone.id === 'hazirlanir' ? (
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                        {milestone.date}
                                    </div>
                                </div>

                                {/* Right side: Card */}
                                <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 relative shadow-sm my-4 mx-4">
                                    {/* Badge on top right for first card */}
                                    {milestone.id === 'hazirlanir' && (
                                        <div className="absolute top-6 right-6 inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                                            {t('phases.core.date')}
                                        </div>
                                    )}

                                    {/* Title */}
                                    <div className="mb-6 pr-24">
                                        <h2 className="text-2xl font-bold text-gray-900 leading-tight">{milestone.title}</h2>
                                    </div>

                                    {/* Features List - TWO COLUMNS */}
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                        {milestone.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                {milestone.isCompleted ? (
                                                    <div className={`flex-shrink-0 w-6 h-6 ${milestone.colorClass} rounded-full flex items-center justify-center mt-0.5`}>
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div className={`flex-shrink-0 w-6 h-6 ${milestone.colorClass} rounded-full mt-0.5`}></div>
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold mb-1.5 text-gray-900 text-base">{feature.title}</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                number: '25+',
                                label: t('stats.features'),
                                color: 'bg-green-100',
                            },
                            {
                                icon: (
                                    <div className="relative">
                                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <svg className="w-5 h-5 text-green-600 absolute -bottom-1 -right-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                ),
                                number: '1',
                                label: t('stats.phase'),
                                color: 'bg-green-100',
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                                number: '4',
                                label: t('stats.months'),
                                color: 'bg-green-100',
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`${stat.color} rounded-2xl p-8 text-center`}
                            >
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

