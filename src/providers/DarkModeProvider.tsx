import React, { useState, useEffect } from 'react'
import { DarkModeContext } from '@/contexts/DarkModeContext'

// Proveedor del contexto
export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Carga el estado inicial desde localStorage, por defecto es true
    const storedDarkMode = localStorage.getItem('darkMode')
    return storedDarkMode !== null ? storedDarkMode === 'true' : true
  })

  // Actualiza el DOM y localStorage cada vez que cambia el estado
  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  // Cambia el estado directamente
  const setDarkMode = (darkMode: boolean) => {
    setIsDarkMode(darkMode)
  }

  // Alterna entre activado y desactivado
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
