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
import { Star, GraduationCap, Clock } from "lucide-react"
import Link from "next/link"

const tutors = [
    {
        name: "Sheikh Abdullah",
        qualification: "Ijazah in Hafs & Shu'bah",
        specialization: "Tajweed & Hifz",
        experience: "15 Years",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Ustadha Fatima",
        qualification: "Masters in Islamic Studies",
        specialization: "Quran Reading & Tafseer",
        experience: "10 Years",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Sheikh Ahmed",
        qualification: "Al-Azhar University Graduate",
        specialization: "Arabic Language & Fiqh",
        experience: "12 Years",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Ustadha Aisha",
        qualification: "Hafiza with Ijazah",
        specialization: "Kids Quran Teaching",
        experience: "8 Years",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Sheikh Omar",
        qualification: "PhD in Quranic Sciences",
        specialization: "Advanced Tajweed",
        experience: "20 Years",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Ustadha Zainab",
        qualification: "Certified Tajweed Instructor",
        specialization: "Beginners & Kids",
        experience: "7 Years",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
]

export default function TutorsPage() {
    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Our Tutors</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Learn from the Best
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Our tutors are highly qualified, certified, and experienced in teaching Quran to students of all ages and backgrounds.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tutors.map((tutor, index) => (
                        <motion.div
                            key={tutor.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary">
                                        <img src={tutor.image} alt={tutor.name} className="h-full w-full object-cover" />
                                    </div>
                                    <CardTitle>{tutor.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">
                                        {tutor.qualification}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-muted-foreground">
                                            <GraduationCap className="h-4 w-4" />
                                            Specialization
                                        </span>
                                        <span className="font-medium">{tutor.specialization}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-muted-foreground">
                                            <Clock className="h-4 w-4" />
                                            Experience
                                        </span>
                                        <span className="font-medium">{tutor.experience}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-muted-foreground">
                                            <Star className="h-4 w-4" />
                                            Rating
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                                            <span className="font-medium">{tutor.rating}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" asChild>
                                        <Link href="/contact">Book a Trial</Link>
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
