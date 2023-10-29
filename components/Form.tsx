'use client'
import { TodoContext } from '@/context/TodoContext'
import React from 'react'

const Form = () => {

    const [todo, setTodo] = React.useState('')
    const [todos, setTodos] = React.useState<TodoType[]>([])

    const { isManipulated, setIsManipulated } = React.useContext(TodoContext)

    React.useEffect(() => {
        setIsManipulated(false)
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
    }, [isManipulated])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (todo.trim() === '') return

        const newTodo = {
            id: Date.now(),
            content: todo,
            completed: false
        } as TodoType

        todos.unshift(newTodo)
        localStorage.setItem('todos', JSON.stringify(todos))
        setIsManipulated(true)

        setTodo('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center relative">
            <div
                className="mr-2 w-6 h-6 aspect-square rounded-full border border-divider"
            />
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Create a new todo..."
                className="w-full bg-transparent py-2 focus:outline-none caret-bright-blue"
            />
        </form>
    )
}

export default Form