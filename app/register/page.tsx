"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faCheckCircle, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons"

const testimonials = [
    {
        quote: "The best among you is he who learns the Quran and teaches it.",
        author: "Prophet Muhammad (PBUH)",
        role: "Hadith",
        image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        quote: "OQTutor has completely transformed my understanding of Tajweed. The tutors are world-class.",
        author: "Sarah Ahmed",
        role: "Student, UK",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "I never thought learning Arabic could be this accessible. Highly recommended for beginners!",
        author: "Michael Chen",
        role: "Student, USA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
]

export default function RegisterPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        alert("Registration successful!")
    }

    return (
        <div className="min-h-screen w-full flex bg-background">
            {/* Left Side - Image & Testimonial Carousel */}
            <div className="hidden lg:flex w-1/2 relative bg-primary/5 items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={testimonials[currentTestimonial].image}
                            alt="Background"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 max-w-lg px-12 text-white">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-white" />
                                </div>
                                <span className="font-semibold tracking-wide uppercase text-sm">Join 2,000+ Students</span>
                            </div>

                            <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-white/60 mb-4" />

                            <h2 className="text-4xl font-bold leading-tight mb-6">
                                "{testimonials[currentTestimonial].quote}"
                            </h2>

                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                                    <p className="text-sm text-white/80">{testimonials[currentTestimonial].role}</p>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Indicators */}
                    <div className="flex gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-20 lg:px-20 xl:px-32 relative z-10 bg-background pt-32 lg:pt-20">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-bold tracking-tight text-foreground mb-2"
                        >
                            Create an account
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground"
                        >
                            Already have an account?{" "}
                            <Link href="/login" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                                Sign in
                            </Link>
                        </motion.p>
                    </div>

                    {/* Google Sign Up */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button variant="outline" className="w-full h-12 text-base font-medium mb-6 gap-3 hover:bg-gray-50 transition-colors group" type="button">
                            <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                            Sign up with Google
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative mb-8"
                    >
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                        </div>
                    </motion.div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-2"
                            >
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="John" required className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-2"
                            >
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Doe" required className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-2"
                        >
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-2"
                        >
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="••••••••" required className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-2"
                        >
                            <Label htmlFor="course">Interested Course</Label>
                            <Select>
                                <SelectTrigger className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all">
                                    <SelectValue placeholder="Select a course" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="reading">Quran Reading</SelectItem>
                                    <SelectItem value="tajweed">Tajweed</SelectItem>
                                    <SelectItem value="hifz">Hifz (Memorization)</SelectItem>
                                    <SelectItem value="islamic-studies">Islamic Studies</SelectItem>
                                    <SelectItem value="arabic">Arabic Language</SelectItem>
                                </SelectContent>
                            </Select>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <Button type="submit" className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4" disabled={isSubmitting}>
                                {isSubmitting ? "Creating account..." : "Create Account"}
                            </Button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-xs text-center text-muted-foreground mt-6"
                        >
                            By clicking continue, you agree to our{" "}
                            <Link href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</Link>
                            {" "}and{" "}
                            <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>.
                        </motion.p>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
