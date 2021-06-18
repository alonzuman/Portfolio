import { useEffect, useState } from "react"
import Constants from "../constants"

export default function useLocalTheme() {
  const [_theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = window?.localStorage.getItem('theme')

    if (!localTheme) {
      setTheme(localTheme)
    } else {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const localTheme = window?.localStorage?.getItem('theme')
    const newVal = localTheme === 'light' ? 'dark' : 'light'

    window?.localStorage.setItem('theme', newVal)
    setTheme(newVal)
  }

  return { theme: Constants.Themes?.['dark'], toggleTheme }
}
