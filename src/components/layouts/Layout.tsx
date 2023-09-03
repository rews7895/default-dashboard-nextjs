'use client'
import React from 'react'
import Sidebar from '@/components/layouts/Sidebar'
import Header from '@/components/layouts/Header'
import { Providers } from '@/app/providers'
import ContentTop from '@/components/layouts/ContentTop'
import { HeroPattern } from '@/components/grid/HeroPattern'
import DefaultProvider from '@/providers/default'
import { ToastContainer } from 'react-toastify'
import { usePathname } from 'next/navigation'

const notLayout = ['/signin', '/signup']

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  let isLayoutiVisible = true
  if (pathname) {
    isLayoutiVisible = !notLayout.includes(pathname)
  }

  if (isLayoutiVisible) {
    return (
      <>
        <DefaultProvider />
        <Sidebar />
        <div className="xl:pl-72">
          <Header />
          <main>
            <HeroPattern />
            <ContentTop />
            <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8">{children}</div>
          </main>
        </div>
      </>
    )
  } else {
    return (
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <main className="flex-auto">
            <HeroPattern />
            {children}
          </main>
        </div>
      </div>
    )
  }
}
