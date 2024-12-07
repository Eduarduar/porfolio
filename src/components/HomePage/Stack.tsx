import LoadingIcon from '@/components/Base/LoadingIcon'
// import Lucide from '@/components/Base/Lucide'
// import Button from '@/components/Base/Button'
import Tippy from '@/components/Base/Tippy'
import { stackInfo } from '@/stores/stackInfo'

function Stack() {
  return (
    <section className="w-full" data-aos="fade-up" data-aos-delay="300">
      <header className="font-bold text-2xl text-[#a74bcc] dark:text-[#cf56ff] mb-6 flex flex-row items-center gap-3">
        <h2>My Stack</h2>
        <div className="py-2 px-2 flex items-center gap-4 outline-none border-none relative">
          <Tippy content="OwO">
            <LoadingIcon icon="ball-triangle" className="w-8 h-8" />
          </Tippy>
          <span className="absolute dark:shadow-[0_0_40px_20px_rgba(181,77,225,0.5)] left-[18px] -z-100 transition-all"></span>
        </div>
      </header>

      <div className="grid grid-cols-6 gap-y-5">
        {stackInfo.map((stack) => (
          <div
            key={stack.name}
            className="col-span-3 sm:col-span-2 md:col-span-1 flex flex-col items-center gap-2 group/tech"
          >
            <img
              src={stack.icon}
              alt={stack.name}
              className="w-20 h-20 group-hover/tech:scale-110 transition-all filter dark:drop-shadow-[0_0_10px_rgba(181,77,225,0.4)] drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            />
            <p className="text-center text-slate-900 dark:text-white relative md:opacity-0 md:translate-y-2 group-hover/tech:translate-y-0 group-hover/tech:opacity-100 transition-all duration-500">
              {stack.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
