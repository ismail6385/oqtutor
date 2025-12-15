"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

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

import { submitContactForm } from "../actions"

function ContactForm() {
    const searchParams = useSearchParams()
    const source = searchParams.get('source')
    const interest = searchParams.get('interest')
    const tutor = searchParams.get('tutor')

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [phoneValue, setPhoneValue] = useState<string>()
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [successMessage, setSuccessMessage] = useState<string>("")

    const validateForm = (formData: FormData): Record<string, string> => {
        const newErrors: Record<string, string> = {}

        const firstName = formData.get('first-name')?.toString().trim()
        const lastName = formData.get('last-name')?.toString().trim()
        const email = formData.get('email')?.toString().trim()
        const message = formData.get('message')?.toString().trim()

        if (!firstName) {
            newErrors['first-name'] = 'First name is required'
        }

        if (!lastName) {
            newErrors['last-name'] = 'Last name is required'
        }

        if (!email) {
            newErrors['email'] = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors['email'] = 'Please enter a valid email address'
        }

        if (!phoneValue) {
            newErrors['phone'] = 'Phone number is required'
        }

        if (!message) {
            newErrors['message'] = 'Message is required'
        } else if (message.length < 10) {
            newErrors['message'] = 'Message must be at least 10 characters'
        }

        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        setErrors({})
        setSuccessMessage("")

        const formData = new FormData(form)
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setIsSubmitting(true)

        try {
            // Add phone value to form data
            if (phoneValue) {
                formData.set('phone', phoneValue)
            }
            const result = await submitContactForm(formData)

            if (result.success) {
                setSuccessMessage(result.message || "Message sent successfully! We'll get back to you soon.")
                form.reset()
                setPhoneValue(undefined)
                setErrors({})
            } else {
                setErrors({ submit: result.message || "Failed to send message. Please try again." })
            }
        } catch (error) {
            console.error("Form submission error:", error)
            setErrors({ submit: "Something went wrong. Please try again." })
            setSuccessMessage("")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-border p-8 shadow-sm"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="source" value={source || ''} />
                <input type="hidden" name="interest" value={interest || ''} />
                <input type="hidden" name="tutor" value={tutor || ''} />

                {/* Success Message */}
                {successMessage && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                        {successMessage}
                    </div>
                )}

                {/* Error Message */}
                {errors.submit && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                        {errors.submit}
                    </div>
                )}

                {/* Interest Context Banner */}
                {(interest || tutor) && (
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm mb-4">
                        {interest && <span>You are inquiring about: <strong>{interest.replace(/-/g, ' ')}</strong></span>}
                        {interest && tutor && <br />}
                        {tutor && <span>Selected Tutor: <strong>{decodeURIComponent(tutor)}</strong></span>}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="first-name" className="text-foreground font-semibold">First name</Label>
                        <Input
                            id="first-name"
                            name="first-name"
                            type="text"
                            required
                            className={`mt-2 h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all ${errors['first-name'] ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                        />
                        {errors['first-name'] && (
                            <p className="mt-1 text-sm text-red-600">{errors['first-name']}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="last-name" className="text-foreground font-semibold">Last name</Label>
                        <Input
                            id="last-name"
                            name="last-name"
                            type="text"
                            required
                            className={`mt-2 h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all ${errors['last-name'] ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                        />
                        {errors['last-name'] && (
                            <p className="mt-1 text-sm text-red-600">{errors['last-name']}</p>
                        )}
                    </div>
                </div>
                <div>
                    <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={`mt-2 h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all ${errors['email'] ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    {errors['email'] && (
                        <p className="mt-1 text-sm text-red-600">{errors['email']}</p>
                    )}
                </div>
                <div>
                    <Label htmlFor="phone" className="text-foreground font-semibold">Phone number</Label>
                    <div className={`mt-2 ${errors['phone'] ? 'border border-red-500 rounded-md' : ''}`}>
                        <PhoneInput
                            international
                            defaultCountry="PK"
                            value={phoneValue}
                            onChange={setPhoneValue}
                            className={`flex h-11 w-full rounded-md border ${errors['phone'] ? 'border-red-500' : 'border-gray-200'} bg-gray-50/50 px-3 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all`}
                            style={{
                                '--PhoneInputCountryFlag-borderColor': 'transparent',
                            } as React.CSSProperties}
                        />
                    </div>
                    {errors['phone'] && (
                        <p className="mt-1 text-sm text-red-600">{errors['phone']}</p>
                    )}
                </div>
                <div>
                    <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className={`mt-2 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all ${errors['message'] ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                        defaultValue={interest ? `I am interested in learning more about the ${interest.replace(/-/g, ' ')} course.` : ''}
                    />
                    {errors['message'] && (
                        <p className="mt-1 text-sm text-red-600">{errors['message']}</p>
                    )}
                </div>
                <Button
                    type="submit"
                    className="w-full h-12 font-semibold hover:opacity-90 transition-all"
                    disabled={isSubmitting}
                    style={{ backgroundColor: '#121117', color: '#ffffff' }}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </motion.div>
    )
}

export default function ContactPage() {

    return (
        <div className="bg-background pt-32 sm:pt-36 pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Contact Us</h2>
                    <p
                        style={{
                            fontFamily: "Platform, Platform-fallback, Platform-fallback-android, 'Noto Sans', NotoSans-fallback, NotoSans-fallback-android, sans-serif",
                            fontSize: '56px',
                            fontWeight: 500,
                            lineHeight: '60px',
                            color: '#121117',
                            marginTop: '8px'
                        }}
                    >
                        We'd love to hear from you
                    </p>
                    <p style={{ marginTop: '24px', fontSize: '20px', lineHeight: '1.6', color: '#6B6B6B' }}>
                        Have questions about our courses or need help getting started? Our team is here to assist you.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "Platform, Platform-fallback, Platform-fallback-android, 'Noto Sans', NotoSans-fallback, NotoSans-fallback-android, sans-serif",
                                fontSize: '32px',
                                fontWeight: 500,
                                lineHeight: '1.3',
                                color: '#121117'
                            }}
                        >
                            Get in touch
                        </h3>
                        <p style={{ marginTop: '16px', fontSize: '18px', color: '#6B6B6B' }}>
                            Fill out the form or contact us directly using the information below.
                        </p>

                        <dl className="mt-8 space-y-6">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-primary" href="mailto:info@oqtutor.com">
                                        info@oqtutor.com
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
                    <Suspense fallback={<div>Loading form...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>

                {/* FAQ Section */}
                <div className="mx-auto mt-24 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2
                            style={{
                                fontFamily: "Platform, Platform-fallback, Platform-fallback-android, 'Noto Sans', NotoSans-fallback, NotoSans-fallback-android, sans-serif",
                                fontSize: '56px',
                                fontWeight: 500,
                                lineHeight: '60px',
                                color: '#121117',
                                marginBottom: '12px'
                            }}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p style={{ fontSize: '18px', color: '#6B6B6B' }}>
                            Find answers to common questions about our online Quran classes.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <details className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-foreground hover:text-primary transition-colors select-none">
                                        <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                                        <svg
                                            className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/50">
                                        {faq.answer}
                                    </div>
                                </details>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
