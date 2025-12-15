'use client'

import { Search, Video, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HowItWorks() {
    const steps = [
        {
            number: '1',
            color: '#10B981', // Teal/Mint green
            title: 'Find your tutor.',
            description: "We'll connect you with a tutor who motivates, challenges, and supports you — from first lesson to fluency.",
            visual: 'tutors', // Will show tutor cards
        },
        {
            number: '2',
            color: '#FBBF24', // Yellow
            title: 'Start learning.',
            description: 'Your tutor will tailor every lesson to your learning goals, so progress feels personal from the very beginning.',
            visual: 'video', // Will show video call
        },
        {
            number: '3',
            color: '#3B82F6', // Blue
            title: 'Make progress every week.',
            description: 'Choose how many lessons you want to take and build lasting confidence, one conversation at a time.',
            visual: 'student', // Will show student learning
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                        style={{
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        How OQTutor works:
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Card */}
                            <div className="bg-white rounded-lg p-6 border border-foreground/20 hover:border-foreground/40 transition-all duration-300 h-full flex flex-col">
                                {/* Step Number Badge */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-6"
                                    style={{
                                        backgroundColor: step.color,
                                        color: '#ffffff'
                                    }}
                                >
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-base text-foreground leading-relaxed mb-6 flex-grow"
                                    style={{ color: '#121117' }}
                                >
                                    {step.description}
                                </p>

                                {/* Visual Content */}
                                <div className="mt-auto w-full">
                                    {step.visual === 'tutors' && (
                                        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-secondary">
                                            {/* Stacked Student Images Effect */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-2">
                                                <div className="relative w-24 h-32 rounded-lg shadow-lg border border-border transform rotate-2 z-10 overflow-hidden">
                                                    <Image
                                                        src="/images/student-9.jpeg"
                                                        alt="Student 9"
                                                        fill
                                                        className="object-cover"
                                                        sizes="96px"
                                                    />
                                                </div>
                                                <div className="relative w-24 h-32 rounded-lg shadow-lg border border-border transform -rotate-2 z-0 opacity-70 overflow-hidden">
                                                    <Image
                                                        src="/images/student-10.jpeg"
                                                        alt="Student 10"
                                                        fill
                                                        className="object-cover"
                                                        sizes="96px"
                                                    />
                                                </div>
                                                <div className="relative w-24 h-32 rounded-lg shadow-lg border border-border transform rotate-1 z-0 opacity-50 -ml-4 overflow-hidden">
                                                    <Image
                                                        src="/images/student-11.jpeg"
                                                        alt="Student 11"
                                                        fill
                                                        className="object-cover"
                                                        sizes="96px"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step.visual === 'video' && (
                                        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-secondary">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                                    <div className="relative w-32 h-24 bg-white rounded-lg shadow-xl border-2 border-white">
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <Video className="w-12 h-12 text-primary" />
                                                        </div>
                                                        {/* Video call UI elements */}
                                                        <div className="absolute top-2 right-2 w-16 h-12 bg-white/80 rounded border border-border"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step.visual === 'student' && (
                                        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-secondary">
                                            <div className="absolute inset-0">
                                                <Image
                                                    src="/images/student-12.jpeg"
                                                    alt="Student learning"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                                {/* Stacked effect overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Guarantee Section - Pink Background */}
                <div
                    className="mt-16 py-12 md:py-16 text-center rounded-2xl"
                    style={{ backgroundColor: '#ff7aac' }}
                >
                    <h3
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        style={{
                            color: '#121117',
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Lessons you'll love. Guaranteed.
                    </h3>
                    <p
                        className="text-lg md:text-xl"
                        style={{ color: '#121117' }}
                    >
                        Try another tutor for free if you're not satisfied.
                    </p>
                </div>
            </div>
        </section>
    )
}
