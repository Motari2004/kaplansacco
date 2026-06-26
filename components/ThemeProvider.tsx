'use client'

import { theme } from '@/lib/theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // You can add logic here to switch between themes
  return <>{children}</>
}

// Helper hooks for using theme
export function useTheme() {
  return theme
}