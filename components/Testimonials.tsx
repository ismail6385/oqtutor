"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const testimonials = [
    {
        body: "The tutors are incredibly patient and knowledgeable. My son has improved his recitation significantly in just a few months. Highly recommended!",
        author: {
            name: "Sarah Ahmed",
            handle: "Parent",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        rating: 5,
    },
    {
        body: "I was hesitant about online learning, but OQTutor made it so easy. The platform is user-friendly and the classes are very interactive. I love it!",
        author: {
            name: "Mohammed Ali",
            handle: "Student",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        rating: 5,
    },
    {
        body: "The structured curriculum really helps in understanding the rules of Tajweed. My teacher is excellent and explains everything clearly.",
        author: {
            name: "Fatima Hassan",
            handle: "Student",
            imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        rating: 5,
    },
    {
        body: "Best investment for my children's Islamic education. The flexibility of timing is a huge plus for us as a working family.",
        author: {
            name: "Yusuf Khan",
            handle: "Parent",
            imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        rating: 5,
    },
    {
        body: "I started from zero and now I can read the Quran fluently. The 1-on-1 attention makes all the difference.",
        author: {
            name: "Aisha Siddiqui",
            handle: "Student",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        rating: 5,
    },
    {
        body: "The female tutors are wonderful with my daughters. They look forward to their classes every week.",
        author: {
            name: "Zainab Malik",
            handle: "Parent",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <div className="bg-background py-24 sm:py-32 relative">
            {/* Background Elements */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 -skew-x-12 -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center mb-16">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What our students say
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Don't just take our word for it. Read what our community has to say about their learning journey.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div>
                                <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-primary/20 mb-4" />
                                <p className="text-base leading-7 text-foreground">
                                    "{testimonial.body}"
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-x-4 border-t border-gray-900/5 pt-6">
                                <img
                                    className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                                    src={testimonial.author.imageUrl}
                                    alt=""
                                />
                                <div>
                                    <div className="font-semibold text-foreground">
                                        {testimonial.author.name}
                                    </div>
                                    <div className="text-sm leading-6 text-muted-foreground">
                                        {testimonial.author.handle}
                                    </div>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={faStar}
                                            className="h-4 w-4 text-yellow-400"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
