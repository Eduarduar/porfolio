import React from 'react'
import Header from '@/components/HomePage/Header'
import Main from '@/components/HomePage/Main'

const Home: React.FC = () => {
  return (
    <div className="bg-slate-200 dark:bg-gray-900 min-h-[500vh]">
      <Header />
      <Main />
    </div>
  )
}

export default Home
