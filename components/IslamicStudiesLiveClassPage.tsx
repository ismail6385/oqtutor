"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Star, Check } from "lucide-react"

export default function IslamicStudiesLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Module 1: Introduction to Islamic Studies",
            topics: [
                "Overview of Islamic knowledge",
                "Importance of seeking knowledge in Islam",
                "Different branches of Islamic sciences",
                "How to approach Islamic learning",
                "Setting goals for Islamic education"
            ]
        },
        {
            title: "Module 2: Fiqh (Islamic Jurisprudence)",
            topics: [
                "Introduction to Fiqh and its sources",
                "Rulings on worship (Ibadat)",
                "Rulings on transactions (Muamalat)",
                "Family law in Islam",
                "Contemporary Fiqh issues"
            ]
        },
        {
            title: "Module 3: Seerah (Life of Prophet Muhammad ﷺ)",
            topics: [
                "Birth and early life of the Prophet ﷺ",
                "The first revelation and early Islam",
                "Migration to Madinah (Hijrah)",
                "Major battles and events",
                "Character and teachings of the Prophet ﷺ"
            ]
        },
        {
            title: "Module 4: Islamic History & Civilization",
            topics: [
                "The Rightly Guided Caliphs (Khulafa Rashidun)",
                "Islamic Golden Age and contributions",
                "Major Islamic empires and dynasties",
                "Scholars and their contributions",
                "Lessons from Islamic history"
            ]
        },
        {
            title: "Module 5: Aqeedah (Islamic Beliefs)",
            topics: [
                "Tawheed (Oneness of Allah)",
                "Belief in Angels, Books, and Prophets",
                "Day of Judgment and the Hereafter",
                "Qadr (Divine Decree)",
                "Common misconceptions about Islamic beliefs"
            ]
        },
        {
            title: "Module 6: Contemporary Islamic Issues",
            topics: [
                "Islam and modern science",
                "Islamic perspective on social media",
                "Family and relationships in modern times",
                "Islamic economics and finance",
                "Addressing doubts and questions"
            ]
        }
    ]

    const testimonials = [
        {
            text: "This course deepened my understanding of Islam. I feel more confident in my faith now!",
            author: "Ahmed R.",
            rating: 5
        },
        {
            text: "Learning about Seerah changed my life. The Prophet's ﷺ character inspires me daily.",
            author: "Fatima K.",
            rating: 5
        },
        {
            text: "The Fiqh lessons helped me understand Islamic rulings clearly. Very practical!",
            author: "Yusuf M.",
            rating: 5
        },
        {
            text: "Islamic history was fascinating! I never knew about our rich heritage.",
            author: "Aisha S.",
            rating: 5
        },
        {
            text: "The contemporary issues module answered so many questions I had. Highly recommend!",
            author: "Ibrahim T.",
            rating: 5
        },
        {
            text: "My children are learning Islamic values and history. Alhamdulillah for this course!",
            author: "Mariam A. (Parent)",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "Who should take this course?",
            answer: "This course is for anyone who wants to deepen their Islamic knowledge beyond basic Quran reading. It's suitable for teenagers and adults who want comprehensive Islamic education."
        },
        {
            question: "Do I need prior Islamic knowledge?",
            answer: "Basic knowledge of Islam is helpful but not required. We start from fundamentals and build up gradually. The course is designed for all levels."
        },
        {
            question: "How is this different from Quran classes?",
            answer: "While Quran classes focus on reading and understanding the Quran, Islamic Studies covers broader topics like Fiqh, Seerah, history, and contemporary issues. Both complement each other."
        },
        {
            question: "Will this help me in my daily life?",
            answer: "Absolutely! You'll learn how to apply Islamic principles to modern challenges, make informed decisions according to Islamic teachings, and develop strong Islamic character."
        },
        {
            question: "How long does it take to complete?",
            answer: "The complete course takes 6-12 months depending on your pace and class frequency. However, you'll benefit from each module as you progress."
        },
        {
            question: "Do you cover different schools of thought (Madhabs)?",
            answer: "Yes! We present different scholarly opinions respectfully and help you understand the reasoning behind different viewpoints."
        },
        {
            question: "Can I ask questions about contemporary issues?",
            answer: "Definitely! We encourage questions and discussions. Our teachers provide Islamic perspective on modern challenges and current affairs."
        },
        {
            question: "Is this suitable for converts/reverts?",
            answer: "Yes! This course is excellent for new Muslims who want to build a strong foundation in Islamic knowledge. We provide patient, comprehensive guidance."
        }
    ]

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#FF7AAC' }}>
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                                    style={{
                                        color: '#121117',
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    Islamic Studies
                                    <br />
                                    Online Classes
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Comprehensive Islamic education covering Fiqh, Seerah, Islamic history, and contemporary issues. Deepen your understanding of Islam and become a well-rounded Muslim with expert guidance.
                                </p>
                                <Link
                                    href="/contact?source=IslamicStudies&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Start Your Islamic Journey
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Column - Student Images */}
                        <div className="relative h-[500px] lg:h-[600px]">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative w-full h-full"
                            >
                                {/* Student Image 1 - Top Right */}
                                <div className="absolute top-0 right-0 w-64 md:w-80 h-48 md:h-56 rounded-2xl shadow-2xl overflow-hidden z-10 border-4 border-white transform rotate-2">
                                    <Image
                                        src="/images/student-1.jpeg"
                                        alt="Islamic Studies student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-2.jpeg"
                                        alt="Student learning Islamic Studies"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-3.jpeg"
                                        alt="Online Islamic education"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 224px, 288px"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <nav className="text-sm text-gray-600">
                        <Link href="/" className="hover:text-foreground">OQTutor</Link>
                        <span className="mx-2">/</span>
                        <Link href="/courses" className="hover:text-foreground">Online courses</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">Islamic Studies</span>
                    </nav>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="bg-white py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Main Heading */}
                            <div>
                                <h1
                                    className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    Online Islamic Studies Classes - Comprehensive Islamic Education
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Our Islamic Studies course provides a comprehensive understanding of Islam beyond just Quran. Students will learn Islamic jurisprudence (Fiqh), the life of Prophet Muhammad ﷺ (Seerah), Islamic history, and contemporary Islamic issues.
                                    </p>
                                    <p>
                                        This course helps you become a well-rounded Muslim with deep knowledge of your faith. You'll understand not just WHAT Islam teaches, but WHY and HOW to apply these teachings in your daily life.
                                    </p>
                                    <p>
                                        Learn from qualified Islamic scholars who make complex topics easy to understand. Whether you're seeking knowledge for personal growth or want to teach others, this course provides the foundation you need.
                                    </p>
                                </div>
                            </div>

                            {/* What will you learn */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    What will you learn in Islamic Studies?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Islamic jurisprudence (Fiqh)</strong> - Understand Islamic rulings on worship, transactions, and daily matters.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Life of Prophet Muhammad ﷺ (Seerah)</strong> - Detailed study of the Prophet's life, character, and teachings.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Islamic history and civilization</strong> - Major events, personalities, and contributions of Muslims.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Contemporary Islamic issues</strong> - Islamic perspective on modern challenges and questions.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Character development</strong> - Build Islamic character and values through knowledge.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Curriculum Section */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    Complete Islamic Studies Curriculum
                                </h2>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {curriculum.map((module, index) => (
                                        <AccordionItem key={index} value={`module-${index}`} className="border border-border rounded-xl overflow-hidden">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                        {index + 1}
                                                    </div>
                                                    <span className="text-left font-semibold text-lg">{module.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-6">
                                                <ul className="space-y-2 ml-14">
                                                    {module.topics.map((topic, topicIndex) => (
                                                        <li key={topicIndex} className="flex items-start gap-2 text-gray-700">
                                                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                            <span>{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                            {/* Testimonials */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    What Our Students Say
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {testimonials.map((testimonial, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                                        >
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                                            <p className="font-semibold text-foreground">- {testimonial.author}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    Frequently Asked Questions
                                </h2>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-xl overflow-hidden">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-semibold">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-6 text-gray-700">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Enrollment Card */}
                                <div className="bg-white rounded-2xl border-2 border-primary/20 p-6 shadow-lg">
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">Start Learning Today</h3>
                                    <p className="text-gray-600 mb-6">Deepen your Islamic knowledge with expert scholars. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Qualified Scholars</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Comprehensive Curriculum</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Practical Application</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-semibold mb-3"
                                        style={{ backgroundColor: '#FF7AAC', color: '#ffffff' }}
                                        asChild
                                    >
                                        <Link href="/contact?source=IslamicStudies&interest=FreeTrial">Book Free Trial</Link>
                                    </Button>
                                    <p className="text-xs text-center text-gray-500">No credit card required</p>
                                </div>

                                {/* Help Card */}
                                <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                                    <h4 className="font-semibold mb-2 text-foreground">Need Help?</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Speak to our academic counselor for guidance on the best learning path.
                                    </p>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
