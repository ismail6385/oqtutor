'use server'
import { resend } from '@/lib/resend';

import { supabase } from '@/lib/supabase';
import { tutors } from '@/lib/tutors-data';

export async function submitContactForm(formData: FormData) {
    const data = {
        firstName: formData.get('first-name') as string,
        lastName: formData.get('last-name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        source: formData.get('source') as string,
        interest: formData.get('interest') as string,
        tutor: formData.get('tutor') as string,
    }

    // Lookup meeting link if tutor is selected
    let meetingLink = ''
    if (data.tutor) {
        const selectedTutor = tutors.find(t => t.name === data.tutor || t.name === decodeURIComponent(data.tutor))
        if (selectedTutor && selectedTutor.meetingLink) {
            meetingLink = selectedTutor.meetingLink
        }
    }

    try {
        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('contact_submissions')
            .insert({
                full_name: `${data.firstName} ${data.lastName}`,
                email: data.email,
                phone: data.phone,
                subject: `New Inquiry: ${data.interest || 'General'}`,
                message: `Interest: ${data.interest}\nSource: ${data.source}\nTutor: ${data.tutor}\n\n${data.message}`,
                source: 'contact_form',
                status: 'new'
            })

        if (dbError) {
            console.error('Error saving to Supabase:', dbError)
            // We continue to send email even if DB fails, or we could return error.
            // For now, logging is safer to avoid breaking the user flow.
        }

        // 2. Send Email
        await resend.emails.send({
            from: 'OqTutor Contact Form <noreply@oqtutor.com>',
            to: 'imrankhang3920@gmail.com',
            subject: `[OqTutor] New Inquiry from ${data.firstName} ${data.lastName}`,
            html: `
                <h1>New Contact Message</h1>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Interst/Course:</strong> ${data.interest || 'Not Specified'}</p>
                <p><strong>Selected Tutor:</strong> ${data.tutor || 'Not Specified'}</p>
                ${meetingLink ? `<p><strong>Tutor Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>` : ''}
                <p><strong>Source Page:</strong> ${data.source || 'General Contact'}</p>
                <p><strong>Message:</strong> ${data.message}</p>
            `
        });
        return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
        console.error('Error processing form:', error);
        return { success: false, message: 'Failed to send message.' }
    }
}

export async function registerUser(formData: FormData) {
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
        course: formData.get('course'),
    }

    // Simulate server-side processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // TODO: Integrate with Auth provider (Supabase Auth, NextAuth) or Database
    console.log('Registration Data Received:', data)

    // Return success state
    return { success: true, message: 'Account created successfully!' }
}
