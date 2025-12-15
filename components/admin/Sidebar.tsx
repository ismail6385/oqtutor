"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Calendar,
    Settings,
    LogOut,
    BookOpen
} from "lucide-react"

const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Students", href: "/admin/students", icon: Users },
    { name: "Tutors", href: "/admin/tutors", icon: GraduationCap },
    { name: "Bookings", href: "/admin/bookings", icon: Calendar },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-full w-64 flex-col bg-card border-r border-border">
            <div className="flex h-16 items-center px-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <span>OQTutor</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Admin</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-3">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-primary text-foreground"
                                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                                    }`}
                            >
                                <item.icon
                                    className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-primary"
                                        }`}
                                    aria-hidden="true"
                                />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="border-t border-border p-4">
                <button className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </div>
    )
}
