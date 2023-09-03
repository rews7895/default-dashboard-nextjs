import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '@/components/layouts/Sidebar'
import Header from '@/components/layouts/Header'
import { Providers } from '@/app/providers'
import ContentTop from '@/components/layouts/ContentTop'
import { HeroPattern } from '@/components/grid/HeroPattern'
import DefaultProvider from '@/providers/default'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/layouts/Layout'

export const metadata: Metadata = {
  title: '관리자 페이지',
  description: '관리자 페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full">
        <Providers>
          <Layout>{children}</Layout>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Providers>
      </body>
    </html>
  )
}
