import Header from '@/components/HomePage/Header'
import Main from '@/components/HomePage/Main'
import FollowerMouse from '@/components/FollowerMouse'
import Footer from '@/components/HomePage/Footer'

function Home() {
  return (
    <>
      <FollowerMouse />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home
