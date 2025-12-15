'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: 'Sarah Ahmed',
            role: 'Student',
            location: 'United States',
            rating: 5,
            image: '/images/hero-student-1.jpg',
            text: 'OQTutor has transformed my Quran learning journey. My tutor is patient, knowledgeable, and makes every lesson engaging.',
            quote: '96% of learners say practicing with a real person is very important to their progress.',
            source: 'From the 2025 OQTutor Student Survey',
        },
        {
            name: 'Mohammed Hassan',
            role: 'Parent',
            location: 'United Kingdom',
            rating: 5,
            image: '/images/hero-student-2.jpg',
            text: 'My children love their Quran lessons! The tutors are professional and create a warm, encouraging environment.',
            quote: 'Personal attention from certified tutors makes all the difference in learning.',
            source: 'From the 2025 OQTutor Student Survey',
        },
        {
            name: 'Aisha Rahman',
            role: 'Student',
            location: 'Canada',
            rating: 5,
            image: '/images/hero-student-3.jpg',
            text: 'I was hesitant about online learning, but OQTutor exceeded all my expectations. The one-on-one attention is incredible.',
            quote: 'Online learning with real tutors provides the perfect balance of flexibility and personalization.',
            source: 'From the 2025 OQTutor Student Survey',
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [testimonials.length])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                        style={{ 
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Progress starts with the right tutor
                    </h2>
                    <p 
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                        style={{ color: '#6B6B6B' }}
                    >
                        Thousands of learners. Over 30+ tutors. Progress that's personal (and proven).
                    </p>
                </div>

                {/* Main Content - Image Left, Text Right */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Side - Image Carousel */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        {/* Stacked Images Effect */}
                        <div className="relative w-full h-full">
                            {testimonials.map((testimonial, index) => {
                                const offset = index - currentIndex
                                const isActive = index === currentIndex
                                
                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-500 ${
                                            isActive 
                                                ? 'opacity-100 z-10 scale-100' 
                                                : offset === -1 || (offset === testimonials.length - 1 && currentIndex === 0)
                                                ? 'opacity-30 z-0 scale-90 -translate-x-8'
                                                : 'opacity-0 z-0 scale-90'
                                        }`}
                                    >
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-foreground" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-foreground" />
                        </button>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative min-h-[400px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-500 ${
                                    index === currentIndex
                                        ? 'opacity-100 translate-y-0 relative'
                                        : 'opacity-0 translate-y-4 absolute top-0 left-0 right-0 pointer-events-none'
                                }`}
                            >
                                <div 
                                    className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
                                    style={{ 
                                        fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                        fontWeight: 500
                                    }}
                                >
                                    {testimonial.quote}
                                </div>
                                <p 
                                    className="text-base md:text-lg text-muted-foreground mb-6"
                                    style={{ color: '#6B6B6B' }}
                                >
                                    {testimonial.source}
                                </p>
                            </div>
                        ))}

                        {/* Pagination Dots */}
                        <div className="flex items-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === currentIndex
                                            ? 'w-8 bg-primary'
                                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
