import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const {
            full_name,
            email,
            phone,
            country,
            timezone,
            student_type,
            age,
            learning_goals,
            preferred_language,
            course_slug
        } = body

        // Validation
        if (!full_name || !email || !student_type) {
            return NextResponse.json(
                { error: 'Missing required fields: full_name, email, student_type' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Check if student already exists
        const { data: existingStudent } = await supabaseAdmin
            .from('students')
            .select('id, email')
            .eq('email', email)
            .single()

        if (existingStudent) {
            return NextResponse.json(
                { error: 'A student with this email already exists' },
                { status: 409 }
            )
        }

        // Insert student
        const { data: student, error: studentError } = await supabaseAdmin
            .from('students')
            .insert([
                {
                    full_name,
                    email,
                    phone: phone || null,
                    country: country || null,
                    timezone: timezone || null,
                    preferred_language: preferred_language || 'English',
                    student_type,
                    age: age || null,
                    learning_goals: learning_goals || [],
                    status: 'pending'
                }
            ])
            .select()
            .single()

        if (studentError) {
            console.error('Student creation error:', studentError)
            return NextResponse.json(
                { error: 'Failed to create student record' },
                { status: 500 }
            )
        }

        // If course_slug is provided, create enrollment
        if (course_slug && student) {
            // Get course by slug
            const { data: course } = await supabaseAdmin
                .from('courses')
                .select('id')
                .eq('slug', course_slug)
                .single()

            if (course) {
                await supabaseAdmin
                    .from('enrollments')
                    .insert([
                        {
                            student_id: student.id,
                            course_id: course.id,
                            status: 'pending',
                            payment_status: 'pending'
                        }
                    ])
            }
        }

        // Also create a contact submission for follow-up
        await supabaseAdmin
            .from('contact_submissions')
            .insert([
                {
                    full_name,
                    email,
                    phone: phone || null,
                    subject: 'New Student Registration',
                    message: `Student Type: ${student_type}\nCourse: ${course_slug || 'Not specified'}\nLearning Goals: ${learning_goals?.join(', ') || 'Not specified'}`,
                    status: 'new',
                    source: 'registration'
                }
            ])

        return NextResponse.json(
            {
                success: true,
                message: 'Registration successful! We will contact you soon to schedule your free trial.',
                student
            },
            { status: 201 }
        )

    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
