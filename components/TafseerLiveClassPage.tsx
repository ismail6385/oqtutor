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

export default function TafseerLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Module 1: Introduction to Tafseer",
            topics: [
                "History and principles of Quranic interpretation",
                "Different schools of Tafseer",
                "Importance of understanding context (Shan-e-Nuzool)",
                "Tools and resources for Tafseer study",
                "How to approach Quranic verses"
            ]
        },
        {
            title: "Module 2: Tafseer of Juz 30 (Short Surahs)",
            topics: [
                "Detailed study of Surah An-Nas to Ad-Duha",
                "Word-by-word translation and meanings",
                "Context of revelation for each Surah",
                "Practical lessons and applications",
                "Memorization tips with understanding"
            ]
        },
        {
            title: "Module 3: Tafseer of Selected Important Surahs",
            topics: [
                "Surah Al-Fatihah (The Opening)",
                "Surah Al-Baqarah (Selected verses)",
                "Surah Yaseen (Heart of the Quran)",
                "Surah Ar-Rahman (The Most Merciful)",
                "Surah Al-Mulk (The Sovereignty)"
            ]
        },
        {
            title: "Module 4: Thematic Study of the Quran",
            topics: [
                "Patience (Sabr) in the Quran",
                "Mercy and Compassion (Rahmah)",
                "Justice and Fairness (Adl)",
                "Gratitude (Shukr)",
                "Trust in Allah (Tawakkul)"
            ]
        },
        {
            title: "Module 5: Stories of the Prophets",
            topics: [
                "Prophet Adam (AS) - Creation and Test",
                "Prophet Nuh (AS) - Patience and Perseverance",
                "Prophet Ibrahim (AS) - Faith and Sacrifice",
                "Prophet Musa (AS) - Leadership and Courage",
                "Prophet Isa (AS) and Prophet Muhammad (SAW)"
            ]
        },
        {
            title: "Module 6: Practical Application in Daily Life",
            topics: [
                "How to implement Quranic teachings",
                "Quranic guidance for modern challenges",
                "Building character through Quran",
                "Family and social relationships in Quran",
                "Continuous learning and reflection"
            ]
        }
    ]

    const testimonials = [
        {
            text: "I used to read Quran without understanding. Now every verse speaks to my heart!",
            author: "Aisha M.",
            rating: 5
        },
        {
            text: "The Tafseer classes transformed my relationship with the Quran. Alhamdulillah!",
            author: "Yusuf K.",
            rating: 5
        },
        {
            text: "Understanding the context of revelation made everything so clear. Amazing course!",
            author: "Fatima R.",
            rating: 5
        },
        {
            text: "I can now apply Quranic teachings in my daily life. This is what I was missing!",
            author: "Ahmed S.",
            rating: 5
        },
        {
            text: "The thematic studies helped me understand Quran as a complete guide for life.",
            author: "Mariam A.",
            rating: 5
        },
        {
            text: "My children love the stories of Prophets. They ask for more every day!",
            author: "Ibrahim T. (Parent)",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "Do I need to know Arabic to study Tafseer?",
            answer: "Knowing Arabic is helpful but not required. We explain concepts in English with Arabic references. You'll learn key Arabic words and their meanings as we progress through the course."
        },
        {
            question: "How is this different from just reading translation?",
            answer: "Translation gives you the meaning, but Tafseer provides context, explanation, and deeper understanding. You'll learn WHY verses were revealed, HOW to apply them, and WHAT scholars have said about them over centuries."
        },
        {
            question: "Can beginners join this course?",
            answer: "Absolutely! This course is designed for all levels. We start with basics and gradually build deeper understanding. The only requirement is a desire to understand the Quran better."
        },
        {
            question: "Which Tafseer books do you follow?",
            answer: "We primarily use Tafseer Ibn Kathir, Tafseer Al-Jalalayn, and contemporary scholars like Mufti Menk and Nouman Ali Khan. We present multiple perspectives to give you comprehensive understanding."
        },
        {
            question: "How long does it take to complete the course?",
            answer: "The complete course takes 1-2 years depending on your pace. However, you'll start benefiting from day one. Many students continue with advanced Tafseer studies after completing the basic course."
        },
        {
            question: "Will this help me in my daily life?",
            answer: "Definitely! The Quran is a practical guide for life. You'll learn how to apply Quranic wisdom to modern challenges, relationships, work, and personal development."
        },
        {
            question: "Do you cover scientific miracles in the Quran?",
            answer: "Yes! We discuss scientific references in the Quran and how modern discoveries align with Quranic verses revealed 1400+ years ago."
        },
        {
            question: "Can I ask questions during class?",
            answer: "Absolutely! We encourage questions and discussions. Understanding comes through asking, exploring, and reflecting together."
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
                                    Tafseer (Quran Interpretation)
                                    <br />
                                    Online Classes
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Dive deep into the meanings and interpretations of the Quran. Understand the context of revelation, linguistic nuances, and practical lessons that connect Quranic teachings to your daily life.
                                </p>
                                <Link
                                    href="/contact?source=Tafseer&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Start Understanding the Quran
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
                                        alt="Tafseer student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-2.jpeg"
                                        alt="Student learning Tafseer"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-3.jpeg"
                                        alt="Online Tafseer learning"
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
                        <span className="text-foreground">Tafseer</span>
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
                                    Online Tafseer Classes - Understand the Meanings and Wisdom of the Quran
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        The Tafseer course allows students to dive deep into the meanings and interpretations of the Quran. We explore the context of revelation (Shan-e-Nuzool), linguistic nuances, and practical lessons derived from the verses.
                                    </p>
                                    <p>
                                        This course connects the Quranic teachings to daily life, helping you understand not just WHAT Allah says, but WHY He says it and HOW to apply it in your life. Transform your relationship with the Quran from mere recitation to deep comprehension.
                                    </p>
                                    <p>
                                        Learn from experienced scholars who make complex concepts easy to understand. Whether you're a beginner or have some Islamic knowledge, this course will deepen your understanding and strengthen your faith.
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
                                    What will you learn in Tafseer classes?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Translation of verses</strong> - Word-by-word and complete verse translations with meanings.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Context of revelation (Shan-e-Nuzool)</strong> - Understand when, where, and why verses were revealed.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Detailed explanation (Tafseer)</strong> - Deep dive into meanings with scholarly interpretations.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Practical application</strong> - How to apply Quranic teachings in modern life.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Thematic studies</strong> - Major themes like patience, justice, mercy explored across the Quran.</span>
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
                                    Complete Tafseer Curriculum
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
                                    <p className="text-gray-600 mb-6">Understand the Quran deeply with expert scholars. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Expert Scholars</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Deep Understanding</span>
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
                                        <Link href="/contact?source=Tafseer&interest=FreeTrial">Book Free Trial</Link>
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
