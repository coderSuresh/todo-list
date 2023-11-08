'use client'
import React from 'react'
import Image from 'next/image'
import { initiallySetDarkMode, toggleDarkMode } from '@/utils/toggleDarkMode'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggler = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    const [darkMode, setDarkMode] = React.useState(theme === 'dark')
    const [darkModeIcon, setDarkModeIcon] = React.useState('')

    React.useEffect(() => {
        initiallySetDarkMode(setDarkMode)

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration)
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError)
                })
        }
    }, [])

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
        <button aria-label='toggle dark mode' onClick={() => toggleDarkMode(setDarkMode)}>
            <Image src={darkModeIcon ? darkModeIcon : '/images/icon-moon.svg'} width={30} height={30} alt='dark mode icon' />
        </button>
    )
}

export default DarkModeToggler