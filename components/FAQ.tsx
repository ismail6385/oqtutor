'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'How do I get started with OQTutor?',
            answer: 'Simply browse our tutors, select one that matches your needs, and book a free trial lesson. No credit card required for the trial.',
        },
        {
            question: 'What qualifications do your tutors have?',
            answer: 'All our tutors are certified Quran teachers with Ijazah in Quran recitation and Tajweed. They have at least 3 years of teaching experience.',
        },
        {
            question: 'Can I change my tutor if needed?',
            answer: 'Absolutely! You can easily switch to another tutor at no additional cost. Just contact our support team.',
        },
        {
            question: 'What technology do I need for online lessons?',
            answer: 'You need a device with a stable internet connection, webcam, and microphone. Our platform works on all major browsers.',
        },
        {
            question: 'How long are the lessons?',
            answer: 'Standard lessons are 60 minutes long. We also offer 30-minute sessions for younger children.',
        },
        {
            question: 'What if I need to cancel or reschedule?',
            answer: 'You can cancel or reschedule lessons up to 24 hours before the scheduled time without any penalty.',
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                            style={{ 
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Frequently asked questions
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Everything you need to know about OQTutor
                        </p>
                    </div>

                    {/* FAQ Items */}
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
                                        <p className="text-muted-foreground leading-relaxed">
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
    )
}
