import { userInfo } from '@/stores/userInfo'
import { socialInfo } from '@/stores/socialInfo'
import { projectsInfo } from '@/stores/projectsInfo'
import Tippy from '@/components/Base/Tippy'

function Footer() {
  return (
    <>
      <footer
        className="bg-slate-300 dark:bg-slate-950 py-12"
        data-astro-transition-scope="astro-tvayyljk-2"
      >
        <div className="mx-auto size-full max-w-4xl px-6 sm:px-8 grid gap-2">
          <div className="flex justify-between">
            <div>
              <span id="currentDate" className="dark:text-slate-200">
                {new Date().getFullYear()}{' '}
              </span>
              <span className="font-accent font-semibold">
                <span className="text-[#a74bcc] dark:text-[#cf56ff]">
                  {userInfo.firstName} {userInfo.lastName}
                </span>
              </span>
            </div>
            <div className="flex gap-4">
              {socialInfo.map((social) => (
                <Tippy key={social.name} content={social.name}>
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
          <p className="text-muted-foreground flex flex-col sm:flex-row gap-2 dark:text-slate-300">
            This portfolio was built width
            <span className="flex flex-row gap-2">
              {projectsInfo
                .filter((project) => project.name == 'This portfolio')[0]
                .techs?.map((tech) => (
                  <Tippy key={tech.name} content={tech.name} options={{ placement: 'bottom' }}>
                    <img src={tech.cdn} alt={tech.name} />
                  </Tippy>
                ))}
            </span>
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Eduarduar/portfolio"
            role="link"
            aria-label="Opens in a new tab"
            className="group w-fit items-center justify-between gap-[2px] transition hover:text-[#cf56ff] group-hover:text-accent active:scale-95 inline-flex text-muted-foreground text-slate-400"
          >
            View source code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-2 transition-transform group-hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
