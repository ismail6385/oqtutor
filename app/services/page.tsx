"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { courses } from "@/lib/courses-data"

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState<"Islamic" | "Academic">("Islamic")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredCourses = courses.filter(course => {
        const matchesCategory = course.category === activeTab
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                        style={{ 
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Explore Our Courses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto"
                    >
                        Discover a world of knowledge with our comprehensive Islamic and Academic tutoring programs designed for all ages and levels.
                    </motion.p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-8 relative z-20">
                {/* Search and Tabs Container */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Tabs */}
                        <div className="flex p-1 space-x-1 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl w-full md:w-auto">
                            <button
                                onClick={() => setActiveTab("Islamic")}
                                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === "Islamic"
                                        ? "bg-white dark:bg-zinc-700 text-primary shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faBookOpen} className="h-4 w-4" />
                                Islamic Studies
                            </button>
                            <button
                                onClick={() => setActiveTab("Academic")}
                                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === "Academic"
                                        ? "bg-white dark:bg-zinc-700 text-secondary shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4" />
                                Academic Tutoring
                            </button>
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faSearch} className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <Input
                                type="text"
                                placeholder="Search courses..."
                                className="pl-10 h-11 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 focus:ring-primary"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="py-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((course, index) => (
                                    <motion.div
                                        key={course.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <Card className="flex flex-col h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-md group bg-white dark:bg-zinc-900">
                                            {/* Image Area */}
                                            <div className="relative h-52 w-full overflow-hidden">
                                                <img
                                                    src={course.heroImage}
                                                    alt={course.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                                                {/* Floating Icon */}
                                                <div className="absolute top-4 right-4">
                                                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                                        <FontAwesomeIcon icon={course.icon} className="h-5 w-5 text-white" />
                                                    </div>
                                                </div>

                                                {/* Badge */}
                                                <div className="absolute bottom-4 left-4 text-white">
                                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${course.category === "Islamic" ? "bg-primary" : "bg-secondary"
                                                        }`}>
                                                        {course.level || course.grades}
                                                    </span>
                                                </div>
                                            </div>

                                            <CardHeader className="pb-3 pt-6">
                                                <CardTitle className={`text-xl font-bold transition-colors line-clamp-1 ${course.category === "Islamic" ? "group-hover:text-primary" : "group-hover:text-secondary"
                                                    }`}>
                                                    {course.title}
                                                </CardTitle>
                                                <CardDescription className="mt-2 line-clamp-2 text-sm leading-relaxed">
                                                    {course.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="flex-grow">
                                                <div className="space-y-2.5">
                                                    {course.features.slice(0, 3).map((feature, i) => (
                                                        <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                            <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${course.category === "Islamic" ? "bg-primary/60" : "bg-secondary/60"
                                                                }`} />
                                                            <span className="line-clamp-1">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>

                                            <CardFooter className="pt-2 pb-6">
                                                <Button
                                                    className={`w-full transition-all duration-300 ${course.category === "Islamic"
                                                            ? "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                                                            : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                                                        }`}
                                                    variant="ghost"
                                                    asChild
                                                >
                                                    <Link href={`/courses/${course.slug}`}>View Details</Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-lg text-muted-foreground">No courses found matching your search.</p>
                                    <Button
                                        variant="link"
                                        onClick={() => setSearchQuery("")}
                                        className="mt-2 text-primary"
                                    >
                                        Clear search
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA Section */}
                <div className="mb-24 rounded-3xl bg-zinc-900 px-6 py-16 sm:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.800),theme(colors.zinc.950))]" />
                    <div className="mx-auto max-w-2xl relative z-10">
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                            style={{ 
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Not sure which course is right for you?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                            Book a free consultation with our academic advisors. We'll help you assess your level and choose the perfect learning path.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                            <Link href="/pricing" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors">
                                View Pricing <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute -top-24 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary to-secondary opacity-20" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
