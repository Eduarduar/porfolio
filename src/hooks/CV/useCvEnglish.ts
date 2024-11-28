import { useState } from 'react'
import { getCVEnglish } from '@/services/CVEnglish'

export function useCVEnglish() {
  const [loadingCVEnglish, setLoadingCVEnglish] = useState(false)
  const [errorCVEnglish, setErrorCVEnglish] = useState('')

  const loadCVEnglish = async () => {
    setLoadingCVEnglish(true)
    setErrorCVEnglish('')

    try {
      const blob = await getCVEnglish()

      // Crear una URL temporal para el blob
      const url = window.URL.createObjectURL(blob)

      // Crear un elemento <a> temporal para iniciar la descarga
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Arcega_Rodriguez_Eduardo_CV.pdf') // Nombre del archivo descargado

      // Hacer clic en el enlace para iniciar la descarga
      link.click()

      // Liberar la URL del objeto
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error)
      setErrorCVEnglish('error exporting to ')
    } finally {
      setLoadingCVEnglish(false)
    }
  }

  return {
    loadCVEnglish,
    loadingCVEnglish,
    errorCVEnglish
  }
}
