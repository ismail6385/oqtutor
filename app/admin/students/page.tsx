"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2, Eye, Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data - Replace with actual API calls
const mockStudents = [
    {
        id: 1,
        name: "Ahmed Khan",
        email: "ahmed@example.com",
        phone: "+971 50 123 4567",
        location: "Dubai, UAE",
        enrolledCourses: 3,
        status: "Active",
        joinedDate: "2024-01-15",
        avatar: "AK"
    },
    {
        id: 2,
        name: "Fatima Ali",
        email: "fatima@example.com",
        phone: "+971 55 234 5678",
        location: "Abu Dhabi, UAE",
        enrolledCourses: 2,
        status: "Active",
        joinedDate: "2024-02-20",
        avatar: "FA"
    },
    {
        id: 3,
        name: "Omar Hassan",
        email: "omar@example.com",
        phone: "+971 52 345 6789",
        location: "Sharjah, UAE",
        enrolledCourses: 1,
        status: "Inactive",
        joinedDate: "2024-03-10",
        avatar: "OH"
    },
    {
        id: 4,
        name: "Aisha Mohammed",
        email: "aisha@example.com",
        phone: "+971 56 456 7890",
        location: "Dubai, UAE",
        enrolledCourses: 4,
        status: "Active",
        joinedDate: "2024-01-05",
        avatar: "AM"
    },
    {
        id: 5,
        name: "Yusuf Ibrahim",
        email: "yusuf@example.com",
        phone: "+971 50 567 8901",
        location: "Ajman, UAE",
        enrolledCourses: 2,
        status: "Active",
        joinedDate: "2024-02-28",
        avatar: "YI"
    }
]

export default function StudentsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [students] = useState(mockStudents)

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Students Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage all registered students</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">{students.length}</div>
                        <p className="text-xs text-green-500 mt-1">+12% from last month</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {students.filter(s => s.status === "Active").length}
                        </div>
                        <p className="text-xs text-green-500 mt-1">+8% from last month</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">New This Month</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">24</div>
                        <p className="text-xs text-green-500 mt-1">+15% from last month</p>
                    </CardContent>
                </Card>
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Enrollments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {students.reduce((acc, s) => acc + s.enrolledCourses, 0)}
                        </div>
                        <p className="text-xs text-green-500 mt-1">+20% from last month</p>
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
                                placeholder="Search students by name or email..."
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

            {/* Students Table */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <CardTitle>All Students ({filteredStudents.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Contact</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Location</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Courses</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Joined</th>
                                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student) => (
                                    <tr key={student.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                                    <span className="text-sm font-medium text-primary">{student.avatar}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-foreground">{student.name}</p>
                                                    <p className="text-xs text-muted-foreground">{student.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Phone className="h-3 w-3" />
                                                {student.phone}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <MapPin className="h-3 w-3" />
                                                {student.location}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm font-medium text-foreground">{student.enrolledCourses}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${student.status === "Active"
                                                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                                    : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                                                }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-muted-foreground">{student.joinedDate}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
