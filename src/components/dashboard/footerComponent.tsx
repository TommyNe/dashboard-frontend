'use client'

import { Footer } from 'flowbite-react'

export default function FooterComponent() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white absolute bottom-0 right-0 w-5/6">
      <Footer container>
        <Footer.Copyright href="#" by="Thomas Nehrenberg™" year={2025} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </footer>
  )
}
