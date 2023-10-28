'use client'
import React from 'react'
import { FilterContext } from '@/context/FilterContext'

const FilterProvider = ({ children }: ChildrenProps) => {

    const [filter, setFilter] = React.useState('all')

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider