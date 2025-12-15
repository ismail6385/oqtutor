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
    faVideo,
    faComments,
    faGlobe
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
    color?: string; // Hex code for theme color
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
        heroImage: "/images/courses/naorani-qaedah.png",
        color: "#10B981", // Emerald
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
        heroImage: "/images/courses/nazara-quran.png",
        color: "#059669", // Emerald Dark
        features: [
            "Fluent reading of the Quran",
            "Application of Tajweed rules",
            "Correction of pronunciation errors",
            "Confidence building in recitation",
            "Completion of the entire Quran"
        ],
        curriculum: [
            {
                title: "Module 1: Fluency & Flow",
                description: "Improving reading speed while maintaining correct pronunciation."
            },
            {
                title: "Module 2: Stopping Rules (Waqf)",
                description: "Learning where and how to stop while reading verses."
            },
            {
                title: "Module 3: Advanced Tajweed Application",
                description: "Applying complex Tajweed rules in real-time reading."
            },
            {
                title: "Module 4: Khatam-ul-Quran",
                description: "Completing the recitation of the entire Quran."
            }
        ],
        benefits: [
            {
                title: "Correct Recitation",
                description: "Read the Quran exactly as it was revealed.",
                icon: faBookOpen
            },
            {
                title: "Spiritual Connection",
                description: "Deepen your connection with Allah through His words.",
                icon: faHeart
            },
            {
                title: "Certified Tutors",
                description: "Learn from Huffaz and Qaris with Ijazah.",
                icon: faUserGraduate
            },
            {
                title: "Flexible Timing",
                description: "Classes that fit your schedule.",
                icon: faClock
            }
        ],
        faqs: [
            {
                question: "How long does it take to finish the Quran?",
                answer: "It depends on the student's pace and class frequency. typically, it takes 6-12 months for fluent readers."
            },
            {
                question: "Do I need to know Tajweed?",
                answer: "Basic knowledge is helpful, but we will review and refine your Tajweed during the course."
            }
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
        heroImage: "/images/courses/recitation.png",
        color: "#D97706", // Amber
        features: [
            "Advanced Tajweed rules",
            "Melodious recitation styles",
            "Breath control techniques",
            "Voice modulation",
            "Recitation practice of famous Qaris"
        ],
        curriculum: [
            {
                title: "Module 1: Maqamat (Melodies)",
                description: "Introduction to different styles of recitation."
            },
            {
                title: "Module 2: Breath Control",
                description: "Techniques to manage breath for longer verses."
            },
            {
                title: "Module 3: Voice Modulation",
                description: "Controlling pitch and tone for emotional impact."
            }
        ],
        benefits: [
            {
                title: "Beautiful Voice",
                description: "Unlock the potential of your voice.",
                icon: faStar
            },
            {
                title: "Confidence",
                description: "Recite with confidence in front of others.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Do I need a good voice?",
                answer: "Everyone has a unique voice. We help you improve and beautify what you have."
            }
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
        heroImage: "https://images.unsplash.com/photo-1591283256086-f08cb3881cce?auto=format&fit=crop&w=2070&q=80",
        color: "#7C3AED", // Violet
        features: [
            "Systematic memorization plan",
            "Regular revision (Muraja'ah)",
            "Tajweed correction during memorization",
            "Progress tracking",
            "Certification upon completion"
        ],
        curriculum: [
            {
                title: "Phase 1: Juz 30 (Amma Para)",
                description: "Starting with the short Surahs for easy memorization."
            },
            {
                title: "Phase 2: Selected Surahs",
                description: "Memorizing important Surahs like Yaseen, Mulk, etc."
            },
            {
                title: "Phase 3: Full Quran Hifz",
                description: "Systematic memorization of the entire Quran."
            }
        ],
        benefits: [
            {
                title: "Huge Rewards",
                description: "Great rewards in this life and the Hereafter.",
                icon: faHeart
            },
            {
                title: "Mental Sharpness",
                description: "Improves memory and cognitive function.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "What is the best age to start?",
                answer: "While childhood is ideal, adults can also successfully memorize the Quran with dedication."
            }
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
        heroImage: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=2070&q=80",
        color: "#2563EB", // Blue
        features: [
            "Translation of verses",
            "Context of revelation",
            "Detailed explanation (Tafseer)",
            "Practical application of teachings",
            "Study of major themes in the Quran"
        ],
        curriculum: [
            {
                title: "Module 1: Introduction to Tafseer",
                description: "History and principles of Quranic interpretation."
            },
            {
                title: "Module 2: Tafseer of Short Surahs",
                description: "Detailed study of Juz 30."
            },
            {
                title: "Module 3: Thematic Study",
                description: "Exploring themes like patience, mercy, and justice."
            }
        ],
        benefits: [
            {
                title: "Deep Understanding",
                description: "Go beyond reading to true comprehension.",
                icon: faBookOpen
            },
            {
                title: "Life Application",
                description: "Apply Quranic wisdom to your daily life.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Do I need to know Arabic?",
                answer: "Knowing Arabic is helpful but not required. We explain concepts in English."
            }
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
        heroImage: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=2070&q=80",
        color: "#0EA5E9", // Sky
        features: [
            "Method of Wudu and Ghusl",
            "Complete method of Salah",
            "Daily Masnoon Duas",
            "Six Kalimas",
            "Basic Islamic beliefs and manners"
        ],
        curriculum: [
            {
                title: "Module 1: Purity (Taharah)",
                description: "Wudu, Ghusl, and Tayammum."
            },
            {
                title: "Module 2: Salah (Prayer)",
                description: "Step-by-step guide to performing daily prayers."
            },
            {
                title: "Module 3: Daily Duas",
                description: "Supplications for waking up, eating, sleeping, etc."
            }
        ],
        benefits: [
            {
                title: "Correct Worship",
                description: "Ensure your prayers are performed correctly.",
                icon: faPrayingHands
            },
            {
                title: "Islamic Lifestyle",
                description: "Integrate Islamic teachings into your daily routine.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Is this for kids only?",
                answer: "No, this course is for anyone who wants to learn or correct their basics."
            }
        ]
    },
    {
        slug: "islamic-studies",
        title: "Islamic Studies",
        category: "Islamic",
        description: "Comprehensive Islamic education covering Fiqh, Seerah, and Islamic history.",
        longDescription: "Our Islamic Studies course provides a comprehensive understanding of Islam beyond just Quran. Students will learn Islamic jurisprudence (Fiqh), the life of Prophet Muhammad ﷺ (Seerah), Islamic history, and contemporary Islamic issues. This course helps you become a well-rounded Muslim with deep knowledge of your faith.",
        duration: "6-12 Months",
        level: "Intermediate",
        icon: faBookOpen,
        heroImage: "/images/courses/islamic-studies.png",
        color: "#FF7AAC", // Pink
        features: [
            "Islamic jurisprudence (Fiqh)",
            "Life of Prophet Muhammad ﷺ (Seerah)",
            "Islamic history and civilization",
            "Contemporary Islamic issues",
            "Character development through Islamic teachings"
        ],
        curriculum: [
            {
                title: "Module 1: Introduction to Islamic Studies",
                description: "Overview of Islamic knowledge and its importance in daily life."
            },
            {
                title: "Module 2: Fiqh (Islamic Jurisprudence)",
                description: "Understanding Islamic rulings on worship, transactions, and daily matters."
            },
            {
                title: "Module 3: Seerah (Life of Prophet Muhammad ﷺ)",
                description: "Detailed study of the Prophet's life, character, and teachings."
            },
            {
                title: "Module 4: Islamic History",
                description: "Major events and personalities in Islamic history."
            },
            {
                title: "Module 5: Contemporary Issues",
                description: "Islamic perspective on modern challenges and questions."
            }
        ],
        benefits: [
            {
                title: "Deep Understanding",
                description: "Gain comprehensive knowledge of Islamic teachings.",
                icon: faBookOpen
            },
            {
                title: "Practical Application",
                description: "Learn how to apply Islamic principles in modern life.",
                icon: faCheckCircle
            },
            {
                title: "Character Building",
                description: "Develop Islamic character and values.",
                icon: faHeart
            },
            {
                title: "Expert Teachers",
                description: "Learn from qualified Islamic scholars.",
                icon: faUserGraduate
            }
        ],
        faqs: [
            {
                question: "Who should take this course?",
                answer: "This course is for anyone who wants to deepen their Islamic knowledge beyond basic Quran reading. It's suitable for teenagers and adults."
            },
            {
                question: "Do I need prior Islamic knowledge?",
                answer: "Basic knowledge of Islam is helpful but not required. We start from fundamentals and build up gradually."
            }
        ]
    },
    {
        slug: "arabic",
        title: "Arabic Language",
        category: "Islamic",
        description: "Learn to speak, read, and write Arabic from beginner to advanced level.",
        longDescription: "Our Arabic Language course is designed to help you master Arabic from scratch. Whether you want to understand the Quran better, communicate with Arabic speakers, or explore Arabic literature, this comprehensive course covers everything from the alphabet to advanced grammar and conversation.",
        duration: "12-18 Months",
        level: "Beginner to Advanced",
        icon: faLanguage,
        heroImage: "/images/courses/arabic.png",
        color: "#FF7AAC", // Pink
        features: [
            "Arabic alphabet and pronunciation",
            "Grammar and sentence structure",
            "Conversational Arabic",
            "Quranic Arabic understanding",
            "Reading and writing practice"
        ],
        curriculum: [
            {
                title: "Module 1: Arabic Alphabet & Pronunciation",
                description: "Master the 28 Arabic letters and their correct pronunciation."
            },
            {
                title: "Module 2: Basic Grammar",
                description: "Learn fundamental grammar rules and sentence construction."
            },
            {
                title: "Module 3: Conversational Arabic",
                description: "Practice everyday conversations and common phrases."
            },
            {
                title: "Module 4: Quranic Arabic",
                description: "Understand Arabic as used in the Quran."
            },
            {
                title: "Module 5: Advanced Grammar",
                description: "Master complex grammar structures and expressions."
            }
        ],
        benefits: [
            {
                title: "Understand Quran",
                description: "Read and understand the Quran in its original language.",
                icon: faBookOpen
            },
            {
                title: "Speak Fluently",
                description: "Communicate confidently with Arabic speakers.",
                icon: faComments
            },
            {
                title: "Cultural Connection",
                description: "Connect with Arabic culture and heritage.",
                icon: faGlobe
            },
            {
                title: "Expert Teachers",
                description: "Learn from native Arabic speakers.",
                icon: faUserGraduate
            }
        ],
        faqs: [
            {
                question: "Is Arabic difficult to learn?",
                answer: "While Arabic has unique features, our structured approach makes it accessible. With consistent practice and expert guidance, you'll make steady progress."
            },
            {
                question: "Will this help me understand the Quran?",
                answer: "Absolutely! We include Quranic Arabic modules that help you understand the language of the Quran and enhance your connection with it."
            }
        ]
    }
]
