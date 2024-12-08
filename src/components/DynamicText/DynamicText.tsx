import React, { useState, useEffect, useCallback, useRef } from 'react'

interface DynamicTextProps {
  phrases: string[]
  showOnlyFirstWord?: boolean // Prop opcional
}

const DynamicText: React.FC<DynamicTextProps> = ({ phrases, showOnlyFirstWord = false }) => {
  const [dynamicText, setDynamicText] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false) // Estado para rastrear visibilidad
  const ref = useRef<HTMLDivElement>(null) // Referencia al componente

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

  // Si `showOnlyFirstWord` es verdadero, muestra toda la primera frase y detiene el resto
  useEffect(() => {
    if (showOnlyFirstWord) {
      setDynamicText(phrases[0]) // Mostrar la primera frase completa
    }
  }, [phrases, showOnlyFirstWord])

  // Función que maneja el efecto de escritura y borrado
  useEffect(() => {
    if (!isVisible) return // Detener el comportamiento si `showOnlyFirstWord` es true o el componente no es visible

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
        if (showOnlyFirstWord) return // Detener la animación si `showOnlyFirstWord` es true
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
    shuffleArray,
    showOnlyFirstWord,
    isVisible
  ])

  // Función para aparecer y desaparecer el | cada segundo
  useEffect(() => {
    if (!isVisible) return // Detener el comportamiento si `showOnlyFirstWord` es true o el componente no es visible

    const interval = setInterval(() => {
      setPuntero(!puntero)
    }, 300)

    return () => clearInterval(interval)
  }, [puntero, showOnlyFirstWord, isVisible])

  // Configurar Intersection Observer para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting) // Actualizar estado de visibilidad
      },
      { threshold: 0.1 } // Detectar cuando el 10% del elemento es visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="text-slate-600 dark:text-slate-100">
      {dynamicText}
      <span
        className={`text-slate-600 dark:text-slate-100 transition-all duration-200 ${puntero ? 'opacity-0' : 'opacity-100'}`}
      >
        |
      </span>
    </div>
  )
}

export default DynamicText
