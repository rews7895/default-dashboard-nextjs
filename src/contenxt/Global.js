import React, { useState, createContext, useContext } from 'react'

const GlobalContext = createContext(null)

const GlobalProvider = ({ children }) => {
  // 토스트 얼럿 관련
  const [toast, setToast] = useState([])

  // 모바일 단 사이드 바 오픈 관련
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // 로딩 페이지 띄움 관련
  const [isLoading, setIsLoading] = useState(false)

  const [currentPathname, setCurrentPathname] = useState(null)

  const value = {
    toast,
    setToast,
    sidebarOpen,
    setSidebarOpen,
    isLoading,
    setIsLoading,
    currentPathname,
    setCurrentPathname,
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

const useGlobal = () => useContext(GlobalContext)

export { GlobalProvider, useGlobal }
