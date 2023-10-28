'use client'
import React from 'react'
import { TodoContext } from '@/context/TodoContext'
import { AnimationContext } from '@/context/AnimationContext'

const ClearAllCompletedBtn = ({ todos }: { todos: TodoType[] }) => {

    const { setIsManipulated } = React.useContext(TodoContext)
    const {setAnimating} = React.useContext(AnimationContext)

    const deleteAll = () => {

        const completedTodos = todos.filter(todo => todo.completed)
        setAnimating(completedTodos.map(todo => todo.id.toString()))

        setTimeout(() => {
            const newTodos = todos.filter(todo => !todo.completed)
            localStorage.setItem('todos', JSON.stringify(newTodos))
            setIsManipulated(true)
            setAnimating([])
        }, 500);
    }

    return (
        <button onClick={deleteAll} className='hover:text-text-hovered'>
            Clear Completed
        </button>
    )
}

export default ClearAllCompletedBtn