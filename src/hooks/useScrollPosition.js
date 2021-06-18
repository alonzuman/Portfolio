import { useEffect, useState } from "react"

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window?.scrollY)
  }

  useEffect(() => {
    const listener = () => window.addEventListener('scroll', handleScroll, false)

    listener()
    return () => window.removeEventListener('scroll', handleScroll, false)
  }, [])

  return { scrollY }
}
