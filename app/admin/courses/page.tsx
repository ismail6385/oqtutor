"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2, Eye, BookOpen, Users, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data
const mockCourses = [
    {
        id: 1,
        title: "Quran Recitation Basics",
        category: "Quran Recitation",
        level: "Beginner",
        duration: "8 weeks",
        price: "$120",
        enrolledStudents: 45,
        tutor: "Sheikh Abdullah Rahman",
        status: "Active",
        thumbnail: "QR",
        description: "Learn the fundamentals of Quran recitation with proper pronunciation"
    },
    {
        id: 2,
        title: "Advanced Tajweed",
        category: "Tajweed",
        level: "Advanced",
        duration: "12 weeks",
        price: "$180",
        enrolledStudents: 28,
        tutor: "Sheikh Abdullah Rahman",
        status: "Active",
        thumbnail: "AT",
        description: "Master the advanced rules of Tajweed for perfect recitation"
    },
    {
        id: 3,
        title: "Quran Memorization Program",
        category: "Memorization",
        level: "Intermediate",
        duration: "24 weeks",
        price: "$300",
        enrolledStudents: 38,
        tutor: "Ustadha Maryam Hassan",
        status: "Active",
        thumbnail: "QM",
        description: "Structured program for memorizing the Holy Quran"
    },
    {
        id: 4,
        title: "Islamic Studies Foundation",
        category: "Islamic Studies",
        level: "Beginner",
        duration: "10 weeks",
        price: "$150",
        enrolledStudents: 32,
        tutor: "Sheikh Ibrahim Khalil",
        status: "Active",
        thumbnail: "IS",
        description: "Comprehensive introduction to Islamic teachings and principles"
    },
    {
        id: 5,
        title: "Arabic Language Basics",
        category: "Arabic Language",
        level: "Beginner",
        duration: "12 weeks",
        price: "$160",
        enrolledStudents: 28,
        tutor: "Ustadha Khadija Ali",
        status: "Active",
        thumbnail: "AL",
        description: "Learn to read, write, and speak Arabic from scratch"
    },
    {
        id: 6,
        title: "Quran Translation & Tafseer",
        category: "Tafseer",
        level: "Intermediate",
        duration: "16 weeks",
        price: "$200",
        enrolledStudents: 22,
        tutor: "Sheikh Ibrahim Khalil",
        status: "Draft",
        thumbnail: "QT",
        description: "Understand the meanings and interpretations of the Quran"
    }
]

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [courses] = useState(mockCourses)

    const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))]

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.category.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = categoryFilter === "All" || course.category === categoryFilter
        return matchesSearch && matchesCategory
    })

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Courses Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage all courses and learning programs</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">{courses.length}</div>
                        <p className="text-xs text-green-500 mt-1">+2 new this month</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {courses.filter(c => c.status === "Active").length}
                        </div>
                        <p className="text-xs text-green-500 mt-1">83% active rate</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {courses.reduce((acc, c) => acc + c.enrolledStudents, 0)}
                        </div>
                        <p className="text-xs text-green-500 mt-1">Across all courses</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">$12,450</div>
                        <p className="text-xs text-green-500 mt-1">+25% from last month</p>
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
                                placeholder="Search courses by title or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-9 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={categoryFilter === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setCategoryFilter(category)}
                                    className={categoryFilter === category ? "bg-primary" : ""}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                    <Card key={course.id} className="border-border bg-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between mb-3">
                                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                                    <span className="text-xl font-bold text-primary">{course.thumbnail}</span>
                                </div>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${course.status === "Active"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                                    }`}>
                                    {course.status}
                                </span>
                            </div>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                                    {course.category}
                                </span>
                                <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                                    {course.level}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{course.enrolledStudents} students</span>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-border">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="h-4 w-4 text-primary" />
                                        <span className="text-lg font-bold text-foreground">{course.price}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">by {course.tutor}</span>
                                </div>

                                <div className="flex items-center gap-2">
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
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
