import { useEffect } from 'react'
import Notification from '@/components/Base/Notification'
import { useNotification } from '@/components/Base/Notification'
import Lucide from '@/components/Base/Lucide'

export function NotificationDevelop() {
  const { bindNotification, showNotification, hideNotification } = useNotification() // mostrar notificación cuando se monta el componente
  useEffect(() => {
    showNotification()
    return () => {
      hideNotification()
    }
  }, [showNotification, hideNotification])
  return (
    <Notification
      options={{ duration: 100000 }}
      refKey="example-notification"
      className="flex flex-col sm:flex-row gap-5"
      bindNotification={bindNotification}
    >
      <Lucide icon="AlertCircle" className="w-6 h-6 text-warning dark:text-yellow-500" />
      <div className="ml-4 mr-4">
        <div className="font-medium dark:text-slate-200 text-slate-800">Page under development</div>
        <div className="mt-1 text-slate-500 max-w-[400px] text-wrap dark:text-slate-400">
          If you see this message, it is because the page is under development. Sorry for the
          inconvenience.
        </div>
        <div className="font-medium flex mt-1.5">
          <a
            className="text-blue-500 dark:text-blue-400 hover:underline"
            href="https://github.com/Eduarduar/portfolio"
            target="_blank"
          >
            Check changes
          </a>
        </div>
      </div>
    </Notification>
  )
}
