"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Globe, BookOpen, Heart, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

const stats = [
    { label: "Active Students", value: "300+", icon: Users },
    { label: "Expert Tutors", value: "30+", icon: Award },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Countries Served", value: "15+", icon: Globe },
]

const journey = [
    {
        year: "2020",
        title: "The Beginning",
        description: "OQTutor was founded with a vision to make Quran learning accessible to everyone, everywhere.",
    },
    {
        year: "2021",
        title: "Rapid Growth",
        description: "Expanded our tutor network and reached students in over 10 countries.",
    },
    {
        year: "2022",
        title: "Innovation",
        description: "Launched advanced learning tools and personalized curriculum for each student.",
    },
    {
        year: "2023",
        title: "Global Impact",
        description: "Crossed 200+ active students and established partnerships with Islamic centers worldwide.",
    },
    {
        year: "2024",
        title: "Excellence",
        description: "Achieved 95% student satisfaction rate and introduced specialized Hifz programs.",
    },
]

const team = [
    { name: "Hafiz Ahmed", role: "Lead Quran Instructor", image: "/images/student-1.jpeg" },
    { name: "Sister Fatima", role: "Tajweed Specialist", image: "/images/student-2.jpeg" },
    { name: "Ustadh Ibrahim", role: "Arabic Language Expert", image: "/images/student-3.jpeg" },
    { name: "Sister Aisha", role: "Islamic Studies Teacher", image: "/images/student-4.jpeg" },
    { name: "Hafiz Yusuf", role: "Hifz Program Director", image: "/images/student-5.jpeg" },
    { name: "Sister Maryam", role: "Tafseer Instructor", image: "/images/student-6.jpeg" },
]

const principles = [
    {
        title: "Quality Education",
        description: "We provide the highest quality Quranic education with certified and experienced tutors.",
        color: "bg-[#ff7aac]",
        icon: Award,
    },
    {
        title: "Personalized Learning",
        description: "Every student receives a customized learning plan tailored to their pace and goals.",
        color: "bg-[#7B68EE]",
        icon: Target,
    },
    {
        title: "Flexible Scheduling",
        description: "Learn at your convenience with flexible class timings that fit your schedule.",
        color: "bg-[#28D094]",
        icon: Globe,
    },
    {
        title: "Spiritual Growth",
        description: "We focus not just on reading, but on understanding and implementing Quranic teachings.",
        color: "bg-[#FBBF24]",
        icon: Heart,
    },
    {
        title: "Safe Environment",
        description: "We ensure a respectful, encouraging, and safe learning environment for all students.",
        color: "bg-[#3B82F6]",
        icon: Users,
    },
    {
        title: "Continuous Support",
        description: "Our support team is always available to help you with any questions or concerns.",
        color: "bg-[#EC4899]",
        icon: Star,
    },
]

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#ff7aac] to-[#ff9ac4] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                                style={{
                                    fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                    fontWeight: 500
                                }}
                            >
                                Empowering people's progress.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{ fontSize: '20px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}
                                className="mb-8"
                            >
                                At OQTutor, we believe that learning the Quran should be an enriching and accessible experience for everyone, everywhere.
                            </motion.p>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="px-8 py-4 bg-[#121117] text-white font-semibold rounded-full hover:opacity-90 transition-all"
                            >
                                Learn More
                            </motion.button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/student-7.jpeg"
                                alt="OQTutor Student"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/images/student-8.jpeg"
                            alt="Our Story"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-base font-semibold text-primary mb-4">OUR STORY</h2>
                        <h3
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Connecting Hearts with the Quran
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            OQTutor was born from a simple yet powerful vision: to make authentic Quranic education accessible to Muslims worldwide. We understand that in today's fast-paced world, finding time and resources for quality Islamic education can be challenging.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            That's why we created a platform that brings certified, experienced Quran tutors directly to your home through the power of technology. Our mission is to preserve and spread the beautiful teachings of the Quran, one student at a time.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* People by Numbers */}
            <div className="bg-gradient-to-br from-[#7B68EE] to-[#9B88FF] py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            People by numbers
                        </h2>
                        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)' }}>Our impact in the global Muslim community</p>
                    </motion.div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div style={{ fontSize: '48px', fontWeight: 500, color: '#ffffff', marginBottom: '8px', fontFamily: "Platform, Platform-fallback, Platform-fallback-android, 'Noto Sans', NotoSans-fallback, NotoSans-fallback-android, sans-serif" }}>{stat.value}</div>
                                <div style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Journey of OQTutor */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                        style={{
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Journey of OQTutor
                    </h2>
                    <p style={{ fontSize: '20px', color: '#6B6B6B' }}>Our growth and milestones over the years</p>
                </motion.div>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>

                    <div className="space-y-12">
                        {journey.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                                    <div className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold mb-4">
                                        {item.year}
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-lg text-muted-foreground">{item.description}</p>
                                </div>
                                <div className={index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                                    {/* Placeholder for timeline dot */}
                                    <div className="hidden lg:flex justify-center">
                                        <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Leadership Team */}
            <div className="bg-secondary py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Our leadership team
                        </h2>
                        <p style={{ fontSize: '20px', color: '#6B6B6B' }}>Meet the dedicated educators guiding our students</p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="128px"
                                    />
                                </div>
                                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Principles */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                        style={{
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Our principles
                    </h2>
                    <p style={{ fontSize: '20px', color: '#6B6B6B' }}>The values that guide everything we do</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${principle.color} rounded-2xl p-8 text-white hover:shadow-xl transition-all hover:scale-105`}
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                                <principle.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                            <p className="text-white/90 leading-relaxed">{principle.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#ff7aac] to-[#7B68EE] py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Ready to start your Quran learning journey?
                        </h2>
                        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto' }}>
                            Join thousands of students worldwide who are learning the Quran with OQTutor's expert instructors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-white text-[#ff7aac] font-semibold rounded-full hover:shadow-xl transition-all inline-block"
                            >
                                Get Started Today
                            </a>
                            <a
                                href="/pricing"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white hover:bg-white/20 transition-all inline-block"
                            >
                                View Pricing
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
