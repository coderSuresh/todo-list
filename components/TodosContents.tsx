'use client'
import React from 'react'
import ListItem from './ListItem'
import ListControls from './ListControls'
import { TodoContext } from '@/context/TodoContext'

const TodosContainer = () => {

    const [todos, setTodos] = React.useState<TodoType[]>([])
    const [loading, setLoading] = React.useState(true)

    const { isManipulated, setIsManipulated } = React.useContext(TodoContext)

    React.useEffect(() => {
        setIsManipulated(false)
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
        setLoading(false)
    }, [isManipulated])

    const renderTodos = () => {

        if (todos.length <= 0) {
            return <p className="text-center text-grayish-text my-10">Nothing to do for now.</p>
        }

        return todos.map(todo => {
            return (
                <ListItem
                    key={todo.id}
                    id={todo.id.toString()}
                    content={todo.content}
                    completed={todo.completed}
                    todos={todos}
                />
            )
        })
    }

    return (
        <>
            {
                loading ?
                    <div className="bg-card-bg rounded-md h-48 transition-all mt-8 mb-10" >
                        <div className="animate-pulse bg-grayish-text h-full rounded-md" />
                    </div>
                    :
                    <div className="bg-card-bg rounded-md transition-all shadow-md py-2 mt-8 mb-10" >
                        {renderTodos()}
                        <ListControls len={todos.filter(todo => !todo.completed).length} />
                    </div>
            }
        </>
    )
}

export default TodosContainer