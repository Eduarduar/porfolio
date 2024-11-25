import Button from '@/components/Base/Button'
import Lucide from '@/components/Base/Lucide'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  return (
    <>
      <section className="flex flex-col sm:flex-row items-center gap-5">
        <div className="relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-800/80 shadow-lg rounded-full overflow-hidden">
          <span className="box-border block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 absolute inset-0">
            <img
              src={t('userInfo.image')}
              alt="user image"
              className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-h-full min-w-full max-h-full max-w-full object-cover rounded-full drop-shadow-2xl select-none"
            />
          </span>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex flex-col items-left gap-2">
            <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100">
              {t('userInfo.firstName')} {t('userInfo.lastName')}
            </h1>
            <p className="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl pr-10">
              {t('hero.description')}
            </p>
          </div>
          <div className="flex gap-3">
            {t('userInfo.workStatus') && (
              <Button
                as={'a'}
                variant="soft-success"
                size="sm"
                className="dark:text-slate-200 text-green-800 flex flex-row gap-2 cursor-default select-none border-none"
              >
                Looking for job
                <Lucide icon="Radar" />
              </Button>
            )}

            <Button
              as={'a'}
              target="_blank"
              href={t('userInfo.cv')}
              variant="soft-primary"
              size="sm"
              className="dark:text-slate-200 text-blue-800 flex flex-row gap-2 cursor-pointer select-none border-none"
            >
              Dowload CV
              <Lucide icon="File" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
