import Header from '@/components/Header';
import Link from 'next/link';

export default function CourseLandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <main className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold mb-4">Welcome to OQ Tutor</h1>
                <p className="text-lg mb-6">Explore our courses and start learning today.</p>
                <Link href="/courses" className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition">
                    Browse Courses
                </Link>
            </main>
        </div>
    );
}
