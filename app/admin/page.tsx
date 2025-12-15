"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Users, GraduationCap, Calendar, DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { formatDistanceToNow } from "date-fns"

const quickActions = [
    { title: "Add Student", icon: Users, href: "/admin/students", color: "text-blue-500" },
    { title: "Add Tutor", icon: GraduationCap, href: "/admin/tutors", color: "text-green-500" },
    { title: "New Booking", icon: Calendar, href: "/admin/bookings", color: "text-purple-500" },
    { title: "Add Course", icon: BookOpen, href: "/admin/courses", color: "text-amber-500" },
]

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        students: 0,
        tutors: 0,
        bookings: 0,
        contactSubmissions: 0
    })
    const [recentActivity, setRecentActivity] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchDashboardData() {
            setLoading(true)
            try {
                // Fetch counts
                const { count: studentCount } = await supabase.from('students').select('*', { count: 'exact', head: true })
                const { count: tutorCount } = await supabase.from('tutors').select('*', { count: 'exact', head: true })
                // Using contact_submissions as proxy for bookings for now since flow is inquiry-based
                const { count: submissionCount } = await supabase.from('contact_submissions').select('*', { count: 'exact', head: true })

                setStats({
                    students: studentCount || 0,
                    tutors: tutorCount || 0,
                    bookings: submissionCount || 0,
                    contactSubmissions: submissionCount || 0
                })

                // Fetch recent 'bookings' (contact form submissions for now)
                const { data: recentSubmissions, error } = await supabase
                    .from('contact_submissions')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(5)

                if (recentSubmissions) {
                    setRecentActivity(recentSubmissions)
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchDashboardData()
    }, [])

    const statCards = [
        {
            title: "Total Students",
            value: stats.students.toString(),
            change: "+0%", // Needs historical data for real change
            icon: Users,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Active Tutors",
            value: stats.tutors.toString(),
            change: "+0%",
            icon: GraduationCap,
            color: "text-green-500",
            bgColor: "bg-green-500/10"
        },
        {
            title: "Inquiries / Bookings",
            value: stats.bookings.toString(),
            change: "New",
            icon: Calendar,
            color: "text-purple-500",
            bgColor: "bg-purple-500/10"
        },
        {
            title: "Total Revenue",
            value: "$0", // Calculated real revenue would require payment integration
            change: "+0%",
            icon: DollarSign,
            color: "text-amber-500",
            bgColor: "bg-amber-500/10"
        },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
                    <p className="text-sm text-muted-foreground mt-1">Welcome back! Real-time data from your platform.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((stat) => (
                    <Card key={stat.title} className="border-border bg-card hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <div className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-foreground">{loading ? "..." : stat.value}</div>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                <span className="text-green-500 flex items-center font-medium">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    {stat.change}
                                </span>
                                since last visit
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                        {quickActions.map((action) => (
                            <Link key={action.title} href={action.href}>
                                <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 hover:bg-primary/5 hover:border-primary transition-all">
                                    <action.icon className={`h-6 w-6 ${action.color}`} />
                                    <span className="text-sm font-medium">{action.title}</span>
                                </Button>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Recent Activity Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-7 border-border bg-card">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Inquiries & Bookings</CardTitle>
                        <Link href="/admin/bookings">
                            <Button variant="ghost" size="sm">View All</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {loading && <p className="text-sm text-muted-foreground text-center py-4">Loading real data...</p>}
                            {!loading && recentActivity.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No recent activity found.</p>}
                            {recentActivity.map((booking: any) => (
                                <div key={booking.id} className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <p className="text-sm font-medium text-foreground">{booking.full_name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {booking.subject || 'Inquiry'}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 mt-1 justify-end">
                                            {booking.status === "new" ? (
                                                <AlertCircle className="h-3 w-3 text-blue-500" />
                                            ) : (
                                                <CheckCircle className="h-3 w-3 text-green-500" />
                                            )}
                                            <span className="text-xs text-muted-foreground">
                                                {formatDistanceToNow(new Date(booking.created_at), { addSuffix: true })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

