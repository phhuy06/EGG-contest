import { useEffect, useState } from 'react'

export const useIsMobile = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleSize)

    handleSize()

    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [windowSize])

  return { isMobile }
}
