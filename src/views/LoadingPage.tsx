import React from 'react'

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingPage
