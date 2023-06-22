'use client'

import React, { createContext, useState } from 'react'

type ThemeContextModeType = 'light' | 'dark'

type ThemeContextType = {
  toggle: () => void;
  mode: ThemeContextModeType;
}

export const ThemeContext = createContext<ThemeContextType>({
  toggle: () => {},
  mode: 'dark',
})

export default function ThemeProvider({
  children,
}:{
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<ThemeContextModeType>('dark')

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
