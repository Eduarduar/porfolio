import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx' // Importa el componente principal de tu aplicación
import '@/assets/config/i18n.ts' // Inicializa i18n (asegúrate de que el path sea correcto)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
