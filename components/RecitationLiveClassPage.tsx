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

export default function RecitationLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Module 1 – Advanced Tajweed Mastery",
            topics: [
                "Detailed rules of Noon Saakin & Tanween",
                "Meem Saakin rules",
                "Qalqalah (Echo sound)",
                "Madd (Elongation) - all types",
                "Ghunnah (Nasal sound)",
                "Practical application in recitation"
            ]
        },
        {
            title: "Module 2 – Maqamat (Melodious Styles)",
            topics: [
                "Introduction to different Maqamat",
                "Bayati, Saba, Hijaz, Rast styles",
                "Choosing the right Maqam for different Surahs",
                "Listening to famous Qaris",
                "Finding your unique voice"
            ]
        },
        {
            title: "Module 3 – Breath Control & Voice Modulation",
            topics: [
                "Breathing techniques for long verses",
                "Controlling pitch and tone",
                "Voice projection without strain",
                "Emotional expression in recitation",
                "Warm-up exercises for the voice"
            ]
        },
        {
            title: "Module 4 – Beautification of Recitation",
            topics: [
                "Tarteel (Slow, measured recitation)",
                "Hadr (Fast recitation)",
                "Tadweer (Moderate pace)",
                "Pausing at the right places (Waqf)",
                "Connecting verses smoothly"
            ]
        },
        {
            title: "Module 5 – Practice with Famous Surahs",
            topics: [
                "Surah Ar-Rahman (The Most Merciful)",
                "Surah Yaseen (Heart of the Quran)",
                "Surah Al-Mulk (The Sovereignty)",
                "Surah Al-Waqiah (The Inevitable)",
                "Student's choice of favorite Surahs"
            ]
        },
        {
            title: "Module 6 – Performance & Confidence Building",
            topics: [
                "Reciting in front of others",
                "Overcoming nervousness",
                "Recording and self-assessment",
                "Receiving constructive feedback",
                "Final recitation showcase"
            ]
        }
    ]

    const testimonials = [
        {
            text: "I never knew my voice could sound this beautiful. This course unlocked my potential!",
            author: "Bilal H.",
            rating: 5
        },
        {
            text: "The Maqamat lessons changed everything. Now I recite with confidence and beauty.",
            author: "Aisha M.",
            rating: 5
        },
        {
            text: "My family loves listening to my recitation now. Alhamdulillah for this course!",
            author: "Yusuf K.",
            rating: 5
        },
        {
            text: "The breath control techniques helped me recite long verses without stopping.",
            author: "Fatima R.",
            rating: 5
        },
        {
            text: "I can now recite like my favorite Qaris. The teacher's guidance was amazing!",
            author: "Ahmed S.",
            rating: 5
        },
        {
            text: "This course gave me the confidence to lead Taraweeh prayers. Thank you!",
            author: "Ibrahim T.",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "Do I need a good voice to join this course?",
            answer: "Not at all! Everyone has a unique voice. This course helps you discover and beautify your natural voice. We've helped students of all voice types become confident reciters."
        },
        {
            question: "I already know Tajweed. Is this course still useful?",
            answer: "Absolutely! This course goes beyond basic Tajweed. You'll learn melodious recitation styles (Maqamat), voice control, and performance techniques that most Tajweed courses don't cover."
        },
        {
            question: "Can I learn to recite like famous Qaris?",
            answer: "Yes! We study the styles of famous Qaris like Sheikh Mishary, Abdul Basit, and others. You'll learn their techniques while developing your own unique style."
        },
        {
            question: "How long does it take to see improvement?",
            answer: "Most students notice significant improvement within 4-6 weeks. However, mastering beautiful recitation is a lifelong journey that requires consistent practice."
        },
        {
            question: "Will I have to recite in front of others?",
            answer: "Only if you're comfortable! We encourage it as it builds confidence, but we never force anyone. You can practice privately with the teacher first."
        },
        {
            question: "Do you provide recordings of my recitation?",
            answer: "Yes! We record your progress so you can hear your improvement over time. This is a powerful motivational tool."
        },
        {
            question: "Can this course help me lead prayers?",
            answer: "Definitely! Many of our students go on to lead Taraweeh, Jummah, and daily prayers. We specifically train for public recitation confidence."
        },
        {
            question: "What if I have a speech impediment or accent?",
            answer: "We work with students of all backgrounds and abilities. Our teacher provides personalized guidance to help you overcome any challenges and recite beautifully."
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
                                    Quranic Recitation
                                    <br />
                                    Mastery Classes
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Transform your recitation from basic reading to beautiful, melodious Tilawah that touches hearts. Learn advanced Tajweed, discover your unique voice, and master Maqamat (melodious styles) with expert guidance.
                                </p>
                                <Link
                                    href="/contact?source=Recitation&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Start Your Recitation Journey
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
                                        alt="Recitation student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-2.jpeg"
                                        alt="Student learning recitation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-3.jpeg"
                                        alt="Online recitation learning"
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
                        <span className="text-foreground">Quranic Recitation</span>
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
                                    Online Quranic Recitation Classes - Master Beautiful Tilawah
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        The Prophet Muhammad ﷺ said: "Beautify the Quran with your voices." Beautiful recitation is not just about sounding good — it's about honoring Allah's words, touching hearts, and deepening your spiritual connection.
                                    </p>
                                    <p>
                                        Our live recitation course goes beyond basic Tajweed. You'll learn the art of melodious recitation (Maqamat), voice control, breath management, and performance confidence. Whether you want to lead prayers, recite at events, or simply beautify your personal worship, this course is for you.
                                    </p>
                                    <p>
                                        Learn from experienced Qaris who will help you discover your unique voice while teaching you the techniques of famous reciters. Transform your recitation into something truly beautiful.
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
                                    What will you master in recitation classes?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Advanced Tajweed rules</strong> - Perfect your pronunciation with detailed Tajweed mastery.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Maqamat (Melodious styles)</strong> - Learn different recitation styles used by famous Qaris worldwide.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Breath control techniques</strong> - Manage your breath to recite long verses beautifully.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Voice modulation</strong> - Control pitch, tone, and emotional expression in your recitation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Performance confidence</strong> - Build confidence to recite in front of others and lead prayers.</span>
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
                                    Complete Recitation Curriculum
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
                                    Student Transformations
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
                                    <p className="text-gray-600 mb-6">Transform your recitation with our expert Qaris. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Expert Qaris</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Maqamat Training</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Voice Coaching</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-semibold mb-3"
                                        style={{ backgroundColor: '#D97706', color: '#ffffff' }}
                                        asChild
                                    >
                                        <Link href="/contact?source=Recitation&interest=FreeTrial">Book Free Trial</Link>
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
