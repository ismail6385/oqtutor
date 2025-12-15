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

export default function NamazLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Module 1: Purity (Taharah)",
            topics: [
                "Method of Wudu (Ablution) step-by-step",
                "Ghusl (Full bath) - When and how",
                "Tayammum (Dry ablution)",
                "Things that break Wudu",
                "Importance of cleanliness in Islam"
            ]
        },
        {
            title: "Module 2: Salah (Daily Prayers)",
            topics: [
                "Complete method of Fajr (2 Rakat)",
                "Zuhr, Asr prayers (4 Rakat)",
                "Maghrib prayer (3 Rakat)",
                "Isha prayer (4 Rakat)",
                "Witr and Sunnah prayers"
            ]
        },
        {
            title: "Module 3: Essential Duas and Supplications",
            topics: [
                "Duas for waking up and sleeping",
                "Duas before and after meals",
                "Duas for entering/leaving home and masjid",
                "Duas for traveling",
                "Daily Masnoon Duas"
            ]
        },
        {
            title: "Module 4: Six Kalimas",
            topics: [
                "Kalima Tayyab (First Kalima)",
                "Kalima Shahadat (Second Kalima)",
                "Kalima Tamjeed (Third Kalima)",
                "Kalima Tawheed (Fourth Kalima)",
                "Kalima Astaghfar (Fifth Kalima)",
                "Kalima Radde Kufr (Sixth Kalima)"
            ]
        },
        {
            title: "Module 5: Basic Islamic Beliefs",
            topics: [
                "Five Pillars of Islam",
                "Six Articles of Faith (Iman)",
                "Belief in Allah and His attributes",
                "Belief in Prophets and Angels",
                "Day of Judgment and Qadr (Destiny)"
            ]
        },
        {
            title: "Module 6: Islamic Manners and Ethics",
            topics: [
                "Respect for parents and elders",
                "Good behavior with neighbors",
                "Honesty and truthfulness",
                "Kindness to animals",
                "Rights of others in Islam"
            ]
        }
    ]

    const testimonials = [
        {
            text: "I'm 35 and finally learned how to pray correctly. This course changed my life!",
            author: "Ahmed R.",
            rating: 5
        },
        {
            text: "My children now pray 5 times a day with proper method. Alhamdulillah!",
            author: "Fatima K. (Parent)",
            rating: 5
        },
        {
            text: "The step-by-step Wudu and Salah lessons were so clear. No confusion anymore!",
            author: "Yusuf M.",
            rating: 5
        },
        {
            text: "I learned all the daily Duas. Now I remember Allah throughout the day!",
            author: "Aisha S.",
            rating: 5
        },
        {
            text: "The Islamic manners section helped me become a better Muslim. Highly recommend!",
            author: "Ibrahim T.",
            rating: 5
        },
        {
            text: "My daughter memorized all 6 Kalimas in just 2 weeks. Amazing program!",
            author: "Mariam A. (Parent)",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "Is this course for kids only?",
            answer: "No, this course is for anyone who wants to learn or correct their basics. We have students of all ages - children, teenagers, adults, and even seniors. It's never too late to learn!"
        },
        {
            question: "I already know how to pray. Should I still take this course?",
            answer: "Many people pray but aren't sure if they're doing it correctly. This course ensures you learn the proper method according to Sunnah, including common mistakes to avoid."
        },
        {
            question: "How long does it take to complete?",
            answer: "The complete course typically takes 3 months with regular classes. However, you'll start praying correctly from the first week itself!"
        },
        {
            question: "Do you teach both boys and girls?",
            answer: "Yes! We have separate male and female tutors available. You can choose your preference during registration."
        },
        {
            question: "Will my child memorize the Duas?",
            answer: "Yes! We use repetition and practice techniques to help students memorize all essential Duas and Kalimas. Most children memorize them within the course duration."
        },
        {
            question: "What if I miss a class?",
            answer: "We offer flexible rescheduling. You can reschedule classes up to 24 hours in advance. We also provide recorded sessions for review."
        },
        {
            question: "Do you provide study materials?",
            answer: "Yes! We provide digital guides, prayer charts, Dua cards, and visual aids to help you practice at home."
        },
        {
            question: "Can adults who never learned to pray join?",
            answer: "Absolutely! We have many adult students who are learning Salah for the first time. Our tutors are patient, understanding, and non-judgmental."
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
                                    Namaz & Islamic Knowledge
                                    <br />
                                    Online Classes
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Learn the essentials of daily Islamic life. Master how to perform Wudu and Salah correctly, memorize daily Duas, and understand the basic pillars of Islam, Iman, and Ihsan.
                                </p>
                                <Link
                                    href="/contact?source=Namaz&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Start Learning Islamic Basics
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
                                        alt="Namaz student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-5.jpeg"
                                        alt="Student learning Salah"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-6.jpeg"
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
                        <span className="text-foreground">Namaz & Islamic Knowledge</span>
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
                                    Online Namaz & Islamic Knowledge Classes - Learn the Essentials of Islam
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        This course covers the essentials of daily Islamic life. Students will learn how to perform Wudu and Salah (Namaz) correctly, memorize daily Duas (supplications), and understand the basic pillars of Islam, Iman, and Ihsan.
                                    </p>
                                    <p>
                                        It is essential for every Muslim to know these basics. Whether you're a new Muslim, a parent wanting to teach your children, or someone who wants to correct and perfect their practice, this course is for you.
                                    </p>
                                    <p>
                                        Our experienced tutors provide step-by-step guidance with visual demonstrations, making it easy to learn and practice. You'll gain confidence in your worship and daily Islamic practices.
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
                                    What will you learn in this course?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Method of Wudu and Ghusl</strong> - Learn the correct way to perform ablution and full bath.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Complete method of Salah</strong> - Step-by-step guide to performing all 5 daily prayers correctly.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Daily Masnoon Duas</strong> - Memorize essential supplications for daily activities.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Six Kalimas</strong> - Learn and memorize all six declarations of faith.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Basic Islamic beliefs and manners</strong> - Understand the pillars of Islam and proper Islamic etiquette.</span>
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
                                    Complete Course Curriculum
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
                                    <p className="text-gray-600 mb-6">Master the essentials of Islam with expert guidance. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Expert Teachers</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Visual Demonstrations</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">For All Ages</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-semibold mb-3"
                                        style={{ backgroundColor: '#FF7AAC', color: '#ffffff' }}
                                        asChild
                                    >
                                        <Link href="/contact?source=Namaz&interest=FreeTrial">Book Free Trial</Link>
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
