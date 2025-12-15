'use client'

import { Star, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedTutors() {
    const tutors = [
        {
            name: 'Sheikh Ahmed Ali',
            title: 'Quran & Tajweed Expert',
            location: 'Egypt',
            rating: 4.9,
            reviews: 245,
            students: 1200,
            experience: '15 years',
            specialties: ['Tajweed', 'Hifz', 'Quranic Arabic'],
            price: '$15',
            image: '👨‍🏫',
        },
        {
            name: 'Ustadha Fatima Hassan',
            title: 'Islamic Studies Scholar',
            location: 'Saudi Arabia',
            rating: 5.0,
            reviews: 189,
            students: 950,
            experience: '12 years',
            specialties: ['Tafseer', 'Hadith', 'Fiqh'],
            price: '$18',
            image: '👩‍🏫',
        },
        {
            name: 'Sheikh Muhammad Yusuf',
            title: 'Hifz & Memorization Specialist',
            location: 'Pakistan',
            rating: 4.8,
            reviews: 312,
            students: 1500,
            experience: '18 years',
            specialties: ['Hifz', 'Tajweed', 'Nazra'],
            price: '$12',
            image: '👨‍🏫',
        },
        {
            name: 'Ustadha Aisha Rahman',
            title: 'Arabic Language Teacher',
            location: 'Jordan',
            rating: 4.9,
            reviews: 156,
            students: 780,
            experience: '10 years',
            specialties: ['Arabic Grammar', 'Quranic Arabic'],
            price: '$16',
            image: '👩‍🏫',
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Learn from the best tutors
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        All our tutors are certified, experienced, and passionate about teaching
                    </p>
                </div>

                {/* Tutors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {tutors.map((tutor, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Tutor Image/Avatar */}
                            <div className="relative h-48 bg-secondary flex items-center justify-center">
                                <div className="text-7xl">{tutor.image}</div>

                                {/* Rating Badge */}
                                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white rounded-full shadow-lg flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="font-bold text-sm">{tutor.rating}</span>
                                    <span className="text-xs text-muted-foreground">({tutor.reviews})</span>
                                </div>
                            </div>

                            {/* Tutor Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-foreground mb-1">
                                    {tutor.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">{tutor.title}</p>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {tutor.location}
                                </div>

                                {/* Specialties */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {tutor.specialties.slice(0, 2).map((specialty, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div>
                                        <div className="text-2xl font-bold text-primary">{tutor.price}</div>
                                        <div className="text-xs text-muted-foreground">per hour</div>
                                    </div>
                                    <button 
                                        className="px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-all"
                                        style={{ backgroundColor: '#121117', color: '#ffffff' }}
                                    >
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Link
                        href="/tutors"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
                        style={{ backgroundColor: '#121117', color: '#ffffff' }}
                    >
                        Browse All Tutors
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
