"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars,
    faTimes,
    faBookOpen,
    faHome,
    faInfoCircle,
    faUsers,
    faPhone,
    faLayerGroup,
    faEnvelope,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { courses } from "@/lib/courses-data"

const navigation = [
    { name: "Home", href: "/", icon: faHome },
    { name: "About", href: "/about", icon: faInfoCircle },
    { name: "Tutors", href: "/tutors", icon: faUsers },
    { name: "Contact", href: "/contact", icon: faPhone },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const pathname = usePathname()

    const islamicCourses = courses.filter(c => c.category === "Islamic")
    const academicCourses = courses.filter(c => c.category === "Academic")

    // Pages with dark hero sections where header text should be white initially
    const hasDarkHero = pathname === "/about"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-black/5"
                    : "bg-transparent"
            )}
        >
            {/* Top Bar - Premium Dark Theme */}
            <div className="bg-foreground text-white/90 py-2.5 px-6 lg:px-8 hidden lg:block border-b border-white/10">
                <div className="mx-auto max-w-7xl flex items-center justify-between text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            <a href="mailto:info@oqtutor.com" className="flex items-center gap-2 hover:text-white transition-colors duration-300 group">
                                <div className="p-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3 text-primary" />
                                </div>
                                info@oqtutor.com
                            </a>
                            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors duration-300 group">
                                <div className="p-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="h-3 w-3 text-primary" />
                                </div>
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                            <div className="flex -space-x-1">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-4 w-4 rounded-full bg-white/20 border border-white/10" />
                                ))}
                            </div>
                            <span className="text-white/80">Join <span className="text-white font-bold">2,000+</span> students</span>
                        </div>
                        <div className="h-4 w-px bg-white/10" />
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
                            WhatsApp Support
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <FontAwesomeIcon icon={faBookOpen} className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xl font-bold tracking-tight leading-none transition-colors",
                                hasDarkHero && !scrolled ? "text-white" : "text-foreground"
                            )}>
                                OQTutor
                            </span>
                            <span className={cn(
                                "text-[10px] font-medium tracking-widest uppercase transition-colors",
                                hasDarkHero && !scrolled ? "text-white/80" : "text-muted-foreground"
                            )}>Online Quran</span>
                        </div>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className={cn(
                            "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors",
                            hasDarkHero && !scrolled ? "text-white" : "text-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-8 items-center">
                    <Link
                        href="/"
                        className={cn(
                            "relative group flex items-center gap-2 text-sm font-medium leading-6 transition-colors py-2",
                            hasDarkHero && !scrolled ? "text-white hover:text-white/80" : "text-foreground/80 hover:text-primary"
                        )}
                    >
                        <FontAwesomeIcon icon={faHome} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        Home
                        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className={cn(
                            "flex items-center gap-2 text-sm font-medium leading-6 transition-colors py-2 outline-none",
                            hasDarkHero && !scrolled ? "text-white hover:text-white/80" : "text-foreground/80 hover:text-primary"
                        )}>
                            <FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            Services
                            <FontAwesomeIcon icon={faChevronDown} className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full z-50 w-[600px] bg-background rounded-xl shadow-xl border border-border overflow-hidden"
                                >
                                    <div className="grid grid-cols-2 p-6 gap-6">
                                        <div>
                                            <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                                                <div className="h-1 w-4 bg-primary rounded-full"></div>
                                                Islamic Courses
                                            </h3>
                                            <div className="space-y-2">
                                                {islamicCourses.map((course) => (
                                                    <Link
                                                        key={course.slug}
                                                        href={`/courses/${course.slug}`}
                                                        className="block p-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground/80 hover:text-primary"
                                                    >
                                                        {course.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                                                <div className="h-1 w-4 bg-primary rounded-full"></div>
                                                Academic Courses
                                            </h3>
                                            <div className="space-y-2">
                                                {academicCourses.map((course) => (
                                                    <Link
                                                        key={course.slug}
                                                        href={`/courses/${course.slug}`}
                                                        className="block p-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground/80 hover:text-primary"
                                                    >
                                                        {course.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-muted/50 p-4 text-center">
                                        <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                                            View All Services &rarr;
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navigation.slice(1).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative group flex items-center gap-2 text-sm font-medium leading-6 transition-colors py-2",
                                hasDarkHero && !scrolled ? "text-white hover:text-white/80" : "text-foreground/80 hover:text-primary"
                            )}
                        >
                            <FontAwesomeIcon icon={item.icon} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            {item.name}
                            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <Button variant="ghost" className={cn(
                        "font-semibold",
                        hasDarkHero && !scrolled ? "text-white hover:text-white hover:bg-white/10" : ""
                    )} asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" asChild>
                        <Link href="/register">Get Started</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                        >
                            <div className="flex items-center justify-between">
                                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faBookOpen} className="h-8 w-8 text-primary" />
                                    <span className="text-xl font-bold tracking-tight text-foreground">
                                        OQTutor
                                    </span>
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link
                                            href="/"
                                            className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                                            Home
                                        </Link>

                                        {/* Mobile Services Accordion */}
                                        <div className="-mx-3">
                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5" />
                                                    Services
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faChevronDown}
                                                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {mobileServicesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-8 space-y-4"
                                                    >
                                                        <div className="pt-2">
                                                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Islamic Courses</h4>
                                                            {islamicCourses.map((course) => (
                                                                <Link
                                                                    key={course.slug}
                                                                    href={`/courses/${course.slug}`}
                                                                    className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {course.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        <div className="pb-2">
                                                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Academic Courses</h4>
                                                            {academicCourses.map((course) => (
                                                                <Link
                                                                    key={course.slug}
                                                                    href={`/courses/${course.slug}`}
                                                                    className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {course.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {navigation.slice(1).map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Mobile Contact Info */}
                                    <div className="py-6 border-t border-gray-500/10 space-y-4">
                                        <a href="mailto:info@oqtutor.com" className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                            <div className="p-2 rounded-full bg-primary/10">
                                                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-primary" />
                                            </div>
                                            info@oqtutor.com
                                        </a>
                                        <a href="tel:+1234567890" className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                            <div className="p-2 rounded-full bg-primary/10">
                                                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-primary" />
                                            </div>
                                            +1 (234) 567-890
                                        </a>
                                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                            <div className="p-2 rounded-full bg-primary/10">
                                                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 text-primary" />
                                            </div>
                                            WhatsApp Support
                                        </a>
                                    </div>

                                    <div className="py-6 space-y-4">
                                        <Button className="w-full rounded-full" size="lg" asChild>
                                            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                                Get Started
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="w-full rounded-full" asChild>
                                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                                Log in
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
