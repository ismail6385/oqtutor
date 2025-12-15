'use client'

import { Video, Clock, Award, HeadphonesIcon, Shield, TrendingUp } from 'lucide-react'

export default function Features() {
    const features = [
        {
            icon: Video,
            title: 'Live 1-on-1 Classes',
            description: 'Personal attention from expert tutors in interactive video sessions tailored to your learning pace.',
        },
        {
            icon: Clock,
            title: 'Flexible Scheduling',
            description: 'Book lessons at times that work for you. Learn at your own pace, on your own schedule.',
        },
        {
            icon: Award,
            title: 'Certified Tutors',
            description: 'All our tutors are certified, experienced, and passionate about teaching the Quran.',
        },
        {
            icon: HeadphonesIcon,
            title: '24/7 Support',
            description: 'Our dedicated support team is always here to help you with any questions or concerns.',
        },
        {
            icon: Shield,
            title: 'Safe & Secure',
            description: 'Your privacy and security are our top priorities. All sessions are encrypted and secure.',
        },
        {
            icon: TrendingUp,
            title: 'Track Progress',
            description: 'Monitor your learning journey with detailed progress reports and achievement milestones.',
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Everything you need to master the Quran
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We provide a comprehensive learning experience with the best tools,
                        tutors, and support to help you achieve your Quranic goals.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 mb-6 flex items-center justify-center">
                                <feature.icon className="w-7 h-7 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
