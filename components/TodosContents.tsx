'use client'
import React from 'react'
import ListItem from './ListItem'
import ListControls from './ListControls'
import { TodoContext } from '@/context/TodoContext'
import { FilterContext } from '@/context/FilterContext'

const TodosContainer = () => {

    const [todos, setTodos] = React.useState<TodoType[]>([])
    const [loading, setLoading] = React.useState(true)
    const [filteredTodos, setFilteredTodos] = React.useState<TodoType[]>([])

    const { isManipulated, setIsManipulated } = React.useContext(TodoContext)
    const { filter, setFilter } = React.useContext(FilterContext)

    React.useEffect(() => {
        setFilter('all')
        setIsManipulated(false)
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
        setLoading(false)
    }, [isManipulated])

    React.useEffect(() => {
        if (filter === 'active') setFilteredTodos(todos.filter(todo => !todo.completed))
        else if (filter === 'completed') setFilteredTodos(todos.filter(todo => todo.completed))
        else setFilteredTodos(todos)
    }, [filter, todos])

    // drag and drop functionality
    const draggedItem = React.useRef(0)
    const dragOverItem = React.useRef(0)

    const handleSort = () => {
        const todosCopy = [...todos]

        const draggedTodo = todosCopy.splice(draggedItem.current, 1)[0]
        todosCopy.splice(dragOverItem.current, 0, draggedTodo)

        setTodos(todosCopy)

        localStorage.setItem('todos', JSON.stringify(todosCopy))

        draggedItem.current = 0
        dragOverItem.current = 0
    }

    const renderTodos = () => {

        if (todos.length <= 0 || filteredTodos.length <= 0) {
            return <p className="text-center text-grayish-text my-10">
                Nothing {filter === 'completed' ? ' is completed yet.' : ' to do today.'}
            </p>
        }

        let todosWithContent = filteredTodos.length > 0 ? filteredTodos : todos as TodoType[]

        return todosWithContent.map((todo, index) => {
            return (
                <ListItem
                    key={todo.id}
                    id={todo.id.toString()}
                    index={index}
                    content={todo.content}
                    completed={todo.completed}
                    todos={todos}
                    handleSort={handleSort}
                    dragOverItem={dragOverItem}
                    draggedItem={draggedItem}
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
                    <div className="bg-card-bg rounded-md transition-all overflow-x-hidden shadow-md py-2 mt-8 mb-10" >
                        {renderTodos()}
                        <ListControls todos={todos} len={todos.filter(todo => !todo.completed).length} />
                    </div>
            }
        </>
    )
}

export default TodosContainer