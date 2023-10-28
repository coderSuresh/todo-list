'use client'
import React from 'react'
import { TodoContext } from '@/context/TodoContext'

const ClearAllCompletedBtn = ({ todos }: { todos: TodoType[] }) => {

    const { setIsManipulated } = React.useContext(TodoContext)

    const deleteAll = () => {
        const newTodos = todos.filter(todo => !todo.completed)
        localStorage.setItem('todos', JSON.stringify(newTodos))
        setIsManipulated(true)
    }

    return (
        <button onClick={deleteAll} className='hover:text-text-hovered'>
            Clear Completed
        </button>
    )
}

export default ClearAllCompletedBtn