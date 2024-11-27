import React, { useEffect, useRef, useState } from 'react'
import '@/assets/css/vendors/tippy.css'
import tippy, { roundArrow, animateFill as animateFillPlugin, Props } from 'tippy.js'

interface TippyProps {
  refKey?: string
  content: string
  disable?: boolean
  as?: keyof JSX.IntrinsicElements
  options?: Partial<Props>
  children: React.ReactNode
}

const Tippy: React.FC<TippyProps> = ({
  content,
  disable = false,
  as: Component = 'span',
  options,
  children
}) => {
  const tippyRef = useRef<HTMLElement | null>(null)
  const [tippyInstance, setTippyInstance] = useState<any>(null)

  // Initialize tippy
  const initTippy = (el: HTMLElement) => {
    if (el) {
      const instance = tippy(el, {
        content,
        arrow: roundArrow,
        animateFill: false,
        animation: 'shift-away',
        plugins: [animateFillPlugin],
        popperOptions: {
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                rootBoundary: 'viewport'
              }
            }
          ]
        },
        ...options
      })
      setTippyInstance(instance)
    }
  }

  // Update tooltip content dynamically
  useEffect(() => {
    if (tippyInstance) {
      tippyInstance.setContent(content)
    }
  }, [content, tippyInstance])

  // Enable/disable tooltip
  useEffect(() => {
    if (tippyInstance) {
      disable ? tippyInstance.disable() : tippyInstance.enable()
    }
  }, [disable, tippyInstance])

  // Initialize tippy on mount
  useEffect(() => {
    if (tippyRef.current) {
      initTippy(tippyRef.current)
    }
    return () => {
      // Cleanup on unmount
      tippyInstance?.destroy()
    }
  }, [])

  return React.createElement(Component, { ref: tippyRef, className: 'cursor-pointer' }, children)
}

export default Tippy
