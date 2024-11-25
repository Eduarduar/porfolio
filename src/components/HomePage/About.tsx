import Lucide from '@/components/Base/Lucide'

function About() {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        <h2>Experience</h2>
        <Lucide icon="BriefcaseBusiness" />
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
              <li>React</li>
              <li>Vuejs</li>
            </ul>
            <li>Development of custom APIs with Django REST Framework.</li>
            <li>Creation of real-time chat with Django Channels / Websockets.</li>
            <li>Development of a video game with Pygame as a university project.</li>
            <li>Management of Linux and Windows operating systems.</li>
            <li>Management of relational and non-relational databases.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
