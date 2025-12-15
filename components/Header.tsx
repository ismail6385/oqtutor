'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, BookOpen, Users, GraduationCap, Phone } from 'lucide-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'Home', href: '/' },
        {
            name: 'Courses',
            href: '/courses',
            dropdown: [
                { name: 'Quran Reading', href: '/courses/nazara-quran' },
                { name: 'Tajweed', href: '/courses/recitation' },
                { name: 'Hifz', href: '/courses/hifz' },
                { name: 'Arabic Language', href: '/courses/arabic' },
                { name: 'Islamic Studies', href: '/courses/islamic-studies' },
                { name: 'Tafseer', href: '/courses/tafseer' },
            ],
        },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#ff7aac]/95 backdrop-blur-md shadow-md'
                : 'bg-[#ff7aac]'
                }`}
        >

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold group-hover:opacity-90 transition-colors" style={{ color: '#121117' }}>
                            OQTutor
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {item.dropdown ? (
                                    <>
                                        <button
                                            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${pathname.startsWith(item.href)
                                                ? 'bg-white/20'
                                                : 'hover:bg-white/10'
                                                }`}
                                            style={{ color: '#121117' }}
                                        >
                                            {item.name}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {openDropdown === item.name && (
                                            <div className="absolute top-full left-0 pt-2 w-56">
                                                <div className="bg-white rounded-xl shadow-xl border border-border py-2 animate-fade-in">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${pathname === item.href
                                            ? 'bg-white/20'
                                            : 'hover:bg-white/10'
                                            }`}
                                        style={{ color: '#121117' }}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/pricing"
                            className="px-6 py-2.5 font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                            style={{ color: '#121117' }}
                        >
                            View Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
                            style={{ backgroundColor: '#121117', color: '#ffffff' }}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" style={{ color: '#121117' }} />
                        ) : (
                            <Menu className="w-6 h-6" style={{ color: '#121117' }} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-white/20 animate-fade-in">
                        <nav className="space-y-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                                                }
                                                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                                                style={{ color: '#121117' }}
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {openDropdown === item.name && (
                                                <div className="ml-4 mt-2 space-y-1">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block px-4 py-2 text-sm hover:bg-white/10 rounded-lg transition-colors"
                                                            style={{ color: '#121117', opacity: 0.8 }}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${pathname === item.href
                                                ? 'bg-white/20'
                                                : 'hover:bg-white/10'
                                                }`}
                                            style={{ color: '#121117' }}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile CTA Buttons */}
                        <div className="mt-6 space-y-3">
                            <Link
                                href="/pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full px-6 py-3 text-center font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all"
                                style={{ color: '#121117' }}
                            >
                                View Pricing
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full px-6 py-3 text-center font-semibold rounded-lg hover:opacity-90 transition-all"
                                style={{ backgroundColor: '#121117', color: '#ffffff' }}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
