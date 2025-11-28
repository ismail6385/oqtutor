"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBookOpen,
    faStar,
    faHeart,
    faBook,
    faPrayingHands,
    faMicroscope,
    faCalculator,
    faFlask,
    faLanguage,
    faAtom,
    faGraduationCap,
    faUniversity,
    faPencilAlt
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const islamicCourses = [
    {
        title: "Naorani / Madni Qaedah",
        slug: "naorani-qaedah",
        description: "The foundation course for beginners to learn Arabic letters and pronunciation rules.",
        duration: "3-6 Months",
        level: "Beginner",
        icon: faBookOpen,
    },
    {
        title: "Nazara Quran",
        slug: "nazara-quran",
        description: "Fluent reading of the Holy Quran with proper pronunciation.",
        duration: "6-12 Months",
        level: "Intermediate",
        icon: faBook,
    },
    {
        title: "Recitation",
        slug: "recitation",
        description: "Mastering the art of Quranic recitation with Tajweed.",
        duration: "Flexible",
        level: "All Levels",
        icon: faStar,
    },
    {
        title: "Hifz (Memorization)",
        slug: "hifz",
        description: "Structured program for memorizing the Holy Quran.",
        duration: "2-3 Years",
        level: "Advanced",
        icon: faHeart,
    },
    {
        title: "Tafseer",
        slug: "tafseer",
        description: "Understanding the meanings and interpretation of Quranic verses.",
        duration: "1-2 Years",
        level: "Advanced",
        icon: faBookOpen,
    },
    {
        title: "Namaz & Basic Islamic Knowledge",
        slug: "namaz-islamic-knowledge",
        description: "Learning daily prayers, Duas, and essential Islamic teachings.",
        duration: "3 Months",
        level: "Beginner",
        icon: faPrayingHands,
    },
]

const academicCourses = [
    {
        title: "Math",
        slug: "math",
        description: "Comprehensive math tutoring from Grade 4 to University level.",
        grades: "Grade 4 - University",
        icon: faCalculator,
    },
    {
        title: "Chemistry",
        slug: "chemistry",
        description: "Understanding chemical principles, equations, and experiments.",
        grades: "Grade 9 - 12 / O-A Level",
        icon: faFlask,
    },
    {
        title: "Physics",
        slug: "physics",
        description: "Mastering concepts of motion, energy, and matter.",
        grades: "Grade 9 - 12 / O-A Level",
        icon: faAtom,
    },
    {
        title: "English",
        slug: "english",
        description: "Improving reading, writing, and speaking skills.",
        grades: "All Grades",
        icon: faLanguage,
    },
    {
        title: "Science",
        slug: "science",
        description: "General science education for younger students.",
        grades: "Grade 4 - 8",
        icon: faMicroscope,
    },
    {
        title: "Entrance Test Preparation",
        slug: "entrance-test-preparation",
        description: "Specialized coaching for university entrance exams.",
        grades: "Pre-University",
        icon: faPencilAlt,
    },
]

export default function ServicesPage() {
    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary">Our Courses</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Comprehensive Learning Programs
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        From Quranic studies to academic excellence, we offer a wide range of courses tailored to your needs.
                    </p>

                </div>

                {/* Islamic Courses Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-10 w-1 bg-primary rounded-full" />
                        <h3 className="text-2xl font-bold text-foreground">Islamic Courses</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {islamicCourses.map((course, index) => (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300 border-primary/10">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            <FontAwesomeIcon icon={course.icon} className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{course.title}</CardTitle>
                                        <CardDescription className="mt-2">{course.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="font-medium text-foreground">Duration</p>
                                                <p className="text-muted-foreground">{course.duration}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-foreground">Level</p>
                                                <p className="text-muted-foreground">{course.level}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" asChild>
                                            <Link href={`/courses/${course.slug}`}>View Details</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Academic Courses Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-10 w-1 bg-primary rounded-full" />
                        <h3 className="text-2xl font-bold text-foreground">Academic Courses</h3>
                        <span className="text-sm font-medium text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">
                            Grade 4 to University Level
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {academicCourses.map((course, index) => (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300 border-primary/10">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            <FontAwesomeIcon icon={course.icon} className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{course.title}</CardTitle>
                                        <CardDescription className="mt-2">{course.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-sm">
                                            <p className="font-medium text-foreground">Grades / Levels</p>
                                            <p className="text-muted-foreground">{course.grades}</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                                            <Link href={`/courses/${course.slug}`}>View Details</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
