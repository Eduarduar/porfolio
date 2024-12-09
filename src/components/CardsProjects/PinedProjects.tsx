import Tippy from '@/components/Base/Tippy'
import Button from '@/components/Base/Button'
import Lucide from '@/components/Base/Lucide'
import { ProjectInfo } from '@/stores/projectsInfo'

function PinedProjects({ projects }: { projects: ProjectInfo[] }) {
  return (
    <div className="grid gap-10">
      {projects.map((project) => (
        <article key={project.name} className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
          <a href={project.live || project.repo} target="_blank" rel="noopener noreferrer">
            <div className="relative rounded-xl overflow-hidden flex bg-[rgba(181,77,225,0.3)] dark:bg-[rgba(181,77,225,0.1)]">
              <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 relative max-w-full">
                <span className="box-border block w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 max-w-full relative">
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
                    alt="background"
                    className="block max-w-full w-auto h-auto bg-none opacity-100 border-0 m-0 p-0"
                  />
                </span>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Project image for ${project.name}`}
                    className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-fit min-h-full max-w-full max-h-full rounded-lg duration-500 transition-all translate-x-7 translate-y-7 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                )}
              </span>
            </div>
          </a>
          <div className="flex flex-col gap-2.5 justify-center">
            <h3 className="font-bold text-3xl text-slate-800 dark:text-white">{project.name}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">{project.desc}</p>
            <div className="flex gap-2 items-center mb-1">
              {project.techs?.map((tech) => (
                <Tippy key={tech.name} content={tech.name}>
                  <img src={tech.cdn} alt={tech.name} />
                </Tippy>
              ))}
            </div>
            <div className="flex justify-start gap-3">
              {project.repo && (
                <Button
                  as="a"
                  elevated
                  href={project.repo}
                  target="_blank"
                  variant="soft-secondary"
                  className="flex gap-3 sm:gap-0 hover:gap-3 group/buttonLive text-slate-900 dark:text-slate-200 border-none bg-gray-400 font-bold"
                >
                  <span className="sm:w-0 sm:overflow-hidden sm:group-hover/buttonLive:w-[50px] transition-all">
                    GitHub
                  </span>
                  <Lucide icon="Github" className="w-6 h-6" />
                </Button>
              )}
              {project.live && (
                <Button
                  elevated
                  as="a"
                  href={project.live}
                  target="_blank"
                  variant="soft-primary"
                  className="flex gap-3 sm:gap-0 hover:gap-3 group/buttonLive dark:text-slate-200 border-none font-bold"
                >
                  <span className="sm:w-0 sm:overflow-hidden sm:group-hover/buttonLive:w-[50px] transition-all">
                    Live
                  </span>
                  <Lucide icon="ExternalLink" className="w-6 h-6" />
                </Button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PinedProjects
