import { useEffect } from 'react'
import '@/assets/css/tailwind.css'
import '@/assets/css/custom.css'
import AppRoutes from '@/router/routes'
import { DarkModeProvider } from '@/providers/DarkModeProvider'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    const handleResize = () => {
      AOS.refreshHard() // Refresca AOS cuando cambia el tamaño de la pantalla
    }

    // Inicializar AOS solo si el ancho inicial es mayor a 768px
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    })

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize)

    // Limpieza del evento
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <DarkModeProvider>
      <AppRoutes />
    </DarkModeProvider>
  )
}

export default App
