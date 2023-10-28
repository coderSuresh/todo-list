'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'

const BackgroundImage = () => {

    const { theme } = React.useContext(ThemeContext)

    const bgImg = `md:bg-desktop-${theme} bg-mobile-${theme}`

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-0 ${bgImg} 
                bg-no-repeat bg-cover w-full 
                md:h-72 h-60`}
        />
    )
}

export default BackgroundImage