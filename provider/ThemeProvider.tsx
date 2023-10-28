'use client'
import React from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeProvider = ({ children }: ChildrenProps) => {

    const [theme, toggleTheme] = React.useState('light')

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider