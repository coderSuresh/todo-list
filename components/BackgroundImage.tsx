'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'

const BackgroundImage = () => {

    const { theme } = React.useContext(ThemeContext)

    const [bgImg, setBgImg] = React.useState('md:bg-desktop-light bg-mobile-light')

    React.useEffect(() => {
        if (theme === 'dark') {
            setBgImg('md:bg-desktop-dark bg-mobile-dark')
        } else {
            setBgImg('md:bg-desktop-light bg-mobile-light')
        }
    }, [theme])

    return (
        <div
            className={`fixed ${bgImg} 
                bg-no-repeat bg-cover w-full 
                md:h-72 h-60`}
        />
    )
}

export default BackgroundImage