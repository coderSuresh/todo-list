import React from 'react'

const ListControls = () => {
    return (
        <div className='flex px-5 py-2 justify-between items-center text-sm text-grayish-text'>

            <div>
                <p>5 items left</p>
            </div>

            <div className='flex md:w-fit w-full gap-3 font-bold md:static absolute -bottom-16 left-0 right-0 rounded-md bg-card-bg py-2 px-5 justify-center'>
                <button className='text-bright-blue hover:text-text-hovered'>All</button>
                <button className='hover:text-text-hovered'>Active</button>
                <button className='hover:text-text-hovered'>Completed</button>
            </div>

            <div>
                <button className='hover:text-text-hovered'>
                    Clear Completed
                </button>
            </div>

        </div>
    )
}

export default ListControls