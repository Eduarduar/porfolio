import React from 'react'
import Header from '@/components/HomePage/Header'
import Main from '@/components/HomePage/Main'
import FollowerMouse from '@/components/FollowerMouse'
// import NotificationDevelop from '@/components/NotificationDevelop'

const Home: React.FC = () => {
  return (
    <>
      {/* <NotificationDevelop /> */}
      <FollowerMouse />
      <Header />
      <Main />
    </>
  )
}

export default Home
