import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kor6ro Portfolio',
  description: 'Welcome to my modern portfolio showcasing my work, projects, and use cases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="glass-footer py-10 text-center text-sm text-gray-500 mt-20">
          <p className="opacity-60">&copy; {new Date().getFullYear()} Kor6ro. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
