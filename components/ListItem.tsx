'use client'
import React from 'react'
import Image from 'next/image'
import { TodoContext } from '@/context/TodoContext'

const ListItem = ({ id, content, completed, todos }: ListItemProps) => {

  const { setIsManipulated } = React.useContext(TodoContext)

  const handleChange = () => {
    const todo = todos.find(todo => todo.id === Number(id))
    todo!.completed = !todo?.completed
    localStorage.setItem('todos', JSON.stringify(todos))
    setIsManipulated(true)
  }

  const deleteItem = () => {
    const newTodos = todos.filter(todo => todo.id !== Number(id))
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setIsManipulated(true)
  }

  return (
    <>
      <div className="todo_item flex items-center justify-between w-full group px-5 py-2 relative">
        <div className='flex items-center w-full'>
          <input
            onChange={handleChange}
            id={id}
            type="checkbox"
            checked={completed}
            className="todo_checkbox appearance-none h-0 cursor-pointer
                before:h-6 before:w-6 before:rounded-full
                before:border before:border-divider
                before:absolute before:top-1/2 before:-translate-y-1/2 mr-8
                before:checked:bg-check-bg before:checked:group-hover:border-divider
                before:checked:content-tick before:z-20
                group-hover:before:border-transparent group-hover:bg-transparent
                before:flex before:items-center before:justify-center
               "
          />

          <div
            className="z-10 absolute top-1/2 -translate-y-1/2
                flex items-center justify-center
                before:hidden before:border
                bg-card-bg w-[23px] h-[23px] rounded-full
                before:border-transparent
                before:absolute before:h-[21px] before:w-[21px] before:z-20 before:bg-card-bg before:rounded-full
                group-hover:bg-check-bg group-hover:before:block
                "
          />

          <label htmlFor={id} className="todo_content flex-1 cursor-pointer">
            {content}
          </label>
        </div>

        <button onClick={deleteItem} className="group-hover:block hidden" aria-label="delete todo item">
          <Image src='/images/icon-cross.svg' height={15} width={15} alt="" />
        </button>

      </div>

      <hr className="my-2" />
    </>
  )
}

export default ListItem