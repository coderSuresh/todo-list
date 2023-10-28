'use client'
import React from 'react'

const Form = () => {

    const [todo, setTodo] = React.useState('')
    const [todos, setTodos] = React.useState<TodoType[]>([])

    React.useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
    }, [])

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
                className="w-full py-2 focus:outline-none"
            />
        </form>
    )
}

export default Form