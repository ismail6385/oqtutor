import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { full_name, email, phone, subject, message } = body

        // Validation
        if (!full_name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: full_name, email, message' },
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

        // Insert into Supabase
        const { data, error } = await supabaseAdmin
            .from('contact_submissions')
            .insert([
                {
                    full_name,
                    email,
                    phone: phone || null,
                    subject: subject || 'General Inquiry',
                    message,
                    status: 'new',
                    source: 'contact_form'
                }
            ])
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to submit contact form' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.',
                data
            },
            { status: 201 }
        )

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
