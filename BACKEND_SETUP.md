# OQTutor Backend Setup Guide

## 🔧 Supabase Configuration

### Step 1: Create .env.local File

Create a `.env.local` file in the project root with the following content:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=sb_secret_M4qw6HVXPPb4sP-_oii9xQ_43aINAax

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@oqtutor.com
NEXT_PUBLIC_CONTACT_PHONE=
NEXT_PUBLIC_CONTACT_LOCATION=
```

### Step 2: Get Supabase Credentials

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **Settings** → **API**
3. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** (already provided) → `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Run Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the entire content from `supabase/schema.sql`
5. Paste and click **Run**

This will create:
- ✅ All database tables (students, tutors, courses, enrollments, lessons, contact_submissions)
- ✅ Indexes for performance
- ✅ Triggers for auto-updating timestamps
- ✅ Row Level Security (RLS) policies
- ✅ Sample course data

### Step 4: Verify Setup

After running the schema, verify in Supabase:
1. Go to **Table Editor**
2. You should see all tables created
3. Check the `courses` table - it should have 8 sample courses

## 📁 Project Structure

```
oqtutor-nextjs/
├── app/
│   └── api/
│       ├── contact/
│       │   └── route.ts          # Contact form API
│       └── register/
│           └── route.ts          # Student registration API
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── types/
│   └── database.ts              # TypeScript types for database
├── supabase/
│   └── schema.sql               # Database schema
└── .env.local                   # Environment variables (create this)
```

## 🚀 API Endpoints

### 1. Contact Form Submission
**POST** `/api/contact`

```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "General Inquiry",
  "message": "I want to learn Quran"
}
```

### 2. Student Registration
**POST** `/api/register`

```json
{
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "country": "USA",
  "timezone": "America/New_York",
  "student_type": "adult",
  "age": 25,
  "learning_goals": ["Quran Reading", "Tajweed"],
  "preferred_language": "English",
  "course_slug": "nazara-quran"
}
```

## 📊 Database Tables

### Students
- Stores student information
- Fields: email, full_name, phone, country, timezone, student_type, age, learning_goals, status

### Tutors
- Stores tutor profiles
- Fields: email, full_name, languages, specializations, experience_years, hourly_rate, rating

### Courses
- Pre-populated with 8 Islamic courses
- Fields: slug, title, category, description, duration, level, status

### Enrollments
- Links students to courses
- Fields: student_id, course_id, tutor_id, status, payment_status

### Lessons
- Individual lesson sessions
- Fields: enrollment_id, tutor_id, student_id, scheduled_at, duration_minutes, status

### Contact Submissions
- All contact form and registration inquiries
- Fields: full_name, email, phone, subject, message, status, source

## 🔒 Security

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Email validation in API routes
- ✅ Service role key for admin operations
- ✅ Anon key for client-side operations
- ✅ Input validation and sanitization

## 🧪 Testing

### Test Contact Form:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### Test Registration:
```bash
curl -X POST http://localhost:3001/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Test Student",
    "email": "student@example.com",
    "student_type": "adult",
    "course_slug": "nazara-quran"
  }'
```

## 📝 Next Steps

1. ✅ Create `.env.local` with your Supabase credentials
2. ✅ Run the SQL schema in Supabase
3. ✅ Restart your development server: `npm run dev`
4. ✅ Test the API endpoints
5. 🔄 Integrate forms on frontend to use these APIs
6. 📧 Set up email notifications (optional)
7. 💳 Add payment integration (optional)

## 🆘 Troubleshooting

### Error: "Missing environment variables"
- Make sure `.env.local` exists in project root
- Restart dev server after creating/updating `.env.local`

### Error: "Failed to submit contact form"
- Check Supabase credentials are correct
- Verify schema was run successfully
- Check Supabase logs in dashboard

### Error: "A student with this email already exists"
- This is expected - email must be unique
- Use a different email or delete the existing record

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [TypeScript](https://www.typescriptlang.org/docs/)
