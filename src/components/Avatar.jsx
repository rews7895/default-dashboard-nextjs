import { Popover } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

function AvatarImageButton() {
  return (
    <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6">
      <Image
        className="h-8 w-8 rounded-full bg-gray-800"
        src={'/avatar/default.jpeg'}
        alt=""
        width={256}
        height={256}
      />
      <span className="sr-only">프로필 영역</span>
    </div>
  )
}

export default function AvatarComponent() {
  return (
    <Popover className="relative">
      <Popover.Button className={'outline-none'}>
        <AvatarImageButton />
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2 pl-4 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-500 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-200 rounded-md">
          <Link href="/logout">Logout</Link>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
