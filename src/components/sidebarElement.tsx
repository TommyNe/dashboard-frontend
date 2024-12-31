import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from 'react-icons/hi'
import React, { useState } from 'react'
import { Sidebar } from 'flowbite-react'

export function SidebarElement() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 g-gray-800 text-white rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/dashboard/" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="/dashboard/projects"
                icon={HiViewBoards}
                // label="Pro"
                // labelColor="dark"
              >
                ToDos
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/events" icon={HiInbox} label="3">
                Termine
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/news" icon={HiUser}>
                News
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Einkaufsliste
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>
    </>
  )
}
