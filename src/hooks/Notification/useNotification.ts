import { useRef } from 'react'
import { NotificationElement } from '@/components/Base/Notification/Notification'

const useNotification = () => {
  const notificationRef = useRef<NotificationElement | null>(null)

  const bindNotification = (el: NotificationElement) => {
    notificationRef.current = el
  }

  const showNotification = () => {
    notificationRef.current?.showToast()
  }

  const hideNotification = () => {
    notificationRef.current?.hideToast()
  }

  return { bindNotification, showNotification, hideNotification }
}

export default useNotification
