"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
    return (
        <div className="bg-primary">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to start your journey?
                        <br />
                        Join us today.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
                        Sign up for a free trial class and experience our personalized teaching method. No credit card required.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg" asChild>
                            <Link href="/register">Get started</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white" asChild>
                            <Link href="/contact">Contact us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
