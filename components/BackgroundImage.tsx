'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'

const BackgroundImage = () => {

    const { theme } = React.useContext(ThemeContext)

    const [bgImg, setBgImg] = React.useState('bg-mobile-light')

    React.useEffect(() => {
        if (theme === 'dark') {
            setBgImg('bg-mobile-dark')
        } else {
            setBgImg('bg-mobile-light')
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