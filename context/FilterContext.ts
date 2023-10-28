'use client'
import React from 'react'

export const FilterContext = React.createContext({
  filter: 'all',
  setFilter: (filter: string) => {},
})