import {
    faBookOpen,
    faBook,
    faStar,
    faHeart,
    faPrayingHands,
    faCalculator,
    faFlask,
    faAtom,
    faLanguage,
    faMicroscope,
    faPencilAlt,
    faCheckCircle,
    faClock,
    faUserGraduate,
    faVideo
} from "@fortawesome/free-solid-svg-icons"

export interface Course {
    slug: string;
    title: string;
    category: "Islamic" | "Academic";
    description: string;
    longDescription: string;
    duration?: string;
    level?: string;
    grades?: string;
    icon: any;
    features: string[];
    heroImage?: string;
    curriculum?: { title: string; description: string }[];
    faqs?: { question: string; answer: string }[];
    benefits?: { title: string; description: string; icon: any }[];
}

export const courses: Course[] = [
    // Islamic Courses
    {
        slug: "naorani-qaedah",
        title: "Naorani / Madni Qaedah",
        category: "Islamic",
        description: "The foundation course for beginners to learn Arabic letters and pronunciation rules.",
        longDescription: "Our Naorani / Madni Qaedah course is the essential first step in your Quranic journey. Designed meticulously for beginners of all ages, this course focuses on the correct pronunciation (Makharij) of Arabic letters and the fundamental rules of Tajweed. By the end of this course, students will be able to identify, pronounce, and connect Arabic letters to read words and sentences from the Quran with confidence and accuracy.",
        duration: "3-6 Months",
        level: "Beginner",
        icon: faBookOpen,
        heroImage: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: [
            "Recognition of Arabic letters",
            "Correct pronunciation (Makharij)",
            "Basic Tajweed rules",
            "Connecting letters",
            "Reading basic words and sentences"
        ],
        curriculum: [
            {
                title: "Module 1: The Arabic Alphabet (Huroof-ul-Mufradat)",
                description: "Learning the 29 Arabic letters with their correct Makharij (points of articulation)."
            },
            {
                title: "Module 2: Joint Letters (Murakkabat)",
                description: "Understanding how letters change their shapes when joined together."
            },
            {
                title: "Module 3: Vowel Signs (Harakat)",
                description: "Introduction to Fatha, Kasra, and Damma and how they affect sound."
            },
            {
                title: "Module 4: Tanween (Double Vowels)",
                description: "Learning the sounds of double Fatha, Kasra, and Damma."
            },
            {
                title: "Module 5: Sukoon & Jazm",
                description: "Understanding the concept of resting sounds and connecting letters."
            },
            {
                title: "Module 6: Madd (Elongation)",
                description: "Rules of stretching sounds (Madd Asli and Madd Far'i)."
            },
            {
                title: "Module 7: Shaddah (Emphasis)",
                description: "Learning how to pronounce doubled letters with emphasis."
            },
            {
                title: "Module 8: Rules of Noon Saakin & Meem Saakin",
                description: "Advanced rules for nasal sounds and clear pronunciation."
            }
        ],
        benefits: [
            {
                title: "Expert Tutors",
                description: "Learn from certified Qaris who specialize in teaching beginners.",
                icon: faUserGraduate
            },
            {
                title: "1-on-1 Attention",
                description: "Personalized classes ensure you learn at your own pace.",
                icon: faVideo
            },
            {
                title: "Flexible Schedule",
                description: "Classes available 24/7 to fit your busy lifestyle.",
                icon: faClock
            },
            {
                title: "Interactive Learning",
                description: "Engaging digital Qaedah tools to make learning fun.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Who is this course for?",
                answer: "This course is suitable for absolute beginners, including children (ages 4+) and adults who want to learn to read the Quran from scratch."
            },
            {
                question: "Do I need any prior knowledge?",
                answer: "No, this course starts from the very basics. You do not need any prior knowledge of Arabic."
            },
            {
                question: "How long are the classes?",
                answer: "Each session is typically 30 minutes long, which is optimal for maintaining focus and retention."
            },
            {
                question: "Can I choose a female tutor?",
                answer: "Yes, we have qualified female tutors available for sisters and children."
            }
        ]
    },
    {
        slug: "nazara-quran",
        title: "Nazara Quran",
        category: "Islamic",
        description: "Fluent reading of the Holy Quran with proper pronunciation.",
        longDescription: "The Nazara Quran course focuses on reading the Holy Quran fluently and correctly. This course is for students who have completed the Qaedah and want to start reading the Quran. Our expert tutors ensure that students apply the Tajweed rules they have learned and improve their reading speed and accuracy.",
        duration: "6-12 Months",
        level: "Intermediate",
        icon: faBook,
        features: [
            "Fluent reading of the Quran",
            "Application of Tajweed rules",
            "Correction of pronunciation errors",
            "Confidence building in recitation",
            "Completion of the entire Quran"
        ]
    },
    {
        slug: "recitation",
        title: "Recitation",
        category: "Islamic",
        description: "Mastering the art of Quranic recitation with Tajweed.",
        longDescription: "This course is dedicated to the beautiful art of Quranic recitation. Students will learn to recite the Quran with melodious tunes and perfect Tajweed. We cover various styles of recitation and help students discover their unique voice while adhering to the strict rules of Tajweed.",
        duration: "Flexible",
        level: "All Levels",
        icon: faStar,
        features: [
            "Advanced Tajweed rules",
            "Melodious recitation styles",
            "Breath control techniques",
            "Voice modulation",
            "Recitation practice of famous Qaris"
        ]
    },
    {
        slug: "hifz",
        title: "Hifz (Memorization)",
        category: "Islamic",
        description: "Structured program for memorizing the Holy Quran.",
        longDescription: "Our Hifz program is a comprehensive and structured course for memorizing the Holy Quran. Whether you want to memorize the entire Quran or specific Surahs, our experienced tutors provide personalized guidance and regular revision sessions to ensure strong retention.",
        duration: "2-3 Years",
        level: "Advanced",
        icon: faHeart,
        features: [
            "Systematic memorization plan",
            "Regular revision (Muraja'ah)",
            "Tajweed correction during memorization",
            "Progress tracking",
            "Certification upon completion"
        ]
    },
    {
        slug: "tafseer",
        title: "Tafseer",
        category: "Islamic",
        description: "Understanding the meanings and interpretation of Quranic verses.",
        longDescription: "The Tafseer course allows students to dive deep into the meanings and interpretations of the Quran. We explore the context of revelation (Shan-e-Nuzool), linguistic nuances, and practical lessons derived from the verses. This course connects the Quranic teachings to daily life.",
        duration: "1-2 Years",
        level: "Advanced",
        icon: faBookOpen,
        features: [
            "Translation of verses",
            "Context of revelation",
            "Detailed explanation (Tafseer)",
            "Practical application of teachings",
            "Study of major themes in the Quran"
        ]
    },
    {
        slug: "namaz-islamic-knowledge",
        title: "Namaz & Basic Islamic Knowledge",
        category: "Islamic",
        description: "Learning daily prayers, Duas, and essential Islamic teachings.",
        longDescription: "This course covers the essentials of daily Islamic life. Students will learn how to perform Wudu and Salah (Namaz) correctly, memorize daily Duas (supplications), and understand the basic pillars of Islam, Iman, and Ihsan. It is essential for every Muslim to know these basics.",
        duration: "3 Months",
        level: "Beginner",
        icon: faPrayingHands,
        features: [
            "Method of Wudu and Ghusl",
            "Complete method of Salah",
            "Daily Masnoon Duas",
            "Six Kalimas",
            "Basic Islamic beliefs and manners"
        ]
    },

    // Academic Courses
    {
        slug: "math",
        title: "Math",
        category: "Academic",
        description: "Comprehensive math tutoring from Grade 4 to University level.",
        longDescription: "Our Math tutoring program covers a wide range of topics from basic arithmetic to advanced calculus. We tailor our lessons to the student's curriculum and learning pace, focusing on problem-solving skills and conceptual understanding.",
        grades: "Grade 4 - University",
        icon: faCalculator,
        features: [
            "Arithmetic & Algebra",
            "Geometry & Trigonometry",
            "Calculus & Statistics",
            "Homework help",
            "Exam preparation"
        ]
    },
    {
        slug: "chemistry",
        title: "Chemistry",
        category: "Academic",
        description: "Understanding chemical principles, equations, and experiments.",
        longDescription: "Explore the world of matter and reactions with our Chemistry tutoring. We cover organic, inorganic, and physical chemistry, helping students master complex concepts, chemical equations, and laboratory techniques.",
        grades: "Grade 9 - 12 / O-A Level",
        icon: faFlask,
        features: [
            "Atomic structure & Bonding",
            "Chemical reactions & Stoichiometry",
            "Organic Chemistry",
            "Periodic Table trends",
            "Lab report assistance"
        ]
    },
    {
        slug: "physics",
        title: "Physics",
        category: "Academic",
        description: "Mastering concepts of motion, energy, and matter.",
        longDescription: "Physics can be challenging, but our tutors make it easy to understand. We cover mechanics, electricity, magnetism, waves, and modern physics, using real-world examples to explain abstract concepts.",
        grades: "Grade 9 - 12 / O-A Level",
        icon: faAtom,
        features: [
            "Mechanics & Motion",
            "Electricity & Magnetism",
            "Waves & Optics",
            "Thermodynamics",
            "Problem-solving strategies"
        ]
    },
    {
        slug: "english",
        title: "English",
        category: "Academic",
        description: "Improving reading, writing, and speaking skills.",
        longDescription: "Enhance your English language skills with our comprehensive course. We focus on grammar, vocabulary, reading comprehension, creative writing, and spoken English to help students communicate effectively and excel in their studies.",
        grades: "All Grades",
        icon: faLanguage,
        features: [
            "Grammar & Punctuation",
            "Creative & Essay Writing",
            "Reading Comprehension",
            "Spoken English & Pronunciation",
            "Literature analysis"
        ]
    },
    {
        slug: "science",
        title: "Science",
        category: "Academic",
        description: "General science education for younger students.",
        longDescription: "Our General Science course is designed to spark curiosity in young minds. We cover the basics of biology, chemistry, and physics in an integrated and fun way, encouraging students to ask questions and explore the world around them.",
        grades: "Grade 4 - 8",
        icon: faMicroscope,
        features: [
            "Living things & Ecosystems",
            "Matter & Materials",
            "Energy & Forces",
            "Earth & Space",
            "Scientific inquiry methods"
        ]
    },
    {
        slug: "entrance-test-preparation",
        title: "Entrance Test Preparation",
        category: "Academic",
        description: "Specialized coaching for university entrance exams.",
        longDescription: "Prepare for your university entrance exams with confidence. Our specialized coaching covers major entrance tests, focusing on key subjects, time management strategies, and practice with past papers to ensure high scores.",
        grades: "Pre-University",
        icon: faPencilAlt,
        features: [
            "Subject-specific coaching",
            "Mock tests & Past papers",
            "Time management tips",
            "Interview preparation",
            "Personalized study plans"
        ]
    }
]
