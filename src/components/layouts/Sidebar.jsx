'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useGlobal } from '@/contenxt/Global'
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'
import HaniLogo from '@/components/logo/HaniLogo'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/values/navigation'
import { getPathnameInfo } from '@/lib/values/pathname'

export default function SideBarComponent({}) {
  const { sidebarOpen, setSidebarOpen } = useGlobal()
  const pathname = usePathname()
  const sideBarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 xl:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 dark:bg-black/80 px-6 ring-1 ring-white/10">
                  <HeadLogo sideBarClose={sideBarClose} />
                  <Navigation pathname={pathname} sideBarClose={sideBarClose} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* 정적 사이드 네비 */}
      <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 ring-1 ring-zinc-200 dark:ring-zinc-700">
          <HeadLogo sideBarClose={sideBarClose} />
          <Navigation pathname={pathname} sideBarClose={sideBarClose} />
        </div>
      </div>
    </>
  )
}

function HeadLogo({ sideBarClose }) {
  return (
    <div className="flex h-16 shrink-0 items-center">
      <Link href="/" onClick={sideBarClose} aria-label="Home">
        <HaniLogo className="h-6" />
      </Link>
    </div>
  )
}

function Navigation({ pathname, sideBarClose }) {
  const pathnameInfoObj = getPathnameInfo({ pathname })

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        {navigation.map((item, i) => (
          <NavigationItem
            pathname={pathname}
            pathnameInfoObj={pathnameInfoObj}
            item={item}
            key={i}
            sideBarClose={sideBarClose}
          />
        ))}
        <li className="-mx-6 mt-auto">
          <div className="flex w-full justify-center gap-x-4 px-6 py-5 text-sm font-semibold leading-6 text-gray-400">
            &copy; Hankyoreh Media {new Date().getFullYear()}.
          </div>
          {/* <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </a> */}
        </li>
      </ul>
    </nav>
  )
}

function NavigationItem({ pathnameInfoObj, item, pathname, sideBarClose }) {
  const isCurrent =
    pathnameInfoObj.depth > 0 && pathnameInfoObj.splitUrl[0] === item.mark

  const [open, setOpen] = useState(isCurrent)

  const toggleAction = () => {
    setOpen(!open)
  }

  return (
    <li>
      <div className="flex justify-between">
        <div
          className={`text-s leading-6  ${
            isCurrent
              ? 'text-gray-500 dark:text-gray-100 font-bold'
              : 'text-gray-400 font-semibold'
          }`}
        >
          <Link href="#" onClick={toggleAction}>
            {item.title}
          </Link>
        </div>
        <div className="text-xs font-semibold leading-6 text-gray-400">
          <Link href="#" onClick={toggleAction}>
            {open ? (
              <ChevronDownIcon
                className="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
            ) : (
              <ChevronUpIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            )}
          </Link>
        </div>
      </div>
      {item.links.length > 0 && (
        <Transition
          show={open}
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="ml-2 ">
            <ul>
              {item.links.map((linkItem, i) => (
                <li
                  key={i}
                  className={`my-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:rounded-md pl-2 text-zinc-500 dark:text-zinc-200 ${
                    linkItem.href === pathname &&
                    'bg-zinc-200 dark:bg-zinc-700 rounded-md'
                  }`}
                >
                  <Link href={linkItem.href} onClick={sideBarClose}>
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      )}
    </li>
  )
}
