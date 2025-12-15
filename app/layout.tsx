import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OQTutor - Online Quran Teaching & Tutoring',
  description: 'Learn Quran online with certified tutors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}