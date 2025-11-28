"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserGraduate,
    faClock,
    faVideo,
    faFemale,
    faChartLine,
    faTags
} from "@fortawesome/free-solid-svg-icons"

const features = [
    {
        name: "Expert Al-Azhar Tutors",
        description: "Learn from certified tutors who have graduated from the prestigious Al-Azhar University.",
        icon: faUserGraduate,
    },
    {
        name: "24/7 Flexible Schedule",
        description: "Book classes at any time that suits your busy lifestyle, day or night.",
        icon: faClock,
    },
    {
        name: "1-on-1 Live Classes",
        description: "Get personalized attention and feedback in private, interactive video sessions.",
        icon: faVideo,
    },
    {
        name: "Female Tutors Available",
        description: "We offer qualified female tutors for sisters and children, ensuring a comfortable learning environment.",
        icon: faFemale,
    },
    {
        name: "Progress Tracking",
        description: "Monitor your improvement with regular reports and performance assessments.",
        icon: faChartLine,
    },
    {
        name: "Affordable Pricing",
        description: "High-quality Quran education at competitive rates with family discounts available.",
        icon: faTags,
    },
]

export default function Features() {
    return (
        <div className="bg-background py-24 sm:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Everything you need to master the Quran
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We provide a comprehensive learning experience designed to help you achieve your spiritual goals from the comfort of your home.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col relative group"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon icon={feature.icon} className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-bold leading-7 text-foreground">
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
