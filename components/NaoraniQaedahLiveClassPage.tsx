"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCheckCircle,
    faVideo,
    faComments,
    faCertificate,
    faClock,
    faUsers,
    faGraduationCap,
    faPlay,
    faStar,
    faCalendar,
    faShieldAlt,
    faBook,
    faBookReader,
    faChartLine,
    faFileAlt,
    faHeadset,
    faLightbulb,
    faRocket,
    faAward
} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Star, GraduationCap, Award, BookOpen, Check, Heart, MessageCircle, Globe, Clock, Users, DollarSign, Play, X, Monitor } from "lucide-react"

export default function NaoraniQaedahLiveClassPage() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const curriculum = [
        {
            title: "Module 1: The Arabic Alphabet (Huroof-ul-Mufradat)",
            topics: [
                "Learning the 29 Arabic letters",
                "Correct Makharij (points of articulation)",
                "Letter recognition practice",
                "Individual letter sounds",
                "Writing practice"
            ]
        },
        {
            title: "Module 2: Joint Letters (Murakkabat)",
            topics: [
                "How letters change shapes when joined",
                "Beginning, middle, and end forms",
                "Connecting letters smoothly",
                "Reading joined words",
                "Practice with common combinations"
            ]
        },
        {
            title: "Module 3: Vowel Signs (Harakat)",
            topics: [
                "Introduction to Fatha, Kasra, and Damma",
                "How vowels affect pronunciation",
                "Reading words with vowels",
                "Vowel recognition exercises",
                "Practice with Quranic words"
            ]
        },
        {
            title: "Module 4: Tanween (Double Vowels)",
            topics: [
                "Double Fatha, Kasra, and Damma",
                "Pronunciation of Tanween",
                "Difference between single and double vowels",
                "Reading practice",
                "Application in Quran"
            ]
        },
        {
            title: "Module 5: Sukoon & Jazm",
            topics: [
                "Understanding resting sounds",
                "Connecting letters with Sukoon",
                "Silent letter rules",
                "Reading fluency practice",
                "Common Sukoon patterns"
            ]
        },
        {
            title: "Module 6: Madd (Elongation)",
            topics: [
                "Madd Asli (Natural elongation)",
                "Madd Far'i (Extended elongation)",
                "Duration of Madd",
                "Identifying Madd in verses",
                "Practice exercises"
            ]
        },
        {
            title: "Module 7: Shaddah (Emphasis)",
            topics: [
                "Doubled letter pronunciation",
                "Shaddah with different vowels",
                "Emphasis techniques",
                "Reading practice",
                "Common mistakes to avoid"
            ]
        },
        {
            title: "Module 8: Rules of Noon Saakin & Meem Saakin",
            topics: [
                "Izhar, Idgham, Iqlab, Ikhfa",
                "Meem Saakin rules",
                "Nasal sounds",
                "Clear pronunciation",
                "Final assessment"
            ]
        }
    ]

    const testimonials = [
        {
            text: "My daughter learned to read Arabic in just 4 months! The tutor was so patient and encouraging.",
            author: "Fatima K. (Parent)",
            rating: 5
        },
        {
            text: "I'm 45 and finally learning to read the Quran. Never thought it would be this easy!",
            author: "Ahmed R.",
            rating: 5
        },
        {
            text: "The step-by-step approach made everything so clear. Highly recommend!",
            author: "Aisha M.",
            rating: 5
        },
        {
            text: "Best investment for my children's Islamic education. Alhamdulillah!",
            author: "Yusuf A. (Parent)",
            rating: 5
        },
        {
            text: "The tutor's pronunciation is crystal clear. My son loves his classes!",
            author: "Mariam S.",
            rating: 5
        },
        {
            text: "From zero to reading Quran in 5 months. Amazing program!",
            author: "Abdullah T.",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "Who is this course for?",
            answer: "This course is suitable for absolute beginners, including children (ages 4+) and adults who want to learn to read the Quran from scratch. No prior knowledge of Arabic is required."
        },
        {
            question: "How long does it take to complete Qaedah?",
            answer: "It typically takes 3-6 months to complete, depending on the student's age, practice frequency, and learning pace. Children usually take 4-6 months, while adults may complete it in 3-4 months with consistent practice."
        },
        {
            question: "What happens after completing Qaedah?",
            answer: "After completing Qaedah, students move on to Nazara Quran, where they will start reading directly from the Quran with proper Tajweed application."
        },
        {
            question: "Can I choose a female tutor?",
            answer: "Yes, we have qualified female tutors available for sisters and children. You can specify your preference during registration."
        },
        {
            question: "How long are the classes?",
            answer: "Each session is typically 30 minutes long for children and 45 minutes for adults. This duration is optimal for maintaining focus and retention."
        },
        {
            question: "Do you provide homework?",
            answer: "Yes! Students receive daily practice assignments and digital Qaedah materials to reinforce learning between classes."
        },
        {
            question: "What if my child misses a class?",
            answer: "We offer flexible rescheduling options. You can reschedule classes up to 24 hours in advance without any penalty."
        },
        {
            question: "Is there a certificate upon completion?",
            answer: "Yes, students receive a completion certificate after successfully finishing the Qaedah course and passing the final assessment."
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
                                    Naorani / Madni Qaedah
                                    <br />
                                    Online Classes
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    The essential first step in your Quranic journey. Learn Arabic letters, correct pronunciation (Makharij), and fundamental Tajweed rules with expert guidance. Perfect for beginners of all ages!
                                </p>
                                <Link
                                    href="/contact?source=NaoraniQaedah&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Start Your Quran Journey
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
                                        alt="Qaedah student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-5.jpeg"
                                        alt="Student learning Qaedah"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-6.jpeg"
                                        alt="Online Qaedah learning"
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
                        <span className="text-foreground">Naorani / Madni Qaedah</span>
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
                                    Online Naorani / Madni Qaedah Classes - Your Foundation for Quran Reading
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Our Naorani / Madni Qaedah course is the essential first step in your Quranic journey. Designed meticulously for beginners of all ages, this course focuses on the correct pronunciation (Makharij) of Arabic letters and the fundamental rules of Tajweed.
                                    </p>
                                    <p>
                                        By the end of this course, students will be able to identify, pronounce, and connect Arabic letters to read words and sentences from the Quran with confidence and accuracy. Our expert tutors ensure personalized attention and a structured learning path.
                                    </p>
                                    <p>
                                        Whether you're a child starting your Islamic education or an adult wanting to learn to read the Quran, this course provides the perfect foundation with interactive lessons and engaging digital tools.
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
                                    What will you learn in Qaedah classes?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Recognition of all 29 Arabic letters</strong> - Learn to identify and write each letter in its different forms.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Correct pronunciation (Makharij)</strong> - Master the exact points of articulation for authentic Quranic recitation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Basic Tajweed rules</strong> - Understand essential rules like Madd, Sukoon, Shaddah, and Tanween.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Connecting letters</strong> - Learn how letters join together to form words and sentences.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Reading basic words and sentences</strong> - Build confidence by reading simple Quranic words and phrases.</span>
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
                                    Complete Qaedah Curriculum
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
                                    <p className="text-gray-600 mb-6">Begin your Quranic journey with our expert tutors. Get a free trial class!</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Free 3-Day Trial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Certified Tutors</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">Flexible Schedule</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-600" />
                                            <span className="text-sm">1-on-1 Classes</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-semibold mb-3"
                                        style={{ backgroundColor: '#FF7AAC', color: '#ffffff' }}
                                        asChild
                                    >
                                        <Link href="/contact?source=NaoraniQaedah&interest=FreeTrial">Book Free Trial</Link>
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
