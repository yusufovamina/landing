'use client';

import { useEffect, useState } from 'react';

export default function HaqqimizdaPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-sm text-gray-600">Made in Baku</span>
                    </div>
                    <h1 className={`text-5xl font-bold mb-6 leading-tight ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        Azərbaycan üçün,<br />Azərbaycanlılar tərəfindən
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${mounted ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                        MasaPay ilə restoranınrın biznesin döçin ölüm ölümüadırlar mütləqisq mümkün
                        istənməyən sistemləq. Bir Azərbaycan üz biznesləri problemləri həll edib böyümə
                        dəstəği
                    </p>
                </div>
            </section>

            {/* Missiyamız */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className={`text-center mb-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Missiyamız</h2>
                            <p className="text-gray-600 text-lg">
                                Restoranların hər ölçüsü üçün peşəkar texnologiya təmin etmək. Bahalı və mürəkkəb xarici sistemlərdən uzaqlaşaraq, yerli bazarın ehtiyaclarına uyğun asan və effektiv həllər təklif etmək.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: 'Yerli Fokus',
                                    description: 'Azərbaycan bazarının spesifik ehtiyaclarına uyğun həllər',
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ),
                                    title: 'Əlçatanlıq',
                                    description: 'Kiçik və orta bizneslər üçün münasib qiymətlər',
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: 'İnnovasiya',
                                    description: 'AI və müasir texnologiyalarla gələcəyə addım',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`card text-center hover:shadow-lg ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                    style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-600">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vizyonumuz */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className={mounted ? 'animate-fadeInUp' : 'opacity-0'}>
                            <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
                            <p className="text-gray-600 mb-6">
                                Azərbaycanda restoran sənayesini rəqəmsallaşdırmaq və hər restoran sahibinə dünya standartı texnologiya təmin etmək.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Biz inanırıq ki, texnologiya yalnız böyük şəbəkələr üçün deyil, hər kiçik kafe və restoran üçün əlçatan olmalıdır.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { text: '2025-ci ildə MVP buraxılışı', subtext: 'İlk versiya Bakı bazarında test ediləcək' },
                                    { text: '2026-da tam funksionallıq', subtext: 'Bütün modullar və xüsusiyyətlər aktiv olacaq' },
                                    { text: 'Regional genişlənmə', subtext: 'Azərbaycanın bütün regionlarına çatmaq' },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-medium">{item.text}</div>
                                            <div className="text-sm text-gray-600">{item.subtext}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Goals Card */}
                        <div className={`${mounted ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-2 mb-6">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <h3 className="text-xl font-bold">Bizim Dəyərlərimiz</h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.924 10.29 9 11.622 5.076-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Etibarlılıq', desc: 'Müştəri məlumatlarının təhlükəsizliyi bizim prioritetimizdir' },
                                        { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'Sadəlik', desc: 'İstifadəsi asan və öyrənməsi sadə interfeys' },
                                        { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: 'Dəstək', desc: 'Azərbaycan dilində 24/7 texniki dəstək' },
                                        { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'İnkişaf', desc: 'Davamlı yeniləmələr və təkmilləşdirmələr' },
                                    ].map((value, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="text-green-600">{value.icon}</div>
                                            <div>
                                                <h4 className="font-semibold mb-1">{value.title}</h4>
                                                <p className="text-sm text-gray-600">{value.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bizimle Əlaqə */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-4 text-center">Bizimlə Əlaqə</h2>
                    <p className="text-center text-gray-600 mb-12">Sualınız var? Biz sizə kömək etməyə hazırıq</p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <div className={`card text-center hover:shadow-xl ${mounted ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-600 mb-4">Bizə email göndərin</p>
                            <a href="mailto:masapay.workspace@gmail.com" className="text-green-600 font-medium hover:underline">
                                masapay.workspace@gmail.com
                            </a>
                        </div>

                        <div className={`card text-center hover:shadow-xl ${mounted ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                            <p className="text-gray-600 mb-4">Bizimlə zəng vasitəsilə əlaqə saxlayın</p>
                            <a href="tel:+994509888972" className="text-green-600 font-medium hover:underline">
                                +994 50 988 89 72
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sosial Mədədə */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="text-2xl font-bold mb-4">Sosial Mediada Bizi İzləyin</h2>
                    <p className="text-gray-600 mb-8">Yeniliklərdən xəbərdar olmaq üçün sosial mediada qoşulun</p>

                    <div className="flex justify-center gap-4">
                        {[
                            { name: 'LinkedIn', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" /></svg>, color: 'bg-blue-600' },
                            { name: 'Instagram', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>, color: 'bg-pink-600' },
                            { name: 'Facebook', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, color: 'bg-blue-700' },
                            { name: 'Twitter', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>, color: 'bg-sky-500' },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`${social.color} w-14 h-14 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg hover:shadow-xl`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Gələcəyin Restoran Sistemini İndi Kəşf Edin
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        MasaPay ilə restoranınızın (Biznes) təchizatını sistemi
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105">
                            Əlaqə Saxlayın
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                            Daha Ətraflı
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
