'use client'

import { BookOpen, Languages, Brain, Star, GraduationCap, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
    const services = [
        {
            icon: BookOpen,
            title: 'Quran Reading',
            description: 'Learn to read the Quran with proper pronunciation and fluency from beginner to advanced levels.',
            link: '/courses/quran-reading',
        },
        {
            icon: Star,
            title: 'Tajweed',
            description: 'Master the rules of Tajweed to recite the Quran beautifully with correct articulation points.',
            link: '/courses/tajweed',
        },
        {
            icon: Brain,
            title: 'Hifz (Memorization)',
            description: 'Structured memorization program with proven techniques to help you memorize the entire Quran.',
            link: '/courses/hifz',
        },
        {
            icon: Languages,
            title: 'Arabic Language',
            description: 'Learn Arabic from scratch or improve your existing skills to understand the Quran better.',
            link: '/courses/arabic',
        },
        {
            icon: GraduationCap,
            title: 'Islamic Studies',
            description: 'Comprehensive Islamic education covering Fiqh, Hadith, Seerah, and Islamic history.',
            link: '/courses/islamic-studies',
        },
        {
            icon: Heart,
            title: 'Tafseer',
            description: 'Understand the deeper meanings and context of Quranic verses through detailed Tafseer lessons.',
            link: '/courses/tafseer',
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Comprehensive Quran & Islamic education
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Choose from our wide range of courses designed to help you grow in your Islamic knowledge
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="block p-8 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 mb-6 flex items-center justify-center">
                                <service.icon className="w-8 h-8 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center gap-2 text-primary font-semibold">
                                Learn more
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
