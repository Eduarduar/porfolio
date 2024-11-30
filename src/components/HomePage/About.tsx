import Lucide from '@/components/Base/Lucide'
import Tippy from '@/components/Base/Tippy'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    setTimeout(() => {
      const about = document.getElementById('about')
      if (about) about.removeAttribute('data-aos')
    }, 2000)
  }, [])

  return (
    <section className="w-full " data-aos="fade-up" data-aos-delay="100" id="about">
      <header className="font-bold text-2xl text-[#a74bcc] dark:text-[#cf56ff] mb-6 flex flex-row items-center gap-3">
        <h2>My Experience</h2>
        <div className="py-2 px-2 flex items-center gap-4 outline-none border-none relative">
          <Tippy content="UwU">
            <Lucide icon="FlaskConical" className="w-8 h-8 animate-wave" />
          </Tippy>
          <span className="absolute dark:shadow-[0_0_40px_20px_rgba(181,77,225,0.5)] left-[24px] -z-100 transition-all"></span>
        </div>
      </header>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Software Development Student • University of colima (FIE)
            </h2>
          </div>
          <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
            <li>
              Designed and implemented attractive interfaces with{' '}
              <span className="font-bold text-blue-600 dark:text-blue-400">React</span> and{' '}
              <span className="font-bold text-green-600 dark:text-green-400">Vue.js</span> that
              improved user experience.
            </li>
            <li>
              Developed custom APIs with{' '}
              <span className="font-bold text-green-700 dark:text-green-500">
                Django REST Framework
              </span>
              , optimizing backend performance.
            </li>
            <li>
              Created real-time chat with{' '}
              <span className="font-bold text-green-700 dark:text-green-500">Django Channels</span>{' '}
              and <span className="font-bold text-yellow-600 dark:text-yellow-400">Websockets</span>
              , enhancing application communication.
            </li>
            <li>
              Developed a video game with{' '}
              <span className="font-bold text-red-600 dark:text-red-400">Pygame</span> as a
              university project, demonstrating skills in programming and game design.
            </li>
            <li>
              Managed operating systems{' '}
              <span className="font-bold text-gray-700 dark:text-gray-400">Linux</span> and{' '}
              <span className="font-bold text-blue-700 dark:text-blue-500">Windows</span>, ensuring
              stability and security of the development environment.
            </li>
            <li>
              Administered relational and non-relational databases such as{' '}
              <span className="font-bold text-green-700 dark:text-green-500">PostgreSQL</span>,{' '}
              <span className="font-bold text-blue-700 dark:text-blue-500">MySQL</span>, and{' '}
              <span className="font-bold text-red-700 dark:text-red-500">SQLite</span>, improving
              data handling efficiency.
            </li>
            <li>
              Developed web pages using{' '}
              <span className="font-bold text-purple-700 dark:text-purple-500">PHP</span>, enhancing
              server-side functionality.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
