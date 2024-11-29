import React, { useEffect, ReactNode, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import NProgress from 'nprogress'
import LoadingPage from '@/views/LoadingPage'
import 'nprogress/nprogress.css' // Importa el estilo predeterminado
import { certificationsInfo } from '@/stores/certificationsInfo'

// Configuración opcional
NProgress.configure({ showSpinner: false, speed: 500 })

const Home = lazy(() => import('@/views/Home'))
const PDFRedirect = lazy(() => import('@/views/PDFViewer'))
const NotFound = lazy(() => import('@/views/NotFound'))

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
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {certificationsInfo.map((certification) => (
              <Route
                key={certification.name}
                path={certification.pagePath}
                element={<PDFRedirect pdfUrl={certification.path} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </RouteChangeHandler>
    </Router>
  )
}

export default AppRoutes
