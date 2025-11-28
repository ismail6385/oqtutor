"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBookOpen,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons"
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
    courses: [
        { name: "Quran Reading", href: "/services" },
        { name: "Tajweed Rules", href: "/services" },
        { name: "Hifz Memorization", href: "/services" },
        { name: "Arabic Language", href: "/services" },
        { name: "Islamic Studies", href: "/services" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Tutors", href: "/tutors" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: faFacebook,
        },
        {
            name: "Twitter",
            href: "#",
            icon: faTwitter,
        },
        {
            name: "Instagram",
            href: "#",
            icon: faInstagram,
        },
        {
            name: "YouTube",
            href: "#",
            icon: faYoutube,
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-300" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 text-white">
                            <FontAwesomeIcon icon={faBookOpen} className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-bold tracking-tight">
                                OQTutor
                            </span>
                        </Link>
                        <p className="text-sm leading-6 text-zinc-400 max-w-sm">
                            Empowering students worldwide to learn the Quran with proper Tajweed and understanding. Join our community of learners today.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-zinc-400 hover:text-primary transition-colors"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <FontAwesomeIcon icon={item.icon} className="h-6 w-6" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Courses</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.courses.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter & Contact */}
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    The latest news, articles, and resources, sent to your inbox weekly.
                                </p>
                                <form className="mt-6 sm:flex sm:max-w-md">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <Input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        required
                                        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                        <Button type="submit" className="flex w-full items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white">
                                            Subscribe <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-10 border-t border-white/10 pt-8">
                                <h3 className="text-sm font-semibold leading-6 text-white mb-4">Contact Us</h3>
                                <ul className="space-y-3 text-sm text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-primary" />
                                        support@oqtutor.com
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-primary" />
                                        +1 (234) 567-890
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 text-primary" />
                                        123 Islamic Center Dr, City, State
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-zinc-500">
                        &copy; {new Date().getFullYear()} OQTutor. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
