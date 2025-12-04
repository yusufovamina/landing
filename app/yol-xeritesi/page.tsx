'use client';

import { useEffect, useState } from 'react';

export default function YolXeritesiPage() {
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState('hazirlanir');

    useEffect(() => {
        setMounted(true);
    }, []);

    const milestones = [
        {
            id: 'hazirlanir',
            date: 'İlk Buraxılış',
            color: 'bg-green-600',
            badgeColor: 'bg-green-100 text-green-700',
            title: 'Əsas Funksional',
            badge: 'Hazırlanır',
            badgeIcon: '🔄',
            features: [
                { title: 'Sifariş İdarəetməsi', desc: 'Masa və sifariş sisteminin əsas funksionallığı' },
                { title: 'Ödəniş İnteqrasiyası', desc: 'Cuzdan ilə ödəniş qəbulu' },
                { title: 'İşçi İdarəetməsi', desc: 'Əsas işçi və rol idarəetməsi' },
                { title: 'Menyu Sistemi', desc: 'Kateqoriya, məhsul və modifikatorların idarə edilməsi' },
                { title: 'Sadə Analitika', desc: 'Əsas satış və performans hesabatları' },
                { title: 'Mobil Tətbiq', desc: 'iOS və Android üçün nativ tətbiqlər' },
            ],
        },
        {
            id: 'jan2026',
            date: 'Jan 2026',
            color: 'bg-blue-600',
            badgeColor: 'bg-blue-100 text-blue-700',
            title: 'Genişlənmə Mərhələsi',
            badge: 'Jan 2026',
            badgeIcon: '📅',
            features: [
                { title: 'QR Menu Modulu', desc: 'Müştəri özü-özünə sifariş sistemi' },
                { title: 'Genişlənmiş Ödəniş', desc: 'Apple Pay, Google Pay dəstəyi' },
                { title: 'AI Rekomendasiya', desc: 'Süni intellekt əsaslı məhsul təklifləri' },
                { title: 'İnventar İdarəetməsi', desc: 'Avtomatik stok izləmə və xəbərdarlıqlar' },
            ],
        },
        {
            id: 'fev2026',
            date: 'Feb 2026',
            color: 'bg-purple-600',
            badgeColor: 'bg-purple-100 text-purple-700',
            title: 'Peşəkar Xüsusiyyətlər',
            badge: 'Feb 2026',
            badgeIcon: '📅',
            features: [
                { title: 'Mətbəx Ekranı', desc: 'Sifarişlərin effektiv idarə edilməsi' },
                { title: 'CRM Modulu', desc: 'Müştəri əlaqələri və loyallıq proqramları' },
                { title: 'Təkmilləşdirilmiş Analitika', desc: 'Dərin məlumat analizi və proqnozlar' },
                { title: 'Çox Məkanlı Dəstək', desc: 'Restoran şəbəkələri üçün mərkəzi idarəetmə' },
            ],
        },
        {
            id: 'mar2026',
            date: 'Mar 2026',
            color: 'bg-orange-600',
            badgeColor: 'bg-orange-100 text-orange-700',
            title: 'Ekosistem İnteqrasiyası',
            badge: 'Mar 2026',
            badgeIcon: '📅',
            features: [
                { title: 'Modul Bazarı', desc: 'Üçüncü tərəf əlavələri və inteqrasiyalar' },
                { title: 'Qida Tullantı İdarəetməsi', desc: 'Tullantıların izlənməsi və azaldılması' },
                { title: 'Çatdırılma Platformaları', desc: 'Wolt, Bolt Food inteqrasiyası' },
                { title: 'Monitorinq və Xəbərdarlıqlar', desc: 'Real-vaxt sistem izləmə və bildirişlər' },
            ],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                        İnkişaf Planı
                    </div>
                    <h1 className={`text-5xl font-bold mb-6 text-gray-900 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        Yol Xəritəsi
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${mounted ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                        Bütün xidmətlərin 2026-cı ilin ilk kvartalında hazır olması planlaşdırılır!
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-64 flex-shrink-0">
                            <div className="sticky top-24 space-y-3">
                                {milestones.map((milestone, i) => (
                                    <button
                                        key={milestone.id}
                                        onClick={() => setActiveSection(milestone.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${activeSection === milestone.id
                                                ? milestone.badgeColor + ' shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {milestone.badgeIcon && <span>{milestone.badgeIcon}</span>}
                                        {milestone.badge}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Timeline Content */}
                        <div className="flex-1 space-y-16 relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 via-blue-600 via-purple-600 to-orange-600 hidden md:block"></div>

                            {milestones.map((milestone, i) => (
                                <div
                                    key={milestone.id}
                                    id={milestone.id}
                                    className={`relative ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-6 w-4 h-4 ${milestone.color} rounded-full border-2 border-white shadow-md hidden md:block`}></div>

                                    {/* Content Card */}
                                    <div className="md:ml-20">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${milestone.color} text-white`}>
                                                {milestone.badgeIcon && <span>{milestone.badgeIcon}</span>}
                                                {milestone.date}
                                            </div>
                                            {milestone.id === 'hazirlanir' && (
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-green-600 text-white">
                                                    İlk Buraxılış
                                                </div>
                                            )}
                                        </div>
                                        <h2 className="text-3xl font-bold mb-6 text-gray-900">{milestone.title}</h2>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {milestone.features.map((feature, j) => (
                                                <div
                                                    key={j}
                                                    className="card hover:shadow-lg"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className={`w-6 h-6 ${milestone.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-semibold mb-1 text-gray-900">{feature.title}</h3>
                                                            <p className="text-sm text-gray-600">{feature.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                ),
                                number: '25+',
                                label: 'Planlaşdırılan Xüsusiyyət',
                                color: 'bg-green-100',
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                ),
                                number: '1',
                                label: 'Mərhələ',
                                color: 'bg-green-100',
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                                number: '4',
                                label: 'Ay İnkişaf',
                                color: 'bg-green-100',
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`${stat.color} rounded-2xl p-8 text-center hover:scale-105 transition-transform`}
                            >
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-700 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
