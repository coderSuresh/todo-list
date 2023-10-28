'use client'
import React from 'react'

export const AnimationContext = React.createContext({
    animating: [] as string[],
    setAnimating: (animating: string[] ) => { },
})