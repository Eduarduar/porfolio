import Lucide from '@/components/Base/Lucide'
import { useDarkMode } from '@/hooks/useDarkMode'

function ButtonDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <button
        className="py-4 px-2 sm:py-5 flex items-center gap-4 outline-none border-none text-black dark:text-slate-200"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <Lucide icon="Moon" /> : <Lucide icon="Sun" />}
      </button>
    </>
  )
}

export default ButtonDarkMode
