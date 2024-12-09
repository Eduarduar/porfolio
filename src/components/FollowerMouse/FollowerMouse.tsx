import { useEffect, useState } from 'react'

interface Position {
  x: number
  y: number
}

function FollowerMouse() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX = clientX
      mouseY = clientY
      setPosition({ x: clientX + window.scrollX, y: clientY + window.scrollY })
    }

    const handleScroll = () => {
      setPosition({ x: mouseX + window.scrollX, y: mouseY + window.scrollY })
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className="hidden md:block absolute rounded-full opacity-40 pointer-events-none -top-1 -left-1 dark:shadow-[0_0_100px_50px_rgba(181,77,225,0.5)] shadow-[0_0_100px_50px_rgba(181,77,225,1)]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </>
  )
}

export default FollowerMouse
