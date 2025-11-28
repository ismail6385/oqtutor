"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPlay,
    faStar,
    faCheckCircle,
    faUserGraduate,
    faClock,
    faVideo
} from "@fortawesome/free-solid-svg-icons"

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-background pt-[120px] pb-20 lg:pt-[160px] lg:pb-32">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Copy & CTA */}
                    <div className="relative z-10 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/20">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                #1 Rated Online Quran Academy
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                                Connect with the <br />
                                <span className="text-primary relative inline-block">
                                    Quran
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                                {" "}from Home
                            </h1>

                            {/* Subheadline */}
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                                Experience personalized 1-on-1 Quran classes with certified tutors.
                                Flexible schedules, female tutors available, and a curriculum tailored to you.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button size="lg" className="h-14 px-8 rounded-full text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300" asChild>
                                    <Link href="/register">
                                        Book Free Trial
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg font-semibold border-2 hover:bg-secondary/50" asChild>
                                    <Link href="/tutors">
                                        <FontAwesomeIcon icon={faPlay} className="mr-2 h-4 w-4 text-primary" />
                                        View Tutors
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust Signals / Features */}
                            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <FontAwesomeIcon icon={faUserGraduate} className="h-5 w-5 text-primary" />
                                        <span className="font-bold text-foreground">Expert</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Al-Azhar Tutors</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <FontAwesomeIcon icon={faClock} className="h-5 w-5 text-primary" />
                                        <span className="font-bold text-foreground">24/7</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Flexible Timing</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <FontAwesomeIcon icon={faVideo} className="h-5 w-5 text-primary" />
                                        <span className="font-bold text-foreground">1-on-1</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Live Classes</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[700px] flex items-center justify-center"
                    >
                        {/* Main Image Container */}
                        <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white bg-zinc-100">
                            <img
                                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop"
                                alt="Student learning Quran online"
                                className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-1000"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            {/* Floating Glass Card 1: Rating */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full">
                                        <FontAwesomeIcon icon={faStar} className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground leading-none">4.9/5.0</p>
                                        <p className="text-xs text-muted-foreground mt-1">Parent Reviews</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 2: Active Students */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 max-w-[260px]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground text-sm">Satisfaction Guarantee</p>
                                        <p className="text-xs text-muted-foreground mt-1">Not happy? Get a full refund within the first week.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements behind image */}
                        <div className="absolute -z-10 top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                        <svg className="absolute -z-10 -bottom-12 -left-12 w-32 h-32 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
                            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#dots)" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
