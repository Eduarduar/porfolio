import { useState } from 'react'
import { getCVSpanish } from '@/services/CVSpanish'

export function useCVSpanish() {
  const [loadingCVSpanish, setLoadingCVSpanish] = useState(false)
  const [errorCVSpanish, setErrorCVSpanish] = useState('')

  const loadCVSpanish = async () => {
    setLoadingCVSpanish(true)
    setErrorCVSpanish('')

    try {
      const blob = await getCVSpanish()

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
      setErrorCVSpanish('Error al exportar a Excel')
    } finally {
      setLoadingCVSpanish(false)
    }
  }

  return {
    loadCVSpanish,
    loadingCVSpanish,
    errorCVSpanish
  }
}
