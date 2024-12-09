import { useState, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useDarkMode } from '@/hooks/useDarkMode'

const GithubActivity = () => {
  const { isDarkMode } = useDarkMode()
  const [blockSize, setBlockSize] = useState(8)
  const [fontSize, setFontSize] = useState(20)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBlockSize(2.5)
        setFontSize(10)
      } else {
        setBlockSize(8)
        setFontSize(16)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Check the size on initial render

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <GitHubCalendar
      username="eduarduar"
      fontSize={fontSize}
      colorScheme={isDarkMode ? 'dark' : 'light'}
      blockSize={blockSize}
      theme={{
        light: ['#cdc3f1', '#9149ff'],
        dark: ['#222e43', '#cf56ff']
      }}
    />
  )
}

export default GithubActivity
