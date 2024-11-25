import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/views/Home'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // Importa el estilo predeterminado

// Configuración opcional
NProgress.configure({ showSpinner: false, speed: 500 })

import { ReactNode } from 'react'

interface RouteChangeHandlerProps {
  children: ReactNode
}

const RouteChangeHandler: React.FC<RouteChangeHandlerProps> = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    // Inicia NProgress al cambiar de ruta
    NProgress.start()

    // Finaliza la barra después de un breve tiempo
    const timeout = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => {
      clearTimeout(timeout)
      NProgress.done() // Asegura que se detenga si el componente se desmonta
    }
  }, [location])

  return <>{children}</> // Renderiza el contenido de las rutas
}

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <RouteChangeHandler>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </RouteChangeHandler>
    </Router>
  )
}

export default AppRoutes
