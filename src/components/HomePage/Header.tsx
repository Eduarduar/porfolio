import React, { useState, useEffect } from 'react'
import ButtonDarkMode from '@/components/ButtonDarkMode'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const { t } = useTranslation()
  const [scrollState, setScrollState] = useState(false)
  const [firstScroll, setFirstScroll] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrollState(true)
        if (firstScroll) setFirstScroll(false)
      } else {
        setScrollState(false)
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTop = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <header
        className={`mx-auto max-w-3xl sticky top-0 z-10 transition-all duration-300 ${!scrollState ? 'translate-y-0' : 'translate-y-4 px-5'}`}
      >
        <div
          className={`bottom-0 static flex items-center py-1 px-5 z-20 justify-between ${scrollState ? 'bg-white dark:bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm' : ''} rounded-lg transition-all`}
        >
          <div
            className={`flex w-12 h-12 relative items-center bg-indigo-100 dark:bg-gray-700/60 rounded-full shadow-md border-4 border-white dark:border-gray-900/80 cursor-pointer ${firstScroll ? 'opacity-0' : scrollState ? 'animate-menu-icon-in' : 'animate-menu-icon-out'}`}
            onClick={smoothScrollTop}
          >
            <span className="box-border block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 absolute inset-0">
              <img
                src={t('userInfo.image')}
                alt="user image"
                className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-h-full min-w-full max-h-full max-w-full object-cover rounded-full drop-shadow-2xl"
              />
            </span>
            <span className="ml-14 font-semibold text-lg whitespace-nowrap text-slate-600 dark:text-slate-300">
              {t('userInfo.firstName')} {t('userInfo.lastName')}
            </span>
          </div>
          <ButtonDarkMode />
        </div>
      </header>
    </>
  )
}

export default Header
