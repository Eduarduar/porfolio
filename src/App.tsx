// import { useTranslation } from 'react-i18next';
import '@/assets/css/tailwind.css'
import '@/assets/css/custom.css'
import AppRoutes from '@/router/routes'
import { DarkModeProvider } from '@/providers/DarkModeProvider'

function App() {
  // const { t } = useTranslation();

  return (
    <>
      <DarkModeProvider>
        <AppRoutes />
      </DarkModeProvider>
    </>
  )
}

export default App
