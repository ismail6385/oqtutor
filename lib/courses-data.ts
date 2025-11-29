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
        heroImage: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
        heroImage: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=2070&q=80",
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
        heroImage: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=2070&q=80",
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
        slug: "math",
        title: "Math",
        category: "Academic",
        description: "Comprehensive math tutoring from Grade 4 to University level.",
        longDescription: "Our Math tutoring program covers a wide range of topics from basic arithmetic to advanced calculus. We tailor our lessons to the student's curriculum and learning pace, focusing on problem-solving skills and conceptual understanding.",
        grades: "Grade 4 - University",
        icon: faCalculator,
        heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2070&q=80",
        color: "#EA580C", // Orange
        features: [
            "Arithmetic & Algebra",
            "Geometry & Trigonometry",
            "Calculus & Statistics",
            "Homework help",
            "Exam preparation"
        ],
        curriculum: [
            {
                title: "Module 1: Foundations",
                description: "Strengthening basic arithmetic and number sense."
            },
            {
                title: "Module 2: Algebra",
                description: "Equations, inequalities, and functions."
            },
            {
                title: "Module 3: Geometry",
                description: "Shapes, angles, and proofs."
            },
            {
                title: "Module 4: Calculus",
                description: "Limits, derivatives, and integrals (for advanced students)."
            }
        ],
        benefits: [
            {
                title: "Problem Solving",
                description: "Develop critical thinking and analytical skills.",
                icon: faCalculator
            },
            {
                title: "Better Grades",
                description: "Improve your school performance and exam scores.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Do you cover my specific curriculum?",
                answer: "Yes, we tailor our lessons to match your school's curriculum (e.g., Common Core, GCSE, IB)."
            }
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
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2070&q=80",
        color: "#9333EA", // Purple
        features: [
            "Atomic structure & Bonding",
            "Chemical reactions & Stoichiometry",
            "Organic Chemistry",
            "Periodic Table trends",
            "Lab report assistance"
        ],
        curriculum: [
            {
                title: "Module 1: Atomic Structure",
                description: "Protons, neutrons, electrons, and the periodic table."
            },
            {
                title: "Module 2: Bonding",
                description: "Ionic, covalent, and metallic bonds."
            },
            {
                title: "Module 3: Stoichiometry",
                description: "Balancing equations and mole calculations."
            }
        ],
        benefits: [
            {
                title: "Conceptual Clarity",
                description: "Understand the 'why' behind chemical reactions.",
                icon: faFlask
            },
            {
                title: "Lab Skills",
                description: "Get help with understanding lab experiments and reports.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Is this suitable for A-Levels?",
                answer: "Yes, we have tutors specialized in O-Level, A-Level, and AP Chemistry."
            }
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
        heroImage: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=2070&q=80",
        color: "#0891B2", // Cyan
        features: [
            "Mechanics & Motion",
            "Electricity & Magnetism",
            "Waves & Optics",
            "Thermodynamics",
            "Problem-solving strategies"
        ],
        curriculum: [
            {
                title: "Module 1: Mechanics",
                description: "Forces, motion, energy, and momentum."
            },
            {
                title: "Module 2: Electricity",
                description: "Circuits, current, voltage, and resistance."
            },
            {
                title: "Module 3: Waves",
                description: "Light, sound, and electromagnetic spectrum."
            }
        ],
        benefits: [
            {
                title: "Real-world Understanding",
                description: "See how physics applies to the world around you.",
                icon: faAtom
            },
            {
                title: "Exam Success",
                description: "Master the formulas and concepts needed for exams.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Do you help with physics problems?",
                answer: "Yes, we focus heavily on problem-solving strategies."
            }
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
        heroImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2070&q=80",
        color: "#DB2777", // Pink
        features: [
            "Grammar & Punctuation",
            "Creative & Essay Writing",
            "Reading Comprehension",
            "Spoken English & Pronunciation",
            "Literature analysis"
        ],
        curriculum: [
            {
                title: "Module 1: Grammar Mastery",
                description: "Parts of speech, tenses, and sentence structure."
            },
            {
                title: "Module 2: Writing Skills",
                description: "Essays, reports, and creative writing."
            },
            {
                title: "Module 3: Reading Comprehension",
                description: "Analyzing texts and understanding context."
            }
        ],
        benefits: [
            {
                title: "Communication",
                description: "Speak and write with confidence.",
                icon: faLanguage
            },
            {
                title: "Academic Excellence",
                description: "Improve your grades in all subjects through better English.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Is this for ESL students?",
                answer: "We have programs for both native speakers and ESL students."
            }
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
        heroImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=2070&q=80",
        color: "#65A30D", // Lime
        features: [
            "Living things & Ecosystems",
            "Matter & Materials",
            "Energy & Forces",
            "Earth & Space",
            "Scientific inquiry methods"
        ],
        curriculum: [
            {
                title: "Module 1: Life Science",
                description: "Plants, animals, and the human body."
            },
            {
                title: "Module 2: Physical Science",
                description: "Matter, energy, and simple machines."
            },
            {
                title: "Module 3: Earth Science",
                description: "Rocks, weather, and the solar system."
            }
        ],
        benefits: [
            {
                title: "Curiosity",
                description: "Foster a love for learning and discovery.",
                icon: faMicroscope
            },
            {
                title: "Foundation",
                description: "Build a strong foundation for high school science.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Is it hands-on?",
                answer: "We encourage simple home experiments to make learning active."
            }
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
        heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2070&q=80",
        color: "#4F46E5", // Indigo
        features: [
            "Subject-specific coaching",
            "Mock tests & Past papers",
            "Time management tips",
            "Interview preparation",
            "Personalized study plans"
        ],
        curriculum: [
            {
                title: "Module 1: Concept Review",
                description: "Reviewing key concepts for the exam."
            },
            {
                title: "Module 2: Practice Tests",
                description: "Taking timed mock exams."
            },
            {
                title: "Module 3: Strategy",
                description: "Learning how to approach different question types."
            }
        ],
        benefits: [
            {
                title: "High Scores",
                description: "Maximize your chances of admission.",
                icon: faPencilAlt
            },
            {
                title: "Confidence",
                description: "Walk into the exam room feeling prepared.",
                icon: faCheckCircle
            }
        ],
        faqs: [
            {
                question: "Which exams do you cover?",
                answer: "We cover a wide range of university entrance exams. Please contact us for specifics."
            }
        ]
    }
]
