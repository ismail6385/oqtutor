'use client'

import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HireTutor() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="border border-border rounded-2xl overflow-hidden max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2">
                        {/* Left Column - Image */}
                        <div className="relative h-64 md:h-96 lg:h-auto min-h-[400px]">
                            <Image
                                src="/images/student-4.jpeg"
                                alt="Quran student"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Right Column - Content with Teal Background */}
                        <div
                            className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                            style={{ backgroundColor: '#28D094' }}
                        >
                            {/* Main Heading */}
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                                style={{
                                    color: '#121117',
                                    fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                    fontWeight: 500
                                }}
                            >
                                Hire a quran
                                <br />
                                <span className="ml-0 md:ml-4">tutor</span>
                            </h2>

                            {/* Description */}
                            <p
                                className="text-lg md:text-xl mb-8 leading-relaxed"
                                style={{ color: '#121117' }}
                            >
                                Find expert Quran tutors who will guide you on your spiritual journey. Sign up to start learning online with OQTutor.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Find expert tutors',
                                    'Learn at your pace',
                                    'Get personalized lessons'
                                ].map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check
                                            className="w-6 h-6 flex-shrink-0 mt-0.5"
                                            style={{ color: '#121117' }}
                                        />
                                        <span
                                            className="text-lg"
                                            style={{ color: '#121117' }}
                                        >
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Primary CTA Button */}
                            <Link
                                href="/tutors"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 mb-6"
                                style={{
                                    backgroundColor: '#121117',
                                    color: '#ffffff'
                                }}
                            >
                                Hire a tutor
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            {/* Secondary Link */}
                            <Link
                                href="/how-it-works"
                                className="text-base underline hover:opacity-80 transition-opacity"
                                style={{ color: '#121117' }}
                            >
                                How our platform works
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

