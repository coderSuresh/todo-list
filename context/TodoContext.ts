'use client'
import React from 'react'

export const TodoContext = React.createContext({
    isManipulated: false,
    setIsManipulated: (isManipulated: boolean) => { },
})