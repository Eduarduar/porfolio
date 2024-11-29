import Button from '@/components/Base/Button'
import Lucide from '@/components/Base/Lucide'
import DynamicText from '@/components/DynamicText'
import { userInfo } from '@/stores/userInfo'
import { socialInfo } from '@/stores/socialInfo'
import { Menu } from '@/components/Base/Headless'
import { useCVSpanish } from '@/hooks/CV/useCvSpanish'
import { useCVEnglish } from '@/hooks/CV/useCvEnglish'
import Tippy from '../Base/Tippy'

function Hero() {
  const { loadCVSpanish } = useCVSpanish()
  const { loadCVEnglish } = useCVEnglish()
  return (
    <section
      className="flex flex-col sm:flex-row items-center gap-5"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <div className="relative min-w-44 min-h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-800/80 shadow-lg rounded-full overflow-hidden transition-all animate-neon-flicker">
        <span className="box-border block w-auto h-auto absolute inset-0">
          <img
            src={userInfo.image}
            alt={`${userInfo.name}'s profile`}
            className="absolute inset-0 w-full h-full object-cover rounded-full drop-shadow-2xl"
          />
        </span>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3">
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
          <div
            className="badge-base LI-profile-badge"
            data-locale="es_ES"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="eduarduar"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link text-2xl sm:text-4xl font-bold text-slate-600 dark:text-slate-100"
              href="https://mx.linkedin.com/in/eduarduar?trk=profile-badge"
              target="_blank"
            >
              {userInfo.name}
            </a>
          </div>
          <div className="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl w-fit min-h-[56px] flex flex-row text-center sm:text-start items-center justify-center pr-5">
            <DynamicText phrases={userInfo.descHero} />
          </div>
        </div>
        <div className="flex gap-3">
          {userInfo.statusWork && (
            <Button
              as="button"
              elevated
              variant="soft-success"
              size="sm"
              aria-label="Looking for job"
              className="flex items-center gap-2 dark:text-slate-200"
            >
              Looking for job
              <Lucide icon="Radar" />
            </Button>
          )}

          <Menu className="h-5">
            <Menu.Button>
              <Button
                elevated
                variant="soft-primary"
                size="sm"
                aria-label="Download CV"
                className="flex items-center gap-2 dark:text-slate-200"
              >
                Download CV
                <Lucide icon="File" />
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
