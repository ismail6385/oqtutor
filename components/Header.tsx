"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { courses } from "@/lib/courses-data";

const navigation = [
    { name: "Home", href: "/", icon: faHome },
    { name: "About", href: "/about", icon: faInfoCircle },
    { name: "Tutors", href: "/tutors", icon: faUsers },
    { name: "Contact", href: "/contact", icon: faPhone },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    const islamicCourses = courses.filter((c) => c.category === "Islamic");
    const academicCourses = courses.filter((c) => c.category === "Academic");

    // Pages with dark hero sections where header text should start white
    const hasDarkHero = pathname === "/about" || pathname?.startsWith("/courses/");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine base classes for header background and text
    const bgClass = scrolled
        ? "bg-primary text-white"
        : cn(
            "py-4",
            hasDarkHero ? "bg-gradient-to-b from-black/50 to-transparent text-white" : "bg-transparent text-primary"
        );

    return (
        <header className={cn("fixed inset-x-0 top-0 z-[100] transition-all duration-300", bgClass)}>
            {/* Top Bar */}
            <div className="bg-primary text-primary-foreground/90 py-2.5 px-6 lg:px-8 hidden lg:flex border-b border-white/10">
                <div className="mx-auto max-w-7xl flex items-center justify-between text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            <a href="mailto:info@oqtutor.com" className="flex items-center gap-2 hover:text-white transition-colors duration-300 group">
                                <div className="p-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3 text-primary" />
                                </div>
                                info@oqtutor.com
                            </a>
                            <a href="tel:+923478704442" className="flex items-center gap-2 hover:text-white transition-colors duration-300 group">
                                <div className="p-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="h-3 w-3 text-primary" />
                                </div>
                                +92 347 8704442
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20 animate-pulse shadow-sm">
                            <span className="text-amber-300 font-bold">🎉 Special Offer:</span>
                            <span className="text-white">
                                Get <span className="font-bold text-white underline decoration-amber-300 decoration-2 underline-offset-2">3 Days Free Trial</span>
                            </span>
                        </div>
                        <a
                            href="https://wa.me/923478704442"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors font-semibold"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
                            WhatsApp Support
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <FontAwesomeIcon icon={faBookOpen} className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn("text-xl font-bold tracking-tight leading-none", "text-white")}>OQTutor</span>
                            <span className={cn("text-[10px] font-medium tracking-widest uppercase", "text-white/80")}>Online Quran</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-4 lg:hidden">
                    <Button
                        size="sm"
                        className="rounded-full shadow-lg shadow-amber-500/20 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0"
                        asChild
                    >
                        <Link href="/register">Book Free Trial</Link>
                    </Button>
                    <button
                        type="button"
                        className={cn(
                            "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors",
                            scrolled ? "text-white" : "text-gray-900"
                        )}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop navigation links */}
                <div className="hidden lg:flex lg:gap-x-8 items-center">
                    <Link href="/" className={cn("relative group flex items-center gap-2 text-sm font-medium py-2", "text-white hover:text-white/80")}>
                        <FontAwesomeIcon icon={faHome} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        Home
                        <span className={cn("absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left", "bg-white")} />
                    </Link>
                    {/* Services dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className={cn("flex items-center gap-2 text-sm font-medium py-2 outline-none", "text-white hover:text-white/80")}>
                            <FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            Services
                            <FontAwesomeIcon icon={faChevronDown} className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
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
                                                <div className="h-1 w-4 bg-primary rounded-full" />Islamic Courses
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
                                                <div className="h-1 w-4 bg-primary rounded-full" />Academic Courses
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
                    {/* Remaining navigation items */}
                    {navigation.slice(1).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative group flex items-center gap-2 text-sm font-medium py-2",
                                hasDarkHero && !scrolled ? "text-white hover:text-white/80" : "text-gray-700 hover:text-primary"
                            )}
                        >
                            <FontAwesomeIcon icon={item.icon} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            {item.name}
                            <span
                                className={cn(
                                    "absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
                                    hasDarkHero && !scrolled ? "bg-white" : "bg-primary"
                                )}
                            />
                        </Link>
                    ))}
                </div>

                {/* Right side actions */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <Button variant="ghost" className={cn("font-semibold", "text-white hover:text-white hover:bg-white/10")} asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button
                        className="rounded-full px-6 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 hover:scale-105"
                        asChild
                    >
                        <Link href="/register">Book Free Trial</Link>
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
                            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background px-6 py-6 sm:ring-1 sm:ring-gray-900/10"
                        >
                            <div className="flex items-center justify-between">
                                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faBookOpen} className="h-8 w-8 text-primary" />
                                    <span className="text-xl font-bold tracking-tight text-foreground">OQTutor</span>
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link href="/" className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/5 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                                            <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                                            Home
                                        </Link>
                                        {/* Mobile Services Accordion */}
                                        <div className="-mx-3">
                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/5 hover:text-primary"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5" />
                                                    Services
                                                </div>
                                                <FontAwesomeIcon icon={faChevronDown} className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
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
                                        {/* Remaining links */}
                                        {navigation.slice(1).map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/5 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6 space-y-4">
                                        <Button className="w-full rounded-full" size="lg" asChild>
                                            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                                Book Free Trial
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
    );
}
