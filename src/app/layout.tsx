'use client'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Flowbite } from 'flowbite-react'
import { NavbarElement } from '@/components/navbarElement'
import { SidebarElement } from '@/components/sidebarElement'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-gray-900 text-black dark:text-white ${geistSans} ${geistMono}`}
      >
        <Flowbite>
          <div>
            <Providers>{children}</Providers>
          </div>
        </Flowbite>
      </body>
    </html>
  )
}
