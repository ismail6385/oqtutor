"use client"

import { useParams, notFound } from "next/navigation"
import { courses } from "@/lib/courses-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCheckCircle,
    faArrowLeft,
    faClock,
    faSignal,
    faGraduationCap,
    faPlay,
    faStar
} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import NamazLiveClassPage from "@/components/NamazLiveClassPage"
import TafseerLiveClassPage from "@/components/TafseerLiveClassPage"
import HifzLiveClassPage from "@/components/HifzLiveClassPage"
import RecitationLiveClassPage from "@/components/RecitationLiveClassPage"
import NazaraQuranLiveClassPage from "@/components/NazaraQuranLiveClassPage"
import NaoraniQaedahLiveClassPage from "@/components/NaoraniQaedahLiveClassPage"
import IslamicStudiesLiveClassPage from "@/components/IslamicStudiesLiveClassPage"
import ArabicLanguageLiveClassPage from "@/components/ArabicLanguageLiveClassPage"

export default function CoursePage() {
    const params = useParams()
    const course = courses.find(c => c.slug === params.slug)

    if (!course) {
        return notFound()
    }

    // Show dedicated live class page for Namaz course
    if (course.slug === "namaz-islamic-knowledge") {
        return <NamazLiveClassPage />
    }

    // Show dedicated live class page for Tafseer course
    if (course.slug === "tafseer") {
        return <TafseerLiveClassPage />
    }

    // Show dedicated live class page for Hifz course
    if (course.slug === "hifz") {
        return <HifzLiveClassPage />
    }

    // Show dedicated live class page for Recitation course
    if (course.slug === "recitation") {
        return <RecitationLiveClassPage />
    }

    // Show dedicated live class page for Nazara Quran course
    if (course.slug === "nazara-quran") {
        return <NazaraQuranLiveClassPage />
    }

    // Show dedicated live class page for Naorani Qaedah course
    if (course.slug === "naorani-qaedah") {
        return <NaoraniQaedahLiveClassPage />
    }

    // Show dedicated live class page for Islamic Studies course
    if (course.slug === "islamic-studies") {
        return <IslamicStudiesLiveClassPage />
    }

    // Show dedicated live class page for Arabic Language course
    if (course.slug === "arabic") {
        return <ArabicLanguageLiveClassPage />
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image & Gradient */}
                <div className="absolute inset-0 z-0">
                    {course.heroImage ? (
                        <img
                            src={course.heroImage}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div
                            className="w-full h-full"
                            style={{
                                background: `linear-gradient(135deg, ${course.color || '#0f172a'} 0%, #020617 100%)`
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/40" />
                    <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center pt-20">
                    {/* Breadcrumbs */}
                    <nav className="flex justify-center items-center gap-2 text-sm text-gray-300 mb-8 animate-fade-in">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-primary transition-colors">Courses</Link>
                        <span>/</span>
                        <span className="text-white font-medium">{course.title}</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-white border border-white/20 backdrop-blur-md text-sm font-semibold mb-6 shadow-lg bg-white/10"
                        >
                            {course.category} Course
                        </span>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
                            style={{
                                fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                                fontWeight: 500
                            }}
                        >
                            {course.title}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                            {course.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all text-white border-0 hover:scale-105"
                                style={{
                                    backgroundColor: course.color || 'hsl(var(--primary))',
                                    boxShadow: `0 10px 25px -5px ${course.color}80`
                                }}
                                asChild
                            >
                                <Link href="/register">Enroll Now</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all" asChild>
                                <Link href="#curriculum">View Curriculum</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="border-y border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faClock} className="h-5 w-5 text-primary" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold">Duration</p>
                                <p className="font-semibold">{course.duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faSignal} className="h-5 w-5 text-primary" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold">Level</p>
                                <p className="font-semibold">{course.level}</p>
                            </div>
                        </div>
                        {course.grades && (
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold">Grades</p>
                                    <p className="font-semibold">{course.grades}</p>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-3">
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                                <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                                <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                                <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                                <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold">Rating</p>
                                <p className="font-semibold">4.9 (500+ Reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {course.longDescription}
                            </p>
                        </section>

                        {/* Benefits Grid */}
                        {course.benefits && (
                            <section>
                                <h2 className="text-3xl font-bold mb-8">Why Choose This Course?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {course.benefits.map((benefit, index) => (
                                        <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <FontAwesomeIcon icon={benefit.icon} className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                            <p className="text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Curriculum Accordion */}
                        {course.curriculum && (
                            <section id="curriculum" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
                                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                                    <Accordion type="single" collapsible className="w-full">
                                        {course.curriculum.map((module, index) => (
                                            <AccordionItem key={index} value={`item-${index}`} className="px-6">
                                                <AccordionTrigger className="hover:no-underline py-6">
                                                    <div className="flex items-center gap-4 text-left">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                                            {index + 1}
                                                        </div>
                                                        <span className="text-lg font-semibold">{module.title}</span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="pl-14 pb-6 text-muted-foreground text-base">
                                                    {module.description}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </section>
                        )}

                        {/* FAQs */}
                        {course.faqs && (
                            <section>
                                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {course.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6">
                                            <AccordionTrigger className="hover:no-underline py-6 font-semibold text-lg">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-6 text-muted-foreground text-base">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Enrollment Card */}
                            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                                <h3 className="text-2xl font-bold mb-2">Start Learning Today</h3>
                                <p className="text-muted-foreground mb-6">Book your free trial class and get a personalized learning plan.</p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                                        <span>Free 3-Day Trial</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                                        <span>Certified Tutors</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                                        <span>Cancel Anytime</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full h-12 text-lg font-semibold mb-4" asChild>
                                    <Link href="/register">Book Free Trial</Link>
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">No credit card required</p>
                            </div>

                            {/* Help Card */}
                            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8">
                                <h4 className="font-semibold mb-2">Need Help?</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Speak to our academic counselor for guidance.
                                </p>
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Courses Section */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Other Courses You Might Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {courses
                            .filter(c => c.category === course.category && c.slug !== course.slug)
                            .slice(0, 3)
                            .map((relatedCourse) => (
                                <Link href={`/courses/${relatedCourse.slug}`} key={relatedCourse.slug} className="group">
                                    <div className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={relatedCourse.heroImage}
                                                alt={relatedCourse.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                                                <FontAwesomeIcon icon={relatedCourse.icon} className="h-4 w-4 text-primary" />
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{relatedCourse.title}</h3>
                                            <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">{relatedCourse.description}</p>
                                            <div className="flex items-center text-sm font-medium text-primary">
                                                View Details <FontAwesomeIcon icon={faArrowLeft} className="ml-2 h-3 w-3 rotate-180" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
