'use client'

import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const switchTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <button
      type="button"
      className="outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-2 py-2"
      onClick={switchTheme}
      aria-label="theme switch"
    >
      <Icon icon="solar:sun-2-outline" fontSize={24} className="dark:hidden block" />
      <Icon icon="solar:moon-outline" fontSize={24} className="hidden dark:block" />
    </button>
  )
}
