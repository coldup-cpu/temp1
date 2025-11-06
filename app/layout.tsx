import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
