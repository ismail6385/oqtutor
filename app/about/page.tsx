"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"

const stats = [
    { label: "Students Worldwide", value: "10,000+" },
    { label: "Certified Tutors", value: "500+" },
    { label: "Classes Conducted", value: "1M+" },
    { label: "Years of Experience", value: "10+" },
]

const values = [
    {
        name: "Excellence",
        description: "We strive for the highest standards in Quranic education and teaching methods.",
        icon: Award,
    },
    {
        name: "Accessibility",
        description: "Making Quran learning accessible to everyone, everywhere, at any time.",
        icon: Globe,
    },
    {
        name: "Dedication",
        description: "Our tutors are committed to the spiritual and educational growth of every student.",
        icon: Users,
    },
    {
        name: "Integrity",
        description: "We uphold the highest ethical standards in our interactions and teachings.",
        icon: Target,
    },
]

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[url('https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                        >
                            About OQTutor
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-gray-300"
                        >
                            We are dedicated to spreading the light of the Quran across the globe. Our mission is to connect students with qualified tutors for a personalized and effective learning experience.
                        </motion.p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col-reverse"
                                >
                                    <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                        {stat.value}
                                    </dd>
                                </motion.div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Our Mission</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Connecting Hearts with the Quran
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        At OQTutor, we believe that learning the Quran should be an enriching and accessible experience for everyone. We combine traditional teaching methods with modern technology to create a seamless learning environment.
                    </p>
                </div>

                {/* Values Section */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-16"
                            >
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {value.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                    {value.description}
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
