import Lucide from '@/components/Base/Lucide'

function About() {
  return (
    <section className="w-full" data-aos="fade-up" data-aos-delay="100">
      <header className="font-bold text-2xl text-[#a74bcc] dark:text-[#cf56ff] mb-6 flex flex-row items-center gap-3">
        <h2>My Experience</h2>
        <Lucide icon="FlaskConical" className="w-8 h-8 animate-wave" />
      </header>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Software Development Student • University of colima (FIE)
            </h2>
          </div>
          <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
            <li>Creation of complete components and user interfaces with different frameworks.</li>
            <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
              <li className="font-bold text-blue-600 dark:text-blue-400">React</li>
              <li className="font-bold text-green-600 dark:text-green-400">Vuejs</li>
            </ul>
            <li>
              Development of custom APIs with{' '}
              <span className="font-bold text-green-700 dark:text-green-500">
                Django REST Framework
              </span>
              .
            </li>
            <li>
              Creation of real-time chat with{' '}
              <span className="font-bold text-green-700 dark:text-green-500">Django Channels</span>{' '}
              / <span className="font-bold text-yellow-600 dark:text-yellow-400">Websockets</span>.
            </li>
            <li>
              Development of a video game with{' '}
              <span className="font-bold text-red-600 dark:text-red-400">Pygame</span> as a
              university project.
            </li>
            <li>
              Management of{' '}
              <span className="font-bold text-gray-700 dark:text-gray-400">Linux</span> and{' '}
              <span className="font-bold text-blue-700 dark:text-blue-500">Windows</span> operating
              systems.
            </li>
            <li>
              Management of relational and non-relational{' '}
              <span className="font-bold text-yellow-700 dark:text-yellow-500">databases</span> with{' '}
              <span className="font-bold text-green-700 dark:text-green-500">PostgreSQL</span>,{' '}
              <span className="font-bold text-blue-700 dark:text-blue-500">MySQL</span>,{' '}
              <span className="font-bold text-red-700 dark:text-red-500">SQLite</span>, among
              others.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
