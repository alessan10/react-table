import React from 'react'

export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column
    return (
        <div className="search">
            <span>
            Search: {''}
            <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
        </div>
        
    )
}