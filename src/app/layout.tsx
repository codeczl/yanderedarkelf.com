import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Yandere Dark Elf: Explore the Dark Fantasy World',
  description: 'A thrilling fantasy adventure featuring a dark elf heroine with complex emotions and intense storylines.',
  keywords: ['yandere', 'dark elf', 'fantasy', 'manga', 'light novel'],
  metadataBase: new URL('https://yanderedarkelf.com'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/tb.ico', sizes: '16x16' },
      { url: '/tb.ico', sizes: '32x32' },
    ],
    apple: { url: '/tb.ico', sizes: '180x180' },
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/tb.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/tb.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/tb.ico" />
        <script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8919061004428483"
  crossOrigin="anonymous"
></script>

      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}