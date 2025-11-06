import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutClient } from '@/components/layout-client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinay Sharma - Full-Stack Developer & AI Enthusiast',
  description: 'I design digital experiences powered by AI and automation. My goal is to make the web more intuitive, fast, and personal.',
  keywords: ['Vinay Sharma', 'Full-Stack Developer', 'AI', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Vinay Sharma' }],
  openGraph: {
    title: 'Vinay Sharma - Full-Stack Developer & AI Enthusiast',
    description: 'I design digital experiences powered by AI and automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
