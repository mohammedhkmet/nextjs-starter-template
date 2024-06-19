'use client'

import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      type="button"
      className="outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-2 py-2"
      onClick={switchTheme}
      aria-label="theme switch"
    >
      <Icon icon="mdi:theme-light-dark" fontSize={24} />
    </button>
  )
}
