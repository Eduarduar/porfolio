import Hero from '@/components/HomePage/Hero'
import About from '@/components/HomePage/About'
import Projects from '@/components/HomePage/Projects'
import Email from '@/components/HomePage/Email'
import Stack from '@/components/HomePage/Stack'

function Main() {
  return (
    <div
      className="mx-auto max-w-3xl px-5 flex flex-col gap-10"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Hero />
      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"></hr>
      <About />
      <Projects />
      <Stack />
      <Email />
    </div>
  )
}

export default Main
