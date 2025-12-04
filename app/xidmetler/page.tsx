'use client';

import { useEffect, useState } from 'react';

export default function XidmetlerPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const services = [
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Sifariş İdarəetməsi',
            description: 'Bütün sifarişləri bir yerdən idarə edin və izləyin',
            features: ['Çox kanallı sifariş qəbulu', 'Masa idarəetməsi', 'Sifariş dəyişikliyi'],
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            bgColor: 'bg-purple-100',
            iconColor: 'text-purple-600',
            title: 'Menyu İdarəetməsi',
            description: 'Menyunuzu asanlıqla yaradın və yeniləyin',
            features: ['Kateqoriya və məhsul idarəetməsi', 'Qiymət və mövcudluq nəzarəti', 'Modifikatorlar və əlavələr'],
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'QR Menu Modulu',
            description: 'Müştərilər öz telefonlarından sifariş verə bilər',
            features: ['Toxunmasız sifariş', 'Çoxdilli dəstək', 'AI inteqrasiyası'],
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
            bgColor: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'Ödəniş Şəbəkəsi',
            description: 'Müxtəlif ödəniş metodlarını qəbul edin',
            features: ['Çox metodlu dəstək', 'Avtomatik uzlaşdırma', 'Yerli prosessor inteqrasiyası'],
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
            bgColor: 'bg-teal-100',
            iconColor: 'text-teal-600',
            title: 'İnventar İdarəetməsi',
            description: 'Məhsul stokunu real vaxtda izləyin',
            features: ['Real vaxt izləmə', 'Təchizatçı idarəetməsi', 'Aşağı stok xəbərdarlığı', 'İtki izləmə'],
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Analitika və Hesabatlar',
            description: 'Biznesi daha yaxşı başa düşün',
            features: ['Satış analitikası', 'Menyu performansı', 'İşçi məhsuldarlığı', 'Xüsusi hesabatlar'],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Tam Funksional Platform
                    </div>
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-gray-900 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        Hər Şey Bir Platformada
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${mounted ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                        Restoranınızı idarə etmək üçün lazım olan bütün alətlər
                    </p>
                </div>
            </section>

            {/* Əsas Xidmətlər */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Əsas Xidmətlər</h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className={`w-16 h-16 ${service.bgColor} ${service.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Əlavə Funksiyalar */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Əlavə Funksiyalar</h2>
                    <p className="text-center text-lg text-gray-600 mb-16">Restoranınızı tam idarə etmək üçün</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: 'İşçi İdarəetməsi', description: 'Komandanızı effektiv idarə edin', features: ['İş vaxtı izləmə', 'Rol əsaslı giriş', 'Performans izləmə'], color: 'bg-pink-100 text-pink-600' },
                            { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, title: 'Mətbəx Ekran Sistemi', description: 'Sifarişləri mətbəxdə optimallaşdırın', features: ['Sifariş prioritetləşdirilməsi', 'Hazırlıq taymerləri', 'Status yeniləmələri'], color: 'bg-red-100 text-red-600' },
                            { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: 'Abunə İdarəetməsi', description: 'Çevik və şəffaf abunə planları', features: ['Çevik planlar', 'İstifadə əsaslı ödəniş', 'Asan yüksəltmə'], color: 'bg-yellow-100 text-yellow-600' },
                            { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>, title: 'Bildirişlər', description: 'Real vaxt məlumatlandırma sistemi', features: ['Sifariş bildirişləri', 'Stok xəbərdarlıqları', 'İşçi yeniləmələri'], color: 'bg-green-100 text-green-600' },
                            { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, title: 'Multi-Tenant Sistem', description: 'Çoxlu filialları idarə edin', features: ['Filial idarəetməsi', 'Mərkəzləşdirilmiş hesabat', 'Brend fərdiləşdirilməsi'], color: 'bg-blue-100 text-blue-600' },
                            { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: 'CRM', description: 'Müştəri münasibətlərini inkişaf etdirin', features: ['Müştəri bazası', 'Loyallıq proqramları', 'Marketinq kampaniyaları'], color: 'bg-purple-100 text-purple-600' },
                        ].map((func, i) => (
                            <div
                                key={i}
                                className={`bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 ${mounted ? 'animate-scaleIn' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                <div className={`w-16 h-16 ${func.color} rounded-xl flex items-center justify-center mb-4`}>
                                    {func.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{func.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{func.description}</p>
                                <ul className="space-y-2">
                                    {func.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mövcud Sistemlərlə İnteqrasiya */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Mövcud Sistemlərlə İnteqrasiya</h2>
                    <p className="text-lg text-gray-600 mb-8">Yeni avadanlıq almağa ehtiyac yoxdur</p>
                    
                    <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-12">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Plug & Play
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                        {[
                            { name: 'ABB Terminals', subtitle: 'Bank POS', icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, color: 'bg-red-100 text-red-600' },
                            { name: 'PashaPay', subtitle: 'Digital Wallet', icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, color: 'bg-blue-100 text-blue-600' },
                            { name: 'Cuzdan', subtitle: 'Payment Gateway', icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, color: 'bg-green-100 text-green-600' },
                            { name: 'AzeriCard', subtitle: 'Local Cards', icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, color: 'bg-orange-100 text-orange-600' },
                            { name: 'MilliKart', subtitle: 'National Card', icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, color: 'bg-purple-100 text-purple-600' },
                        ].map((integration, i) => (
                            <div
                                key={i}
                                className={`${integration.color} w-32 h-32 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-lg hover:shadow-xl p-4`}
                            >
                                <div className="mb-2">{integration.icon}</div>
                                <span className="text-xs font-semibold text-center mb-1">{integration.name}</span>
                                <span className="text-xs text-gray-600 text-center">{integration.subtitle}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Mövcud avadanlığınızla işləyir
                    </div>
                </div>
            </section>
        </>
    );
}
