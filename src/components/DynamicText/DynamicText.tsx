import React, { useState, useEffect, useCallback } from 'react'

interface DynamicTextProps {
  phrases: string[]
}

const DynamicText: React.FC<DynamicTextProps> = ({ phrases }) => {
  const [dynamicText, setDynamicText] = useState<string>('')
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false)

  // Variables internas para controlar la animación
  const [shuffledPhrases, setShuffledPhrases] = useState<string[]>([])
  const [phraseIndex, setPhraseIndex] = useState<number>(0)
  const [letterIndex, setLetterIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [isInitial, setIsInitial] = useState<boolean>(true)
  const [puntero, setPuntero] = useState<boolean>(true)

  const typingSpeed = 50 // Velocidad de escritura en ms
  const delayBetweenPhrases = 1000 // Tiempo de espera entre frases

  // Función para barajar las frases
  const shuffleArray = useCallback((array: string[]): string[] => {
    const shuffled = array.slice() // Crear una copia del array original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [])

  // Función que maneja el efecto de escritura y borrado
  useEffect(() => {
    if (!isLgScreen) return

    const typeEffect = (): void => {
      const currentPhrase = isInitial
        ? phrases[0] // Primera frase (sin barajar)
        : shuffledPhrases[phraseIndex]

      if (isDeleting) {
        setDynamicText(currentPhrase.substring(0, letterIndex - 1))
        setLetterIndex(letterIndex - 1)
      } else {
        setDynamicText(currentPhrase.substring(0, letterIndex + 1))
        setLetterIndex(letterIndex + 1)
      }

      if (!isDeleting && letterIndex === currentPhrase.length) {
        setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenPhrases)
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false)

        if (isInitial) {
          // Al eliminar la primera frase, activar el modo aleatorio
          setIsInitial(false)
          setShuffledPhrases(shuffleArray(phrases))
          setPhraseIndex(0)
        } else {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % shuffledPhrases.length)
        }
      }
    }

    const timeout = setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [
    isDeleting,
    letterIndex,
    phrases,
    shuffledPhrases,
    phraseIndex,
    isInitial,
    isLgScreen,
    shuffleArray
  ])

  // Función para manejar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = (): void => {
      const isLargeScreen = window.innerWidth >= 1024
      setIsLgScreen(isLargeScreen)
    }

    handleResize() // Verificar el tamaño de pantalla al montar
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Funcion para aparecer y desaparecer el | cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setPuntero(!puntero)
    }, 300)

    return () => clearInterval(interval)
  }, [puntero])

  return (
    isLgScreen && (
      <div className="dynamic-text">
        {dynamicText}
        {puntero && <span className="text-slate-600 dark:text-slate-100">|</span>}
      </div>
    )
  )
}

export default DynamicText
