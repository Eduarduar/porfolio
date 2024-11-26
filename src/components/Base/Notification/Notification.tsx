import React, { useEffect, useRef } from 'react'
import Toastify, { Options } from 'toastify-js'
import '@/assets/css/vendors/toastify.css'

interface NotificationProps {
  options?: Options
  refKey?: string
  className?: string
  children: React.ReactNode
  bindNotification?: (el: NotificationElement) => void
}

export interface NotificationElement extends HTMLDivElement {
  toastify: ReturnType<typeof Toastify>
  showToast: () => void
  hideToast: () => void
}

const Notification: React.FC<NotificationProps> = ({
  options = {},
  refKey,
  className,
  children,
  bindNotification
}) => {
  const toastifyRef = useRef<NotificationElement | null>(null)
  const toastifyClass = `_${Math.random().toString(36).substr(2, 9)}`

  const init = (el: NotificationElement) => {
    el.showToast = () => {
      const clonedEl = el.cloneNode(true) as NotificationElement
      clonedEl.classList.remove('hidden')
      clonedEl.classList.add(toastifyClass)
      clonedEl.toastify = Toastify({
        duration: -1,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        ...options,
        node: clonedEl
      })
      clonedEl.toastify.showToast()
      clonedEl.querySelectorAll("[data-dismiss='notification']").forEach((dismissEl) => {
        dismissEl.addEventListener('click', () => {
          clonedEl.toastify.hideToast()
        })
      })

      el.hideToast = () => {
        document.querySelectorAll(`.${toastifyClass}`).forEach((toastEl) => {
          ;(toastEl as NotificationElement).toastify.hideToast()
        })
      }
    }
  }

  const reInit = (el: NotificationElement) => {
    const wrapperEl = document.querySelectorAll(`.${toastifyClass}`)[0]
    if (wrapperEl) {
      wrapperEl.innerHTML = el.innerHTML
    }
  }

  useEffect(() => {
    const el = toastifyRef.current
    if (el) {
      init(el)
      if (refKey && bindNotification) {
        bindNotification(el)
      }
    }

    return () => {
      if (el) reInit(el)
    }
  }, [options, refKey, bindNotification])

  return (
    <div
      ref={toastifyRef}
      className={`hidden py-5 pl-5 bg-white border rounded-lg shadow-xl pr-14 border-slate-200/60 dark:bg-darkmode-600 dark:text-slate-300 dark:border-darkmode-600 ${className}`}
    >
      {children}
    </div>
  )
}

export default Notification
