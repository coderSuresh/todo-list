import React from 'react'
import ClearAllCompletedBtn from './ClearAllCompletedBtn'

const ListControls = ({ len, todos }: ListControlProps) => {

    return (
        <div className='flex px-5 py-2 justify-between items-center text-sm text-grayish-text'>

            <div>
                <p>{len} items left</p>
            </div>

            <div className='flex md:w-fit gap-3 font-bold md:mt-0 md:static absolute mt-36 md:shadow-none shadow-md w-[calc(100%-40px)] left-5 right-5 rounded-md bg-card-bg md:py-0 py-4 px-5 justify-center'>
                <button className='text-bright-blue hover:text-text-hovered'>All</button>
                <button className='hover:text-text-hovered'>Active</button>
                <button className='hover:text-text-hovered'>Completed</button>
            </div>

            <div>
                <ClearAllCompletedBtn todos={todos} />
            </div>

        </div>
    )
}

export default ListControls