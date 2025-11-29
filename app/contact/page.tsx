"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const faqs = [
    {
        question: "How do online classes work?",
        answer: "Our classes are conducted via video call. You will receive a link to join the session at your scheduled time. All you need is a device with an internet connection.",
    },
    {
        question: "Can I choose my own schedule?",
        answer: "Yes, we offer flexible scheduling. You can choose the days and times that work best for you.",
    },
    {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a free trial class so you can experience our teaching method before committing.",
    },
    {
        question: "What if I miss a class?",
        answer: "If you need to reschedule, please notify us at least 24 hours in advance. Missed classes can be made up based on tutor availability.",
    },
]

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        alert("Message sent successfully!")
    }

    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Contact Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        We'd love to hear from you
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Have questions about our courses or need help getting started? Our team is here to assist you.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">Get in touch</h3>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Fill out the form or contact us directly using the information below.
                        </p>

                        <dl className="mt-8 space-y-6">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-primary" href="mailto:support@oqtutor.com">
                                        support@oqtutor.com
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Phone</span>
                                    <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-primary" href="tel:+923478704442">
                                        +92 347 8704442
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                                </dt>
                                <dd>
                                    123 Islamic Center Dr,
                                    <br />
                                    City, State 12345
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" name="first-name" type="text" required className="mt-2" />
                                </div>
                                <div>
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" name="last-name" type="text" required className="mt-2" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone number</Label>
                                <Input id="phone" name="phone" type="tel" className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" rows={4} required className="mt-2" />
                            </div>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="mx-auto mt-24 max-w-2xl divide-y divide-gray-200 dark:divide-gray-800">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-foreground">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-200 dark:divide-gray-800">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pt-6">
                                <dt>
                                    <h3 className="text-base font-semibold leading-7 text-foreground">
                                        {faq.question}
                                    </h3>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
