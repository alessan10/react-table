import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <div className="search">
            <span>
            Search: {''}
            <input className="textinput" value={filter || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
        </div>
        
    )
}