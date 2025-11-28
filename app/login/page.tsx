"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons"

const testimonials = [
    {
        quote: "The flexibility of OQTutor allowed me to memorize the Quran while working full-time. Truly a blessing.",
        author: "Ahmed Hassan",
        role: "Hifz Student",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop"
    },
    {
        quote: "My daughter loves her teacher. The interactive sessions keep her engaged and excited to learn.",
        author: "Fatima Al-Sayed",
        role: "Parent",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Professional, punctual, and patient. The best platform for learning Islamic studies online.",
        author: "Omar Farooq",
        role: "Student",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
]

export default function LoginPage() {
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
        alert("Logged in successfully!")
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
                            <FontAwesomeIcon icon={faQuoteLeft} className="h-10 w-10 text-white/50 mb-6" />
                            <h2 className="text-4xl font-bold leading-tight mb-6">
                                "{testimonials[currentTestimonial].quote}"
                            </h2>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[currentTestimonial].image}
                                    alt="User"
                                    className="h-12 w-12 rounded-full border-2 border-white/50 object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                                    <p className="text-sm text-white/80">{testimonials[currentTestimonial].role}</p>
                                </div>
                                <div className="ml-auto flex gap-1">
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
                            Welcome back
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground"
                        >
                            New to OQTutor?{" "}
                            <Link href="/register" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                                Create an account
                            </Link>
                        </motion.p>
                    </div>

                    {/* Google Sign In */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button variant="outline" className="w-full h-12 text-base font-medium mb-6 gap-3 hover:bg-gray-50 transition-colors group" type="button">
                            <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                            Sign in with Google
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
                            <span className="bg-background px-2 text-muted-foreground">Or sign in with email</span>
                        </div>
                    </motion.div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-2"
                        >
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input id="password" type="password" placeholder="••••••••" required className="h-11 bg-gray-50/50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                            />
                            <Label htmlFor="remember" className="font-normal text-muted-foreground cursor-pointer select-none">Remember me for 30 days</Label>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Button type="submit" className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4" disabled={isSubmitting}>
                                {isSubmitting ? "Signing in..." : "Sign In"}
                            </Button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
