import { createContext } from 'react'

// Define el contexto
export const DarkModeContext = createContext<{
  isDarkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  toggleDarkMode: () => void
} | null>(null)
