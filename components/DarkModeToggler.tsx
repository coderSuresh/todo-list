'use client'
import React from 'react'
import Image from 'next/image'
import { toggleDarkMode } from '@/utils/toggleDarkMode'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggler = () => {

    const {theme, toggleTheme } = React.useContext(ThemeContext)

    const [darkMode, setDarkMode] = React.useState(false)
    const [darkModeIcon, setDarkModeIcon] = React.useState('/images/icon-sun.svg')

    React.useEffect(() => {
        if (darkMode) {
            setDarkModeIcon('/images/icon-sun.svg')
            toggleTheme('dark')
        } else {
            setDarkModeIcon('/images/icon-moon.svg')
            toggleTheme('light')
        }
    }, [darkMode])

    return (
        <button aria-label='toggle dark mode' onClick={() => toggleDarkMode(darkMode, setDarkMode)}>
            <Image src={darkModeIcon} width={30} height={30} alt='dark mode icon' />
        </button>
    )
}

export default DarkModeToggler