"use client"

import { motion } from "framer-motion"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Book, BookOpen, Heart, Languages, MessageCircle, Star } from "lucide-react"

const services = [
    {
        title: "Quran Reading",
        description: "Learn to read Quran with proper pronunciation (Tajweed) from basics (Norani Qaida).",
        icon: BookOpen,
    },
    {
        title: "Tajweed",
        description: "Master the rules of Tajweed to recite the Quran beautifully and correctly.",
        icon: Star,
    },
    {
        title: "Hifz (Memorization)",
        description: "Commit the Holy Quran to heart with our structured memorization program.",
        icon: Heart,
    },
    {
        title: "Islamic Studies",
        description: "Learn about Fiqh, Seerah, Hadith, and other essential Islamic sciences.",
        icon: Book,
    },
    {
        title: "Arabic Language",
        description: "Learn to speak, read, and understand the Arabic language.",
        icon: Languages,
    },
    {
        title: "Tafseer",
        description: "Understand the deeper meanings and interpretations of the Quranic verses.",
        icon: MessageCircle,
    },
]

export default function Services() {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">
                        Our Courses
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Comprehensive Islamic Education
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We offer a wide range of courses tailored to students of all ages and levels.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription className="mt-2">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button className="w-full" variant="outline" asChild>
                                        <Link href="/services">Learn More</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
