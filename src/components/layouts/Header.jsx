'use client'

import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { ThemeToggle } from '@/components/buttons/ThemeToggle'
import Link from 'next/link'
import HaniLogo from '@/components/logo/HaniLogo'
import { useGlobal } from '@/contenxt/Global'
import Avatar from '@/components/Avatar'

export default function HeaderComponent({}) {
  const { setSidebarOpen } = useGlobal()
  return (
    <>
      {/* Sticky search header */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-zinc-200 dark:border-zinc-700 px-4 shadow-sm sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 xl:hidden "
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form className="flex flex-1 justify-between" action="#" method="GET">
            <div className="">
              <label htmlFor="search-field" className="sr-only">
                헤더 영역
              </label>
            </div>
            <div className="flex items-center">
              <Link href="/" aria-label="Home" className="xl:hidden">
                <HaniLogo className="h-6" />
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="gap-1">
                <ThemeToggle />
              </div>
              <div className="gap-1">
                <Avatar />
                {/* <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 "
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">프로필 영역</span>
                </a> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
