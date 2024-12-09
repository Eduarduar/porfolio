import Tippy from '@/components/Base/Tippy'
import Lucide from '@/components/Base/Lucide'
import { ProjectInfo } from '@/stores/projectsInfo'

function CardProjects({ projects }: { projects: ProjectInfo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.repo || project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="block group border-2 bg-violet-500/10 hover:bg-violet-500/20 border-violet-500/10 hover:border-violet-500/50 dark:border-gray-800 dark:hover:border-gray-300/30 dark:bg-slate-800 rounded-xl hover:sm:shadow sm:hover:-translate-y-1 transition-all duration-300"
        >
          <article className="relative flex flex-col justify-between w-full py-6 px-7">
            <h2 className="text-gray-700 dark:text-gray-200 text-lg font-bold">{project.name}</h2>
            <p className="text-slate-800 dark:text-slate-200">{project.desc}</p>
            <div className="flex gap-1 mt-1.5 items-center">
              {project.techs?.map((tech) => (
                <Tippy key={tech.name} content={tech.name}>
                  <img src={tech.cdn} alt={tech.name} />
                </Tippy>
              ))}
            </div>
            <div className="absolute grid place-items-center right-2 top-2 bg-white/50 dark:bg-slate-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-all">
              <Lucide icon="ArrowUpRight" className="text-gray-800 dark:text-gray-50 text-2xl" />
            </div>
          </article>
        </a>
      ))}
    </div>
  )
}

export default CardProjects
