import LoadingIcon from '@/components/Base/LoadingIcon'
import Tippy from '@/components/Base/Tippy'
import DynamicText from '@/components/DynamicText'
import { projectsInfo } from '@/stores/projectsInfo'
import { PinedProjects, CardProjects } from '@/components/CardsProjects'

function Projects() {
  const pineddProjects = projectsInfo.filter(
    (project) => project.pined && project.image && project.name !== 'This portfolio'
  )
  const UnpinedProjects = projectsInfo.filter(
    (project) => !project.pined && project.repo && project.name !== 'This portfolio'
  )

  return (
    <section className="w-full" id="projects">
      <header className="flex flex-col mb-6">
        <div className="font-bold text-2xl text-[#a74bcc] dark:text-[#cf56ff] flex flex-row items-center gap-3">
          <h2>My Projects</h2>
          <div className="py-2 px-2 flex items-center gap-4 outline-none border-none relative">
            <Tippy content="UwU">
              <LoadingIcon icon="grid" className="w-8 h-8" />
            </Tippy>
            <span className="absolute dark:shadow-[0_0_40px_20px_rgba(181,77,225,0.5)] left-[18px] -z-100 transition-all"></span>
          </div>
        </div>
        <DynamicText
          phrases={[
            'Projects I have contributed to',
            'My personal projects',
            'Collaborative projects',
            'Open source contributions',
            'Side projects'
          ]}
        />
      </header>

      <div className="flex flex-col gap-10">
        <PinedProjects projects={pineddProjects} />
        <div className="flex flex-col">
          <div className="font-bold text-lg text-gray-500 dark:text-slate-400 flex flex-row items-center gap-3">
            <h2 className="relative select-text selection:bg-slate-500">
              Other Projects
              <span className="absolute dark:shadow-[0_0_40px_10px] dark:shadow-slate-500/50 left-0 bottom-[15px] w-full -z-100 transition-all"></span>
            </h2>
          </div>
        </div>
        <CardProjects projects={UnpinedProjects} />
      </div>
    </section>
  )
}

export default Projects
