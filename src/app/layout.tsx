import './globals.css'
import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'

const questrial = Questrial({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unicorn',
  description: 'Platform for investment and capital raising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        {children}
      </body>
    </html>
  )
}
