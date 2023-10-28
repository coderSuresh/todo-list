'use client'
import React from 'react'
import { AnimationContext } from '@/context/AnimationContext'

const AnimationProvider = ({ children }: ChildrenProps) => {

    const [animating, setAnimating] = React.useState<string[]>([])

    return (
        <AnimationContext.Provider value={{ animating, setAnimating }}>
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationProvider