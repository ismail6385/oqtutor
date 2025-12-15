'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CorporateTraining() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left Section - Text Content */}
                    <div className="space-y-6">
                        {/* Main Heading */}
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Quran learning for
                            <br />
                            families and groups
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-foreground leading-relaxed">
                            OQTutor group training is designed for families and communities offering personalized Quran learning with online tutors. Book a demo to learn more about our group programs.
                        </p>

                        {/* Question */}
                        <div className="pt-4">
                            <p className="text-lg text-foreground mb-2">
                                Do you want your organization to sponsor your lessons?
                            </p>
                            <Link
                                href="/contact"
                                className="text-lg text-foreground underline hover:opacity-80 transition-opacity"
                            >
                                Refer your organization now!
                            </Link>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                style={{
                                    backgroundColor: '#7B68EE',
                                    color: '#ffffff'
                                }}
                            >
                                Book a demo
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 border-foreground hover:bg-foreground hover:text-white transition-all duration-300"
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#121117',
                                    borderColor: '#121117'
                                }}
                            >
                                Refer your organization
                            </Link>
                        </div>
                    </div>

                    {/* Right Section - Visual Content */}
                    <div className="relative h-64 md:h-80 lg:h-96">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Student Images in Stacked Layout */}
                            <div className="relative w-full max-w-md h-full flex items-center justify-center">
                                {/* Left Student Image */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-40 rounded-lg shadow-lg transform rotate-6 z-10 overflow-hidden">
                                    <Image
                                        src="/images/student-5.jpeg"
                                        alt="Student learning Quran"
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                    />
                                </div>

                                {/* Center Student Image */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-44 rounded-lg shadow-xl z-20 overflow-hidden">
                                    <Image
                                        src="/images/student-6.jpeg"
                                        alt="Student learning Quran"
                                        fill
                                        className="object-cover"
                                        sizes="144px"
                                    />
                                </div>

                                {/* Right Student Image */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-40 rounded-lg shadow-lg transform -rotate-6 z-10 overflow-hidden">
                                    <Image
                                        src="/images/student-7.jpeg"
                                        alt="Student learning Quran"
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                    />
                                </div>

                                {/* Labels */}
                                <div className="absolute top-8 left-8 px-3 py-1 bg-yellow-400 rounded text-sm font-semibold text-foreground shadow-md">
                                    Quran
                                </div>
                                <div className="absolute top-12 right-12 px-3 py-1 bg-yellow-400 rounded text-sm font-semibold text-foreground shadow-md">
                                    Tajweed
                                </div>
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 rounded text-sm font-semibold text-foreground shadow-md">
                                    Hifz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

