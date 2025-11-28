"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
    {
        name: "Basic",
        id: "tier-basic",
        href: "/register",
        priceMonthly: "$50",
        description: "Essential Quran learning for beginners.",
        features: [
            "2 Classes per week",
            "30 Minutes per session",
            "Basic Tajweed rules",
            "Monthly progress report",
            "Email support",
        ],
        mostPopular: false,
    },
    {
        name: "Standard",
        id: "tier-standard",
        href: "/register",
        priceMonthly: "$80",
        description: "Perfect for consistent progress and memorization.",
        features: [
            "3 Classes per week",
            "45 Minutes per session",
            "Advanced Tajweed & Hifz",
            "Bi-weekly progress report",
            "Priority email support",
            "Access to recorded sessions",
        ],
        mostPopular: true,
    },
    {
        name: "Premium",
        id: "tier-premium",
        href: "/register",
        priceMonthly: "$120",
        description: "Intensive learning for dedicated students.",
        features: [
            "5 Classes per week",
            "60 Minutes per session",
            "Complete Islamic Studies",
            "Weekly progress report",
            "24/7 WhatsApp support",
            "1-on-1 Q&A sessions",
            "Certificate upon completion",
        ],
        mostPopular: false,
    },
]

export default function PricingPage() {
    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Simple, transparent pricing
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Choose the plan that best fits your schedule and learning goals. No hidden fees.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 xl:p-10 ${tier.mostPopular ? 'ring-2 ring-primary shadow-xl scale-105 z-10' : ''
                                }`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={`text-lg font-semibold leading-8 ${tier.mostPopular ? 'text-primary' : 'text-foreground'
                                            }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                                            Most popular
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-foreground">
                                        {tier.priceMonthly}
                                    </span>
                                    <span className="text-sm font-semibold leading-6 text-muted-foreground">
                                        /month
                                    </span>
                                </p>
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground"
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check
                                                className="h-6 w-5 flex-none text-primary"
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button
                                asChild
                                className={`mt-8 w-full ${tier.mostPopular ? 'bg-primary hover:bg-primary/90' : ''
                                    }`}
                                variant={tier.mostPopular ? 'default' : 'outline'}
                            >
                                <Link href={tier.href} aria-describedby={tier.id}>
                                    Choose plan
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
