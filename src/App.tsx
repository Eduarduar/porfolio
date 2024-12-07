import { useEffect } from 'react'
import '@/assets/css/tailwind.css'
import '@/assets/css/custom.css'
import AppRoutes from '@/router/routes'
import { DarkModeProvider } from '@/providers/DarkModeProvider'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      AOS.init({
        offset: 0,
        duration: 1000, // Duración de las animaciones en milisegundos
        easing: 'ease-in-out', // Efecto de la animación
        once: true // Si la animación debe ejecutarse solo una vez
      })
    }
  }, [])

  return (
    <>
      <DarkModeProvider>
        <AppRoutes />
      </DarkModeProvider>
    </>
  )
}

export default App
