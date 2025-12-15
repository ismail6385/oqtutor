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

export default function ArabicLanguageLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Module 1: Arabic Alphabet & Pronunciation",
            topics: [
                "The 28 Arabic letters and their shapes",
                "Correct pronunciation (Makharij)",
                "Letter forms (beginning, middle, end, isolated)",
                "Short and long vowels",
                "Writing practice and recognition"
            ]
        },
        {
            title: "Module 2: Basic Grammar (Nahw)",
            topics: [
                "Nouns (Ism), Verbs (Fi'l), and Particles (Harf)",
                "Masculine and feminine forms",
                "Singular, dual, and plural",
                "Definite and indefinite articles",
                "Basic sentence construction"
            ]
        },
        {
            title: "Module 3: Essential Vocabulary",
            topics: [
                "Common everyday words and phrases",
                "Numbers, colors, and directions",
                "Family members and relationships",
                "Time, days, and months",
                "Food, clothing, and household items"
            ]
        },
        {
            title: "Module 4: Conversational Arabic",
            topics: [
                "Greetings and introductions",
                "Asking and answering questions",
                "Shopping and dining conversations",
                "Traveling and directions",
                "Daily life situations"
            ]
        },
        {
            title: "Module 5: Quranic Arabic",
            topics: [
                "Common Quranic words and their meanings",
                "Understanding Quranic sentence structure",
                "Frequently used verbs in the Quran",
                "Root words and patterns",
                "Enhancing Quran comprehension"
            ]
        },
        {
            title: "Module 6: Advanced Grammar & Expression",
            topics: [
                "Verb conjugation (past, present, future)",
                "Advanced sentence structures",
                "Idiomatic expressions",
                "Reading Arabic literature",
                "Writing practice and composition"
            ]
        }
    ]

    const testimonials = [
        {
            text: "I can now understand 70% of what I read in the Quran. This course is life-changing!",
            author: "Ahmed R.",
            rating: 5
        },
        {
            text: "The teacher made Arabic so easy to learn. I'm now conversing with my Arab friends!",
            author: "Fatima K.",
            rating: 5
        },
        {
            text: "Learning Arabic opened a new world for me. I understand Islamic texts much better now.",
            author: "Yusuf M.",
            rating: 5
        },
        {
            text: "The Quranic Arabic module helped me connect with the Quran on a deeper level.",
            author: "Aisha S.",
            rating: 5
        },
        {
            text: "From zero to reading Arabic newspapers in 12 months. Amazing program!",
            author: "Ibrahim T.",
            rating: 5
        },
        {
            text: "My children are learning Arabic and loving it. The teachers are native speakers!",
            author: "Mariam A. (Parent)",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "Is Arabic difficult to learn?",
            answer: "While Arabic has unique features like a different script and grammar, our structured approach makes it accessible. With consistent practice and expert guidance, you'll make steady progress. Many students are surprised at how quickly they start understanding!"
        },
        {
            question: "Will this help me understand the Quran?",
            answer: "Absolutely! We include dedicated Quranic Arabic modules that help you understand the language of the Quran. You'll learn common Quranic words, sentence structures, and patterns that will enhance your comprehension significantly."
        },
        {
            question: "Do I need to know how to read Arabic first?",
            answer: "No! We start from the very basics - the Arabic alphabet. Even if you've never seen Arabic letters before, you'll learn everything from scratch."
        },
        {
            question: "Which dialect of Arabic do you teach?",
            answer: "We teach Modern Standard Arabic (MSA), which is understood across all Arabic-speaking countries. We also include Quranic Arabic, which is essential for understanding Islamic texts."
        },
        {
            question: "How long until I can speak Arabic fluently?",
            answer: "Basic conversation skills develop within 3-6 months. Fluency typically takes 12-18 months of consistent practice. However, you'll start understanding and using Arabic from the first few weeks!"
        },
        {
            question: "Are the teachers native Arabic speakers?",
            answer: "Yes! Our teachers are native Arabic speakers with teaching certifications. They understand the challenges non-native speakers face and use proven methods to help you succeed."
        },
        {
            question: "Can I learn to write in Arabic?",
            answer: "Yes! Writing practice is an integral part of our curriculum. You'll learn to write Arabic letters, words, and eventually compose sentences and paragraphs."
        },
        {
            question: "Will I be able to read Arabic books?",
            answer: "Definitely! By the end of the course, you'll be able to read Arabic texts, newspapers, and literature. Many students go on to read Islamic books in their original Arabic."
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
                                    Arabic Language
                                    <br />
                                    Online Classes
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Master the Arabic language from beginner to advanced level. Learn to speak, read, write, and understand Arabic - including Quranic Arabic - with expert native speakers.
                                </p>
                                <Link
                                    href="/contact?source=ArabicLanguage&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Start Learning Arabic
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
                                        alt="Arabic language student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-5.jpeg"
                                        alt="Student learning Arabic"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-6.jpeg"
                                        alt="Online Arabic learning"
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
                        <span className="text-foreground">Arabic Language</span>
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
                                    Online Arabic Language Classes - From Beginner to Fluent
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Our Arabic Language course is designed to help you master Arabic from scratch. Whether you want to understand the Quran better, communicate with Arabic speakers, or explore Arabic literature, this comprehensive course covers everything from the alphabet to advanced grammar and conversation.
                                    </p>
                                    <p>
                                        Arabic is the language of the Quran and one of the most widely spoken languages in the world. Learning Arabic opens doors to understanding Islamic texts in their original form, connecting with millions of Arabic speakers, and accessing a rich cultural heritage.
                                    </p>
                                    <p>
                                        Learn from native Arabic speakers who use proven teaching methods. Our interactive approach combines grammar, vocabulary, conversation practice, and Quranic Arabic to give you a well-rounded education.
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
                                    What will you master in Arabic classes?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Arabic alphabet and pronunciation</strong> - Master all 28 letters and their correct sounds.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Grammar and sentence structure</strong> - Understand how Arabic works and construct proper sentences.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Conversational Arabic</strong> - Speak confidently in everyday situations.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Quranic Arabic understanding</strong> - Comprehend the language of the Quran.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Reading and writing practice</strong> - Read Arabic texts and write fluently.</span>
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
                                    Complete Arabic Language Curriculum
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
                                    Success Stories from Our Students
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
                                    <p className="text-gray-600 mb-6">Master Arabic with native speakers. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Native Arabic Speakers</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Quranic Arabic Included</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Beginner to Advanced</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-semibold mb-3"
                                        style={{ backgroundColor: '#FF7AAC', color: '#ffffff' }}
                                        asChild
                                    >
                                        <Link href="/contact?source=ArabicLanguage&interest=FreeTrial">Book Free Trial</Link>
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
