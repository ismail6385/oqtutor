'use client'

import { ArrowRight, Star, BookOpen, Sparkles, Brain, Languages, GraduationCap, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    const stats = [
        { value: '30+', label: 'tutors' },
        { value: '300+', label: 'students' },
        { value: '4.8', label: 'Star' },
    ]

    const popularCourses = [
        'Quran Reading',
        'Tajweed',
        'Hifz',
        'Arabic',
        'Islamic Studies',
        'Tafseer',
    ]

    const courses = [
        {
            name: 'Quran Reading',
            icon: BookOpen,
            href: '/courses/nazara-quran'
        },
        {
            name: 'Tajweed',
            icon: Sparkles,
            href: '/courses/recitation'
        },
        {
            name: 'Hifz',
            icon: Brain,
            href: '/courses/hifz'
        },
        {
            name: 'Arabic',
            icon: Languages,
            href: '/courses/arabic'
        },
        {
            name: 'Islamic Studies',
            icon: GraduationCap,
            href: '/courses/islamic-studies'
        },
        {
            name: 'Tafseer',
            icon: Heart,
            href: '/courses/tafseer'
        },
    ]

    // Hero images (Students)
    const tutorImages = [
        '/images/hero-student-1.jpg',
        '/images/hero-student-2.jpg',
        '/images/hero-student-3.jpg',
    ]

    return (
        <>
            {/* Hero Section - Preply Style with Images LEFT, Text RIGHT */}
            <section
                className="relative overflow-hidden"
                style={{
                    backgroundColor: '#ff7aac',
                    width: '100%',
                    maxWidth: '1920px',
                    minHeight: '469px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 h-full flex items-center">
                    <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-center w-full">

                        {/* RIGHT Column - Overlapping Images */}
                        <div className="hidden lg:flex items-center justify-start relative h-[350px] lg:order-last">
                            <div className="relative w-full max-w-[480px] h-full">

                                {/* Back Left Image */}
                                <div
                                    className="absolute rounded-2xl overflow-hidden shadow-xl"
                                    style={{
                                        width: '160px',
                                        height: '200px',
                                        left: '30px',
                                        top: '30px',
                                        transform: 'rotate(-6deg)',
                                        zIndex: 1,
                                        border: '4px solid rgba(255,255,255,0.3)',
                                    }}
                                >
                                    <Image
                                        src={tutorImages[0]}
                                        alt="Quran Student"
                                        fill
                                        className="object-cover"
                                        sizes="160px"
                                    />
                                </div>

                                {/* Center Main Image */}
                                <div
                                    className="absolute rounded-2xl overflow-hidden shadow-2xl"
                                    style={{
                                        width: '220px',
                                        height: '280px',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 3,
                                        border: '5px solid rgba(255,255,255,0.4)',
                                    }}
                                >
                                    <Image
                                        src={tutorImages[1]}
                                        alt="Online Quran Learning"
                                        fill
                                        className="object-cover"
                                        sizes="220px"
                                    />
                                </div>

                                {/* Back Right Image */}
                                <div
                                    className="absolute rounded-2xl overflow-hidden shadow-xl"
                                    style={{
                                        width: '160px',
                                        height: '200px',
                                        right: '20px',
                                        top: '40px',
                                        transform: 'rotate(6deg)',
                                        zIndex: 2,
                                        border: '4px solid rgba(255,255,255,0.3)',
                                    }}
                                >
                                    <Image
                                        src={tutorImages[2]}
                                        alt="Islamic Studies Student"
                                        fill
                                        className="object-cover"
                                        sizes="160px"
                                    />
                                </div>

                                {/* Decorative Elements */}
                                <div
                                    className="absolute bg-white/20 rounded-full"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        right: '5px',
                                        bottom: '50px',
                                        zIndex: 0,
                                    }}
                                />
                                <div
                                    className="absolute bg-white/15 rounded-full"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        left: '10px',
                                        bottom: '70px',
                                        zIndex: 0,
                                    }}
                                />
                            </div>
                        </div>

                        {/* LEFT Column - Text Content */}
                        <div className="flex flex-col justify-center items-end lg:order-first">
                            <div className="flex flex-col items-start">
                                <h1
                                    className="mb-6"
                                    style={{
                                        fontFamily: "Platform, Platform-fallback, Platform-fallback-android, 'Noto Sans', NotoSans-fallback, NotoSans-fallback-android, sans-serif",
                                        fontSize: '64px',
                                        fontWeight: 500,
                                        lineHeight: '68px',
                                        color: 'rgb(18, 17, 23)',
                                    }}
                                >
                                    Learn Quran<br />
                                    with your best<br />
                                    online tutor.
                                </h1>

                                <Link
                                    href="/tutors"
                                    className="inline-flex items-center justify-center gap-2 px-14 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90"
                                    style={{
                                        backgroundColor: '#121117',
                                        color: '#ffffff',
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif"
                                    }}
                                >
                                    Find your tutor
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Image View */}
                        <div className="flex lg:hidden justify-center mt-8 order-first">
                            <div className="relative w-[280px] h-[200px]">
                                <div
                                    className="absolute rounded-xl overflow-hidden shadow-lg"
                                    style={{
                                        width: '120px',
                                        height: '150px',
                                        left: '0',
                                        top: '20px',
                                        transform: 'rotate(-5deg)',
                                        zIndex: 1,
                                        border: '3px solid rgba(255,255,255,0.3)',
                                    }}
                                >
                                    <Image
                                        src={tutorImages[0]}
                                        alt="Student"
                                        fill
                                        className="object-cover"
                                        sizes="120px"
                                    />
                                </div>
                                <div
                                    className="absolute rounded-xl overflow-hidden shadow-xl"
                                    style={{
                                        width: '140px',
                                        height: '170px',
                                        left: '50%',
                                        top: '0',
                                        transform: 'translateX(-50%)',
                                        zIndex: 2,
                                        border: '3px solid rgba(255,255,255,0.4)',
                                    }}
                                >
                                    <Image
                                        src={tutorImages[1]}
                                        alt="Student"
                                        fill
                                        className="object-cover"
                                        sizes="140px"
                                    />
                                </div>
                                <div
                                    className="absolute rounded-xl overflow-hidden shadow-lg"
                                    style={{
                                        width: '120px',
                                        height: '150px',
                                        right: '0',
                                        top: '20px',
                                        transform: 'rotate(5deg)',
                                        zIndex: 1,
                                        border: '3px solid rgba(255,255,255,0.3)',
                                    }}
                                >
                                    <Image
                                        src={tutorImages[2]}
                                        alt="Student"
                                        fill
                                        className="object-cover"
                                        sizes="120px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - White Background */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1920px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                                    style={{
                                        color: '#121117',
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500,
                                        lineHeight: '1.2'
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm md:text-base"
                                    style={{
                                        color: '#6B6B6B',
                                        fontWeight: 400
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section - Preply Style Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1920px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course, index) => {
                            const IconComponent = course.icon
                            return (
                                <Link
                                    key={index}
                                    href={course.href}
                                    className="flex items-center gap-4 p-4 bg-white border border-border rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                        <IconComponent className="w-6 h-6 text-foreground" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 min-w-0">
                                        <div
                                            className="font-bold text-base"
                                            style={{
                                                color: '#121117',
                                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                                fontWeight: 500
                                            }}
                                        >
                                            {course.name}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowRight className="w-5 h-5 text-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
