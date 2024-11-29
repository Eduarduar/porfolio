import { Link } from 'react-router-dom'
import Lucide from '@/components/Base/Lucide'
import Button from '@/components/Base/Button'

function NotFound() {
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <header className="font-bold text-4xl text-[#a74bcc] dark:text-[#cf56ff] mb-6 flex flex-row items-center gap-3">
        <h2>Page Not Found</h2>
        <div className="py-2 px-2 flex items-center gap-4 outline-none border-none relative">
          <Lucide icon="AlertTriangle" className="w-8 h-8" />
          <span className="absolute dark:shadow-[0_0_40px_20px_rgba(181,77,225,0.5)] left-[22px] -z-100 transition-all"></span>
        </div>
      </header>

      <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Button
        as={Link}
        to="/"
        elevated
        variant="soft-primary"
        className="flex gap-3 sm:gap-0 hover:gap-3 group/buttonLive dark:text-slate-200 border-none"
      >
        <span className="sm:w-0 sm:overflow-hidden sm:group-hover/buttonLive:w-[100px] transition-all text-nowrap">
          Go Home
        </span>
        <Lucide icon="Home" className="w-6 h-6" />
      </Button>
    </section>
  )
}

export default NotFound
