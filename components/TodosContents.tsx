'use client'
import React from 'react'
import ListItem from './ListItem'
import ListControls from './ListControls'

const TodosContainer = () => {

    const [todos, setTodos] = React.useState<TodoType[]>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
        setLoading(false)
    }, [])

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
                        <ListControls />
                    </div>
            }
        </>
    )
}

export default TodosContainer