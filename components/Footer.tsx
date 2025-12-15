'use client'

import Link from 'next/link'
import { BookOpen, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Courses', href: '/courses' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ]

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'YouTube', icon: Youtube, href: '#' },
    ]

    return (
        <footer className="bg-foreground text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <BookOpen className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                OQTutor
                            </span>
                        </Link>

                        <p className="text-white/80 leading-relaxed mb-6">
                            Your trusted partner in Quran and Islamic education. Connect with certified tutors
                            for personalized online learning from anywhere in the world.
                        </p>

                        {/* Contact Email */}
                        <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@oqtutor.com'}`}
                            className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@oqtutor.com'}</span>
                        </a>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links Column */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm text-center">
                        © {new Date().getFullYear()} OQTutor. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
