import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
;<link rel="icon" type="image/png" href="/favicon.ico" />

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jack Crawford',
  description: 'Some of my work',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
