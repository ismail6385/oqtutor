'use client'

import { useState } from 'react'
import { ArrowRight, Check, DollarSign, Clock, TrendingUp, Globe, Calendar, Users, Video, Shield, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BecomeATutorPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const steps = [
        {
            number: '1',
            title: 'Sign up',
            description: 'to create your tutor profile',
        },
        {
            number: '2',
            title: 'Get approved',
            description: 'by our team in 5 business days',
        },
        {
            number: '3',
            title: 'Start earning',
            description: 'by teaching students all over the world!',
        },
    ]

    const features = [
        {
            icon: DollarSign,
            title: 'Set your own rate',
            description: 'Choose your hourly rate and change it anytime. On average, Quran tutors charge $12-25 per hour.',
        },
        {
            icon: Clock,
            title: 'Teach anytime, anywhere',
            description: 'Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule. Be your own boss!',
        },
        {
            icon: TrendingUp,
            title: 'Grow professionally',
            description: 'Once you sign up and complete your application, you can be approved and start teaching in as little as three days.',
        },
    ]

    const platformFeatures = [
        'Steady stream of new students',
        'Smart calendar',
        'Interactive classroom',
        'Convenient payment methods',
        'Professional development webinars',
        'Supportive tutor community',
    ]

    const faqs = [
        {
            question: 'What kind of tutors does OQTutor look for?',
            answer: 'No specific certification or teaching experience is required! We welcome tutors who enjoy sharing knowledge and making a difference in students\' lives, have outstanding communication skills, and are willing to provide a personalized learning experience to international students.',
        },
        {
            question: 'What subject can I teach?',
            answer: 'We have multiple Quran-related subjects on OQTutor, including Quran Reading, Tajweed, Hifz (Memorization), Arabic Language, Islamic Studies, and Tafseer.',
        },
        {
            question: 'How do I become an online tutor at OQTutor?',
            answer: '1. Provide some basic information about yourself\n2. Upload your headshot photo\n3. Describe your strengths as a tutor\n4. Record a short video introduction (up to 2 mins long)\n5. Choose your availability\n\nYou\'ll see tips and examples at each step of the registration process to help you create a great tutor profile. When you complete registration, our Tutor Success team will review your profile within 5 business days. Once your profile is approved, students from around the world will see it on OQTutor and will be able to book lessons with you.',
        },
        {
            question: 'How can I get my profile approved quickly?',
            answer: 'Sometimes, we don\'t approve tutor profiles at the first attempt because the profile photo, video or description doesn\'t meet our requirements. Make sure you use a real photo of yourself, take the time to record a short video and describe your strengths as a tutor in the description. A surefire way to get approved is to follow the tips given at each step of the registration process.\n\nAlso, be sure to avoid mentioning any contact details, lesson prices or misleading information in your profile description and video. We\'ll ask you to remove this information, which will slow down the approval process.',
        },
        {
            question: 'Why should I teach on OQTutor?',
            answer: 'Because it\'s easy and flexible! If you teach with OQTutor, you:\n• earn by sharing what you know\n• get a steady stream of new students looking to learn online\n• manage your lessons and connect with students easily\n• teach whenever and wherever you want\n• use safe payment methods (Paypal, Payoneer, Skrill or Transferwise)\n• get support from our friendly team through professional development webinars, live chat and email\n• join a community of expert tutors who are always there for you\n\n...and more to come! We\'re constantly improving the platform and teaching tools for our tutors based on their needs.',
        },
        {
            question: 'What computer equipment do I need to teach on OQTutor?',
            answer: 'You will need a laptop or a desktop computer, a stable internet connection, a webcam, and a microphone for conducting lessons in the OQTutor virtual classroom.',
        },
        {
            question: 'Is it free to create a tutor profile on OQTutor?',
            answer: 'Yes. It is free to create a tutor profile, get exposure to students, and use OQTutor\'s tools and materials. We only charge a commission for the lessons that you have taught. The commission for a trial lesson with a new student is 100%. The commission for the subsequent lessons starts at 33% and decreases to 18%: the more hours you teach on OQTutor, the lower the rate of commission.',
        },
        {
            question: 'How much can I earn on OQTutor?',
            answer: 'Most popular tutors on OQTutor earn up to $400 a week. Your earnings depend on the hourly rate you set, the number of lessons you teach and how many students continue learning with you after the trial lesson. A tip for newly registered tutors: start with a lower hourly rate to get first students faster. You can change your rate anytime.\n\nOQTutor takes a commission fee from your lessons to bring in more students from around the globe, and develop an easy-to-use video tool and learning materials for your lessons. We provide free professional development webinars and multilingual customer support to guide you along every step of your tutoring journey.\n\nThe commission for every trial lesson with a new student is 100%. For all subsequent lessons, the commission starts at 33% and decreases to 18% based on how many hours you\'ve taught on the platform.',
        },
    ]

    return (
        <div className="min-h-screen pt-20 bg-white">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Make a living by teaching the largest community of learners worldwide
                        </h1>

                        {/* 3 Steps */}
                        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-12">
                            {steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto"
                                        style={{ backgroundColor: '#7B68EE' }}
                                    >
                                        {step.number}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-foreground mb-2"
                                        style={{
                                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                            fontWeight: 500
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300"
                            style={{ backgroundColor: '#121117', color: '#ffffff' }}
                        >
                            Create a tutor profile now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-border">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 mb-6 flex items-center justify-center">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3
                                    className="text-2xl font-bold text-foreground mb-4"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
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

            {/* Teach Students Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Teach students from over 50 countries
                        </h2>
                        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                            OQTutor tutors teach 300+ students globally. Join us and you'll have everything you need to teach successfully.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {platformFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300"
                                style={{ backgroundColor: '#121117', color: '#ffffff' }}
                            >
                                Create a tutor profile now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-border">
                            <p className="text-2xl md:text-3xl font-bold text-foreground mb-6 italic">
                                "OQTutor allowed me to make a living without leaving home!"
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                Sheikh Ahmed M. ・ Quran & Tajweed tutor
                            </p>
                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300"
                                style={{ backgroundColor: '#121117', color: '#ffffff' }}
                            >
                                Create a tutor profile now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Frequently asked questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                                    >
                                        <span className="text-lg font-bold text-foreground">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                            }`}
                                    >
                                        <div className="px-8 pb-6">
                                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Get paid to teach online
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                            Connect with thousands of learners around the world and teach from your living room
                        </p>

                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-2xl"
                            style={{ backgroundColor: '#121117', color: '#ffffff' }}
                        >
                            Create a tutor profile now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

