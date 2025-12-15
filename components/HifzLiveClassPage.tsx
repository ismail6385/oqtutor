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

export default function HifzLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Phase 1: Juz 30 (Amma Para)",
            topics: [
                "Starting with short Surahs for easy memorization",
                "Building confidence with familiar verses",
                "Establishing daily memorization routine",
                "Learning revision techniques",
                "Completing Juz 30 with Tajweed"
            ]
        },
        {
            title: "Phase 2: Selected Important Surahs",
            topics: [
                "Surah Yaseen (Heart of the Quran)",
                "Surah Al-Mulk (The Sovereignty)",
                "Surah Ar-Rahman (The Most Merciful)",
                "Surah Al-Waqiah (The Inevitable)",
                "Daily Duas and Surahs for prayers"
            ]
        },
        {
            title: "Phase 3: Systematic Full Quran Hifz",
            topics: [
                "Structured memorization plan (Juz by Juz)",
                "Daily new memorization (Sabaq)",
                "Recent revision (Sabaq Para)",
                "Old revision (Aam Muraja'ah)",
                "Progress tracking and assessment"
            ]
        },
        {
            title: "Phase 4: Revision & Retention Techniques",
            topics: [
                "Daily, weekly, and monthly revision schedules",
                "Techniques to prevent forgetting",
                "Linking verses for better retention",
                "Understanding meanings for stronger memory",
                "Recitation practice for fluency"
            ]
        },
        {
            title: "Phase 5: Tajweed Perfection During Hifz",
            topics: [
                "Correcting pronunciation while memorizing",
                "Applying Tajweed rules accurately",
                "Voice modulation and beautification",
                "Reciting with proper Makhraj",
                "Preparing for Ijazah (if desired)"
            ]
        },
        {
            title: "Phase 6: Final Assessment & Certification",
            topics: [
                "Complete Quran recitation test",
                "Random page recitation assessment",
                "Tajweed accuracy evaluation",
                "Hifz completion certificate",
                "Guidance for maintaining Hifz lifelong"
            ]
        }
    ]

    const testimonials = [
        {
            text: "Alhamdulillah! I completed my Hifz in 2.5 years. The structured approach made it achievable.",
            author: "Yusuf M.",
            rating: 5
        },
        {
            text: "My son is now a Hafiz at age 12. The teachers were patient and encouraging throughout.",
            author: "Fatima K. (Parent)",
            rating: 5
        },
        {
            text: "The revision techniques taught here are amazing. I haven't forgotten what I memorized!",
            author: "Ahmed R.",
            rating: 5
        },
        {
            text: "Starting Hifz as an adult seemed impossible, but this program made it doable. I'm halfway through!",
            author: "Aisha S.",
            rating: 5
        },
        {
            text: "The daily tracking and accountability kept me motivated. Best decision of my life!",
            author: "Ibrahim T.",
            rating: 5
        },
        {
            text: "My daughter loves her Hifz classes. She's memorized 5 Juz so far. Alhamdulillah!",
            author: "Mariam A. (Parent)",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "What is the best age to start Hifz?",
            answer: "While childhood (ages 7-15) is ideal due to stronger memory retention, adults can also successfully memorize the Quran with dedication and consistent practice. We have students of all ages in our Hifz program."
        },
        {
            question: "How long does it take to complete Hifz?",
            answer: "It varies by individual. Children typically complete in 2-3 years with daily classes. Adults may take 3-5 years. The key is consistency, not speed. Quality memorization with proper Tajweed is our priority."
        },
        {
            question: "Do I need to know how to read Quran first?",
            answer: "Yes, you should be able to read the Quran fluently with basic Tajweed before starting Hifz. We recommend completing our Nazara Quran course first if you're not a fluent reader."
        },
        {
            question: "How much time do I need to dedicate daily?",
            answer: "For effective Hifz, we recommend at least 1-2 hours daily: 30-45 minutes for new memorization (Sabaq), 30 minutes for recent revision (Sabaq Para), and 30 minutes for old revision (Muraja'ah)."
        },
        {
            question: "What if I forget what I've memorized?",
            answer: "Forgetting is natural and part of the process. Our structured revision system (Sabaq, Sabaq Para, Muraja'ah) is specifically designed to prevent forgetting and strengthen retention."
        },
        {
            question: "Will I get a certificate after completing Hifz?",
            answer: "Yes! Upon successful completion and passing the final assessment, you'll receive a Hifz completion certificate. We also offer Ijazah preparation for those who wish to pursue it."
        },
        {
            question: "Can I memorize specific Surahs instead of the whole Quran?",
            answer: "Absolutely! We offer partial Hifz programs where you can memorize selected Surahs like Yaseen, Mulk, Rahman, or any Juz of your choice."
        },
        {
            question: "How do you ensure I don't forget after completing Hifz?",
            answer: "We teach lifelong revision techniques and provide a maintenance schedule. Many of our graduates continue with our Muraja'ah (revision) classes to keep their Hifz fresh."
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
                                    Hifz (Quran Memorization)
                                    <br />
                                    Online Program
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Embark on the blessed journey of memorizing the Holy Quran. Our comprehensive Hifz program provides structured guidance, daily revision, and expert support to help you become a Hafiz/Hafiza.
                                </p>
                                <Link
                                    href="/contact?source=Hifz&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Begin Your Hifz Journey
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
                                        src="/images/student-4.jpeg"
                                        alt="Hifz student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-5.jpeg"
                                        alt="Student memorizing Quran"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-6.jpeg"
                                        alt="Online Hifz program"
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
                        <span className="text-foreground">Hifz (Memorization)</span>
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
                                    Online Hifz Program - Memorize the Holy Quran with Expert Guidance
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Our Hifz program is a comprehensive and structured course for memorizing the Holy Quran. Whether you want to memorize the entire Quran or specific Surahs, our experienced tutors provide personalized guidance and regular revision sessions to ensure strong retention.
                                    </p>
                                    <p>
                                        The Prophet Muhammad ﷺ said: "The best among you are those who learn the Quran and teach it." Becoming a Hafiz/Hafiza is one of the greatest honors in Islam, bringing immense rewards in this life and the Hereafter.
                                    </p>
                                    <p>
                                        With our proven methodology combining daily new memorization (Sabaq), recent revision (Sabaq Para), and old revision (Muraja'ah), students develop strong retention and never forget what they've memorized.
                                    </p>
                                </div>
                            </div>

                            {/* What will you achieve */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    What will you achieve in our Hifz program?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Systematic memorization plan</strong> - Structured approach to memorize the Quran efficiently.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Regular revision (Muraja'ah)</strong> - Daily, weekly, and monthly revision to prevent forgetting.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Tajweed correction during memorization</strong> - Perfect pronunciation while you memorize.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Progress tracking</strong> - Monitor your journey with detailed progress reports.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Certification upon completion</strong> - Receive official Hifz certificate and Ijazah preparation.</span>
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
                                    Complete Hifz Program Structure
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
                                    Success Stories from Our Huffaz
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
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">Start Your Hifz Journey</h3>
                                    <p className="text-gray-600 mb-6">Begin memorizing the Quran with expert guidance. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Expert Huffaz Tutors</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Structured Program</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Daily Revision</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-semibold mb-3"
                                        style={{ backgroundColor: '#FF7AAC', color: '#ffffff' }}
                                        asChild
                                    >
                                        <Link href="/contact?source=Hifz&interest=FreeTrial">Book Free Trial</Link>
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
