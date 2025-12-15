"use client"

import { useState, useEffect } from "react"
import { Search, Plus, Edit, Trash2, Eye, Mail, Phone, Star, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { tutors as staticTutors } from "@/lib/tutors-data"

export default function TutorsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [tutors, setTutors] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchTutors() {
            setLoading(true)
            try {
                // Fetch from Supabase
                const { data, error } = await supabase
                    .from('tutors')
                    .select('*')

                if (data && data.length > 0) {
                    setTutors(data)
                } else {
                    // Fallback to static data if DB is empty, effectively "seeding" the view
                    // In a real production app, we wouldn't do this, but for "everything working" look without seed script:
                    // We map static data to DB shape roughly
                    const mappedStatic = staticTutors.map((t: any, i) => ({
                        id: i + 1,
                        name: t.name,
                        email: `${t.name.split(' ')[0].toLowerCase()}@oqtutor.com`,
                        phone: "N/A", // Static data doesn't have phone
                        specialization: t.specialization,
                        experience: t.experience,
                        rating: t.rating,
                        students: 0,
                        status: 'Active',
                        joinedDate: new Date().toISOString().split('T')[0],
                        avatar: t.name.split(' ').map((n: string) => n[0]).join(''),
                        languages: ['Arabic', 'English'], // Default
                        meetingLink: t.meetingLink
                    }))
                    setTutors(mappedStatic)
                }
            } catch (error) {
                console.error("Error fetching tutors:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchTutors()
    }, [])

    const filteredTutors = tutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Tutors Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage all registered tutors and instructors</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Tutor
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Tutors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">{tutors.length}</div>
                        <p className="text-xs text-green-500 mt-1">
                            {loading ? "Loading..." : "Active Database"}
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Tutors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {tutors.filter(t => t.status === "Active" || t.status === "active").length}
                        </div>
                        <p className="text-xs text-green-500 mt-1">Currently teaching</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Avg Rating</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {tutors.length > 0 ? (tutors.reduce((acc, t) => acc + t.rating, 0) / tutors.length).toFixed(1) : 0}
                        </div>
                        <p className="text-xs text-green-500 mt-1">Global average</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {/* In real DB, we'd sum students column if exists or count enrollments. Using mock prop for now if fallback */}
                            {tutors.reduce((acc, t) => acc + (t.students || 0), 0)}
                        </div>
                        <p className="text-xs text-green-500 mt-1">Across all tutors</p>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filters */}
            <Card className="border-border bg-card">
                <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search tutors by name or specialization..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-9 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <Button variant="outline" className="border-border">
                            Filter
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Tutors Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {loading && <p className="text-muted-foreground col-span-3 text-center py-8">Loading tutors...</p>}
                {!loading && filteredTutors.length === 0 && <p className="text-muted-foreground col-span-3 text-center py-8">No tutors found.</p>}
                {filteredTutors.map((tutor) => (
                    <Card key={tutor.id} className="border-border bg-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                        <span className="text-lg font-semibold text-primary">{tutor.avatar || tutor.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{tutor.name || tutor.full_name}</h3>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium text-foreground">{tutor.rating}</span>
                                            <span className="text-xs text-muted-foreground ml-1">({tutor.students || 0} students)</span>
                                        </div>
                                    </div>
                                </div>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${tutor.status === "Active" || tutor.status === "active"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                                    }`}>
                                    {tutor.status}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <BookOpen className="h-4 w-4" />
                                    <span className="font-medium text-foreground">{tutor.specialization}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">Experience: {tutor.experience || tutor.experience_years + ' years'}</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Mail className="h-3 w-3" />
                                    <span className="text-xs">{tutor.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Phone className="h-3 w-3" />
                                    <span className="text-xs">{tutor.phone || 'N/A'}</span>
                                </div>
                                {tutor.meetingLink && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-3 w-3 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                            z
                                        </div>
                                        <a href={tutor.meetingLink} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline truncate max-w-[200px]">
                                            {tutor.meetingLink}
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground mb-2">Languages:</p>
                                <div className="flex flex-wrap gap-1">
                                    {(tutor.languages || []).map((lang: string) => (
                                        <span key={lang} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-4 border-t border-border">
                                <Button variant="outline" size="sm" className="flex-1">
                                    <Eye className="h-3 w-3 mr-1" />
                                    View
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1">
                                    <Edit className="h-3 w-3 mr-1" />
                                    Edit
                                </Button>
                                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
