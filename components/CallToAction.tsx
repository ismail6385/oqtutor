'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Start learning with the best Quran tutors
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                        Join thousands of students worldwide learning Quran online
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/tutors"
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-2xl"
                        style={{ backgroundColor: '#121117', color: '#ffffff' }}
                    >
                        Find your tutor
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
                        {[
                            { value: '10,000+', label: 'Students' },
                            { value: '500+', label: 'Tutors' },
                            { value: '50+', label: 'Countries' },
                            { value: '4.9/5', label: 'Rating' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/80">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
