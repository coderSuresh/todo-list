'use client'
import React from 'react'
import { TodoContext } from '@/context/TodoContext'

const TodoProvider = ({ children }: ChildrenProps) => {

    const [isManipulated, setIsManipulated] = React.useState(false)

    return (
        <TodoContext.Provider value={{ isManipulated, setIsManipulated }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider