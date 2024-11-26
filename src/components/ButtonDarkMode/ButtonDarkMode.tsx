import Lucide from '@/components/Base/Lucide'
import { useDarkMode } from '@/hooks/useDarkMode'

function ButtonDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          className="py-2 px-2 flex items-center gap-4 outline-none border-none text-black dark:text-slate-200 relative group"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Lucide icon="Moon" /> : <Lucide icon="Sun" />}

          <span className="absolute group-hover:dark:shadow-[0_0_10px_10px_rgb(255,255,255,0.2)] left-[18px] -z-100 transition-all"></span>
        </button>
      </div>
    </>
  )
}

export default ButtonDarkMode
