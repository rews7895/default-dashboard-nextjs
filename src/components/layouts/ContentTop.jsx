'use client'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { getBreadCrumbsInfo } from '@/lib/values/pathname'
import Link from 'next/link'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function ContentTopComponent() {
  const pathname = usePathname()
  const breadCrumbsInfoArr = getBreadCrumbsInfo({ pathname })

  return (
    <>
      {pathname !== '/' && (
        <header className="items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a
                    href="/"
                    className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-100"
                  >
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {breadCrumbsInfoArr.map((item, i) => (
                <li key={i}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {item.current ? (
                      <span
                        className={`ml-4 text-sm font-bold text-gray-500 dark:text-gray-300`}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className={`ml-4 text-sm font-medium text-gray-400 hover:text-gray-500 dark:hover:text-gray-300`}
                        aria-current={undefined}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          <div>
            <h1 className="text-base font-bold pt-10">
              {breadCrumbsInfoArr.length > 1
                ? breadCrumbsInfoArr[breadCrumbsInfoArr.length - 1].title
                : 'Dashboard'}
            </h1>
          </div>
        </header>
      )}
    </>
  )
}
