'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // evita erro de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        fixed top-6 right-6 z-50
        px-4 py-2 rounded-full
        backdrop-blur-md
        shadow-lg
        transition-all duration-300
        bg-white/80 text-zinc-900
        dark:bg-zinc-800/80 dark:text-white
        hover:scale-105
      "
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
