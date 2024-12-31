'use client'
import { Geist, Geist_Mono } from 'next/font/google'
import './../globals.css'
import { Providers } from '../providers'
import { Flowbite } from 'flowbite-react'
import { NavbarElement } from '@/components/navbarElement'
import { SidebarElement } from '@/components/sidebarElement'
import { useState } from 'react'
import FooterComponent from '@/components/dashboard/footerComponent'

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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-gray-900 text-black dark:text-white ${geistSans} ${geistMono}`}
      >
        <Flowbite>
          <NavbarElement />
          <SidebarElement />
          <div className="p-4 sm:ml-64">
            <Providers>{children}</Providers>
          </div>
          <FooterComponent />
        </Flowbite>
      </body>
    </html>
  )
}
