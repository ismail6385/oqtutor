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
import { tutors } from "@/lib/tutors-data"

export default function NazaraQuranLiveClassPage() {
    const [selectedTutor, setSelectedTutor] = useState<number>(0)
    const [hoveredTutor, setHoveredTutor] = useState<number | null>(null)
    const [favorites, setFavorites] = useState<Set<number>>(new Set())
    const [showVideoModal, setShowVideoModal] = useState(false)

    const toggleFavorite = (index: number) => {
        setFavorites(prev => {
            const newSet = new Set(prev)
            if (newSet.has(index)) {
                newSet.delete(index)
            } else {
                newSet.add(index)
            }
            return newSet
        })
    }

    // Add additional data for detailed view
    const tutorsWithDetails = tutors.map((tutor, index) => ({
        ...tutor,
        price: 25 + (index % 3) * 5, // Varying prices
        reviews: 10 + index * 2,
        students: 15 + index * 3,
        lessons: 50 + index * 10,
        languages: ['Arabic', 'English', 'Urdu'],
        description: `Certified Quran Tutor specializing in ${tutor.specialization}. With ${tutor.experience} of teaching experience, I help students master the Quran with proper Tajweed and pronunciation. Book a trial lesson to experience personalized, one-on-one Quran learning tailored to your pace and goals.`,
        availability: 'Available now',
        responseTime: 'Responds in 2 hours',
    }))

    const currentTutor = tutorsWithDetails[hoveredTutor !== null ? hoveredTutor : selectedTutor]

    const curriculum = [
        {
            title: "Level 1 – Fluent Reading Foundation",
            topics: [
                "Reading Arabic text smoothly",
                "Recognizing words quickly",
                "Proper pausing and stopping",
                "Building reading confidence",
                "Daily practice routine"
            ]
        },
        {
            title: "Level 2 – Essential Tajweed Rules",
            topics: [
                "Noon Saakin & Tanween rules",
                "Meem Saakin rules",
                "Qalqalah (Echo sound)",
                "Basic Madd (Elongation)",
                "Applying rules while reading"
            ]
        },
        {
            title: "Level 3 – Reading from Juz 30 (Amma Para)",
            topics: [
                "Short Surahs (Nas, Falaq, Ikhlas, etc.)",
                "Reading with correct Tajweed",
                "Understanding common patterns",
                "Building speed and accuracy",
                "Memorizing while reading (optional)"
            ]
        },
        {
            title: "Level 4 – Reading from Different Parts of Quran",
            topics: [
                "Surah Al-Baqarah (Long verses)",
                "Surah Yaseen (Medium verses)",
                "Surah Ar-Rahman (Rhythmic verses)",
                "Adapting to different styles",
                "Reading any page confidently"
            ]
        },
        {
            title: "Level 5 – Speed & Fluency Development",
            topics: [
                "Increasing reading speed",
                "Maintaining accuracy at higher speeds",
                "Reading without hesitation",
                "Smooth transitions between verses",
                "Timed reading exercises"
            ]
        },
        {
            title: "Level 6 – Final Assessment & Certification",
            topics: [
                "Reading test from random pages",
                "Tajweed accuracy check",
                "Speed and fluency evaluation",
                "Teacher feedback and recommendations",
                "Nazara Quran completion certificate"
            ]
        }
    ]

    const batches = [
        { name: "Kids Batch (Ages 7-12)", time: "4:00 PM – 5:00 PM", days: "Mon–Fri" },
        { name: "Teen Batch (Ages 13-18)", time: "5:30 PM – 6:30 PM", days: "Mon–Fri" },
        { name: "Adult Batch", time: "7:00 PM – 8:00 PM", days: "Mon, Wed, Fri" },
        { name: "Weekend Batch", time: "9:00 AM – 10:30 AM", days: "Sat–Sun" }
    ]

    const testimonials = [
        {
            text: "I can now read any page of the Quran fluently. This course changed my life!",
            author: "Zainab M.",
            rating: 5
        },
        {
            text: "My son went from struggling to reading beautifully in just 6 months. Amazing!",
            author: "Khalid A. (Parent)",
            rating: 5
        },
        {
            text: "The step-by-step approach made learning so easy. I'm now reading daily!",
            author: "Amina R.",
            rating: 5
        },
        {
            text: "I completed Nazara and now I'm starting Hifz. Best foundation ever!",
            author: "Abdullah K.",
            rating: 5
        },
        {
            text: "The teacher's patience and encouragement kept me motivated throughout.",
            author: "Sarah H.",
            rating: 5
        },
        {
            text: "I can finally read Quran in Ramadan without difficulty. Alhamdulillah!",
            author: "Omar T.",
            rating: 5
        }
    ]

    const faqs = [
        {
            question: "What is Nazara Quran?",
            answer: "Nazara means 'reading by looking.' It's the ability to read the Quran fluently from any page with correct Tajweed, without having memorized it. This is an essential skill for every Muslim."
        },
        {
            question: "Do I need to complete Qaida first?",
            answer: "Yes, it's highly recommended. You should be able to recognize Arabic letters and basic sounds. If you haven't completed Qaida, we can assess your level and start from there."
        },
        {
            question: "How long does it take to complete Nazara?",
            answer: "It varies by student. Children typically complete in 6-12 months with daily practice. Adults may take 8-18 months. Consistency is key!"
        },
        {
            question: "Will I learn Tajweed in this course?",
            answer: "Yes! Essential Tajweed rules are integrated into the Nazara course. You'll learn to apply them while reading, not just as theory."
        },
        {
            question: "Can I start Hifz after completing Nazara?",
            answer: "Absolutely! Nazara is the perfect foundation for Hifz. Many of our Nazara graduates go on to memorize the Quran successfully."
        },
        {
            question: "What if I'm a slow reader?",
            answer: "No problem! We work at your pace. The goal is fluency and accuracy, not speed. With consistent practice, your speed will naturally improve."
        },
        {
            question: "Do you provide homework and practice materials?",
            answer: "Yes! You'll receive daily practice assignments, reading schedules, and progress tracking sheets to help you improve faster."
        },
        {
            question: "Can adults join this course?",
            answer: "Definitely! We have many adult students who successfully complete Nazara. It's never too late to learn to read the Quran fluently."
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
                                    Online Quran classes
                                    <br />
                                    and courses
                                </h1>
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" style={{ color: '#121117' }}>
                                    Flexible, 1:1 Quran courses designed to help you read and recite the Quran fluently with confidence. Learn at your own pace with customized lessons tailored to your goals — whether for daily recitation, Tajweed mastery, or Hifz preparation.
                                </p>
                                <Link
                                    href="/contact?source=NazaraQuran&interest=Enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
                                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                >
                                    Book your first Quran class
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
                                        alt="Quran student"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                </div>

                                {/* Student Image 2 - Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-56 md:h-64 rounded-2xl shadow-2xl overflow-hidden z-0 border-4 border-white transform -rotate-2">
                                    <Image
                                        src="/images/student-2.jpeg"
                                        alt="Student learning Quran"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>

                                {/* Student Image 3 - Center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-40 md:h-52 rounded-2xl shadow-2xl overflow-hidden z-20 border-4 border-white">
                                    <Image
                                        src="/images/student-3.jpeg"
                                        alt="Online Quran learning"
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
                        <span className="text-foreground">Online Nazara Quran classes</span>
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
                                    Online Nazara Quran classes - Personalized learning with expert tutors
                                </h1>
                                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Our Nazara Quran classes are personalized and adapt to your goals. We combine practical skills (Quran reading, Tajweed rules, pronunciation) with real-world applications (daily recitation, prayer recitation, Ramadan reading) to help you build confidence for spiritual growth and Quranic mastery.
                                    </p>
                                    <p>
                                        Learn from experienced, certified tutors who teach essential Quranic skills, proper Tajweed rules, and cultural insights. Master the art of reading the Quran fluently from any page, understand different recitation styles, and navigate through various Surahs with confidence and accuracy.
                                    </p>
                                    <p>
                                        Our practical, results-focused approach helps you express yourself clearly in prayers, understand Quranic verses, and feel confident in everyday recitation. Develop lasting Quranic reading skills that will serve you throughout your life.
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
                                    What will you learn in the online Nazara Quran classes?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span>Gain practical skills to read the Quran fluently from any page with proper Tajweed and pronunciation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span>Master specific sub-skills such as reading long Surahs, applying Tajweed rules, and reciting in prayers.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span>Receive a customized learning plan addressing your individual strengths and areas for improvement.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Who are our classes for */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    Who are our online Nazara Quran classes for?
                                </h2>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Complete beginners</strong> - Start your Quran reading journey with structured, step-by-step guidance.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Intermediate learners</strong> - Improve your fluency, speed, and Tajweed application.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Hifz students</strong> - Build a strong foundation in Quran reading before starting memorization.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Adults and children</strong> - Age-appropriate classes for students of all ages (7+).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Muslims seeking daily recitation</strong> - Learn to read Quran confidently for prayers and spiritual practice.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Why choose our classes */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    Why choose our online Nazara Quran classes?
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 mb-4">
                                    Your path to Quran fluency starts here with:
                                </p>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700 mb-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Tailored learning paths</strong> - Custom lessons for fluency, Tajweed mastery, or Hifz preparation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Flexible scheduling</strong> - Choose the lesson length that fits your schedule.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Learn anytime, anywhere</strong> - Take lessons on our interactive online platform.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Subscription-based learning</strong> - Stay consistent with a flexible, pay-as-you-go model.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Expert tutors at your level</strong> - Find an experienced tutor that fits your budget and learning style.</span>
                                    </li>
                                </ul>
                                <p className="text-base md:text-lg text-gray-700 font-semibold">
                                    95% of students improve fluency within 3 months.
                                </p>
                            </div>

                            {/* What to expect */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    What to expect in your online Nazara Quran lessons
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 mb-4">
                                    Every class is personalized to your needs. A typical lesson includes:
                                </p>
                                <ul className="space-y-3 text-base md:text-lg text-gray-700 mb-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Real reading practice</strong> - Read Quran naturally with proper Tajweed and pronunciation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Tajweed and pronunciation boost</strong> - Strengthen your foundation with practical exercises.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Engaging activities</strong> - Interactive reading, quizzes, and real-world scenarios to reinforce learning.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground mt-2">•</span>
                                        <span><strong>Instant feedback</strong> - Real-time corrections and pronunciation tips from your tutor.</span>
                                    </li>
                                </ul>
                                <p className="text-base md:text-lg text-gray-700 font-semibold">
                                    Learn Quran with expert guidance, tailored for you.
                                </p>
                            </div>

                            {/* How it works */}
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                                    style={{
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    How it works - Start learning in 4 easy steps
                                </h2>
                                <ol className="space-y-4 text-base md:text-lg text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground font-bold mt-1">1.</span>
                                        <span><strong>Choose your tutor</strong> - Browse top-rated Quran tutors based on your goals and budget.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground font-bold mt-1">2.</span>
                                        <span><strong>Plan your journey</strong> - Get a customized course plan tailored to your needs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground font-bold mt-1">3.</span>
                                        <span><strong>Start learning</strong> - Take one-on-one lessons on our interactive platform at your convenience.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-foreground font-bold mt-1">4.</span>
                                        <span><strong>Track your progress</strong> - Receive personalized feedback to measure your improvement.</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Right Column - Course Details Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="lg:sticky lg:top-24">
                                <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-6">
                                    {/* Course mode */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                            <Monitor className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Course mode</div>
                                            <div className="text-base font-semibold text-foreground">Online, with your favourite tutor</div>
                                        </div>
                                    </div>

                                    {/* Course rating */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : i === 4 ? 'fill-yellow-200 text-yellow-200' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Course rating</div>
                                            <div className="text-base font-semibold text-foreground">4.9 (368,441 reviews)</div>
                                        </div>
                                    </div>

                                    {/* Course level */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                            <GraduationCap className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Course level</div>
                                            <div className="text-base font-semibold text-foreground">Beginner</div>
                                        </div>
                                    </div>

                                    {/* Course duration */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                            <Clock className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Course duration</div>
                                            <div className="text-base font-semibold text-foreground">18 hours (Estimated 9 weeks, 2 lessons/week)</div>
                                        </div>
                                    </div>

                                    {/* Course price */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                            <DollarSign className="w-6 h-6 text-yellow-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Course price</div>
                                            <div className="text-base font-semibold text-foreground">Starting at $3 per lesson</div>
                                        </div>
                                    </div>

                                    {/* Subscription based */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                            <Check className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Subscription based</div>
                                            <div className="text-base font-semibold text-foreground">Once you finish the course, keep learning or cancel your subscription anytime.</div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href="/contact?source=NazaraQuran&interest=Enrollment"
                                        className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-base hover:opacity-90 transition-all"
                                        style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                    >
                                        Book your first Quran class
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* YouTube Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowVideoModal(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* YouTube Video Embed */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Tutor Introduction Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}
