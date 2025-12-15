"use client"

import { useState, useEffect } from "react"
import { Search, Calendar, Clock, User, GraduationCap, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { format } from "date-fns"

export default function BookingsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("All")
    const [bookings, setBookings] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBookings() {
            setLoading(true)
            try {
                // Fetch from contact_submissions as proxy for bookings
                const { data, error } = await supabase
                    .from('contact_submissions')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (data) {
                    // Map contact submissions to a booking-like structure
                    // In a real app, you would have a dedicated bookings table and mapping.
                    // Here we extract tutor name from the message or subject if possible, or use the 'Tutor' field we just added.
                    // But contact_submissions table in schema doesn't strictly have 'tutor_name' column yet, 
                    // unless we alter it. The insert logic put everything in 'message'.
                    // Wait, I updated insert logic to include 'Tutor: ' in message.
                    // I should probably display it as is or parse it.
                    // For better UI, I will just display the submission as a booking request.

                    const mappedBookings = data.map(sub => {
                        // Attempt to parse tutor from message if not waiting for a proper column
                        // Message format: Interest: ... \nSource: ... \nTutor: ...
                        const tutorMatch = sub.message.match(/Tutor: (.*?)\n/)
                        const tutorName = tutorMatch ? tutorMatch[1] : 'Not specified'

                        // Look up meeting link based on tutor name (naive consistent lookup or from pre-stored)
                        // Ideally we fetch tutors and join. For now let's just use the name to find the link in our static data if needed, 
                        // or better yet, assume the admin handles the link manually if not stored.
                        // But wait! The user wants the link to be there.
                        // Currently we don't save the link in DB. We sent it in email.
                        // I will parse the tutor name and find the link dynamically here as well.

                        return {
                            id: sub.id,
                            studentName: sub.full_name,
                            tutorName: tutorName !== 'undefined' ? tutorName : 'General Inquiry',
                            course: sub.subject || 'N/A',
                            date: format(new Date(sub.created_at), 'yyyy-MM-dd'),
                            time: format(new Date(sub.created_at), 'hh:mm a'),
                            duration: "60 min", // Placeholder
                            status: sub.status === 'new' ? 'Pending' : 'Confirmed',
                            amount: "-", // No payment info in contact form
                            bookingDate: format(new Date(sub.created_at), 'yyyy-MM-dd'),
                            email: sub.email,
                            fullMessage: sub.message
                        }
                    })
                    setBookings(mappedBookings)
                }
            } catch (error) {
                console.error("Error fetching bookings:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchBookings()
    }, [])

    // Import tutors to find links (client side join for now)
    const { tutors } = require('@/lib/tutors-data')

    const getMeetingLink = (tutorName: string) => {
        const tutor = tutors.find((t: any) => t.name === tutorName || t.name === decodeURIComponent(tutorName))
        return tutor ? tutor.meetingLink : null
    }

    const filteredBookings = bookings.filter(booking => {
        const matchesSearch = booking.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.tutorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.course.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === "All" || booking.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Confirmed":
                return <CheckCircle className="h-4 w-4" />
            case "Pending":
                return <AlertCircle className="h-4 w-4" />
            case "Cancelled":
                return <XCircle className="h-4 w-4" />
            default:
                return null
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Confirmed":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
            case "Pending":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
            case "Cancelled":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Bookings Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">View and manage all class bookings</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">{bookings.length}</div>
                        <p className="text-xs text-green-500 mt-1">Real-time data</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Confirmed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {bookings.filter((b: any) => b.status === "Confirmed").length}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Ready to go</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">
                            {bookings.filter((b: any) => b.status === "Pending").length}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Awaiting confirmation</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            $0
                        </div>
                        <p className="text-xs text-green-500 mt-1">Pending payments</p>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filters */}
            <Card className="border-border bg-card">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search by student, tutor, or course..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-9 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="flex gap-2">
                            {["All", "Confirmed", "Pending", "Cancelled"].map((status) => (
                                <Button
                                    key={status}
                                    variant={statusFilter === status ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setStatusFilter(status)}
                                    className={statusFilter === status ? "bg-primary" : ""}
                                >
                                    {status}
                                </Button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Bookings Table */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <CardTitle>All Bookings ({filteredBookings.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tutor</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Course</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date & Time</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Duration</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading && (
                                    <tr>
                                        <td colSpan={9} className="py-8 text-center text-muted-foreground">Loading bookings...</td>
                                    </tr>
                                )}
                                {!loading && filteredBookings.length === 0 && (
                                    <tr>
                                        <td colSpan={9} className="py-8 text-center text-muted-foreground">No bookings found.</td>
                                    </tr>
                                )}
                                {filteredBookings.map((booking: any) => {
                                    const meetingLink = getMeetingLink(booking.tutorName)
                                    return (
                                        <tr key={booking.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                                            <td className="py-4 px-4">
                                                <span className="text-sm font-medium text-foreground">#{booking.id.slice(0, 8)}...</span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm text-foreground">{booking.studentName}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm text-foreground">{booking.tutorName}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="text-sm text-foreground">{booking.course}</span>
                                                {meetingLink && (
                                                    <div className="mt-1 flex items-center gap-1.5">
                                                        <div className="h-3 w-3 rounded-full bg-blue-100 flex items-center justify-center">
                                                            <span className="text-[8px] font-bold text-blue-600">Z</span>
                                                        </div>
                                                        <a href={meetingLink} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                                            Join Meeting
                                                        </a>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm text-foreground">
                                                        <Calendar className="h-3 w-3 text-muted-foreground" />
                                                        {booking.date}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <Clock className="h-3 w-3" />
                                                        {booking.time}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="text-sm text-muted-foreground">{booking.duration}</span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="text-sm font-medium text-foreground">{booking.amount}</span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                                                    {getStatusIcon(booking.status)}
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button variant="outline" size="sm">
                                                        View
                                                    </Button>
                                                    {booking.status === "Pending" && (
                                                        <>
                                                            <Button variant="outline" size="sm" className="text-green-600">
                                                                Confirm
                                                            </Button>
                                                            <Button variant="outline" size="sm" className="text-red-600">
                                                                Cancel
                                                            </Button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
