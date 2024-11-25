import { useContext } from 'react'
import { DarkModeContext } from '@/contexts/DarkModeContext'

// Hook personalizado para usar el contexto
export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode debe ser usado dentro de DarkModeProvider')
  }
  return context
}
