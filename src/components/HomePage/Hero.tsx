import { useState, useEffect } from 'react'
declare global {
  interface Window {
    LI: any
  }
}
import Button from '@/components/Base/Button'
import Lucide from '@/components/Base/Lucide'
import DynamicText from '@/components/DynamicText'
import LoadingIcon from '@/components/Base/LoadingIcon'
import { userInfo } from '@/stores/userInfo'
import { socialInfo } from '@/stores/socialInfo'
import { Menu } from '@/components/Base/Headless'
import { useCVSpanish } from '@/hooks/CV/useCvSpanish'
import { useCVEnglish } from '@/hooks/CV/useCvEnglish'
import { useDarkMode } from '@/hooks/useDarkMode'
import Tippy from '@/components/Base/Tippy'

function Hero() {
  const { loadCVSpanish, loadingCVSpanish } = useCVSpanish()
  const { loadCVEnglish, loadingCVEnglish } = useCVEnglish()
  const [tooltip, setTooltip] = useState(false)

  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    // Cargar el script de LinkedIn dinámicamente
    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    script.onload = () => {
      // Forzar la inicialización después de cargar el script
      if (window.LI) {
        window.LI.parse()
      }
    }
    document.body.appendChild(script)

    // Eliminar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      className=" relative flex flex-col sm:flex-row items-center gap-5"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <div className="relative min-w-44 min-h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-800/80 shadow-lg rounded-full overflow-hidden transition-all animate-neon-flicker">
        <span className="box-border block w-auto h-auto absolute inset-0">
          <img
            src={userInfo.image}
            alt={`${userInfo.firstName} ${userInfo.lastName}'s profile`}
            className="absolute inset-0 w-full h-full object-cover rounded-full drop-shadow-2xl"
          />
        </span>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3">
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start relative">
          {/* Contenedor del Nombre con Tooltip */}
          <div
            className="relative group"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
          >
            <div className="text-2xl sm:text-4xl font-bold text-slate-600 w-full dark:text-slate-100 transform transition-all hover:scale-95 cursor-pointer ">
              <span>Eduardo Arcega Rodriguez</span>
            </div>
            <div
              className={`badge-base LI-profile-badge absolute left-1/2 -translate-x-1/2 !max-w-[250px] overflow-hidden !max-h-[260px] text-sm rounded-md z-[1000] m-0 p-0 transition-opacity duration-200 ${!isDarkMode && tooltip ? 'opacity-100 block ' : 'opacity-0 -translate-y-[30rem]'}`}
              data-locale="es_ES"
              data-size="medium"
              data-theme="light"
              data-type="VERTICAL"
              data-vanity="eduarduar"
              data-version="v1"
            ></div>
            <div
              className={`badge-base LI-profile-badge absolute left-1/2 -translate-x-1/2 !max-w-[250px] overflow-hidden !max-h-[260px] text-sm rounded-md z-[1000] m-0 p-0 transition-opacity duration-200 ${isDarkMode && tooltip ? 'opacity-100 block ' : 'opacity-0 -translate-y-[30rem]'}`}
              data-locale="es_ES"
              data-size="medium"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="eduarduar"
              data-version="v1"
            ></div>
          </div>
          {/* Descripción */}
          <div className="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl w-fit min-h-[56px] flex flex-row text-center sm:text-start items-center justify-center pr-5">
            <DynamicText phrases={userInfo.descHero} />
          </div>
        </div>

        <div className="flex gap-3">
          {userInfo.statusWork && (
            <span
              aria-label="Looking for job"
              className={`transition duration-200 border justify-center rounded-md font-medium text-xs py-1.5 px-2 bg-success border-success dark:bg-opacity-20 border-opacity-5 dark:border-success dark:border-opacity-20 shadow-md flex items-center gap-2 text-slate-200 cursor-default`}
            >
              Looking for job
              <Lucide icon="Radar" />
            </span>
          )}
          <Menu className="h-5">
            <Menu.Button>
              <Button
                elevated
                variant={isDarkMode ? 'soft-primary' : 'primary'}
                size="sm"
                aria-label="Download CV"
                className="flex items-center gap-2 dark:text-slate-200 dark:border-none select-none"
              >
                Download CV
                {!loadingCVEnglish && !loadingCVSpanish ? (
                  <Lucide icon="File" />
                ) : (
                  <LoadingIcon icon="tail-spin" />
                )}
              </Button>
            </Menu.Button>
            <Menu.Items className="w-40 dark:bg-slate-900/80 bg-slate-200/80 rounded-md shadow-lg">
              <Menu.Item
                className="flex flex-row gap-2 items-center justify-around text-slate-800 dark:text-slate-200 dark:bg-slate-900/50 bg-slate-200/50 hover:bg-slate-400/50"
                onClick={loadCVEnglish}
              >
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg"
                  alt="United States flag"
                  className="w-5 h-5"
                />
                <span>English</span>
              </Menu.Item>
              <Menu.Item
                className="flex flex-row gap-2 items-center justify-around text-slate-800 dark:text-slate-200 dark:bg-slate-900/50 bg-slate-200/50 hover:bg-slate-400/50"
                onClick={loadCVSpanish}
              >
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1f8.svg"
                  className="w-5 h-5"
                  alt="Spain flag"
                />
                <span>Spanish</span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="flex flex-row gap-2">
          {socialInfo.map((social) => (
            <Tippy key={social.name} content={social.name} options={{ placement: 'bottom' }}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:text-slate-200"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            </Tippy>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
