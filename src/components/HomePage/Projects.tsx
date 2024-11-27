import LoadingIcon from '@/components/Base/LoadingIcon'
import Lucide from '@/components/Base/Lucide'
import Button from '@/components/Base/Button'
import Tippy from '@/components/Base/Tippy'
import { projectsInfo } from '@/stores/projectsInfo'

function Projects() {
  return (
    <section className="w-full" data-aos="fade-up" data-aos-delay="300">
      <header className="font-bold text-2xl text-[#a74bcc] dark:text-[#cf56ff] mb-6 flex flex-row items-center gap-3">
        <h2>My Projects</h2>
        <div className="py-2 px-2 flex items-center gap-4 outline-none border-none relative">
          <LoadingIcon icon="grid" className="w-8 h-8" />
          <span className="absolute dark:shadow-[0_0_40px_20px_rgba(181,77,225,0.5)] left-[18px] -z-100 transition-all"></span>
        </div>
      </header>

      <div className="flex flex-col gap-10">
        {/* Proyectos Pineados */}
        <div className="grid gap-10">
          {projectsInfo
            .filter((project) => project.pined)
            .map((project) => (
              <article key={project.name} className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
                <a href={project.live || project.repo} target="_blank" rel="noopener noreferrer">
                  <div className="relative rounded-xl overflow-hidden flex bg-[rgba(181,77,225,0.2)] dark:bg-[rgba(181,77,225,0.1)]">
                    <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 relative max-w-full">
                      <span className="box-border block w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 max-w-full relative">
                        {/* Imagen del efecto */}
                        <img
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
                          alt="background"
                          className="block max-w-full w-auto h-auto bg-none opacity-100 border-0 m-0 p-0"
                        />
                      </span>
                      {/* Imagen real del proyecto */}
                      {project.image && (
                        <img
                          src={project.image}
                          alt={`Project image for ${project.name}`}
                          className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-fit min-h-full max-w-full max-h-full rounded-lg duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
                        />
                      )}
                    </span>
                  </div>
                </a>
                <div className="flex flex-col gap-2.5 justify-center">
                  <h3 className="font-bold text-3xl text-slate-800 dark:text-white">
                    {project.name}
                  </h3>
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
                        href={project.repo}
                        target="_blank"
                        variant="soft-secondary"
                        className="flex hover:gap-3 group/buttonLive dark:text-slate-200 border-none bg-gray-400"
                      >
                        <span className="w-0 overflow-hidden group-hover/buttonLive:w-[50px] transition-all">
                          GitHub
                        </span>
                        <Lucide icon="Github" className="w-6 h-6" />
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        as="a"
                        href={project.live}
                        target="_blank"
                        variant="soft-primary"
                        className="flex hover:gap-3 group/buttonLive dark:text-slate-200 border-none"
                      >
                        <span className="w-0 overflow-hidden group-hover/buttonLive:w-[40px] transition-all">
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

        {/* Proyectos No Pineados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">
          {projectsInfo
            .filter((project) => !project.pined)
            .map((project) => (
              <a
                key={project.name}
                href={project.repo || project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-2 border-gray-100 hover:border-white dark:border-gray-800 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
              >
                <article className="relative flex flex-col justify-between w-full py-6 px-7">
                  <h2 className="text-gray-700 dark:text-gray-200 text-lg font-bold">
                    {project.name}
                  </h2>
                  <p className="text-slate-400 dark:text-slate-200">{project.desc}</p>
                  <div className="flex gap-1 mt-1.5 items-center">
                    {project.techs?.map((tech) => (
                      <Tippy key={tech.name} content={tech.name}>
                        <img src={tech.cdn} alt={tech.name} />
                      </Tippy>
                    ))}
                  </div>
                  <div className="absolute grid place-items-center right-2 top-2 bg-slate-200 dark:bg-slate-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-all">
                    <Lucide
                      icon="ArrowUpRight"
                      className="text-gray-800 dark:text-gray-50 text-2xl"
                    />
                  </div>
                </article>
              </a>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
