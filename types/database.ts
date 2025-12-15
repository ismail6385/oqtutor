export interface Student {
    id: string
    created_at: string
    email: string
    full_name: string
    phone?: string
    country?: string
    timezone?: string
    preferred_language?: string
    student_type: 'child' | 'adult'
    age?: number
    learning_goals?: string[]
    status: 'active' | 'inactive' | 'pending'
}

export interface Tutor {
    id: string
    created_at: string
    email: string
    full_name: string
    phone?: string
    country?: string
    timezone?: string
    languages: string[]
    specializations: string[]
    experience_years: number
    education?: string
    bio?: string
    hourly_rate?: number
    availability?: any
    status: 'active' | 'inactive' | 'pending'
    rating?: number
    total_reviews?: number
}

export interface Course {
    id: string
    created_at: string
    slug: string
    title: string
    category: string
    description: string
    long_description?: string
    duration?: string
    level: 'beginner' | 'intermediate' | 'advanced'
    price?: number
    status: 'active' | 'inactive' | 'draft'
}

export interface Enrollment {
    id: string
    created_at: string
    student_id: string
    course_id: string
    tutor_id?: string
    status: 'pending' | 'active' | 'completed' | 'cancelled'
    start_date?: string
    end_date?: string
    payment_status: 'pending' | 'paid' | 'failed'
    notes?: string
}

export interface Lesson {
    id: string
    created_at: string
    enrollment_id: string
    tutor_id: string
    student_id: string
    scheduled_at: string
    duration_minutes: number
    status: 'scheduled' | 'completed' | 'cancelled' | 'no_show'
    meeting_link?: string
    notes?: string
    rating?: number
    feedback?: string
}

export interface ContactSubmission {
    id: string
    created_at: string
    full_name: string
    email: string
    phone?: string
    subject?: string
    message: string
    status: 'new' | 'in_progress' | 'resolved'
    source: 'contact_form' | 'registration' | 'other'
}
