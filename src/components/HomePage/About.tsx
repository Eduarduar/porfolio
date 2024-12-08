import Lucide from '@/components/Base/Lucide'
import { useState } from 'react'

function About() {
  const [show, setShow] = useState(true)

  return (
    <>
      <section className={`w-full flex flex-col gap-2 transition-all duration-1000`} id="about">
        {/* Header */}
        <header className="relative text-2xl ml-5">
          <button
            onClick={() => setShow(!show)}
            className="absolute -left-[.9em] h-full transition duration-75 rotate-90"
          >
            <Lucide
              icon="ChevronDown"
              className={`dark:text-[#a74bcc] text-black transform transition-all duration-1000 w-[1em] h-[1em] stroke-5 ${
                show ? '-rotate-90' : '-rotate-180'
              }`}
            />
          </button>
          <span className="text-gray-500 dark:text-gray-400">{'<'}</span>
          <span className="text-[#a74bcc] dark:text-[#a74bcc] hidden sm:inline-flex ">{`MyExperience\u00A0`}</span>
          <span className="text-[#a74bcc] dark:text-[#a74bcc] inline-flex sm:hidden">{`MyExperience`}</span>
          <span className="text-gray-800 dark:text-gray-400 hidden sm:inline-flex">
            {'userData={eduarduar.experience}'}
          </span>
          <span className="text-gray-500 dark:text-gray-400">{'>'}</span>
        </header>

        {/* Collapsible Content */}
        <div className="h-full relative">
          <div className="absolute left-[.6em] h-[calc(100%-15px)] w-px transition duration-1000 border border-dark dark:border-[#a74bcc] "></div>
          <main
            className={`relative overflow-hidden transition-all duration-1000 pl-5 ${
              show ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-10 text-gray-700 dark:text-gray-300 text-lg">
              <div className="flex flex-col gap-5">
                {/* Title */}
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  Software Engineering Student • University of Colima
                  <br />
                  Faculty of Electromechanical Engineering (FIE)
                </h2>

                {/* Experience List */}
                <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                  <li>
                    Designed and implemented attractive interfaces with{' '}
                    <span className="font-bold text-blue-600 dark:text-blue-400">React</span> and{' '}
                    <span className="font-bold text-green-600 dark:text-green-400">Vue.js</span>{' '}
                    that improved user experience.
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
                    <span className="font-bold text-green-700 dark:text-green-500">
                      Django Channels
                    </span>{' '}
                    and{' '}
                    <span className="font-bold text-yellow-600 dark:text-yellow-400">
                      Websockets
                    </span>
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
                    <span className="font-bold text-blue-700 dark:text-blue-500">Windows</span>,
                    ensuring stability and security of the development environment.
                  </li>
                  <li>
                    Administered relational and non-relational databases such as{' '}
                    <span className="font-bold text-green-700 dark:text-green-500">PostgreSQL</span>
                    , <span className="font-bold text-blue-700 dark:text-blue-500">MySQL</span>, and{' '}
                    <span className="font-bold text-red-700 dark:text-red-500">SQLite</span>,
                    improving data handling efficiency.
                  </li>
                  <li>
                    Developed web pages using{' '}
                    <span className="font-bold text-purple-700 dark:text-purple-500">PHP</span>,
                    enhancing server-side functionality.
                  </li>
                </ul>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="text-2xl ml-5">
            <span className="text-gray-500 dark:text-gray-400">{'</'}</span>
            <span className="text-[#a74bcc] dark:text-[#a74bcc]">{`MyExperience`}</span>
            <span className="text-gray-500 dark:text-gray-400">{'>'}</span>
          </footer>
        </div>
      </section>
    </>
  )
}

export default About
