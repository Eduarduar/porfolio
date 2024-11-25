import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx' // Importa el componente principal de tu aplicación

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
