"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, GraduationCap, Award, BookOpen, Check, Heart, MessageCircle, Globe, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { tutors } from "@/lib/tutors-data"

export default function TutorsPage() {
    const [selectedTutor, setSelectedTutor] = useState<number>(0)
    const [hoveredTutor, setHoveredTutor] = useState<number | null>(null)
    const [favorites, setFavorites] = useState<Set<number>>(new Set())

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

    return (
        <div className="bg-background pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold mb-4 border border-primary/20">
                            <Award className="h-4 w-4" />
                            Certified Instructors
                        </div>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Meet Our Expert Tutors
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                            Learn from highly qualified, certified tutors with years of experience in teaching Quran to students worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Tutor Cards List */}
                    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                        {tutorsWithDetails.map((tutor, index) => (
                            <motion.div
                                key={tutor.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedTutor(index)}
                                onMouseEnter={() => setHoveredTutor(index)}
                                onMouseLeave={() => setHoveredTutor(null)}
                                className={`cursor-pointer rounded-xl bg-white border-2 transition-all duration-300 ${selectedTutor === index || hoveredTutor === index
                                        ? 'border-primary shadow-lg scale-[1.02]'
                                        : 'border-border hover:border-primary/50 hover:shadow-md'
                                    }`}
                            >
                                <div className="flex gap-4 p-4">
                                    {/* Profile Picture */}
                                    <div className="relative flex-shrink-0">
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200">
                                            <Image
                                                src={tutor.image}
                                                alt={tutor.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Online Indicator */}
                                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>

                                    {/* Tutor Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-bold text-foreground truncate">
                                                    {tutor.name}
                                                </h3>
                                                <div className="w-5 h-5 rounded-full bg-white border border-gray-300 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    toggleFavorite(index)
                                                }}
                                                className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                            >
                                                <Heart
                                                    className={`w-5 h-5 ${favorites.has(index)
                                                            ? 'fill-red-500 text-red-500'
                                                            : 'text-gray-400'
                                                        }`}
                                                />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                                                Professional
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                            <div className="flex items-center gap-1">
                                                <GraduationCap className="w-4 h-4" />
                                                <span>{tutor.specialization}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Globe className="w-4 h-4" />
                                                <span>Speaks {tutor.languages.join(', ')}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                            {tutor.description}
                                        </p>

                                        <div className="flex items-center gap-4 mt-3">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-semibold text-foreground">{tutor.rating}</span>
                                                <span className="text-xs text-muted-foreground">({tutor.reviews} reviews)</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <div className="text-xl font-bold text-foreground">${tutor.price}</div>
                                                <div className="text-xs text-muted-foreground">50-min lesson</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Detailed Tutor Info */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <motion.div
                            key={hoveredTutor !== null ? hoveredTutor : selectedTutor}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-xl bg-white border-2 border-border shadow-lg p-6"
                        >
                            <div className="flex gap-6 mb-6">
                                {/* Profile Picture */}
                                <div className="relative flex-shrink-0">
                                    <div className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-gray-200">
                                        <Image
                                            src={currentTutor.image}
                                            alt={currentTutor.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                                </div>

                                {/* Tutor Info */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-2xl font-bold text-foreground">
                                                {currentTutor.name}
                                            </h2>
                                            <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => toggleFavorite(selectedTutor)}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <Heart
                                                className={`w-6 h-6 ${favorites.has(selectedTutor)
                                                        ? 'fill-red-500 text-red-500'
                                                        : 'text-gray-400'
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded">
                                            Professional
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{currentTutor.specialization}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Globe className="w-4 h-4" />
                                            <span>Speaks {currentTutor.languages.join(', ')}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {currentTutor.description}
                                    </p>

                                    <Link
                                        href="#"
                                        className="text-sm text-primary hover:underline inline-block mb-4"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>

                            {/* Pricing & Stats */}
                            <div className="border-t border-border pt-6 mb-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="text-3xl font-bold text-foreground mb-1">
                                            ${currentTutor.price}
                                        </div>
                                        <div className="text-sm text-muted-foreground">50-min lesson</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-1 mb-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-lg font-bold text-foreground">{currentTutor.rating}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground">{currentTutor.reviews} reviews</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-foreground mb-1">{currentTutor.students}</div>
                                        <div className="text-xs text-muted-foreground">students</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-foreground mb-1">{currentTutor.lessons}</div>
                                        <div className="text-xs text-muted-foreground">lessons</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                                <Button
                                    className="w-full h-12 font-semibold hover:opacity-90 transition-all"
                                    style={{ backgroundColor: '#FF7AAC', color: '#ffffff' }}
                                    asChild
                                >
                                    <Link href={`/contact?source=TutorsPage&interest=FreeTrial&tutor=${encodeURIComponent(currentTutor.name)}`}>Book trial lesson</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full h-12 font-semibold border-2 hover:bg-gray-50 transition-all"
                                    asChild
                                >
                                    <Link href={`/contact?source=TutorsPage&interest=MessageTutor&tutor=${encodeURIComponent(currentTutor.name)}`} className="flex items-center justify-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        Send message
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
