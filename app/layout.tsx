import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'optional',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Luminexis Technologies — Engineered for Performance',
  description:
    'We build structured, scalable digital platforms that grow with your business. Design-first. Performance-driven. Engineered with precision.',
  keywords: ['web engineering', 'digital product design', 'frontend engineering', 'scalable web platforms'],
  openGraph: {
    title: 'Luminexis Technologies',
    description: 'Engineered for Performance. Built for Longevity.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
