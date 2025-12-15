"use client"

import Link from "next/link"

export default function PrivacyPolicy() {
    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary">Legal</h2>
                    <h1 
                        className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
                        style={{ 
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Privacy Policy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto">
                    <p>
                        At OQTutor, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>
                        We collect information that you provide directly to us, such as when you create an account, book a class, or contact us for support. This may include:
                    </p>
                    <ul>
                        <li>Name and contact details (email, phone number)</li>
                        <li>Account credentials (username, password)</li>
                        <li>Payment information (processed securely by third-party providers)</li>
                        <li>Student information (age, learning goals, gender for tutor matching)</li>
                        <li>Communications with us (emails, chat logs)</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services. Specifically, we use your data to:
                    </p>
                    <ul>
                        <li>Process your registration and manage your account</li>
                        <li>Schedule and conduct online classes</li>
                        <li>Process payments and send invoices</li>
                        <li>Communicate with you about your course progress and updates</li>
                        <li>Respond to your comments, questions, and requests</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                    </ul>

                    <h3>3. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>

                    <h3>4. Sharing of Information</h3>
                    <p>
                        We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
                    </p>

                    <h3>5. Your Rights</h3>
                    <p>
                        You have the right to access, correct, or delete your personal information. You may also object to the processing of your data or request that we restrict the processing of your data. To exercise these rights, please contact us at <a href="mailto:support@oqtutor.com" className="text-primary hover:underline">support@oqtutor.com</a>.
                    </p>

                    <h3>6. Changes to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                    </p>

                    <h3>7. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="mailto:support@oqtutor.com" className="text-primary hover:underline">support@oqtutor.com</a><br />
                        <strong>Phone:</strong> +92 347 8704442
                    </p>
                </div>
            </div>
        </div>
    )
}
