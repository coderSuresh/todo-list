'use client'
import React from 'react'

const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: (theme: string) => {},
})

export { ThemeContext }