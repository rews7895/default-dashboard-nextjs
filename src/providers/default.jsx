'use client'

import { useEffect } from 'react'
import { useGlobal } from '@/contenxt/Global'
import { usePathname } from 'next/navigation'
import { immediatelyToast } from '@/lib/toast'

export default function DefaultProvider() {
  const pathname = usePathname()
  const { currentPathname, setCurrentPathname, toast, setToast } = useGlobal()
  useEffect(() => {
    if (!currentPathname || currentPathname !== pathname) {
      setCurrentPathname(pathname)
      toast.map((item) => {
        immediatelyToast(item)
      })
      setToast([])
    }
  }, [currentPathname, pathname, setCurrentPathname, setToast, toast])

  return null
}
