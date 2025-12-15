-- OQTutor Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Students Table
CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    country TEXT,
    timezone TEXT,
    preferred_language TEXT DEFAULT 'English',
    student_type TEXT CHECK (student_type IN ('child', 'adult')) NOT NULL,
    age INTEGER,
    learning_goals TEXT[],
    status TEXT CHECK (status IN ('active', 'inactive', 'pending')) DEFAULT 'pending',
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Tutors Table
CREATE TABLE IF NOT EXISTS tutors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    country TEXT,
    timezone TEXT,
    languages TEXT[] NOT NULL DEFAULT '{}',
    specializations TEXT[] NOT NULL DEFAULT '{}',
    experience_years INTEGER DEFAULT 0,
    education TEXT,
    bio TEXT,
    hourly_rate DECIMAL(10, 2),
    availability JSONB,
    status TEXT CHECK (status IN ('active', 'inactive', 'pending')) DEFAULT 'pending',
    rating DECIMAL(3, 2) DEFAULT 0.00,
    total_reviews INTEGER DEFAULT 0,
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_rating CHECK (rating >= 0 AND rating <= 5)
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    duration TEXT,
    level TEXT CHECK (level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'beginner',
    price DECIMAL(10, 2),
    status TEXT CHECK (status IN ('active', 'inactive', 'draft')) DEFAULT 'active'
);

-- Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    tutor_id UUID REFERENCES tutors(id) ON DELETE SET NULL,
    status TEXT CHECK (status IN ('pending', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'failed')) DEFAULT 'pending',
    notes TEXT,
    UNIQUE(student_id, course_id)
);

-- Lessons Table
CREATE TABLE IF NOT EXISTS lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
    tutor_id UUID REFERENCES tutors(id) ON DELETE SET NULL,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER DEFAULT 30,
    status TEXT CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')) DEFAULT 'scheduled',
    meeting_link TEXT,
    notes TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    feedback TEXT
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT CHECK (status IN ('new', 'in_progress', 'resolved')) DEFAULT 'new',
    source TEXT CHECK (source IN ('contact_form', 'registration', 'other')) DEFAULT 'contact_form',
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_status ON students(status);
CREATE INDEX IF NOT EXISTS idx_tutors_email ON tutors(email);
CREATE INDEX IF NOT EXISTS idx_tutors_status ON tutors(status);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_status ON courses(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_student ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_lessons_student ON lessons(student_id);
CREATE INDEX IF NOT EXISTS idx_lessons_tutor ON lessons(tutor_id);
CREATE INDEX IF NOT EXISTS idx_lessons_scheduled ON lessons(scheduled_at);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_students_updated_at ON students;
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_tutors_updated_at ON tutors;
CREATE TRIGGER update_tutors_updated_at BEFORE UPDATE ON tutors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_courses_updated_at ON courses;
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_enrollments_updated_at ON enrollments;
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_lessons_updated_at ON lessons;
CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON lessons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample courses
INSERT INTO courses (slug, title, category, description, long_description, duration, level, status) VALUES
('nazara-quran', 'Nazara Quran (Quran Reading)', 'Islamic', 'Learn to read the Quran with proper pronunciation and Tajweed rules.', 'Our Nazara Quran course teaches you to read the Quran fluently with correct pronunciation. Perfect for beginners who want to start their Quranic journey.', '6-12 Months', 'beginner', 'active'),
('recitation', 'Tajweed & Recitation', 'Islamic', 'Master the art of Quranic recitation with advanced Tajweed rules.', 'Learn advanced Tajweed rules and perfect your Quranic recitation with expert guidance from certified Qaris.', '6-12 Months', 'intermediate', 'active'),
('hifz', 'Hifz (Quran Memorization)', 'Islamic', 'Memorize the Holy Quran with proven techniques and expert guidance.', 'Our structured Hifz program helps you memorize the Quran efficiently with revision techniques and one-on-one support.', '2-5 Years', 'intermediate', 'active'),
('arabic', 'Arabic Language', 'Islamic', 'Learn to speak, read, and write Arabic from beginner to advanced level.', 'Master Arabic language from scratch with our comprehensive course covering alphabet, grammar, conversation, and Quranic Arabic.', '12-18 Months', 'beginner', 'active'),
('islamic-studies', 'Islamic Studies', 'Islamic', 'Comprehensive Islamic education covering Fiqh, Seerah, and Islamic history.', 'Deepen your Islamic knowledge with courses on Fiqh, Seerah, Islamic history, and contemporary issues.', '6-12 Months', 'intermediate', 'active'),
('tafseer', 'Tafseer (Quran Interpretation)', 'Islamic', 'Understand the deeper meanings and context of Quranic verses.', 'Study the Quran in depth with classical and contemporary Tafseer to understand its meanings and apply them in your life.', '12-24 Months', 'advanced', 'active'),
('naorani-qaedah', 'Naorani / Madni Qaedah', 'Islamic', 'The essential first step in your Quranic journey - learn Arabic letters and pronunciation.', 'Perfect for absolute beginners. Learn Arabic alphabet, correct pronunciation (Makharij), and fundamental Tajweed rules.', '3-6 Months', 'beginner', 'active'),
('namaz-islamic-knowledge', 'Namaz & Basic Islamic Knowledge', 'Islamic', 'Learning daily prayers, Duas, and essential Islamic teachings.', 'Learn how to perform Wudu and Salah correctly, memorize daily Duas, and understand basic Islamic beliefs.', '3 Months', 'beginner', 'active')
ON CONFLICT (slug) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE tutors ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access to courses
DROP POLICY IF EXISTS "Courses are viewable by everyone" ON courses;
CREATE POLICY "Courses are viewable by everyone" ON courses
    FOR SELECT USING (status = 'active');

-- RLS Policies for contact submissions (insert only)
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
CREATE POLICY "Anyone can submit contact form" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- RLS Policies for students (insert only for registration)
DROP POLICY IF EXISTS "Anyone can register as student" ON students;
CREATE POLICY "Anyone can register as student" ON students
    FOR INSERT WITH CHECK (true);

-- Note: Add more specific RLS policies based on your authentication setup
